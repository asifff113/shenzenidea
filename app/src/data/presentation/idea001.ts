import { b, type CandidatePresentation } from "./types";

// IDEA-001 — Bounded invoice payout.
// Source: finalaudit.md §I (via record), §J, §K (T0), §L, §M, §N, §O, §R, §S.

export const IDEA_001: CandidatePresentation = {
  id: "IDEA-001",
  role: b("Stage 1 floor of HYBRID-008", "HYBRID-008-এর Stage 1 ফ্লোর"),
  headline: b(
    "Pay a specific approved invoice exactly once.",
    "একটি নির্দিষ্ট অনুমোদিত ইনভয়েস ঠিক একবার পরিশোধ করুন।"
  ),
  keyPoint: b(
    "Clear and safe but narrow: autonomy is thin because the owner signs each mandate, and it claims nothing beyond exactness and one-use enforcement.",
    "পরিষ্কার ও নিরাপদ কিন্তু সংকীর্ণ: মালিক প্রতিটি ম্যান্ডেটে স্বাক্ষর করে বলে স্বায়ত্তশাসন সীমিত, এবং সুনির্দিষ্টতা ও একবার-ব্যবহার প্রয়োগের বাইরে কিছু দাবি করে না।"
  ),
  quick: {
    problem: b("Wrong or duplicate supplier payment.", "ভুল বা ডুপ্লিকেট সরবরাহকারী পেমেন্ট।"),
    affected: b("DAO finance teams.", "DAO অর্থ-দল।"),
    solution: b(
      "The owner signs an exact mandate for one approved invoice: recipient, amount, token and window. The agent matches an incoming invoice to a separately approved purchase order and redeems the mandate; the transfer can only happen once.",
      "মালিক একটি অনুমোদিত ইনভয়েসের জন্য সুনির্দিষ্ট ম্যান্ডেটে স্বাক্ষর করে: প্রাপক, পরিমাণ, টোকেন ও উইন্ডো। এজেন্ট আসা ইনভয়েসকে আলাদাভাবে অনুমোদিত ক্রয়-আদেশের সাথে মেলায় এবং ম্যান্ডেট রিডিম করে; ট্রান্সফার কেবল একবারই হতে পারে।"
    ),
    versusNormal: b(
      "An ordinary AI wallet signs whatever the model proposes. Here the account only honours a one-use, exact mandate, so a forged obligation or a mutated amount cannot pay.",
      "সাধারণ এআই ওয়ালেট মডেল যা প্রস্তাব করে তাতেই স্বাক্ষর করে। এখানে অ্যাকাউন্ট শুধু একবার-ব্যবহারযোগ্য সুনির্দিষ্ট ম্যান্ডেট মানে, তাই জাল দায় বা বদলানো পরিমাণ পরিশোধ করতে পারে না।"
    ),
    example: b(
      "One supplier and three invoices with one token: the correct payment goes through once; a forged obligation never pays and a mutated amount reverts.",
      "একজন সরবরাহকারী ও তিনটি ইনভয়েস, একটি টোকেন: সঠিক পেমেন্ট একবার যায়; জাল দায় কখনো পরিশোধ করে না এবং বদলানো পরিমাণ রিভার্ট হয়।"
    ),
    why: b(
      "It passes the gate outright, is highly feasible, and its whole uncertainty is a subset of X1, so it is the safest floor to ship.",
      "এটি গেট সরাসরি পাস করে, অত্যন্ত বাস্তবায়নযোগ্য, এবং এর সম্পূর্ণ অনিশ্চয়তা X1-এর উপসেট, তাই এটি জমা দেওয়ার সবচেয়ে নিরাপদ ফ্লোর।"
    ),
    risk: b(
      "Autonomy is thin: the owner signs every mandate, so the agent mostly matches and schedules. No novelty is claimed.",
      "স্বায়ত্তশাসন সীমিত: মালিক প্রতিটি ম্যান্ডেটে স্বাক্ষর করে, তাই এজেন্ট মূলত মেলায় ও শিডিউল করে। কোনো নতুনত্বের দাবি নেই।"
    ),
    decisionMeaning: b(
      "GO (gate: PASS) as the Stage 1 floor. It becomes NO-GO if no route enforces one-use mandates.",
      "Stage 1 ফ্লোর হিসেবে GO (গেট: PASS)। কোনো রুট একবার-ব্যবহার ম্যান্ডেট প্রয়োগ না করতে পারলে NO-GO।"
    ),
  },
  diagrams: [
    {
      id: "i001-mandate",
      title: b("Mandate-bound invoice payout (T0 only)", "ম্যান্ডেট-বাউন্ড ইনভয়েস পেআউট (শুধু T0)"),
      caption: b(
        "Interpretation of finalaudit.md §K tier T0 and §I. Only the one-use obligation mandate exists here; there are no envelopes or reserve.",
        "finalaudit.md §K-এর T0 স্তর ও §I-এর ব্যাখ্যা। এখানে শুধু একবার-ব্যবহার দায়-ম্যান্ডেট আছে; এনভেলপ বা রিজার্ভ নেই।"
      ),
      status: b("Design only — X1, X4 pending", "শুধু ডিজাইন — X1, X4 পেন্ডিং"),
      zones: [
        { label: b("Untrusted: AI and invoice data", "অবিশ্বস্ত: এআই ও ইনভয়েস ডেটা"), col0: 0, col1: 1, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Enforced by the account", "অ্যাকাউন্ট দ্বারা প্রয়োগকৃত"), col0: 2, col1: 3, row0: 0, row1: 1, tone: "enforced" },
      ],
      nodes: [
        { id: "inv", kind: "external", label: b("Supplier invoice", "সরবরাহকারীর ইনভয়েস"), sub: b("Data only", "শুধু ডেটা"), col: 0, row: 0 },
        { id: "po", kind: "owner", label: b("Separately approved purchase order", "আলাদাভাবে অনুমোদিত ক্রয়-আদেশ"), sub: b("Independent beneficiary record", "স্বাধীন সুবিধাভোগী রেকর্ড"), col: 0, row: 1 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("Match invoice to order · schedule · redeem", "ইনভয়েস-আদেশ মেলানো · শিডিউল · রিডিম"), col: 1, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner (offline key)", "মালিক (অফলাইন কী)"), sub: b("Signs one exact mandate per invoice", "প্রতি ইনভয়েসে একটি সুনির্দিষ্ট ম্যান্ডেট"), col: 1, row: 1 },
        { id: "mandate", kind: "policy", label: b("T0 mandate", "T0 ম্যান্ডেট"), sub: b("Exact recipient, amount, token · limitedCalls=1 · window · redeemer", "সুনির্দিষ্ট প্রাপক, পরিমাণ, টোকেন · limitedCalls=1 · উইন্ডো · redeemer"), col: 2, row: 0 },
        { id: "acct", kind: "wallet", label: b("Payout account", "পেআউট অ্যাকাউন্ট"), sub: b("Controlled balance; cumulative cap", "নিয়ন্ত্রিত ব্যালেন্স; ক্রমযোজিত ক্যাপ"), col: 3, row: 0 },
        { id: "chain", kind: "chain", label: b("One-use token transfer", "একবার-ব্যবহার টোকেন ট্রান্সফার"), sub: b("Explorer-verifiable", "এক্সপ্লোরারে যাচাইযোগ্য"), col: 4, row: 0 },
        { id: "rej", kind: "external", label: b("Forged or mutated request", "জাল বা বদলানো অনুরোধ"), sub: b("Reverts; no mandate", "রিভার্ট; ম্যান্ডেট নেই"), col: 3, row: 1 },
      ],
      edges: [
        { from: "inv", to: "agent", kind: "data", label: b("read as data", "ডেটা হিসেবে পড়া") },
        { from: "po", to: "agent", kind: "data", label: b("match to order", "আদেশের সাথে মেলানো") },
        { from: "owner", to: "mandate", kind: "auth", label: b("signs exact mandate", "সুনির্দিষ্ট ম্যান্ডেটে স্বাক্ষর") },
        { from: "agent", to: "mandate", kind: "tx", label: b("redeem once", "একবার রিডিম") },
        { from: "mandate", to: "acct", kind: "funds", label: b("exact amount", "সুনির্দিষ্ট পরিমাণ") },
        { from: "acct", to: "chain", kind: "tx", label: b("settle", "সেটেল") },
        { from: "mandate", to: "rej", kind: "block", label: b("no match: reverts", "মেলে না: রিভার্ট") },
      ],
    },
    {
      id: "i001-contrast",
      title: b("Contrast — ordinary AI wallet (what this design avoids)", "বৈসাদৃশ্য — সাধারণ এআই ওয়ালেট (এই ডিজাইন যা এড়ায়)"),
      caption: b(
        "A contrast view only, not a proposed architecture. In the Freysa case an LLM-only gate lost about $45,000 to one injection (finalaudit.md §J); the gate list requires no unrestricted signing and non-prompt controls (§L).",
        "শুধু বৈসাদৃশ্য-চিত্র, প্রস্তাবিত আর্কিটেকচার নয়। Freysa-র ঘটনায় একটি ইনজেকশনে LLM-only গেট প্রায় $৪৫,০০০ হারিয়েছিল (finalaudit.md §J); গেট-তালিকা অবাধ স্বাক্ষর না থাকা ও প্রম্পট-বহির্ভূত নিয়ন্ত্রণ দাবি করে (§L)।"
      ),
      status: b("Contrast only — not a candidate design", "শুধু বৈসাদৃশ্য — প্রার্থী ডিজাইন নয়"),
      nodes: [
        { id: "inv", kind: "external", label: b("Invoice or injected text", "ইনভয়েস বা ইনজেক্ট করা লেখা"), col: 0, row: 0 },
        { id: "llm", kind: "agent", label: b("LLM decides alone", "LLM একা সিদ্ধান্ত নেয়"), sub: b("The model is the only gate", "মডেলই একমাত্র গেট"), col: 1, row: 0 },
        { id: "key", kind: "signer", label: b("Signing key in the runtime", "রানটাইমে স্বাক্ষর-কী"), sub: b("Can sign anything", "যেকোনো কিছুতে স্বাক্ষর"), col: 2, row: 0 },
        { id: "any", kind: "chain", label: b("Any recipient, any amount", "যেকোনো প্রাপক, যেকোনো পরিমাণ"), col: 3, row: 0 },
      ],
      edges: [
        { from: "inv", to: "llm", kind: "data", label: b("instructions", "নির্দেশ") },
        { from: "llm", to: "key", kind: "auth", label: b("approves", "অনুমোদন") },
        { from: "key", to: "any", kind: "tx", label: b("unbounded", "সীমাহীন") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. Owner approves the order and signs a mandate", "১. মালিক আদেশ অনুমোদন করে ও ম্যান্ডেটে স্বাক্ষর করে"),
      body: b(
        "A purchase order is approved separately; the owner signs an exact, one-use mandate for that invoice's recipient, amount, token and window.",
        "একটি ক্রয়-আদেশ আলাদাভাবে অনুমোদিত হয়; মালিক সেই ইনভয়েসের প্রাপক, পরিমাণ, টোকেন ও উইন্ডোর জন্য সুনির্দিষ্ট, একবার-ব্যবহারযোগ্য ম্যান্ডেটে স্বাক্ষর করে।"
      ),
      src: "finalaudit.md §K (T0)",
      nodes: ["po", "owner", "mandate"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent matches the invoice to the order", "২. এজেন্ট ইনভয়েসকে আদেশের সাথে মেলায়"),
      body: b(
        "The agent reads the invoice as data and matches it to the approved purchase order, then schedules routine matches.",
        "এজেন্ট ইনভয়েস ডেটা হিসেবে পড়ে, অনুমোদিত ক্রয়-আদেশের সাথে মেলায় এবং রুটিন মিলগুলো শিডিউল করে।"
      ),
      nodes: ["inv", "po", "agent"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("3. The mandate admits only the exact payment", "৩. ম্যান্ডেট শুধু সুনির্দিষ্ট পেমেন্ট গ্রহণ করে"),
      body: b(
        "Recipient, amount, token, window and redeemer must match; limitedCalls = 1 makes a second redemption fail, and a cumulative cap bounds the total.",
        "প্রাপক, পরিমাণ, টোকেন, উইন্ডো ও redeemer মিলতে হবে; limitedCalls = 1 দ্বিতীয় রিডেম্পশন ব্যর্থ করে, এবং ক্রমযোজিত ক্যাপ মোট সীমিত করে।"
      ),
      src: "finalaudit.md §K, §R (X1)",
      nodes: ["mandate", "rej"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("4. A one-use transfer settles", "৪. একবার-ব্যবহার ট্রান্সফার সেটেল হয়"),
      body: b(
        "The transfer settles on the testnet and leaves an explorer-verifiable hash.",
        "ট্রান্সফার টেস্টনেটে সেটেল হয় এবং এক্সপ্লোরারে যাচাইযোগ্য হ্যাশ রেখে যায়।"
      ),
      nodes: ["acct", "chain"],
      diagram: 0,
    },
    {
      control: "audit",
      title: b("5. Duplicate and mutated payments are checked", "৫. ডুপ্লিকেট ও বদলানো পেমেন্ট যাচাই হয়"),
      body: b(
        "X1 and X4 test that a wrong amount, a second redemption and a crash never produce a duplicate or a false finalized status.",
        "X1 ও X4 পরীক্ষা করে ভুল পরিমাণ, দ্বিতীয় রিডেম্পশন ও ক্র্যাশ কখনো ডুপ্লিকেট বা মিথ্যা finalized স্ট্যাটাস তৈরি করে না।"
      ),
      src: "finalaudit.md §R",
      nodes: ["mandate", "rej", "chain"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (one supplier, three invoices, one token). No figures are invented; nothing has been executed.",
      "নথিভুক্ত MVP (একজন সরবরাহকারী, তিনটি ইনভয়েস, একটি টোকেন) ঘিরে চিত্রণমূলক ওয়াকথ্রু। কোনো সংখ্যা বানানো হয়নি; কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b(
      "A DAO owes one supplier three approved invoices and holds a controlled payout balance.",
      "একটি DAO একজন সরবরাহকারীর তিনটি অনুমোদিত ইনভয়েস বকেয়া রাখে এবং নিয়ন্ত্রিত পেআউট ব্যালেন্স আছে।"
    ),
    objective: b(
      "Pay each approved invoice exactly once and never pay a forged or modified one.",
      "প্রতিটি অনুমোদিত ইনভয়েস ঠিক একবার পরিশোধ করা এবং জাল বা সংশোধিত কোনোটি কখনো নয়।"
    ),
    reasoning: b(
      "The agent compares each invoice to its separately approved purchase order.",
      "এজেন্ট প্রতিটি ইনভয়েসকে আলাদাভাবে অনুমোদিত ক্রয়-আদেশের সাথে তুলনা করে।"
    ),
    decision: b("Redeem the matching mandate for each genuine invoice.", "প্রতিটি আসল ইনভয়েসের জন্য মিলে যাওয়া ম্যান্ডেট রিডিম করা।"),
    permission: b(
      "The account honours only an exact, unexpired, one-use mandate redeemed by the agent's redeemer key.",
      "অ্যাকাউন্ট কেবল এজেন্টের redeemer কী দিয়ে রিডিম করা সুনির্দিষ্ট, মেয়াদ-না-ফুরানো, একবার-ব্যবহারযোগ্য ম্যান্ডেট মানে।"
    ),
    onchain: b("A one-use token transfer for each genuine invoice.", "প্রতিটি আসল ইনভয়েসের জন্য একটি একবার-ব্যবহার টোকেন ট্রান্সফার।"),
    result: b("The correct payment goes through once.", "সঠিক পেমেন্ট একবার যায়।"),
    failure: b(
      "A forged obligation never pays; a mutated amount reverts.",
      "জাল দায় কখনো পরিশোধ করে না; বদলানো পরিমাণ রিভার্ট হয়।"
    ),
    evidence: b("Hashes for the three payments and revert evidence for the negatives (X1, X4).", "তিনটি পেমেন্টের হ্যাশ ও নেগেটিভের রিভার্ট প্রমাণ (X1, X4)।"),
    cases: [
      { key: "normal", basis: "documented", outcome: b("Correct payment goes through once.", "সঠিক পেমেন্ট একবার যায়।") },
      { key: "malicious", basis: "documented", outcome: b("A forged obligation never pays.", "জাল দায় কখনো পরিশোধ করে না।") },
      { key: "overlimit", basis: "documented", outcome: b("A mutated amount reverts.", "বদলানো পরিমাণ রিভার্ট হয়।") },
      { key: "duplicate", basis: "expected", outcome: b("A second redemption fails: limitedCalls = 1 (X1 adversarial).", "দ্বিতীয় রিডেম্পশন ব্যর্থ হয়: limitedCalls = 1 (X1 অ্যাডভার্সারিয়াল)।") },
      { key: "unauthorized", basis: "expected", outcome: b("A wrong recipient, token or redeemer reverts (X1 negative).", "ভুল প্রাপক, টোকেন বা redeemer রিভার্ট হয় (X1 নেগেটিভ)।") },
    ],
  },
  competitors: [
    {
      name: "Cleared",
      existing: b("Obligation registry; agent sessions on its roadmap.", "দায়-রেজিস্ট্রি; এজেন্ট সেশন রোডম্যাপে।"),
      similar: b("Authenticates the obligation before payment.", "পেমেন্টের আগে দায় প্রমাণীকরণ।"),
      adds: b("Buyer-side authenticity beyond ordinary capped bill pay (novelty hypothesis).", "সাধারণ ক্যাপযুক্ত বিল-পে ছাড়িয়ে ক্রেতা-পক্ষের প্রামাণিকতা (নতুনত্ব অনুমান)।"),
      solved: b("Registry.", "রেজিস্ট্রি।"),
      unverified: b("Whether the buyer-side angle differs in practice.", "ক্রেতা-পক্ষের দিকটি বাস্তবে আলাদা কি না।"),
      url: "https://clearedpay.xyz/cleared-whitepaper.pdf",
      src: "finalaudit.md §J",
    },
    {
      name: "AgentsPay",
      existing: b("Bill-pay agents with offchain caps.", "অফচেইন ক্যাপসহ বিল-পে এজেন্ট।"),
      similar: b("Agent pays supplier bills within a cap.", "ক্যাপের মধ্যে এজেন্ট সরবরাহকারীর বিল পরিশোধ করে।"),
      adds: b("Exact, one-use enforcement onchain instead of offchain caps.", "অফচেইন ক্যাপের পরিবর্তে অনচেইনে সুনির্দিষ্ট, একবার-ব্যবহার প্রয়োগ।"),
      solved: b("Offchain caps.", "অফচেইন ক্যাপ।"),
      unverified: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      url: "https://agentspay.ai/use-cases/bill-pay-agents",
      src: "finalaudit.md §J",
    },
    {
      name: "Request Finance",
      existing: b("Stablecoin approvals-to-payments workflow.", "স্টেবলকয়েন অনুমোদন-থেকে-পেমেন্ট ওয়ার্কফ্লো।"),
      similar: b("Pays approved invoices.", "অনুমোদিত ইনভয়েস পরিশোধ করে।"),
      adds: b("An agent bounded by an exact mandate.", "সুনির্দিষ্ট ম্যান্ডেটে সীমিত এজেন্ট।"),
      solved: b("Human-approved payables workflow (not agentic).", "মানুষ-অনুমোদিত পেয়েবলস ওয়ার্কফ্লো (এজেন্টিক নয়)।"),
      unverified: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      url: "https://partners.circle.com/partner/request-finance",
      src: "finalaudit.md §J, A-20",
    },
    {
      name: "PACE",
      existing: b("Binds approvals to exact bytes.", "অনুমোদনকে সুনির্দিষ্ট বাইটে বাঁধে।"),
      similar: b("Exact-approval binding.", "সুনির্দিষ্ট-অনুমোদন বাঁধন।"),
      adds: b("Nothing beyond exactness is claimed.", "সুনির্দিষ্টতার বাইরে কিছু দাবি করা হয়নি।"),
      solved: b("Exact approval binding.", "সুনির্দিষ্ট অনুমোদন বাঁধন।"),
      unverified: b("Deployed behaviour untested (X1).", "ডিপ্লয়কৃত আচরণ অপরীক্ষিত (X1)।"),
      url: "https://arxiv.org/abs/2608.17220",
      src: "finalaudit.md §J",
    },
  ],
  advantages: [
    { text: b("Passes the gate outright; real problem, onchain path, no unrestricted signing.", "গেট সরাসরি পাস; বাস্তব সমস্যা, অনচেইন পথ, অবাধ স্বাক্ষর নেই।"), src: "§L" },
    { text: b("High feasibility; its uncertainty is a strict subset of X1.", "উচ্চ বাস্তবায়নযোগ্যতা; এর অনিশ্চয়তা X1-এর কঠোর উপসেট।"), src: "§N, §O" },
    { text: b("Maximum loss is the sum of unredeemed mandates, paid to the right vendors.", "সর্বোচ্চ ক্ষতি অ-রিডিম ম্যান্ডেটের যোগফল, যা সঠিক বিক্রেতাদের কাছে যায়।"), src: "§L" },
  ],
  weaknesses: [
    { text: b("Autonomy is thin: the owner signs each mandate.", "স্বায়ত্তশাসন সীমিত: মালিক প্রতিটি ম্যান্ডেটে স্বাক্ষর করে।"), src: "§L, §N" },
    { text: b("No novelty claimed: mechanisms already exist in MetaMask caveats and Biconomy sessions.", "কোনো নতুনত্বের দাবি নেই: কৌশল MetaMask caveat ও Biconomy সেশনে আগে থেকেই আছে।"), src: "§J, A-04" },
    { text: b("Weak asset-management role (payout from a controlled balance).", "দুর্বল সম্পদ-ব্যবস্থাপনা ভূমিকা (নিয়ন্ত্রিত ব্যালেন্স থেকে পেআউট)।"), src: "record" },
  ],
  innovation: [
    { cls: "existing", text: b("One-use, exact, expiring, redeemer-bound payment authority.", "একবার-ব্যবহার, সুনির্দিষ্ট, মেয়াদি, redeemer-বাউন্ড পেমেন্ট কর্তৃত্ব।"), experiment: "X1" },
    { cls: "unverified", text: b("AI improves invoice matching over rules (insufficient evidence).", "নিয়মের চেয়ে এআই ইনভয়েস মেলানো উন্নত করে (অপর্যাপ্ত প্রমাণ)।"), experiment: "X3" },
  ],
  innovationNeeds: b(
    "No innovation claim is made. X3 compares the LLM with a deterministic template parser; the AI claim is sized to that result.",
    "কোনো নতুনত্বের দাবি করা হয়নি। X3 LLM-কে ডিটারমিনিস্টিক টেমপ্লেট পার্সারের সাথে তুলনা করে; এআই-দাবি সেই ফলাফল অনুযায়ী নির্ধারিত হয়।"
  ),
  security: {
    aiCan: [
      { text: b("Match an invoice to an approved order.", "ইনভয়েসকে অনুমোদিত আদেশের সাথে মেলানো।") },
      { text: b("Schedule and redeem a matching mandate.", "মিলে যাওয়া ম্যান্ডেট শিডিউল ও রিডিম।") },
    ],
    aiCannot: [
      { text: b("Pay anything that has no exact owner-signed mandate.", "মালিকের সুনির্দিষ্ট স্বাক্ষরিত ম্যান্ডেট নেই এমন কিছু পরিশোধ।") },
      { text: b("Redeem a mandate twice.", "একটি ম্যান্ডেট দুইবার রিডিম।") },
      { text: b("Change recipient, amount or token.", "প্রাপক, পরিমাণ বা টোকেন বদলানো।") },
    ],
    authorizes: b("The owner, per invoice, with an offline key.", "মালিক, প্রতি ইনভয়েসে, অফলাইন কী দিয়ে।"),
    enforcedWhere: b(
      "By the account: exactExecution, limitedCalls = 1, timestamp window, redeemer, and a cumulative cap.",
      "অ্যাকাউন্ট দ্বারা: exactExecution, limitedCalls = 1, timestamp উইন্ডো, redeemer এবং ক্রমযোজিত ক্যাপ।"
    ),
    ifManipulated: b(
      "A fooled agent can only redeem existing mandates early, to their real vendors.",
      "প্রতারিত এজেন্ট কেবল বিদ্যমান ম্যান্ডেট আগেভাগে, আসল বিক্রেতাদের কাছে রিডিম করতে পারে।"
    ),
    ifFails: b(
      "Non-matching requests revert; crashes must not produce duplicates or false finalized status (X4).",
      "অমিল অনুরোধ রিভার্ট হয়; ক্র্যাশ ডুপ্লিকেট বা মিথ্যা finalized স্ট্যাটাস তৈরি করবে না (X4)।"
    ),
    ownerStop: b("A nonce bump revokes all mandates in one transaction.", "nonce bump এক ট্রান্সজ্যাকশনে সব ম্যান্ডেট বাতিল করে।"),
    exposure: b(
      "The sum of unredeemed mandates, paid to the right vendors.",
      "অ-রিডিম ম্যান্ডেটের যোগফল, যা সঠিক বিক্রেতাদের কাছে যায়।"
    ),
    tested: b("Documented only; X1 and X4 are pending.", "শুধু নথিভুক্ত; X1 ও X4 পেন্ডিং।"),
  },
  roadmap: {
    mvp: [b("One supplier", "একজন সরবরাহকারী"), b("Three invoices", "তিনটি ইনভয়েস"), b("One token", "একটি টোকেন")],
    optional: [b("Delivery-signal variant is split out as IDEA-078 (not part of this MVP)", "ডেলিভারি-সংকেত রূপ IDEA-078 হিসেবে আলাদা (এই MVP-র অংশ নয়)")],
    deferred: [b("Envelopes and reserve (that is HYBRID-008)", "এনভেলপ ও রিজার্ভ (সেটি HYBRID-008)")],
    dependencies: [
      b("Selected wallet or account and chain deployment; token; RPC", "নির্বাচিত ওয়ালেট বা অ্যাকাউন্ট ও চেইন ডিপ্লয়মেন্ট; টোকেন; RPC"),
      b("Independent owner; workflow-specific evidence source", "স্বাধীন মালিক; ওয়ার্কফ্লো-নির্দিষ্ট প্রমাণ-উৎস"),
    ],
    blockers: [b("No route enforcing one-use mandates would make it NO-GO", "কোনো রুট একবার-ব্যবহার ম্যান্ডেট প্রয়োগ না করলে NO-GO")],
    stages: [
      { label: b("Run X1 and X4", "X1 ও X4 চালান"), items: [b("Validates it as HYBRID-008's Stage 1 floor", "HYBRID-008-এর Stage 1 ফ্লোর হিসেবে যাচাই করে")] },
    ],
  },
  scores: {
    task: "27–33",
    security: "22–26",
    innovation: "13–19",
    centres: { value: 11, novelty: 6, security: 22, feasibility: 18, demo: 7, deps: 9 },
  },
  relatedIds: ["HYBRID-008", "IDEA-073", "IDEA-033"],
};
