import { FINAL_SELECTION_CONDITIONS } from "../data";
import { SectionHeader } from "../components/Cards";
import { useLang } from "../components/LanguageContext";
import bnSnapshot from "../i18n/bn/snapshot.json";

export function ValidationPage() {
  const { lang, t } = useLang();
  const bn = lang === "bn";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <SectionHeader
        eyebrow={bn ? "চূড়ান্ত নির্বাচন" : "Final selection"}
        title={t("validation.title")}
        subtitle={t("validation.subtitle")}
      />
      <div className="overflow-x-auto rounded-xl border border-ink-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-ink-300 bg-ink-900/40">
              <th className="text-left p-3">{bn ? "শর্ত" : "Condition"}</th>
              <th className="text-left p-3">{bn ? "বিবরণ" : "Description"}</th>
              <th className="text-left p-3">{bn ? "অবস্থা" : "Status"}</th>
            </tr>
          </thead>
          <tbody>
            {FINAL_SELECTION_CONDITIONS.map((c) => {
              const bnText = (bnSnapshot as any).finalSelectionConditions[c.id];
              return (
                <tr key={c.id} className="border-t border-ink-800 align-top">
                  <td className="p-3 code-like text-accent-400">{c.id}</td>
                  <td className={`p-3 text-ink-100 ${bn ? "font-bn" : ""}`}>
                    {bn && bnText ? bnText : c.text}
                  </td>
                  <td className="p-3">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300/80 border border-amber-300/40 rounded px-1.5 py-0.5">
                      {t("decisions.pending")}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className={`mt-4 text-xs text-ink-300 ${bn ? "font-bn" : ""}`}>
        {t("warnings.noWinner")}
      </p>
    </div>
  );
}
