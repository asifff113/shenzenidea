// Universal idea detail page. Resolves any of the 96 inventory IDs.
//
// The Top 10 still use the rich CandidatePage (which has the
// internal scoring / sensitivity / two-depths treatment). All other
// records use the UniversalIdeaDetail component, which renders the
// 17-section A-Q template from the master inventory. This is
// deliberate: the Top 10 have additional data (Layer B centre,
// Layer A range, prototype-validation flag, sensitivity band) that
// is not present in the 96-entry master inventory, while the
// universal template works for every record.

import { useParams, Link, Navigate } from "react-router-dom";
import { IDEAS, IDEAS_BY_ID, findRanked, EXPECTED_INVENTORY_SIZE } from "../data";
import { UniversalIdeaDetail } from "../components/UniversalIdeaDetail";
import { CandidatePage } from "./CandidatePage";
import { useLang } from "../components/LanguageContext";

export function IdeaPage() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLang();
  const bn = lang === "bn";

  if (!id) return <Navigate to="/library" replace />;

  // Top-10 candidates get the rich two-depths treatment; everyone
  // else gets the universal A-Q template.
  const ranked = findRanked(id);
  const universal = IDEAS_BY_ID[id];

  if (ranked) {
    return <CandidatePage />;
  }

  if (!universal) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-xl border border-amber-300/40 bg-amber-500/5 p-6 text-sm text-ink-100">
          <h2 className="text-lg font-semibold text-amber-300 mb-2">
            {bn ? "প্রার্থী পাওয়া যায়নি" : "Candidate not found"}
          </h2>
          <p className="text-ink-200">
            {bn
              ? `“${id}” আইডিয়া এক্সপ্লোরারের ৯৬-এন্ট্রি ইনভেন্টরিতে নেই।`
              : `“${id}” is not in the 96-entry inventory of the Idea Explorer.`}
          </p>
          <p className="text-ink-300 text-[12px] mt-2">
            {bn
              ? "পোস্ট-অডিট প্যাকেজে নথিভুক্ত প্রতিটি প্রার্থী গ্রন্থাগার পৃষ্ঠায় তালিকাভুক্ত।"
              : "Every candidate documented in the post-audit package is listed on the Library page."}
          </p>
          <Link
            to="/library"
            className="inline-block mt-4 text-xs text-accent-400 hover:underline"
          >
            ← {bn ? "গ্রন্থাগারে ফিরে যান" : "Back to Library"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="text-[11px] uppercase tracking-[0.18em] text-ink-300">
          {bn
            ? `গবেষণা গ্রন্থাগার · ${EXPECTED_INVENTORY_SIZE}-এন্ট্রি ইনভেন্টরি`
            : `Research Library · ${EXPECTED_INVENTORY_SIZE}-entry inventory`}
        </div>
        <Link
          to="/library"
          className="text-[11px] text-accent-400 hover:underline"
        >
          ← {bn ? "গ্রন্থাগারে ফিরে যান" : "Back to Library"}
        </Link>
      </div>
      <UniversalIdeaDetail idea={universal} siblings={IDEAS} />
    </div>
  );
}
