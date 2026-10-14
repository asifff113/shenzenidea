import { b, type CandidatePresentation } from "./types";

// IDEA-074 — Forecast-buffer liquidity sweep.
// Source: finalaudit.md §G (split from IDEA-002), §I, §L, §M, §S.

export const IDEA_074: CandidatePresentation = {
  id: "IDEA-074",
  role: b("Conditional stretch concept", "শর্তাধীন স্ট্রেচ ধারণা"),
  headline: b(
    "Keep enough liquid cash for the forecast runway and place only the surplus in an allowlisted vault.",
    "পূর্বাভাসিত রানওয়ের জন্য যথেষ্ট তরল নগদ রাখুন এবং শুধু উদ্বৃত্ত অনুমোদিত ভল্টে রাখুন।"
  ),
  keyPoint: b(
    "Real asset-management role but weak novelty and an untested testnet market dependency; stretch only if Gate 3 is green by 18 Oct noon.",
    "বাস্তব সম্পদ-ব্যবস্থাপনা ভূমিকা কিন্তু দুর্বল নতুনত্ব ও অপরীক্ষিত টেস্টনেট-মার্কেট নির্ভরতা; কেবল ১৮ অক্টোবর দুপুরের মধ্যে Gate 3 সবুজ হলে স্ট্রেচ।"
  ),
  quick: {
    problem: b(
      "Idle cash earns nothing while operating liquidity must cover forecast burn.",
      "নিষ্ক্রিয় নগদ কিছু আয় করে না, অথচ পূর্বাভাসিত খরচ মেটাতে অপারেটিং তারল্য রাখতে হয়।"
    ),
    affected: b("Startup, SME and foundation treasuries.", "স্টার্টআপ, SME ও ফাউন্ডেশন ট্রেজারি।"),
    solution: b(
      "The agent forecasts runway and payroll dates, keeps an operating buffer, sweeps surplus into an allowlisted vault and recalls it just in time before something is due.",
      "এজেন্ট রানওয়ে ও পে-রোলের তারিখ পূর্বাভাস করে, অপারেটিং বাফার রাখে, উদ্বৃত্ত অনুমোদিত ভল্টে সুইপ করে এবং কিছু বকেয়া হওয়ার আগে ঠিক সময়ে ফেরত আনে।"
    ),
    versusNormal: b(
      "Treasury yield automation exists. The only twist the record gives is obligation-aware timing: the buffer is sized from what is due, not a fixed percentage.",
      "ট্রেজারি ইল্ড অটোমেশন আছে। রেকর্ডে একমাত্র নতুন দিক হলো দায়-সচেতন সময়: বাফার নির্ধারিত শতাংশ নয়, যা বকেয়া তার ভিত্তিতে ঠিক হয়।"
    ),
    example: b(
      "One market, one asset, one deposit and one just-in-time withdrawal: the buffer is never breached and the surplus is placed and recalled before a due date.",
      "একটি মার্কেট, একটি অ্যাসেট, একটি ডিপোজিট ও একটি ঠিক-সময়ের উইথড্রয়াল: বাফার কখনো ভাঙে না এবং উদ্বৃত্ত রাখা ও বকেয়ার আগে ফেরত আনা হয়।"
    ),
    why: b(
      "It gives a real asset-management role and a clear allocation story for the demo.",
      "এটি বাস্তব সম্পদ-ব্যবস্থাপনা ভূমিকা ও ডেমোর জন্য পরিষ্কার বণ্টনের গল্প দেয়।"
    ),
    risk: b(
      "Testnet market reliability is unknown, novelty is weak, and any yield is not guaranteed; protocol risk exists even on testnet.",
      "টেস্টনেট মার্কেটের নির্ভরযোগ্যতা অজানা, নতুনত্ব দুর্বল, এবং কোনো ইল্ড নিশ্চিত নয়; টেস্টনেটেও প্রোটোকল-ঝুঁকি থাকে।"
    ),
    decisionMeaning: b(
      "CONDITIONAL GO (stretch; gate: CONDITIONAL PASS stretch): only if Gate 3 is green by 18 Oct noon.",
      "CONDITIONAL GO (স্ট্রেচ; গেট: CONDITIONAL PASS stretch): কেবল ১৮ অক্টোবর দুপুরের মধ্যে Gate 3 সবুজ হলে।"
    ),
  },
  diagrams: [
    {
      id: "i074-sweep",
      title: b("Forecast buffer and surplus sweep", "পূর্বাভাস-বাফার ও উদ্বৃত্ত সুইপ"),
      caption: b(
        "Interpretation of the IDEA-074 record. Liquid funds stay in the operating account up to the forecast buffer; only surplus goes to an allowlisted vault under an invested cap, and withdrawals return only to the treasury. No yield is assumed.",
        "IDEA-074 রেকর্ডের ব্যাখ্যা। তরল ফান্ড পূর্বাভাস-বাফার পর্যন্ত অপারেটিং অ্যাকাউন্টে থাকে; শুধু উদ্বৃত্ত বিনিয়োগ-ক্যাপের অধীনে অনুমোদিত ভল্টে যায়, এবং উইথড্রয়াল শুধু ট্রেজারিতে ফেরে। কোনো ইল্ড ধরে নেওয়া হয়নি।"
      ),
      status: b("Conditional stretch — design only", "শর্তাধীন স্ট্রেচ — শুধু ডিজাইন"),
      zones: [
        { label: b("Liquid: covers forecast runway", "তরল: পূর্বাভাসিত রানওয়ে মেটায়"), col0: 2, col1: 2, row0: 0, row1: 0, tone: "enforced" },
        { label: b("Invested: capped, allowlisted", "বিনিয়োগকৃত: ক্যাপযুক্ত, অনুমোদিত"), col0: 1, col1: 2, row0: 1, row1: 1, tone: "owner" },
      ],
      nodes: [
        { id: "fc", kind: "external", label: b("Forecast inputs", "পূর্বাভাস-ইনপুট"), sub: b("Runway, payroll dates, burn", "রানওয়ে, পে-রোলের তারিখ, খরচ"), col: 0, row: 0 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("Forecast · keep buffer · sweep and recall", "পূর্বাভাস · বাফার রাখা · সুইপ ও ফেরত"), col: 1, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner", "মালিক"), sub: b("Allowlist, invested cap, fixed recipient", "অ্যালাউলিস্ট, বিনিয়োগ-ক্যাপ, নির্দিষ্ট প্রাপক"), col: 0, row: 1 },
        { id: "oper", kind: "wallet", label: b("Operating account", "অপারেটিং অ্যাকাউন্ট"), sub: b("Holds the buffer", "বাফার রাখে"), col: 2, row: 0 },
        { id: "guard", kind: "policy", label: b("Vault and method allowlist", "ভল্ট ও মেথড অ্যালাউলিস্ট"), sub: b("Invested cap · recipient fixed to treasury", "বিনিয়োগ-ক্যাপ · প্রাপক ট্রেজারিতে নির্দিষ্ট"), col: 1, row: 1 },
        { id: "vault", kind: "contract", label: b("Allowlisted vault", "অনুমোদিত ভল্ট"), sub: b("Aave v3 Sepolia market or a self-deployed vault", "Aave v3 Sepolia মার্কেট বা নিজে-ডিপ্লয়কৃত ভল্ট"), col: 2, row: 1 },
        { id: "due", kind: "audit", label: b("Obligation due", "বকেয়া দায়"), sub: b("Recall just in time", "ঠিক সময়ে ফেরত"), col: 3, row: 0 },
      ],
      edges: [
        { from: "fc", to: "agent", kind: "data", label: b("forecast", "পূর্বাভাস") },
        { from: "owner", to: "guard", kind: "auth", label: b("sets limits", "সীমা ঠিক") },
        { from: "agent", to: "guard", kind: "tx", label: b("sweep surplus", "উদ্বৃত্ত সুইপ") },
        { from: "guard", to: "vault", kind: "auth", label: b("allowlist + cap", "অ্যালাউলিস্ট + ক্যাপ") },
        { from: "oper", to: "vault", kind: "funds", label: b("supply surplus", "উদ্বৃত্ত সরবরাহ") },
        { from: "vault", to: "oper", kind: "funds", label: b("withdraw to treasury", "ট্রেজারিতে উইথড্রয়াল") },
        { from: "oper", to: "due", kind: "funds", label: b("pay on time", "সময়মতো পরিশোধ") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. Owner fixes the vault, caps and recipient", "১. মালিক ভল্ট, ক্যাপ ও প্রাপক ঠিক করে"),
      body: b(
        "A vault and method allowlist, an invested cap and a withdrawal recipient fixed to the treasury.",
        "ভল্ট ও মেথড অ্যালাউলিস্ট, বিনিয়োগ-ক্যাপ এবং ট্রেজারিতে নির্দিষ্ট উইথড্রয়াল-প্রাপক।"
      ),
      src: "finalaudit.md §I",
      nodes: ["owner", "guard"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent forecasts runway and payroll dates", "২. এজেন্ট রানওয়ে ও পে-রোলের তারিখ পূর্বাভাস করে"),
      body: b("It estimates how much liquidity must stay available.", "কতটা তারল্য হাতে থাকতে হবে তার অনুমান করে।"),
      nodes: ["fc", "agent"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("3. Agent keeps the buffer and sweeps surplus", "৩. এজেন্ট বাফার রাখে ও উদ্বৃত্ত সুইপ করে"),
      body: b(
        "Only what exceeds the buffer is a candidate for the vault.",
        "বাফার ছাড়ানো অংশটুকুই ভল্টের প্রার্থী।"
      ),
      nodes: ["agent", "oper"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("4. The allowlist and cap bound exposure", "৪. অ্যালাউলিস্ট ও ক্যাপ ঝুঁকি সীমিত করে"),
      body: b(
        "Only allowlisted vault methods work, invested amount stays under the cap, and withdrawals go only to the treasury.",
        "শুধু অনুমোদিত ভল্ট-মেথড চলে, বিনিয়োগকৃত অঙ্ক ক্যাপের নিচে থাকে, এবং উইথড্রয়াল শুধু ট্রেজারিতে যায়।"
      ),
      src: "finalaudit.md §I, §L",
      nodes: ["guard", "vault"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("5. Recall just in time before a due date", "৫. বকেয়ার আগে ঠিক সময়ে ফেরত আনা"),
      body: b(
        "The agent withdraws from the vault so the obligation is paid on time.",
        "এজেন্ট ভল্ট থেকে উইথড্রয়াল করে যাতে দায় সময়মতো পরিশোধ হয়।"
      ),
      nodes: ["vault", "oper", "due"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (one market, one asset, one deposit, one just-in-time withdrawal). No amounts or rates are given; any yield is not guaranteed; nothing has been executed.",
      "নথিভুক্ত MVP (একটি মার্কেট, একটি অ্যাসেট, একটি ডিপোজিট, একটি ঠিক-সময়ের উইথড্রয়াল) ঘিরে চিত্রণমূলক ওয়াকথ্রু। কোনো অঙ্ক বা হার দেওয়া নেই; ইল্ড নিশ্চিত নয়; কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b(
      "A startup treasury holds more cash than its forecast runway needs, with a payroll date approaching.",
      "একটি স্টার্টআপ ট্রেজারির কাছে পূর্বাভাসিত রানওয়ের চেয়ে বেশি নগদ আছে, এবং পে-রোলের তারিখ ঘনিয়ে আসছে।"
    ),
    objective: b(
      "Put surplus to work without ever risking a missed obligation.",
      "কোনো দায় মিস হওয়ার ঝুঁকি ছাড়া উদ্বৃত্তকে কাজে লাগানো।"
    ),
    reasoning: b("Forecast the runway and size the buffer from what is due.", "রানওয়ে পূর্বাভাস করে বকেয়ার ভিত্তিতে বাফারের আকার ঠিক করা।"),
    decision: b("Sweep only the surplus; plan the recall before the due date.", "শুধু উদ্বৃত্ত সুইপ করা; বকেয়ার আগে ফেরত আনার পরিকল্পনা।"),
    permission: b(
      "Only the allowlisted vault and methods, under the invested cap, with withdrawals to the treasury only.",
      "শুধু অনুমোদিত ভল্ট ও মেথড, বিনিয়োগ-ক্যাপের অধীনে, উইথড্রয়াল শুধু ট্রেজারিতে।"
    ),
    onchain: b("A vault supply, then a withdraw.", "একটি ভল্ট সাপ্লাই, তারপর একটি উইথড্র।"),
    result: b("The buffer is never breached and the surplus is recalled before the due date.", "বাফার কখনো ভাঙে না এবং বকেয়ার আগে উদ্বৃত্ত ফেরত আসে।"),
    failure: b(
      "If the testnet market is unreliable, the recall may fail; exposure is limited to the invested cap.",
      "টেস্টনেট মার্কেট অনির্ভরযোগ্য হলে ফেরত আনা ব্যর্থ হতে পারে; ঝুঁকি বিনিয়োগ-ক্যাপে সীমিত।"
    ),
    evidence: b(
      "Hashes for the deposit and the withdrawal, with balances showing the buffer was held (X2 covers it in the record's experiment mapping).",
      "ডিপোজিট ও উইথড্রয়ালের হ্যাশ, বাফার বজায় ছিল দেখানো ব্যালেন্সসহ (রেকর্ডের পরীক্ষা-ম্যাপিংয়ে X2 এটি কভার করে)।"
    ),
    cases: [
      { key: "normal", basis: "documented", outcome: b("Buffer never breached; surplus placed and recalled before a due date.", "বাফার কখনো ভাঙে না; উদ্বৃত্ত রাখা ও বকেয়ার আগে ফেরত।") },
      { key: "unauthorized", basis: "expected", outcome: b("A vault or method outside the allowlist is refused; withdrawals only go to the treasury.", "অ্যালাউলিস্টের বাইরের ভল্ট বা মেথড প্রত্যাখ্যাত; উইথড্রয়াল শুধু ট্রেজারিতে।") },
      { key: "overlimit", basis: "expected", outcome: b("Investing beyond the invested cap is refused.", "বিনিয়োগ-ক্যাপের বেশি বিনিয়োগ প্রত্যাখ্যাত।") },
      { key: "failure", basis: "expected", outcome: b("An unreliable testnet market is the named dependency risk; exposure is the invested cap.", "অনির্ভরযোগ্য টেস্টনেট মার্কেটই নামকৃত নির্ভরতা-ঝুঁকি; ঝুঁকি বিনিয়োগ-ক্যাপ।") },
    ],
  },
  competitors: [
    {
      name: "Treasury yield automation / vault strategies",
      existing: b("Automated treasury yield and vault strategies.", "স্বয়ংক্রিয় ট্রেজারি ইল্ড ও ভল্ট কৌশল।"),
      similar: b("Sweeps idle cash into yield.", "নিষ্ক্রিয় নগদ ইল্ডে সুইপ করে।"),
      adds: b("Obligation-aware timing of the buffer (the only twist).", "বাফারের দায়-সচেতন সময় (একমাত্র নতুন দিক)।"),
      solved: b("Yield sweeping.", "ইল্ড সুইপিং।"),
      unverified: b("Weak novelty; named competitors are not specified in the provided materials.", "দুর্বল নতুনত্ব; নামকৃত প্রতিদ্বন্দ্বী প্রদত্ত উপকরণে নির্দিষ্ট নয়।"),
      src: "record, finalaudit.md §I",
    },
  ],
  advantages: [
    { text: b("Gives a real asset-management role.", "বাস্তব সম্পদ-ব্যবস্থাপনা ভূমিকা দেয়।"), src: "§L" },
    { text: b("Exposure is bounded by an invested cap.", "ঝুঁকি বিনিয়োগ-ক্যাপ দ্বারা সীমিত।"), src: "§L" },
    { text: b("Clear, visual allocation story for a demo.", "ডেমোর জন্য পরিষ্কার, দৃশ্যমান বণ্টন-গল্প।"), src: "record" },
  ],
  weaknesses: [
    { text: b("Weak novelty; overlaps IDEA-013.", "দুর্বল নতুনত্ব; IDEA-013-এর সাথে মিল।"), src: "§G, record" },
    { text: b("Testnet market reliability unknown; low evidence confidence.", "টেস্টনেট মার্কেটের নির্ভরযোগ্যতা অজানা; কম প্রমাণ-আত্মবিশ্বাস।"), src: "§L" },
    { text: b("Protocol risk exists even on testnet; yield is not guaranteed.", "টেস্টনেটেও প্রোটোকল-ঝুঁকি আছে; ইল্ড নিশ্চিত নয়।"), src: "§L" },
    { text: b("Stretch only: not part of the core build.", "শুধু স্ট্রেচ: মূল নির্মাণের অংশ নয়।"), src: "§S" },
  ],
  innovation: [
    { cls: "existing", text: b("Treasury yield automation and vault strategies.", "ট্রেজারি ইল্ড অটোমেশন ও ভল্ট কৌশল।") },
    { cls: "unverified", text: b("Obligation-aware buffer timing is the only twist.", "দায়-সচেতন বাফার-সময় একমাত্র নতুন দিক।"), experiment: "X2" },
  ],
  innovationNeeds: b(
    "A demonstration that the buffer is never breached while surplus is placed and recalled before a due date, on a reliable testnet market.",
    "নির্ভরযোগ্য টেস্টনেট মার্কেটে উদ্বৃত্ত রাখা ও বকেয়ার আগে ফেরত আনার সময় বাফার কখনো ভাঙে না — তার প্রদর্শনী।"
  ),
  security: {
    aiCan: [
      { text: b("Forecast runway and payroll dates.", "রানওয়ে ও পে-রোলের তারিখ পূর্বাভাস।") },
      { text: b("Sweep surplus into the allowlisted vault and recall it.", "উদ্বৃত্ত অনুমোদিত ভল্টে সুইপ ও ফেরত।") },
    ],
    aiCannot: [
      { text: b("Use a vault or method outside the allowlist.", "অ্যালাউলিস্টের বাইরের ভল্ট বা মেথড ব্যবহার।") },
      { text: b("Invest beyond the invested cap.", "বিনিয়োগ-ক্যাপের বেশি বিনিয়োগ।") },
      { text: b("Withdraw to any recipient but the treasury.", "ট্রেজারি ছাড়া অন্য প্রাপকে উইথড্রয়াল।") },
    ],
    authorizes: b("The owner sets the allowlist, the cap and the fixed recipient.", "মালিক অ্যালাউলিস্ট, ক্যাপ ও নির্দিষ্ট প্রাপক ঠিক করে।"),
    enforcedWhere: b("In the account: vault and method allowlist, invested cap, fixed withdrawal recipient.", "অ্যাকাউন্টে: ভল্ট ও মেথড অ্যালাউলিস্ট, বিনিয়োগ-ক্যাপ, নির্দিষ্ট উইথড্রয়াল-প্রাপক।"),
    ifManipulated: b("Exposure is limited to the invested cap.", "ঝুঁকি বিনিয়োগ-ক্যাপে সীমিত।"),
    ifFails: b("A failed recall is limited to the invested cap; reliability is an open dependency.", "ব্যর্থ ফেরত-আনা বিনিয়োগ-ক্যাপে সীমিত; নির্ভরযোগ্যতা খোলা নির্ভরতা।"),
    ownerStop: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    exposure: b("The invested cap.", "বিনিয়োগ-ক্যাপ।"),
    tested: b("Documented only.", "শুধু নথিভুক্ত।"),
  },
  roadmap: {
    mvp: [
      b("One market", "একটি মার্কেট"),
      b("One asset", "একটি অ্যাসেট"),
      b("One deposit and one just-in-time withdrawal", "একটি ডিপোজিট ও একটি ঠিক-সময়ের উইথড্রয়াল"),
    ],
    optional: [b("Surplus placement for HYBRID-008 (optional)", "HYBRID-008-এর জন্য উদ্বৃত্ত বিনিয়োগ (ঐচ্ছিক)")],
    deferred: [b("Anything beyond the stretch gate", "স্ট্রেচ গেটের বাইরের সবকিছু")],
    dependencies: [b("Aave v3 Sepolia test market or a self-deployed vault", "Aave v3 Sepolia টেস্ট মার্কেট বা নিজে-ডিপ্লয়কৃত ভল্ট")],
    blockers: [
      b("Testnet market reliability unknown", "টেস্টনেট মার্কেটের নির্ভরযোগ্যতা অজানা"),
      b("Stretch only if Gate 3 is green by 18 Oct noon", "কেবল ১৮ অক্টোবর দুপুরের মধ্যে Gate 3 সবুজ হলে স্ট্রেচ"),
    ],
    stages: [{ label: b("Gate 3 decision", "Gate 3 সিদ্ধান্ত"), when: b("18 Oct noon", "১৮ অক্টোবর দুপুর"), items: [b("Proceed only if green", "সবুজ হলেই এগোনো")] }],
  },
  scores: {
    task: "24–32",
    security: "18–24",
    innovation: "15–21",
    centres: { value: 11, novelty: 8, security: 17, feasibility: 13, demo: 8, deps: 6 },
  },
  relatedIds: ["HYBRID-008", "IDEA-073"],
};
