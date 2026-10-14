// Bilingual rendering helpers used by content pages.
// BilingualText: shows Bengali when available, otherwise the English original,
// with a "View original English" toggle and a clear "translation pending" label
// when no Bengali is available.

import { useState, type ReactNode } from "react";
import { useLang } from "./LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";

interface BilingualTextProps {
  /** Record id used to look up the Bengali field translation. */
  id: string;
  /** Field name used to look up the Bengali translation. */
  field: string;
  /** English original (authoritative). */
  en: string;
  /** Optional explicit Bengali translation. */
  bn?: string;
  /** Optional className to apply to both rendered strings. */
  className?: string;
  /** When true, render both languages side by side. */
  sideBySide?: boolean;
  /** Show the "View original English" control. */
  showOriginalToggle?: boolean;
}

export function BilingualText({
  id,
  field,
  en,
  bn: explicitBn,
  className = "",
  sideBySide = false,
  showOriginalToggle = true,
}: BilingualTextProps) {
  const { lang } = useLang();
  const [showOriginal, setShowOriginal] = useState(false);
  const bn = explicitBn ?? fieldBn(id, field, "");

  if (lang === "en") {
    return <span className={className}>{en}</span>;
  }

  if (sideBySide) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-ink-400 mb-1">
            English (source)
          </div>
          <div className="leading-relaxed text-ink-100 whitespace-pre-wrap">{en}</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-ink-400 mb-1 font-bn">
            বাংলা (অনুবাদ)
          </div>
          {bn ? (
            <div className="leading-relaxed text-ink-100 font-bn whitespace-pre-wrap" lang="bn">
              {bn}
            </div>
          ) : (
            <div className="leading-relaxed text-amber-300/80 text-sm font-bn">
              [অনুবাদ মুলতুবি — অনুগ্রহ করে মূল ইংরেজি পড়ুন]
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <span className={className}>
      {bn ? (
        <span className="font-bn" lang="bn">
          {bn}
        </span>
      ) : (
        <span className="font-bn text-amber-300/80">
          [অনুবাদ মুলতুবি — মূল ইংরেজি পড়া হচ্ছে]
        </span>
      )}
      {showOriginalToggle && bn && (
        <>
          {" "}
          <button
            type="button"
            onClick={() => setShowOriginal((v) => !v)}
            className="ml-1 inline-block text-[10px] uppercase tracking-widest text-accent-400 underline hover:text-accent-300"
            aria-expanded={showOriginal}
          >
            {showOriginal ? "বাংলা দেখান" : "মূল ইংরেজি দেখান"}
          </button>
          {showOriginal && (
            <span className="block mt-1 text-ink-300 italic" lang="en">
              {en}
            </span>
          )}
        </>
      )}
      {!bn && (
        <span className="block mt-1 text-ink-300 italic text-sm" lang="en">
          {en}
        </span>
      )}
    </span>
  );
}

/** A simple wrapper for plain text labels that only have a single key, not a record field. */
interface BnTextProps {
  en: string;
  bn: string;
  className?: string;
}

export function BnText({ en, bn, className = "" }: BnTextProps) {
  const { lang } = useLang();
  return (
    <span className={className}>
      {lang === "bn" ? (
        <span className="font-bn" lang="bn">
          {bn}
        </span>
      ) : (
        en
      )}
    </span>
  );
}

/** Side-by-side bilingual block for prose paragraphs. */
export function SideBySideParagraph({ en, bn }: { en: string; bn?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 p-3 rounded-md border border-ink-800 bg-ink-900/50">
      <div>
        <div className="text-[10px] uppercase tracking-widest text-ink-400 mb-1">
          English (source)
        </div>
        <p className="text-sm leading-relaxed text-ink-100 whitespace-pre-wrap">{en}</p>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-ink-400 mb-1 font-bn">
          বাংলা
        </div>
        {bn ? (
          <p className="text-sm leading-relaxed text-ink-100 font-bn whitespace-pre-wrap" lang="bn">
            {bn}
          </p>
        ) : (
          <p className="text-sm leading-relaxed text-amber-300/80 font-bn">
            [অনুবাদ মুলতুবি]
          </p>
        )}
      </div>
    </div>
  );
}
