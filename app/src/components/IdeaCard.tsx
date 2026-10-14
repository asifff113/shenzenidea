import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import type { Candidate } from "../data";
import { GateBadge, DecisionBadge, PrototypeBadge } from "./Badges";
import { IdeaDetailSections } from "./IdeaDetailSections";
import { useLang } from "./LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";

interface IdeaCardProps {
  candidate: Candidate;
  expanded?: boolean;
  onToggle?: () => void;
}

export function IdeaCard({ candidate: c, expanded, onToggle }: IdeaCardProps) {
  const { lang, t } = useLang();
  const displayName = lang === "bn" ? fieldBn(c.id, "name", c.name) : c.name;
  const displayProblem =
    lang === "bn" ? fieldBn(c.id, "financialProblem", c.financialProblem) : c.financialProblem;
  return (
    <article
      className={`rounded-xl border transition-colors ${
        c.prototypeValidation
          ? "border-accent-500/40 bg-gradient-to-b from-accent-500/[0.04] to-transparent"
          : "border-ink-800 bg-ink-900/40"
      }`}
    >
      <header className="px-4 sm:px-5 py-4 flex flex-wrap items-start gap-3">
        <div className="flex flex-col">
          <span className="code-like text-xs text-ink-300">
            #{c.rank.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to={`/explorer/${c.id}`}
              className="code-like text-accent-400 text-sm hover:underline"
            >
              {c.id}
            </Link>
            <GateBadge gate={c.gate} />
            <DecisionBadge decision={c.decision} />
            {c.prototypeValidation && <PrototypeBadge />}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-ink-50 mt-1 leading-snug">
            {displayName}
          </h3>
          <p
            className={`text-sm text-ink-200 mt-1 leading-relaxed ${
              lang === "bn" ? "font-bn" : ""
            }`}
            lang={lang === "bn" ? "bn" : "en"}
          >
            {displayProblem}
          </p>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <Stat label={t("labels.layerB")} value={c.layerBCentre} />
            <Stat label={t("labels.layerARange")} value={c.layerBAndRange} />
            <Stat label={t("labels.feasibility")} value={c.feasibility} small />
            <Stat label={t("labels.confidence")} value={c.evidenceConfidence} small />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          {onToggle && (
            <button
              onClick={onToggle}
              className="text-xs px-3 py-1.5 rounded border border-ink-700 hover:border-accent-500/60 text-ink-100"
            >
              {expanded
                ? lang === "bn"
                  ? "সংকুচিত করুন"
                  : "Collapse"
                : lang === "bn"
                ? "প্রসারিত করুন"
                : "Expand"}
            </button>
          )}
          <Link
            to={`/explorer/${c.id}`}
            className="text-xs text-accent-400 hover:underline"
          >
            {t("candidate.openExplorer")}
          </Link>
        </div>
      </header>
      {expanded && <QuickDeeper candidate={c} />}
    </article>
  );
}

function Stat({ label, value, small }: { label: string; value: ReactNode; small?: boolean }) {
  return (
    <div className="rounded border border-ink-800 px-2 py-1.5 bg-ink-950/40">
      <div className="text-[10px] uppercase tracking-[0.16em] text-ink-300">
        {label}
      </div>
      <div className={`text-ink-50 ${small ? "text-[11px]" : "text-sm"} code-like`}>
        {value}
      </div>
    </div>
  );
}

function QuickDeeper({ candidate }: { candidate: Candidate }) {
  const [depth, setDepth] = useState<"quick" | "technical">("quick");
  const { lang, t } = useLang();
  return (
    <div className="border-t border-ink-800 px-4 sm:px-5 py-4 bg-ink-950/40">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-[11px] uppercase tracking-[0.18em] text-accent-400">
          {t("twoDepths.title")}
        </h4>
        <div className="flex rounded-md border border-ink-800 overflow-hidden text-xs">
          <button
            onClick={() => setDepth("quick")}
            className={`px-3 py-1.5 ${
              depth === "quick"
                ? "bg-ink-800 text-accent-400"
                : "text-ink-200 hover:bg-ink-800/60"
            }`}
            aria-pressed={depth === "quick"}
          >
            {t("twoDepths.quick")}
          </button>
          <button
            onClick={() => setDepth("technical")}
            className={`px-3 py-1.5 ${
              depth === "technical"
                ? "bg-ink-800 text-accent-400"
                : "text-ink-200 hover:bg-ink-800/60"
            }`}
            aria-pressed={depth === "technical"}
          >
            {t("twoDepths.technical")}
          </button>
        </div>
      </div>
      <IdeaDetailSections candidate={candidate} depth={depth} lang={lang} />
    </div>
  );
}
