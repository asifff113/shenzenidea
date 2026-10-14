import { b, type CandidatePresentation } from "./types";

// IDEA-073 — Budget envelope treasury.
// Source: finalaudit.md §G (split from IDEA-002), §I, §J, §K, §L, §M, §N, §O, §R, §S, §T.

export const IDEA_073: CandidatePresentation = {
  id: "IDEA-073",
  role: b("Strongest alternative", "সবচেয়ে শক্তিশালী বিকল্প"),
  headline: b(
    "Cap routine spending per cost centre and period, without a click per payment.",
    "প্রতিটি পেমেন্টে ক্লিক ছাড়াই খরচ-কেন্দ্র ও পিরিয়ড অনুযায়ী নিয়মিত খরচ সীমিত করুন।"
  ),
  keyPoint: b(
    "Passes the gate outright; novelty is weak because existing frameworks already express envelopes. Period-cap behaviour is untested (X2).",
    "গেট সরাসরি পাস করে; নতুনত্ব দুর্বল কারণ বিদ্যমান ফ্রেমওয়ার্ক ইতিমধ্যে এনভেলপ প্রকাশ করতে পারে। পিরিয়ড-ক্যাপের আচরণ অপরীক্ষিত (X2)।"
  ),
  quick: {
    problem: b(
      "Spending across cost centres needs per-period limits and recipient restrictions without a human clicking on every payment.",
      "বিভিন্ন খরচ-কেন্দ্রের খরচে প্রতি-পিরিয়ড সীমা ও প্রাপক-নিষেধাজ্ঞা দরকার, প্রতিটি পেমেন্টে মানুষের ক্লিক ছাড়াই।"
    ),
    affected: b("SME or protocol treasuries.", "SME বা প্রোটোকল ট্রেজারি।"),
    solution: b(
      "The owner signs one envelope per cost centre: a cap per period and a set of allowed recipients. The agent settles routine obligations inside the envelopes, reallocates between them within owner totals and escalates anything above a threshold.",
      "মালিক প্রতিটি খরচ-কেন্দ্রের জন্য একটি এনভেলপে স্বাক্ষর করে: প্রতি-পিরিয়ড ক্যাপ ও অনুমোদিত প্রাপকের সেট। এজেন্ট এনভেলপের ভেতরে নিয়মিত দায় মেটায়, মালিকের মোটের মধ্যে এনভেলপের মধ্যে পুনর্বণ্টন করে এবং সীমার ওপরের সবকিছু এসকালেট করে।"
    ),
    versusNormal: b(
      "A plain allowance (for example Safe's allowance module) has no recipient limit. Here the account itself enforces both the period cap and the recipient set.",
      "সাধারণ অ্যালাউয়েন্সে (যেমন Safe-এর allowance module) প্রাপক-সীমা নেই। এখানে অ্যাকাউন্ট নিজেই পিরিয়ড-ক্যাপ ও প্রাপক-সেট দুটিই প্রয়োগ করে।"
    ),
    example: b(
      "Three envelopes, one period reset, one reallocation and one out-of-set recipient attempt: in-terms bills are paid, the cap refreshes each period and the out-of-set recipient reverts.",
      "তিনটি এনভেলপ, একটি পিরিয়ড রিসেট, একটি পুনর্বণ্টন ও একটি সেট-বহির্ভূত প্রাপকের প্রচেষ্টা: শর্ত-মাফিক বিল পরিশোধ হয়, ক্যাপ প্রতি পিরিয়ডে রিফ্রেশ হয় এবং সেট-বহির্ভূত প্রাপক রিভার্ট হয়।"
    ),
    why: b(
      "It is the most autonomous design that passes the gate outright and a credible Stage 1 if HYBRID-008's Stage 2 slips. Feasibility is high (2–4 engineer-days).",
      "গেট সরাসরি পাস করা সবচেয়ে স্বায়ত্তশাসিত ডিজাইন এবং HYBRID-008-এর Stage 2 পিছিয়ে গেলে বিশ্বাসযোগ্য Stage 1। বাস্তবায়নযোগ্যতা উচ্চ (২–৪ ইঞ্জিনিয়ার-দিন)।"
    ),
    risk: b(
      "Overpayment within the cap to allowed recipients is possible, and period-caveat semantics are untested.",
      "ক্যাপের মধ্যে অনুমোদিত প্রাপককে অতিরিক্ত অর্থ দেওয়া সম্ভব, এবং পিরিয়ড-caveat-এর অর্থ অপরীক্ষিত।"
    ),
    decisionMeaning: b(
      "GO (gate: PASS): proceed to controlled prototype validation inside X1 and X2. It becomes NO-GO if period caps or recipient sets fail on the chosen testnet.",
      "GO (গেট: PASS): X1 ও X2-এর মধ্যে নিয়ন্ত্রিত প্রোটোটাইপ যাচাইয়ে এগোনো। নির্বাচিত টেস্টনেটে পিরিয়ড-ক্যাপ বা প্রাপক-সেট ব্যর্থ হলে এটি NO-GO হয়ে যায়।"
    ),
  },
  diagrams: [
    {
      id: "i073-envelopes",
      title: b("Envelope treasury — caps and recipient sets", "এনভেলপ ট্রেজারি — ক্যাপ ও প্রাপক-সেট"),
      caption: b(
        "Interpretation of finalaudit.md §I and §K: the envelope tier (T1 of the HYBRID-008 family) on its own. Each envelope's period cap and recipient set are enforced by the account, not by the agent.",
        "finalaudit.md §I ও §K-এর ব্যাখ্যা: HYBRID-008 পরিবারের এনভেলপ স্তর (T1) এককভাবে। প্রতিটি এনভেলপের পিরিয়ড-ক্যাপ ও প্রাপক-সেট অ্যাকাউন্ট প্রয়োগ করে, এজেন্ট নয়।"
      ),
      status: b("Design only — X2 envelope arm pending", "শুধু ডিজাইন — X2 এনভেলপ আর্ম পেন্ডিং"),
      zones: [
        { label: b("Untrusted: AI and data", "অবিশ্বস্ত: এআই ও ডেটা"), col0: 0, col1: 1, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Enforced by the account", "অ্যাকাউন্ট দ্বারা প্রয়োগকৃত"), col0: 2, col1: 3, row0: 0, row1: 2, tone: "enforced" },
      ],
      nodes: [
        { id: "req", kind: "external", label: b("Invoices and payment requests", "ইনভয়েস ও পেমেন্ট অনুরোধ"), sub: b("Data only", "শুধু ডেটা"), col: 0, row: 0 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("Settle · sweep and reallocate · escalate", "মেটানো · সুইপ ও পুনর্বণ্টন · এসকালেট"), col: 1, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner", "মালিক"), sub: b("Signs each envelope; sets owner totals", "প্রতিটি এনভেলপে স্বাক্ষর; মালিকের মোট ঠিক করে"), col: 0, row: 2 },
        { id: "esc", kind: "owner", label: b("Above threshold", "সীমার ওপরে"), sub: b("Escalated to the owner", "মালিকের কাছে এসকালেট"), col: 1, row: 1 },
        { id: "e1", kind: "policy", label: b("Envelope 1", "এনভেলপ ১"), sub: b("Period cap + recipient set", "পিরিয়ড-ক্যাপ + প্রাপক-সেট"), col: 2, row: 0 },
        { id: "e2", kind: "policy", label: b("Envelope 2", "এনভেলপ ২"), sub: b("Period cap + recipient set", "পিরিয়ড-ক্যাপ + প্রাপক-সেট"), col: 2, row: 1 },
        { id: "e3", kind: "policy", label: b("Envelope 3", "এনভেলপ ৩"), sub: b("Period cap + recipient set", "পিরিয়ড-ক্যাপ + প্রাপক-সেট"), col: 2, row: 2 },
        { id: "treasury", kind: "wallet", label: b("Treasury account", "ট্রেজারি অ্যাকাউন্ট"), sub: b("Balance allocated across envelopes each period", "প্রতি পিরিয়ডে এনভেলপে বণ্টিত ব্যালেন্স"), col: 3, row: 1 },
        { id: "ok", kind: "chain", label: b("Allowed recipients", "অনুমোদিত প্রাপক"), sub: b("Settles on the testnet", "টেস্টনেটে সেটেল"), col: 4, row: 0 },
        { id: "out", kind: "external", label: b("Out-of-set recipient", "সেট-বহির্ভূত প্রাপক"), sub: b("Reverts", "রিভার্ট হয়"), col: 4, row: 2 },
      ],
      edges: [
        { from: "req", to: "agent", kind: "data", label: b("read as data", "ডেটা হিসেবে পড়া") },
        { from: "owner", to: "e1", kind: "auth", label: b("signs once", "একবার স্বাক্ষর") },
        { from: "owner", to: "e2", kind: "auth" },
        { from: "owner", to: "e3", kind: "auth" },
        { from: "agent", to: "e1", kind: "tx", label: b("pay in-terms bill", "শর্ত-মাফিক বিল") },
        { from: "agent", to: "e2", kind: "tx" },
        { from: "agent", to: "esc", kind: "data", label: b("above threshold", "সীমার ওপরে") },
        { from: "e1", to: "e2", kind: "funds", label: b("reallocate within totals", "মোটের মধ্যে পুনর্বণ্টন") },
        { from: "e1", to: "treasury", kind: "funds" },
        { from: "e2", to: "treasury", kind: "funds" },
        { from: "treasury", to: "ok", kind: "tx", label: b("settle", "সেটেল") },
        { from: "e3", to: "out", kind: "block", label: b("not in set", "সেটে নেই") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. Owner signs the envelopes", "১. মালিক এনভেলপে স্বাক্ষর করে"),
      body: b(
        "One signature per envelope sets a period cap and a recipient set, and fixes the owner totals the agent may reallocate within.",
        "প্রতিটি এনভেলপের জন্য একটি স্বাক্ষর পিরিয়ড-ক্যাপ ও প্রাপক-সেট ঠিক করে এবং মালিকের মোট নির্ধারণ করে, যার মধ্যে এজেন্ট পুনর্বণ্টন করতে পারে।"
      ),
      src: "finalaudit.md §K (T1)",
      nodes: ["owner", "e1", "e2", "e3"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent settles an in-terms bill", "২. এজেন্ট শর্ত-মাফিক বিল মেটায়"),
      body: b(
        "It reads the bill as data, matches it to an envelope and pays unattended when it is in terms.",
        "এটি বিলকে ডেটা হিসেবে পড়ে, একটি এনভেলপের সাথে মেলায় এবং শর্ত-মাফিক হলে অযত্নে পরিশোধ করে।"
      ),
      src: "finalaudit.md §I",
      nodes: ["req", "agent", "e1"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("3. The account checks cap and recipient set", "৩. অ্যাকাউন্ট ক্যাপ ও প্রাপক-সেট যাচাই করে"),
      body: b(
        "A payment goes through only if it is within the envelope's period cap and to a recipient in its set. Otherwise it reverts: the breach count is zero by construction (to be shown in X2).",
        "পেমেন্ট কেবল তখনই যায় যখন তা এনভেলপের পিরিয়ড-ক্যাপের মধ্যে এবং সেটের কোনো প্রাপকের কাছে। নইলে রিভার্ট হয়: নির্মাণগতভাবে ব্রিচ-সংখ্যা শূন্য (X2-এ প্রদর্শিত হবে)।"
      ),
      src: "finalaudit.md §I, §N",
      nodes: ["e3", "out", "treasury"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("4. Agent reallocates between envelopes", "৪. এজেন্ট এনভেলপের মধ্যে পুনর্বণ্টন করে"),
      body: b(
        "It sweeps and reallocates balance between envelopes each period, always within the totals the owner set.",
        "এটি প্রতি পিরিয়ডে এনভেলপের মধ্যে ব্যালেন্স সুইপ ও পুনর্বণ্টন করে, সর্বদা মালিকের নির্ধারিত মোটের মধ্যে।"
      ),
      nodes: ["agent", "e1", "e2"],
      diagram: 0,
    },
    {
      control: "owner",
      title: b("5. Above-threshold items go to the owner", "৫. সীমার ওপরের বিষয় মালিকের কাছে যায়"),
      body: b(
        "Anything above the threshold is escalated; the agent does not decide it alone.",
        "সীমার ওপরের সবকিছু এসকালেট হয়; এজেন্ট একা সিদ্ধান্ত নেয় না।"
      ),
      nodes: ["agent", "esc"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("6. Settlement and evidence", "৬. সেটেলমেন্ট ও প্রমাণ"),
      body: b(
        "Allowed payments settle onchain and the period reset and the out-of-set revert become the demo's evidence.",
        "অনুমোদিত পেমেন্ট অনচেইনে সেটেল হয় এবং পিরিয়ড রিসেট ও সেট-বহির্ভূত রিভার্টই ডেমোর প্রমাণ।"
      ),
      src: "finalaudit.md §N, §R",
      nodes: ["treasury", "ok", "out"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (three envelopes, one period reset, one reallocation, one out-of-set recipient attempt). No amounts are given because the source gives none; nothing has been executed.",
      "নথিভুক্ত MVP (তিনটি এনভেলপ, একটি পিরিয়ড রিসেট, একটি পুনর্বণ্টন, একটি সেট-বহির্ভূত প্রাপকের প্রচেষ্টা) ঘিরে চিত্রণমূলক ওয়াকথ্রু। উৎসে কোনো অঙ্ক নেই বলে এখানেও দেওয়া হয়নি; কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b(
      "A treasury has three cost-centre envelopes, each with a period cap and an allowed-recipient set.",
      "একটি ট্রেজারির তিনটি খরচ-কেন্দ্র এনভেলপ আছে, প্রতিটির পিরিয়ড-ক্যাপ ও অনুমোদিত-প্রাপক সেট আছে।"
    ),
    objective: b(
      "Settle routine bills inside each envelope without a signature per payment.",
      "প্রতি পেমেন্টে স্বাক্ষর ছাড়াই প্রতিটি এনভেলপের মধ্যে নিয়মিত বিল মেটানো।"
    ),
    reasoning: b(
      "The agent matches each bill to the right envelope and checks whether it is in terms.",
      "এজেন্ট প্রতিটি বিল সঠিক এনভেলপের সাথে মেলায় এবং শর্ত-মাফিক কি না দেখে।"
    ),
    decision: b(
      "Pay in-terms bills, reallocate balance between envelopes within owner totals, and escalate what is above the threshold.",
      "শর্ত-মাফিক বিল পরিশোধ, মালিকের মোটের মধ্যে এনভেলপের মধ্যে ব্যালেন্স পুনর্বণ্টন, এবং সীমার ওপরেরটি এসকালেট।"
    ),
    permission: b(
      "The account allows a payment only within the envelope's period cap and to a recipient in its set.",
      "অ্যাকাউন্ট কেবল এনভেলপের পিরিয়ড-ক্যাপের মধ্যে এবং এর সেটের প্রাপককে পেমেন্ট অনুমতি দেয়।"
    ),
    onchain: b(
      "Period-capped transfers to the recipient set settle on the testnet; an out-of-set attempt reverts.",
      "প্রাপক-সেটে পিরিয়ড-ক্যাপযুক্ত ট্রান্সফার টেস্টনেটে সেটেল হয়; সেট-বহির্ভূত প্রচেষ্টা রিভার্ট হয়।"
    ),
    result: b(
      "Benign payments complete; the envelope breach count is zero by construction; the cap refreshes after the period reset.",
      "নিরীহ পেমেন্ট সম্পন্ন হয়; এনভেলপ ব্রিচ-সংখ্যা নির্মাণগতভাবে শূন্য; পিরিয়ড রিসেটের পর ক্যাপ রিফ্রেশ হয়।"
    ),
    failure: b(
      "Paying an out-of-set recipient, or going over the cap, reverts onchain.",
      "সেট-বহির্ভূত প্রাপককে পরিশোধ বা ক্যাপ ছাড়ালে অনচেইনে রিভার্ট হয়।"
    ),
    evidence: b(
      "Hashes for paid cases, revert evidence for the out-of-set attempt, and balances across the period boundary (X2 envelope arm, X1).",
      "পরিশোধিত কেসের হ্যাশ, সেট-বহির্ভূত প্রচেষ্টার রিভার্ট প্রমাণ, এবং পিরিয়ড-সীমানা জুড়ে ব্যালেন্স (X2 এনভেলপ আর্ম, X1)।"
    ),
    cases: [
      { key: "normal", basis: "documented", outcome: b("Benign payments complete inside their envelopes.", "নিরীহ পেমেন্ট নিজ নিজ এনভেলপের মধ্যে সম্পন্ন হয়।") },
      { key: "unauthorized", basis: "documented", outcome: b("An out-of-set recipient attempt reverts.", "সেট-বহির্ভূত প্রাপকের প্রচেষ্টা রিভার্ট হয়।") },
      { key: "overlimit", basis: "expected", outcome: b("A payment over the period cap reverts; the cap refreshes after the period reset (to be shown across a boundary in X2).", "পিরিয়ড-ক্যাপের ওপরে পেমেন্ট রিভার্ট হয়; পিরিয়ড রিসেটের পর ক্যাপ রিফ্রেশ হয় (X2-এ সীমানা জুড়ে প্রদর্শিত হবে)।") },
      { key: "malicious", basis: "expected", outcome: b("A bill text that asks for a different payee has no effect: the recipient set is fixed by the owner-signed envelope.", "ভিন্ন পেয়ি চাওয়া বিলের লেখার কোনো প্রভাব নেই: প্রাপক-সেট মালিক-স্বাক্ষরিত এনভেলপে নির্ধারিত।") },
    ],
  },
  competitors: [
    {
      name: "Safe allowance module",
      existing: b("Per-period spending allowance.", "প্রতি-পিরিয়ড খরচ-অ্যালাউয়েন্স।"),
      similar: b("Period spending cap.", "পিরিয়ড খরচ-ক্যাপ।"),
      adds: b("Recipient restriction on top of the cap (via other frameworks).", "ক্যাপের ওপর প্রাপক-নিষেধাজ্ঞা (অন্য ফ্রেমওয়ার্কের মাধ্যমে)।"),
      solved: b("Period allowance.", "পিরিয়ড অ্যালাউয়েন্স।"),
      unverified: b("Recipient limit absent, as R010 says.", "R010 যেমন বলে, প্রাপক-সীমা নেই।"),
      src: "finalaudit.md §I, §J",
    },
    {
      name: "MetaMask erc20PeriodTransfer + allowedCalldata",
      existing: b("Period-capped, recipient-restricted transfers.", "পিরিয়ড-ক্যাপযুক্ত, প্রাপক-সীমিত ট্রান্সফার।"),
      similar: b("Exactly the envelope mechanism.", "হুবহু এনভেলপ কৌশল।"),
      adds: b("Agent reallocation between envelopes within owner totals.", "মালিকের মোটের মধ্যে এনভেলপের মধ্যে এজেন্টের পুনর্বণ্টন।"),
      solved: b("Verified existing capability; R010's “functional gap” claim is contradicted.", "যাচাইকৃত বিদ্যমান সক্ষমতা; R010-এর “functional gap” দাবি খণ্ডিত।"),
      unverified: b("Deployed behaviour untested (X2).", "ডিপ্লয়কৃত আচরণ অপরীক্ষিত (X2)।"),
      url: "https://docs.metamask.io/smart-accounts-kit/reference/delegation/caveats/",
      src: "finalaudit.md §J",
    },
    {
      name: "Zodiac Roles v2",
      existing: b("Spending limits within permissions.", "অনুমতির ভেতরে খরচ-সীমা।"),
      similar: b("Allowances with recipient conditions.", "প্রাপক-শর্তসহ অ্যালাউয়েন্স।"),
      adds: b("Nothing new at the primitive level.", "primitive-স্তরে নতুন কিছু নয়।"),
      solved: b("Spending limits within permissions (ENS EP 5.12).", "অনুমতির ভেতরে খরচ-সীমা (ENS EP 5.12)।"),
      unverified: b("Needs patched modules where Delay is also used.", "Delay ব্যবহার হলে প্যাচড মডিউল দরকার।"),
      url: "https://docs.ens.domains/dao/proposals/5.12",
      src: "finalaudit.md §J",
    },
  ],
  advantages: [
    { text: b("Passes the gate outright with genuine autonomy inside envelopes.", "এনভেলপের ভেতরে প্রকৃত স্বায়ত্তশাসনসহ গেট সরাসরি পাস করে।"), src: "§L" },
    { text: b("High feasibility: 2–4 engineer-days.", "উচ্চ বাস্তবায়নযোগ্যতা: ২–৪ ইঞ্জিনিয়ার-দিন।"), src: "§I" },
    { text: b("Credible Stage 1 if Stage 2 slips; same infrastructure as HYBRID-008.", "Stage 2 পিছিয়ে গেলে বিশ্বাসযোগ্য Stage 1; HYBRID-008-এর একই অবকাঠামো।"), src: "§O, §T" },
  ],
  weaknesses: [
    { text: b("Weak novelty: R010's “functional gap” is contradicted by existing frameworks.", "দুর্বল নতুনত্ব: R010-এর “functional gap” বিদ্যমান ফ্রেমওয়ার্ক দ্বারা খণ্ডিত।"), src: "§J" },
    { text: b("Overpayment within the cap to allowed recipients remains possible.", "ক্যাপের মধ্যে অনুমোদিত প্রাপককে অতিরিক্ত পরিশোধ সম্ভব থাকে।"), src: "§N" },
    { text: b("Period-caveat semantics untested; becomes NO-GO if caps or sets fail on the chosen testnet.", "পিরিয়ড-caveat-এর অর্থ অপরীক্ষিত; নির্বাচিত টেস্টনেটে ক্যাপ বা সেট ব্যর্থ হলে NO-GO।"), src: "§L, §S" },
    { text: b("No reserve of its own: envelopes do not authenticate individual obligations.", "নিজস্ব রিজার্ভ নেই: এনভেলপ আলাদা দায় প্রমাণীকরণ করে না।"), src: "§G" },
  ],
  innovation: [
    { cls: "contradicted", text: b("R010's claim of a functional gap for period-capped, recipient-restricted envelopes.", "পিরিয়ড-ক্যাপযুক্ত, প্রাপক-সীমিত এনভেলপের জন্য R010-এর functional gap দাবি।"), experiment: "X2" },
    { cls: "existing", text: b("Period caps and recipient sets exist in several frameworks.", "পিরিয়ড-ক্যাপ ও প্রাপক-সেট একাধিক ফ্রেমওয়ার্কে আছে।") },
    { cls: "combined", text: b("Agent reallocation across envelopes within owner totals.", "মালিকের মোটের মধ্যে এনভেলপ জুড়ে এজেন্টের পুনর্বণ্টন।"), experiment: "X2" },
  ],
  innovationNeeds: b(
    "No strong innovation claim is made. The evidence that matters is X2: caps and recipient sets holding across period resets on the chosen testnet.",
    "কোনো শক্তিশালী নতুনত্বের দাবি করা হয়নি। যে প্রমাণ গুরুত্বপূর্ণ তা X2: নির্বাচিত টেস্টনেটে পিরিয়ড রিসেট জুড়ে ক্যাপ ও প্রাপক-সেট ধরে রাখা।"
  ),
  security: {
    aiCan: [
      { text: b("Pay in-terms bills inside an envelope.", "এনভেলপের ভেতরে শর্ত-মাফিক বিল পরিশোধ।") },
      { text: b("Reallocate balance between envelopes within owner totals.", "মালিকের মোটের মধ্যে এনভেলপের মধ্যে ব্যালেন্স পুনর্বণ্টন।") },
      { text: b("Escalate above-threshold items.", "সীমার ওপরের বিষয় এসকালেট।") },
    ],
    aiCannot: [
      { text: b("Pay a recipient outside an envelope's set.", "এনভেলপের সেটের বাইরের প্রাপককে পরিশোধ।") },
      { text: b("Exceed an envelope's period cap.", "এনভেলপের পিরিয়ড-ক্যাপ ছাড়ানো।") },
      { text: b("Raise owner totals or add recipients.", "মালিকের মোট বাড়ানো বা প্রাপক যোগ করা।") },
    ],
    authorizes: b("The owner signs each envelope once.", "মালিক প্রতিটি এনভেলপে একবার স্বাক্ষর করে।"),
    enforcedWhere: b(
      "By the account: per-envelope period cap and recipient set (R010 C07) and a per-task hard cap (R011 C15).",
      "অ্যাকাউন্ট দ্বারা: প্রতি-এনভেলপ পিরিয়ড-ক্যাপ ও প্রাপক-সেট (R010 C07) এবং প্রতি-টাস্ক হার্ড ক্যাপ (R011 C15)।"
    ),
    ifManipulated: b(
      "A manipulated agent can only spend within caps to allowed recipients.",
      "প্রতারিত এজেন্ট কেবল ক্যাপের মধ্যে অনুমোদিত প্রাপকের কাছে খরচ করতে পারে।"
    ),
    ifFails: b("Out-of-set or over-cap attempts revert onchain.", "সেট-বহির্ভূত বা ক্যাপ-ছাড়ানো প্রচেষ্টা অনচেইনে রিভার্ট হয়।"),
    ownerStop: b(
      "Revoke an envelope's delegation; nonce bump revokes all (same family as HYBRID-008, T4).",
      "এনভেলপের ডেলিগেশন বাতিল; nonce bump সব বাতিল করে (HYBRID-008-এর একই পরিবার, T4)।"
    ),
    exposure: b(
      "Caps times remaining periods, to allowed recipients only.",
      "অবশিষ্ট পিরিয়ড × ক্যাপ, শুধু অনুমোদিত প্রাপকের কাছে।"
    ),
    tested: b("Documented only; X1 and X2 are pending.", "শুধু নথিভুক্ত; X1 ও X2 পেন্ডিং।"),
  },
  roadmap: {
    mvp: [
      b("Three envelopes", "তিনটি এনভেলপ"),
      b("One period reset", "একটি পিরিয়ড রিসেট"),
      b("One reallocation", "একটি পুনর্বণ্টন"),
      b("One out-of-set recipient attempt", "একটি সেট-বহির্ভূত প্রাপকের প্রচেষ্টা"),
    ],
    optional: [b("Per-task hard cap (R011 C15)", "প্রতি-টাস্ক হার্ড ক্যাপ (R011 C15)")],
    deferred: [b("Obligation-level authentication (that is IDEA-001 / HYBRID-008)", "দায়-স্তরের প্রমাণীকরণ (সেটি IDEA-001 / HYBRID-008)")],
    dependencies: [
      b("Delegation framework or Roles 2.1.1 on the chosen testnet", "নির্বাচিত টেস্টনেটে ডেলিগেশন ফ্রেমওয়ার্ক বা Roles 2.1.1"),
      b("A token", "একটি টোকেন"),
    ],
    blockers: [b("Period-caveat semantics (X2) are the open item", "পিরিয়ড-caveat-এর অর্থ (X2) খোলা বিষয়")],
    stages: [
      { label: b("Run X1 and the X2 envelope arm", "X1 ও X2 এনভেলপ আর্ম চালান"), items: [b("2–4 engineer-days overall", "সব মিলিয়ে ২–৪ ইঞ্জিনিয়ার-দিন")] },
    ],
  },
  scores: {
    task: "29–34",
    security: "21–25",
    innovation: "14–20",
    centres: { value: 12, novelty: 7, security: 20, feasibility: 18, demo: 8, deps: 9 },
  },
  relatedIds: ["HYBRID-008", "IDEA-001", "IDEA-074"],
};
