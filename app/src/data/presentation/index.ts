import type { CandidatePresentation } from "./types";
import { HYBRID_008 } from "./hybrid008";
import { IDEA_073 } from "./idea073";
import { IDEA_001 } from "./idea001";
import { HYBRID_002R } from "./hybrid002r";
import { HYBRID_009 } from "./hybrid009";
import { IDEA_033 } from "./idea033";
import { HYBRID_001 } from "./hybrid001";
import { HYBRID_003 } from "./hybrid003";
import { IDEA_074 } from "./idea074";
import { IDEA_081 } from "./idea081";

export * from "./types";

// Registry of presentation records, keyed by candidate id (rank order).
export const PRESENTATION_LIST: CandidatePresentation[] = [
  HYBRID_008,
  IDEA_073,
  IDEA_001,
  HYBRID_002R,
  HYBRID_009,
  IDEA_033,
  HYBRID_001,
  HYBRID_003,
  IDEA_074,
  IDEA_081,
];

export const PRESENTATIONS: Record<string, CandidatePresentation> = Object.fromEntries(
  PRESENTATION_LIST.map((p) => [p.id, p])
);

export function getPresentation(id: string): CandidatePresentation | undefined {
  return PRESENTATIONS[id];
}
