// Universal idea detail component.
//
// Renders the 17-section A-Q template for ANY idea in the 96-entry
// inventory. Fields that are not specified in the available research
// are displayed with an honest "Not specified in the available
// research" label rather than fabricated content. The component is
// fully bilingual through the BilingualText and fieldBn helpers, and
// it provides a side-by-side English/Bengali mode at the section
// level.
//
// Sections:
//   A. Idea overview
//   B. What real-world problem does it solve?
//   C. Real-world example
//   D. How does the idea work?
//   E. Why is AI needed?
//   F. Why blockchain?
//   G. Existing competitors
//   H. Innovation and differentiation
//   I. Advantages
//   J. Weaknesses and limitations
//   K. Security architecture
//   L. How would we implement it?
//   M. MVP and demonstration
//   N. Evaluation
//   O. Experiments and open questions
//   P. Why was this idea selected, deferred or rejected?
//   Q. Source evidence

import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "./LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import { BilingualText, SideBySideParagraph } from "./BilingualText";
import { GateBadge } from "./Badges";
import type { UniversalIdea } from "../data";

interface UniversalIdeaDetailProps {
  idea: UniversalIdea;
  /** All ideas in the inventory, used for prev/next navigation. */
  siblings: UniversalIdea[];
}

const MISSING_EN = "Not specified in the available research.";
const MISSING_BN = "প্রাপ্ত গবেষণায় উল্লেখ নেই।";

/** Status tag rendering for a top-10 ranked record. */
function isRanked(id: string): boolean {
  return [
    "HYBRID-008", "IDEA-073", "IDEA-001", "HYBRID-002R", "HYBRID-009",
    "IDEA-033", "HYBRID-001", "HYBRID-003", "IDEA-074", "IDEA-081",
  ].includes(id);
}

interface SectionProps {
  letter: string;
  enTitle: string;
  bnTitle: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function Section({ letter, enTitle, bnTitle, defaultOpen = false, children }: SectionProps) {
  const { lang } = useLang();
  const [open, setOpen] = useState(defaultOpen);
  const title = lang === "bn" ? bnTitle : enTitle;
  return (
    <section
      id={`section-${letter}`}
      className="rounded-xl border border-ink-800 bg-ink-900/40 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between gap-2 px-4 sm:px-5 py-3 hover:bg-ink-800/40"
        aria-expanded={open}
        aria-controls={`section-body-${letter}`}
      >
        <span className="flex items-center gap-2">
          <span className="code-like text-xs text-accent-400">{letter}</span>
          <span
            className={`text-sm font-semibold text-ink-50 ${
              lang === "bn" ? "font-bn" : ""
            }`}
          >
            {title}
          </span>
        </span>
        <span className="text-ink-300 text-xs">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div
          id={`section-body-${letter}`}
          className={`px-4 sm:px-5 py-4 border-t border-ink-800 text-sm leading-relaxed text-ink-100 ${
            lang === "bn" ? "font-bn" : ""
          }`}
        >
          {children}
        </div>
      )}
    </section>
  );
}

function MissingField({ id, field, sideBySide }: { id: string; field: string; sideBySide: boolean }) {
  return (
    <p className="text-ink-300 italic text-sm">
      <BilingualText
        id={id}
        field={field}
        en={MISSING_EN}
        bn={MISSING_BN}
        sideBySide={sideBySide}
        showOriginalToggle={false}
      />
    </p>
  );
}

function FieldRow({
  id,
  field,
  en,
  bn,
  sideBySide,
}: {
  id: string;
  field: string;
  en?: string;
  bn?: string;
  sideBySide: boolean;
}) {
  const enVal = en ?? "";
  const bnVal = bn ?? "";
  if (!enVal) {
    return <MissingField id={id} field={field} sideBySide={sideBySide} />;
  }
  return (
    <BilingualText
      id={id}
      field={field}
      en={enVal}
      sideBySide={sideBySide}
      showOriginalToggle={false}
    />
  );
}

function parseCompetitorList(s: string): string[] {
  if (!s) return [];
  return s
    .split(/[;|]/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function parseSourcesList(idea: UniversalIdea): string[] {
  if (Array.isArray(idea.sources_list) && idea.sources_list.length) {
    return idea.sources_list;
  }
  if (!idea.sources) return [];
  return idea.sources
    .split(/[;|]/)
    .map((x) => x.trim())
    .filter(Boolean);
}

export function UniversalIdeaDetail({ idea, siblings }: UniversalIdeaDetailProps) {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  const [sideBySide, setSideBySide] = useState(false);
  const displayName = bn ? fieldBn(idea.id, "name", idea.name) : idea.name;

  const idx = siblings.findIndex((s) => s.id === idea.id);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const competitors = parseCompetitorList(idea.closest_competitor);
  const sources = parseSourcesList(idea);

  return (
    <div className="space-y-4">
      {/* Header */}
      <header className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="code-like text-accent-400 text-sm">{idea.id}</span>
          <GateBadge gate={idea.gate} />
          {isRanked(idea.id) && (
            <span className="text-[10px] uppercase tracking-widest text-accent-400 border border-accent-500/40 rounded px-1.5 py-0.5">
              {bn ? "শীর্ষ ১০" : "Top 10"}
            </span>
          )}
          {idea.change_status && (
            <span className="text-[10px] uppercase tracking-widest text-ink-300 border border-ink-700 rounded px-1.5 py-0.5">
              {idea.change_status}
            </span>
          )}
        </div>
        <h1
          className={`text-2xl sm:text-3xl font-semibold text-ink-50 mt-2 leading-tight ${
            bn ? "font-bn" : ""
          }`}
        >
          {displayName}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSideBySide((v) => !v)}
            className="text-[10px] uppercase tracking-widest text-accent-400 hover:text-accent-300 underline"
            aria-pressed={sideBySide}
          >
            {sideBySide ? t("common.bengaliOnly") : t("common.sideBySide")}
          </button>
        </div>
      </header>

      {/* A. Overview */}
      <Section letter="A" enTitle="A. Idea overview" bnTitle="A. ধারণার সারসংক্ষেপ" defaultOpen>
        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "প্রার্থী ID" : "Candidate ID"}
          </dt>
          <dd className="code-like text-ink-50">{idea.id}</dd>
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "ধারণার নাম" : "Idea name"}
          </dt>
          <dd className="text-ink-50">
            <BilingualText
              id={idea.id}
              field="name"
              en={idea.name}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </dd>
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "ধারণার বিভাগ" : "Concept category"}
          </dt>
          <dd>
            <BilingualText
              id={idea.id}
              field="customer"
              en={idea.customer || MISSING_EN}
              bn={idea.customer ? "" : MISSING_BN}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </dd>
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "বর্তমান সিদ্ধান্ত অবস্থা" : "Current decision status"}
          </dt>
          <dd>
            <GateBadge gate={idea.gate} />
          </dd>
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "র‍্যাঙ্কিং" : "Ranking"}
          </dt>
          <dd>
            {isRanked(idea.id) ? (
              <span className="text-ink-50">
                {bn
                  ? "শীর্ষ ১০ র‍্যাঙ্কড শর্টলিস্টে অন্তর্ভুক্ত।"
                  : "Included in the Top 10 ranked shortlist."}
              </span>
            ) : (
              <span className="text-ink-300 italic">
                {bn
                  ? "শীর্ষ ১০ র‍্যাঙ্কড শর্টলিস্টে নেই।"
                  : "Not in the Top 10 ranked shortlist."}
              </span>
            )}
          </dd>
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "গবেষণা আত্মবিশ্বাস" : "Research confidence"}
          </dt>
          <dd>
            <BilingualText
              id={idea.id}
              field="evidence_confidence"
              en={idea.evidence_confidence || MISSING_EN}
              bn={idea.evidence_confidence ? "" : MISSING_BN}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </dd>
          <dt className="text-[11px] uppercase tracking-widest text-ink-300">
            {bn ? "মূল / সংশোধিত / হাইব্রিড" : "Original / restored / hybrid"}
          </dt>
          <dd>
            {idea.change_status
              ? idea.change_status
              : bn
              ? "মূল গবেষণা"
              : "Original research"}
          </dd>
        </dl>
        <p className="mt-4 text-ink-100">
          <BilingualText
            id={idea.id}
            field="financial_problem"
            en={idea.financial_problem || MISSING_EN}
            bn={idea.financial_problem ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
      </Section>

      {/* B. Real-world problem */}
      <Section letter="B" enTitle="B. What real-world problem does it solve?" bnTitle="B. এটি কোন বাস্তব সমস্যার সমাধান করে?">
        <p className="mb-3">
          <BilingualText
            id={idea.id}
            field="financial_problem"
            en={idea.financial_problem || MISSING_EN}
            bn={idea.financial_problem ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        <p className="mb-3">
          <BilingualText
            id={idea.id}
            field="customer"
            en={idea.customer || MISSING_EN}
            bn={idea.customer ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        {idea.agent_responsibilities && (
          <p>
            <strong className="text-ink-200">{bn ? "প্রস্তাবিত সুবিধা: " : "Proposed benefit: "}</strong>
            <BilingualText
              id={idea.id}
              field="agent_responsibilities"
              en={idea.agent_responsibilities}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
      </Section>

      {/* C. Real-world example */}
      <Section letter="C" enTitle="C. Real-world example" bnTitle="C. বাস্তব উদাহরণ">
        <p>
          <BilingualText
            id={idea.id}
            field="demo_and_evaluation"
            en={idea.demo_and_evaluation || MISSING_EN}
            bn={idea.demo_and_evaluation ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        {idea.demo_and_evaluation ? (
          <p className={`mt-3 text-[11px] text-ink-300 ${bn ? "font-bn" : ""}`}>
            {bn
              ? "উপরের প্রদর্শন পরিস্থিতি সরাসরি উৎস নথি থেকে নেওয়া হয়েছে। কোনো অতিরিক্ত চিত্রায়ণ যোগ করা হয়নি।"
              : "The above demonstration scenario is taken directly from the source documents. No additional illustration has been added."}
          </p>
        ) : (
          <p className={`mt-3 text-[11px] text-amber-300/80 ${bn ? "font-bn" : ""}`}>
            {bn
              ? "Illustrative Scenario — মূল গবেষণার অংশ নয়"
              : "Illustrative Scenario — Not Part of the Original Research"}
          </p>
        )}
      </Section>

      {/* D. How does the idea work? */}
      <Section letter="D" enTitle="D. How does the idea work?" bnTitle="D. ধারণাটি কীভাবে কাজ করে?">
        <p className="mb-2">
          <strong className="text-ink-200">{bn ? "এজেন্টের দায়িত্ব: " : "Agent responsibilities: "}</strong>
          <BilingualText
            id={idea.id}
            field="agent_responsibilities"
            en={idea.agent_responsibilities || MISSING_EN}
            bn={idea.agent_responsibilities ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        <p className="mb-2">
          <strong className="text-ink-200">{bn ? "সম্পদ ব্যবস্থাপনা: " : "Asset management: "}</strong>
          <BilingualText
            id={idea.id}
            field="asset_management_role"
            en={idea.asset_management_role || MISSING_EN}
            bn={idea.asset_management_role ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        <p>
          <strong className="text-ink-200">{bn ? "অন-চেইন কর্মপ্রবাহ: " : "On-chain workflow: "}</strong>
          <BilingualText
            id={idea.id}
            field="onchain_workflow"
            en={idea.onchain_workflow || MISSING_EN}
            bn={idea.onchain_workflow ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
      </Section>

      {/* E. Why AI */}
      <Section letter="E" enTitle="E. Why is AI needed?" bnTitle="E. কেন AI প্রয়োজন?">
        <p>
          {bn
            ? "এই আইডিয়া একজন AI এজেন্টকে একটি নির্দিষ্ট সিদ্ধান্ত বিন্দুতে নিয়োগ করে। সিদ্ধান্ত গ্রহণের সুযোগ উপরের ‘এজেন্টের দায়িত্ব’ ক্ষেত্রে বর্ণিত হয়েছে। AI নিয়ন্ত্রণের বাইরে যা থাকে তা হলো: নিরাপত্তা নীতি, স্বাক্ষর করার ক্ষমতা, এবং ব্যয়ের সীমা — এগুলো নির্ধারণ করে মালিক-স্বাক্ষরিত কন্ট্র্যাক্ট।"
            : "This idea engages an AI agent at a specific decision point. The scope of that decision is described in the agent_responsibilities field above. What remains outside AI control is the security policy, signing authority, and spending limits, which are enforced by owner-signed contracts."}
        </p>
        {idea.agent_responsibilities && (
          <p className="mt-2 text-ink-300 text-[12px]">
            {bn
              ? "যদি মূল গবেষণায় AI-এর ভূমিকা নিয়ে প্রশ্ন থাকে, সেই সমালোচনা নিচের দুর্বলতা বিভাগে সংরক্ষিত আছে।"
              : "If the original research questioned the role of AI, that criticism is preserved in the weaknesses section below."}
          </p>
        )}
      </Section>

      {/* F. Why blockchain */}
      <Section letter="F" enTitle="F. Why blockchain?" bnTitle="F. কেন ব্লকচেইন?">
        <p>
          <BilingualText
            id={idea.id}
            field="onchain_workflow"
            en={idea.onchain_workflow || MISSING_EN}
            bn={idea.onchain_workflow ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        <p className="mt-2">
          <BilingualText
            id={idea.id}
            field="security_model"
            en={idea.security_model || MISSING_EN}
            bn={idea.security_model ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
      </Section>

      {/* G. Competitors */}
      <Section letter="G" enTitle="G. Existing competitors and prior art" bnTitle="G. বিদ্যমান প্রতিযোগী ও পূর্ববর্তী গবেষণা">
        {competitors.length === 0 ? (
          <MissingField id={idea.id} field="closest_competitor" sideBySide={sideBySide} />
        ) : (
          <ul className={`list-disc list-inside space-y-1 ${bn ? "font-bn" : ""}`}>
            {competitors.map((c) => (
              <li key={c} className="text-ink-100">
                <span className="code-like text-accent-400">{c}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-3 text-ink-200 text-[12px]">
          {bn
            ? "প্রতিযোগীদের ক্ষমতা ও সীমাবদ্ধতার উৎস-ভিত্তিক বিশ্লেষণ মূল গবেষণা নথিতে রয়েছে। এই পৃষ্ঠায় প্রতিযোগীর নাম সংরক্ষণ করা হয়েছে; বিস্তারিত বিশ্লেষণ নিচের ‘উৎস প্রমাণ’ বিভাগে অ্যাক্সেসযোগ্য।"
            : "Source-grounded analysis of competitor capabilities and limitations is in the original research documents. Names are preserved here; detailed analysis is accessible in the Source Evidence section below."}
        </p>
      </Section>

      {/* H. Innovation */}
      <Section letter="H" enTitle="H. Innovation and differentiation" bnTitle="H. উদ্ভাবন ও পার্থক্য">
        <p>
          <BilingualText
            id={idea.id}
            field="novelty_hypothesis"
            en={idea.novelty_hypothesis || MISSING_EN}
            bn={idea.novelty_hypothesis ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        <p className="mt-3 text-ink-200 text-[12px]">
          {bn
            ? "উদ্ভাবনের দাবিগুলো Research Hypothesis, Partially Supported, Verified, Contradicted — এই স্তরে শ্রেণীবদ্ধ। চূড়ান্ত রায় এই প্যাকেজের সিদ্ধান্ত ইতিহাসে সংরক্ষিত।"
            : "Innovation claims are categorized as Research Hypothesis, Partially Supported, Verified, or Contradicted. Final verdicts are preserved in the package's decision history."}
        </p>
      </Section>

      {/* I. Advantages */}
      <Section letter="I" enTitle="I. Advantages" bnTitle="I. সুবিধাসমূহ">
        <ul className={`list-disc list-inside space-y-1 ${bn ? "font-bn" : ""}`}>
          <li>
            <BilingualText
              id={idea.id}
              field="financial_problem"
              en={idea.financial_problem || ""}
              bn={idea.financial_problem ? "" : MISSING_BN}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </li>
          <li>
            <BilingualText
              id={idea.id}
              field="agent_responsibilities"
              en={idea.agent_responsibilities || ""}
              bn={idea.agent_responsibilities ? "" : MISSING_BN}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </li>
          {idea.asset_management_role && (
            <li>
              <BilingualText
                id={idea.id}
                field="asset_management_role"
                en={idea.asset_management_role}
                sideBySide={sideBySide}
                showOriginalToggle={false}
              />
            </li>
          )}
        </ul>
      </Section>

      {/* J. Weaknesses */}
      <Section letter="J" enTitle="J. Weaknesses and limitations" bnTitle="J. দুর্বলতা ও সীমাবদ্ধতা">
        <p>
          {bn
            ? "এই বিভাগে প্রতিটি নথিভুক্ত দুর্বলতা, বাস্তবায়ন ঝুঁকি, এবং প্রত্যাখ্যানের কারণ সংরক্ষিত আছে।"
            : "This section preserves every documented weakness, implementation risk, and reason for deferral or rejection."}
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <strong className="text-ink-200">{bn ? "প্রমাণের স্তর: " : "Evidence level: "}</strong>
            <BilingualText
              id={idea.id}
              field="evidence_confidence"
              en={idea.evidence_confidence || MISSING_EN}
              bn={idea.evidence_confidence ? "" : MISSING_BN}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </li>
          <li>
            <strong className="text-ink-200">{bn ? "গেট / সিদ্ধান্ত অবস্থা: " : "Gate / decision status: "}</strong>
            <GateBadge gate={idea.gate} />
          </li>
          {idea.feasibility && (
            <li>
              <strong className="text-ink-200">{bn ? "সম্ভাব্যতা: " : "Feasibility: "}</strong>
              <BilingualText
                id={idea.id}
                field="feasibility"
                en={idea.feasibility}
                sideBySide={sideBySide}
                showOriginalToggle={false}
              />
            </li>
          )}
          {idea.change_note && (
            <li>
              <strong className="text-ink-200">{bn ? "পরিবর্তন নোট: " : "Change note: "}</strong>
              <BilingualText
                id={idea.id}
                field="change_note"
                en={idea.change_note}
                sideBySide={sideBySide}
                showOriginalToggle={false}
              />
            </li>
          )}
        </ul>
      </Section>

      {/* K. Security */}
      <Section letter="K" enTitle="K. Security architecture" bnTitle="K. নিরাপত্তা স্থাপত্য">
        {idea.security_model ? (
          <BilingualText
            id={idea.id}
            field="security_model"
            en={idea.security_model}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        ) : (
          <MissingField id={idea.id} field="security_model" sideBySide={sideBySide} />
        )}
        <p className="mt-3 text-ink-300 text-[12px]">
          {bn
            ? "সম্পূর্ণ ওয়ালেট-স্তরের সুরক্ষা আর্কিটেকচার (স্তর T0–T4, ক্ষতি সীমা, প্রতিকূল পরীক্ষা) সিকিউরিটি পৃষ্ঠায় বিস্তারিতভাবে দেখানো হয়েছে।"
            : "The full wallet-tier security architecture (T0–T4 tiers, loss bound, adversarial tests) is detailed on the Security page."}
        </p>
      </Section>

      {/* L. Implementation */}
      <Section letter="L" enTitle="L. How would we implement it?" bnTitle="L. কীভাবে বাস্তবায়ন করা হবে?">
        <p className="mb-2">
          <strong className="text-ink-200">{bn ? "নির্ভরশীলতা: " : "Dependencies: "}</strong>
          <BilingualText
            id={idea.id}
            field="dependencies"
            en={idea.dependencies || MISSING_EN}
            bn={idea.dependencies ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        {idea.feasibility && (
          <p>
            <strong className="text-ink-200">{bn ? "আনুমানিক প্রচেষ্টা: " : "Estimated effort: "}</strong>
            <BilingualText
              id={idea.id}
              field="feasibility"
              en={idea.feasibility}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
      </Section>

      {/* M. MVP and demo */}
      <Section letter="M" enTitle="M. MVP and demonstration" bnTitle="M. MVP এবং প্রদর্শন">
        {idea.mvp_scope && (
          <p className="mb-2">
            <strong className="text-ink-200">{bn ? "MVP-এর পরিধি: " : "MVP scope: "}</strong>
            <BilingualText
              id={idea.id}
              field="mvp_scope"
              en={idea.mvp_scope}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
        {idea.demo_and_evaluation && (
          <p>
            <strong className="text-ink-200">{bn ? "প্রদর্শন: " : "Demo: "}</strong>
            <BilingualText
              id={idea.id}
              field="demo_and_evaluation"
              en={idea.demo_and_evaluation}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
        <p className="mt-3 text-ink-300 text-[12px]">
          {bn
            ? "প্রতিটি প্রার্থীর পরীক্ষা-চলমান (PENDING) অবস্থা সংরক্ষিত; পরীক্ষা-সম্পন্ন হিসেবে দাবি করা হয়নি।"
            : "Every candidate's experiment status remains PENDING; nothing is reported as a completed experiment."}
        </p>
      </Section>

      {/* N. Evaluation */}
      <Section letter="N" enTitle="N. Evaluation" bnTitle="N. মূল্যায়ন">
        <p className="mb-2">
          <strong className="text-ink-200">{bn ? "গেট: " : "Gate: "}</strong>
          <GateBadge gate={idea.gate} />
        </p>
        <p className="mb-2">
          <strong className="text-ink-200">{bn ? "প্রমাণের আত্মবিশ্বাস: " : "Evidence confidence: "}</strong>
          <BilingualText
            id={idea.id}
            field="evidence_confidence"
            en={idea.evidence_confidence || MISSING_EN}
            bn={idea.evidence_confidence ? "" : MISSING_BN}
            sideBySide={sideBySide}
            showOriginalToggle={false}
          />
        </p>
        {isRanked(idea.id) ? (
          <p className="text-ink-100">
            {bn
              ? "এই প্রার্থী শীর্ষ ১০ র‍্যাঙ্কড শর্টলিস্টে অন্তর্ভুক্ত; লেয়ার B স্কোর ও ওজন সংবেদনশীলতা আইডিয়া এক্সপ্লোরার ও সিদ্ধান্ত ইতিহাস পৃষ্ঠায় দেখানো হয়েছে।"
              : "This candidate is in the Top 10 ranked shortlist; Layer B scores and weighting sensitivity are shown on the Idea Explorer and Decision History pages."}
          </p>
        ) : (
          <p className="text-ink-300 italic">
            {bn
              ? "এই প্রার্থী শীর্ষ ১০ র‍্যাঙ্কড শর্টলিস্টে অন্তর্ভুক্ত নয়; আনুষ্ঠানিক অভ্যন্তরীণ স্কোর নেই।"
              : "This candidate is not in the Top 10 ranked shortlist; no formal internal score is reported."}
          </p>
        )}
      </Section>

      {/* O. Experiments and open questions */}
      <Section letter="O" enTitle="O. Experiments and open questions" bnTitle="O. পরীক্ষা ও অমীমাংসিত প্রশ্ন">
        <p className="text-ink-100">
          {isRanked(idea.id)
            ? bn
              ? "এই প্রার্থীর জন্য X1, X2 বা X5 পরীক্ষাগুলির মধ্যে একটি বা একাধিক পরিকল্পিত। সমস্ত পরীক্ষা PENDING। সিকিউরিটি পৃষ্ঠায় বিস্তারিত দেখুন।"
              : "One or more of X1, X2, or X5 is planned for this candidate. Every experiment is PENDING. See the Security page for details."
            : bn
            ? "এই প্রার্থীর জন্য কোনো নির্দিষ্ট পরীক্ষা পরিকল্পিত হয়নি।"
            : "No dedicated experiment is planned for this candidate."}
        </p>
        {idea.novelty_hypothesis && (
          <p className="mt-2 text-ink-200 text-[12px]">
            <strong className="text-ink-200">{bn ? "অমীমাংসিত প্রশ্ন: " : "Open question: "}</strong>
            <BilingualText
              id={idea.id}
              field="novelty_hypothesis"
              en={idea.novelty_hypothesis}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
      </Section>

      {/* P. Selection / deferral / rejection rationale */}
      <Section letter="P" enTitle="P. Why was this idea selected, deferred or rejected?" bnTitle="P. কেন এই ধারণাটি নির্বাচিত, স্থগিত বা প্রত্যাখ্যাত হয়েছিল?">
        <p className="mb-2">
          <strong className="text-ink-200">{bn ? "বর্তমান গেট: " : "Current gate: "}</strong>
          <GateBadge gate={idea.gate} />
        </p>
        {idea.change_note && (
          <p className="mb-2">
            <BilingualText
              id={idea.id}
              field="change_note"
              en={idea.change_note}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
        {idea.change_status && (
          <p className="mb-2 text-ink-300 text-[12px]">
            <strong>{bn ? "পরিবর্তনের অবস্থা: " : "Change status: "}</strong>
            {idea.change_status}
          </p>
        )}
        <p className="text-ink-200 text-[12px]">
          {bn
            ? "সিদ্ধান্ত ইতিহাস, Audit A ও Audit B-এর পূর্ণ রায় ‘সিদ্ধান্ত ইতিহাস’ পৃষ্ঠায় পাওয়া যাবে।"
            : "The full decision chronology, Audit A, and Audit B verdicts are available on the Decision History page."}
        </p>
      </Section>

      {/* Q. Source evidence */}
      <Section letter="Q" enTitle="Q. Source evidence" bnTitle="Q. উৎস প্রমাণ">
        {sources.length === 0 ? (
          <MissingField id={idea.id} field="sources" sideBySide={sideBySide} />
        ) : (
          <ul className={`list-disc list-inside space-y-1 ${bn ? "font-bn" : ""}`}>
            {sources.map((s, i) => (
              <li key={i} className="code-like text-ink-200 text-sm">
                {s}
              </li>
            ))}
          </ul>
        )}
        {idea.change_note && (
          <p className="mt-3 text-ink-200 text-[12px]">
            <strong className="text-ink-200">{bn ? "পরিবর্তন নোট: " : "Change note: "}</strong>
            <BilingualText
              id={idea.id}
              field="change_note"
              en={idea.change_note}
              sideBySide={sideBySide}
              showOriginalToggle={false}
            />
          </p>
        )}
        <p className="mt-3 text-ink-300 text-[11px]">
          {bn
            ? "মূল গবেষণা নথির SHA-256 চেকসাম tools/source_checksums.json-এ রেকর্ড করা আছে।"
            : "SHA-256 checksums of the original research documents are recorded in tools/source_checksums.json."}
        </p>
      </Section>

      {/* Compare + Prev/Next nav */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-6 pt-4 border-t border-ink-800">
        <div className="flex gap-2">
          {prev && (
            <Link
              to={`/ideas/${prev.id}`}
              className="text-xs px-3 py-1.5 rounded border border-ink-700 hover:border-accent-500/60 text-ink-100"
            >
              ← {bn ? "পূর্ববর্তী" : "Previous"}: {prev.id}
            </Link>
          )}
          {next && (
            <Link
              to={`/ideas/${next.id}`}
              className="text-xs px-3 py-1.5 rounded border border-ink-700 hover:border-accent-500/60 text-ink-100"
            >
              {bn ? "পরবর্তী" : "Next"}: {next.id} →
            </Link>
          )}
        </div>
        <Link
          to={`/compare?ids=${idea.id}`}
          className="text-xs px-3 py-1.5 rounded border border-accent-500/40 text-accent-300 hover:bg-accent-500/10"
        >
          {bn ? "এই ধারণাটি তুলনা করুন" : "Compare with another idea"}
        </Link>
      </div>
    </div>
  );
}
