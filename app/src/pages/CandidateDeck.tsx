import { useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOP_SHORTLIST } from "../data";
import type { Candidate } from "../data";
import { getPresentation } from "../data/presentation";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import { GateBadge, DecisionBadge, PrototypeBadge } from "../components/Badges";
import { DiagramView } from "../components/present/DiagramView";
import {
  ControlTag,
  CompetitorMatrix,
  ProsConsInnovation,
  SecurityBoundary,
  RoadmapView,
  EvaluationView,
  ExperimentExplorer,
  ScenarioView,
  ComparisonPanel,
} from "../components/present/Sections";

// Full-screen, one-idea-at-a-time deck. Built from the same presentation
// records as the detail page, so nothing here is separate or hand-copied.

interface DeckSlide {
  key: string;
  title: string;
  render: () => ReactNode;
  source: string;
}

export function CandidateDeck({ id }: { id: string }) {
  const { lang, setLang } = useLang();
  const navigate = useNavigate();
  const bn = lang === "bn";
  const s = (en: string, bnText: string) => (bn ? bnText : en);
  const c = TOP_SHORTLIST.find((x) => x.id === id) as Candidate | undefined;
  const pres = getPresentation(id);
  const [idx, setIdx] = useState(0);
  const [showSource, setShowSource] = useState(false);

  const slides: DeckSlide[] = !c || !pres ? [] : buildSlides(c, pres, bn, s);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") setIdx((i) => Math.min(i + 1, slides.length - 1));
      if (e.key === "ArrowLeft" || e.key === "PageUp") setIdx((i) => Math.max(i - 1, 0));
      if (e.key.toLowerCase() === "o") setShowSource((v) => !v);
      if (e.key.toLowerCase() === "l") setLang(lang === "bn" ? "en" : "bn");
      if (e.key.toLowerCase() === "f") {
        const el = document.documentElement;
        if (document.fullscreenElement) void document.exitFullscreen?.();
        else void el.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length, lang, setLang]);

  if (!c || !pres) {
    return (
      <div className="p-10 text-ink-100">
        <Link to="/presentation" className="underline">
          {s("Back to presentation mode", "প্রেজেন্টেশন মোডে ফিরুন")}
        </Link>
      </div>
    );
  }
  const slide = slides[Math.min(idx, slides.length - 1)];
  const name = bn ? fieldBn(c.id, "name", c.name) : c.name;
  const rankIdx = TOP_SHORTLIST.findIndex((x) => x.id === id);
  const prevC = rankIdx > 0 ? TOP_SHORTLIST[rankIdx - 1] : null;
  const nextC = rankIdx < TOP_SHORTLIST.length - 1 ? TOP_SHORTLIST[rankIdx + 1] : null;

  return (
    <div className="min-h-screen bg-ink-950 text-ink-50" data-testid="candidate-deck">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-300 mb-3">
          <span className="code-like text-accent-400">{c.id}</span>
          <span className={`text-ink-100 ${bn ? "font-bn" : ""}`}>{name}</span>
          <div className="ml-auto flex flex-wrap gap-2">
            <button
              onClick={() => setLang(bn ? "en" : "bn")}
              className="px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60"
              aria-label="Switch language (L)"
            >
              {bn ? "English" : "বাংলা"}
            </button>
            <button
              onClick={() => setShowSource((v) => !v)}
              aria-pressed={showSource}
              className="px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60"
            >
              {s("Original evidence (O)", "মূল প্রমাণ (O)")}
            </button>
            <button
              onClick={() => {
                if (document.fullscreenElement) void document.exitFullscreen?.();
                else void document.documentElement.requestFullscreen?.();
              }}
              className="px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60"
            >
              {s("Full screen (F)", "ফুল-স্ক্রিন (F)")}
            </button>
            <Link to={`/explorer/${c.id}`} className="px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60">
              {s("Detail page", "বিস্তারিত পাতা")}
            </Link>
            <Link to="/presentation" className="px-3 py-1.5 rounded border border-ink-700 text-ink-100 hover:border-accent-500/60">
              {s("Exit", "বের হন")}
            </Link>
          </div>
        </div>

        <div className="h-1.5 rounded-full bg-ink-800 mb-4" role="progressbar" aria-valuemin={1} aria-valuemax={slides.length} aria-valuenow={idx + 1}>
          <div className="h-full rounded-full bg-accent-500 transition-all" style={{ width: `${((idx + 1) / slides.length) * 100}%` }} />
        </div>

        <article className="rounded-2xl border border-ink-800 bg-ink-900/40 p-5 sm:p-8 min-h-[64vh]">
          <div className="flex items-center gap-3 mb-4">
            <span className="code-like text-xs text-ink-300">
              {idx + 1} / {slides.length}
            </span>
            <h1 className={`text-2xl sm:text-4xl font-semibold leading-tight ${bn ? "font-bn" : ""}`}>{slide.title}</h1>
          </div>
          <div className={`text-base sm:text-lg text-ink-100 leading-relaxed ${bn ? "font-bn" : ""}`}>{slide.render()}</div>
          {showSource && (
            <div className="mt-6 border-t border-ink-800 pt-4 space-y-2" data-testid="deck-source">
              <div className="text-[10px] uppercase tracking-[0.16em] text-accent-400">
                {s("Original research record (English, unchanged)", "মূল গবেষণা রেকর্ড (ইংরেজি, অপরিবর্তিত)")}
              </div>
              <p className="text-sm text-ink-100" lang="en">{c.financialProblem}</p>
              <p className="text-sm text-ink-200" lang="en">{c.securityModel}</p>
              <p className="code-like text-xs text-ink-300">{slide.source} · {c.sources.join("; ")}</p>
            </div>
          )}
        </article>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="px-4 py-2 rounded border border-ink-700 text-ink-100 disabled:opacity-30"
          >
            ← {s("Previous", "আগে")}
          </button>
          <button
            onClick={() => setIdx((i) => Math.min(slides.length - 1, i + 1))}
            disabled={idx === slides.length - 1}
            className="px-4 py-2 rounded border border-accent-500/50 bg-accent-500/10 text-accent-400 disabled:opacity-30"
          >
            {s("Next", "পরে")} →
          </button>
          <ol className="flex flex-wrap gap-1 ml-2" aria-label="Slides">
            {slides.map((sl, i) => (
              <li key={sl.key}>
                <button
                  onClick={() => setIdx(i)}
                  title={sl.title}
                  aria-current={i === idx ? "step" : undefined}
                  className={`code-like w-7 h-7 rounded-full border text-[11px] ${
                    i === idx ? "border-accent-500 bg-accent-500 text-ink-950" : "border-ink-700 text-ink-300 hover:border-ink-500"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ol>
          <div className="ml-auto flex gap-2">
            {prevC && (
              <button onClick={() => navigate(`/presentation?c=${prevC.id}`)} className="px-3 py-2 rounded border border-ink-700 text-ink-200">
                ← {prevC.id}
              </button>
            )}
            {nextC && (
              <button onClick={() => navigate(`/presentation?c=${nextC.id}`)} className="px-3 py-2 rounded border border-ink-700 text-ink-200">
                {nextC.id} →
              </button>
            )}
          </div>
        </div>
        <p className="mt-3 text-[11px] text-ink-400">
          {s(
            "Keys: ← → navigate · O original evidence · L language · F full screen",
            "কী: ← → নেভিগেট · O মূল প্রমাণ · L ভাষা · F ফুল-স্ক্রিন"
          )}
        </p>
      </div>
    </div>
  );
}

function buildSlides(
  c: Candidate,
  pres: NonNullable<ReturnType<typeof getPresentation>>,
  bn: boolean,
  s: (en: string, bnText: string) => string
): DeckSlide[] {
  const p = (v: { en: string; bn: string }) => (bn ? v.bn : v.en);
  const noop = () => undefined;
  const Big = ({ children }: { children: ReactNode }) => <div className="space-y-4">{children}</div>;
  const secondDiagram = pres.diagrams[1] ?? pres.diagrams[0];

  return [
    {
      key: "title",
      title: bn ? fieldBn(c.id, "name", c.name) : c.name,
      source: "finalaudit.md §M, §S",
      render: () => (
        <Big>
          <div className="flex flex-wrap gap-2">
            <GateBadge gate={c.gate} />
            <DecisionBadge decision={c.decision} />
            {c.prototypeValidation && <PrototypeBadge />}
          </div>
          <p className="text-ink-50">{p(pres.role)}</p>
          <p className="text-ink-200">{p(pres.headline)}</p>
          <p className="code-like text-sm text-ink-300">
            #{c.rank} · Layer B {c.layerBAndRange} · Layer A {c.layerA}
          </p>
        </Big>
      ),
    },
    {
      key: "problem",
      title: s("The financial problem", "আর্থিক সমস্যা"),
      source: "record: financialProblem, customer",
      render: () => (
        <Big>
          <p>{p(pres.quick.problem)}</p>
          <p className="text-ink-300">{p(pres.quick.affected)}</p>
        </Big>
      ),
    },
    {
      key: "solution",
      title: s("The proposed solution", "প্রস্তাবিত সমাধান"),
      source: "record: agentResponsibilities, assetManagementRole",
      render: () => (
        <Big>
          <p>{p(pres.quick.solution)}</p>
          <p className="text-ink-300">{p(pres.quick.versusNormal)}</p>
        </Big>
      ),
    },
    {
      key: "scenario",
      title: s("Real-world scenario", "বাস্তব দৃশ্যকল্প"),
      source: "record: demoScenario, mvpScope",
      render: () => <ScenarioView c={c} pres={pres} onEvidence={noop} />,
    },
    {
      key: "workflow",
      title: s("AI workflow", "এআই ওয়ার্কফ্লো"),
      source: "finalaudit.md (as cited per step)",
      render: () => (
        <ol className="grid md:grid-cols-2 gap-3">
          {pres.steps.map((st, i) => (
            <li key={i} className="rounded-lg border border-ink-800 bg-ink-950/40 p-3">
              <ControlTag c={st.control} />
              <div className="text-base font-semibold mt-1">{p(st.title)}</div>
              <p className="text-sm text-ink-200 mt-1">{p(st.body)}</p>
            </li>
          ))}
        </ol>
      ),
    },
    {
      key: "arch",
      title: s("System architecture", "সিস্টেম আর্কিটেকচার"),
      source: "finalaudit.md §K / record",
      render: () => <DiagramView def={pres.diagrams[0]} />,
    },
    {
      key: "flow",
      title: s("Financial and transaction flow", "আর্থিক ও লেনদেন প্রবাহ"),
      source: "record: onchainWorkflow",
      render: () => (
        <Big>
          {pres.diagrams.length > 1 && <DiagramView def={secondDiagram} />}
          <p className="text-base text-ink-100" lang="en">{c.onchainWorkflow}</p>
        </Big>
      ),
    },
    {
      key: "security",
      title: s("Security architecture", "নিরাপত্তা আর্কিটেকচার"),
      source: "finalaudit.md §K / §L",
      render: () => <SecurityBoundary pres={pres} />,
    },
    {
      key: "competitors",
      title: s("Competitor comparison", "প্রতিদ্বন্দ্বী তুলনা"),
      source: "finalaudit.md §J",
      render: () => <CompetitorMatrix pres={pres} />,
    },
    {
      key: "innovation",
      title: s("Innovation and differentiation", "নতুনত্ব ও পার্থক্য"),
      source: "finalaudit.md §J",
      render: () => <ProsConsInnovation pres={pres} />,
    },
    {
      key: "weak",
      title: s("Weaknesses and challenges", "দুর্বলতা ও চ্যালেঞ্জ"),
      source: "finalaudit.md §L, §N",
      render: () => (
        <Big>
          <ul className="space-y-2">
            {pres.weaknesses.map((w, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-rose-400">!</span>
                <span>{p(w.text)}</span>
              </li>
            ))}
          </ul>
          {pres.comparison && <ComparisonPanel pres={pres} hereId={c.id} />}
        </Big>
      ),
    },
    {
      key: "mvp",
      title: s("Proposed MVP and implementation", "প্রস্তাবিত MVP ও বাস্তবায়ন"),
      source: "record: mvpScope, dependencies",
      render: () => <RoadmapView pres={pres} />,
    },
    {
      key: "eval",
      title: s("Evaluation and experiments", "মূল্যায়ন ও পরীক্ষা"),
      source: "finalaudit.md §M, §R",
      render: () => (
        <Big>
          <EvaluationView c={c} pres={pres} />
          <ExperimentExplorer c={c} />
        </Big>
      ),
    },
    {
      key: "assessment",
      title: s("Documented research assessment", "নথিভুক্ত গবেষণা মূল্যায়ন"),
      source: "finalaudit.md §S, §T, §U",
      render: () => (
        <Big>
          <div className="flex flex-wrap gap-2">
            <GateBadge gate={c.gate} />
            <DecisionBadge decision={c.decision} />
          </div>
          <p>{p(pres.quick.decisionMeaning)}</p>
          <p className="text-ink-300">{p(pres.quick.risk)}</p>
          <p className="text-sm text-amber-200">
            {s(
              "No winner is declared: final selection needs the eleven §U conditions, and no experiment has been run.",
              "কোনো বিজয়ী ঘোষিত নয়: চূড়ান্ত নির্বাচনে §U-এর এগারোটি শর্ত লাগে, এবং কোনো পরীক্ষা চালানো হয়নি।"
            )}
          </p>
        </Big>
      ),
    },
  ];
}
