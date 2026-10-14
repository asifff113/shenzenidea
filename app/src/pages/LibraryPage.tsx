// Full library — 96 ideas and hybrids, every one clickable into
// its own detail page. The data is the 16-field record from the
// master inventory. The Top 10 ranked candidates link to the rich
// candidate page (CandidatePage) via /explorer/:id; every other
// record links to the universal A-Q template via /ideas/:id.

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fullInventory, isRanked } from "../data";
import { SectionHeader } from "../components/Cards";
import { GateBadge } from "../components/Badges";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import type { UniversalIdea } from "../data/inventory";

const ROWS = fullInventory as unknown as UniversalIdea[];

export function LibraryPage() {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  const [q, setQ] = useState("");
  const [gate, setGate] = useState<string>("all");
  const [hybridsOnly, setHybridsOnly] = useState(false);
  const [rankedOnly, setRankedOnly] = useState(false);

  const gates = useMemo(() => {
    const set = new Set<string>();
    for (const r of ROWS) {
      if (r.gate) set.add(r.gate);
    }
    return Array.from(set).sort();
  }, []);

  const visible = useMemo(() => {
    return ROWS.filter((r) => {
      if (hybridsOnly && !r.id.startsWith("HYBRID")) return false;
      if (rankedOnly && !isRanked(r.id)) return false;
      if (gate !== "all" && r.gate !== gate) return false;
      if (q) {
        const s = q.toLowerCase();
        const bnName = fieldBn(r.id, "name", "").toLowerCase();
        const blob = [
          r.id,
          r.name,
          String(r.financial_problem || ""),
          String(r.customer || ""),
          String(r.sources || ""),
          String(r.sources_list?.join(" ") || ""),
          bnName,
        ]
          .join(" ")
          .toLowerCase();
        if (!blob.includes(s)) return false;
      }
      return true;
    });
  }, [q, gate, hybridsOnly, rankedOnly]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={bn ? "গবেষণা গ্রন্থাগার" : "Research library"}
        title={t("library.title")}
        subtitle={t("library.subtitle")}
      />

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("library.searchPlaceholder")}
          className={`flex-1 min-w-[200px] bg-ink-900/60 border border-ink-800 rounded-md px-3 py-1.5 text-sm placeholder:text-ink-400 focus:outline-none focus:border-accent-500/60 ${
            bn ? "font-bn" : ""
          }`}
        />
        <select
          value={gate}
          onChange={(e) => setGate(e.target.value)}
          className="bg-ink-900/60 border border-ink-800 rounded-md px-2 py-1.5 text-sm"
        >
          <option value="all">{t("library.gateAll")}</option>
          {gates.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <label
          className={`flex items-center gap-2 text-xs text-ink-200 ${
            bn ? "font-bn" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={hybridsOnly}
            onChange={(e) => setHybridsOnly(e.target.checked)}
            className="accent-accent-500"
          />
          {t("library.hybridOnly")}
        </label>
        <label
          className={`flex items-center gap-2 text-xs text-ink-200 ${
            bn ? "font-bn" : ""
          }`}
        >
          <input
            type="checkbox"
            checked={rankedOnly}
            onChange={(e) => setRankedOnly(e.target.checked)}
            className="accent-accent-500"
          />
          {bn ? "শুধু শীর্ষ ১০" : "Ranked only"}
        </label>
        <div
          className={`text-[11px] text-ink-300 ml-auto ${
            bn ? "font-bn" : ""
          }`}
        >
          {visible.length} {t("library.ofEntries")} {ROWS.length} {t("library.entries")}
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-ink-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
              <th className="text-left p-3">{t("library.idCol")}</th>
              <th className="text-left p-3">{t("library.nameCol")}</th>
              <th className="text-left p-3">{bn ? "সমস্যা" : "Problem"}</th>
              <th className="text-left p-3">{t("library.customerCol")}</th>
              <th className="text-left p-3">{t("library.gateCol")}</th>
              <th className="text-left p-3"></th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => {
              const detailHref = isRanked(r.id) ? `/explorer/${r.id}` : `/ideas/${r.id}`;
              return (
                <tr key={r.id} className="border-t border-ink-800 align-top">
                  <td className="p-3 code-like text-accent-400">
                    <Link to={detailHref} className="hover:underline">
                      {r.id}
                    </Link>
                  </td>
                  <td className={`p-3 text-ink-50 ${bn ? "font-bn" : ""}`}>
                    <Link to={detailHref} className="hover:underline">
                      {bn ? fieldBn(r.id, "name", r.name) : r.name}
                    </Link>
                  </td>
                  <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>
                    {r.financial_problem ? (
                      <span className="text-[12px]">
                        {r.financial_problem.length > 110
                          ? r.financial_problem.slice(0, 110).trimEnd() + "…"
                          : r.financial_problem}
                      </span>
                    ) : (
                      <span className="text-ink-400 italic text-[11px]">
                        {bn ? "উল্লেখ নেই" : "Not specified"}
                      </span>
                    )}
                  </td>
                  <td className={`p-3 text-ink-200 ${bn ? "font-bn" : ""}`}>
                    {r.customer || (
                      <span className="text-ink-400 italic text-[11px]">
                        {bn ? "উল্লেখ নেই" : "Not specified"}
                      </span>
                    )}
                  </td>
                  <td className="p-3">
                    <GateBadge gate={r.gate} />
                  </td>
                  <td className="p-3">
                    <Link
                      to={detailHref}
                      className="text-xs text-accent-400 hover:underline whitespace-nowrap"
                    >
                      {t("library.openDetail")}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {visible.length === 0 && (
        <div className="mt-4 text-sm text-ink-300 italic">
          {bn
            ? "বর্তমান ফিল্টারের সাথে কোনো প্রার্থী মেলে না।"
            : "No candidates match the current filter."}
        </div>
      )}
    </div>
  );
}
