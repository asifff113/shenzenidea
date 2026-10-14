// Universal library data layer.
//
// Re-exports the master inventory (96 entries) as a typed record and
// provides a normalized shape for the universal detail page. The
// inventory comes from `full_inventory.json`, which was generated from
// the consolidated synthesis and verified against the master CSV and
// the post-audit corrections. Every field shown on a detail page is
// taken verbatim from the inventory; when the inventory marks a field
// as missing, the page displays "Not specified in the available
// research" instead of inventing content.

import fullInventory from "./full_inventory.json";
import { TOP_SHORTLIST } from "./topShortlist";
import type { Candidate } from "./types";

/** Universal record shape used by the detail page. */
export interface UniversalIdea {
  /** Candidate ID (IDEA-NNN or HYBRID-NNN[R]). */
  id: string;
  /** Display name. */
  name: string;
  /** Short problem statement from the synthesis. */
  financial_problem: string;
  /** Target customer. */
  customer: string;
  /** What the agent does. */
  agent_responsibilities: string;
  /** Asset-management function. */
  asset_management_role: string;
  /** On-chain flow. */
  onchain_workflow: string;
  /** Security controls. */
  security_model: string;
  /** Competitor list. */
  closest_competitor: string;
  /** Novelty hypothesis. */
  novelty_hypothesis: string;
  /** External dependencies. */
  dependencies: string;
  /** Effort estimate. */
  feasibility: string;
  /** MVP scope. */
  mvp_scope: string;
  /** Demo behaviour. */
  demo_and_evaluation: string;
  /** Research confidence. */
  evidence_confidence: string;
  /** Current gate. */
  gate: string;
  /** Source line IDs. */
  sources: string;
  /** Change history. */
  change_status: string;
  change_note: string;
  /** Array form of sources. */
  sources_list: string[];
}

const raw = fullInventory as unknown as UniversalIdea[];

/** A lookup map by id for O(1) detail-page resolution. */
export const IDEAS: UniversalIdea[] = raw;

export const IDEAS_BY_ID: Record<string, UniversalIdea> = Object.fromEntries(
  IDEAS.map((r) => [r.id, r])
);

/** The 10 ranked shortlist records as a Candidate[] (for the Explorer page). */
export const RANKED: Candidate[] = TOP_SHORTLIST;

/** A record is "ranked" if it appears in the Top 10 shortlist. */
export function isRanked(id: string): boolean {
  return TOP_SHORTLIST.some((c) => c.id === id);
}

/** Look up a Top-10 Candidate record by id, if present. */
export function findRanked(id: string): Candidate | undefined {
  return TOP_SHORTLIST.find((c) => c.id === id);
}

/** The expected inventory size from the post-audit package. */
export const EXPECTED_INVENTORY_SIZE = 96;

/** Build a category label from the gate text. */
export function categoryFor(record: UniversalIdea): string {
  const g = (record.gate || "").toUpperCase();
  if (g.startsWith("PASS")) return "Gate PASS";
  if (g.startsWith("CONDITIONAL")) return "Gate Conditional";
  if (g.startsWith("FAIL")) return "Gate Fail";
  if (g.startsWith("SUPERSEDED")) return "Superseded";
  if (g.startsWith("GATE REVISED")) return "Gate Revised";
  if (g.startsWith("REVISED")) return "Revised";
  if (g.startsWith("EXPANDED")) return "Expanded";
  if (g.startsWith("SPLIT")) return "Split";
  if (g.startsWith("NEW")) return "New";
  if (g.startsWith("REL")) return "Relabelled";
  if (g.startsWith("UNCHANGED")) return "Unchanged";
  return record.gate || "—";
}

/** A short, source-grounded excerpt from the financial problem. */
export function excerptFor(record: UniversalIdea, maxLen = 160): string {
  const s = (record.financial_problem || "").trim();
  if (s.length <= maxLen) return s;
  const cut = s.slice(0, maxLen);
  const last = cut.lastIndexOf(" ");
  return (last > 80 ? cut.slice(0, last) : cut) + "…";
}

/** The set of expected 16-field inventory keys (canonical schema). */
export const CANONICAL_FIELDS: ReadonlyArray<keyof UniversalIdea> = [
  "id", "name", "financial_problem", "customer", "agent_responsibilities",
  "asset_management_role", "onchain_workflow", "security_model",
  "closest_competitor", "novelty_hypothesis", "dependencies", "feasibility",
  "mvp_scope", "demo_and_evaluation", "evidence_confidence", "gate",
  "sources", "change_status", "change_note", "sources_list",
];
