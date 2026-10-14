// Research snapshot metadata. The post-audit decision package is the
// authoritative current view; earlier synthesis and audits are kept as
// historical context only.
//
// Source: agent-wallet-post-audit-decision-summary.md (14 Oct 2026),
// finalaudit.md sections A, B, M, O, S, T.

export const SNAPSHOT_DATE = "2026-10-14";
export const RESEARCH_CUTOFF = "2026-10-13";
export const SUBMISSION_DEADLINE = "2026-10-20 23:59 Beijing (UTC+8)";
export const X1_DUE = "2026-10-14 23:59 Dhaka";
export const STAGE_1_DUE = "2026-10-16";
export const X2_DUE = "2026-10-17";

export const INVENTORY_TOTALS = {
  totalEntries: 96, // 86 ideas + 10 hybrids (per post-audit)
  ideas: 86,
  hybrids: 10,
  topTenShortlist: 10,
  topFiveExpanded: 5,
  prototypeValidationCandidates: 3, // HYBRID-008, IDEA-073, HYBRID-002R
  newIdeasSplit: 16, // IDEA-071 to IDEA-086
  newHybrids: 3, // HYBRID-002R, HYBRID-008, HYBRID-009
  auditAAdjudicated: 27, // 13 confirmed, 8 partial, 3 need exp, 2 contradicted, 1 unsupported
  auditBNamedFindings: 43, // 39 confirmed, 3 partial, 1 uncheckable
  auditBHighPriorityDiscrepancies: 22,
};

export const AUTHORITATIVE_PACKAGE = {
  shortTitle: "Post-audit decision package",
  fullTitle:
    "Agent Wallet Post-Audit Decision Package (14 Oct 2026 · @GOAT)",
  file: "agent-wallet-post-audit-decision-summary.md",
  detailedFile: "finalaudit.md",
  rationale:
    "Latest adjudicated view after Audit A (adversarial review) and Audit B (merger integrity).",
};

export const RANKING_LAYER_B_BALANCED: ReadonlyArray<{
  rank: number;
  id: string;
  name: string;
  layerB: number;
  layerBAndRange: string;
  prototypeValidation: boolean;
  gate: string;
  task: string;
  security: string;
  innovation: string;
  layerALow: number;
  layerAHigh: number;
  layerBLow: number;
  layerBHigh: number;
  layerBCentre: number;
  synthesisRank: string;
  decision: string;
}> = [
  {
    rank: 1,
    id: "HYBRID-008",
    name: "Mandate-bound obligation treasury",
    layerB: 78,
    layerBAndRange: "68–86 (78)",
    prototypeValidation: true,
    gate: "Conditional pass",
    task: "31–36",
    security: "23–27",
    innovation: "19–25",
    layerALow: 73,
    layerAHigh: 88,
    layerBLow: 68,
    layerBHigh: 86,
    layerBCentre: 78,
    synthesisRank: "New",
    decision: "CONDITIONAL GO",
  },
  {
    rank: 2,
    id: "IDEA-073",
    name: "Budget envelope treasury",
    layerB: 74,
    layerBAndRange: "65–80 (74)",
    prototypeValidation: true,
    gate: "Pass",
    task: "29–34",
    security: "21–25",
    innovation: "14–20",
    layerALow: 64,
    layerAHigh: 79,
    layerBLow: 65,
    layerBHigh: 80,
    layerBCentre: 74,
    synthesisRank: "New (was inside IDEA-002)",
    decision: "GO",
  },
  {
    rank: 3,
    id: "IDEA-001",
    name: "Bounded invoice payout",
    layerB: 73,
    layerBAndRange: "65–79 (73)",
    prototypeValidation: false,
    gate: "Pass",
    task: "27–33",
    security: "22–26",
    innovation: "13–19",
    layerALow: 62,
    layerAHigh: 78,
    layerBLow: 65,
    layerBHigh: 79,
    layerBCentre: 73,
    synthesisRank: "3",
    decision: "GO",
  },
  {
    rank: 4,
    id: "HYBRID-002R",
    name: "ServiceMeter with failure stop (revised)",
    layerB: 72,
    layerBAndRange: "64–81 (72)",
    prototypeValidation: true,
    gate: "Conditional pass",
    task: "25–32",
    security: "20–25",
    innovation: "16–22",
    layerALow: 61,
    layerAHigh: 79,
    layerBLow: 64,
    layerBHigh: 81,
    layerBCentre: 72,
    synthesisRank: "2 (as HYBRID-002)",
    decision: "CONDITIONAL GO (fallback)",
  },
  {
    rank: 5,
    id: "HYBRID-009",
    name: "Obligation-reserved agent commerce",
    layerB: 70,
    layerBAndRange: "60–79 (70)",
    prototypeValidation: false,
    gate: "Conditional pass",
    task: "28–36",
    security: "20–26",
    innovation: "19–25",
    layerALow: 67,
    layerAHigh: 87,
    layerBLow: 60,
    layerBHigh: 79,
    layerBCentre: 70,
    synthesisRank: "New (R001 F22)",
    decision: "CONDITIONAL GO",
  },
  {
    rank: 6,
    id: "IDEA-033",
    name: "Original-payer refund governor",
    layerB: 69,
    layerBAndRange: "61–77 (69)",
    prototypeValidation: false,
    gate: "Conditional pass",
    task: "22–29",
    security: "20–25",
    innovation: "13–19",
    layerALow: 55,
    layerAHigh: 73,
    layerBLow: 61,
    layerBHigh: 77,
    layerBCentre: 69,
    synthesisRank: "5",
    decision: "NO-GO as primary",
  },
  {
    rank: 7,
    id: "HYBRID-001",
    name: "ObligationLock (as specified, custom executor)",
    layerB: 66,
    layerBAndRange: "56–76 (66)",
    prototypeValidation: false,
    gate: "Fail this round",
    task: "24–36",
    security: "17–27",
    innovation: "19–25",
    layerALow: 60,
    layerAHigh: 88,
    layerBLow: 56,
    layerBHigh: 76,
    layerBCentre: 66,
    synthesisRank: "1",
    decision: "NO-GO",
  },
  {
    rank: 8,
    id: "HYBRID-003",
    name: "PolicyProof payment conformance",
    layerB: 63,
    layerBAndRange: "55–71 (63)",
    prototypeValidation: false,
    gate: "Fail this round",
    task: "15–25",
    security: "19–25",
    innovation: "18–25",
    layerALow: 52,
    layerAHigh: 75,
    layerBLow: 55,
    layerBHigh: 71,
    layerBCentre: 63,
    synthesisRank: "4",
    decision: "NO-GO",
  },
  {
    rank: 9,
    id: "IDEA-074",
    name: "Forecast-buffer liquidity sweep",
    layerB: 63,
    layerBAndRange: "54–72 (63)",
    prototypeValidation: false,
    gate: "Conditional pass (stretch)",
    task: "24–32",
    security: "18–24",
    innovation: "15–21",
    layerALow: 57,
    layerAHigh: 77,
    layerBLow: 54,
    layerBHigh: 72,
    layerBCentre: 63,
    synthesisRank: "New (was inside IDEA-002/013)",
    decision: "CONDITIONAL GO (stretch)",
  },
  {
    rank: 10,
    id: "IDEA-081",
    name: "Attestation-gated escrow",
    layerB: 63,
    layerBAndRange: "54–72 (63)",
    prototypeValidation: false,
    gate: "Fail this round",
    task: "20–30",
    security: "16–23",
    innovation: "19–26",
    layerALow: 55,
    layerAHigh: 79,
    layerBLow: 54,
    layerBHigh: 72,
    layerBCentre: 63,
    synthesisRank: "New (was inside IDEA-003)",
    decision: "NO-GO",
  },
];

// Sensitivity across the four weightings. All numbers are from finalaudit.md
// section P, Layer B centres under balanced, feasibility, strict-security and
// innovation weights.
export const RANKING_SENSITIVITY: ReadonlyArray<{
  id: string;
  balanced: number;
  feasibility: number;
  strictSecurity: number;
  innovation: number;
}> = [
  { id: "HYBRID-008", balanced: 78, feasibility: 80.2, strictSecurity: 82.0, innovation: 73.2 },
  { id: "IDEA-073", balanced: 74, feasibility: 79.5, strictSecurity: 78.0, innovation: 63.5 },
  { id: "IDEA-001", balanced: 73, feasibility: 79.0, strictSecurity: 79.4, innovation: 61.8 },
  { id: "HYBRID-002R", balanced: 72, feasibility: 74.5, strictSecurity: 74.5, innovation: 66.8 },
  { id: "HYBRID-009", balanced: 70, feasibility: 69.8, strictSecurity: 72.1, innovation: 69.2 },
  { id: "IDEA-033", balanced: 69, feasibility: 72.0, strictSecurity: 73.2, innovation: 63.2 },
  { id: "HYBRID-001", balanced: 66, feasibility: 66.5, strictSecurity: 68.6, innovation: 63.7 },
  { id: "HYBRID-003", balanced: 63, feasibility: 60.0, strictSecurity: 64.6, innovation: 68.2 },
  { id: "IDEA-074", balanced: 63, feasibility: 65.2, strictSecurity: 65.7, innovation: 57.8 },
  { id: "IDEA-081", balanced: 63, feasibility: 60.8, strictSecurity: 62.9, innovation: 66.3 },
];

export const RESEARCH_PROCESS_STAGES = [
  {
    stage: 1,
    label: "Independent research",
    description:
      "14 source reports (R001–R014) reviewed. Each concept is a recoverable source slot.",
    status: "Completed",
    source: "synthesis / source_blocks.json",
  },
  {
    stage: 2,
    label: "Consolidated synthesis",
    description:
      "70 ideas, 7 hybrids, 51 claim checks, 40 external source records, rankings, security architectures.",
    status: "Superseded by post-audit package",
    source: "Agent_Wallet_Decision_Report.md",
  },
  {
    stage: 3,
    label: "Adversarial review (Audit A)",
    description:
      "27 decision-changing findings: 13 confirmed, 8 partial, 3 need experiments, 2 contradicted, 1 unsupported.",
    status: "Adjudicated",
    source: "claudeaudit.md",
  },
  {
    stage: 4,
    label: "Merger integrity audit (Audit B)",
    description:
      "43 named findings: 39 confirmed, 3 partial, 1 uncheckable. Completeness FAIL stands; no critical discrepancy.",
    status: "Adjudicated",
    source: "Audit_Report.md",
  },
  {
    stage: 5,
    label: "Post-audit adjudication",
    description:
      "Inventory grows 77 → 96 (86 ideas, 10 hybrids). HYBRID-008 leads under all four weightings.",
    status: "Current snapshot",
    source: "finalaudit.md",
  },
  {
    stage: 6,
    label: "Prototype validation",
    description:
      "X1 due 14 Oct 23:59 Dhaka; X2 by 17 Oct; Stage 1 uploaded by 16 Oct; submission 20 Oct 23:59 Beijing.",
    status: "Pending — no experiment run",
    source: "finalaudit.md section R, V",
  },
  {
    stage: 7,
    label: "Final selection",
    description:
      "No winner declared. Selection requires the 11 conditions in finalaudit.md section U.",
    status: "Pending",
    source: "finalaudit.md section U",
  },
];
