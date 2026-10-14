import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { DiagramDef, DNode, DEdge, FlowKind, NodeKind } from "../../data/presentation/types";
import { useLang } from "../LanguageContext";

// Real rendered SVG architecture diagram. Layout is a simple column/row grid
// declared in the data (so each candidate has its own diagram); nothing here
// invents components - it only draws what DiagramDef declares.

const W = 206;
const H = 92;
const GX = 76;
const GY = 44;
const PAD = 30;

export const NODE_STYLE: Record<NodeKind, { stroke: string; fill: string; dash?: string; en: string; bn: string }> = {
  owner: { stroke: "#f0c46c", fill: "#2a2415", dash: "5 3", en: "Owner-controlled", bn: "মালিক-নিয়ন্ত্রিত" },
  agent: { stroke: "#6ad7e5", fill: "#0d2a30", en: "AI-controlled", bn: "এআই-নিয়ন্ত্রিত" },
  external: { stroke: "#9aa3b6", fill: "#161a24", dash: "2 3", en: "External / untrusted data", bn: "বাহ্যিক / অবিশ্বস্ত ডেটা" },
  policy: { stroke: "#22c55e", fill: "#0f2417", en: "Deterministic policy enforcement", bn: "নির্ধারিত নীতি প্রয়োগ" },
  wallet: { stroke: "#60a5fa", fill: "#101d33", en: "Wallet / smart account", bn: "ওয়ালেট / স্মার্ট অ্যাকাউন্ট" },
  signer: { stroke: "#fb923c", fill: "#2b1a0e", en: "Protected signing", bn: "সুরক্ষিত স্বাক্ষর" },
  contract: { stroke: "#a78bfa", fill: "#1d1733", en: "Smart contract / module", bn: "স্মার্ট কন্ট্রাক্ট / মডিউল" },
  chain: { stroke: "#cbd1dc", fill: "#1b202c", en: "Blockchain execution", bn: "ব্লকচেইন এক্সিকিউশন" },
  audit: { stroke: "#f472b6", fill: "#2a1220", en: "Audit / verification", bn: "অডিট / যাচাই" },
};

export const FLOW_STYLE: Record<FlowKind, { color: string; dash?: string; en: string; bn: string }> = {
  data: { color: "#6ad7e5", en: "Data flow", bn: "ডেটা প্রবাহ" },
  auth: { color: "#f0c46c", en: "Authorization flow", bn: "অনুমোদন প্রবাহ" },
  tx: { color: "#22c55e", en: "Transaction flow", bn: "লেনদেন প্রবাহ" },
  funds: { color: "#a78bfa", en: "Asset movement", bn: "সম্পদ স্থানান্তর" },
  block: { color: "#f87171", dash: "6 4", en: "No authority (blocked)", bn: "কোনো কর্তৃত্ব নেই (বন্ধ)" },
};

const ZONE_STYLE = {
  untrusted: { fill: "rgba(106,215,229,0.06)", stroke: "rgba(106,215,229,0.35)", en: "", bn: "" },
  enforced: { fill: "rgba(34,197,94,0.06)", stroke: "rgba(34,197,94,0.35)", en: "", bn: "" },
  owner: { fill: "rgba(240,196,108,0.06)", stroke: "rgba(240,196,108,0.35)", en: "", bn: "" },
};

interface Pt {
  x: number;
  y: number;
}

function nodeXY(n: DNode): Pt {
  return { x: PAD + n.col * (W + GX), y: PAD + n.row * (H + GY) };
}

interface Geo {
  edge: DEdge;
  index: number;
  d: string;
  label: Pt;
}

function layoutEdges(def: DiagramDef): Geo[] {
  const byId = new Map(def.nodes.map((n) => [n.id, n]));
  // Spread edges that share a node side so they do not stack on one point.
  const sideCount = new Map<string, number>();
  const sideSeen = new Map<string, number>();
  const dirOf = (from: DNode, to: DNode): "R" | "L" | "B" | "T" =>
    to.col > from.col ? "R" : to.col < from.col ? "L" : to.row > from.row ? "B" : "T";
  const keys: { out: string; inn: string }[] = def.edges.map((e) => {
    const a = byId.get(e.from)!;
    const bN = byId.get(e.to)!;
    return { out: `${a.id}:${dirOf(a, bN)}`, inn: `${bN.id}:${dirOf(bN, a)}` };
  });
  keys.forEach((k) => {
    sideCount.set(k.out, (sideCount.get(k.out) ?? 0) + 1);
    sideCount.set(k.inn, (sideCount.get(k.inn) ?? 0) + 1);
  });
  const spread = (key: string): number => {
    const n = sideCount.get(key) ?? 1;
    const i = sideSeen.get(key) ?? 0;
    sideSeen.set(key, i + 1);
    return (i - (n - 1) / 2) * 12;
  };

  const pairTotal = new Map<string, number>();
  const pairSeen = new Map<string, number>();
  const pairKey = (e: DEdge) => [e.from, e.to].sort().join("|");
  def.edges.forEach((e) => pairTotal.set(pairKey(e), (pairTotal.get(pairKey(e)) ?? 0) + 1));

  return def.edges.map((e, index) => {
    const a = byId.get(e.from)!;
    const bN = byId.get(e.to)!;
    const pk = pairKey(e);
    const pn = pairTotal.get(pk) ?? 1;
    const pi = pairSeen.get(pk) ?? 0;
    pairSeen.set(pk, pi + 1);
    const pa = nodeXY(a);
    const pb = nodeXY(bN);
    const so = spread(keys[index].out);
    const si = spread(keys[index].inn);
    let s: Pt;
    let t: Pt;
    let c1: Pt;
    let c2: Pt;
    if (bN.col !== a.col) {
      const right = bN.col > a.col;
      s = { x: right ? pa.x + W : pa.x, y: pa.y + H / 2 + so };
      t = { x: right ? pb.x : pb.x + W, y: pb.y + H / 2 + si };
      const dx = Math.max(40, Math.abs(t.x - s.x) * 0.5);
      c1 = { x: s.x + (right ? dx : -dx), y: s.y };
      c2 = { x: t.x + (right ? -dx : dx), y: t.y };
    } else {
      const down = bN.row > a.row;
      s = { x: pa.x + W / 2 + so, y: down ? pa.y + H : pa.y };
      t = { x: pb.x + W / 2 + si, y: down ? pb.y : pb.y + H };
      const dy = Math.max(24, Math.abs(t.y - s.y) * 0.5);
      c1 = { x: s.x, y: s.y + (down ? dy : -dy) };
      c2 = { x: t.x, y: t.y + (down ? -dy : dy) };
    }
    const mid: Pt = {
      x: 0.125 * s.x + 0.375 * c1.x + 0.375 * c2.x + 0.125 * t.x,
      y: 0.125 * s.y + 0.375 * c1.y + 0.375 * c2.y + 0.125 * t.y,
    };
    mid.y += (pi - (pn - 1) / 2) * 24;
    return {
      edge: e,
      index,
      d: `M ${s.x} ${s.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${t.x} ${t.y}`,
      label: mid,
    };
  });
}

export interface Highlight {
  nodes?: string[];
}

interface DiagramViewProps {
  def: DiagramDef;
  highlight?: Highlight;
  onEvidence?: () => void;
  compact?: boolean;
}

export function DiagramView({ def, highlight, onEvidence, compact }: DiagramViewProps) {
  const { lang } = useLang();
  const bn = lang === "bn";
  const pick = (v: { en: string; bn: string }) => (bn ? v.bn : v.en);
  const [full, setFull] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [fitted, setFitted] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  const geo = useMemo(() => layoutEdges(def), [def]);
  const maxCol = Math.max(...def.nodes.map((n) => n.col));
  const maxRow = Math.max(...def.nodes.map((n) => n.row));
  const width = PAD * 2 + (maxCol + 1) * W + maxCol * GX;
  const height = PAD * 2 + (maxRow + 1) * H + maxRow * GY;
  const hl = highlight?.nodes && highlight.nodes.length > 0 ? new Set(highlight.nodes) : null;

  const fit = useCallback(() => {
    const el = boxRef.current;
    if (!el) return;
    const avail = el.clientWidth;
    if (avail <= 0) return;
    // Do not shrink below a readable scale on narrow screens; the box scrolls instead.
    const floor = avail < 640 ? 0.8 : 0.62;
    const z = Math.min(1.25, Math.max(floor, avail / width));
    setZoom(Number(z.toFixed(2)));
    setFitted(true);
  }, [width]);

  useLayoutEffect(() => {
    fit();
  }, [fit, full]);

  useEffect(() => {
    const onResize = () => {
      if (fitted) fit();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fit, fitted]);

  useEffect(() => {
    if (!full) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFull(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full]);

  const kindsUsed = Array.from(new Set(def.nodes.map((n) => n.kind)));
  const flowsUsed = Array.from(new Set(def.edges.map((e) => e.kind)));
  const byId = new Map(def.nodes.map((n) => [n.id, n]));

  const btn =
    "px-2 py-1 rounded border border-ink-700 hover:border-accent-500/60 text-ink-100 text-xs disabled:opacity-40";

  const svg = (
    <svg
      role="img"
      aria-label={pick(def.title)}
      width={width * zoom}
      height={height * zoom}
      viewBox={`0 0 ${width} ${height}`}
      className="block"
    >
      <title>{pick(def.title)}</title>
      <defs>
        {(Object.keys(FLOW_STYLE) as FlowKind[]).map((k) => (
          <marker
            key={k}
            id={`arrow-${def.id}-${k}`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={FLOW_STYLE[k].color} />
          </marker>
        ))}
      </defs>

      {def.zones?.map((z, i) => {
        const x = PAD + z.col0 * (W + GX) - 14;
        const y = PAD + z.row0 * (H + GY) - 26;
        const w = (z.col1 - z.col0 + 1) * W + (z.col1 - z.col0) * GX + 28;
        const h = (z.row1 - z.row0 + 1) * H + (z.row1 - z.row0) * GY + 40;
        const st = ZONE_STYLE[z.tone];
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx={14} fill={st.fill} stroke={st.stroke} strokeDasharray="6 5" />
            <text x={x + 10} y={y + 14} fontSize={10} fill={st.stroke} style={{ letterSpacing: "0.12em" }}>
              {pick(z.label).toUpperCase()}
            </text>
          </g>
        );
      })}

      {geo.map((g) => {
        const st = FLOW_STYLE[g.edge.kind];
        const dim = hl && !(hl.has(g.edge.from) && hl.has(g.edge.to));
        const label = g.edge.label ? pick(g.edge.label) : "";
        const lw = Math.min(250, label.length * 5.6 + 12);
        return (
          <g key={g.index} opacity={dim ? 0.25 : 1}>
            <path
              d={g.d}
              fill="none"
              stroke={st.color}
              strokeWidth={dim ? 1.2 : 1.8}
              strokeDasharray={st.dash}
              markerEnd={`url(#arrow-${def.id}-${g.edge.kind})`}
            />
          </g>
        );
      })}

      {def.nodes.map((n) => {
        const { x, y } = nodeXY(n);
        const st = NODE_STYLE[n.kind];
        const dim = hl && !hl.has(n.id);
        const on = hl?.has(n.id);
        return (
          <g key={n.id} opacity={dim ? 0.42 : 1}>
            <rect
              x={x}
              y={y}
              width={W}
              height={H}
              rx={10}
              fill={st.fill}
              stroke={st.stroke}
              strokeWidth={on ? 2.6 : 1.4}
              strokeDasharray={st.dash}
            />
            <foreignObject x={x + 6} y={y + 4} width={W - 12} height={H - 8}>
              <div
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {...({ xmlns: "http://www.w3.org/1999/xhtml" } as any)}
                style={{
                  color: "#f5f6f8",
                  fontFamily: bn ? "var(--font-bn, 'Noto Sans Bengali', system-ui)" : "inherit",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.2 }}>{pick(n.label)}</div>
                {n.sub && (
                  <div style={{ fontSize: 10, color: "#cbd1dc", lineHeight: 1.25, marginTop: 3 }}>{pick(n.sub)}</div>
                )}
              </div>
            </foreignObject>
          </g>
        );
      })}
      {geo.map((g) => {
        if (!g.edge.label) return null;
        const st = FLOW_STYLE[g.edge.kind];
        const dim = hl && !(hl.has(g.edge.from) && hl.has(g.edge.to));
        const label = pick(g.edge.label);
        const lw = Math.min(250, label.length * 5.6 + 12);
        return (
          <g key={`l${g.index}`} opacity={dim ? 0.35 : 1}>
            <rect x={g.label.x - lw / 2} y={g.label.y - 9} width={lw} height={18} rx={4} fill="#06080d" stroke={st.color} strokeOpacity={0.5} />
            <text x={g.label.x} y={g.label.y + 4} fontSize={10} textAnchor="middle" fill="#e8eaef">
              {label.length > 44 ? label.slice(0, 43) + "…" : label}
            </text>
          </g>
        );
      })}
    </svg>
  );

  const header = (
    <div className="flex flex-wrap items-start justify-between gap-2 px-4 py-3 border-b border-ink-800 bg-ink-950/60">
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.18em] text-accent-400">
          {bn ? "আর্কিটেকচার ডায়াগ্রাম — উৎস-ভিত্তিক ব্যাখ্যা" : "Architecture diagram — source-grounded interpretation"}
        </div>
        <div className={`text-sm font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{pick(def.title)}</div>
        {def.status && (
          <div className={`mt-1 inline-block text-[11px] px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-300 ${bn ? "font-bn" : ""}`}>
            {pick(def.status)}
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-1.5" role="toolbar" aria-label="Diagram controls">
        <button className={btn} onClick={() => { setFitted(false); setZoom((z) => Math.max(0.4, Number((z - 0.15).toFixed(2)))); }} aria-label="Zoom out">−</button>
        <span className="code-like text-[11px] text-ink-300 w-10 text-center">{Math.round(zoom * 100)}%</span>
        <button className={btn} onClick={() => { setFitted(false); setZoom((z) => Math.min(2.2, Number((z + 0.15).toFixed(2)))); }} aria-label="Zoom in">+</button>
        <button className={btn} onClick={fit}>{bn ? "ফিট" : "Fit"}</button>
        <button className={btn} onClick={() => { setFitted(false); setZoom(1); }}>100%</button>
        <button className={btn} onClick={() => setFull((f) => !f)} aria-pressed={full}>
          {full ? (bn ? "বন্ধ করুন" : "Close") : bn ? "ফুল-স্ক্রিন" : "Full screen"}
        </button>
        {onEvidence && (
          <button className={btn} onClick={onEvidence}>{bn ? "উৎস প্রমাণ" : "Source evidence"}</button>
        )}
      </div>
    </div>
  );

  const legend = (
    <div className="px-4 py-3 border-t border-ink-800 bg-ink-950/40 space-y-2">
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {kindsUsed.map((k) => (
          <span key={k} className={`inline-flex items-center gap-1.5 text-[11px] text-ink-200 ${bn ? "font-bn" : ""}`}>
            <span
              className="inline-block w-3.5 h-3.5 rounded-sm"
              style={{ border: `1.5px ${NODE_STYLE[k].dash ? "dashed" : "solid"} ${NODE_STYLE[k].stroke}`, background: NODE_STYLE[k].fill }}
            />
            {bn ? NODE_STYLE[k].bn : NODE_STYLE[k].en}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {flowsUsed.map((k) => (
          <span key={k} className={`inline-flex items-center gap-1.5 text-[11px] text-ink-200 ${bn ? "font-bn" : ""}`}>
            <svg width="22" height="8" aria-hidden>
              <line x1="0" y1="4" x2="22" y2="4" stroke={FLOW_STYLE[k].color} strokeWidth="2" strokeDasharray={FLOW_STYLE[k].dash} />
            </svg>
            {bn ? FLOW_STYLE[k].bn : FLOW_STYLE[k].en}
          </span>
        ))}
      </div>
      <p className={`text-[11px] text-ink-300 leading-relaxed ${bn ? "font-bn" : ""}`}>{pick(def.caption)}</p>
      <details className="text-[11px] text-ink-200">
        <summary className="cursor-pointer text-ink-300">{bn ? "তালিকা আকারে পড়ুন" : "Read as a list"}</summary>
        <ul className={`mt-2 space-y-1 list-disc list-inside ${bn ? "font-bn" : ""}`}>
          {def.edges.map((e, i) => (
            <li key={i}>
              {pick(byId.get(e.from)!.label)} → {pick(byId.get(e.to)!.label)}
              {e.label ? ` — ${pick(e.label)}` : ""} ({bn ? FLOW_STYLE[e.kind].bn : FLOW_STYLE[e.kind].en})
            </li>
          ))}
        </ul>
      </details>
    </div>
  );

  const body = (
    <div
      ref={boxRef}
      className={`overflow-auto bg-ink-950/50 ${full ? "flex-1" : compact ? "max-h-[820px]" : "max-h-[820px]"}`}
      data-testid="diagram-scroll"
    >
      {svg}
    </div>
  );

  if (full) {
    return (
      <div className="fixed inset-0 z-50 bg-ink-950 flex flex-col" role="dialog" aria-modal="true" aria-label={pick(def.title)}>
        {header}
        {body}
        {legend}
      </div>
    );
  }
  return (
    <figure className="rounded-xl border border-ink-800 bg-ink-900/40 overflow-hidden m-0" data-testid={`diagram-${def.id}`}>
      {header}
      {body}
      {legend}
    </figure>
  );
}
