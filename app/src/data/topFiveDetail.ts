// Top-five detailed evaluation from finalaudit.md section N. Every field is
// extracted verbatim or near-verbatim; no invented information.

import type { Candidate } from "./types";

export interface TopFiveField {
  label: string;
  h008: string;
  i073: string;
  i001: string;
  h002r: string;
  h009: string;
}

export const TOP_FIVE_DETAIL: TopFiveField[] = [
  {
    label: "Exact financial problem",
    h008: "Pay approved obligations unattended; never pay fabricated ones; keep committed cash from other spending",
    i073: "Cap routine spending per cost centre and period without a click per payment",
    i001: "Pay a specific approved invoice exactly once",
    h002r: "Stop paying for services that keep failing",
    h009: "Let an agent buy services without eating committed cash",
  },
  {
    label: "Differentiation",
    h008: "Whole authority = owner-signed, onchain-enforced mandates; segregated reserve; live loss bound",
    i073: "Envelope reallocation by the agent within owner totals",
    i001: "Exactness and one-use enforcement, nothing more",
    h002r: "Output-check failure stops further spend",
    h009: "Reserve-aware service spending",
  },
  {
    label: "Novelty evidence",
    h008: "Plausible but unverified (section J); every part pre-exists",
    i073: "Contradicted as a gap; existing frameworks do it",
    i001: "None claimed",
    h002r: "Plausible but unverified",
    h009: "Plausible but unverified; R001 F22",
  },
  {
    label: "Autonomous workflow",
    h008: "Intake, match, time, reallocate, fund reserve, redeem, reconcile, escalate",
    i073: "Settle in-terms invoices, reallocate, escalate",
    i001: "Match and redeem",
    h002r: "Choose provider, pay, check, stop or switch",
    h009: "HYBRID-008 plus purchases",
  },
  {
    label: "Asset-management function",
    h008: "Reserve versus operating allocation; envelopes; optional surplus placement",
    i073: "Allocation across envelopes",
    i001: "None beyond payout",
    h002r: "Job budget only",
    h009: "Reserve protection against spending",
  },
  {
    label: "Onchain execution",
    h008: "Mandate redemptions, envelope transfers, reserve top-ups, owner revocation",
    i073: "Period-capped transfers",
    i001: "One-use transfers",
    h002r: "x402 settlements",
    h009: "Both",
  },
  {
    label: "Wallet architecture",
    h008: "Reserve and operating smart accounts; route M (MetaMask) or route Z (Safe, Roles 2.1.1, Delay 1.1.1)",
    i073: "Same family, envelope tier only",
    i001: "Same family, T0 only",
    h002r: "Smart-account payer (EIP-1271) or two-tier hot wallet",
    h009: "Union",
  },
  {
    label: "Security boundary",
    h008: "Agent key can only redeem; owner key offline; typed-data approvals",
    i073: "Caps and recipient sets enforced by the account",
    i001: "Exact mandate enforced by the account",
    h002r: "Budget enforced by balance or account; payee pinned offchain",
    h009: "Union",
  },
  {
    label: "Key risks",
    h008: "Tier composition; caveat semantics; Zodiac history on route Z; AI value unproven",
    i073: "Overpayment within cap to allowed recipients",
    i001: "Thin autonomy",
    h002r: "Paid non-delivery within budget; weak Topic F fit",
    h009: "Scope",
  },
  {
    label: "Technical feasibility",
    h008: "Medium (Stage 1 high)",
    i073: "High",
    i001: "High",
    h002r: "Medium to high",
    h009: "Low to medium by 20 Oct",
  },
  {
    label: "Dependencies",
    h008: "Smart Accounts Kit or Safe/Zodiac on testnet; test token; two RPCs",
    i073: "Same",
    i001: "Same",
    h002r: "x402 facilitator on Base Sepolia; test USDC",
    h009: "Both",
  },
  {
    label: "MVP scope",
    h008: "Reserve and operating accounts; three obligations; two envelopes; one token; one chain",
    i073: "Three envelopes, one reset, one reallocation",
    i001: "Three invoices, one token",
    h002r: "Two endpoints, 10-unit budget",
    h009: "One obligation, one envelope, one endpoint",
  },
  {
    label: "Demo scenario",
    h008: "Payroll reserve (R001 F03): agent pays two approved invoices and an in-terms envelope bill; a vendor bill that would breach the payroll reserve is refused; injected 'wallet changed' invoice and a duplicate fail onchain; owner revokes everything in one transaction; red-team drain stays under the displayed bound",
    i073: "Period reset and out-of-set recipient reverted",
    i001: "Exact payment; mutated amount reverts",
    h002r: "Faulty seller stops spending; injected price refused",
    h009: "Service purchase refused at reserve floor",
  },
  {
    label: "Required evidence",
    h008: "X1, X2, X3, X4 passes; explorer-verified hashes; clean-checkout reproduction",
    i073: "X1, X2",
    i001: "X1, X4",
    h002r: "X5",
    h009: "X1 and X5 by 15 Oct",
  },
  {
    label: "Confidence",
    h008: "Medium on design, none on execution",
    i073: "Medium",
    i001: "Medium-high",
    h002r: "Medium (feasibility), low (novelty)",
    h009: "Low",
  },
  {
    label: "Status",
    h008: "CONDITIONAL GO",
    i073: "GO",
    i001: "GO",
    h002r: "CONDITIONAL GO (fallback)",
    h009: "CONDITIONAL GO",
  },
];

// Top three prototype validation candidates (finalaudit.md section O)
export const TOP_THREE_VALIDATION: ReadonlyArray<{
  id: string;
  name: string;
  uncertainty: string;
  experiments: string[];
  reason: string;
}> = [
  {
    id: "HYBRID-008",
    name: "Mandate-bound obligation treasury",
    uncertainty:
      "Whether mandates, envelopes, segregation and the loss bound compose without leaks, and whether AI adds value",
    experiments: ["X1", "X2", "X3", "X4", "X1b"],
    reason:
      "Highest estimated score on all four weightings; covers all three Topic F pillars.",
  },
  {
    id: "IDEA-073",
    name: "Budget envelope treasury",
    uncertainty:
      "Whether period-capped, recipient-restricted envelopes behave as documented across resets",
    experiments: ["X1", "X2 (envelope arm)"],
    reason:
      "Most autonomous design that passes the gate outright; a credible Stage 1 if Stage 2 slips.",
  },
  {
    id: "HYBRID-002R",
    name: "ServiceMeter with failure stop (revised)",
    uncertainty:
      "Whether x402 payments can be bounded and stopped on a public testnet",
    experiments: ["X5"],
    reason:
      "Only shortlisted path independent of the delegation family.",
  },
];

// Unresolved disagreements and evidence requirements (finalaudit.md section Q)
export const UNRESOLVED_QUESTIONS: ReadonlyArray<{
  id: string;
  question: string;
  positions: string;
  resolves: string;
  defaultIfUnresolved: string;
}> = [
  {
    id: "Q-01",
    question: "How novel is HYBRID-008?",
    positions: "Synthesis 14/20 for ObligationLock; Audit A about 10; this package 10–11",
    resolves: "X6 dated feature table; external search for loss-certificate products",
    defaultIfUnresolved: "Claim integration quality and measured outcomes only",
  },
  {
    id: "Q-02",
    question: "Segregated accounts or a single-account floor?",
    positions: "Audit A and R001 F03: segregate. R001 F01 and synthesis: solvency invariant. R006 C20: temporal floor",
    resolves: "X2 reserve-leak test",
    defaultIfUnresolved: "Segregation (no new code)",
  },
  {
    id: "Q-03",
    question: "Route M or route Z?",
    positions:
      "Route M has one-use mandates; route Z has the native veto lane and Zodiac's bypass history",
    resolves: "X1 and X1b",
    defaultIfUnresolved: "Route M; veto lane optional",
  },
  {
    id: "Q-04",
    question: "Does AI add value?",
    positions: "Sources assign it extraction and scheduling; Audit A doubts necessity",
    resolves: "X3 against a template parser",
    defaultIfUnresolved: "Reduce the AI claim to intake and explanation",
  },
  {
    id: "Q-05",
    question: "Can Audit B's coverage figures be reproduced?",
    positions: "Audit B: 50.20% and 47.10%",
    resolves: "Its mapping file and traceability matrix",
    defaultIfUnresolved: "Report as Audit B's figures",
  },
  {
    id: "Q-06",
    question: "Which are the remaining high-priority records?",
    positions: "Audit B names 12 of 22 core records",
    resolves: "Traceability matrix",
    defaultIfUnresolved: "Unresolved; reopen when supplied",
  },
  {
    id: "Q-07",
    question: "Is the synthesis complete?",
    positions: "Audit B: no",
    resolves:
      "R004 notebook, clean R006, R007 canvas, R008 concepts 6–10, R014 sections 1–6",
    defaultIfUnresolved: "Proceed with disclosure; 32 records stay uncertain",
  },
  {
    id: "Q-08",
    question: "Do public-testnet hashes count?",
    positions: "Rules say 'real on-chain transaction hashes'",
    resolves: "Written organizer answer",
    defaultIfUnresolved: "Public EVM testnet, disclosed",
  },
  {
    id: "Q-09",
    question: "May finalists update code after 20 Oct?",
    positions: "Rules: 'No changes are accepted after the deadline'",
    resolves: "Organizer answer",
    defaultIfUnresolved: "Treat the 20 Oct submission as final",
  },
  {
    id: "Q-10",
    question: "What does the bonus assess?",
    positions: "Unpublished",
    resolves: "Organizer answer",
    defaultIfUnresolved: "Score zero",
  },
  {
    id: "Q-11",
    question: "What did the delegation framework's audits cover?",
    positions: "Repository tags audited releases",
    resolves: "Read the repository's audit reports",
    defaultIfUnresolved: "State 'audited release tags; scope not reviewed'",
  },
  {
    id: "Q-12",
    question: "Does a smart-account x402 payer obey restricted signing rules?",
    positions: "Documented support for EIP-1271; validator behaviour unknown",
    resolves: "X5",
    defaultIfUnresolved: "Use the two-tier hot wallet",
  },
];

// Eleven conditions required before final selection (finalaudit.md section U)
export const FINAL_SELECTION_CONDITIONS: ReadonlyArray<{
  id: string;
  text: string;
}> = [
  { id: "F-01", text: "Team registration confirmed (today)" },
  {
    id: "F-02",
    text: "Organizer questions sent; without a reply, use a public EVM testnet and disclose it",
  },
  { id: "F-03", text: "X1 passes on at least one route by 14 Oct 23:59 Dhaka" },
  {
    id: "F-04",
    text: "X3 shows zero unmandated payments; the AI claim is sized to its accuracy result",
  },
  {
    id: "F-05",
    text: "X4 shows zero duplicates and zero false 'finalized' states; revocation takes effect",
  },
  { id: "F-06", text: "Stage 1 uploaded with explorer-verified hashes by 16 Oct 23:59 Dhaka" },
  {
    id: "F-07",
    text: "X2 passes before any Stage 2 claim (no reserve leakage; no drain above the bound), or Stage 2 is cut by 17 Oct 23:59",
  },
  {
    id: "F-08",
    text: "X6 yields a contribution statement of at most three cited sentences",
  },
  {
    id: "F-09",
    text: "Security self-assessment lists the permission tiers, the loss formula and assumptions A1–A5, every untested case, and the source-completeness disclosure",
  },
  {
    id: "F-10",
    text: "No unbounded approval, root key in the runtime, unpatched Zodiac module or hidden signing route survives review",
  },
  {
    id: "F-11",
    text: "A second team member reproduces the demo from a clean checkout, including one failure and one recovery",
  },
];
