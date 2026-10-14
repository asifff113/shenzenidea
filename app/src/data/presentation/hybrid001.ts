import { b, type CandidatePresentation } from "./types";

// HYBRID-001 — ObligationLock (as specified, custom executor).
// Source: finalaudit.md §C (A-04, A-05, A-07, A-15, A-16, A-26), §E, §L, §M, §P, §S.
// The concept is presented as the synthesis specified it; it is NOT replaced by HYBRID-008.

export const HYBRID_001: CandidatePresentation = {
  id: "HYBRID-001",
  role: b("Superseded by HYBRID-008 — NO-GO this round", "HYBRID-008 দ্বারা প্রতিস্থাপিত — এই রাউন্ডে NO-GO"),
  headline: b(
    "Stop fabricated invoices and starved committed payments with a custom executor that consumes authenticated obligations.",
    "প্রমাণীকৃত দায় খরচ করা একটি কাস্টম এক্সিকিউটর দিয়ে বানানো ইনভয়েস ও অনাহারে থাকা প্রতিশ্রুত পেমেন্ট ঠেকানো।"
  ),
  keyPoint: b(
    "Concept sound, but it puts new unaudited code in charge of treasury authority; scope is 8–12 engineer-days plus validation. It failed the gate this round.",
    "ধারণা সঠিক, কিন্তু ট্রেজারি-কর্তৃত্বে নতুন অনিরীক্ষিত কোড বসায়; পরিসর ৮–১২ ইঞ্জিনিয়ার-দিন ও যাচাই। এই রাউন্ডে গেটে ব্যর্থ।"
  ),
  quick: {
    problem: b("Fabricated invoices and starved committed payments.", "বানানো ইনভয়েস ও অনাহারে থাকা প্রতিশ্রুত পেমেন্ট।"),
    affected: b("Stablecoin-native treasury.", "স্টেবলকয়েন-নির্ভর ট্রেজারি।"),
    solution: b(
      "The agent extracts, reconciles, schedules and proposes. A new custom executor contract consumes an authenticated obligation, keeps reserve accounting and performs the transfer.",
      "এজেন্ট নিষ্কাশন, সমন্বয়, শিডিউল ও প্রস্তাব করে। একটি নতুন কাস্টম এক্সিকিউটর কন্ট্রাক্ট প্রমাণীকৃত দায় খরচ করে, রিজার্ভ হিসাব রাখে এবং ট্রান্সফার করে।"
    ),
    versusNormal: b(
      "Instead of relying on existing audited contracts, the enforcement lives in one new contract. That is both its appeal and the reason it failed the gate.",
      "বিদ্যমান অডিটেড কন্ট্রাক্টের ওপর নির্ভর না করে প্রয়োগ একটি নতুন কন্ট্রাক্টে থাকে। এটিই এর আকর্ষণ এবং গেটে ব্যর্থ হওয়ার কারণ।"
    ),
    example: b(
      "As specified in the synthesis. The documented demo is “as synthesis”; no separate step-by-step demo is given in the provided materials.",
      "সংশ্লেষণে যেভাবে নির্দিষ্ট করা। নথিভুক্ত ডেমো “as synthesis”; প্রদত্ত উপকরণে আলাদা ধাপে-ধাপে ডেমো দেওয়া নেই।"
    ),
    why: b(
      "It was the synthesis's former favourite (rank 1), and its concept survives inside HYBRID-008.",
      "এটি সংশ্লেষণের পূর্বের পছন্দ (র‍্যাঙ্ক ১) ছিল, এবং এর ধারণা HYBRID-008-এর ভেতরে টিকে আছে।"
    ),
    risk: b(
      "Unaudited trusted code holding treasury authority; its own review bar cannot be met by 20 Oct and maximum loss is undefined if the executor is buggy.",
      "অনিরীক্ষিত বিশ্বস্ত কোড ট্রেজারি-কর্তৃত্ব ধরে আছে; এর নিজস্ব রিভিউ-মান ২০ অক্টোবরের মধ্যে পূরণ করা যায় না এবং এক্সিকিউটর ত্রুটিপূর্ণ হলে সর্বোচ্চ ক্ষতি অনির্ধারিত।"
    ),
    decisionMeaning: b(
      "NO-GO (gate: FAIL this round): security gates override scores. The upper score range (76) does not rescue it.",
      "NO-GO (গেট: এই রাউন্ডে FAIL): নিরাপত্তা-গেট স্কোরকে অগ্রাহ্য করে। ঊর্ধ্ব স্কোর-রেঞ্জ (৭৬) একে বাঁচায় না।"
    ),
  },
  diagrams: [
    {
      id: "h001-executor",
      title: b("ObligationLock — custom executor (as specified)", "ObligationLock — কাস্টম এক্সিকিউটর (নির্দিষ্টকৃত অনুযায়ী)"),
      caption: b(
        "Interpretation of the HYBRID-001 record and finalaudit.md §L. The trust boundary is a new, unaudited contract that both authenticates the obligation and holds treasury authority. This is the architecture that failed the gate; it is not replaced by HYBRID-008's here.",
        "HYBRID-001 রেকর্ড ও finalaudit.md §L-এর ব্যাখ্যা। বিশ্বাস-সীমানা হলো একটি নতুন, অনিরীক্ষিত কন্ট্রাক্ট, যেটি দায় প্রমাণীকরণ করে এবং ট্রেজারি-কর্তৃত্ব ধরে। এটিই গেটে ব্যর্থ আর্কিটেকচার; এখানে HYBRID-008-এর আর্কিটেকচার দিয়ে প্রতিস্থাপিত নয়।"
      ),
      status: b("Failed the gate this round — shown for understanding only", "এই রাউন্ডে গেটে ব্যর্থ — শুধু বোঝার জন্য দেখানো"),
      zones: [
        { label: b("Untrusted: AI and documents", "অবিশ্বস্ত: এআই ও নথি"), col0: 0, col1: 1, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("New unaudited trusted code", "নতুন অনিরীক্ষিত বিশ্বস্ত কোড"), col0: 2, col1: 2, row0: 0, row1: 1, tone: "owner" },
      ],
      nodes: [
        { id: "inv", kind: "external", label: b("Invoices and obligations", "ইনভয়েস ও দায়"), sub: b("Data", "ডেটা"), col: 0, row: 0 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("Extract · reconcile · schedule · propose", "নিষ্কাশন · সমন্বয় · শিডিউল · প্রস্তাব"), col: 1, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner", "মালিক"), sub: b("Authenticates obligations", "দায় প্রমাণীকরণ করে"), col: 0, row: 1 },
        { id: "exec", kind: "contract", label: b("Custom executor", "কাস্টম এক্সিকিউটর"), sub: b("Consumes an obligation · enforces reserve · transfers", "দায় খরচ করে · রিজার্ভ প্রয়োগ · ট্রান্সফার"), col: 2, row: 0 },
        { id: "reserve", kind: "wallet", label: b("Treasury with reserve accounting", "রিজার্ভ হিসাবসহ ট্রেজারি"), sub: b("Authority held by the executor", "কর্তৃত্ব এক্সিকিউটরের হাতে"), col: 3, row: 0 },
        { id: "chain", kind: "chain", label: b("Public EVM testnet", "পাবলিক EVM টেস্টনেট"), col: 4, row: 0 },
        { id: "bug", kind: "audit", label: b("Review bar", "রিভিউ-মান"), sub: b("Unaudited; cannot be met by 20 Oct; loss undefined if buggy", "অনিরীক্ষিত; ২০ অক্টোবরের মধ্যে পূরণ অসম্ভব; ত্রুটিপূর্ণ হলে ক্ষতি অনির্ধারিত"), col: 2, row: 1 },
      ],
      edges: [
        { from: "inv", to: "agent", kind: "data", label: b("read as data", "ডেটা হিসেবে পড়া") },
        { from: "agent", to: "exec", kind: "tx", label: b("propose payment", "পেমেন্ট প্রস্তাব") },
        { from: "owner", to: "exec", kind: "auth", label: b("authenticated obligation", "প্রমাণীকৃত দায়") },
        { from: "exec", to: "reserve", kind: "auth", label: b("treasury authority", "ট্রেজারি কর্তৃত্ব") },
        { from: "reserve", to: "chain", kind: "tx", label: b("transfer", "ট্রান্সফার") },
        { from: "exec", to: "bug", kind: "data", label: b("security-review gate", "নিরাপত্তা-রিভিউ গেট") },
      ],
    },
  ],
  steps: [
    {
      control: "ai",
      title: b("1. Agent extracts, reconciles and proposes", "১. এজেন্ট নিষ্কাশন, সমন্বয় ও প্রস্তাব করে"),
      body: b(
        "It reads invoices, reconciles them against obligations, schedules and proposes payments.",
        "এটি ইনভয়েস পড়ে, দায়ের সাথে সমন্বয় করে, পেমেন্ট শিডিউল ও প্রস্তাব করে।"
      ),
      src: "record (agent responsibilities)",
      nodes: ["inv", "agent"],
      diagram: 0,
    },
    {
      control: "owner",
      title: b("2. Obligations are authenticated", "২. দায় প্রমাণীকৃত হয়"),
      body: b(
        "An authenticated obligation is the unit the executor consumes.",
        "প্রমাণীকৃত দায়ই এক্সিকিউটর যে ইউনিট খরচ করে।"
      ),
      nodes: ["owner", "exec"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("3. The custom executor enforces", "৩. কাস্টম এক্সিকিউটর প্রয়োগ করে"),
      body: b(
        "A new contract enforces the obligation and the reserve and performs the transfer. All enforcement depends on this one piece of unaudited code.",
        "একটি নতুন কন্ট্রাক্ট দায় ও রিজার্ভ প্রয়োগ করে এবং ট্রান্সফার সম্পাদন করে। সব প্রয়োগ এই একটিমাত্র অনিরীক্ষিত কোডের ওপর নির্ভরশীল।"
      ),
      src: "finalaudit.md §L, A-05",
      nodes: ["exec", "reserve", "bug"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("4. Transfer settles", "৪. ট্রান্সফার সেটেল হয়"),
      body: b("The executor's transfer settles on the testnet.", "এক্সিকিউটরের ট্রান্সফার টেস্টনেটে সেটেল হয়।"),
      nodes: ["reserve", "chain"],
      diagram: 0,
    },
    {
      control: "audit",
      title: b("5. Why it failed the gate", "৫. কেন গেটে ব্যর্থ"),
      body: b(
        "Unaudited trusted code holds treasury authority; 8–12 engineer-days plus validation; its own review bar cannot be met by 20 Oct; the maximum loss is undefined if the executor is buggy.",
        "অনিরীক্ষিত বিশ্বস্ত কোড ট্রেজারি-কর্তৃত্ব ধরে; ৮–১২ ইঞ্জিনিয়ার-দিন ও যাচাই; এর নিজস্ব রিভিউ-মান ২০ অক্টোবরের মধ্যে পূরণ করা যায় না; এক্সিকিউটর ত্রুটিপূর্ণ হলে সর্বোচ্চ ক্ষতি অনির্ধারিত।"
      ),
      src: "finalaudit.md §L, A-26",
      nodes: ["exec", "bug"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "documented",
    note: b(
      "The provided materials give this candidate's demo only as “as synthesis”. No step-by-step scenario or amounts are provided, so none are invented; the phases below restate what the record documents.",
      "প্রদত্ত উপকরণে এই প্রার্থীর ডেমো কেবল “as synthesis” হিসেবে দেওয়া। কোনো ধাপে-ধাপে দৃশ্যকল্প বা অঙ্ক দেওয়া নেই, তাই বানানো হয়নি; নিচের ধাপগুলো রেকর্ডে যা আছে তাই পুনরায় বলছে।"
    ),
    situation: b(
      "A stablecoin-native treasury faces fabricated invoices and committed payments that can be starved.",
      "স্টেবলকয়েন-নির্ভর একটি ট্রেজারি বানানো ইনভয়েস ও অনাহারে-পড়া প্রতিশ্রুত পেমেন্টের মুখোমুখি।"
    ),
    objective: b(
      "Pay authenticated obligations and keep committed cash from being spent elsewhere.",
      "প্রমাণীকৃত দায় পরিশোধ এবং প্রতিশ্রুত নগদ অন্যত্র খরচ হওয়া ঠেকানো।"
    ),
    reasoning: b("Extract, reconcile, schedule, propose.", "নিষ্কাশন, সমন্বয়, শিডিউল, প্রস্তাব।"),
    decision: b("Propose payment of an authenticated obligation.", "প্রমাণীকৃত দায় পরিশোধের প্রস্তাব।"),
    permission: b("The new executor enforces the obligation and the reserve.", "নতুন এক্সিকিউটর দায় ও রিজার্ভ প্রয়োগ করে।"),
    onchain: b("The custom executor consumes the obligation and transfers.", "কাস্টম এক্সিকিউটর দায় খরচ করে ও ট্রান্সফার করে।"),
    result: b("As synthesis.", "সংশ্লেষণ অনুযায়ী।"),
    failure: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    evidence: b("No experiment is assigned; the gate failed before validation.", "কোনো পরীক্ষা নির্ধারিত নেই; যাচাইয়ের আগেই গেট ব্যর্থ।"),
    cases: [
      { key: "failure", basis: "documented", outcome: b("If the executor is buggy, the maximum loss is undefined.", "এক্সিকিউটর ত্রুটিপূর্ণ হলে সর্বোচ্চ ক্ষতি অনির্ধারিত।") },
    ],
  },
  competitors: [
    {
      name: "Request Finance",
      existing: b("Stablecoin approvals-to-payments workflow.", "স্টেবলকয়েন অনুমোদন-থেকে-পেমেন্ট ওয়ার্কফ্লো।"),
      similar: b("Pays approved invoices; not agentic.", "অনুমোদিত ইনভয়েস পরিশোধ করে; এজেন্টিক নয়।"),
      adds: b("An agent whose authority is enforced by a custom executor.", "কাস্টম এক্সিকিউটর দ্বারা প্রয়োগকৃত কর্তৃত্বের এজেন্ট।"),
      solved: b("Payables workflow.", "পেয়েবলস ওয়ার্কফ্লো।"),
      unverified: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      url: "https://partners.circle.com/partner/request-finance",
      src: "finalaudit.md §J, A-20",
    },
    {
      name: "AgentsPay · Cleared · PACE",
      existing: b("Offchain caps; an obligation registry; exact-approval binding.", "অফচেইন ক্যাপ; দায়-রেজিস্ট্রি; সুনির্দিষ্ট-অনুমোদন বাঁধন।"),
      similar: b("Each addresses part of authenticated payment.", "প্রতিটি প্রমাণীকৃত পেমেন্টের একটি অংশ সামলায়।"),
      adds: b("Narrow; see HYBRID-008 (record's novelty hypothesis).", "সংকীর্ণ; HYBRID-008 দেখুন (রেকর্ডের নতুনত্ব অনুমান)।"),
      solved: b("One-use exact authority already expressible with existing caveats (A-04).", "বিদ্যমান caveat দিয়ে একবার-ব্যবহার সুনির্দিষ্ট কর্তৃত্ব আগে থেকেই প্রকাশযোগ্য (A-04)।"),
      unverified: b("Deployed behaviour untested.", "ডিপ্লয়কৃত আচরণ অপরীক্ষিত।"),
      src: "finalaudit.md §C A-04, §J",
    },
  ],
  advantages: [
    { text: b("Concept sound: it addresses fabricated invoices and starved commitments directly.", "ধারণা সঠিক: বানানো ইনভয়েস ও অনাহারে-পড়া প্রতিশ্রুতি সরাসরি সামলায়।"), src: "§L" },
    { text: b("Wide upper score range (Layer A up to 88; task up to 36).", "বিস্তৃত ঊর্ধ্ব স্কোর-রেঞ্জ (Layer A ৮৮ পর্যন্ত; টাস্ক ৩৬ পর্যন্ত)।"), src: "§M" },
  ],
  weaknesses: [
    { text: b("Unaudited trusted code holds treasury authority.", "অনিরীক্ষিত বিশ্বস্ত কোড ট্রেজারি-কর্তৃত্ব ধরে।"), src: "§L, A-26" },
    { text: b("8–12 engineer-days plus validation; its own review bar cannot be met by 20 Oct.", "৮–১২ ইঞ্জিনিয়ার-দিন ও যাচাই; নিজস্ব রিভিউ-মান ২০ অক্টোবরের মধ্যে পূরণ অসম্ভব।"), src: "§L" },
    { text: b("Novelty lowered from 14 to about 10–11: one-use exact authority is already expressible.", "নতুনত্ব ১৪ থেকে প্রায় ১০–১১-তে নামানো: একবার-ব্যবহার সুনির্দিষ্ট কর্তৃত্ব আগে থেকেই প্রকাশযোগ্য।"), src: "§E, A-04, A-16" },
    { text: b("Reserve rule presumed an undefined discretionary spender until R001 F22 was restored (HYBRID-009).", "R001 F22 পুনরুদ্ধারের (HYBRID-009) আগে রিজার্ভ-নিয়ম অনির্ধারিত ঐচ্ছিক খরচকারী ধরে নিয়েছিল।"), src: "A-15" },
    { text: b("Custom executor is unnecessary where segregated accounts achieve the same (A-05).", "বিচ্ছিন্ন অ্যাকাউন্ট একই লক্ষ্য অর্জন করলে কাস্টম এক্সিকিউটর অপ্রয়োজনীয় (A-05)।"), src: "A-05" },
  ],
  innovation: [
    { cls: "existing", text: b("One-use exact authority is already expressible with MetaMask caveats and Biconomy usage limits.", "MetaMask caveat ও Biconomy usage limit দিয়ে একবার-ব্যবহার সুনির্দিষ্ট কর্তৃত্ব আগে থেকেই প্রকাশযোগ্য।"), experiment: "X1" },
    { cls: "contradicted", text: b("The synthesis's novelty centre of 14/20 is not supported by documented primitives.", "সংশ্লেষণের ১৪/২০ নতুনত্ব-কেন্দ্র নথিভুক্ত primitive দিয়ে সমর্থিত নয়।") },
  ],
  innovationNeeds: b(
    "No experiment is assigned; the concept survives as HYBRID-008, whose novelty is tested by X6.",
    "কোনো পরীক্ষা নির্ধারিত নেই; ধারণাটি HYBRID-008 হিসেবে টিকে আছে, যার নতুনত্ব X6 দিয়ে পরীক্ষিত।"
  ),
  security: {
    aiCan: [{ text: b("Extract, reconcile, schedule and propose payments.", "নিষ্কাশন, সমন্বয়, শিডিউল ও পেমেন্ট প্রস্তাব।") }],
    aiCannot: [{ text: b("Bypass the executor's obligation and reserve rules, if the executor is correct.", "এক্সিকিউটর সঠিক হলে তার দায় ও রিজার্ভ নিয়ম এড়ানো।") }],
    authorizes: b("Authenticated obligations; details not specified beyond the record.", "প্রমাণীকৃত দায়; রেকর্ডের বাইরে বিস্তারিত নির্দিষ্ট নয়।"),
    enforcedWhere: b(
      "In a new, unaudited executor contract that enforces the obligation and the reserve.",
      "একটি নতুন, অনিরীক্ষিত এক্সিকিউটর কন্ট্রাক্টে, যা দায় ও রিজার্ভ প্রয়োগ করে।"
    ),
    ifManipulated: b(
      "Protection depends entirely on the executor being correct.",
      "সুরক্ষা সম্পূর্ণভাবে এক্সিকিউটর সঠিক হওয়ার ওপর নির্ভর করে।"
    ),
    ifFails: b("Undefined if the executor is buggy.", "এক্সিকিউটর ত্রুটিপূর্ণ হলে অনির্ধারিত।"),
    ownerStop: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    exposure: b("Undefined if the executor is buggy.", "এক্সিকিউটর ত্রুটিপূর্ণ হলে অনির্ধারিত।"),
    tested: b("Not tested; the gate failed before any validation.", "পরীক্ষিত নয়; কোনো যাচাইয়ের আগেই গেট ব্যর্থ।"),
  },
  roadmap: {
    mvp: [b("As synthesis (no separate MVP in the provided materials)", "সংশ্লেষণ অনুযায়ী (প্রদত্ত উপকরণে আলাদা MVP নেই)")],
    optional: [],
    deferred: [b("The whole concept as specified: NO-GO this round", "নির্দিষ্টকৃত অনুযায়ী পুরো ধারণা: এই রাউন্ডে NO-GO")],
    dependencies: [b("A new unaudited contract", "একটি নতুন অনিরীক্ষিত কন্ট্রাক্ট")],
    blockers: [
      b("8–12 engineer-days plus validation", "৮–১২ ইঞ্জিনিয়ার-দিন ও যাচাই"),
      b("Its own review bar cannot be met by 20 Oct", "নিজস্ব রিভিউ-মান ২০ অক্টোবরের মধ্যে পূরণ অসম্ভব"),
    ],
  },
  scores: {
    task: "24–36",
    security: "17–27",
    innovation: "19–25",
    centres: { value: 13, novelty: 10, security: 18, feasibility: 10, demo: 9, deps: 6 },
  },
  comparison: {
    title: b("What changed between HYBRID-001 and HYBRID-008", "HYBRID-001 ও HYBRID-008-এর মধ্যে কী বদলেছে"),
    otherId: "HYBRID-008",
    rows: [
      {
        aspect: b("Enforcement", "প্রয়োগ"),
        here: b("A new custom executor contract.", "একটি নতুন কাস্টম এক্সিকিউটর কন্ট্রাক্ট।"),
        other: b("Existing contracts: MetaMask caveats (route M) or Safe with Roles and Delay (route Z).", "বিদ্যমান কন্ট্রাক্ট: MetaMask caveat (রুট M) বা Safe সহ Roles ও Delay (রুট Z)।"),
        src: "A-05, §K",
      },
      {
        aspect: b("Reserve", "রিজার্ভ"),
        here: b("Reserve accounting inside the executor.", "এক্সিকিউটরের ভেতরে রিজার্ভ হিসাব।"),
        other: b("Segregated reserve and operating accounts (R001 F03).", "বিচ্ছিন্ন রিজার্ভ ও অপারেটিং অ্যাকাউন্ট (R001 F03)।"),
        src: "A-05, §F",
      },
      {
        aspect: b("Autonomy", "স্বায়ত্তশাসন"),
        here: b("Propose payments; no envelope tier.", "পেমেন্ট প্রস্তাব; এনভেলপ-স্তর নেই।"),
        other: b("Envelopes (IDEA-073) return as T1, the autonomous tier.", "এনভেলপ (IDEA-073) T1, স্বায়ত্তশাসিত স্তর হিসেবে ফেরে।"),
        src: "B-08, §E",
      },
      {
        aspect: b("Competing spender", "প্রতিযোগী খরচকারী"),
        here: b("Reserve presumed an undefined discretionary spender.", "রিজার্ভ অনির্ধারিত ঐচ্ছিক খরচকারী ধরে নিয়েছিল।"),
        other: b("Restored as HYBRID-009 (R001 F22).", "HYBRID-009 হিসেবে পুনরুদ্ধার (R001 F22)।"),
        src: "A-15",
      },
      {
        aspect: b("Human oversight", "মানব তদারকি"),
        here: b("No veto lane.", "ভেটো লেন নেই।"),
        other: b("Delayed human-veto lane (IDEA-080) as route Z, conditional.", "বিলম্বিত মানব-ভেটো লেন (IDEA-080) রুট Z হিসেবে, শর্তাধীন।"),
        src: "B-10",
      },
      {
        aspect: b("Risk statement", "ঝুঁকি-বিবৃতি"),
        here: b("Undefined if the executor is buggy.", "এক্সিকিউটর ত্রুটিপূর্ণ হলে অনির্ধারিত।"),
        other: b("Conditional loss bound L_max under assumptions A1–A5 (a design ceiling).", "A1–A5 অনুমানে শর্তাধীন ক্ষতির সীমা L_max (ডিজাইন সর্বোচ্চ)।"),
        src: "A-21, §K",
      },
      {
        aspect: b("Gate", "গেট"),
        here: b("FAIL this round; NO-GO.", "এই রাউন্ডে FAIL; NO-GO।"),
        other: b("CONDITIONAL PASS; CONDITIONAL GO.", "CONDITIONAL PASS; CONDITIONAL GO।"),
        src: "§L, §S",
      },
    ],
  },
  relatedIds: ["HYBRID-008", "HYBRID-009", "IDEA-001"],
};
