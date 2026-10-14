import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RANKING_LAYER_B_BALANCED, TOP_THREE_VALIDATION, EXPERIMENTS } from "../data";
import { useLang } from "../components/LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import bnSnapshot from "../i18n/bn/snapshot.json";

interface Slide {
  id: string;
  title: string;
  bnTitle: string;
  body: React.ReactNode;
  bnBody: React.ReactNode;
  source: string;
}

export function PresentationPage() {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  const [idx, setIdx] = useState(0);
  const [showSource, setShowSource] = useState(false);

  const slides: Slide[] = [
    {
      id: "title",
      title: "Agent Wallet — Idea Explorer",
      bnTitle: "এজেন্ট ওয়ালেট — আইডিয়া এক্সপ্লোরার",
      body: (
        <p>2026 Shenzhen International FinTech Competition · Topic F: Agent Wallet · Post-audit decision package · 14 Oct 2026</p>
      ),
      bnBody: (
        <p>২০২৬ শেনজেন আন্তর্জাতিক ফিনটেক প্রতিযোগিতা · টপিক F: এজেন্ট ওয়ালেট · পোস্ট-অডিট সিদ্ধান্ত প্যাকেজ · ১৪ অক্টোবর ২০২৬</p>
      ),
      source: "finalaudit.md",
    },
    {
      id: "snapshot",
      title: "Snapshot",
      bnTitle: "স্ন্যাপশট",
      body: (
        <ul className="list-disc list-inside space-y-1">
          <li>96 entries: 86 ideas, 10 hybrids.</li>
          <li>10 ranked, 3 chosen for prototype validation.</li>
          <li>Provisional preference: HYBRID-008.</li>
          <li>No winner declared; no experiment run.</li>
        </ul>
      ),
      bnBody: (
        <ul className="list-disc list-inside space-y-1 font-bn">
          <li>৯৬টি এন্ট্রি: ৮৬টি আইডিয়া, ১০টি হাইব্রিড।</li>
          <li>১০টি র‍্যাঙ্কড, ৩টি প্রোটোটাইপ যাচাইয়ের জন্য নির্বাচিত।</li>
          <li>অস্থায়ী পছন্দ: HYBRID-008।</li>
          <li>কোনো বিজয়ী ঘোষণা করা হয়নি; কোনো পরীক্ষা চালানো হয়নি।</li>
        </ul>
      ),
      source: "finalaudit.md §A, §S",
    },
    ...RANKING_LAYER_B_BALANCED.map((c, i) => ({
      id: c.id,
      title: `#${i + 1} ${c.name} — ${c.id}`,
      bnTitle: `#${i + 1} ${fieldBn(c.id, "name", c.name)} — ${c.id}`,
      body: (
        <div>
          <p>Layer B (balanced centre): <strong>{c.layerBCentre}</strong> · {c.layerBAndRange}</p>
          <p className="mt-2">Decision: <strong>{c.decision}</strong> · Gate: <strong>{c.gate}</strong></p>
          {c.prototypeValidation && <p className="mt-2 text-accent-400">★ Prototype validation</p>}
        </div>
      ),
      bnBody: (
        <div className="font-bn">
          <p>লেয়ার B (ব্যালেন্সড কেন্দ্র): <strong>{c.layerBCentre}</strong> · {c.layerBAndRange}</p>
          <p className="mt-2">সিদ্ধান্ত: <strong>{c.decision}</strong> · গেট: <strong>{c.gate}</strong></p>
          {c.prototypeValidation && <p className="mt-2 text-accent-400">★ প্রোটোটাইপ যাচাই</p>}
        </div>
      ),
      source: `finalaudit.md §P · row ${c.id}`,
    })),
    ...TOP_THREE_VALIDATION.map((c) => ({
      id: `${c.id}-why`,
      title: `${c.id} — Why this one?`,
      bnTitle: `${c.id} — কেন এটি?`,
      body: <p>{c.uncertainty}<br /><em className="block mt-2 text-ink-300">{c.reason}</em></p>,
      bnBody: <p className="font-bn">{(bnSnapshot as any).topThreeValidation[c.id].uncertainty}<br /><em className="block mt-2 text-ink-300">{(bnSnapshot as any).topThreeValidation[c.id].reason}</em></p>,
      source: `finalaudit.md §O`,
    })),
    ...EXPERIMENTS.map((e) => ({
      id: e.id,
      title: `${e.id} — ${e.title}`,
      bnTitle: `${e.id} — ${(bnSnapshot as any).experiments[e.id].title || e.title}`,
      body: (
        <div>
          <p className="text-amber-300/80 text-xs uppercase tracking-widest">PENDING — no experiment run</p>
          <p className="mt-2"><strong>Hypothesis.</strong> {e.hypothesis}</p>
          <p className="mt-1"><strong>Acceptance.</strong> {e.quantitativeAcceptance}</p>
        </div>
      ),
      bnBody: (
        <div className="font-bn">
          <p className="text-amber-300/80 text-xs uppercase tracking-widest">PENDING — কোনো পরীক্ষা চালানো হয়নি</p>
          <p className="mt-2"><strong>প্রকল্পনা।</strong> {(bnSnapshot as any).experiments[e.id].hypothesis}</p>
          <p className="mt-1"><strong>গ্রহণযোগ্যতা।</strong> {(bnSnapshot as any).experiments[e.id].quantitativeAcceptance}</p>
        </div>
      ),
      source: `finalaudit.md §R · ${e.id}`,
    })),
    {
      id: "no-winner",
      title: "No winner declared",
      bnTitle: "কোনো বিজয়ী ঘোষণা করা হয়নি",
      body: (
        <p>Final selection requires the eleven conditions in finalaudit.md §U. As of 14 Oct 2026, none has been satisfied.</p>
      ),
      bnBody: (
        <p className="font-bn">চূড়ান্ত নির্বাচনের জন্য finalaudit.md §U-এ এগারোটি শর্ত পূরণ করতে হবে। ১৪ অক্টোবর ২০২৬ অনুযায়ী কোনোটি পূরণ হয়নি।</p>
      ),
      source: "finalaudit.md §U",
    },
  ];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") setIdx((i) => Math.min(i + 1, slides.length - 1));
      if (e.key === "ArrowLeft" || e.key === "PageUp") setIdx((i) => Math.max(i - 1, 0));
      if (e.key === "Escape") window.history.back();
      if (e.key.toLowerCase() === "o") setShowSource((v) => !v);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  const slide = slides[idx];

  return (
    <div className="min-h-screen bg-ink-950 text-ink-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6 text-xs text-ink-300">
          <span className="code-like">
            {t("presentation.slide")} {idx + 1} {t("presentation.of")} {slides.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={idx === 0}
              className="px-3 py-1.5 rounded border border-ink-700 disabled:opacity-30"
            >
              {t("presentation.previous")}
            </button>
            <button
              onClick={() => setIdx((i) => Math.min(slides.length - 1, i + 1))}
              disabled={idx === slides.length - 1}
              className="px-3 py-1.5 rounded border border-ink-700 disabled:opacity-30"
            >
              {t("presentation.next")}
            </button>
            <Link to="/" className="px-3 py-1.5 rounded border border-ink-700 text-ink-100">
              {t("presentation.exit")}
            </Link>
          </div>
        </div>
        <article className="rounded-2xl border border-ink-800 bg-ink-900/40 p-8 sm:p-12 min-h-[60vh]">
          <h1 className={`text-3xl sm:text-5xl font-semibold text-ink-50 leading-tight ${bn ? "font-bn" : ""}`}>
            {bn ? slide.bnTitle : slide.title}
          </h1>
          <div className={`mt-6 text-base sm:text-lg text-ink-100 leading-relaxed ${bn ? "font-bn" : ""}`}>
            {bn ? slide.bnBody : slide.body}
          </div>
          {showSource && (
            <div className="mt-8 text-xs text-ink-300 code-like border-t border-ink-800 pt-4">
              {t("presentation.sourcePointer")}: {slide.source}
            </div>
          )}
        </article>
        <div className="mt-4 flex items-center justify-between text-[11px] text-ink-300">
          <button onClick={() => setShowSource((v) => !v)} className="underline">
            {showSource ? t("presentation.hideSource") : t("presentation.showSource")}
          </button>
          <span>14 Oct 2026 · @GOAT</span>
        </div>
      </div>
    </div>
  );
}
