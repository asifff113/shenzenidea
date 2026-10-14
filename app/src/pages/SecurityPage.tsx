import { useState } from "react";
import {
  EXPERIMENTS,
  CONTROL_MATRIX,
  LOSS_FORMULA,
  SECURITY_TIERS,
  TOP_THREE_VALIDATION,
  MERMAID_FLOW_HYBRID_008,
  MERMAID_FLOW_HYBRID_002R,
  MERMAID_FLOW_X1,
} from "../data";
import { SectionHeader } from "../components/Cards";
import { MermaidBlock } from "../components/MermaidBlock";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import bnSnapshot from "../i18n/bn/snapshot.json";

export function SecurityPage() {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  const [tab, setTab] = useState<"tiers" | "matrix" | "diagrams" | "experiments" | "loss">("tiers");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={bn ? "নিরাপত্তা স্থাপত্য ও যাচাই" : "Security architecture & validation"}
        title={t("security.title")}
        subtitle={t("security.subtitle")}
      />
      <div className="flex flex-wrap rounded-md border border-ink-800 overflow-hidden text-xs mb-6">
        {([
          { id: "tiers", en: "Permission tiers", bn: "অনুমতি স্তর" },
          { id: "loss", en: "Loss bound", bn: "ক্ষতির সীমা" },
          { id: "diagrams", en: "Diagrams", bn: "ডায়াগ্রাম" },
          { id: "matrix", en: "Control matrix", bn: "নিয়ন্ত্রণ ম্যাট্রিক্স" },
          { id: "experiments", en: "Experiments", bn: "পরীক্ষাসমূহ" },
        ] as const).map((s) => (
          <button
            key={s.id}
            onClick={() => setTab(s.id)}
            className={`px-3 py-2 ${tab === s.id ? "bg-ink-800 text-accent-400" : "text-ink-200 hover:bg-ink-800/60"}`}
            aria-pressed={tab === s.id}
          >{bn ? s.bn : s.en}</button>
        ))}
      </div>
      {tab === "tiers" && <TiersTable bn={bn} />}
      {tab === "loss" && <LossBound bn={bn} />}
      {tab === "diagrams" && <Diagrams bn={bn} />}
      {tab === "matrix" && <Matrix bn={bn} />}
      {tab === "experiments" && <Experiments bn={bn} />}
    </div>
  );
}

function TiersTable({ bn }: { bn: boolean }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent-400 mb-3">{bn ? "পাঁচ-স্তরের অনুমতি মডেল" : "Five-tier permission model"}</h3>
      <p className={`text-sm text-ink-200 mb-3 ${bn ? "font-bn" : ""}`}>
        {bn ? "মালিক-স্বাক্ষরিত অন-চেইন স্তর। LLM এজেন্ট কেবল T0 (একবার-ব্যবহারযোগ্য অবলিগেশন) এবং গ্যাস ধারণ করে। রাউট M ও Z দেখানো হয়েছে।" : "Owner-signed onchain tiers. The LLM agent holds only T0 (one-use obligations) plus gas. Routes M and Z are shown."}
      </p>
      <div className="overflow-x-auto rounded-xl border border-ink-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
              <th className="text-left p-3">{bn ? "স্তর" : "Tier"}</th>
              <th className="text-left p-3">{bn ? "কর্তৃত্ব" : "Authority"}</th>
              <th className="text-left p-3">{bn ? "রাউট M" : "Route M"}</th>
              <th className="text-left p-3">{bn ? "রাউট Z" : "Route Z"}</th>
              <th className="text-left p-3">{bn ? "এক্সপোজার" : "Exposure"}</th>
            </tr>
          </thead>
          <tbody>
            {SECURITY_TIERS.map((s) => {
              const bnTier = (bnSnapshot as any).security.tiers[s.id];
              return (
                <tr key={s.id} className="border-t border-ink-800 align-top">
                  <td className={`p-3 ${bn ? "font-bn" : ""}`}>
                    <span className="code-like text-accent-400">{s.id}</span>
                    <div className="text-ink-50">{bnTier ? bnTier.name : s.name}</div>
                  </td>
                  <td className={`p-3 text-ink-100 ${bn ? "font-bn" : ""}`}>{bnTier ? bnTier.authority : s.authority}</td>
                  <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>{bnTier ? bnTier.routeM : s.routeM}</td>
                  <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>{bnTier ? bnTier.routeZ : s.routeZ}</td>
                  <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>{bnTier ? bnTier.exposure : s.exposure}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LossBound({ bn }: { bn: boolean }) {
  const bnLoss = (bnSnapshot as any).security.lossFormula;
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent-400 mb-3">{bn ? bnLoss.heading : "Conditional loss bound"}</h3>
      <div className={`rounded-xl border border-ink-800 bg-ink-900/40 p-5 text-sm ${bn ? "font-bn" : ""}`}>
        <div className="overflow-x-auto font-mono text-ink-50 leading-relaxed text-base whitespace-pre">
          {`L_max = Σ_{i ∈ T0, unredeemed} a_i\n      + Σ_{e ∈ T1} c_e · p_e\n      + Q_T2\n      + G`}
        </div>
        <h4 className="text-[11px] uppercase tracking-widest text-accent-400 mt-5 mb-2">
          {bn ? "চলক" : "Variables"}
        </h4>
        <ul className="space-y-1 text-ink-100">
          {LOSS_FORMULA.variables.map((v) => (
            <li key={v.symbol} className="text-sm">
              <span className="code-like text-accent-400">{v.symbol}</span>
              {" — "} {v.meaning}{" "}
              <span className="text-ink-300">({v.scope})</span>
            </li>
          ))}
        </ul>
        <h4 className="text-[11px] uppercase tracking-widest text-accent-400 mt-4 mb-2">
          {bn ? "অনুমান" : "Assumptions"}
        </h4>
        <ul className="space-y-1 text-ink-100 list-disc list-inside">
          {LOSS_FORMULA.assumptions.map((a) => <li key={a}>{a}</li>)}
        </ul>
        <h4 className="text-[11px] uppercase tracking-widest text-accent-400 mt-4 mb-2">
          {bn ? "সতর্কতা" : "Caveats"}
        </h4>
        <ul className="space-y-1 text-ink-100 list-disc list-inside">
          {LOSS_FORMULA.caveats.map((c) => <li key={c}>{c}</li>)}
        </ul>
        <p className="mt-4 text-ink-200 leading-relaxed">{bn ? bnLoss.body : `The post-audit package promotes the loss-certificate mechanism (IDEA-026) into HYBRID-008's control plane, alongside the two seed sources R003 C19 and R014 L05371. The formula above is shown as it is used in the package; this is a presentation, not a re-derivation.`}</p>
        <p className="mt-2 text-[11px] text-ink-300 code-like">{bn ? bnLoss.source : "Source: finalaudit.md section L (security)."}</p>
      </div>
    </div>
  );
}

function Diagrams({ bn }: { bn: boolean }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent-400 mb-3">{bn ? "ডায়াগ্রাম হিসেবে স্থাপত্য" : "Architecture as diagrams"}</h3>
      <p className={`text-sm text-ink-200 mb-3 ${bn ? "font-bn" : ""}`}>
        {bn ? "ডায়াগ্রামগুলি উৎস স্থাপত্যের ব্যাখ্যা। যেকোনো ব্লক mermaid.live-এ কপি করে রেন্ডার করুন।" : "Diagrams are interpretations of the source architecture. Copy any block into mermaid.live for a rendered image."}
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <MermaidBlock source={MERMAID_FLOW_HYBRID_008} title="HYBRID-008 — route M" />
        <MermaidBlock source={MERMAID_FLOW_X1} title="X1 — mandate enforcement" />
        <MermaidBlock source={MERMAID_FLOW_HYBRID_002R} title="HYBRID-002R — ServiceMeter" />
      </div>
    </div>
  );
}

function Matrix({ bn }: { bn: boolean }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent-400 mb-3">{bn ? "নিয়ন্ত্রণ ম্যাট্রিক্স" : "Control matrix"}</h3>
      <p className={`text-sm text-ink-200 mb-3 ${bn ? "font-bn" : ""}`}>{bn ? "তিন প্রোটোটাইপ-যাচাই প্রার্থী কীভাবে প্রতিটি নিয়ন্ত্রণ ক্ষেত্রে সাড়া দেয়।" : "How the three prototype-validation candidates answer each control area."}</p>
      <div className="overflow-x-auto rounded-xl border border-ink-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
              <th className="text-left p-3">{bn ? "ক্ষেত্র" : "Area"}</th>
              <th className="text-left p-3">HYBRID-008</th>
              <th className="text-left p-3">HYBRID-002R</th>
            </tr>
          </thead>
          <tbody>
            {CONTROL_MATRIX.map((r) => (
              <tr key={r.controlArea} className="border-t border-ink-800 align-top">
                <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>{r.controlArea}</td>
                <td className={`p-3 text-ink-100 ${bn ? "font-bn" : ""}`}>{r.hybrid008 || <span className="text-ink-400">—</span>}</td>
                <td className={`p-3 text-ink-100 ${bn ? "font-bn" : ""}`}>{r.hybrid002R || <span className="text-ink-400">—</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Experiments({ bn }: { bn: boolean }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-accent-400 mb-3">{bn ? "নির্ধারণকারী প্রোটোটাইপ পরীক্ষা" : "Decisive prototype experiments"}</h3>
      <p className={`text-sm text-ink-200 mb-3 ${bn ? "font-bn" : ""}`}>
        {bn ? "ছয়টি পরীক্ষা শীর্ষ তিনটিকে কভার করে। কোনোটি চালানো হয়নি।" : "Six experiments cover the top three. None has been run."}
      </p>
      <div className="space-y-3">
        {EXPERIMENTS.map((e) => {
          const bnE = (bnSnapshot as any).experiments[e.id] || {};
          return (
            <div key={e.id} className="rounded-xl border border-ink-800 bg-ink-900/40 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="code-like text-accent-400 text-sm">{e.id}</span>
                <h4 className={`text-ink-50 font-semibold ${bn ? "font-bn" : ""}`}>{bn ? bnE.title || e.title : e.title}</h4>
                <span className="text-[10px] uppercase tracking-widest text-amber-300/80 border border-amber-300/40 rounded px-1.5 py-0.5">{e.status}</span>
                <span className="ml-auto text-[11px] text-ink-300 code-like">{bn ? "বাকি:" : "Due:"} {e.due}</span>
              </div>
              <dl className={`mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm ${bn ? "font-bn" : ""}`}>
                <Row label={bn ? "প্রকল্পনা" : "Hypothesis"} value={bn ? bnE.hypothesis : e.hypothesis} />
                <Row label={bn ? "ন্যূনতম বাস্তবায়ন" : "Minimum impl."} value={bn ? bnE.minimumImplementation : e.minimumImplementation} />
                <Row label={bn ? "টুল ও অবকাঠামো" : "Tools"} value={bn ? bnE.toolsAndInfrastructure : e.toolsAndInfrastructure} />
                <Row label={bn ? "পরিবেশ" : "Environment"} value={bn ? bnE.environment : e.environment} />
                <Row label={bn ? "পজিটিভ পরীক্ষা" : "Positive tests"} value={bn ? bnE.positiveTests : e.positiveTests} />
                <Row label={bn ? "নেগেটিভ পরীক্ষা" : "Negative tests"} value={bn ? bnE.negativeTests : e.negativeTests} />
                <Row label={bn ? "প্রতিকূল পরীক্ষা" : "Adversarial"} value={bn ? bnE.adversarialTests : e.adversarialTests} />
                <Row label={bn ? "পরিমাণগত গ্রহণযোগ্যতা" : "Quantitative acceptance"} value={bn ? bnE.quantitativeAcceptance : e.quantitativeAcceptance} />
                <Row label={bn ? "ব্যর্থতার শর্ত" : "Failure conditions"} value={bn ? bnE.failureConditions : e.failureConditions} />
                <Row label={bn ? "অন-চেইন প্রমাণ" : "On-chain evidence"} value={bn ? bnE.onchainEvidence : e.onchainEvidence} />
                <Row label={bn ? "আর্থিক এক্সপোজার" : "Exposure limit"} value={bn ? bnE.exposureLimit : e.exposureLimit} />
                <Row label={bn ? "বাহ্যিক নির্ভরশীলতা" : "External deps"} value={bn ? bnE.externalDependencies : e.externalDependencies} />
                <Row label={bn ? "আনুমানিক পরিশ্রম" : "Estimated effort"} value={bn ? bnE.estimatedEffort : e.estimatedEffort} />
                <Row label={bn ? "ফলাফলের পরিণতি" : "Result implications"} value={bn ? bnE.resultImplications : e.resultImplications} />
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-[11px] uppercase tracking-widest text-ink-300">{label}</dt>
      <dd className="text-ink-100 leading-relaxed">{value}</dd>
    </>
  );
}
