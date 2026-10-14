// Security architecture, control matrix and loss formula from
// finalaudit.md section K.

import type { SecurityTier, ThreatControl } from "./types";

export const SECURITY_TIERS: SecurityTier[] = [
  {
    id: "T0",
    name: "Obligations",
    authority: "Pay one approved obligation once",
    grantedBy: "Owner signs each, rendered by the wallet",
    routeM:
      "exactExecution, limitedCalls = 1, timestamp window, redeemer",
    routeZ:
      "Per-obligation allowance with no refill, recipient EqualTo vendor (per R002 C01)",
    agentAutonomy: "Timing inside the window",
    exposure: "Early payment of approved obligations to their real vendors",
  },
  {
    id: "T1",
    name: "Envelopes",
    authority: "Routine payments within a period cap to a recipient set",
    grantedBy: "Owner signs once per envelope",
    routeM:
      "erc20PeriodTransfer, allowedTargets, allowedCalldata, timestamp expiry",
    routeZ:
      "Allowance with refill period and recipient conditions",
    agentAutonomy:
      "Pays in-terms invoices unattended; reallocates within owner totals",
    exposure:
      "Cap times remaining periods until expiry, to allowed recipients only",
  },
  {
    id: "T2",
    name: "Above threshold",
    authority: "Larger or unusual payments",
    grantedBy: "Owner",
    routeM: "Escalate: owner signs a new T0 mandate",
    routeZ:
      "Delay queue: executes after cooldown unless the owner skips it",
    agentAutonomy: "Proposes; may proceed if not vetoed (route Z)",
    exposure: "Queued amount if the owner misses the veto window (route Z only)",
  },
  {
    id: "T3",
    name: "Reserve funding",
    authority: "Move operating funds into the reserve",
    grantedBy: "Owner signs once",
    routeM: "allowedCalldata recipient = reserve account",
    routeZ: "Roles recipient condition",
    agentAutonomy: "Decides when and how much",
    exposure: "None (funds stay in the treasury)",
  },
  {
    id: "T4",
    name: "Administration",
    authority: "Grants, revocation, withdrawals, upgrades",
    grantedBy: "Owner key, offline",
    routeM:
      "Owner only; nonce bump revokes all; disableDelegation revokes one",
    routeZ:
      "Owner only; skip queue by nonce; revoke role",
    agentAutonomy: "None",
    exposure: "Not reachable from the agent key",
  },
];

// Loss formula (verbatim from finalaudit.md section K).
// L_max = sum_{i in T0, unredeemed} a_i
//       + sum_{e in T1} c_e * p_e
//       + Q_T2
//       + G
export const LOSS_FORMULA = {
  variables: [
    { symbol: "a", meaning: "obligation amount", scope: "i in T0, unredeemed" },
    { symbol: "c", meaning: "envelope's period cap", scope: "e in T1" },
    { symbol: "p", meaning: "periods left until that envelope expires (current counted as remaining allowance)", scope: "e in T1" },
    { symbol: "Q", meaning: "unvetoed queued amount", scope: "T2 (route Z only)" },
    { symbol: "G", meaning: "gas tank", scope: "always" },
  ],
  assumptions: [
    "A1. Owner key safe.",
    "A2. Vendor records genuine.",
    "A3. Framework contracts and token behave as documented.",
    "A4. Correct chain.",
    "A5. No other enabled authority.",
  ],
  caveats: [
    "If any assumption fails, every token in both accounts is exposed.",
    "This restates R003 C19 and R014 L05371 for this design.",
    "It is a design ceiling, not an audited guarantee.",
  ],
};

export const CONTROL_MATRIX: ThreatControl[] = [
  {
    controlArea: "Protected signing and keys",
    hybrid008:
      "Agent key holds gas only, can only redeem; owner key never in runtime, prompts or logs",
    hybrid002R:
      "Option A: smart-account payer via EIP-1271. Option B: hot key holding only the job budget",
  },
  {
    controlArea: "Independent authorization",
    hybrid008:
      "Owner-signed mandates; approval screen renders typed data, AI summary shown separately as untrusted",
    hybrid002R: "Owner-set origins, payees and job budget",
  },
  {
    controlArea: "Spending and recipient limits",
    hybrid008: "Tiers T0–T3 above",
    hybrid002R:
      "Hot balance, period-capped top-up, payee pinned per origin, price ceiling",
  },
  {
    controlArea: "Smart-contract risk",
    hybrid008:
      "Existing contracts only; verify release tag and audit scope; route Z requires patched Zodiac and must avoid the post-mortem's fallback-handler condition",
    hybrid002R: "Facilitator and token code; no custom contract",
  },
  {
    controlArea: "Prompt injection",
    hybrid008:
      "Invoices, emails, API bodies and token metadata are data; no agent path creates authority",
    hybrid002R: "402 bodies are data; redirects to new origins refused",
  },
  {
    controlArea: "Simulation and verification",
    hybrid008:
      "Simulation advisory only; receipts confirmed on two RPCs; proposed, submitted, included, finalized states",
    hybrid002R:
      "Settlement receipt checked independently of the seller's signed receipt",
  },
  {
    controlArea: "Duplicates and replay",
    hybrid008:
      "limitedCalls = 1 on T0; journal plus invoice identifiers on T1; fee-bounded same-nonce replacement for stuck transactions (R013 C15)",
    hybrid002R: "One outstanding authorization; x402 payment identifier",
  },
  {
    controlArea: "Recovery and emergency",
    hybrid008:
      "One-transaction nonce revoke; executor self-halt on invariant breach (IDEA-075); revoke, verify, reconcile, rotate",
    hybrid002R: "Stop top-ups; unexpired authorizations counted until expiry",
  },
  {
    controlArea: "Auditability",
    hybrid008:
      "Each hash linked to its signed mandate hash and invoice digest; optional attested decision records (IDEA-031/E) if the attestation service is on the chosen testnet",
    hybrid002R: "Offers, receipts, settlement hashes, cost ledger",
  },
  {
    controlArea: "Compliance",
    hybrid008:
      "Segregation of funds and of duties (requester, approver, executor); payee screening as a control; opaque identifiers onchain; no legal-compliance claim",
    hybrid002R: "Same, where applicable",
  },
  {
    controlArea: "Maximum loss",
    hybrid008: "L_max formula in LOSS_FORMULA",
    hybrid002R: "Hot balance + remaining top-up allowance + unexpired authorizations + fees",
  },
];
