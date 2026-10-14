import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { tFor, type Lang } from "../i18n/core";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

function readInitialLang(): Lang {
  // 1. URL parameter (e.g. ?lang=bn) takes precedence
  try {
    const url = new URL(window.location.href);
    const param = url.searchParams.get("lang");
    if (param === "bn" || param === "en") return param;
    // HashRouter keeps its query inside the hash (e.g. #/explorer/ID?lang=bn).
    const hashQuery = url.hash.includes("?") ? url.hash.slice(url.hash.indexOf("?") + 1) : "";
    const hashParam = new URLSearchParams(hashQuery).get("lang");
    if (hashParam === "bn" || hashParam === "en") return hashParam;
  } catch {
    /* not in a browser */
  }
  // 2. localStorage
  try {
    const stored = window.localStorage.getItem("aw_lang");
    if (stored === "bn" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window === "undefined" ? "en" : readInitialLang()
  );

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("aw_lang", l);
    } catch {
      /* ignore */
    }
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      window.history.replaceState({}, "", url.toString());
    } catch {
      /* ignore */
    }
    try {
      document.documentElement.lang = l === "bn" ? "bn" : "en";
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      document.documentElement.lang = lang === "bn" ? "bn" : "en";
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LanguageCtx>(
    () => ({
      lang,
      setLang,
      t: (key: string) => tFor(lang, key),
    }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}