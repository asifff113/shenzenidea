// React hook to translate a record's field into the current language.
// Returns the Bengali translation if available, otherwise the English original.

import { useLang } from "../components/LanguageContext";
import { fieldBn } from "./fieldHelpers";

export function useFieldTranslation() {
  const { lang } = useLang();
  return (id: string, field: string, fallback: string): string => {
    if (lang === "en") return fallback;
    return fieldBn(id, field, fallback);
  };
}

export function useT() {
  return useLang().t;
}
