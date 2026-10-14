// i18n core: typed access to the bilingual bundle.
// The English bundle is authoritative. The Bengali bundle is a faithful
// translation layer. Missing Bengali keys fall back to the English
// original AND raise a console warning, so the coverage audit can find them.

import enUi from "./en/ui.json";
import bnUi from "./bn/ui.json";

export type Lang = "en" | "bn";

export type UILeaf = string | number | boolean;
export type UINode = UILeaf | { [k: string]: UINode };

const BUNDLES: Record<Lang, UINode> = {
  en: enUi as UINode,
  bn: bnUi as UINode,
};

/** Track which keys fell back to English in the current render session. */
const FALLBACK_KEYS: Set<string> = new Set();

export function getFallbackKeys(): string[] {
  return [...FALLBACK_KEYS].sort();
}

export function clearFallbackKeys(): void {
  FALLBACK_KEYS.clear();
}

function lookup(node: UINode, path: string[]): UILeaf | undefined {
  let cur: UINode | undefined = node;
  for (const seg of path) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, UINode>)[seg];
  }
  if (cur == null) return undefined;
  if (typeof cur === "object") return undefined; // not a leaf
  return cur as UILeaf;
}

function isEmpty(v: UILeaf | undefined): boolean {
  if (v === undefined) return true;
  if (typeof v === "string") return v.trim() === "";
  return false;
}

export function tFor(lang: Lang, key: string): string {
  const path = key.split(".");
  const bnVal = lookup(BUNDLES.bn, path);
  const enVal = lookup(BUNDLES.en, path);
  if (lang === "en") {
    if (isEmpty(enVal)) {
      FALLBACK_KEYS.add(`${key} (missing in en)`);
      return key; // last resort
    }
    return String(enVal);
  }
  // bn
  if (!isEmpty(bnVal)) return String(bnVal);
  // Bengali missing → fall back to English, but mark it.
  FALLBACK_KEYS.add(key);
  if (!isEmpty(enVal)) return String(enVal);
  FALLBACK_KEYS.add(`${key} (missing in en)`);
  return key;
}

/** Returns a tuple [english, bengali] for a key. Useful for side-by-side. */
export function tPair(key: string): [string, string] {
  const path = key.split(".");
  const enVal = lookup(BUNDLES.en, path);
  const bnVal = lookup(BUNDLES.bn, path);
  const en = isEmpty(enVal) ? key : String(enVal);
  const bn = isEmpty(bnVal) ? en : String(bnVal);
  if (isEmpty(bnVal)) FALLBACK_KEYS.add(key);
  return [en, bn];
}

/** True if the key has a real Bengali translation (non-empty). */
export function hasBn(key: string): boolean {
  const v = lookup(BUNDLES.bn, key.split("."));
  return !isEmpty(v);
}

/** Returns all keys defined in the English bundle. */
export function getAllEnKeys(): string[] {
  const out: string[] = [];
  const walk = (node: UINode, prefix: string[] = []): void => {
    if (node == null || typeof node !== "object") {
      out.push(prefix.join("."));
      return;
    }
    for (const [k, v] of Object.entries(node as Record<string, UINode>)) {
      walk(v, [...prefix, k]);
    }
  };
  walk(BUNDLES.en);
  return out;
}
