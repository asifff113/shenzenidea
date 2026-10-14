// Supporting components and restored mechanisms that strengthen the leading
// candidates. Sourced from finalaudit.md sections F, I, S, and the
// master_inventory.csv.

import type { SupportingComponent } from "./types";

export const SUPPORTING_COMPONENTS: SupportingComponent[] = [
  {
    id: "IDEA-026",
    name: "Conditional loss certificate",
    purpose:
      "Compute maximum reachable outflow from current grants and state, shown live before activation.",
    gate: "PASS (component)",
    sources: ["R003:L01301 (C19)", "R004:L01965 (C16)", "R014:L05371 (supporting conditional loss statement)"],
    changeStatus: "ELEVATED",
    changeNote:
      "Core control of HYBRID-008; sources R003 C19 and R014 L05371 credited. Audit A N2.",
    serves: ["HYBRID-008", "IDEA-001", "IDEA-073"],
  },
  {
    id: "IDEA-075",
    name: "Self-limiting incident agent",
    purpose:
      "Agent detects its own anomalies and revokes its own authority. Implemented in deterministic executor code (not the model).",
    gate: "PASS (component)",
    sources: ["R010:L04005 (C08)"],
    changeStatus: "NEW (split from IDEA-009)",
    changeNote:
      "Audit B B-17: R010 C08 self-revocation restored; IDEA-009 (independent watcher) labelled a synthesis redesign.",
    serves: ["HYBRID-008", "IDEA-001", "IDEA-073"],
  },
  {
    id: "IDEA-076",
    name: "Behavioural-drift self-halt",
    purpose:
      "Agent compares its actions with the mandate and halts on drift. Same caveat as IDEA-075.",
    gate: "PASS (component)",
    sources: ["R012:L04803 (C11)"],
    changeStatus: "NEW (split from IDEA-049)",
    changeNote: "Audit B B-18: R012 C11 behavioural drift restored; IDEA-049 labelled a synthesis redesign.",
    serves: ["HYBRID-008", "IDEA-001", "IDEA-073"],
  },
  {
    id: "IDEA-080",
    name: "Delayed human-veto payment lane",
    purpose:
      "Above-threshold payments enter a cooldown queue; the owner may veto during cooldown. Route Z for HYBRID-008.",
    gate: "CONDITIONAL PASS (component)",
    sources: ["R002:L00640 (C01)"],
    changeStatus: "NEW (restored from IDEA-001)",
    changeNote:
      "Audit B B-10: R002 C01 time-delayed slow lane restored. Requires patched Zodiac Roles 2.1.1 and Delay 1.1.1.",
    serves: ["HYBRID-008 (route Z)", "IDEA-001"],
  },
  {
    id: "IDEA-084",
    name: "Bounded-loss red-team arena",
    purpose:
      "Public attackers try to inject the agent; prize equals the onchain cap. Live evidence that fooling the model does not move more than the cap.",
    gate: "PASS (evaluation layer)",
    sources: ["R002:L00660 (C21)"],
    changeStatus: "NEW (restored from IDEA-032)",
    changeNote:
      "Audit B B-27: R002 C21 public red-team arena restored. Inverse of Freysa (Nov 2024; LLM-only gate lost about $45,000).",
    serves: ["HYBRID-008"],
  },
  {
    id: "IDEA-086",
    name: "Temporal-invariant conditional payments",
    purpose:
      "Recurring payments should stop if treasury falls below a floor; onchain module checks invariant before each scheduled payment.",
    gate: "CONDITIONAL PASS (option)",
    sources: ["R006:L03220 (C20)"],
    changeStatus: "NEW (restored from IDEA-025/011)",
    changeNote:
      "Audit B B-26: R006 C20 temporal invariants restored. Option for HYBRID-008; needs new code if segregation is rejected.",
    serves: ["HYBRID-008 (option)"],
  },
  {
    id: "IDEA-082",
    name: "Dual-model co-signing gate",
    purpose:
      "Second adversarial model co-signs; AST validation; freeze on divergence. Optional filter, not a security boundary.",
    gate: "CONDITIONAL PASS (optional filter)",
    sources: ["R006:L03220 (C11)"],
    changeStatus: "NEW (restored from IDEA-034/048)",
    changeNote:
      "Audit B B-13: R006 C11 dual-model co-signing restored. Both models can share blind spots, so this is not a security boundary.",
    serves: ["HYBRID-008 (optional)"],
  },
  {
    id: "IDEA-085",
    name: "Onchain AP2 mandate verifier",
    purpose:
      "Mandate verified by a contract before payment. Deferrable; spec version risk.",
    gate: "CONDITIONAL PASS (research)",
    sources: ["R010:L04015 (C18)"],
    changeStatus: "NEW (restored from IDEA-064)",
    changeNote: "Audit B B-16: R010 C18 AP2 mandate restored; deferred due to spec-version risk.",
    serves: [],
  },
  {
    id: "IDEA-031/E",
    name: "Attested policy decision records (variant)",
    purpose:
      "Each agent action commits an attested policy decision record alongside the execution hash.",
    gate: "CONDITIONAL PASS (component)",
    sources: ["R007:L03240"],
    changeStatus: "VARIANT",
    changeNote:
      "Audit B B-28: R007 attested policy decision records. Attestation-service testnet deployment unconfirmed.",
    serves: ["HYBRID-008"],
  },
  {
    id: "IDEA-027/R",
    name: "Fee-bounded replace-by-fee and paymaster top-up",
    purpose:
      "Replace stuck transactions with bounded fees; paymaster tops up gas within a fixed cap.",
    gate: "CONDITIONAL PASS (component)",
    sources: ["R013:L05140 (C15)", "R002:L00661 (C22)"],
    changeStatus: "VARIANT",
    changeNote:
      "Audit B B-33: R013 C15 replace-by-fee and paymaster top-up; R002 C22 gas top-ups. Fee-bounded replacement added to X4.",
    serves: ["HYBRID-008", "IDEA-001"],
  },
];
