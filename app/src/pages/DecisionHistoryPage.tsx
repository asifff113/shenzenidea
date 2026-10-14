import { AUDIT_A_ADJUDICATIONS, AUDIT_B_DISPOSITIONS, TOP_THREE_VALIDATION } from "../data";
import { SectionHeader } from "../components/Cards";
import { useLang } from "../components/LanguageContext";
import bnSnapshot from "../i18n/bn/snapshot.json";

export function DecisionHistoryPage() {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={bn ? "সিদ্ধান্তের ইতিহাস" : "Decision history"}
        title={t("history.title")}
        subtitle={t("history.subtitle")}
      />

      <div className="space-y-3 mb-8">
        {(
          [
            { id: "preAudit", en: "Synthesis snapshot", bn: "সংক্ষিপ্ত সংশ্লেষণ" },
            { id: "auditA", en: "Audit A — adversarial review", bn: "Audit A — প্রতিকূল পর্যালোচনা" },
            { id: "auditB", en: "Audit B — merger integrity", bn: "Audit B — একীভূতকরণ অখণ্ডতা" },
            { id: "postAudit", en: "Post-audit adjudication (current)", bn: "পোস্ট-অডিট রায় (বর্তমান)" },
          ] as const
        ).map((stage, i) => {
          const data = (bnSnapshot as any).decisionHistoryEvents[stage.id];
          return (
            <div key={stage.id} className={`rounded-xl border border-ink-800 bg-ink-900/40 p-4 ${stage.id === "postAudit" ? "border-accent-500/40" : ""}`}>
              <div className="flex items-center gap-2">
                <span className="code-like text-accent-400">{i + 1}</span>
                <h3 className={`text-ink-50 font-semibold ${bn ? "font-bn" : ""}`}>
                  {bn ? data.title : stage.en}
                </h3>
                {stage.id === "postAudit" && (
                  <span className={`text-[10px] uppercase tracking-widest text-accent-400 border border-accent-500/40 rounded px-1.5 py-0.5 ${bn ? "font-bn" : ""}`}>
                    {bn ? "বর্তমান" : "Current"}
                  </span>
                )}
              </div>
              <p className={`text-sm text-ink-200 mt-2 leading-relaxed ${bn ? "font-bn" : ""}`}>
                {bn ? data.detail : stage.id === "preAudit"
                  ? "70 ideas, 7 hybrids, 51 claim checks, 40 external source records. Provisional preference: HYBRID-001 (ObligationLock, custom executor)."
                  : stage.id === "auditA"
                  ? "27 decision-changing findings: 13 confirmed, 8 partial, 3 need experiments, 2 contradicted, 1 unsupported."
                  : "43 named findings: 39 confirmed, 3 partial, 1 uncheckable. Coverage 50.20% strict, 47.10% weighted. No critical discrepancy."}
              </p>
              <p className="text-[11px] text-ink-400 code-like mt-2">
                {bn ? "উৎস:" : "Source:"} {bn ? data.source : stage.id === "preAudit" ? "Agent_Wallet_Decision_Report.md" : stage.id === "auditA" ? "claudeaudit.md" : stage.id === "auditB" ? "Audit_Report.md" : "finalaudit.md, agent-wallet-post-audit-decision-summary.md"}
              </p>
            </div>
          );
        })}
      </div>

      <h3 className={`text-sm font-semibold text-accent-400 mb-3 ${bn ? "font-bn" : ""}`}>
        {bn ? "Audit A — ২৭টি সিদ্ধান্ত-পরিবর্তনকারী অনুসন্ধান" : "Audit A — 27 decision-changing findings"}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-ink-800 mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
              <th className="text-left p-3">{bn ? "অনুসন্ধান" : "Finding"}</th>
              <th className="text-left p-3">{bn ? "প্রার্থী" : "Candidate"}</th>
              <th className="text-left p-3">{bn ? "রায়" : "Verdict"}</th>
              <th className="text-left p-3">{bn ? "প্রমাণ" : "Evidence"}</th>
            </tr>
          </thead>
          <tbody>
            {AUDIT_A_ADJUDICATIONS.map((r) => (
              <tr key={r.id} className="border-t border-ink-800 align-top">
                <td className={`p-3 ${bn ? "font-bn" : ""}`}>
                  <span className="code-like text-accent-400 mr-2">{r.id}</span>
                  {r.finding}
                </td>
                <td className={`p-3 ${bn ? "font-bn" : ""}`}>{r.candidate}</td>
                <td className={`p-3 ${bn ? "font-bn" : ""}`}>{r.verdict}</td>
                <td className={`p-3 text-ink-300 ${bn ? "font-bn" : ""}`}>{r.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className={`text-sm font-semibold text-accent-400 mb-3 ${bn ? "font-bn" : ""}`}>
        {bn ? "Audit B — ৪৩টি নামকরণ অনুসন্ধান" : "Audit B — 43 named findings"}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-ink-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
              <th className="text-left p-3">{bn ? "অনুসন্ধান" : "Finding"}</th>
              <th className="text-left p-3">{bn ? "প্রার্থী" : "Candidate"}</th>
              <th className="text-left p-3">{bn ? "রায়" : "Verdict"}</th>
              <th className="text-left p-3">{bn ? "প্রমাণ" : "Evidence"}</th>
            </tr>
          </thead>
          <tbody>
            {AUDIT_B_DISPOSITIONS.map((r) => (
              <tr key={r.id} className="border-t border-ink-800 align-top">
                <td className={`p-3 ${bn ? "font-bn" : ""}`}>
                  <span className="code-like text-accent-400 mr-2">{r.id}</span>
                  {r.finding}
                </td>
                <td className={`p-3 ${bn ? "font-bn" : ""}`}>{r.candidate}</td>
                <td className={`p-3 ${bn ? "font-bn" : ""}`}>{r.verdict}</td>
                <td className={`p-3 text-ink-300 ${bn ? "font-bn" : ""}`}>{r.evidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className={`text-sm font-semibold text-accent-400 mt-10 mb-3 ${bn ? "font-bn" : ""}`}>
        {bn ? "শীর্ষ তিন প্রার্থী — চূড়ান্ত পছন্দের গেট" : "Top three — final selection gates"}
      </h3>
      <div className="space-y-3">
        {TOP_THREE_VALIDATION.map((c) => {
          const bnV = bn ? (bnSnapshot as any).topThreeValidation[c.id] : undefined;
          return (
            <div key={c.id} className="rounded-xl border border-ink-800 bg-ink-900/40 p-4">
              <div className="flex items-center gap-2">
                <span className="code-like text-accent-400">{c.id}</span>
                <span className={`text-ink-50 font-semibold ${bn ? "font-bn" : ""}`}>{bnV ? bnV.uncertainty : c.uncertainty}</span>
              </div>
              <p className={`text-sm text-ink-200 mt-2 ${bn ? "font-bn" : ""}`}>
                <strong>{bn ? "অনিশ্চতা কেন:" : "Uncertainty:"}</strong> {bnV ? bnV.reason : c.reason}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
