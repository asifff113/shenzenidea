import { useParams, Link, Navigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { TOP_SHORTLIST, SECURITY_TIERS } from "../data";
import type { Candidate } from "../data";
import { getPresentation } from "../data/presentation";
import { IdeaDetailSections } from "../components/IdeaDetailSections";
import { GateBadge, DecisionBadge, PrototypeBadge } from "../components/Badges";
import { SectionHeader } from "../components/Cards";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import { DiagramView } from "../components/present/DiagramView";
import {
  QuickView,
  Walkthrough,
  CompetitorMatrix,
  ProsConsInnovation,
  SecurityBoundary,
  PermissionTierExplorer,
  LossBoundPanel,
  RoadmapView,
  EvaluationView,
  ExperimentExplorer,
  ComparisonPanel,
  EvidenceDrawer,
  Panel,
  type EvidenceState,
} from "../components/present/Sections";

type Tab = "quick" | "walkthrough" | "deep";

export function CandidatePage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const [evidence, setEvidence] = useState<EvidenceState | null>(null);
  const idx = TOP_SHORTLIST.findIndex((c) => c.id === id);
  const candidate = TOP_SHORTLIST[idx];
  if (!candidate) return <Navigate to="/explorer" replace />;
  const pres = getPresentation(candidate.id);
  const bn = lang === "bn";
  const s = (en: string, bnText: string) => (bn ? bnText : en);
  const displayName = bn ? fieldBn(candidate.id, "name", candidate.name) : candidate.name;
  const rawTab = params.get("tab");
  const tab: Tab = rawTab === "walkthrough" || rawTab === "deep" ? rawTab : "quick";
  const setTab = (next: Tab) => {
    const q = new URLSearchParams(params);
    q.set("tab", next);
    setParams(q, { replace: true });
  };
  const prev = idx > 0 ? TOP_SHORTLIST[idx - 1] : null;
  const next = idx < TOP_SHORTLIST.length - 1 ? TOP_SHORTLIST[idx + 1] : null;
  const open = (title: string, fields: (keyof Candidate)[], refs?: string[]) =>
    setEvidence({ title, fields, refs });

  const TABS: { id: Tab; en: string; bn: string }[] = [
    { id: "quick", en: "Quick Understanding", bn: "দ্রুত বোঝা" },
    { id: "walkthrough", en: "Guided Walkthrough", bn: "গাইডেড ওয়াকথ্রু" },
    { id: "deep", en: "Technical Deep Dive", bn: "টেকনিক্যাল ডিপ ডাইভ" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={`${candidate.id} · #${candidate.rank.toString().padStart(2, "0")}`}
        title={displayName}
        subtitle={s("Post-audit decision package, 14 Oct 2026", "পোস্ট-অডিট সিদ্ধান্ত প্যাকেজ, ১৪ অক্টোবর ২০২৬")}
      />
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <GateBadge gate={candidate.gate} />
        <DecisionBadge decision={candidate.decision} />
        {candidate.prototypeValidation && <PrototypeBadge />}
        {pres && (
          <span className={`text-[11px] px-2 py-0.5 rounded border border-ink-700 text-ink-100 ${bn ? "font-bn" : ""}`}>
            {bn ? pres.role.bn : pres.role.en}
          </span>
        )}
        <span className="ml-1 text-xs text-ink-300 code-like">
          Layer B {candidate.layerBAndRange} · Layer A {candidate.layerA}
        </span>
        <div className="ml-auto flex gap-2 text-xs">
          {prev && (
            <Link to={`/explorer/${prev.id}?tab=${tab}`} className="px-3 py-1.5 rounded border border-ink-700 hover:border-accent-500/60 text-ink-100">
              ← {prev.id}
            </Link>
          )}
          {next && (
            <Link to={`/explorer/${next.id}?tab=${tab}`} className="px-3 py-1.5 rounded border border-ink-700 hover:border-accent-500/60 text-ink-100">
              {next.id} →
            </Link>
          )}
        </div>
      </div>

      {pres ? (
        <>
          <div role="tablist" aria-label={s("Reading mode", "পড়ার মোড")} className="flex flex-wrap gap-1 border-b border-ink-800 mb-5">
            {TABS.map((tb) => (
              <button
                key={tb.id}
                role="tab"
                aria-selected={tab === tb.id}
                onClick={() => setTab(tb.id)}
                className={`px-4 py-2 text-sm -mb-px border-b-2 ${
                  tab === tb.id ? "border-accent-500 text-accent-400" : "border-transparent text-ink-200 hover:text-ink-50"
                } ${bn ? "font-bn" : ""}`}
              >
                {bn ? tb.bn : tb.en}
              </button>
            ))}
          </div>

          {tab === "quick" && <QuickView c={candidate} pres={pres} onEvidence={open} />}
          {tab === "walkthrough" && <Walkthrough c={candidate} pres={pres} onEvidence={open} />}
          {tab === "deep" && <DeepDive c={candidate} pres={pres} onEvidence={open} bn={bn} s={s} />}
        </>
      ) : (
        <>
          <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
            <IdeaDetailSections candidate={candidate} depth="technical" lang={lang} />
          </div>
          <FallbackSecurity t={t} bn={bn} />
        </>
      )}

      <EvidenceDrawer c={candidate} state={evidence} onClose={() => setEvidence(null)} />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/explorer" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">
          ← {t("nav.explorer")}
        </Link>
        <Link to="/compare" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">
          {t("nav.compare")} →
        </Link>
        <Link to={`/presentation?c=${candidate.id}`} className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">
          {t("nav.presentation") === "nav.presentation" ? s("Presentation mode", "প্রেজেন্টেশন মোড") : t("nav.presentation")} →
        </Link>
      </div>
    </div>
  );
}

import type { CandidatePresentation } from "../data/presentation";

function DeepDive({
  c,
  pres,
  onEvidence,
  bn,
  s,
}: {
  c: Candidate;
  pres: CandidatePresentation;
  onEvidence: (title: string, fields: (keyof Candidate)[], refs?: string[]) => void;
  bn: boolean;
  s: (en: string, bnText: string) => string;
}) {
  const nav = [
    ["arch", s("Architecture", "আর্কিটেকচার")],
    ["security", s("Security", "নিরাপত্তা")],
    ["competitors", s("Competitors", "প্রতিদ্বন্দ্বী")],
    ["assess", s("Strengths & weaknesses", "সুবিধা ও দুর্বলতা")],
    ["impl", s("Implementation", "বাস্তবায়ন")],
    ["eval", s("Evaluation", "মূল্যায়ন")],
    ["valid", s("Validation", "যাচাই")],
    ["source", s("Source sections", "উৎস অংশ")],
  ];
  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap gap-2 text-xs" aria-label="Deep dive sections">
        {nav.map(([k, label]) => (
          <a key={k} href={`#${k}`} className={`px-3 py-1.5 rounded-full border border-ink-700 text-ink-100 hover:border-accent-500/60 ${bn ? "font-bn" : ""}`}>
            {label}
          </a>
        ))}
      </nav>

      <div id="arch" className="space-y-4 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("System architecture", "সিস্টেম আর্কিটেকচার")}</h2>
        {pres.diagrams.map((d) => (
          <DiagramView
            key={d.id}
            def={d}
            onEvidence={() => onEvidence(bn ? d.title.bn : d.title.en, ["securityModel", "onchainWorkflow", "agentResponsibilities", "assetManagementRole"])}
          />
        ))}
        {pres.comparison && (
          <div className="space-y-2">
            <h3 className={`text-sm font-semibold text-accent-400 ${bn ? "font-bn" : ""}`}>
              {bn ? pres.comparison.title.bn : pres.comparison.title.en}
            </h3>
            <ComparisonPanel pres={pres} hereId={c.id} />
          </div>
        )}
        <Panel title={s("Financial and onchain flow", "আর্থিক ও অনচেইন প্রবাহ")} layer="original" onEvidence={() => onEvidence(s("Onchain flow", "অনচেইন প্রবাহ"), ["onchainWorkflow", "assetManagementRole", "agentResponsibilities"])}>
          <dl className="grid md:grid-cols-3 gap-3 text-sm">
            {[
              [s("Agent responsibilities", "এজেন্টের দায়িত্ব"), c.agentResponsibilities],
              [s("Asset-management role", "সম্পদ-ব্যবস্থাপনা ভূমিকা"), c.assetManagementRole],
              [s("Onchain workflow", "অনচেইন ওয়ার্কফ্লো"), c.onchainWorkflow],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-ink-800 bg-ink-950/40 p-3">
                <dt className="text-[10px] uppercase tracking-[0.14em] text-ink-300 mb-1">{k}</dt>
                <dd className="text-ink-100" lang="en">{v}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>

      <div id="security" className="space-y-4 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Security architecture", "নিরাপত্তা আর্কিটেকচার")}</h2>
        <SecurityBoundary pres={pres} />
        {c.id === "HYBRID-008" && (
          <>
            <h3 className={`text-sm font-semibold text-accent-400 ${bn ? "font-bn" : ""}`}>{s("Five authority tiers — interactive", "পাঁচটি কর্তৃত্ব-স্তর — ইন্টারেক্টিভ")}</h3>
            <PermissionTierExplorer />
            <LossBoundPanel />
          </>
        )}
        <Panel title={s("Security model (original record)", "নিরাপত্তা মডেল (মূল রেকর্ড)")} layer="original">
          <p className="text-sm text-ink-100" lang="en">{c.securityModel}</p>
        </Panel>
      </div>

      <div id="competitors" className="space-y-3 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Competitors and prior art", "প্রতিদ্বন্দ্বী ও পূর্ববর্তী কাজ")}</h2>
        <CompetitorMatrix pres={pres} />
        <Panel title={s("Closest competitor and novelty (original record)", "নিকটতম প্রতিদ্বন্দ্বী ও নতুনত্ব (মূল রেকর্ড)")} layer="original">
          <p className="text-sm text-ink-100" lang="en">{c.closestCompetitor}</p>
          <p className="text-sm text-ink-200 mt-2" lang="en">{c.noveltyHypothesis}</p>
        </Panel>
      </div>

      <div id="assess" className="space-y-3 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Advantages, weaknesses and innovation", "সুবিধা, দুর্বলতা ও নতুনত্ব")}</h2>
        <ProsConsInnovation pres={pres} />
      </div>

      <div id="impl" className="space-y-3 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Implementation roadmap", "বাস্তবায়ন রোডম্যাপ")}</h2>
        <RoadmapView pres={pres} />
        <Panel title={s("Dependencies, feasibility, MVP (original record)", "নির্ভরতা, বাস্তবায়নযোগ্যতা, MVP (মূল রেকর্ড)")} layer="original" onEvidence={() => onEvidence(s("Implementation", "বাস্তবায়ন"), ["dependencies", "feasibility", "mvpScope"])}>
          <ul className="text-sm text-ink-100 space-y-1" lang="en">
            <li><strong>Dependencies:</strong> {c.dependencies}</li>
            <li><strong>Feasibility:</strong> {c.feasibility}</li>
            <li><strong>MVP scope:</strong> {c.mvpScope}</li>
          </ul>
        </Panel>
      </div>

      <div id="eval" className="space-y-3 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Evaluation and ranking", "মূল্যায়ন ও র‍্যাঙ্কিং")}</h2>
        <EvaluationView c={c} pres={pres} />
      </div>

      <div id="valid" className="space-y-3 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Validation experiments", "যাচাই পরীক্ষা")}</h2>
        <ExperimentExplorer c={c} />
      </div>

      <div id="source" className="space-y-3 scroll-mt-24">
        <h2 className={`text-base font-semibold text-ink-50 ${bn ? "font-bn" : ""}`}>{s("Full source-grounded sections A–M", "সম্পূর্ণ উৎস-ভিত্তিক অংশ A–M")}</h2>
        <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
          <IdeaDetailSections candidate={c} depth="technical" lang={bn ? "bn" : "en"} />
        </div>
        <Panel title={s("Source references", "উৎস রেফারেন্স")} layer="original">
          <ul className="text-sm text-ink-200 space-y-1 list-disc list-inside">
            {c.sources.map((x) => (
              <li key={x} className="code-like">{x}</li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function FallbackSecurity({ t, bn }: { t: (k: string) => string; bn: boolean }) {
  return (
    <div className="mt-8 rounded-xl border border-ink-800 bg-ink-900/40 p-5 overflow-x-auto">
      <h3 className="text-sm font-semibold text-accent-400 mb-3">{t("candidate.security")}</h3>
      <table className="w-full text-sm">
        <tbody>
          {SECURITY_TIERS.map((x) => (
            <tr key={x.id} className="border-t border-ink-800">
              <td className="py-2 pr-2 code-like text-accent-400">{x.id}</td>
              <td className={`py-2 text-ink-100 ${bn ? "font-bn" : ""}`}>{x.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
