import { Link } from "react-router-dom";
import {
  INVENTORY_TOTALS,
  RESEARCH_PROCESS_STAGES,
  RANKING_LAYER_B_BALANCED,
  TOP_THREE_VALIDATION,
  SNAPSHOT_DATE,
  SUBMISSION_DEADLINE,
  X1_DUE,
} from "../data";
import { StatCard, SectionHeader } from "../components/Cards";
import { GateBadge, DecisionBadge, PrototypeBadge } from "../components/Badges";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import bnSnapshot from "../i18n/bn/snapshot.json";
import type { ReactNode } from "react";

const STAGE_BN: Record<number, { label: string; description: string; status: string }> = {
  1: {
    label: bnSnapshot.snapshot.research_process_stages[0].label,
    description: bnSnapshot.snapshot.research_process_stages[0].description,
    status: "সম্পন্ন",
  },
  2: {
    label: bnSnapshot.snapshot.research_process_stages[1].label,
    description: bnSnapshot.snapshot.research_process_stages[1].description,
    status: "পোস্ট-অডিট প্যাকেজ দ্বারা প্রতিস্থাপিত",
  },
  3: {
    label: bnSnapshot.snapshot.research_process_stages[2].label,
    description: bnSnapshot.snapshot.research_process_stages[2].description,
    status: "রায়প্রাপ্ত",
  },
  4: {
    label: bnSnapshot.snapshot.research_process_stages[3].label,
    description: bnSnapshot.snapshot.research_process_stages[3].description,
    status: "রায়প্রাপ্ত",
  },
  5: {
    label: bnSnapshot.snapshot.research_process_stages[4].label,
    description: bnSnapshot.snapshot.research_process_stages[4].description,
    status: "বর্তমান স্ন্যাপশট",
  },
  6: {
    label: bnSnapshot.snapshot.research_process_stages[5].label,
    description: bnSnapshot.snapshot.research_process_stages[5].description,
    status: "PENDING — কোনো পরীক্ষা চালানো হয়নি",
  },
  7: {
    label: bnSnapshot.snapshot.research_process_stages[6].label,
    description: bnSnapshot.snapshot.research_process_stages[6].description,
    status: "মুলতুবি",
  },
};

const PROTOTYPE_BLOCK_BN: Record<string, { uncertainty: string; reason: string }> = {
  "HYBRID-008": {
    uncertainty: (bnSnapshot as any).topThreeValidation["HYBRID-008"].uncertainty,
    reason: (bnSnapshot as any).topThreeValidation["HYBRID-008"].reason,
  },
  "IDEA-073": {
    uncertainty: (bnSnapshot as any).topThreeValidation["IDEA-073"].uncertainty,
    reason: (bnSnapshot as any).topThreeValidation["IDEA-073"].reason,
  },
  "HYBRID-002R": {
    uncertainty: (bnSnapshot as any).topThreeValidation["HYBRID-002R"].uncertainty,
    reason: (bnSnapshot as any).topThreeValidation["HYBRID-002R"].reason,
  },
};

function RankTable() {
  const { lang } = useLang();
  return (
    <div className="rounded-xl border border-ink-800 overflow-hidden">
      <div className="grid grid-cols-12 gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-ink-300 border-b border-ink-800 bg-ink-900/40">
        <div className="col-span-1">#</div>
        <div className="col-span-4">{lang === "bn" ? "প্রার্থী" : "Candidate"}</div>
        <div className="col-span-2 text-right">Layer B</div>
        <div className="col-span-2">{lang === "bn" ? "গেট" : "Gate"}</div>
        <div className="col-span-3">{lang === "bn" ? "সিদ্ধান্ত" : "Decision"}</div>
      </div>
      {RANKING_LAYER_B_BALANCED.map((c) => (
        <Link
          to={`/explorer/${c.id}`}
          key={c.id}
          className="grid grid-cols-12 gap-2 px-4 py-3 text-sm border-b border-ink-800/60 last:border-0 hover:bg-ink-900/40 transition-colors"
        >
          <div className="col-span-1 text-ink-300 code-like">{c.rank}</div>
          <div className="col-span-4">
            <div className="text-ink-50 font-medium">
              <span className="code-like mr-2 text-accent-400">{c.id}</span>
              <span className={lang === "bn" ? "font-bn" : ""}>
                {lang === "bn" ? fieldBn(c.id, "name", c.name) : c.name}
              </span>
            </div>
          </div>
          <div className="col-span-2 text-right">
            <div className="code-like text-ink-50">{c.layerBCentre}</div>
            <div className="text-[10px] text-ink-300">{c.layerBAndRange}</div>
          </div>
          <div className="col-span-2">
            <GateBadge gate={c.gate} />
          </div>
          <div className="col-span-3 flex flex-wrap items-center gap-1">
            <DecisionBadge decision={c.decision} />
            {c.prototypeValidation && <PrototypeBadge />}
          </div>
        </Link>
      ))}
    </div>
  );
}

function ResearchProcess() {
  const { lang } = useLang();
  return (
    <ol className="relative space-y-3 pl-6 before:absolute before:left-2 before:top-1 before:bottom-1 before:w-px before:bg-gradient-to-b before:from-accent-500/60 before:to-ink-800">
      {RESEARCH_PROCESS_STAGES.map((s) => {
        const isCurrent = s.status.startsWith("Current") || s.status.startsWith("Pending");
        const bn = lang === "bn" ? STAGE_BN[s.stage] : null;
        const label = bn ? bn.label : s.label;
        const description = bn ? bn.description : s.description;
        const status = bn ? bn.status : s.status;
        return (
          <li key={s.stage} className="relative">
            <span
              className={`absolute -left-[18px] top-1.5 w-3 h-3 rounded-full ring-2 ring-ink-950 ${
                isCurrent ? "bg-accent-500 shadow-[0_0_0_4px_rgba(34,179,197,0.18)]" : "bg-ink-700"
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="code-like text-xs text-accent-400">{s.stage.toString().padStart(2, "0")}</span>
              <span className={`text-ink-50 font-medium ${lang === "bn" ? "font-bn" : ""}`}>{label}</span>
              <span className="text-[11px] text-ink-300 ml-auto">{status}</span>
            </div>
            <p className={`text-sm text-ink-200 leading-relaxed mt-1 ${lang === "bn" ? "font-bn" : ""}`}>{description}</p>
            <p className="text-[11px] text-ink-400 code-like mt-0.5">{s.source}</p>
          </li>
        );
      })}
    </ol>
  );
}

function PrototypeBlock() {
  const { lang } = useLang();
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {TOP_THREE_VALIDATION.map((c) => {
        const bn = lang === "bn" ? PROTOTYPE_BLOCK_BN[c.id] : null;
        return (
          <div key={c.id} className="rounded-xl border border-accent-500/30 bg-accent-500/5 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="code-like text-accent-400 text-sm">{c.id}</span>
              <PrototypeBadge />
            </div>
            <h4 className={`font-medium text-ink-50 mb-2 ${lang === "bn" ? "font-bn" : ""}`}>
              {lang === "bn" ? fieldBn(c.id, "name", c.name) : c.name}
            </h4>
            <p className={`text-sm text-ink-200 leading-relaxed ${lang === "bn" ? "font-bn" : ""}`}>
              {bn ? bn.uncertainty : c.uncertainty}
            </p>
            <p className={`text-[11px] text-ink-300 mt-2 ${lang === "bn" ? "font-bn" : ""}`}>
              <strong>{lang === "bn" ? "অনিশ্চতা কেন:" : "Uncertainty:"}</strong>{" "}
              {bn ? bn.reason : c.reason}
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              {c.experiments.map((e) => (
                <span
                  key={e}
                  className="text-[10px] code-like px-1.5 py-0.5 rounded border border-accent-500/30 text-accent-300"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function OverviewPage() {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  const introPara = bn
    ? `২০২৬ শেনজেন আন্তর্জাতিক ফিনটেক প্রতিযোগিতা, টপিক F: এজেন্ট ওয়ালেট। ১৪ অক্টোবর ২০২৬ পোস্ট-অডিট সিদ্ধান্ত প্যাকেজের উৎস-যাচাইযোগ্য, দ্বিভাষিক উপস্থাপনা — শীর্ষ দশ প্রার্থী, তিনটি প্রোটোটাইপ-যাচাই পছন্দ, নিরাপত্তা স্থাপত্য এবং সম্পূর্ণ ৯৬-এন্ট্রি গবেষণা গ্রন্থাগার সহ।`
    : `2026 Shenzhen International FinTech Competition, Topic F: Agent Wallet. A source-traceable, bilingual presentation of the 14 October 2026 post-audit decision package.`;
  const notList: ReactNode[] = bn
    ? [
        "সমস্ত প্রার্থী ID, নাম ও র‍্যাঙ্কিং অবস্থান অপরিবর্তিত।",
        "সমস্ত গেট ও সিদ্ধান্ত লেবেল পোস্ট-অডিট প্যাকেজের সাথে মিলে।",
        <>
          মুলতুবি পরীক্ষাগুলি সম্পন্ন হিসেবে দেখানো হয়নি। অবস্থা সর্বত্র{" "}
          <span className="font-bn">"PENDING — কোনো পরীক্ষা চালানো হয়নি।"</span>
        </>,
        "অনুপস্থিত উৎস উপাদান (R004, R006, R007, R008, R014) পূরণ না করে নাম করা হয়েছে।",
        <>
          কোনো বিজয়ী ঘোষণা করার আগে যে এগারোটি শর্ত পূরণ করতে হবে তার জন্য{" "}
          <Link className="text-accent-400 underline" to="/validation">
            {t("nav.validation")}
          </Link>{" "}
          দেখুন।
        </>,
      ]
    : [
        "All candidate IDs, names, and ranking positions are unchanged.",
        "All gate and decision labels match the post-audit package.",
        "Pending experiments are not shown as completed.",
        "Missing source material (R004, R006, R007, R008, R014) is named rather than filled in.",
        <>
          See <Link className="text-accent-400 underline" to="/validation">{t("nav.validation")}</Link>{" "}
          for the eleven conditions that must hold before any winner can be declared.
        </>,
      ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent-400 mb-2">
          {SNAPSHOT_DATE} · {bn ? "পোস্ট-অডিট স্ন্যাপশট" : "post-audit snapshot"}
        </div>
        <h1 className="text-3xl sm:text-5xl font-semibold text-ink-50 leading-tight">
          {bn ? "এজেন্ট ওয়ালেট — আইডিয়া এক্সপ্লোরার" : "Agent Wallet — Idea Explorer"}
        </h1>
        <p className={`mt-3 text-base sm:text-lg text-ink-200 max-w-3xl leading-relaxed ${bn ? "font-bn" : ""}`}>
          {introPara}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link to="/explorer" className="px-4 py-2 rounded-md bg-accent-500 hover:bg-accent-400 text-ink-950 text-sm font-medium">
            {bn ? "আইডিয়া এক্সপ্লোরার খুলুন →" : "Open Idea Explorer →"}
          </Link>
          <Link to="/compare" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">
            {bn ? "প্রোটোটাইপ পছন্দ তুলনা করুন" : "Compare prototype picks"}
          </Link>
          <Link to="/security" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">
            {bn ? "নিরাপত্তা ও যাচাই" : "Security & validation"}
          </Link>
          <Link to="/presentation" className="px-4 py-2 rounded-md border border-ink-700 hover:border-accent-500/60 text-ink-50 text-sm">
            {bn ? "উপস্থাপনা মোড" : "Presentation mode"}
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        <StatCard label={bn ? "মোট এন্ট্রি" : "Total entries"} value={INVENTORY_TOTALS.totalEntries} hint={`${INVENTORY_TOTALS.ideas} ${bn ? "আইডিয়া" : "ideas"} · ${INVENTORY_TOTALS.hybrids} ${bn ? "হাইব্রিড" : "hybrids"}`} />
        <StatCard label={bn ? "র‍্যাঙ্কড শর্টলিস্ট" : "Ranked shortlist"} value={INVENTORY_TOTALS.topTenShortlist} hint={`${bn ? "শীর্ষ" : "Top"} ${INVENTORY_TOTALS.topFiveExpanded} ${bn ? "পূর্ণ বিস্তারিতসহ" : "expanded with full detail"}`} />
        <StatCard label={bn ? "প্রোটোটাইপ যাচাই" : "Prototype validation"} value={INVENTORY_TOTALS.prototypeValidationCandidates} hint={`X1 ${bn ? "বাকি" : "due"} ${X1_DUE}`} accent />
        <StatCard label={bn ? "জমা দেওয়া" : "Submission"} value={SUBMISSION_DEADLINE} hint={bn ? "কোনো বিজয়ী ঘোষণা করা হয়নি" : "No winner declared · no experiment run"} />
      </div>
      <section className="mb-12">
        <SectionHeader eyebrow={bn ? "অস্থায়ী পছন্দ" : "Provisional preference"} title={t("overview.leadingTen")} subtitle={t("overview.leadingTenBody")} />
        <RankTable />
      </section>
      <section className="mb-12">
        <SectionHeader eyebrow={bn ? "তিন প্রোটোটাইপ-যাচাই প্রার্থী" : "The three prototype-validation candidates"} title={t("overview.threeReasons")} subtitle={t("overview.threeReasonsBody")} />
        <PrototypeBlock />
      </section>
      <section className="mb-12">
        <SectionHeader eyebrow={bn ? "গবেষণা কালানুক্রম" : "Research chronology"} title={bn ? "১৪টি উৎস প্রতিবেদন থেকে ৯৬-এন্ট্রি ইনভেন্টরিতে" : "From 14 source reports to a 96-entry inventory"} subtitle={bn ? "প্রতিটি পর্যায় সংরক্ষিত। পোস্ট-অডিট রায় প্যাকেজ হলো বর্তমান স্ন্যাপশট।" : "Each stage is preserved. The post-audit adjudication package is the current snapshot."} />
        <ResearchProcess />
      </section>
      <section>
        <SectionHeader eyebrow={bn ? "এই সাইটটি কী নয়" : "What this site is not"} title={bn ? "একটি উপস্থাপনা, পুনঃরায় নয়" : "A presentation, not a re-adjudication"} subtitle={bn ? "এই ইন্টারফেসটি সরবরাহকৃত ফাইলগুলি থেকে প্রতিটি গবেষণা ফলাফল বাইট-বাই-বাইট সংরক্ষণ করে।" : "This interface preserves every research finding byte-for-byte from the supplied files."} />
        <ul className={`text-sm text-ink-200 space-y-2 list-disc list-inside ${bn ? "font-bn" : ""}`}>
          {notList.map((n, i) => (<li key={i}>{n}</li>))}
        </ul>
      </section>
    </div>
  );
}
