import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { TOP_SHORTLIST, SECURITY_TIERS } from "../data";
import { IdeaDetailSections } from "../components/IdeaDetailSections";
import { GateBadge, DecisionBadge, PrototypeBadge } from "../components/Badges";
import { SectionHeader } from "../components/Cards";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";

export function CandidatePage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const [depth, setDepth] = useState<"quick" | "technical">("technical");
  const candidate = TOP_SHORTLIST.find((c) => c.id === id);
  if (!candidate) return <Navigate to="/explorer" replace />;
  const bn = lang === "bn";
  const displayName = bn ? fieldBn(candidate.id, "name", candidate.name) : candidate.name;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={candidate.id}
        title={displayName}
        subtitle={bn ? "পোস্ট-অডিট সিদ্ধান্ত প্যাকেজ, ১৪ অক্টোবর ২০২৬" : "Post-audit decision package, 14 Oct 2026"}
      />
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <GateBadge gate={candidate.gate} />
        <DecisionBadge decision={candidate.decision} />
        {candidate.prototypeValidation && <PrototypeBadge />}
        <span className="ml-2 text-xs text-ink-300 code-like">
          #{candidate.rank.toString().padStart(2, "0")} · Layer B {candidate.layerBCentre}
        </span>
        <div className="ml-auto flex rounded-md border border-ink-800 overflow-hidden text-xs">
          <button
            onClick={() => setDepth("quick")}
            className={`px-3 py-1.5 ${depth === "quick" ? "bg-ink-800 text-accent-400" : "text-ink-200 hover:bg-ink-800/60"}`}
            aria-pressed={depth === "quick"}
          >{t("twoDepths.quick")}</button>
          <button
            onClick={() => setDepth("technical")}
            className={`px-3 py-1.5 ${depth === "technical" ? "bg-ink-800 text-accent-400" : "text-ink-200 hover:bg-ink-800/60"}`}
            aria-pressed={depth === "technical"}
          >{t("twoDepths.technical")}</button>
        </div>
      </div>
      <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
        <IdeaDetailSections candidate={candidate} depth={depth} lang={lang} />
      </div>
      <div className="mt-8 grid lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
          <h3 className="text-sm font-semibold text-accent-400 mb-3">{t("candidate.security")}</h3>
          <SecurityTiersList />
        </div>
        <div className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
          <h3 className="text-sm font-semibold text-accent-400 mb-3">{t("sections.M")}</h3>
          <ul className={`text-sm text-ink-200 space-y-1 list-disc list-inside ${bn ? "font-bn" : ""}`}>
            {candidate.sources.map((s) => (<li key={s} className="code-like">{s}</li>))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <Link to="/explorer" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">← {t("nav.explorer")}</Link>
        <Link to="/compare" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">{t("nav.compare")} →</Link>
      </div>
    </div>
  );
}

function SecurityTiersList() {
  const { lang } = useLang();
  const bn = lang === "bn";
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-[10px] uppercase tracking-widest text-ink-300">
            <th className="text-left py-1.5 pr-2">{bn ? "স্তর" : "Tier"}</th>
            <th className="text-left py-1.5 pr-2">{bn ? "কর্তৃত্ব" : "Authority"}</th>
            <th className="text-left py-1.5 pr-2">{bn ? "এজেন্ট স্বায়ত্তশাসন" : "Agent autonomy"}</th>
            <th className="text-left py-1.5">{bn ? "এক্সপোজার" : "Exposure"}</th>
          </tr>
        </thead>
        <tbody>
          {SECURITY_TIERS.map((s) => (
            <tr key={s.id} className="border-t border-ink-800">
              <td className="py-2 pr-2">
                <span className="code-like text-accent-400">{s.id}</span>
                <div className={`text-ink-50 ${bn ? "font-bn" : ""}`}>{s.name}</div>
              </td>
              <td className={`py-2 pr-2 text-ink-100 ${bn ? "font-bn" : ""}`}>{s.authority}</td>
              <td className={`py-2 pr-2 text-ink-200 ${bn ? "font-bn" : ""}`}>{s.agentAutonomy}</td>
              <td className={`py-2 text-ink-200 ${bn ? "font-bn" : ""}`}>{s.exposure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
