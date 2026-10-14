import { useState, type ReactNode } from "react";
import type { Candidate } from "../../data";
import { EXPERIMENTS, SECURITY_TIERS, LOSS_FORMULA } from "../../data";
import bnSnapshot from "../../i18n/bn/snapshot.json";
import type {
  Bi,
  CandidatePresentation,
  CaseKey,
  Control,
  InnovationClass,
} from "../../data/presentation/types";
import { useLang } from "../LanguageContext";
import { DiagramView } from "./DiagramView";

export function usePick() {
  const { lang } = useLang();
  const bn = lang === "bn";
  return { bn, p: (v: Bi) => (bn ? v.bn : v.en), s: (en: string, bnText: string) => (bn ? bnText : en) };
}

// ── small primitives ────────────────────────────────────────────────────

export type LayerTag = "presentation" | "illustrative" | "original";

export function LayerBadge({ layer }: { layer: LayerTag }) {
  const { s } = usePick();
  const map = {
    presentation: {
      cls: "border-accent-500/40 text-accent-400 bg-accent-500/10",
      label: s("Presentation explanation", "উপস্থাপনা ব্যাখ্যা"),
    },
    illustrative: {
      cls: "border-amber-500/40 text-amber-300 bg-amber-500/10",
      label: s("Illustrative scenario", "চিত্রণমূলক দৃশ্যকল্প"),
    },
    original: {
      cls: "border-ink-600 text-ink-200 bg-ink-800",
      label: s("Original research record", "মূল গবেষণা রেকর্ড"),
    },
  } as const;
  const m = map[layer];
  return (
    <span className={`inline-block text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded border ${m.cls}`}>
      {m.label}
    </span>
  );
}

export function Panel({
  title,
  layer,
  children,
  onEvidence,
  id,
  tone,
}: {
  title: string;
  layer?: LayerTag;
  children: ReactNode;
  onEvidence?: () => void;
  id?: string;
  tone?: "risk" | "good" | "default";
}) {
  const { bn, s } = usePick();
  const border =
    tone === "risk" ? "border-rose-500/30" : tone === "good" ? "border-emerald-500/30" : "border-ink-800";
  return (
    <section id={id} className={`rounded-xl border ${border} bg-ink-900/40 p-4 sm:p-5 scroll-mt-24`}>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <h3 className={`text-sm font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{title}</h3>
        {layer && <LayerBadge layer={layer} />}
        {onEvidence && (
          <button
            onClick={onEvidence}
            className="ml-auto text-[11px] px-2 py-1 rounded border border-ink-700 hover:border-accent-500/60 text-ink-200"
          >
            {s("Source evidence", "উৎস প্রমাণ")}
          </button>
        )}
      </div>
      {children}
    </section>
  );
}

const CONTROL_STYLE: Record<Control, { cls: string; en: string; bn: string }> = {
  ai: { cls: "border-accent-500/50 text-accent-400 bg-accent-500/10", en: "AI decides", bn: "এআই সিদ্ধান্ত নেয়" },
  deterministic: { cls: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10", en: "Deterministic enforcement", bn: "নির্ধারিত প্রয়োগ" },
  owner: { cls: "border-amber-500/50 text-amber-300 bg-amber-500/10", en: "Owner authorizes", bn: "মালিক অনুমোদন করে" },
  onchain: { cls: "border-slate-400/50 text-slate-200 bg-slate-500/10", en: "Onchain execution", bn: "অনচেইন সম্পাদন" },
  external: { cls: "border-ink-500 text-ink-200 bg-ink-800", en: "External input", bn: "বাহ্যিক ইনপুট" },
  audit: { cls: "border-pink-400/50 text-pink-300 bg-pink-500/10", en: "Verification / audit", bn: "যাচাই / অডিট" },
};

export function ControlTag({ c }: { c: Control }) {
  const { bn } = usePick();
  const st = CONTROL_STYLE[c];
  return (
    <span className={`inline-block text-[10px] px-2 py-0.5 rounded border ${st.cls} ${bn ? "font-bn" : ""}`}>
      {bn ? st.bn : st.en}
    </span>
  );
}

// ── Mode A: Quick Understanding ──────────────────────────────────────────

export function QuickView({
  c,
  pres,
  onEvidence,
}: {
  c: Candidate;
  pres: CandidatePresentation;
  onEvidence: (title: string, fields: (keyof Candidate)[]) => void;
}) {
  const { bn, p, s } = usePick();
  const q = pres.quick;
  const cards: { k: string; title: string; body: Bi; extra?: Bi; tone?: "risk" | "good" }[] = [
    { k: "problem", title: s("1 · The problem", "১ · সমস্যা"), body: q.problem, extra: q.affected },
    { k: "solution", title: s("2 · The solution", "২ · সমাধান"), body: q.solution, extra: q.versusNormal },
    { k: "example", title: s("3 · Real-world example", "৩ · বাস্তব উদাহরণ"), body: q.example },
    { k: "why", title: s("4 · Why it matters", "৪ · কেন গুরুত্বপূর্ণ"), body: q.why, tone: "good" },
    { k: "risk", title: s("5 · Biggest risk", "৫ · সবচেয়ে বড় ঝুঁকি"), body: q.risk, tone: "risk" },
    { k: "decision", title: s("6 · Current decision", "৬ · বর্তমান সিদ্ধান্ত"), body: q.decisionMeaning },
  ];
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-accent-500/30 bg-gradient-to-b from-accent-500/[0.07] to-transparent p-5">
        <div className="text-[10px] uppercase tracking-[0.18em] text-accent-400 mb-1">{p(pres.role)}</div>
        <p className={`text-lg sm:text-xl font-semibold text-ink-50 leading-snug ${bn ? "font-bn" : ""}`}>{p(pres.headline)}</p>
        <p className={`text-sm text-ink-200 mt-2 ${bn ? "font-bn" : ""}`}>{p(pres.keyPoint)}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Panel
            key={card.k}
            title={card.title}
            layer={card.k === "example" && pres.scenario.kind === "illustrative" ? "illustrative" : "presentation"}
            tone={card.tone}
            onEvidence={
              card.k === "problem"
                ? () => onEvidence(s("The problem", "সমস্যা"), ["customer", "financialProblem"])
                : card.k === "solution"
                ? () => onEvidence(s("The solution", "সমাধান"), ["agentResponsibilities", "assetManagementRole", "onchainWorkflow"])
                : card.k === "example"
                ? () => onEvidence(s("Example", "উদাহরণ"), ["demoScenario", "mvpScope"])
                : card.k === "risk"
                ? () => onEvidence(s("Risk", "ঝুঁকি"), ["evidenceConfidence", "dependencies", "feasibility"])
                : card.k === "decision"
                ? () => onEvidence(s("Decision", "সিদ্ধান্ত"), ["gate", "decision", "layerBAndRange", "changeNote"])
                : undefined
            }
          >
            <p className={`text-sm text-ink-100 leading-relaxed ${bn ? "font-bn" : ""}`}>{p(card.body)}</p>
            {card.extra && (
              <p className={`text-sm text-ink-300 leading-relaxed mt-2 ${bn ? "font-bn" : ""}`}>{p(card.extra)}</p>
            )}
          </Panel>
        ))}
      </div>
      <p className={`text-[11px] text-ink-300 ${bn ? "font-bn" : ""}`}>
        {s(
          "Candidate record fields (rank, gate, decision, scores) come from the post-audit decision package; explanations are labelled presentation text and do not change them.",
          "প্রার্থী রেকর্ডের ক্ষেত্র (র‍্যাঙ্ক, গেট, সিদ্ধান্ত, স্কোর) পোস্ট-অডিট সিদ্ধান্ত প্যাকেজ থেকে নেওয়া; ব্যাখ্যাগুলো উপস্থাপনা-লেখা হিসেবে চিহ্নিত এবং এগুলো তা বদলায় না।"
        )}
      </p>
      <span className="sr-only">{c.id}</span>
    </div>
  );
}

// ── Mode B: Guided visual walkthrough ────────────────────────────────────

const CASE_LABEL: Record<CaseKey, { en: string; bn: string }> = {
  normal: { en: "Normal case", bn: "স্বাভাবিক ক্ষেত্র" },
  insufficient: { en: "Insufficient balance", bn: "অপর্যাপ্ত ব্যালেন্স" },
  unauthorized: { en: "Unauthorized recipient", bn: "অননুমোদিত প্রাপক" },
  overlimit: { en: "Over-limit amount", bn: "সীমার বেশি পরিমাণ" },
  duplicate: { en: "Duplicate request", bn: "ডুপ্লিকেট অনুরোধ" },
  malicious: { en: "Malicious input", bn: "ক্ষতিকর ইনপুট" },
  failure: { en: "Execution failure", bn: "সম্পাদন ব্যর্থতা" },
};

export function Walkthrough({
  c,
  pres,
  onEvidence,
}: {
  c: Candidate;
  pres: CandidatePresentation;
  onEvidence: (title: string, fields: (keyof Candidate)[], refs?: string[]) => void;
}) {
  const { bn, p, s } = usePick();
  const [active, setActive] = useState(0);
  const [diagIdx, setDiagIdx] = useState(0);
  const step = pres.steps[active];
  const di = step.diagram ?? diagIdx;
  const diagram = pres.diagrams[Math.min(di, pres.diagrams.length - 1)];
  const go = (i: number) => {
    setActive(Math.max(0, Math.min(pres.steps.length - 1, i)));
    const d = pres.steps[Math.max(0, Math.min(pres.steps.length - 1, i))].diagram;
    if (d !== undefined) setDiagIdx(d);
  };
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-accent-500/40 bg-accent-500/[0.05] p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="code-like text-xs text-accent-400">
            {s("Step", "ধাপ")} {active + 1} / {pres.steps.length}
          </span>
          <ControlTag c={step.control} />
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => go(active - 1)}
              disabled={active === 0}
              className="text-xs px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60 disabled:opacity-40"
            >
              ← {s("Previous", "আগে")}
            </button>
            <button
              onClick={() => go(active + 1)}
              disabled={active === pres.steps.length - 1}
              className="text-xs px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60 disabled:opacity-40"
            >
              {s("Next", "পরে")} →
            </button>
          </div>
        </div>
        <h3 className={`text-lg font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{p(step.title)}</h3>
        <p className={`text-sm text-ink-100 mt-1 leading-relaxed ${bn ? "font-bn" : ""}`}>{p(step.body)}</p>
        {step.detail && <p className={`text-sm text-ink-300 mt-2 leading-relaxed ${bn ? "font-bn" : ""}`}>{p(step.detail)}</p>}
        {step.src && (
          <div className="mt-3 flex items-center gap-2">
            <span className="code-like text-[11px] text-ink-300">{step.src}</span>
            <button
              onClick={() => onEvidence(p(step.title), ["securityModel", "onchainWorkflow", "agentResponsibilities"], [step.src!])}
              className="text-[11px] px-2 py-1 rounded border border-ink-700 text-ink-200 hover:border-accent-500/60"
            >
              {s("Source evidence", "উৎস প্রমাণ")}
            </button>
          </div>
        )}
        <ol className="flex flex-wrap gap-1.5 mt-4" aria-label={s("Workflow steps", "ওয়ার্কফ্লো ধাপ")}>
          {pres.steps.map((st, i) => (
            <li key={i}>
              <button
                onClick={() => go(i)}
                aria-current={i === active ? "step" : undefined}
                title={p(st.title)}
                className={`code-like text-xs w-8 h-8 rounded-full border ${
                  i === active
                    ? "border-accent-500 bg-accent-500 text-ink-950 font-semibold"
                    : "border-ink-600 text-ink-200 hover:border-accent-500/60"
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {pres.diagrams.length > 1 && (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={s("Diagram route", "ডায়াগ্রাম রুট")}>
          {pres.diagrams.map((d, i) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={i === di}
              onClick={() => setDiagIdx(i)}
              className={`text-xs px-3 py-1.5 rounded border ${
                i === di ? "border-accent-500/60 text-accent-400 bg-accent-500/10" : "border-ink-700 text-ink-200 hover:border-ink-500"
              } ${bn ? "font-bn" : ""}`}
            >
              {p(d.title)}
            </button>
          ))}
        </div>
      )}
      <DiagramView
        def={diagram}
        compact
        highlight={{ nodes: step.diagram === undefined || step.diagram === di ? step.nodes : undefined }}
        onEvidence={() => onEvidence(p(diagram.title), ["securityModel", "onchainWorkflow", "agentResponsibilities", "assetManagementRole"])}
      />

      <details className="rounded-xl border border-ink-800 bg-ink-900/40 p-4">
        <summary className={`cursor-pointer text-sm text-ink-100 ${bn ? "font-bn" : ""}`}>
          {s("All steps at a glance", "সব ধাপ এক নজরে")}
        </summary>
        <ol className="mt-3 grid md:grid-cols-2 gap-2">
          {pres.steps.map((st, i) => (
            <li key={i} className="rounded-lg border border-ink-800 bg-ink-950/40 p-3">
              <ControlTag c={st.control} />
              <div className={`text-sm font-semibold text-ink-50 mt-1 ${bn ? "font-bn" : ""}`}>{p(st.title)}</div>
              <p className={`text-xs text-ink-200 mt-1 leading-relaxed ${bn ? "font-bn" : ""}`}>{p(st.body)}</p>
            </li>
          ))}
        </ol>
      </details>
      <ScenarioView c={c} pres={pres} onEvidence={onEvidence} />
    </div>
  );
}

// ── Scenario ─────────────────────────────────────────────────────────────

export function ScenarioView({
  c,
  pres,
  onEvidence,
}: {
  c: Candidate;
  pres: CandidatePresentation;
  onEvidence: (title: string, fields: (keyof Candidate)[], refs?: string[]) => void;
}) {
  const { bn, p, s } = usePick();
  const sc = pres.scenario;
  const [sel, setSel] = useState<CaseKey>(sc.cases[0]?.key ?? "normal");
  const phases: { k: keyof typeof sc; title: string }[] = [
    { k: "situation", title: s("Starting situation", "শুরুর পরিস্থিতি") },
    { k: "objective", title: s("User objective", "ব্যবহারকারীর উদ্দেশ্য") },
    { k: "reasoning", title: s("Agent's reasoning task", "এজেন্টের যুক্তি-কাজ") },
    { k: "decision", title: s("Financial decision", "আর্থিক সিদ্ধান্ত") },
    { k: "permission", title: s("Permission check", "অনুমতি যাচাই") },
    { k: "onchain", title: s("Onchain execution", "অনচেইন সম্পাদন") },
    { k: "result", title: s("Result", "ফলাফল") },
    { k: "failure", title: s("Failure or attack", "ব্যর্থতা বা আক্রমণ") },
    { k: "evidence", title: s("Evidence", "প্রমাণ") },
  ];
  const cur = sc.cases.find((x) => x.key === sel) ?? sc.cases[0];
  return (
    <Panel
      title={s("Real-world example scenario", "বাস্তব উদাহরণ দৃশ্যকল্প")}
      layer={sc.kind === "documented" ? "presentation" : "illustrative"}
      onEvidence={() => onEvidence(s("Scenario", "দৃশ্যকল্প"), ["demoScenario", "mvpScope"])}
      id="scenario"
    >
      <p
        className={`text-xs rounded border px-3 py-2 mb-4 leading-relaxed ${
          sc.kind === "documented"
            ? "border-accent-500/30 bg-accent-500/5 text-ink-100"
            : "border-amber-500/30 bg-amber-500/5 text-amber-100"
        } ${bn ? "font-bn" : ""}`}
      >
        <strong>
          {sc.kind === "documented"
            ? s("Source-backed scenario. ", "উৎস-ভিত্তিক দৃশ্যকল্প। ")
            : s("Illustrative walkthrough — not an executed test. ", "চিত্রণমূলক ওয়াকথ্রু — এক্সিকিউট করা পরীক্ষা নয়। ")}
        </strong>
        {p(sc.note)}
      </p>
      <ol className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {phases.map((ph, i) => (
          <li key={ph.k as string} className="rounded-lg border border-ink-800 bg-ink-950/40 p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="code-like text-[10px] w-5 h-5 rounded-full border border-accent-500/50 text-accent-400 flex items-center justify-center">
                {i + 1}
              </span>
              <span className={`text-[11px] uppercase tracking-[0.14em] text-ink-300 ${bn ? "font-bn normal-case" : ""}`}>{ph.title}</span>
            </div>
            <p className={`text-sm text-ink-100 leading-relaxed ${bn ? "font-bn" : ""}`}>{p(sc[ph.k] as Bi)}</p>
          </li>
        ))}
      </ol>
      <div className="mt-5">
        <div className={`text-[11px] uppercase tracking-[0.14em] text-ink-300 mb-2 ${bn ? "font-bn normal-case" : ""}`}>
          {s("Try a case — how the design is intended to respond", "একটি ক্ষেত্র বাছুন — ডিজাইন কীভাবে সাড়া দিতে চায়")}
        </div>
        <div className="flex flex-wrap gap-2" role="tablist">
          {sc.cases.map((cs) => (
            <button
              key={cs.key}
              role="tab"
              aria-selected={cs.key === sel}
              onClick={() => setSel(cs.key)}
              className={`text-xs px-3 py-1.5 rounded border ${
                cs.key === sel ? "border-accent-500/60 text-accent-400 bg-accent-500/10" : "border-ink-700 text-ink-200 hover:border-ink-500"
              } ${bn ? "font-bn" : ""}`}
            >
              {bn ? CASE_LABEL[cs.key].bn : CASE_LABEL[cs.key].en}
            </button>
          ))}
        </div>
        {cur && (
          <div className="mt-3 rounded-lg border border-ink-800 bg-ink-950/50 p-3" role="tabpanel">
            <span
              className={`inline-block text-[10px] px-2 py-0.5 rounded border mb-2 ${
                cur.basis === "documented"
                  ? "border-emerald-500/40 text-emerald-300 bg-emerald-500/10"
                  : "border-amber-500/40 text-amber-300 bg-amber-500/10"
              } ${bn ? "font-bn" : ""}`}
            >
              {cur.basis === "documented"
                ? s("Documented in the research", "গবেষণায় নথিভুক্ত")
                : s("Expected behaviour — not tested", "প্রত্যাশিত আচরণ — পরীক্ষিত নয়")}
            </span>
            <p className={`text-sm text-ink-100 ${bn ? "font-bn" : ""}`}>{p(cur.outcome)}</p>
          </div>
        )}
      </div>
      <span className="sr-only">{c.id}</span>
    </Panel>
  );
}

// ── Competitors ─────────────────────────────────────────────────────────

export function CompetitorMatrix({ pres }: { pres: CandidatePresentation }) {
  const { bn, p, s } = usePick();
  return (
    <div className="overflow-x-auto rounded-lg border border-ink-800">
      <table className="w-full text-xs min-w-[760px]">
        <thead>
          <tr className="text-[10px] uppercase tracking-[0.14em] text-ink-300 bg-ink-950/60">
            {[
              s("Competitor", "প্রতিদ্বন্দ্বী"),
              s("Existing capability", "বিদ্যমান সক্ষমতা"),
              s("Relevant similarity", "প্রাসঙ্গিক মিল"),
              s("What the idea adds", "আইডিয়া যা যোগ করে"),
              s("Already solved", "ইতিমধ্যে সমাধান"),
              s("Unverified", "অযাচাইকৃত"),
              s("Source", "উৎস"),
            ].map((h) => (
              <th key={h} className={`text-left p-2 font-medium ${bn ? "font-bn normal-case" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pres.competitors.map((r) => (
            <tr key={r.name} className="border-t border-ink-800 align-top">
              <td className="p-2 text-ink-50 font-medium">{r.name}</td>
              <td className={`p-2 text-ink-200 ${bn ? "font-bn" : ""}`}>{p(r.existing)}</td>
              <td className={`p-2 text-ink-200 ${bn ? "font-bn" : ""}`}>{p(r.similar)}</td>
              <td className={`p-2 text-ink-100 ${bn ? "font-bn" : ""}`}>{p(r.adds)}</td>
              <td className={`p-2 text-ink-200 ${bn ? "font-bn" : ""}`}>{p(r.solved)}</td>
              <td className={`p-2 text-amber-200 ${bn ? "font-bn" : ""}`}>{p(r.unverified)}</td>
              <td className="p-2">
                {r.url && (
                  <a className="text-accent-400 underline break-all" href={r.url} target="_blank" rel="noreferrer noopener">
                    {s("link", "লিংক")}
                  </a>
                )}
                {r.src && <div className="code-like text-[10px] text-ink-300 mt-1">{r.src}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Advantages / weaknesses / innovation ────────────────────────────────

const INNOV_STYLE: Record<InnovationClass, { cls: string; en: string; bn: string }> = {
  existing: { cls: "border-slate-400/40 text-slate-200", en: "Existing capability", bn: "বিদ্যমান সক্ষমতা" },
  combined: { cls: "border-accent-500/40 text-accent-400", en: "Existing parts combined in a new way", bn: "বিদ্যমান অংশের নতুন সমন্বয়" },
  supported: { cls: "border-emerald-500/40 text-emerald-300", en: "Evidence-supported differentiation", bn: "প্রমাণ-সমর্থিত পার্থক্য" },
  unverified: { cls: "border-amber-500/40 text-amber-300", en: "Plausible but unverified", bn: "সম্ভাব্য কিন্তু অযাচাইকৃত" },
  contradicted: { cls: "border-rose-500/40 text-rose-300", en: "Contradicted claim", bn: "খণ্ডিত দাবি" },
};

export function ProsConsInnovation({ pres }: { pres: CandidatePresentation }) {
  const { bn, p, s } = usePick();
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Panel title={s("Advantages (source-supported)", "সুবিধা (উৎস-সমর্থিত)")} layer="presentation" tone="good">
          <ul className="space-y-2">
            {pres.advantages.map((a, i) => (
              <li key={i} className={`text-sm text-ink-100 flex gap-2 ${bn ? "font-bn" : ""}`}>
                <span className="text-emerald-400">✓</span>
                <span>
                  {p(a.text)} {a.src && <span className="code-like text-[10px] text-ink-300">{a.src}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title={s("Weaknesses and limitations", "দুর্বলতা ও সীমাবদ্ধতা")} layer="presentation" tone="risk">
          <ul className="space-y-2">
            {pres.weaknesses.map((a, i) => (
              <li key={i} className={`text-sm text-ink-100 flex gap-2 ${bn ? "font-bn" : ""}`}>
                <span className="text-rose-400">!</span>
                <span>
                  {p(a.text)} {a.src && <span className="code-like text-[10px] text-ink-300">{a.src}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <Panel title={s("Innovation — what is existing and what is not", "নতুনত্ব — কী বিদ্যমান আর কী নয়")} layer="presentation">
        <ul className="space-y-2">
          {pres.innovation.map((it, i) => {
            const st = INNOV_STYLE[it.cls];
            return (
              <li key={i} className="flex flex-wrap items-start gap-2">
                <span className={`shrink-0 text-[10px] px-2 py-0.5 rounded border ${st.cls} ${bn ? "font-bn" : ""}`}>
                  {bn ? st.bn : st.en}
                </span>
                <span className={`text-sm text-ink-100 flex-1 min-w-[220px] ${bn ? "font-bn" : ""}`}>{p(it.text)}</span>
                {it.experiment && <span className="code-like text-[10px] text-accent-400">{it.experiment}</span>}
              </li>
            );
          })}
        </ul>
        <p className={`mt-3 text-xs text-ink-200 rounded border border-ink-800 bg-ink-950/40 p-3 ${bn ? "font-bn" : ""}`}>
          <strong>{s("Evidence needed for the strongest claim: ", "সবচেয়ে শক্তিশালী দাবির জন্য প্রয়োজনীয় প্রমাণ: ")}</strong>
          {p(pres.innovationNeeds)}
        </p>
      </Panel>
    </div>
  );
}

// ── Security boundary ────────────────────────────────────────────────────

export function SecurityBoundary({ pres }: { pres: CandidatePresentation }) {
  const { bn, p, s } = usePick();
  const sec = pres.security;
  const qa: [string, Bi][] = [
    [s("Who authorizes financial actions?", "আর্থিক কাজ কে অনুমোদন করে?"), sec.authorizes],
    [s("Where are limits enforced?", "সীমা কোথায় প্রয়োগ হয়?"), sec.enforcedWhere],
    [s("What if the AI is manipulated?", "এআই প্রতারিত হলে কী হয়?"), sec.ifManipulated],
    [s("What if a transaction fails?", "ট্রান্সজ্যাকশন ব্যর্থ হলে কী হয়?"), sec.ifFails],
    [s("How can the owner stop it?", "মালিক কীভাবে থামাতে পারে?"), sec.ownerStop],
    [s("What exposure remains?", "কী ঝুঁকি থেকে যায়?"), sec.exposure],
  ];
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-accent-500/30 bg-accent-500/[0.04] p-4">
          <div className={`text-xs font-semibold text-accent-400 mb-2 ${bn ? "font-bn" : ""}`}>{s("The AI can…", "এআই পারে…")}</div>
          <ul className="space-y-1.5">
            {sec.aiCan.map((x, i) => (
              <li key={i} className={`text-sm text-ink-100 ${bn ? "font-bn" : ""}`}>• {p(x.text)}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/[0.04] p-4">
          <div className={`text-xs font-semibold text-rose-300 mb-2 ${bn ? "font-bn" : ""}`}>{s("The AI cannot…", "এআই পারে না…")}</div>
          <ul className="space-y-1.5">
            {sec.aiCannot.map((x, i) => (
              <li key={i} className={`text-sm text-ink-100 ${bn ? "font-bn" : ""}`}>• {p(x.text)}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {qa.map(([q, a]) => (
          <div key={q} className="rounded-lg border border-ink-800 bg-ink-900/40 p-3">
            <div className={`text-[11px] uppercase tracking-[0.12em] text-ink-300 mb-1 ${bn ? "font-bn normal-case" : ""}`}>{q}</div>
            <p className={`text-sm text-ink-100 leading-relaxed ${bn ? "font-bn" : ""}`}>{p(a)}</p>
          </div>
        ))}
      </div>
      <p className={`text-xs rounded border border-amber-500/30 bg-amber-500/5 text-amber-100 p-3 ${bn ? "font-bn" : ""}`}>
        <strong>{s("Documented vs tested: ", "নথিভুক্ত বনাম পরীক্ষিত: ")}</strong>
        {p(sec.tested)}
      </p>
    </div>
  );
}

// ── HYBRID-008 authority tiers ───────────────────────────────────────────

export function PermissionTierExplorer() {
  const { bn, s } = usePick();
  const [sel, setSel] = useState("T0");
  const [route, setRoute] = useState<"M" | "Z">("M");
  const tier = SECURITY_TIERS.find((t) => t.id === sel)!;
  const bnT = (bnSnapshot as any).security?.tiers?.[sel] ?? {};
  const pickT = (key: string, en: string) => (bn && bnT[key] ? (bnT[key] as string) : en);
  const owned = sel === "T4";
  return (
    <div className="grid md:grid-cols-[220px_minmax(0,1fr)] gap-4">
      <div className="space-y-2" role="tablist" aria-label="Authority tiers">
        {SECURITY_TIERS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === sel}
            onClick={() => setSel(t.id)}
            className={`w-full text-left rounded-lg border px-3 py-2 ${
              t.id === sel ? "border-accent-500/60 bg-accent-500/10" : "border-ink-800 bg-ink-900/40 hover:border-ink-600"
            }`}
          >
            <span className="code-like text-accent-400 text-xs">{t.id}</span>
            <div className={`text-sm text-ink-50 ${bn ? "font-bn" : ""}`}>{bn && (bnSnapshot as any).security?.tiers?.[t.id]?.name ? (bnSnapshot as any).security.tiers[t.id].name : t.name}</div>
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-4" role="tabpanel">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h4 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>
            {tier.id} · {pickT("name", tier.name)}
          </h4>
          <div className="ml-auto flex rounded-md border border-ink-800 overflow-hidden text-xs">
            {(["M", "Z"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRoute(r)}
                aria-pressed={route === r}
                className={`px-3 py-1.5 ${route === r ? "bg-ink-800 text-accent-400" : "text-ink-200 hover:bg-ink-800/60"}`}
              >
                {s(`Route ${r}`, `রুট ${r}`)}
              </button>
            ))}
          </div>
        </div>
        {route === "Z" && (
          <p className={`text-[11px] mb-3 rounded border border-amber-500/30 bg-amber-500/5 text-amber-200 px-2 py-1 ${bn ? "font-bn" : ""}`}>
            {s(
              "Route Z is a conditional alternative (needs X1b and patched Zodiac); not a completed feature.",
              "রুট Z একটি শর্তাধীন বিকল্প (X1b ও প্যাচড Zodiac লাগে); সম্পন্ন ফিচার নয়।"
            )}
          </p>
        )}
        <dl className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            [s("Authority", "কর্তৃত্ব"), pickT("authority", tier.authority)],
            [s("Granted by", "কে দেয়"), pickT("grantedBy", tier.grantedBy)],
            [
              route === "M" ? s("Route M: MetaMask delegations", "রুট M: MetaMask ডেলিগেশন") : s("Route Z: Safe, Roles 2.1.1, Delay 1.1.1", "রুট Z: Safe, Roles 2.1.1, Delay 1.1.1"),
              route === "M" ? pickT("routeM", tier.routeM) : pickT("routeZ", tier.routeZ),
            ],
            [s("Agent autonomy", "এজেন্টের স্বায়ত্তশাসন"), pickT("agentAutonomy", tier.agentAutonomy)],
            [s("Exposure if the agent key is stolen", "এজেন্ট-কী চুরি হলে ঝুঁকি"), pickT("exposure", tier.exposure)],
          ].map(([k, v]) => (
            <div key={k as string} className="rounded-lg border border-ink-800 bg-ink-950/40 p-3">
              <dt className={`text-[10px] uppercase tracking-[0.14em] text-ink-300 mb-1 ${bn ? "font-bn normal-case" : ""}`}>{k}</dt>
              <dd className={`text-ink-100 ${bn ? "font-bn" : ""}`}>{v}</dd>
            </div>
          ))}
        </dl>
        <div className={`mt-3 text-xs ${owned ? "text-amber-200" : "text-ink-300"} ${bn ? "font-bn" : ""}`}>
          {owned
            ? s("Remains exclusively owner-controlled; not reachable from the agent key.", "সম্পূর্ণভাবে মালিক-নিয়ন্ত্রিত; এজেন্ট-কী থেকে পৌঁছানো যায় না।")
            : s("Original record: SECURITY_TIERS, finalaudit.md §K (verbatim English in source panel).", "মূল রেকর্ড: SECURITY_TIERS, finalaudit.md §K (উৎস প্যানেলে হুবহু ইংরেজি)।")}
        </div>
      </div>
    </div>
  );
}

export function LossBoundPanel() {
  const { bn, s } = usePick();
  return (
    <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-4">
      <p className={`text-sm text-ink-100 mb-2 ${bn ? "font-bn" : ""}`}>
        {s(
          "Conditional loss bound for a stolen agent key (finalaudit.md §K). Valid only under assumptions A1–A5; it is a design ceiling, not an audited or experimentally demonstrated guarantee.",
          "চুরি যাওয়া এজেন্ট-কী-র জন্য শর্তাধীন ক্ষতির সীমা (finalaudit.md §K)। কেবল A1–A5 অনুমানে বৈধ; এটি ডিজাইন সর্বোচ্চ, অডিটেড বা পরীক্ষামূলকভাবে প্রদর্শিত নিশ্চয়তা নয়।"
        )}
      </p>
      <pre className="code-like text-sm text-accent-400 overflow-x-auto bg-ink-950/60 rounded p-3 m-0">
        {"L_max = Σ a_i (T0, unredeemed) + Σ c_e · p_e (T1) + Q_T2 + G"}
      </pre>
      <ul className="mt-3 grid sm:grid-cols-2 gap-1.5">
        {LOSS_FORMULA.variables.map((v) => (
          <li key={v.symbol} className="text-xs text-ink-200">
            <span className="code-like text-accent-400">{v.symbol}</span> — {v.meaning} <span className="text-ink-400">({v.scope})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Roadmap ──────────────────────────────────────────────────────────────

export function RoadmapView({ pres }: { pres: CandidatePresentation }) {
  const { bn, p, s } = usePick();
  const r = pres.roadmap;
  const cols: { title: string; items: Bi[]; cls: string }[] = [
    { title: s("Documented MVP", "নথিভুক্ত MVP"), items: r.mvp, cls: "border-emerald-500/30" },
    { title: s("Optional extension", "ঐচ্ছিক সম্প্রসারণ"), items: r.optional, cls: "border-accent-500/30" },
    { title: s("Deferred", "স্থগিত"), items: r.deferred, cls: "border-ink-700" },
    { title: s("Dependencies", "নির্ভরতা"), items: r.dependencies, cls: "border-blue-400/30" },
    { title: s("Unresolved blockers", "অমীমাংসিত বাধা"), items: r.blockers, cls: "border-rose-500/30" },
  ];
  return (
    <div className="space-y-4">
      {r.stages && (
        <ol className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {r.stages.map((st, i) => (
            <li key={i} className="relative rounded-lg border border-ink-800 bg-ink-900/40 p-3">
              <div className="code-like text-[10px] text-accent-400">{String(i + 1).padStart(2, "0")}</div>
              <div className={`text-sm font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{p(st.label)}</div>
              {st.when && <div className={`text-[11px] text-amber-300 mt-0.5 ${bn ? "font-bn" : ""}`}>{p(st.when)}</div>}
              <ul className="mt-2 space-y-1">
                {st.items.map((it, j) => (
                  <li key={j} className={`text-xs text-ink-200 ${bn ? "font-bn" : ""}`}>• {p(it)}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      )}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {cols.map((col) => (
          <div key={col.title} className={`rounded-lg border ${col.cls} bg-ink-900/40 p-3`}>
            <div className={`text-[11px] uppercase tracking-[0.14em] text-ink-300 mb-2 ${bn ? "font-bn normal-case" : ""}`}>{col.title}</div>
            <ul className="space-y-1.5">
              {col.items.map((it, i) => (
                <li key={i} className={`text-sm text-ink-100 ${bn ? "font-bn" : ""}`}>• {p(it)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className={`text-[11px] text-ink-300 ${bn ? "font-bn" : ""}`}>
        {s(
          "No development estimates are added beyond those stated in the source; nothing here has been built.",
          "উৎসে যা বলা আছে তার বাইরে কোনো উন্নয়ন-অনুমান যোগ করা হয়নি; এখানে কিছুই নির্মিত হয়নি।"
        )}
      </p>
    </div>
  );
}

// ── Evaluation ───────────────────────────────────────────────────────────

function parseRange(r: string): [number, number] | null {
  const m = r.match(/(\d+)\D+(\d+)/);
  return m ? [Number(m[1]), Number(m[2])] : null;
}

function RangeRow({ label, range, max, note }: { label: string; range: string; max: number; note?: string }) {
  const r = parseRange(range);
  return (
    <div>
      <div className="flex justify-between text-xs text-ink-200 mb-1">
        <span>{label}</span>
        <span className="code-like">
          {range}
          {note ? ` ${note}` : ""}
        </span>
      </div>
      <div className="relative h-2.5 rounded-full bg-ink-800">
        {r && (
          <div
            className="absolute h-full rounded-full bg-accent-500/70"
            style={{ left: `${(r[0] / max) * 100}%`, width: `${((r[1] - r[0]) / max) * 100}%` }}
          />
        )}
      </div>
    </div>
  );
}

export function EvaluationView({ c, pres }: { c: Candidate; pres: CandidatePresentation }) {
  const { bn, s } = usePick();
  const sc = pres.scores;
  const crit: { key: keyof typeof sc.centres; label: string; max: number }[] = [
    { key: "value", label: s("Value", "মূল্য"), max: 15 },
    { key: "novelty", label: s("Novelty", "নতুনত্ব"), max: 20 },
    { key: "security", label: s("Security", "নিরাপত্তা"), max: 25 },
    { key: "feasibility", label: s("Feasibility", "বাস্তবায়নযোগ্যতা"), max: 20 },
    { key: "demo", label: s("Demo", "ডেমো"), max: 10 },
    { key: "deps", label: s("Dependencies", "নির্ভরতা"), max: 10 },
  ];
  return (
    <div className="space-y-4">
      <p className={`text-xs rounded border border-amber-500/30 bg-amber-500/5 text-amber-100 p-3 ${bn ? "font-bn" : ""}`}>
        {s(
          "All numbers are internal research judgment ranges from the post-audit package, not predicted or official judging results. The challenge bonus is scored 0–5 unresolved and never added.",
          "সব সংখ্যা পোস্ট-অডিট প্যাকেজের অভ্যন্তরীণ গবেষণা-বিচার রেঞ্জ; পূর্বাভাসিত বা অফিসিয়াল বিচারের ফল নয়। চ্যালেঞ্জ বোনাস ০–৫ অমীমাংসিত এবং কখনো যোগ করা হয় না।"
        )}
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <Panel title={s("Official rubric alignment (internal estimate)", "অফিসিয়াল রুব্রিক মিল (অভ্যন্তরীণ অনুমান)")} layer="original">
          <div className="space-y-3">
            <RangeRow label={s("Task completion / 40", "টাস্ক সম্পন্নতা / ৪০")} range={sc.task} max={40} />
            <RangeRow label={s("Security and compliance / 30", "নিরাপত্তা ও কমপ্লায়েন্স / ৩০")} range={sc.security} max={30} />
            <RangeRow label={s("Innovation and interaction / 30", "উদ্ভাবন ও ইন্টারঅ্যাকশন / ৩০")} range={sc.innovation} max={30} />
            <RangeRow label={s("Layer A / 100", "Layer A / ১০০")} range={c.layerA} max={100} />
            <RangeRow label={s("Layer B / 100 (centre)", "Layer B / ১০০ (কেন্দ্র)")} range={c.layerBAndRange.replace(/\s*\(.*\)/, "")} max={100} note={`(${c.layerBCentre})`} />
          </div>
        </Panel>
        <Panel title={s("Layer B centre by criterion", "মানদণ্ড অনুযায়ী Layer B কেন্দ্র")} layer="original">
          <div className="space-y-2.5">
            {crit.map((k) => (
              <div key={k.key}>
                <div className="flex justify-between text-xs text-ink-200 mb-1">
                  <span>{k.label}</span>
                  <span className="code-like">
                    {sc.centres[k.key]} / {k.max}
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-ink-800">
                  <div className="h-full rounded-full bg-accent-500/70" style={{ width: `${(sc.centres[k.key] / k.max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          [s("Security gate", "নিরাপত্তা গেট"), c.gate],
          [s("Feasibility", "বাস্তবায়নযোগ্যতা"), c.feasibility],
          [s("Evidence confidence", "প্রমাণ আত্মবিশ্বাস"), c.evidenceConfidence],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-ink-800 bg-ink-900/40 p-3">
            <div className={`text-[10px] uppercase tracking-[0.14em] text-ink-300 mb-1 ${bn ? "font-bn normal-case" : ""}`}>{k}</div>
            <div className="text-sm text-ink-50">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Experiments ──────────────────────────────────────────────────────────

export function ExperimentExplorer({ c }: { c: Candidate }) {
  const { bn, s } = usePick();
  const [open, setOpen] = useState<string | null>(c.experiments[0] ?? null);
  const list = EXPERIMENTS.filter((e) => c.experiments.includes(e.id));
  if (list.length === 0) {
    return (
      <p className={`text-sm text-ink-200 rounded-lg border border-ink-800 bg-ink-900/40 p-4 ${bn ? "font-bn" : ""}`}>
        {s(
          "No decisive experiment is assigned to this candidate in the post-audit package (it is not one of the three prototype-validation candidates).",
          "পোস্ট-অডিট প্যাকেজে এই প্রার্থীর জন্য কোনো নির্ধারক পরীক্ষা নির্ধারিত নেই (এটি প্রোটোটাইপ-যাচাইয়ের তিনটির একটি নয়)।"
        )}
      </p>
    );
  }
  const fields: [keyof (typeof list)[number], string, string][] = [
    ["hypothesis", "Hypothesis", "অনুমান"],
    ["minimumImplementation", "Minimum setup", "ন্যূনতম সেটআপ"],
    ["environment", "Environment", "পরিবেশ"],
    ["positiveTests", "Positive tests", "পজিটিভ টেস্ট"],
    ["negativeTests", "Negative tests", "নেগেটিভ টেস্ট"],
    ["adversarialTests", "Adversarial tests", "অ্যাডভার্সারিয়াল টেস্ট"],
    ["quantitativeAcceptance", "Acceptance", "গ্রহণযোগ্যতা"],
    ["failureConditions", "Failure conditions", "ব্যর্থতার শর্ত"],
    ["onchainEvidence", "Onchain evidence", "অনচেইন প্রমাণ"],
    ["resultImplications", "Result implications", "ফলাফলের প্রভাব"],
  ];
  return (
    <div className="space-y-2">
      {list.map((e) => {
        const bnE = (bnSnapshot as any).experiments?.[e.id] ?? {};
        const on = open === e.id;
        return (
          <div key={e.id} className="rounded-lg border border-ink-800 bg-ink-900/40">
            <button onClick={() => setOpen(on ? null : e.id)} aria-expanded={on} className="w-full text-left px-4 py-3 flex flex-wrap items-center gap-2">
              <span className="code-like text-accent-400 text-sm">{e.id}</span>
              <span className={`text-sm font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{bn && bnE.title ? bnE.title : e.title}</span>
              <span className={`ml-auto text-[10px] px-2 py-0.5 rounded border border-amber-500/40 text-amber-300 bg-amber-500/10 ${bn ? "font-bn" : ""}`}>
                {bn && bnE.status ? bnE.status : "PENDING — no experiment run"}
              </span>
            </button>
            {on && (
              <dl className="px-4 pb-4 grid md:grid-cols-2 gap-3">
                <div className="md:col-span-2 text-xs text-ink-300">
                  {s("Due", "ডেডলাইন")}: <span className="code-like">{bn && bnE.due ? bnE.due : e.due}</span> · {s("Serves", "যাদের জন্য")}: <span className="code-like">{e.serves.join(", ")}</span>
                </div>
                {fields.map(([k, en, bnLabel]) => (
                  <div key={k as string} className="rounded border border-ink-800 bg-ink-950/40 p-3">
                    <dt className={`text-[10px] uppercase tracking-[0.14em] text-ink-300 mb-1 ${bn ? "font-bn normal-case" : ""}`}>{bn ? bnLabel : en}</dt>
                    <dd className={`text-xs text-ink-100 leading-relaxed ${bn ? "font-bn" : ""}`}>
                      {bn && bnE[k as string] ? (bnE[k as string] as string) : (e[k] as string)}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        );
      })}
      <p className={`text-[11px] text-ink-300 ${bn ? "font-bn" : ""}`}>
        {s(
          "Status as of the 14 Oct 2026 snapshot: none of these experiments has been run and no result is reported.",
          "১৪ অক্টোবর ২০২৬ স্ন্যাপশট অনুযায়ী অবস্থা: এই পরীক্ষাগুলোর কোনোটিই চালানো হয়নি এবং কোনো ফলাফল জানানো হয়নি।"
        )}
      </p>
    </div>
  );
}

// ── Evidence drawer ──────────────────────────────────────────────────────

export interface EvidenceState {
  title: string;
  fields: (keyof Candidate)[];
  refs?: string[];
}

const FIELD_LABEL: Partial<Record<keyof Candidate, string>> = {
  customer: "Customer",
  financialProblem: "Financial problem",
  agentResponsibilities: "Agent responsibilities",
  assetManagementRole: "Asset-management role",
  onchainWorkflow: "Onchain workflow",
  securityModel: "Security model",
  closestCompetitor: "Closest competitor",
  noveltyHypothesis: "Novelty hypothesis",
  dependencies: "Dependencies",
  feasibility: "Feasibility",
  mvpScope: "MVP scope",
  demoScenario: "Demo scenario",
  evidenceConfidence: "Evidence confidence",
  gate: "Gate",
  decision: "Decision",
  layerA: "Layer A",
  layerBAndRange: "Layer B range (centre)",
  changeNote: "Change note",
};

export function EvidenceDrawer({
  c,
  state,
  onClose,
}: {
  c: Candidate;
  state: EvidenceState | null;
  onClose: () => void;
}) {
  const { bn, s } = usePick();
  if (!state) return null;
  return (
    <aside
      className="fixed inset-y-0 right-0 z-40 w-full sm:w-[440px] bg-ink-950 border-l border-ink-700 shadow-2xl overflow-y-auto"
      role="dialog"
      aria-label={s("Source evidence", "উৎস প্রমাণ")}
    >
      <div className="sticky top-0 bg-ink-950/95 border-b border-ink-800 px-4 py-3 flex items-center gap-2">
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.16em] text-accent-400">{s("Source evidence", "উৎস প্রমাণ")}</div>
          <div className={`text-sm font-semibold text-ink-50 truncate ${bn ? "font-bn" : ""}`}>{state.title}</div>
        </div>
        <button onClick={onClose} className="ml-auto text-xs px-2 py-1 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60">
          {s("Close", "বন্ধ")}
        </button>
      </div>
      <div className="p-4 space-y-4">
        <p className={`text-[11px] text-ink-300 ${bn ? "font-bn" : ""}`}>
          {s(
            "Original research record: English text as extracted from the post-audit decision package, shown unchanged. Translations are never applied here.",
            "মূল গবেষণা রেকর্ড: পোস্ট-অডিট সিদ্ধান্ত প্যাকেজ থেকে নেওয়া ইংরেজি লেখা, অপরিবর্তিত। এখানে অনুবাদ প্রয়োগ করা হয় না।"
          )}
        </p>
        {state.fields.map((f) => (
          <div key={f as string} className="rounded-lg border border-ink-800 bg-ink-900/60 p-3">
            <div className="text-[10px] uppercase tracking-[0.14em] text-ink-300 mb-1">{FIELD_LABEL[f] ?? String(f)}</div>
            <blockquote className="text-sm text-ink-50 leading-relaxed m-0" lang="en">
              {String(c[f])}
            </blockquote>
          </div>
        ))}
        <div className="rounded-lg border border-ink-800 bg-ink-900/60 p-3">
          <div className="text-[10px] uppercase tracking-[0.14em] text-ink-300 mb-2">{s("Source references", "উৎস রেফারেন্স")}</div>
          <ul className="space-y-1">
            {[...(state.refs ?? []), ...c.sources].map((r, i) => (
              <li key={i} className="code-like text-xs text-ink-100">{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

// ── Documented side-by-side with the superseding candidate ───────────────

export function ComparisonPanel({ pres, hereId }: { pres: CandidatePresentation; hereId: string }) {
  const { bn, p, s } = usePick();
  const cmp = pres.comparison;
  if (!cmp) return null;
  return (
    <div className="overflow-x-auto rounded-lg border border-ink-800">
      <table className="w-full text-xs min-w-[640px]">
        <thead>
          <tr className="text-[10px] uppercase tracking-[0.14em] text-ink-300 bg-ink-950/60">
            <th className={`text-left p-2 ${bn ? "font-bn normal-case" : ""}`}>{s("Aspect", "দিক")}</th>
            <th className="text-left p-2 code-like">{hereId}</th>
            <th className="text-left p-2 code-like">{cmp.otherId}</th>
            <th className="text-left p-2">{s("Source", "উৎস")}</th>
          </tr>
        </thead>
        <tbody>
          {cmp.rows.map((r, i) => (
            <tr key={i} className="border-t border-ink-800 align-top">
              <td className={`p-2 text-ink-50 font-medium ${bn ? "font-bn" : ""}`}>{p(r.aspect)}</td>
              <td className={`p-2 text-ink-200 ${bn ? "font-bn" : ""}`}>{p(r.here)}</td>
              <td className={`p-2 text-ink-100 ${bn ? "font-bn" : ""}`}>{p(r.other)}</td>
              <td className="p-2 code-like text-[10px] text-ink-300">{r.src}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
