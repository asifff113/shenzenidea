import { b, type CandidatePresentation } from "./types";

// HYBRID-003 — PolicyProof payment conformance.
// Source: finalaudit.md §C (A-12, B-30), §G (IDEA-037), §H, §J, §L, §M, §S.

export const HYBRID_003: CandidatePresentation = {
  id: "HYBRID-003",
  role: b("Research reserve — NO-GO this round", "গবেষণা-রিজার্ভ — এই রাউন্ডে NO-GO"),
  headline: b(
    "Catch the case where moving to another wallet provider silently widens an agent's authority.",
    "অন্য ওয়ালেট প্রোভাইডারে গেলে এজেন্টের কর্তৃত্ব নীরবে বেড়ে যাওয়ার ঘটনা ধরা।"
  ),
  keyPoint: b(
    "A plausible research gap but not a financial task: 10–16 engineer-days, weak task completion and no asset-management role.",
    "সম্ভাব্য গবেষণা-ফাঁক কিন্তু আর্থিক টাস্ক নয়: ১০–১৬ ইঞ্জিনিয়ার-দিন, দুর্বল টাস্ক-সম্পন্নতা ও কোনো সম্পদ-ব্যবস্থাপনা ভূমিকা নেই।"
  ),
  quick: {
    problem: b("Provider migration silently widens agent authority.", "প্রোভাইডার মাইগ্রেশন নীরবে এজেন্টের কর্তৃত্ব বাড়িয়ে দেয়।"),
    affected: b("Wallet developers.", "ওয়ালেট ডেভেলপার।"),
    solution: b(
      "The agent drafts a policy, compiles it for two backends and tests it. One payment per backend is made and an independent oracle compares the outcomes; a divergence is caught.",
      "এজেন্ট একটি নীতি খসড়া করে, দুটি ব্যাকএন্ডের জন্য কম্পাইল করে ও পরীক্ষা করে। প্রতি ব্যাকএন্ডে একটি পেমেন্ট করা হয় এবং স্বাধীন ওরাকল ফলাফল তুলনা করে; ভিন্নতা ধরা পড়ে।"
    ),
    versusNormal: b(
      "It is a conformance-testing tool, not a payer: its value is showing that the same policy behaves the same across backends.",
      "এটি কনফরমেন্স-টেস্টিং টুল, পেয়ার নয়: এর মূল্য হলো একই নীতি সব ব্যাকএন্ডে একই আচরণ করে তা দেখানো।"
    ),
    example: b(
      "One policy, two backends: a divergence between them is caught.",
      "একটি নীতি, দুটি ব্যাকএন্ড: তাদের মধ্যে ভিন্নতা ধরা পড়ে।"
    ),
    why: b(
      "It has the highest novelty centre of the ten (15 of 20) and real research value.",
      "দশটির মধ্যে এর নতুনত্ব-কেন্দ্র সর্বোচ্চ (২০-এর মধ্যে ১৫) এবং বাস্তব গবেষণা-মূল্য আছে।"
    ),
    risk: b(
      "It cannot ship by 20 Oct (10–16 engineer-days), has weak task completion and no asset-management role.",
      "২০ অক্টোবরের মধ্যে জমা দেওয়া যায় না (১০–১৬ ইঞ্জিনিয়ার-দিন), টাস্ক-সম্পন্নতা দুর্বল এবং সম্পদ-ব্যবস্থাপনা ভূমিকা নেই।"
    ),
    decisionMeaning: b(
      "NO-GO (gate: FAIL this round): kept as a research reserve. It was the synthesis's fourth-ranked candidate.",
      "NO-GO (গেট: এই রাউন্ডে FAIL): গবেষণা-রিজার্ভ হিসেবে রাখা। এটি সংশ্লেষণের চতুর্থ-র‍্যাঙ্কড প্রার্থী ছিল।"
    ),
  },
  diagrams: [
    {
      id: "h003-provider",
      title: b("PolicyProof — provider-to-provider redesign", "PolicyProof — প্রোভাইডার-থেকে-প্রোভাইডার পুনর্নকশা"),
      caption: b(
        "The HYBRID-003 record: one policy, two backends, one payment per backend, compared by an independent oracle. Per Audit B (B-30) this is the synthesis's redesign, not the original source concept.",
        "HYBRID-003 রেকর্ড: একটি নীতি, দুটি ব্যাকএন্ড, প্রতি ব্যাকএন্ডে একটি পেমেন্ট, স্বাধীন ওরাকল দিয়ে তুলনা। Audit B (B-30) অনুযায়ী এটি সংশ্লেষণের পুনর্নকশা, আসল উৎস-ধারণা নয়।"
      ),
      status: b("Synthesis redesign — failed the gate; not run", "সংশ্লেষণ পুনর্নকশা — গেটে ব্যর্থ; চালানো হয়নি"),
      nodes: [
        { id: "dev", kind: "owner", label: b("Wallet developer", "ওয়ালেট ডেভেলপার"), sub: b("Owns the policy intent", "নীতির উদ্দেশ্য ঠিক করে"), col: 0, row: 1 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("Draft policy · compile · test", "নীতি খসড়া · কম্পাইল · পরীক্ষা"), col: 1, row: 0 },
        { id: "comp", kind: "policy", label: b("Policy compiler", "নীতি কম্পাইলার"), sub: b("One policy, two targets", "একটি নীতি, দুটি লক্ষ্য"), col: 1, row: 1 },
        { id: "ba", kind: "wallet", label: b("Backend A (provider 1)", "ব্যাকএন্ড A (প্রোভাইডার ১)"), sub: b("One payment", "একটি পেমেন্ট"), col: 2, row: 0 },
        { id: "bb", kind: "wallet", label: b("Backend B (provider 2)", "ব্যাকএন্ড B (প্রোভাইডার ২)"), sub: b("One payment", "একটি পেমেন্ট"), col: 2, row: 2 },
        { id: "oracle", kind: "audit", label: b("Independent oracle", "স্বাধীন ওরাকল"), sub: b("Compares outcomes", "ফলাফল তুলনা করে"), col: 3, row: 1 },
        { id: "res", kind: "audit", label: b("Divergence caught", "ভিন্নতা ধরা পড়ে"), sub: b("Conformance result", "কনফরমেন্স ফলাফল"), col: 4, row: 1 },
      ],
      edges: [
        { from: "dev", to: "comp", kind: "auth", label: b("policy", "নীতি") },
        { from: "agent", to: "comp", kind: "data", label: b("draft", "খসড়া") },
        { from: "comp", to: "ba", kind: "tx", label: b("compile A", "কম্পাইল A") },
        { from: "comp", to: "bb", kind: "tx", label: b("compile B", "কম্পাইল B") },
        { from: "ba", to: "oracle", kind: "data", label: b("outcome A", "ফলাফল A") },
        { from: "bb", to: "oracle", kind: "data", label: b("outcome B", "ফলাফল B") },
        { from: "oracle", to: "res", kind: "data" },
      ],
    },
    {
      id: "h003-chain",
      title: b("Original source concept — chain-to-chain (R010 C21 / IDEA-037)", "আসল উৎস-ধারণা — চেইন-থেকে-চেইন (R010 C21 / IDEA-037)"),
      caption: b(
        "Audit B restored IDEA-037 to R010 C21's chain-to-chain kernel: one policy deployed across EVM chains with conformance tests. Audit A's PolicyProof critique applies to the provider-to-provider redesign, not to this concept (finalaudit.md §G, §H).",
        "Audit B IDEA-037-কে R010 C21-এর চেইন-থেকে-চেইন কর্নেলে ফিরিয়েছে: কনফরমেন্স টেস্টসহ EVM চেইন জুড়ে একটি নীতি। Audit A-এর PolicyProof সমালোচনা প্রোভাইডার-থেকে-প্রোভাইডার পুনর্নকশায় প্রযোজ্য, এই ধারণায় নয় (finalaudit.md §G, §H)।"
      ),
      status: b("Historical source concept — shown for distinction", "ঐতিহাসিক উৎস-ধারণা — পার্থক্য বোঝাতে দেখানো"),
      nodes: [
        { id: "pol", kind: "policy", label: b("One policy", "একটি নীতি"), sub: b("Deployed across EVM chains", "EVM চেইন জুড়ে ডিপ্লয়"), col: 0, row: 1 },
        { id: "c1", kind: "chain", label: b("EVM chain 1", "EVM চেইন ১"), col: 1, row: 0 },
        { id: "c2", kind: "chain", label: b("EVM chain 2", "EVM চেইন ২"), col: 1, row: 2 },
        { id: "conf", kind: "audit", label: b("Conformance tests", "কনফরমেন্স টেস্ট"), sub: b("Same behaviour across chains?", "চেইন জুড়ে একই আচরণ?"), col: 2, row: 1 },
      ],
      edges: [
        { from: "pol", to: "c1", kind: "tx", label: b("deploy", "ডিপ্লয়") },
        { from: "pol", to: "c2", kind: "tx", label: b("deploy", "ডিপ্লয়") },
        { from: "c1", to: "conf", kind: "data" },
        { from: "c2", to: "conf", kind: "data" },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. A developer defines the policy intent", "১. ডেভেলপার নীতির উদ্দেশ্য ঠিক করে"),
      body: b("One policy is the reference to conform to.", "একটি নীতিই কনফর্ম করার রেফারেন্স।"),
      nodes: ["dev", "comp"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent drafts, compiles and tests", "২. এজেন্ট খসড়া, কম্পাইল ও পরীক্ষা করে"),
      body: b("The agent drafts the policy and drives the compile and test steps.", "এজেন্ট নীতি খসড়া করে এবং কম্পাইল ও টেস্ট ধাপ চালায়।"),
      src: "record (agent responsibilities)",
      nodes: ["agent", "comp"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("3. One payment per backend", "৩. প্রতি ব্যাকএন্ডে একটি পেমেন্ট"),
      body: b("The same payment is attempted on each of two backends.", "দুটি ব্যাকএন্ডের প্রতিটিতে একই পেমেন্ট চেষ্টা করা হয়।"),
      nodes: ["ba", "bb"],
      diagram: 0,
    },
    {
      control: "audit",
      title: b("4. An independent oracle compares", "৪. স্বাধীন ওরাকল তুলনা করে"),
      body: b(
        "If the two backends diverge on the same policy, the divergence is caught.",
        "একই নীতিতে দুটি ব্যাকএন্ড ভিন্ন হলে ভিন্নতা ধরা পড়ে।"
      ),
      nodes: ["oracle", "res"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (one policy, two backends; divergence caught). No amounts or provider names are given; nothing has been executed.",
      "নথিভুক্ত MVP (একটি নীতি, দুটি ব্যাকএন্ড; ভিন্নতা ধরা পড়ে) ঘিরে চিত্রণমূলক ওয়াকথ্রু। কোনো অঙ্ক বা প্রোভাইডারের নাম দেওয়া নেই; কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b("A wallet developer migrates an agent from one backend to another.", "একজন ওয়ালেট ডেভেলপার এজেন্টকে এক ব্যাকএন্ড থেকে অন্যটিতে সরান।"),
    objective: b("Make sure the migration does not widen what the agent may do.", "মাইগ্রেশনে এজেন্ট যা করতে পারে তা যেন না বাড়ে নিশ্চিত করা।"),
    reasoning: b("Draft one policy and compile it for both backends.", "একটি নীতি খসড়া করে দুটি ব্যাকএন্ডের জন্য কম্পাইল করা।"),
    decision: b("Run one payment on each backend and compare.", "প্রতি ব্যাকএন্ডে একটি পেমেন্ট চালিয়ে তুলনা।"),
    permission: b("Each backend enforces the policy its own way; the oracle checks they agree.", "প্রতিটি ব্যাকএন্ড নিজের মতো নীতি প্রয়োগ করে; ওরাকল দেখে তারা একমত কি না।"),
    onchain: b("One payment per backend.", "প্রতি ব্যাকএন্ডে একটি পেমেন্ট।"),
    result: b("Agreement means conformance.", "একমত হওয়া মানে কনফরমেন্স।"),
    failure: b("A divergence is caught.", "ভিন্নতা ধরা পড়ে।"),
    evidence: b("Not specified in the provided research materials; not run this round.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই; এই রাউন্ডে চালানো হয়নি।"),
    cases: [
      { key: "normal", basis: "expected", outcome: b("Both backends agree: conformance holds.", "দুটি ব্যাকএন্ড একমত: কনফরমেন্স বজায়।") },
      { key: "failure", basis: "documented", outcome: b("A divergence between backends is caught.", "ব্যাকএন্ডের মধ্যে ভিন্নতা ধরা পড়ে।") },
    ],
  },
  competitors: [
    {
      name: "Clawnch / Clawmes",
      existing: b("Named in the record as the closest competitor.", "রেকর্ডে নিকটতম প্রতিদ্বন্দ্বী হিসেবে উল্লিখিত।"),
      similar: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      adds: b("Cross-provider policy conformance (plausible research gap).", "ক্রস-প্রোভাইডার নীতি-কনফরমেন্স (সম্ভাব্য গবেষণা-ফাঁক)।"),
      solved: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      unverified: b("Cross-provider conformance: not found in sources checked; not run this round.", "ক্রস-প্রোভাইডার কনফরমেন্স: যাচাইকৃত উৎসে পাওয়া যায়নি; এই রাউন্ডে চালানো হয়নি।"),
      src: "finalaudit.md §J",
    },
  ],
  advantages: [
    { text: b("Highest novelty centre among the ten (15 of 20).", "দশটির মধ্যে সর্বোচ্চ নতুনত্ব-কেন্দ্র (২০-এর মধ্যে ১৫)।"), src: "§M" },
    { text: b("Real research value: a plausible gap not found in sources checked.", "বাস্তব গবেষণা-মূল্য: যাচাইকৃত উৎসে না পাওয়া সম্ভাব্য ফাঁক।"), src: "§J, §L" },
  ],
  weaknesses: [
    { text: b("Cannot ship by 20 Oct: 10–16 engineer-days.", "২০ অক্টোবরের মধ্যে জমা অসম্ভব: ১০–১৬ ইঞ্জিনিয়ার-দিন।"), src: "§L, A-12" },
    { text: b("Weak task completion; no asset-management role.", "দুর্বল টাস্ক-সম্পন্নতা; সম্পদ-ব্যবস্থাপনা ভূমিকা নেই।"), src: "§L" },
    { text: b("Provider-to-provider is a synthesis redesign; the source concept was chain-to-chain, an easier and less novel problem.", "প্রোভাইডার-থেকে-প্রোভাইডার সংশ্লেষণের পুনর্নকশা; উৎস-ধারণা ছিল চেইন-থেকে-চেইন, যা সহজ ও কম নতুন সমস্যা।"), src: "§J, B-30" },
    { text: b("Feasibility score is the lowest of the ten (8 of 20).", "বাস্তবায়নযোগ্যতার স্কোর দশটির মধ্যে সর্বনিম্ন (২০-এর মধ্যে ৮)।"), src: "§M" },
  ],
  innovation: [
    { cls: "unverified", text: b("Cross-provider policy conformance.", "ক্রস-প্রোভাইডার নীতি-কনফরমেন্স।"), experiment: "—" },
    { cls: "contradicted", text: b("Audit A's PolicyLayer comparison was removed (its product is an authority playbook for coding agents).", "Audit A-এর PolicyLayer তুলনা সরানো হয়েছে (এর পণ্য কোডিং এজেন্টের জন্য কর্তৃত্ব-প্লেবুক)।") },
  ],
  innovationNeeds: b(
    "No experiment was run this round. A prototype would need two real backends and an independent oracle (10–16 engineer-days).",
    "এই রাউন্ডে কোনো পরীক্ষা চালানো হয়নি। প্রোটোটাইপের জন্য দুটি বাস্তব ব্যাকএন্ড ও স্বাধীন ওরাকল দরকার (১০–১৬ ইঞ্জিনিয়ার-দিন)।"
  ),
  security: {
    aiCan: [{ text: b("Draft, compile and test policies.", "নীতি খসড়া, কম্পাইল ও পরীক্ষা।") }],
    aiCannot: [{ text: b("Judge conformance itself: an independent oracle does.", "নিজে কনফরমেন্স বিচার: স্বাধীন ওরাকল করে।") }],
    authorizes: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    enforcedWhere: b("Independent oracle (security model in the record).", "স্বাধীন ওরাকল (রেকর্ডের নিরাপত্তা মডেল)।"),
    ifManipulated: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    ifFails: b("A divergence is caught and reported.", "ভিন্নতা ধরা পড়ে ও রিপোর্ট হয়।"),
    ownerStop: b("Not applicable: no spending role.", "প্রযোজ্য নয়: কোনো খরচের ভূমিকা নেই।"),
    exposure: b("Not applicable (maximum loss not assessed).", "প্রযোজ্য নয় (সর্বোচ্চ ক্ষতি মূল্যায়িত নয়)।"),
    tested: b("Not run this round.", "এই রাউন্ডে চালানো হয়নি।"),
  },
  roadmap: {
    mvp: [b("One policy", "একটি নীতি"), b("Two backends", "দুটি ব্যাকএন্ড")],
    optional: [],
    deferred: [b("Entire concept: research reserve", "পুরো ধারণা: গবেষণা-রিজার্ভ")],
    dependencies: [b("Two backends", "দুটি ব্যাকএন্ড")],
    blockers: [b("10–16 engineer-days; cannot ship by 20 Oct", "১০–১৬ ইঞ্জিনিয়ার-দিন; ২০ অক্টোবরের মধ্যে জমা অসম্ভব")],
  },
  scores: {
    task: "15–25",
    security: "19–25",
    innovation: "18–25",
    centres: { value: 10, novelty: 15, security: 18, feasibility: 8, demo: 7, deps: 5 },
  },
  relatedIds: ["HYBRID-008", "IDEA-081"],
};
