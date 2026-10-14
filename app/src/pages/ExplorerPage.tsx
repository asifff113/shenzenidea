import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOP_SHORTLIST } from "../data";
import { IdeaCard } from "../components/IdeaCard";
import { TopTenBoard } from "../components/TopTenBoard";
import { SectionHeader } from "../components/Cards";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";

type Filter = "all" | "prototype" | "go" | "conditional" | "no-go";

const FILTERS: { id: Filter; en: string; bn: string }[] = [
  { id: "all", en: "All", bn: "সব" },
  { id: "prototype", en: "Prototype only", bn: "শুধু প্রোটোটাইপ" },
  { id: "go", en: "GO", bn: "GO" },
  { id: "conditional", en: "CONDITIONAL GO", bn: "CONDITIONAL GO" },
  { id: "no-go", en: "NO-GO", bn: "NO-GO" },
];

export function ExplorerPage() {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<string | null>("HYBRID-008");
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return TOP_SHORTLIST.filter((c) => {
      if (filter === "prototype" && !c.prototypeValidation) return false;
      if (filter === "go" && c.decision !== "GO") return false;
      if (filter === "conditional" && c.decision !== "CONDITIONAL GO") return false;
      if (filter === "no-go" && !c.decision.startsWith("NO-GO")) return false;
      if (query) {
        const q = query.toLowerCase();
        const bnName = fieldBn(c.id, "name", "").toLowerCase();
        const bnProblem = fieldBn(c.id, "financialProblem", "").toLowerCase();
        if (
          !c.id.toLowerCase().includes(q) &&
          !c.name.toLowerCase().includes(q) &&
          !c.financialProblem.toLowerCase().includes(q) &&
          !bnName.includes(q) &&
          !bnProblem.includes(q)
        )
          return false;
      }
      return true;
    });
  }, [filter, query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={t("explorer.tier1Title")}
        title={t("nav.explorer")}
        subtitle={t("explorer.tier1Subtitle")}
      />
      <TopTenBoard
        candidates={TOP_SHORTLIST}
        onSelect={(id) => navigate(`/explorer/${id}`)}
      />
      <Controls filter={filter} setFilter={setFilter} query={query} setQuery={setQuery} lang={lang} t={t} />
      <div className="space-y-3">
        {visible.map((c) => (
          <IdeaCard
            key={c.id}
            candidate={c}
            expanded={expandedId === c.id}
            onToggle={() => setExpandedId(expandedId === c.id ? null : c.id)}
          />
        ))}
        {visible.length === 0 && (
          <div className={`rounded-xl border border-ink-800 bg-ink-900/40 p-6 text-center text-sm text-ink-200 ${lang === "bn" ? "font-bn" : ""}`}>
            {t("explorer.noResults")}
          </div>
        )}
      </div>
      <div className={`mt-8 rounded-xl border border-ink-800 bg-ink-900/40 p-5 text-sm text-ink-200 leading-relaxed ${lang === "bn" ? "font-bn" : ""}`}>
        <h3 className="text-ink-50 font-semibold mb-2">{t("explorer.tier2Title")}</h3>
        <p className="mb-3">{t("explorer.tier2Body")}</p>
        <h3 className="text-ink-50 font-semibold mb-2 mt-4">{t("explorer.tier3Title")}</h3>
        <p>
          {t("explorer.tier3Body")}{" "}
          <Link className="text-accent-400 underline" to="/security">
            {t("nav.security")}
          </Link>
          {lang === "bn" ? " দেখুন।" : "."}
        </p>
        <h3 className="text-ink-50 font-semibold mb-2 mt-4">{t("explorer.tier4Title")}</h3>
        <p>
          {t("explorer.tier4Body")}{" "}
          <Link className="text-accent-400 underline" to="/library">
            {t("nav.library")}
          </Link>
          {lang === "bn" ? " দেখুন।" : "."}
        </p>
      </div>
    </div>
  );
}

function Controls({
  filter,
  setFilter,
  query,
  setQuery,
  lang,
  t,
}: {
  filter: Filter;
  setFilter: (f: Filter) => void;
  query: string;
  setQuery: (q: string) => void;
  lang: "en" | "bn";
  t: (k: string) => string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <div className="flex rounded-md border border-ink-800 overflow-hidden text-xs">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 ${
              filter === f.id ? "bg-ink-800 text-accent-400" : "text-ink-200 hover:bg-ink-800/60"
            }`}
            aria-pressed={filter === f.id}
          >
            {lang === "bn" ? f.bn : f.en}
          </button>
        ))}
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("explorer.searchPlaceholder")}
        className={`flex-1 min-w-[200px] bg-ink-900/60 border border-ink-800 rounded-md px-3 py-1.5 text-sm placeholder:text-ink-400 focus:outline-none focus:border-accent-500/60 ${lang === "bn" ? "font-bn" : ""}`}
      />
    </div>
  );
}
