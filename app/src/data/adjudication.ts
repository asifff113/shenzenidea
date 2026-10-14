// Adjudication matrices from finalaudit.md sections C (Audit A) and D
// (Audit B). Preserved verbatim; no silent re-interpretation.

import type { AdjudicationRow } from "./types";

export const AUDIT_A_ADJUDICATIONS: AdjudicationRow[] = [
  {
    id: "A-01",
    finding: "Synthesis selection gates cannot finish before 20 Oct (A1, FX-1).",
    candidate: "All",
    verdict: "Confirmed",
    evidence: "Rules deadline; synthesis E1–E3, E7 estimates of 4–7 engineer-days before an 8–12-day build.",
    actionAndImpact: "Keep the gated plan; about 6.8 days remain.",
    remainingUncertainty: "Team capacity unknown.",
  },
  {
    id: "A-02",
    finding: "Registration is an unverified gate (A2, FX-2).",
    candidate: "All",
    verdict: "Confirmed",
    evidence:
      "Co-organizer page: emailed form, reply within 48 hours, early closure possible.",
    actionAndImpact: "User action today.",
    remainingUncertainty: "Whether the team is registered.",
  },
  {
    id: "A-03",
    finding:
      "Third criterion is 'Innovation & interaction'; shared scoring; ambition statement (A3, B).",
    candidate: "All",
    verdict: "Confirmed",
    evidence:
      "Synthesis section 8 table header reads 'Innovation /30'; rules PDF wording.",
    actionAndImpact: "Interaction scored in Layer A.",
    remainingUncertainty: "Bonus subcriteria unpublished.",
  },
  {
    id: "A-04",
    finding:
      "No candidate is a new mechanism; one-use exact authority already expressible (A4, C).",
    candidate: "HYBRID-001, IDEA-001",
    verdict: "Partially confirmed",
    evidence:
      "MetaMask caveats documented (exactExecution, limitedCalls, timestamp, redeemer, nonce); Biconomy usageLimit.",
    actionAndImpact: "Novelty lowered; deployed behaviour still untested.",
    remainingUncertainty: "X1.",
  },
  {
    id: "A-05",
    finding: "Custom executor unnecessary; segregate accounts (A5, FX-6, H).",
    candidate: "HYBRID-001 → HYBRID-008",
    verdict: "Requires experimental verification",
    evidence:
      "Documentation only. Segregation was already proposed by R001 F03 ('Separate reserved spending capability').",
    actionAndImpact: "Architecture adopted provisionally; credit R001 F03.",
    remainingUncertainty: "X1, X2.",
  },
  {
    id: "A-06",
    finding:
      "Asset management under-served; yield rejection conflated capital risk (A6, W-2).",
    candidate: "Finalists, IDEA-013",
    verdict: "Partially confirmed",
    evidence:
      "Pillar point stands. The synthesis failed IDEA-013 for scope, not only capital risk.",
    actionAndImpact:
      "Surplus placement restored as IDEA-074 (R003 C06, R006 C04), not as an Audit A invention.",
    remainingUncertainty: "Testnet market reliability.",
  },
  {
    id: "A-07",
    finding: "AI necessity weak (A7, W-3).",
    candidate: "HYBRID-001, IDEA-001",
    verdict: "Requires experimental verification",
    evidence:
      "Sources define AI roles (R001 F01, R003 C01: extract, forecast, schedule); value unmeasured.",
    actionAndImpact: "X3 compares LLM with a deterministic parser.",
    remainingUncertainty: "X3.",
  },
  {
    id: "A-08",
    finding: "Compliance treated as disclaimers (A8, W-4).",
    candidate: "All",
    verdict: "Partially confirmed",
    evidence:
      "Synthesis corrects legal overclaims but designs few demonstrable controls; R013 C09 already proposed sanctions screening.",
    actionAndImpact: "Control set added to section K.",
    remainingUncertainty: "Legal status unassessed.",
  },
  {
    id: "A-09",
    finding: "Circle spending policies unavailable on testnet (FX-4).",
    candidate: "Circle route",
    verdict: "Confirmed",
    evidence: "Circle guide: 'Testnet is not supported'.",
    actionAndImpact: "No change.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-10",
    finding: "Zodiac ERC-1271 bypass; patched versions (FX-5, SEC-12).",
    candidate: "Safe routes",
    verdict: "Confirmed",
    evidence:
      "Maintainer post-mortem; R002 L00501 already required Roles 2.1.1.",
    actionAndImpact: "Route Z requires patched-version check.",
    remainingUncertainty: "Testnet mastercopy version.",
  },
  {
    id: "A-11",
    finding:
      "x402 smart-account (ERC-1271) support undocumented, so ServiceMeter as specified is fatal (FX-7).",
    candidate: "HYBRID-002",
    verdict: "Contradicted",
    evidence:
      "x402 wallet compatibility: deployed ERC-4337 accounts supported via EIP-1271 for EIP-3009 (token-dependent) and Permit2.",
    actionAndImpact: "FX-7 withdrawn; HYBRID-002R may pay from a smart account.",
    remainingUncertainty: "Account validator rules for typed-data signing.",
  },
  {
    id: "A-12",
    finding: "PolicyProof cannot ship by 20 Oct (FX-8).",
    candidate: "HYBRID-003",
    verdict: "Confirmed",
    evidence: "Synthesis estimate 10–16 engineer-days.",
    actionAndImpact: "Research reserve.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-13",
    finding:
      "LLM-written approval summaries can deceive the owner (SEC-03).",
    candidate: "HYBRID-008, IDEA-001",
    verdict: "Confirmed (threat class)",
    evidence: "Approval UI driven by model text is a direct injection path.",
    actionAndImpact: "Typed-data signing screen required.",
    remainingUncertainty: "Test in X3.",
  },
  {
    id: "A-14",
    finding: "'limitedCalls = 1 makes duplicates impossible (SEC-08).",
    candidate: "HYBRID-008, IDEA-001",
    verdict: "Requires experimental verification",
    evidence:
      "Caveats reference: 'maximum number of times this delegation may be redeemed'.",
    actionAndImpact: "X1 and X4.",
    remainingUncertainty: "Behaviour on testnet.",
  },
  {
    id: "A-15",
    finding:
      "Reserve rule presumes undefined discretionary spending (W-5, W-6).",
    candidate: "HYBRID-001",
    verdict: "Partially confirmed",
    evidence:
      "R001 F22 defines it: agent service purchases 'must preserve future budget for mandatory commitments'; the synthesis dropped that context.",
    actionAndImpact: "HYBRID-009 restores R001 F22.",
    remainingUncertainty: "Underfunding priority still unspecified.",
  },
  {
    id: "A-16",
    finding: "Novelty centre 14 → 10 flips the favourite (G, K4).",
    candidate: "HYBRID-001",
    verdict: "Partially confirmed",
    evidence: "Arithmetic correct (75 against 76); the input is judgment.",
    actionAndImpact: "Novelty set to 10–11 for HYBRID-008.",
    remainingUncertainty: "Prior-art desk check X6.",
  },
  {
    id: "A-17",
    finding: "'Adversarial concurrency' is free on EVM (K6).",
    candidate: "HYBRID-001",
    verdict: "Partially confirmed",
    evidence:
      "True for checks inside one execution; not for ERC-4337 validation-phase or hosted policy engines.",
    actionAndImpact: "Drop from pitch; keep execution-phase checks.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-18",
    finding: "Hot-wallet funding bounds x402 budget (K8).",
    candidate: "HYBRID-002",
    verdict: "Confirmed",
    evidence: "Token balance enforced by the token contract.",
    actionAndImpact: "Retained as option B for HYBRID-002R.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-19",
    finding: "PolicyLayer is a ServiceMeter competitor (C).",
    candidate: "HYBRID-002",
    verdict: "Unsupported",
    evidence:
      "PolicyLayer sells an authority playbook for coding agents; no payment budgets shown.",
    actionAndImpact: "Removed from prior-art matrix.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-20",
    finding: "Request Finance as closest payables competitor (C).",
    candidate: "HYBRID-001",
    verdict: "Partially confirmed",
    evidence:
      "Stablecoin approvals-to-payments workflow is real; it is not agentic.",
    actionAndImpact: "Kept as workflow competitor.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-21",
    finding:
      "Exposure meter (N2), surplus placement (N3), segregation and the ObligationLock–ServiceMeter merge presented as this review's proposals (H, L).",
    candidate: "HYBRID-008",
    verdict: "Contradicted",
    evidence:
      "R003 C19 'Maximum-loss certificate' (IDEA-026); R014 L05371 conditional loss ceiling; R003 C06 and R006 C04 surplus placement; R001 F03 segregation; R001 F22 merge.",
    actionAndImpact:
      "Attribution corrected throughout; no originality claimed.",
    remainingUncertainty: "External novelty of a loss certificate unverified.",
  },
  {
    id: "A-22",
    finding: "Standing mandates give autonomy (W-8).",
    candidate: "HYBRID-008",
    verdict: "Confirmed",
    evidence: "Matches R010 C07 envelopes and R002 C01 metered allowances.",
    actionAndImpact: "Credited to sources.",
    remainingUncertainty: "Period-caveat semantics (X2).",
  },
  {
    id: "A-23",
    finding: "Stage 1 should be uploaded early (P).",
    candidate: "All",
    verdict: "Confirmed",
    evidence: "Rules: 'the latest version received prevails'.",
    actionAndImpact: "Kept.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-24",
    finding: "Refund governor not a primary (N).",
    candidate: "IDEA-033",
    verdict: "Confirmed",
    evidence: "Weak asset management.",
    actionAndImpact: "Kept.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-25",
    finding: "Escrows no-go for this deadline (N).",
    candidate: "IDEA-003 family",
    verdict: "Confirmed",
    evidence:
      "Audit B's restored predicates add scope, not feasibility.",
    actionAndImpact: "Kept; predicates restored as IDEA-081.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-26",
    finding: "Custom-executor ObligationLock no-go (N).",
    candidate: "HYBRID-001",
    verdict: "Confirmed",
    evidence: "Its own review bar cannot be met in time.",
    actionAndImpact: "Gate FAIL for this round.",
    remainingUncertainty: "None.",
  },
  {
    id: "A-27",
    finding: "Experiments X1–X6 sized to deadline (M).",
    candidate: "All",
    verdict: "Partially confirmed",
    evidence:
      "X5 assumed no smart-account path; X2 omitted envelopes; no veto-lane route.",
    actionAndImpact: "X5 revised; X2 extended; X1b added.",
    remainingUncertainty: "Results pending.",
  },
];

// Audit B dispositions (B-01..B-43) condensed to a faithful list of
// disposition rows.
export const AUDIT_B_DISPOSITIONS: AdjudicationRow[] = [
  {
    id: "B-08",
    finding:
      "R010 C07 per-cost-center envelopes with resets, recipient sets, reallocation; R011 C15 per-task envelopes.",
    candidate: "IDEA-002 → IDEA-073",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: IDEA-002 liability reserve → split into IDEA-073 envelopes.",
    actionAndImpact:
      "New IDEA-073 (Budget envelope treasury); becomes Tier 1 of HYBRID-008.",
    remainingUncertainty: "Period semantics (X2).",
  },
  {
    id: "B-09",
    finding: "R006 C04 runway forecast and sweep to Aave v3.",
    candidate: "IDEA-002, IDEA-013",
    verdict: "Partially confirmed",
    evidence:
      "finalaudit.md section G: forecast buffers split from authenticated-liability reserve.",
    actionAndImpact:
      "New IDEA-074 with R003 C06; IDEA-013 link kept, IDEA-002 link dropped.",
    remainingUncertainty: "None.",
  },
  {
    id: "B-10",
    finding:
      "R002 C01 time-delayed slow lane a human can veto (L00497, L00640).",
    candidate: "IDEA-001 → IDEA-080",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section F: veto lane restored from R002 C01.",
    actionAndImpact: "New IDEA-080; optional route for HYBRID-008 (route Z).",
    remainingUncertainty: "Route Z cost.",
  },
  {
    id: "B-12",
    finding:
      "R010 C03 verdict AND counterparty attestation; R012 C02 counterparty acceptance.",
    candidate: "IDEA-003, IDEA-019 → IDEA-081",
    verdict: "Confirmed",
    evidence: "finalaudit.md section F: conjunctive release restored.",
    actionAndImpact: "New IDEA-081 with bootstrap dependency.",
    remainingUncertainty: "Attestation source.",
  },
  {
    id: "B-17",
    finding:
      "R010 C08 agent detects and revokes its own authority (L04005).",
    candidate: "IDEA-009 → IDEA-075",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: self-detection kept; IDEA-009 labelled a synthesis redesign.",
    actionAndImpact:
      "New IDEA-075; IDEA-009 labelled a synthesis redesign.",
    remainingUncertainty:
      "Self-detection is weak by R010's own note; implemented in deterministic executor code, not the model.",
  },
  {
    id: "B-18",
    finding:
      "R012 C11 agent halts when its behaviour drifts (L04803).",
    candidate: "IDEA-049 → IDEA-076",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: behavioural drift split; IDEA-049 labelled a synthesis redesign.",
    actionAndImpact: "New IDEA-076.",
    remainingUncertainty: "None.",
  },
  {
    id: "B-21",
    finding:
      "R010 C10 subscriptions with cancellation authority (L04007).",
    candidate: "IDEA-002 → IDEA-057",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: subscription authority re-pointed to IDEA-057.",
    actionAndImpact: "Lineage fix.",
    remainingUncertainty: "None.",
  },
  {
    id: "B-23",
    finding:
      "R008 C01 pays when a logistics API reports delivery; no escrow (L03300–L03310).",
    candidate: "IDEA-001, IDEA-070 → IDEA-078",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: delivery-signal payment split from escrow.",
    actionAndImpact: "New IDEA-078.",
    remainingUncertainty: "Oracle reliability.",
  },
  {
    id: "B-25",
    finding:
      "Clawback in R010 C12, R010 C17, R013 C07.",
    candidate: "IDEA-021, IDEA-008",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: variants IDEA-021/C and IDEA-008/C added.",
    actionAndImpact:
      "Variants added; must state which funds can be clawed back (unvested, locked, unspent or paid).",
    remainingUncertainty: "Enforceability unproven.",
  },
  {
    id: "B-26",
    finding: "R006 C20 temporal invariants.",
    candidate: "IDEA-025, IDEA-011 → IDEA-086",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section F: temporal-invariant conditional payments restored.",
    actionAndImpact: "New IDEA-086; option for HYBRID-008 reserve floor.",
    remainingUncertainty: "New code (custom caveat or module).",
  },
  {
    id: "B-27",
    finding:
      "R002 C21 public red-team arena with prize capped by onchain limits (L00660).",
    candidate: "IDEA-032 → IDEA-084",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section F: public bounded-loss arena restored; evaluation layer for HYBRID-008.",
    actionAndImpact: "New IDEA-084; Fails standalone (no financial task).",
    remainingUncertainty: "Hosting effort.",
  },
  {
    id: "B-31",
    finding:
      "R008 delivery-oracle feasibility test (L03468).",
    candidate: "IDEA-078",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section D: delivery-oracle feasibility test restored to IDEA-078.",
    actionAndImpact: "Attached to IDEA-078.",
    remainingUncertainty: "None.",
  },
  {
    id: "B-33",
    finding:
      "R013 C15 replace-by-fee and paymaster top-up; R002 C22 gas top-ups (L05140).",
    candidate: "IDEA-027/R",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section G: variant IDEA-027/R added; fee-bounded replacement added to X4.",
    actionAndImpact: "Variant added.",
    remainingUncertainty: "None.",
  },
  {
    id: "B-34",
    finding:
      "Token-metadata injection inputs (R011 L04355, L04486; R014).",
    candidate: "Threat model",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section D: token-metadata injection added to threat model (section K).",
    actionAndImpact: "Added to threat model.",
    remainingUncertainty: "None.",
  },
  {
    id: "B-37",
    finding:
      "URL ledger: 12 R013 fields with stray quotes, 4 joined pairs.",
    candidate: "research_ledgers.json",
    verdict: "Confirmed (reproduced exactly: 227 occurrences, 181 unique)",
    evidence: "finalaudit.md section D: one URL per record.",
    actionAndImpact: "One URL per record.",
    remainingUncertainty: "Destinations unchecked.",
  },
  {
    id: "B-41",
    finding: "Exhaustive A–L atomic closure incomplete.",
    candidate: "Whole package",
    verdict: "Confirmed",
    evidence:
      "finalaudit.md section D: cannot finish before 20 Oct; no named gap weakens the shortlisted authority model.",
    actionAndImpact: "Reopen if new sources appear.",
    remainingUncertainty: "Cannot finish before 20 Oct.",
  },
  {
    id: "B-43",
    finding:
      "Remaining unnamed high-priority records and full false-merge/misrepresentation ID lists.",
    candidate: "Audit B matrix (absent)",
    verdict: "Cannot be checked",
    evidence: "finalaudit.md section D: traceability matrix absent.",
    actionAndImpact: "Request the matrix.",
    remainingUncertainty: "Unknown items.",
  },
];