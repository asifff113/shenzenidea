import type { Candidate } from "../data";
import { GateBadge, DecisionBadge, PrototypeBadge } from "./Badges";
import { useLang } from "./LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";

// Visual overview of the ranked shortlist. Every candidate string shown here
// (id, name, gate, decision, scores) comes straight from the candidate
// records; only the section labels are UI text.

const SCALE_MIN = 40;
const SCALE_MAX = 100;

function range(c: Candidate): [number, number] | null {
  const m = c.layerBAndRange.match(/(\d+)\D+(\d+)/);
  return m ? [Number(m[1]), Number(m[2])] : null;
}

function pct(v: number): number {
  return Math.min(100, Math.max(0, ((v - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100));
}

function gateTone(gate: string): string {
  if (gate === "PASS") return "bg-emerald-400";
  if (gate.startsWith("CONDITIONAL")) return "bg-amber-400";
  if (gate.startsWith("FAIL")) return "bg-rose-400";
  return "bg-ink-300";
}

function RangeBar({ c, tall }: { c: Candidate; tall?: boolean }) {
  const r = range(c);
  return (
    <span className={`relative block rounded-full bg-ink-800 ${tall ? "h-2" : "h-1.5"}`}>
      {r && (
        <span
          className={`absolute h-full rounded-full opacity-70 ${gateTone(c.gate)}`}
          style={{ left: `${pct(r[0])}%`, width: `${pct(r[1]) - pct(r[0])}%` }}
        />
      )}
      <span
        className="absolute -top-0.5 h-2.5 w-0.5 bg-ink-50"
        style={{ left: `${pct(c.layerBCentre)}%` }}
      />
    </span>
  );
}

export function TopTenBoard({
  candidates,
  onSelect,
}: {
  candidates: Candidate[];
  onSelect: (id: string) => void;
}) {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  const fontCls = bn ? "font-bn" : "";
  const name = (c: Candidate) => (bn ? fieldBn(c.id, "name", c.name) : c.name);
  const proto = candidates.filter((c) => c.prototypeValidation);
  const others = candidates.filter((c) => !c.prototypeValidation);
  const L = {
    proto: bn ? "প্রোটোটাইপ যাচাইয়ের জন্য নির্বাচিত" : "Selected for prototype validation",
    others: bn ? "র‍্যাঙ্ক করা অন্যান্য শর্টলিস্ট প্রার্থী" : "Other ranked shortlist candidates",
    chart: bn ? "স্কোর রেঞ্জ (এক নজরে)" : "Score ranges at a glance",
    chartNote: bn
      ? "বার = নথিভুক্ত রেঞ্জ, চিহ্ন = কেন্দ্র মান। এগুলো অভ্যন্তরীণ গবেষণা অনুমান, অফিসিয়াল বিচারের ফল নয়।"
      : "Bar = documented range, marker = centre value. These are internal research estimates, not official judging results.",
    open: bn ? "বিস্তারিত দেখুন" : "View details",
  };

  const renderTile = (c: Candidate, hero: boolean) => (
    <button
      key={c.id}
      onClick={() => onSelect(c.id)}
      className={`text-left rounded-xl border p-4 transition hover:-translate-y-0.5 hover:border-accent-500/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
        hero
          ? "border-accent-500/40 bg-gradient-to-b from-accent-500/[0.08] to-transparent"
          : "border-ink-800 bg-ink-900/40"
      }`}
      aria-label={`${c.id} ${c.name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`code-like font-semibold leading-none text-accent-400 ${
            hero ? "text-4xl" : "text-2xl"
          }`}
        >
          {c.rank.toString().padStart(2, "0")}
        </span>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.16em] text-ink-300">
            {t("labels.layerB")}
          </div>
          <div className={`code-like text-ink-50 ${hero ? "text-2xl" : "text-lg"}`}>
            {c.layerBCentre}
          </div>
        </div>
      </div>
      <div className="code-like text-xs text-ink-300 mt-3">{c.id}</div>
      <h3
        className={`font-semibold text-ink-50 leading-snug mt-0.5 ${
          hero ? "text-lg" : "text-sm"
        } ${fontCls}`}
      >
        {name(c)}
      </h3>
      <div className="flex flex-wrap gap-1.5 mt-3">
        <GateBadge gate={c.gate} />
        <DecisionBadge decision={c.decision} />
        {c.prototypeValidation && <PrototypeBadge />}
      </div>
      <div className="mt-3">
        <RangeBar c={c} />
        <div className="code-like text-[11px] text-ink-300 mt-1">{c.layerBAndRange}</div>
      </div>
      <div className={`text-xs text-accent-400 mt-3 ${fontCls}`}>{L.open} →</div>
    </button>
  );

  return (
    <section className="mb-8" aria-label="Top 10 board">
      {proto.length > 0 && (
        <>
          <h2 className={`text-[11px] uppercase tracking-[0.18em] text-accent-400 mb-2 ${fontCls}`}>
            {L.proto}
          </h2>
          <div className="grid gap-3 md:grid-cols-3 mb-6">
            {proto.map((c) => renderTile(c, true))}
          </div>
        </>
      )}
      {others.length > 0 && (
        <>
          <h2 className={`text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2 ${fontCls}`}>
            {L.others}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            {others.map((c) => renderTile(c, false))}
          </div>
        </>
      )}
      <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-4">
        <h2 className={`text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-1 ${fontCls}`}>
          {L.chart}
        </h2>
        <p className={`text-xs text-ink-300 mb-3 ${fontCls}`}>{L.chartNote}</p>
        <ul className="space-y-1.5">
          {candidates.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onSelect(c.id)}
                className="w-full grid grid-cols-[2.5rem_minmax(6rem,11rem)_1fr_5.5rem] items-center gap-3 text-xs hover:bg-ink-800/40 rounded px-1 py-1 text-left"
              >
                <span className="code-like text-ink-300">#{c.rank.toString().padStart(2, "0")}</span>
                <span className="code-like text-ink-100 truncate">{c.id}</span>
                <RangeBar c={c} tall />
                <span className="code-like text-ink-200 text-right">{c.layerBAndRange}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-between code-like text-[10px] text-ink-400 mt-2 ml-[3.5rem] mr-[6.5rem] sm:ml-[14.5rem]">
          <span>{SCALE_MIN}</span>
          <span>{SCALE_MAX}</span>
        </div>
      </div>
    </section>
  );
}
