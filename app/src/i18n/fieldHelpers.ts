// Helpers to render dynamic data (candidate records, experiment records,
// etc.) bilingually. Each English record stays in its data file; the
// Bengali translations live in i18n/bn/fields.json keyed by the same ID.

import bnFields from "./bn/fields.json";
import type { Lang } from "./core";

type BnFields = Record<string, Record<string, string>>;

const BN: BnFields = bnFields as unknown as BnFields;

/**
 * Look up a Bengali field translation for a record id + field name.
 * Falls back to the English original if missing.
 */
export function fieldBn(id: string, field: string, fallback: string): string {
  const v = BN?.[id]?.[field];
  if (typeof v === "string" && v.trim() !== "") return v;
  return fallback;
}

/**
 * Bilingual field renderer: returns the right value for the current language.
 * Use this in components to render any English-only field.
 */
export function tField(lang: Lang, id: string, field: string, fallback: string): string {
  if (lang === "en") return fallback;
  return fieldBn(id, field, fallback);
}

/**
 * Returns the list of (id, field) pairs that have a Bengali translation
 * available, for use in coverage reports.
 */
export function getBnFieldCoverage(): {
  ids: string[];
  fields: Record<string, string[]>;
} {
  const ids = Object.keys(BN);
  const fields: Record<string, string[]> = {};
  for (const id of ids) {
    fields[id] = Object.keys(BN[id] || {});
  }
  return { ids, fields };
}

export function getBnFieldCount(): number {
  let n = 0;
  for (const id of Object.keys(BN)) {
    n += Object.keys(BN[id] || {}).length;
  }
  return n;
}
