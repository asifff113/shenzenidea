import { NavLink, Link } from "react-router-dom";
import { type ReactNode } from "react";
import { useLang } from "./LanguageContext";

interface ShellProps {
  children: ReactNode;
}

const NAV: { to: string; label: string; bn: string }[] = [
  { to: "/", label: "Overview", bn: "সারসংক্ষেপ" },
  { to: "/explorer", label: "Idea Explorer", bn: "আইডিয়া এক্সপ্লোরার" },
  { to: "/compare", label: "Compare", bn: "তুলনা" },
  { to: "/security", label: "Security & Validation", bn: "নিরাপত্তা ও যাচাই" },
  { to: "/history", label: "Decision History", bn: "সিদ্ধান্তের ইতিহাস" },
  { to: "/library", label: "Full Library", bn: "সম্পূর্ণ গ্রন্থাগার" },
  { to: "/validation", label: "Final Selection Gates", bn: "চূড়ান্ত গেট" },
  { to: "/presentation", label: "Presentation Mode", bn: "উপস্থাপনা মোড" },
];

export function Shell({ children }: ShellProps) {
  const { lang, setLang, t } = useLang();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 backdrop-blur bg-ink-950/80 border-b border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-accent-500 to-gold-500 flex items-center justify-center text-ink-950 font-bold">
              A
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide group-hover:text-accent-400 transition-colors">
                {t("app.title")}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-300">
                {t("app.subtitle")}
              </div>
            </div>
          </Link>
          <nav className="hidden lg:flex flex-1 items-center gap-1 ml-4 overflow-x-auto scrollbar-thin" aria-label={t("common.openMenu")}>
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-ink-800 text-accent-400"
                      : "text-ink-200 hover:text-ink-50 hover:bg-ink-800/60"
                  }`
                }
              >
                {lang === "bn" ? n.bn : n.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-xs rounded ${
                lang === "en"
                  ? "bg-accent-500/20 text-accent-400 border border-accent-500/40"
                  : "text-ink-300 border border-ink-800"
              }`}
              aria-pressed={lang === "en"}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("bn")}
              className={`px-2 py-1 text-xs rounded font-bn ${
                lang === "bn"
                  ? "bg-accent-500/20 text-accent-400 border border-accent-500/40"
                  : "text-ink-300 border border-ink-800"
              }`}
              aria-pressed={lang === "bn"}
              aria-label="Bengali"
            >
              বাংলা
            </button>
          </div>
        </div>
        <nav className="lg:hidden border-t border-ink-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 flex gap-1 overflow-x-auto scrollbar-thin">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `px-2 py-1 rounded text-xs whitespace-nowrap ${
                    isActive
                      ? "bg-ink-800 text-accent-400"
                      : "text-ink-200 hover:bg-ink-800/60"
                  }`
                }
              >
                {lang === "bn" ? n.bn : n.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-ink-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-xs text-ink-300 leading-relaxed">
          <p>
            <strong className="text-ink-100">{t("footer.source")}</strong>{" "}
            {t("footer.sourceValue")}
          </p>
          <p className="mt-1">
            <strong className="text-ink-100">{t("footer.status")}</strong>{" "}
            {t("footer.statusValue")}
          </p>
          <p className="mt-1">
            {t("footer.seeGates")}{" "}
            <Link className="text-accent-400 underline" to="/validation">
              {t("nav.validation")}
            </Link>{" "}
            {t("footer.andHistory")}{" "}
            <Link className="text-accent-400 underline" to="/history">
              {t("nav.history")}
            </Link>{" "}
            {t("footer.forFull")}
          </p>
        </div>
      </footer>
    </div>
  );
}
