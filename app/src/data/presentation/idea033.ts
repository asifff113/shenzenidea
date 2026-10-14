import { b, type CandidatePresentation } from "./types";

// IDEA-033 — Original-payer refund governor.
// Source: finalaudit.md §L, §M, §N (rows), §S; record in topShortlist.

export const IDEA_033: CandidatePresentation = {
  id: "IDEA-033",
  role: b("Conditional pass, NO-GO as primary", "শর্তাধীন পাস, প্রাইমারি হিসেবে NO-GO"),
  headline: b(
    "Stop refund fraud and repeated refunds by refunding only to the original payer, up to what was paid.",
    "শুধু আসল পেয়ারকে, পরিশোধিত অঙ্ক পর্যন্ত রিফান্ড দিয়ে রিফান্ড-প্রতারণা ও পুনরাবৃত্ত রিফান্ড ঠেকানো।"
  ),
  keyPoint: b(
    "Clear invariant, but weak asset management as a standalone concept; payer mapping is open. It may return as one mandate type.",
    "পরিষ্কার নিয়ম, কিন্তু স্বতন্ত্র ধারণা হিসেবে সম্পদ-ব্যবস্থাপনা দুর্বল; পেয়ার ম্যাপিং খোলা। এটি একটি ম্যান্ডেট-ধরন হিসেবে ফিরে আসতে পারে।"
  ),
  quick: {
    problem: b("Refund fraud and repeated refunds.", "রিফান্ড-প্রতারণা ও পুনরাবৃত্ত রিফান্ড।"),
    affected: b("Merchants.", "মার্চেন্ট।"),
    solution: b(
      "The agent reconciles a return against the original order and refunds the remaining amount. The destination must be the original payer, the cumulative refunded amount must not exceed what was paid, and order state is one-use.",
      "এজেন্ট রিটার্নকে আসল অর্ডারের সাথে মেলায় এবং অবশিষ্ট অঙ্ক রিফান্ড করে। গন্তব্য অবশ্যই আসল পেয়ার, ক্রমযোজিত রিফান্ড পরিশোধিত অঙ্কের বেশি হতে পারবে না, এবং অর্ডারের অবস্থা একবার-ব্যবহারযোগ্য।"
    ),
    versusNormal: b(
      "Conventional payment refunds and escrow refunds exist; the claimed difference is enforcing original-payment provenance across tools.",
      "প্রচলিত পেমেন্ট রিফান্ড ও এসক্রো রিফান্ড আছে; দাবিকৃত পার্থক্য হলো টুল জুড়ে মূল-পেমেন্টের উৎস প্রয়োগ।"
    ),
    example: b(
      "One partial refund and one attempted duplicate refund: no destination change and no over-refund.",
      "একটি আংশিক রিফান্ড ও একটি ডুপ্লিকেট রিফান্ডের প্রচেষ্টা: গন্তব্য-পরিবর্তন নেই, অতিরিক্ত রিফান্ড নেই।"
    ),
    why: b(
      "It has a clean, checkable invariant and passes the gate conditionally (Layer B centre 69).",
      "এর একটি পরিষ্কার, যাচাইযোগ্য নিয়ম আছে এবং শর্তসাপেক্ষে গেট পাস করে (Layer B কেন্দ্র ৬৯)।"
    ),
    risk: b(
      "Weak asset management as a standalone concept, and payer mapping is unresolved.",
      "স্বতন্ত্র ধারণা হিসেবে সম্পদ-ব্যবস্থাপনা দুর্বল, এবং পেয়ার ম্যাপিং অমীমাংসিত।"
    ),
    decisionMeaning: b(
      "NO-GO as primary (gate: CONDITIONAL PASS): weak asset management. It may return as one mandate type inside HYBRID-008.",
      "প্রাইমারি হিসেবে NO-GO (গেট: CONDITIONAL PASS): দুর্বল সম্পদ-ব্যবস্থাপনা। এটি HYBRID-008-এর ভেতরে একটি ম্যান্ডেট-ধরন হিসেবে ফিরতে পারে।"
    ),
  },
  diagrams: [
    {
      id: "i033-refund",
      title: b("Refund governor — original-payer invariant", "রিফান্ড গভর্নর — আসল-পেয়ার নিয়ম"),
      caption: b(
        "Interpretation of the IDEA-033 record. The governor checks three invariants before any refund: original-payer destination, cumulative refunded ≤ paid, and one-use order state. Payer mapping is an open dependency.",
        "IDEA-033 রেকর্ডের ব্যাখ্যা। কোনো রিফান্ডের আগে গভর্নর তিনটি নিয়ম যাচাই করে: আসল-পেয়ার গন্তব্য, ক্রমযোজিত রিফান্ড ≤ পরিশোধিত, এবং একবার-ব্যবহার অর্ডার-অবস্থা। পেয়ার ম্যাপিং খোলা নির্ভরতা।"
      ),
      status: b("Design only — no experiment assigned", "শুধু ডিজাইন — কোনো পরীক্ষা নির্ধারিত নয়"),
      zones: [
        { label: b("Untrusted: AI and requests", "অবিশ্বস্ত: এআই ও অনুরোধ"), col0: 0, col1: 1, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Invariants enforced", "প্রয়োগকৃত নিয়ম"), col0: 2, col1: 3, row0: 0, row1: 1, tone: "enforced" },
      ],
      nodes: [
        { id: "ret", kind: "external", label: b("Return / refund request", "রিটার্ন / রিফান্ড অনুরোধ"), sub: b("Data only", "শুধু ডেটা"), col: 0, row: 0 },
        { id: "order", kind: "audit", label: b("Original order and payment record", "আসল অর্ডার ও পেমেন্ট রেকর্ড"), sub: b("Payer mapping (open item)", "পেয়ার ম্যাপিং (খোলা বিষয়)"), col: 0, row: 1 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("Reconcile return · refund the remainder", "রিটার্ন মেলানো · অবশিষ্ট রিফান্ড"), col: 1, row: 0 },
        { id: "owner", kind: "owner", label: b("Merchant / owner", "মার্চেন্ট / মালিক"), sub: b("Sets refund budget and policy", "রিফান্ড বাজেট ও নীতি ঠিক করে"), col: 1, row: 1 },
        { id: "gov", kind: "policy", label: b("Refund governor", "রিফান্ড গভর্নর"), sub: b("Original-payer destination · refunded ≤ paid · one-use order state", "আসল-পেয়ার গন্তব্য · রিফান্ড ≤ পরিশোধিত · একবার-ব্যবহার অর্ডার"), col: 2, row: 0 },
        { id: "bal", kind: "wallet", label: b("Merchant balance", "মার্চেন্ট ব্যালেন্স"), sub: b("Controlled payout balance", "নিয়ন্ত্রিত পেআউট ব্যালেন্স"), col: 3, row: 0 },
        { id: "payer", kind: "chain", label: b("Original payer address", "আসল পেয়ার ঠিকানা"), sub: b("Refund token transfer", "রিফান্ড টোকেন ট্রান্সফার"), col: 4, row: 0 },
        { id: "bad", kind: "external", label: b("Different address or over-refund", "ভিন্ন ঠিকানা বা অতিরিক্ত রিফান্ড"), sub: b("Rejected", "প্রত্যাখ্যাত"), col: 3, row: 1 },
      ],
      edges: [
        { from: "ret", to: "agent", kind: "data", label: b("read as data", "ডেটা হিসেবে পড়া") },
        { from: "order", to: "agent", kind: "data", label: b("reconcile", "মেলানো") },
        { from: "owner", to: "gov", kind: "auth", label: b("policy and budget", "নীতি ও বাজেট") },
        { from: "agent", to: "gov", kind: "tx", label: b("propose refund", "রিফান্ড প্রস্তাব") },
        { from: "gov", to: "bal", kind: "funds", label: b("remaining amount", "অবশিষ্ট অঙ্ক") },
        { from: "bal", to: "payer", kind: "tx", label: b("refund", "রিফান্ড") },
        { from: "gov", to: "bad", kind: "block", label: b("rejects", "প্রত্যাখ্যান") },
      ],
    },
  ],
  steps: [
    {
      control: "external",
      title: b("1. A return or refund request arrives", "১. রিটার্ন বা রিফান্ড অনুরোধ আসে"),
      body: b("The request is data, not authority.", "অনুরোধ ডেটা, কর্তৃত্ব নয়।"),
      nodes: ["ret", "agent"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent reconciles against the original order", "২. এজেন্ট আসল অর্ডারের সাথে মেলায়"),
      body: b(
        "It compares the return with the original order and computes the remaining refundable amount.",
        "এটি রিটার্নকে আসল অর্ডারের সাথে তুলনা করে এবং অবশিষ্ট রিফান্ডযোগ্য অঙ্ক হিসাব করে।"
      ),
      src: "record (agent responsibilities)",
      nodes: ["agent", "order"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("3. The governor checks the invariants", "৩. গভর্নর নিয়ম যাচাই করে"),
      body: b(
        "Destination must be the original payer; cumulative refunded must not exceed paid; the order state is one-use so it cannot be refunded again.",
        "গন্তব্য আসল পেয়ার হতে হবে; ক্রমযোজিত রিফান্ড পরিশোধিতের বেশি হবে না; অর্ডারের অবস্থা একবার-ব্যবহারযোগ্য, তাই আবার রিফান্ড করা যায় না।"
      ),
      src: "record (security model)",
      nodes: ["gov", "bad"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("4. A refund token transfer settles", "৪. রিফান্ড টোকেন ট্রান্সফার সেটেল হয়"),
      body: b(
        "The transfer goes from the merchant's controlled balance to the original payer.",
        "ট্রান্সফার মার্চেন্টের নিয়ন্ত্রিত ব্যালেন্স থেকে আসল পেয়ারের কাছে যায়।"
      ),
      nodes: ["bal", "payer"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (one partial refund and one attempted duplicate refund). No amounts are given; nothing has been executed.",
      "নথিভুক্ত MVP (একটি আংশিক রিফান্ড ও একটি ডুপ্লিকেট রিফান্ডের প্রচেষ্টা) ঘিরে চিত্রণমূলক ওয়াকথ্রু। কোনো অঙ্ক দেওয়া হয়নি; কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b(
      "A merchant received a payment and a customer returns part of the order.",
      "একজন মার্চেন্ট পেমেন্ট পেয়েছে এবং একজন গ্রাহক অর্ডারের একটি অংশ ফেরত দেয়।"
    ),
    objective: b("Refund exactly what is owed, only to the payer, only once.", "যা প্রাপ্য ঠিক তাই, শুধু পেয়ারকে, শুধু একবার রিফান্ড করা।"),
    reasoning: b(
      "The agent reconciles the return against the original order and works out the remaining amount.",
      "এজেন্ট রিটার্নকে আসল অর্ডারের সাথে মেলায় এবং অবশিষ্ট অঙ্ক বের করে।"
    ),
    decision: b("Refund the remaining amount to the original payer.", "আসল পেয়ারকে অবশিষ্ট অঙ্ক রিফান্ড করা।"),
    permission: b(
      "Destination is the original payer; cumulative refunded stays at or below paid; the order's one-use state is consumed.",
      "গন্তব্য আসল পেয়ার; ক্রমযোজিত রিফান্ড পরিশোধিতের সমান বা কম; অর্ডারের একবার-ব্যবহার অবস্থা ব্যবহৃত হয়।"
    ),
    onchain: b("A refund token transfer.", "একটি রিফান্ড টোকেন ট্রান্সফার।"),
    result: b("A partial refund completes with no destination change.", "গন্তব্য-পরিবর্তন ছাড়া আংশিক রিফান্ড সম্পন্ন হয়।"),
    failure: b(
      "A duplicate refund attempt, or a refund to another address, is rejected: no over-refund.",
      "ডুপ্লিকেট রিফান্ডের প্রচেষ্টা বা অন্য ঠিকানায় রিফান্ড প্রত্যাখ্যাত: অতিরিক্ত রিফান্ড নেই।"
    ),
    evidence: b(
      "Not specified in the provided research materials beyond the demo statement; no experiment is assigned.",
      "ডেমো-বিবৃতির বাইরে প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই; কোনো পরীক্ষা নির্ধারিত নেই।"
    ),
    cases: [
      { key: "normal", basis: "documented", outcome: b("One partial refund completes.", "একটি আংশিক রিফান্ড সম্পন্ন হয়।") },
      { key: "duplicate", basis: "documented", outcome: b("An attempted duplicate refund is rejected.", "ডুপ্লিকেট রিফান্ডের প্রচেষ্টা প্রত্যাখ্যাত।") },
      { key: "unauthorized", basis: "documented", outcome: b("No destination change: refund goes only to the original payer.", "গন্তব্য-পরিবর্তন নেই: রিফান্ড শুধু আসল পেয়ারের কাছে।") },
      { key: "overlimit", basis: "documented", outcome: b("No over-refund: cumulative refunded ≤ paid.", "অতিরিক্ত রিফান্ড নেই: ক্রমযোজিত রিফান্ড ≤ পরিশোধিত।") },
    ],
  },
  competitors: [
    {
      name: "Conventional payment refunds",
      existing: b("Standard refund flows in payment systems.", "পেমেন্ট সিস্টেমে প্রমিত রিফান্ড প্রবাহ।"),
      similar: b("Refunds go back to the original payment method.", "রিফান্ড আসল পেমেন্ট-পদ্ধতিতে ফেরত যায়।"),
      adds: b("Cross-tool original-payment provenance enforcement (novelty hypothesis).", "টুল জুড়ে মূল-পেমেন্টের উৎস প্রয়োগ (নতুনত্ব অনুমান)।"),
      solved: b("The refund itself.", "রিফান্ড নিজেই।"),
      unverified: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      src: "record",
    },
    {
      name: "Escrow refunds",
      existing: b("Refund paths in escrow arrangements.", "এসক্রো ব্যবস্থায় রিফান্ড পথ।"),
      similar: b("Funds return to the payer under conditions.", "শর্তসাপেক্ষে অর্থ পেয়ারের কাছে ফেরত যায়।"),
      adds: b("A governed refund without escrow custody.", "এসক্রো হেফাজত ছাড়া নিয়ন্ত্রিত রিফান্ড।"),
      solved: b("Conditional return of funds.", "শর্তাধীন অর্থ ফেরত।"),
      unverified: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      src: "record",
    },
  ],
  advantages: [
    { text: b("Clear invariant that can be checked mechanically.", "যান্ত্রিকভাবে যাচাইযোগ্য পরিষ্কার নিয়ম।"), src: "§L" },
    { text: b("Conditional pass; maximum loss is eligible refunds within the allocation.", "শর্তাধীন পাস; সর্বোচ্চ ক্ষতি বরাদ্দের মধ্যে যোগ্য রিফান্ড।"), src: "§L" },
    { text: b("Can return as one mandate type inside HYBRID-008.", "HYBRID-008-এর ভেতরে একটি ম্যান্ডেট-ধরন হিসেবে ফিরতে পারে।"), src: "§S" },
  ],
  weaknesses: [
    { text: b("Weak asset management as a standalone concept; NO-GO as primary.", "স্বতন্ত্র ধারণা হিসেবে দুর্বল সম্পদ-ব্যবস্থাপনা; প্রাইমারি হিসেবে NO-GO।"), src: "§L, §S" },
    { text: b("Payer mapping unresolved.", "পেয়ার ম্যাপিং অমীমাংসিত।"), src: "§L" },
    { text: b("Documentation-level evidence only; no prototype.", "শুধু ডকুমেন্টেশন-স্তরের প্রমাণ; প্রোটোটাইপ নেই।"), src: "record" },
  ],
  innovation: [
    { cls: "existing", text: b("Refunds to the original payer are conventional.", "আসল পেয়ারকে রিফান্ড প্রচলিত।") },
    { cls: "unverified", text: b("Cross-tool original-payment provenance enforcement.", "টুল জুড়ে মূল-পেমেন্টের উৎস প্রয়োগ।") },
  ],
  innovationNeeds: b(
    "No experiment is assigned. A prototype would have to show no destination change and no over-refund for the documented MVP.",
    "কোনো পরীক্ষা নির্ধারিত নেই। প্রোটোটাইপকে নথিভুক্ত MVP-র জন্য গন্তব্য-পরিবর্তন নেই ও অতিরিক্ত রিফান্ড নেই দেখাতে হবে।"
  ),
  security: {
    aiCan: [{ text: b("Reconcile a return and propose the remaining refund.", "রিটার্ন মেলানো ও অবশিষ্ট রিফান্ড প্রস্তাব।") }],
    aiCannot: [
      { text: b("Change the destination from the original payer.", "গন্তব্য আসল পেয়ার থেকে বদলানো।") },
      { text: b("Refund more than was paid.", "পরিশোধিতের বেশি রিফান্ড।") },
      { text: b("Refund the same order twice.", "একই অর্ডার দুইবার রিফান্ড।") },
    ],
    authorizes: b("The merchant or owner sets policy and refund budget.", "মার্চেন্ট বা মালিক নীতি ও রিফান্ড বাজেট ঠিক করে।"),
    enforcedWhere: b(
      "In the governing rule: original-payer destination, cumulative refunded ≤ paid, one-use order state.",
      "নিয়ন্ত্রক নিয়মে: আসল-পেয়ার গন্তব্য, ক্রমযোজিত রিফান্ড ≤ পরিশোধিত, একবার-ব্যবহার অর্ডার-অবস্থা।"
    ),
    ifManipulated: b(
      "Requests are data; the invariants hold regardless of the agent's proposal.",
      "অনুরোধ ডেটা; এজেন্টের প্রস্তাব যাই হোক নিয়মগুলো বজায় থাকে।"
    ),
    ifFails: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    ownerStop: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    exposure: b("Eligible refunds within the allocation.", "বরাদ্দের মধ্যে যোগ্য রিফান্ড।"),
    tested: b("Documented only; no experiment assigned.", "শুধু নথিভুক্ত; কোনো পরীক্ষা নির্ধারিত নেই।"),
  },
  roadmap: {
    mvp: [b("One partial refund", "একটি আংশিক রিফান্ড"), b("One attempted duplicate refund", "একটি ডুপ্লিকেট রিফান্ডের প্রচেষ্টা")],
    optional: [b("Return as one mandate type inside HYBRID-008", "HYBRID-008-এর ভেতরে একটি ম্যান্ডেট-ধরন হিসেবে ফেরা")],
    deferred: [b("Standalone concept", "স্বতন্ত্র ধারণা")],
    dependencies: [
      b("Selected wallet or account and chain deployment; token; RPC", "নির্বাচিত ওয়ালেট বা অ্যাকাউন্ট ও চেইন ডিপ্লয়মেন্ট; টোকেন; RPC"),
      b("Independent owner; workflow-specific evidence source", "স্বাধীন মালিক; ওয়ার্কফ্লো-নির্দিষ্ট প্রমাণ-উৎস"),
    ],
    blockers: [b("Payer mapping", "পেয়ার ম্যাপিং"), b("Weak asset-management scope", "দুর্বল সম্পদ-ব্যবস্থাপনা পরিসর")],
  },
  scores: {
    task: "22–29",
    security: "20–25",
    innovation: "13–19",
    centres: { value: 10, novelty: 9, security: 20, feasibility: 16, demo: 7, deps: 7 },
  },
  relatedIds: ["IDEA-001", "HYBRID-008"],
};
