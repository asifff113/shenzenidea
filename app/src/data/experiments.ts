// Decisive prototype experiments from finalaudit.md section R. None has been
// run; every experiment below is a planned specification, not a measured
// result.

import type { Experiment } from "./types";

export const EXPERIMENTS: Experiment[] = [
  {
    id: "X1",
    title: "Mandate enforcement (route M)",
    serves: ["HYBRID-008", "IDEA-001", "IDEA-073"],
    status: "PENDING — no experiment run",
    due: "2026-10-14 23:59 Dhaka",
    hypothesis:
      "Existing caveats enforce exact, one-use, windowed, redeemer-bound transfers and one-transaction bulk revocation.",
    minimumImplementation:
      "Script: owner smart account, test token, three signed delegations, agent redeemer.",
    toolsAndInfrastructure: "MetaMask Smart Accounts Kit (pinned), viem, faucet token.",
    environment: "Local fork (2 hours maximum), then Ethereum Sepolia or Base Sepolia.",
    positiveTests: "Three exact payments to the right vendors.",
    negativeTests:
      "Wrong amount, recipient or token; before window; after expiry; wrong redeemer.",
    adversarialTests:
      "Second redemption; redemption after nonce bump; batching two delegations; direct transfer from agent key.",
    quantitativeAcceptance:
      "3 of 3 positives; 100% of negative and adversarial cases revert.",
    failureConditions:
      "Any negative succeeds; toolkit not working within 6 working hours.",
    onchainEvidence:
      "Explorer-verified hashes for positives; revert hashes or traces for negatives; signed delegation JSON.",
    exposureLimit: "≤ 100 test units.",
    externalDependencies: "Kit deployment on chosen testnet; faucet.",
    estimatedEffort: "0.5–1 engineer-day.",
    resultImplications:
      "Pass: build Stage 1. Fail: Smart Sessions, then route Z, then minimal executor, then X5.",
  },
  {
    id: "X1b",
    title: "Veto lane (route Z)",
    serves: ["HYBRID-008 (route Z)"],
    status: "PENDING — no experiment run",
    due: "2026-10-15",
    hypothesis:
      "Patched Roles and Delay give a working veto queue with recipient and allowance limits.",
    minimumImplementation:
      "Safe with Roles 2.1.1 and Delay 1.1.1; one queued payment.",
    toolsAndInfrastructure: "Safe, Zodiac Roles and Delay, Safe SDK.",
    environment: "Same testnet; verify mastercopy version first.",
    positiveTests: "Unvetoed payment executes after cooldown.",
    negativeTests: "Vetoed payment never executes; wrong recipient reverts.",
    adversarialTests:
      "ERC-1271 failed-call replay against the patched version; queue skip race.",
    quantitativeAcceptance: "1 of 1 veto holds; 0 bypasses.",
    failureConditions: "Unpatched mastercopy; any bypass.",
    onchainEvidence: "Queue and execution hashes; mastercopy address.",
    exposureLimit: "≤ 100 test units.",
    externalDependencies: "Patched Zodiac on testnet.",
    estimatedEffort: "About 1 engineer-day.",
    resultImplications: "Pass: veto lane available. Fail: escalate by new mandate instead.",
  },
  {
    id: "X2",
    title: "Segregation, envelopes and loss-bound red team",
    serves: ["HYBRID-008", "IDEA-073"],
    status: "PENDING — no experiment run",
    due: "2026-10-17 23:59 Dhaka",
    hypothesis:
      "Reserve funds leave only through obligation mandates; envelope caps hold across resets; no drain with the agent key exceeds the displayed bound.",
    minimumImplementation:
      "Reserve and operating accounts; one-way top-up; two envelopes; exposure calculator.",
    toolsAndInfrastructure: "As X1 plus calculator script.",
    environment: "Testnet with ~10-minute periods.",
    positiveTests: "In-terms envelope bills paid; reserve topped up.",
    negativeTests: "Other recipient; over period cap; reserve-to-operating move.",
    adversarialTests:
      "Red-teamer with the agent key tries every order, batch and period-boundary trick.",
    quantitativeAcceptance:
      "0 non-obligation reserve outflow; maximum drain ≤ displayed bound in every attempt; benign completion 100% of fixtures.",
    failureConditions: "Any leak or excess.",
    onchainEvidence:
      "Balances before and after; hashes; calculator snapshots.",
    exposureLimit: "≤ 100 test units.",
    externalDependencies: "Period-caveat semantics.",
    estimatedEffort: "1–1.5 engineer-days.",
    resultImplications:
      "Pass: loss bound anchors the demo. Fail: drop the bound claim, keep segregation.",
  },
  {
    id: "X3",
    title: "Agent adversarial and AI-necessity test",
    serves: ["HYBRID-008", "IDEA-001"],
    status: "PENDING — no experiment run",
    due: "2026-10-16",
    hypothesis:
      "The LLM matches invoices better than rules, and no model output creates authority.",
    minimumImplementation:
      "40 synthetic invoices (20 benign, one non-English; 20 adversarial); schema-checked LLM pipeline; template parser.",
    toolsAndInfrastructure: "Model API, PDF generator, harness.",
    environment: "Offline scoring; testnet for paid cases.",
    positiveTests: "Benign invoices matched to the right mandate.",
    negativeTests: "Unknown vendor and amount mismatch escalate.",
    adversarialTests:
      "Hidden text, 'wallet changed', memo instructions, text in images, token metadata, poisoned memory, lying summary on the approval screen.",
    quantitativeAcceptance:
      "0 unmandated payments (hard); LLM accuracy ≥ parser with no more false escalations (soft).",
    failureConditions:
      "Any unmandated payment (architecture leak); LLM below parser (reframe AI role).",
    onchainEvidence: "Hashes for paid cases.",
    exposureLimit: "None beyond X1/X2.",
    externalDependencies: "Model quota.",
    estimatedEffort: "About 1 engineer-day.",
    resultImplications: "Decides how strongly to pitch AI.",
  },
  {
    id: "X4",
    title: "Truthful status, retry and revocation",
    serves: ["All shortlisted candidates"],
    status: "PENDING — no experiment run",
    due: "2026-10-17",
    hypothesis:
      "Crashes and timeouts never cause duplicate payment or false 'finalized'; revocation takes effect.",
    minimumImplementation:
      "Payment state machine, journal, two RPCs, fault proxy, same-nonce replacement.",
    toolsAndInfrastructure: "Local chain, testnet, proxy.",
    environment: "Local chain for faults; testnet for inclusion and finality.",
    positiveTests: "Correct final status recorded.",
    negativeTests: "Reverted and expired cases shown as such.",
    adversarialTests:
      "Kill after broadcast five times; fabricated success from one RPC; revocation racing a pending redemption.",
    quantitativeAcceptance:
      "0 duplicates and 0 false finalized states over ≥ 20 fault schedules; 0 post-revocation redemptions.",
    failureConditions:
      "Any duplicate or false status.",
    onchainEvidence: "Receipts; replacement hashes; revoke hash.",
    exposureLimit: "Same units as X1.",
    externalDependencies: "Two RPC providers.",
    estimatedEffort: "0.5–1 engineer-day.",
    resultImplications: "Required for any submission.",
  },
  {
    id: "X5",
    title: "ServiceMeter payment path",
    serves: ["HYBRID-002R", "HYBRID-009"],
    status: "PENDING — no experiment run",
    due: "2026-10-15",
    hypothesis:
      "x402 spending can be bounded and stopped after a failed output check without duplicate payment.",
    minimumImplementation:
      "Two local paid endpoints (honest, faulty); payer option A or B; payee pinning; output predicate; payment identifier.",
    toolsAndInfrastructure: "x402 packages, Base Sepolia test USDC, public testnet facilitator.",
    environment: "Base Sepolia.",
    positiveTests: "Honest task completes.",
    negativeTests: "Wrong output stops spending; price over ceiling refused.",
    adversarialTests:
      "402 changes payee; redirect to new origin; timeout after settlement; replay.",
    quantitativeAcceptance:
      "Spend ≤ hot balance or account limit; 0 charges after first failed check (except a preauthorized alternate); 0 duplicates; post-failure spend below the extensions baseline.",
    failureConditions:
      "Facilitator unusable; duplicate; no gain over baseline.",
    onchainEvidence: "Settlement hashes; content digests.",
    exposureLimit: "≤ 10 test USDC.",
    externalDependencies: "Facilitator uptime; faucet.",
    estimatedEffort: "1–1.5 engineer-days.",
    resultImplications:
      "Pass: fallback or operating-spend module. Fail: drop ServiceMeter.",
  },
  {
    id: "X6",
    title: "Prior-art and contribution desk check",
    serves: ["HYBRID-008", "IDEA-073", "IDEA-001"],
    status: "PENDING — no experiment run",
    due: "2026-10-15",
    hypothesis:
      "HYBRID-008's narrow claim (mandate-only onchain authority plus a published compromise bound) is not already a shipped feature.",
    minimumImplementation:
      "Dated feature table for Coinbase, Crossmint, MetaMask Advanced Permissions, Safe, Request Finance, Cleared, AgentsPay, Ramp and PACE.",
    toolsAndInfrastructure: "Browser, search.",
    environment: "Online search; no financial exposure.",
    positiveTests:
      "Accept a contribution statement of at most three cited sentences.",
    negativeTests: "If the claim already exists, reduce it to integration quality.",
    adversarialTests:
      "Demonstrate baseline capabilities with equivalent extensions enabled; check whether deterministic parsers match the LLM; ask reviewers to identify a missing trust assumption.",
    quantitativeAcceptance:
      "At least one reproducible useful behavior differs from the closest accessible baseline.",
    failureConditions:
      "All novelty is naming, or added complexity yields no useful behavior.",
    onchainEvidence: "Dated feature comparison; sources.",
    exposureLimit: "Zero financial value; no unsolicited external messages.",
    externalDependencies: "Vendor demos; access to S018 preprint.",
    estimatedEffort: "About 3 hours.",
    resultImplications: "Sets the pitch wording.",
  },
];
