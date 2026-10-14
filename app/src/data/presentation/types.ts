// Presentation layer (Layer 2 / Layer 3) types.
//
// Everything in src/data/presentation is a *presentation explanation* of the
// post-audit decision package (finalaudit.md) or an explicitly *illustrative*
// scenario. None of it is original research text and none of it changes a
// rank, score, gate or decision: those stay in topShortlist.ts.
//
// Every user-facing string carries an English and a Bengali form, stored
// here and never merged into the source records.

export interface Bi {
  en: string;
  bn: string;
}

export const b = (en: string, bn: string): Bi => ({ en, bn });

/** Who/what a diagram node is. Drives colour and the legend. */
export type NodeKind =
  | "owner" // owner-controlled authorization / keys
  | "agent" // AI-controlled function
  | "external" // untrusted external data or service
  | "policy" // deterministic policy enforcement
  | "wallet" // smart account / wallet
  | "signer" // protected signing
  | "contract" // smart contract / module
  | "chain" // blockchain execution
  | "audit"; // audit, verification, evidence

/** What an arrow means. */
export type FlowKind = "data" | "auth" | "tx" | "funds" | "block";

export interface DNode {
  id: string;
  kind: NodeKind;
  label: Bi;
  sub?: Bi;
  col: number;
  row: number;
}

export interface DEdge {
  from: string;
  to: string;
  kind: FlowKind;
  label?: Bi;
}

export interface DZone {
  label: Bi;
  col0: number;
  col1: number;
  row0: number;
  row1: number;
  tone: "untrusted" | "enforced" | "owner";
}

export interface DiagramDef {
  id: string;
  title: Bi;
  caption: Bi;
  /** e.g. "Conditional alternative route; not a completed feature". */
  status?: Bi;
  nodes: DNode[];
  edges: DEdge[];
  zones?: DZone[];
}

export type Control = "ai" | "deterministic" | "owner" | "onchain" | "external" | "audit";

export interface Step {
  control: Control;
  title: Bi;
  body: Bi;
  detail?: Bi;
  /** Source anchors (finalaudit.md sections / R-ids) backing this step. */
  src?: string;
  /** Diagram index (into `diagrams`) and node ids to highlight. */
  diagram?: number;
  nodes?: string[];
}

export type CaseKey =
  | "normal"
  | "insufficient"
  | "unauthorized"
  | "overlimit"
  | "duplicate"
  | "malicious"
  | "failure";

export interface ScenarioCase {
  key: CaseKey;
  outcome: Bi;
  /** "documented" = stated in the source; "expected" = intended design behaviour, untested. */
  basis: "documented" | "expected";
}

export interface ScenarioDef {
  /** documented = from the source's demo scenario; illustrative = walkthrough written for explanation. */
  kind: "documented" | "illustrative";
  note: Bi;
  situation: Bi;
  objective: Bi;
  reasoning: Bi;
  decision: Bi;
  permission: Bi;
  onchain: Bi;
  result: Bi;
  failure: Bi;
  evidence: Bi;
  cases: ScenarioCase[];
}

export interface CompetitorRow {
  name: string;
  existing: Bi;
  similar: Bi;
  adds: Bi;
  solved: Bi;
  unverified: Bi;
  url?: string;
  src?: string;
}

export type InnovationClass =
  | "existing" // existing capability
  | "combined" // existing capabilities combined in a new way
  | "supported" // evidence-supported differentiation
  | "unverified" // plausible but unverified
  | "contradicted"; // contradicted claim

export interface InnovationItem {
  cls: InnovationClass;
  text: Bi;
  experiment?: string;
}

export interface Point {
  text: Bi;
  src?: string;
}

export interface SecurityView {
  aiCan: Point[];
  aiCannot: Point[];
  authorizes: Bi;
  enforcedWhere: Bi;
  ifManipulated: Bi;
  ifFails: Bi;
  ownerStop: Bi;
  exposure: Bi;
  /** Which controls are documented only; nothing here is experimentally verified. */
  tested: Bi;
}

export interface RoadmapStage {
  label: Bi;
  when?: Bi;
  items: Bi[];
}

export interface Roadmap {
  mvp: Bi[];
  optional: Bi[];
  deferred: Bi[];
  dependencies: Bi[];
  blockers: Bi[];
  stages?: RoadmapStage[];
}

export interface ScoreSet {
  /** Official-rubric internal estimate ranges (Task /40, Security /30, Innovation /30). */
  task: string;
  security: string;
  innovation: string;
  /** Layer B centres: value /15, novelty /20, security /25, feasibility /20, demo /10, deps /10. */
  centres: { value: number; novelty: number; security: number; feasibility: number; demo: number; deps: number };
}

export interface ComparisonRow {
  aspect: Bi;
  here: Bi;
  other: Bi;
  src?: string;
}

export interface ComparisonDef {
  title: Bi;
  otherId: string;
  rows: ComparisonRow[];
}

export interface CandidatePresentation {
  id: string;
  /** Role label from the decision package (§O, §S, §T). */
  role: Bi;
  /** Short source-grounded headline for cards. */
  headline: Bi;
  /** Main differentiator or uncertainty, for cards. */
  keyPoint: Bi;
  quick: {
    problem: Bi;
    affected: Bi;
    solution: Bi;
    versusNormal: Bi;
    example: Bi;
    why: Bi;
    risk: Bi;
    decisionMeaning: Bi;
  };
  diagrams: DiagramDef[];
  steps: Step[];
  scenario: ScenarioDef;
  competitors: CompetitorRow[];
  advantages: Point[];
  weaknesses: Point[];
  innovation: InnovationItem[];
  innovationNeeds: Bi;
  security: SecurityView;
  roadmap: Roadmap;
  scores: ScoreSet;
  /** Optional documented side-by-side with the candidate that superseded or absorbed it. */
  comparison?: ComparisonDef;
  /** Candidates this one is most usefully compared with (ids). */
  relatedIds: string[];
}
