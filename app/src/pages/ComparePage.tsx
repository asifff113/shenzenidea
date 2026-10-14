// Universal Compare page.
//
// Works for any of the 96 entries in the master inventory. Each
// selectable idea exposes the same 16 fields, regardless of whether
// it is in the Top 10 or not. The Top 10 also expose the rich
// Candidate fields (Layer B centre, sensitivity band), so the table
// gracefully shows them when present and "—" when not.

import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TOP_SHORTLIST, fullInventory, type Candidate } from "../data";
import { GateBadge, DecisionBadge, PrototypeBadge } from "../components/Badges";
import { SectionHeader } from "../components/Cards";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import type { UniversalIdea } from "../data/inventory";

interface CompareRow {
  /** Normalised record used by the table. */
  id: string;
  name: string;
  customer: string;
  financialProblem: string;
  agentResponsibilities: string;
  assetManagementRole: string;
  onchainWorkflow: string;
  securityModel: string;
  closestCompetitor: string;
  noveltyHypothesis: string;
  dependencies: string;
  feasibility: string;
  mvpScope: string;
  demoScenario: string;
  evidenceConfidence: string;
  gate: string;
  decision?: string;
  layerBCentre?: number;
  layerBAndRange?: string;
  layerA?: string;
  prototypeValidation?: boolean;
}

function fromCandidate(c: Candidate): CompareRow {
  return {
    id: c.id,
    name: c.name,
    customer: c.customer,
    financialProblem: c.financialProblem,
    agentResponsibilities: c.agentResponsibilities,
    assetManagementRole: c.assetManagementRole,
    onchainWorkflow: c.onchainWorkflow,
    securityModel: c.securityModel,
    closestCompetitor: c.closestCompetitor,
    noveltyHypothesis: c.noveltyHypothesis,
    dependencies: c.dependencies,
    feasibility: c.feasibility,
    mvpScope: c.mvpScope,
    demoScenario: c.demoScenario,
    evidenceConfidence: c.evidenceConfidence,
    gate: c.gate,
    decision: c.decision,
    layerBCentre: c.layerBCentre,
    layerBAndRange: c.layerBAndRange,
    layerA: c.layerA,
    prototypeValidation: c.prototypeValidation,
  };
}

function fromUniversal(u: UniversalIdea): CompareRow {
  return {
    id: u.id,
    name: u.name,
    customer: u.customer || "",
    financialProblem: u.financial_problem || "",
    agentResponsibilities: u.agent_responsibilities || "",
    assetManagementRole: u.asset_management_role || "",
    onchainWorkflow: u.onchain_workflow || "",
    securityModel: u.security_model || "",
    closestCompetitor: u.closest_competitor || "",
    noveltyHypothesis: u.novelty_hypothesis || "",
    dependencies: u.dependencies || "",
    feasibility: u.feasibility || "",
    mvpScope: u.mvp_scope || "",
    demoScenario: u.demo_and_evaluation || "",
    evidenceConfidence: u.evidence_confidence || "",
    gate: u.gate || "",
  };
}

// Single combined universe: all 96 ideas + the 10 enriched Top 10.
const ALL: CompareRow[] = [
  ...TOP_SHORTLIST.map(fromCandidate),
  ...(fullInventory as unknown as UniversalIdea[])
    .filter((u) => !TOP_SHORTLIST.some((c) => c.id === u.id))
    .map(fromUniversal),
];

const BY_ID: Record<string, CompareRow> = Object.fromEntries(ALL.map((r) => [r.id, r]));

const FIELDS: { key: keyof CompareRow; label: string; bnLabel: string }[] = [
  { key: "name", label: "Name", bnLabel: "নাম" },
  { key: "financialProblem", label: "Financial problem", bnLabel: "আর্থিক সমস্যা" },
  { key: "customer", label: "Customer", bnLabel: "গ্রাহক" },
  { key: "agentResponsibilities", label: "Agent responsibilities", bnLabel: "এজেন্টের দায়িত্ব" },
  { key: "assetManagementRole", label: "Asset management role", bnLabel: "সম্পদ-ব্যবস্থাপনা ভূমিকা" },
  { key: "onchainWorkflow", label: "On-chain workflow", bnLabel: "অন-চেইন কর্মপ্রবাহ" },
  { key: "securityModel", label: "Security model", bnLabel: "নিরাপত্তা মডেল" },
  { key: "closestCompetitor", label: "Closest competitor", bnLabel: "নিকটতম প্রতিযোগী" },
  { key: "noveltyHypothesis", label: "Novelty hypothesis", bnLabel: "নতুনত্বের অনুমান" },
  { key: "dependencies", label: "Dependencies", bnLabel: "নির্ভরশীলতা" },
  { key: "feasibility", label: "Feasibility", bnLabel: "সম্ভাব্যতা" },
  { key: "mvpScope", label: "MVP scope", bnLabel: "MVP-এর পরিধি" },
  { key: "demoScenario", label: "Demo scenario", bnLabel: "ডেমো পরিস্থিতি" },
  { key: "evidenceConfidence", label: "Evidence confidence", bnLabel: "প্রমাণের আত্মবিশ্বাস" },
];

export function ComparePage() {
  const { lang, t } = useLang();
  const [params, setParams] = useSearchParams();
  const initial = (params.get("ids") || "HYBRID-008,IDEA-073,HYBRID-002R")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const [ids, setIds] = useState<string[]>(
    initial.length >= 2 && initial.length <= 3
      ? initial.filter((id) => BY_ID[id])
      : ["HYBRID-008", "IDEA-073"]
  );
  const [linkCopied, setLinkCopied] = useState(false);
  const bn = lang === "bn";

  useEffect(() => {
    const valid = ids.filter((id) => BY_ID[id]);
    if (valid.length >= 2) setParams({ ids: valid.join(",") });
    else setParams({});
  }, [ids, setParams]);

  const selected: CompareRow[] = useMemo(
    () => ids.map((id) => BY_ID[id]).filter((c): c is CompareRow => Boolean(c)),
    [ids]
  );
  const remaining = useMemo(() => ALL.filter((c) => !ids.includes(c.id)), [ids]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={bn ? "পাশাপাশি তুলনা" : "Side-by-side compare"}
        title={t("compare.title")}
        subtitle={t("compare.subtitle")}
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {selected.map((c) => (
          <span
            key={c.id}
            className="flex items-center gap-2 text-xs border border-ink-700 rounded px-2 py-1 bg-ink-900/40"
          >
            <span className="code-like text-accent-400">{c.id}</span>
            <span className={`text-ink-50 ${bn ? "font-bn" : ""}`}>
              {bn ? fieldBn(c.id, "name", c.name) : c.name}
            </span>
            <button
              onClick={() => setIds(ids.filter((i) => i !== c.id))}
              className="text-ink-300 hover:text-ink-50"
              aria-label={t("compare.removeAria")}
            >
              ×
            </button>
          </span>
        ))}
        {selected.length < 3 && (
          <select
            value=""
            onChange={(e) => {
              const v = e.target.value;
              if (v) setIds([...ids, v]);
            }}
            className="bg-ink-900/60 border border-ink-800 rounded-md px-2 py-1 text-sm"
            aria-label={t("compare.addCandidate")}
          >
            <option value="">{t("compare.addCandidate")}</option>
            {remaining.map((c) => (
              <option key={c.id} value={c.id}>
                {c.id} — {bn ? fieldBn(c.id, "name", c.name) : c.name}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={() => {
            const url = new URL(window.location.href);
            url.searchParams.set("ids", ids.join(","));
            navigator.clipboard?.writeText(url.toString());
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 1500);
          }}
          className="ml-auto text-xs px-3 py-1.5 rounded border border-ink-700 hover:border-accent-500/60"
        >
          {linkCopied ? t("compare.copied") : t("compare.copyLink")}
        </button>
      </div>

      {selected.length < 2 && (
        <div
          className={`rounded-xl border border-ink-800 bg-ink-900/40 p-6 text-sm text-ink-200 ${
            bn ? "font-bn" : ""
          }`}
        >
          {t("compare.selectTwoOrThree")}
        </div>
      )}

      {selected.length >= 2 && (
        <div className="overflow-x-auto rounded-xl border border-ink-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
                <th className="text-left p-3">{bn ? "ক্ষেত্র" : "Field"}</th>
                {selected.map((c) => (
                  <th key={c.id} className="text-left p-3 border-l border-ink-800">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="code-like text-accent-400">{c.id}</span>
                      <GateBadge gate={c.gate} />
                      {c.decision && <DecisionBadge decision={c.decision} />}
                      {c.prototypeValidation && <PrototypeBadge />}
                    </div>
                    <div className={`text-ink-50 mt-1 ${bn ? "font-bn" : ""}`}>
                      {bn ? fieldBn(c.id, "name", c.name) : c.name}
                    </div>
                    {c.layerBCentre !== undefined && (
                      <div className="text-[10px] text-ink-300 code-like mt-0.5">
                        Layer B {c.layerBCentre} · {c.layerBAndRange}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FIELDS.map((f) => (
                <tr key={f.key} className="border-t border-ink-800 align-top">
                  <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>
                    {bn ? f.bnLabel : f.label}
                  </td>
                  {selected.map((c) => {
                    const raw = (c as any)[f.key] ?? "";
                    const translated = fieldBn(c.id, f.key, raw);
                    return (
                      <td
                        key={c.id}
                        className={`p-3 text-ink-100 border-l border-ink-800 ${
                          bn ? "font-bn" : ""
                        }`}
                        lang={bn ? "bn" : "en"}
                      >
                        {bn ? (
                          <>
                            {translated || (
                              <span className="text-amber-300/80">
                                [অনুবাদ মুলতুবি]
                              </span>
                            )}
                            <details className="mt-1">
                              <summary className="text-[10px] uppercase tracking-widest text-accent-400 cursor-pointer">
                                {t("common.original")}
                              </summary>
                              <div className="mt-1 text-ink-300 italic" lang="en">
                                {raw}
                              </div>
                            </details>
                          </>
                        ) : (
                          raw || <span className="text-ink-400">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/library"
          className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm"
        >
          ← {bn ? "গ্রন্থাগার" : "Library"}
        </Link>
        <Link
          to="/explorer"
          className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm"
        >
          {t("nav.explorer")} →
        </Link>
      </div>
    </div>
  );
}
