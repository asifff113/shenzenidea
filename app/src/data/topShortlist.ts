// Top-10 ranked shortlist from the post-audit decision package.
// Every field is a verbatim or near-verbatim extraction from
// finalaudit.md and master_inventory.csv. No silent invention.

import type { Candidate } from "./types";

export const TOP_SHORTLIST: Candidate[] = [
  {
    id: "HYBRID-008",
    name: "Mandate-bound obligation treasury",
    rank: 1,
    layerBCentre: 78,
    layerBAndRange: "68–86 (78)",
    layerA: "73–88",
    gate: "CONDITIONAL PASS",
    decision: "CONDITIONAL GO",
    prototypeValidation: true,
    customer: "Crypto SMEs and DAOs paying vendors and contractors in stablecoins",
    financialProblem:
      "Treasury must pay approved obligations unattended, never pay fabricated ones, and keep committed cash from being spent elsewhere.",
    agentResponsibilities:
      "Read invoices, match to mandates, choose timing, reallocate envelopes, fund reserve, redeem, reconcile, escalate.",
    assetManagementRole:
      "Allocates between reserve and operating accounts and across envelopes; optional surplus placement (IDEA-074).",
    onchainWorkflow:
      "Redeem one-use exact obligation mandates from reserve; period-capped envelope payments from operating; one-way reserve top-ups; owner bulk revoke.",
    securityModel:
      "Agent key holds gas only and can only redeem; route M: MetaMask caveats (exactExecution, limitedCalls 1, timestamp, redeemer, erc20PeriodTransfer, allowedCalldata, nonce); route Z: Safe with Roles 2.1.1 and Delay 1.1.1 adding the veto lane; loss certificate shown live.",
    closestCompetitor:
      "Request Finance (approvals to payments); AgentsPay (offchain caps); Cleared (registry, agent sessions on roadmap); PACE (binding).",
    noveltyHypothesis:
      "An AP agent whose entire authority is owner-signed, onchain-enforced mandates, with a published conditional loss bound tested by public attackers; integration-level.",
    dependencies:
      "Smart Accounts Kit or Safe/Zodiac on chosen testnet; test token; two RPCs.",
    feasibility: "Medium (Stage 1 high).",
    mvpScope:
      "Reserve and operating accounts; three obligations; two envelopes; one token; one chain.",
    demoScenario:
      "Payroll-reserve demo (R001 F03): vendor bill refused; injection, duplicate and address-swap attempts fail onchain; red-team drain stays under displayed bound.",
    evidenceConfidence: "Medium on design; no execution.",
    sources: [
      "R001 F01, F03, F22",
      "R003 C01, C19",
      "R010 C07",
      "R011 C15",
      "R002 C01, C21",
      "R014 L05371",
      "Audit A N1",
    ],
    changeStatus: "NEW HYBRID",
    changeNote:
      "Audit A N1 integrated with Audit B restorations (B-08 envelopes, B-10 veto lane, B-27 red-team arena, A-21 loss certificate).",
    experiments: ["X1", "X1b", "X2", "X3", "X4", "X6"],
  },
  {
    id: "IDEA-073",
    name: "Budget envelope treasury",
    rank: 2,
    layerBCentre: 74,
    layerBAndRange: "65–80 (74)",
    layerA: "64–79",
    gate: "PASS",
    decision: "GO",
    prototypeValidation: true,
    customer: "SME or protocol treasuries",
    financialProblem:
      "Spending across cost centres needs per-period limits and recipient restrictions without a click per payment.",
    agentResponsibilities:
      "Settle routine obligations inside envelopes, sweep and reallocate between envelopes, escalate above threshold.",
    assetManagementRole:
      "Allocates treasury balance across envelopes each period.",
    onchainWorkflow:
      "Period-capped transfers to recipient sets; reallocation within owner-set totals.",
    securityModel:
      "Per-envelope period cap and recipient set enforced by the account (R010 C07); per-task hard cap (R011 C15).",
    closestCompetitor:
      "Safe allowance module (no recipient restriction); MetaMask erc20PeriodTransfer plus allowedCalldata; Zodiac Roles allowances.",
    noveltyHypothesis:
      "Weak: R010's 'functional gap' claim is contradicted by recipient-restricted periodic permissions in existing frameworks.",
    dependencies:
      "Delegation framework or Roles 2.1.1 on chosen testnet; token.",
    feasibility: "High (2–4 engineer-days).",
    mvpScope:
      "Three envelopes, one period reset, one reallocation, one out-of-set recipient attempt.",
    demoScenario:
      "Envelope breach count zero by construction; benign payments complete.",
    evidenceConfidence: "Medium: documented primitives; untested.",
    sources: ["R010 L04004 (C07)", "R011 L04488 (C15)"],
    changeStatus: "NEW (split from IDEA-002)",
    changeNote: "Audit B B-08: period/task envelopes split from the authenticated-liability reserve.",
    experiments: ["X1", "X2"],
  },
  {
    id: "IDEA-001",
    name: "Bounded invoice payout",
    rank: 3,
    layerBCentre: 73,
    layerBAndRange: "65–79 (73)",
    layerA: "62–78",
    gate: "PASS",
    decision: "GO",
    prototypeValidation: false, // Stage 1 floor of HYBRID-008, not separate prototype
    customer: "DAO finance teams",
    financialProblem: "Wrong or duplicate supplier payment.",
    agentResponsibilities:
      "Match invoice to a separately approved purchase order; agent schedules and pays routine matches.",
    assetManagementRole: "Pays out from a controlled balance (derived).",
    onchainWorkflow: "One-use token transfer.",
    securityModel:
      "Exact mandate, cumulative cap, independent beneficiary record.",
    closestCompetitor: "Cleared; AgentsPay; Request; PACE.",
    noveltyHypothesis:
      "Buyer-side obligation authenticity beyond ordinary capped bill pay.",
    dependencies:
      "Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source.",
    feasibility: "1–2 weeks.",
    mvpScope: "One supplier, three invoices, one token.",
    demoScenario: "Correct payment once; forged obligation never pays.",
    evidenceConfidence: "Low: documentation-level; no prototype.",
    sources: [
      "R001:L00159 (F01)",
      "R002:L00640 (C01)",
      "R003:L01195 (C01)",
      "R003:L01278 (C15)",
      "R004:L01958 (C09)",
      "R006:L03220 (C01)",
      "R008:L03300 (C01)",
      "R009:L03600 (C-14)",
      "R010:L03998 (C01)",
      "R010:L03999 (C02)",
      "R011:L04456 (C02)",
      "R011:L04486 (C13)",
      "R012:L04793 (C01)",
      "R013:L05126 (C01)",
      "R014:L05403 (visible architecture 1)",
    ],
    changeStatus: "EXPANDED",
    changeNote:
      "R002 C01 delayed veto lane restored as IDEA-080; R008 C01 delivery-signal variant split to IDEA-078 (IDEA-001 link kept for its capped payout).",
    experiments: ["X1", "X4"],
  },
  {
    id: "HYBRID-002R",
    name: "ServiceMeter with failure stop (revised)",
    rank: 4,
    layerBCentre: 72,
    layerBAndRange: "64–81 (72)",
    layerA: "61–79",
    gate: "CONDITIONAL PASS",
    decision: "CONDITIONAL GO",
    prototypeValidation: true,
    customer: "Agent operators",
    financialProblem: "Repeated paid calls return unusable output.",
    agentResponsibilities:
      "Choose provider, pay, verify output, stop after failure.",
    assetManagementRole: "Job budget only.",
    onchainWorkflow:
      "x402 exact (EIP-3009) or Permit2 settlement on Base Sepolia.",
    securityModel:
      "Option A: deployed smart account payer (EIP-1271). Option B: hot wallet holding only the job budget, topped up by a period-capped delegation. Payee pinned per origin; one outstanding authorization.",
    closestCompetitor:
      "Coinbase Agentic Wallet guardrails; x402 payment identifier and signed receipts.",
    noveltyHypothesis:
      "Stop-after-failed-predicate reduces wasted spend; unverified.",
    dependencies: "x402 testnet facilitator; test USDC.",
    feasibility: "Medium-high.",
    mvpScope: "Two endpoints (honest, faulty), 10-unit budget.",
    demoScenario:
      "Post-failure spend versus baseline with extensions.",
    evidenceConfidence: "Medium on feasibility; low on novelty.",
    sources: [
      "R001 F06",
      "R002 C04",
      "R014 ServiceMeter section",
      "synthesis IDEA-006, IDEA-019",
    ],
    changeStatus: "REVISED",
    changeNote:
      "Audit A A-11 contradiction corrected (x402 documents EIP-1271 support); A-19 PolicyLayer competitor removed.",
    experiments: ["X5"],
  },
  {
    id: "HYBRID-009",
    name: "Obligation-reserved agent commerce",
    rank: 5,
    layerBCentre: 70,
    layerBAndRange: "60–79 (70)",
    layerA: "67–87",
    gate: "CONDITIONAL PASS",
    decision: "CONDITIONAL GO",
    prototypeValidation: false, // Conditional on X1 + X5 by 15 Oct
    customer: "Agent operators with recurring obligations",
    financialProblem:
      "Agent buys services but must preserve budget for mandatory commitments.",
    agentResponsibilities:
      "As HYBRID-008 plus x402 purchases from operating funds.",
    assetManagementRole: "Reserve protected against service spending.",
    onchainWorkflow: "HYBRID-008 flows plus x402 settlements.",
    securityModel: "Union of HYBRID-008 and HYBRID-002R controls.",
    closestCompetitor: "Nevermined; Circle; R001's own comparison.",
    noveltyHypothesis: "Source-backed combination (R001 F22); unverified.",
    dependencies: "Both payment paths.",
    feasibility: "Low to medium by 20 Oct.",
    mvpScope: "One obligation, one envelope, one paid endpoint.",
    demoScenario: "Service purchase refused when it would breach reserve.",
    evidenceConfidence: "Low.",
    sources: ["R001 F22"],
    changeStatus: "NEW HYBRID (source-backed)",
    changeNote: "Audit A A-15 (reserve without competing spender) and A-21 (attribution).",
    experiments: ["X1", "X5"],
  },
  {
    id: "IDEA-033",
    name: "Original-payer refund governor",
    rank: 6,
    layerBCentre: 69,
    layerBAndRange: "61–77 (69)",
    layerA: "55–73",
    gate: "CONDITIONAL PASS",
    decision: "NO-GO as primary",
    prototypeValidation: false,
    customer: "Merchants",
    financialProblem: "Refund fraud and repeated refunds.",
    agentResponsibilities:
      "Agent reconciles return against original order and refunds remaining amount.",
    assetManagementRole: "Pays out from a controlled balance (derived).",
    onchainWorkflow: "Refund token transfer.",
    securityModel:
      "Original-payer destination, cumulative refunded <= paid, one-use order state.",
    closestCompetitor: "Conventional payment refunds; escrow refunds.",
    noveltyHypothesis:
      "Cross-tool original-payment provenance enforcement.",
    dependencies:
      "Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source.",
    feasibility: "1–2 weeks.",
    mvpScope: "One partial and one attempted duplicate refund.",
    demoScenario: "No destination change or over-refund.",
    evidenceConfidence: "Low: documentation-level; no prototype.",
    sources: ["R003:L01249 (C09)"],
    changeStatus: "UNCHANGED",
    changeNote: "Synthesis definition retained.",
    experiments: [],
  },
  {
    id: "HYBRID-001",
    name: "ObligationLock (as specified, custom executor)",
    rank: 7,
    layerBCentre: 66,
    layerBAndRange: "56–76 (66)",
    layerA: "60–88",
    gate: "FAIL this round",
    decision: "NO-GO",
    prototypeValidation: false,
    customer: "Stablecoin-native treasury",
    financialProblem:
      "Fabricated invoices and starved committed payments.",
    agentResponsibilities: "Extract, reconcile, schedule, propose.",
    assetManagementRole: "Reserve accounting.",
    onchainWorkflow: "Custom executor consumes obligation and transfers.",
    securityModel: "New executor enforces obligation and reserve.",
    closestCompetitor: "Request Finance; AgentsPay; Cleared; PACE.",
    noveltyHypothesis: "Narrow; see HYBRID-008.",
    dependencies: "New unaudited contract.",
    feasibility: "8–12 engineer-days plus validation.",
    mvpScope: "As synthesis.",
    demoScenario: "As synthesis.",
    evidenceConfidence: "Low.",
    sources: ["R001 F01, F03, F22", "R003 C01"],
    changeStatus: "REVISED GATE",
    changeNote:
      "Superseded by HYBRID-008. Audit A A-26: unaudited trusted code; 8–12 days plus validation; its own review bar cannot be met by 20 Oct.",
    experiments: [],
  },
  {
    id: "HYBRID-003",
    name: "PolicyProof payment conformance",
    rank: 8,
    layerBCentre: 63,
    layerBAndRange: "55–71 (63)",
    layerA: "52–75",
    gate: "FAIL this round",
    decision: "NO-GO",
    prototypeValidation: false,
    customer: "Wallet developers",
    financialProblem: "Provider migration silently widens agent authority.",
    agentResponsibilities: "Draft policy; compile; test.",
    assetManagementRole: "None.",
    onchainWorkflow: "One payment per backend.",
    securityModel: "Independent oracle.",
    closestCompetitor: "Clawnch / Clawmes.",
    noveltyHypothesis: "Plausible research gap.",
    dependencies: "Two backends.",
    feasibility: "10–16 engineer-days.",
    mvpScope: "One policy, two backends.",
    demoScenario: "Divergence caught.",
    evidenceConfidence: "Low.",
    sources: ["R010 C21 (chain-to-chain original)", "synthesis redesign"],
    changeStatus: "RELABELLED",
    changeNote:
      "Audit B B-30: ID restored to chain-to-chain (R010 C21). Audit A A-12: cannot ship in 10–16 days; research reserve.",
    experiments: [],
  },
  {
    id: "IDEA-074",
    name: "Forecast-buffer liquidity sweep",
    rank: 9,
    layerBCentre: 63,
    layerBAndRange: "54–72 (63)",
    layerA: "57–77",
    gate: "CONDITIONAL PASS (stretch)",
    decision: "CONDITIONAL GO (stretch)",
    prototypeValidation: false,
    customer: "Startup, SME and foundation treasuries",
    financialProblem:
      "Idle cash earns nothing while operating liquidity must cover forecast burn.",
    agentResponsibilities:
      "Forecast runway and payroll dates; keep operating buffer; sweep surplus to an allowlisted vault and back.",
    assetManagementRole:
      "Allocates surplus between liquid account and a lending vault.",
    onchainWorkflow:
      "Vault supply and withdraw; transfers between operating and reserve accounts.",
    securityModel:
      "Vault and method allowlist; invested cap; withdrawal recipient fixed to treasury.",
    closestCompetitor: "Treasury yield automation; vault strategies.",
    noveltyHypothesis:
      "Weak; obligation-aware timing is the only twist.",
    dependencies: "Aave v3 Sepolia test market or a self-deployed vault.",
    feasibility: "Medium; testnet market reliability unknown.",
    mvpScope:
      "One market, one asset, one deposit and one just-in-time withdrawal.",
    demoScenario:
      "Buffer never breached; surplus placed and recalled before a due date.",
    evidenceConfidence: "Low.",
    sources: ["R006:L03220 (C04)", "R003:L01234 (C06)"],
    changeStatus: "NEW (split from IDEA-002; overlaps IDEA-013)",
    changeNote:
      "Audit B B-09: forecast-buffer split out. Audit A N3 re-attributed to R003 C06 / R006 C04.",
    experiments: ["X2"],
  },
  {
    id: "IDEA-081",
    name: "Attestation-gated escrow",
    rank: 10,
    layerBCentre: 63,
    layerBAndRange: "54–72 (63)",
    layerA: "55–79",
    gate: "FAIL this round",
    decision: "NO-GO",
    prototypeValidation: false,
    customer: "Agent and freelance buyers",
    financialProblem: "Escrow release on one party's say-so.",
    agentResponsibilities:
      "Assess deliverable; release requires verdict AND counterparty attestation or acceptance.",
    assetManagementRole: "Holds funds in escrow.",
    onchainWorkflow: "Fund, attest, release or refund.",
    securityModel: "Conjunctive release; expiry refund.",
    closestCompetitor: "ERC-8183; Virtuals ACP; Trustless Work.",
    noveltyHypothesis:
      "Plausible (R010: most original); unverified.",
    dependencies:
      "Attestation source that can be bootstrapped (R010 L04088).",
    feasibility: "Low by 20 Oct.",
    mvpScope: "One milestone, one attestation.",
    demoScenario: "No release without both conditions.",
    evidenceConfidence: "Low.",
    sources: ["R010:L04000 (C03)", "R012:L04794 (C02)"],
    changeStatus: "NEW (restored from IDEA-003/019)",
    changeNote:
      "Audit B B-12, B-32: conjunctive attestation gate restored from R010 C03 and R012 C02; attestation bootstrap dependency blocks this round.",
    experiments: [],
  },
];
