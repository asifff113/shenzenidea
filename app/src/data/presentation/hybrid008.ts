import { b, type CandidatePresentation } from "./types";

// HYBRID-008 — Mandate-bound obligation treasury.
// Source: finalaudit.md §I (record), §J (prior art), §K (security architecture,
// loss bound), §L (gate), §M (ranking), §N (top-five table), §O, §R, §S, §T.
// All text below is a presentation explanation; nothing here changes a
// ranking, score, gate or decision.

export const HYBRID_008: CandidatePresentation = {
  id: "HYBRID-008",
  role: b("Provisional preference (not a final selection)", "অস্থায়ী পছন্দ (চূড়ান্ত নির্বাচন নয়)"),
  headline: b(
    "An accounts-payable agent whose entire authority is owner-signed, onchain-enforced mandates.",
    "একটি অ্যাকাউন্টস-পেয়েবল এজেন্ট, যার সম্পূর্ণ কর্তৃত্ব মালিকের স্বাক্ষরিত, অনচেইন-প্রয়োগকৃত ম্যান্ডেট।"
  ),
  keyPoint: b(
    "Uncertainty: the five authority tiers are untested as a composition (X1, X2); every part already exists, so novelty is integration-level.",
    "অনিশ্চয়তা: পাঁচটি কর্তৃত্ব-স্তরের সমন্বয় অপরীক্ষিত (X1, X2); প্রতিটি অংশ আগে থেকেই আছে, তাই নতুনত্ব ইন্টিগ্রেশন-স্তরের।"
  ),
  quick: {
    problem: b(
      "A treasury must pay approved obligations unattended, never pay fabricated ones, and keep committed cash from being spent elsewhere.",
      "একটি ট্রেজারিকে অনুমোদিত দায় অযত্নে (মানুষ ছাড়া) পরিশোধ করতে হবে, বানানো দায় কখনো পরিশোধ করা যাবে না, এবং প্রতিশ্রুত নগদ অন্য খাতে খরচ হওয়া ঠেকাতে হবে।"
    ),
    affected: b(
      "Crypto SMEs and DAOs paying vendors and contractors in stablecoins.",
      "স্টেবলকয়েনে বিক্রেতা ও ঠিকাদারদের অর্থ প্রদানকারী ক্রিপ্টো SME ও DAO।"
    ),
    solution: b(
      "The AI agent reads invoices, matches them to owner-signed mandates, chooses timing, moves money between a reserve and an operating account, and escalates anything it has no mandate for. It never holds spending authority of its own.",
      "এআই এজেন্ট ইনভয়েস পড়ে, মালিকের স্বাক্ষরিত ম্যান্ডেটের সাথে মেলায়, সময় বেছে নেয়, রিজার্ভ ও অপারেটিং অ্যাকাউন্টের মধ্যে অর্থ সরায় এবং যে কাজের ম্যান্ডেট নেই তা এসকালেট করে। নিজের কোনো খরচের কর্তৃত্ব এজেন্টের নেই।"
    ),
    versusNormal: b(
      "A normal agent wallet trusts the model to decide what is safe. Here the agent key holds gas only and can only redeem; the limits live in existing onchain contracts, so a fooled model still cannot pay an unapproved recipient (under assumptions A1–A5).",
      "সাধারণ এজেন্ট ওয়ালেট কোনটি নিরাপদ তা মডেলের ওপর ছেড়ে দেয়। এখানে এজেন্ট কী-তে শুধু গ্যাস থাকে এবং সেটি শুধু রিডিম করতে পারে; সীমা থাকে বিদ্যমান অনচেইন কন্ট্রাক্টে, তাই মডেল প্রতারিত হলেও (A1–A5 অনুমানে) অননুমোদিত প্রাপককে অর্থ দেওয়া যায় না।"
    ),
    example: b(
      "Payroll reserve: the agent pays two approved invoices and an in-terms envelope bill. A vendor bill that would breach the payroll reserve is refused. An injected “wallet changed” invoice and a duplicate payment fail onchain.",
      "পে-রোল রিজার্ভ: এজেন্ট দুটি অনুমোদিত ইনভয়েস ও একটি শর্ত-মাফিক এনভেলপ বিল পরিশোধ করে। যে বিক্রেতা-বিল পে-রোল রিজার্ভ ভাঙত তা প্রত্যাখ্যাত হয়। ইনজেক্ট করা “wallet changed” ইনভয়েস ও ডুপ্লিকেট পেমেন্ট অনচেইনে ব্যর্থ হয়।"
    ),
    why: b(
      "It is the only shortlisted candidate that scores well on asset management, transaction execution and risk control together, and its staging leaves a submittable product if a later gate fails.",
      "শর্টলিস্টের মধ্যে এটিই একমাত্র যা সম্পদ ব্যবস্থাপনা, লেনদেন সম্পাদন ও ঝুঁকি নিয়ন্ত্রণ — তিনটিতেই ভালো স্কোর পায়, আর ধাপে ধাপে নির্মাণের কারণে পরবর্তী গেট ব্যর্থ হলেও জমা দেওয়ার মতো পণ্য থাকে।"
    ),
    risk: b(
      "Composition risk: mandates, envelopes, segregation and the loss bound have not been tested together, and the AI's value over a template parser is unmeasured.",
      "সমন্বয়ের ঝুঁকি: ম্যান্ডেট, এনভেলপ, বিচ্ছিন্নকরণ ও ক্ষতির সীমা একসাথে পরীক্ষা করা হয়নি, এবং টেমপ্লেট পার্সারের তুলনায় এআই-এর মূল্য অপরিমিত।"
    ),
    decisionMeaning: b(
      "CONDITIONAL GO (gate: CONDITIONAL PASS): proceed to controlled prototype validation now, not production readiness. It becomes final only if X1, X3, X4 and X2 pass as listed in §S.",
      "CONDITIONAL GO (গেট: CONDITIONAL PASS): এখনই নিয়ন্ত্রিত প্রোটোটাইপ যাচাইয়ে এগোনো, প্রোডাকশন-প্রস্তুতি নয়। §S-এর তালিকা অনুযায়ী X1, X3, X4 ও X2 পাস করলেই কেবল এটি চূড়ান্ত হতে পারে।"
    ),
  },
  diagrams: [
    {
      id: "h008-route-m",
      title: b("Route M — MetaMask delegations (default route)", "রুট M — MetaMask ডেলিগেশন (ডিফল্ট রুট)"),
      caption: b(
        "Interpretation of finalaudit.md §K. The LLM is untrusted: it can only redeem within owner-signed limits. T4 stays with the offline owner key. Route M is the documented default; nothing shown has been executed.",
        "finalaudit.md §K-এর ব্যাখ্যা। LLM অবিশ্বস্ত: সে কেবল মালিকের স্বাক্ষরিত সীমার মধ্যে রিডিম করতে পারে। T4 অফলাইন মালিক-কী-এর হাতে। রুট M নথিভুক্ত ডিফল্ট; দেখানো কিছুই এক্সিকিউট করা হয়নি।"
      ),
      status: b("Design only — no execution; experiments X1, X2 pending", "শুধু ডিজাইন — কোনো এক্সিকিউশন নেই; X1, X2 পেন্ডিং"),
      zones: [
        { label: b("Untrusted: AI and data", "অবিশ্বস্ত: এআই ও ডেটা"), col0: 0, col1: 1, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Onchain enforcement (existing contracts)", "অনচেইন প্রয়োগ (বিদ্যমান কন্ট্রাক্ট)"), col0: 2, col1: 3, row0: 0, row1: 4, tone: "enforced" },
      ],
      nodes: [
        { id: "inv", kind: "external", label: b("Invoices, emails, API bodies", "ইনভয়েস, ইমেইল, API বডি"), sub: b("Data only — never authority", "শুধু ডেটা — কর্তৃত্ব নয়"), col: 0, row: 0 },
        { id: "llm", kind: "agent", label: b("LLM agent (untrusted)", "LLM এজেন্ট (অবিশ্বস্ত)"), sub: b("Extract · match · time · reconcile · escalate", "নিষ্কাশন · মেলানো · সময় · সমন্বয় · এসকালেট"), col: 1, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner key (offline)", "মালিক-কী (অফলাইন)"), sub: b("Signs mandates; wallet renders typed data", "ম্যান্ডেটে স্বাক্ষর; ওয়ালেট টাইপড ডেটা দেখায়"), col: 0, row: 2 },
        { id: "t0", kind: "policy", label: b("T0 Obligations", "T0 দায়"), sub: b("exactExecution · limitedCalls=1 · timestamp · redeemer", "exactExecution · limitedCalls=1 · timestamp · redeemer"), col: 2, row: 0 },
        { id: "t1", kind: "policy", label: b("T1 Envelopes", "T1 এনভেলপ"), sub: b("erc20PeriodTransfer · allowedTargets · allowedCalldata", "erc20PeriodTransfer · allowedTargets · allowedCalldata"), col: 2, row: 1 },
        { id: "t2", kind: "policy", label: b("T2 Above threshold", "T2 সীমার ওপরে"), sub: b("Escalate: owner signs a new T0 mandate", "এসকালেট: মালিক নতুন T0 ম্যান্ডেটে স্বাক্ষর করে"), col: 2, row: 2 },
        { id: "t3", kind: "policy", label: b("T3 Reserve funding", "T3 রিজার্ভ ফান্ডিং"), sub: b("allowedCalldata: recipient = reserve", "allowedCalldata: প্রাপক = রিজার্ভ"), col: 2, row: 3 },
        { id: "t4", kind: "owner", label: b("T4 Administration", "T4 প্রশাসন"), sub: b("Owner only · nonce bump revokes all", "শুধু মালিক · nonce bump সব বাতিল করে"), col: 2, row: 4 },
        { id: "reserve", kind: "wallet", label: b("Reserve smart account", "রিজার্ভ স্মার্ট অ্যাকাউন্ট"), sub: b("Committed cash for obligations", "দায়ের জন্য প্রতিশ্রুত নগদ"), col: 3, row: 0 },
        { id: "oper", kind: "wallet", label: b("Operating smart account", "অপারেটিং স্মার্ট অ্যাকাউন্ট"), sub: b("Routine envelope payments", "রুটিন এনভেলপ পেমেন্ট"), col: 3, row: 1 },
        { id: "chain", kind: "chain", label: b("Public EVM testnet", "পাবলিক EVM টেস্টনেট"), sub: b("Explorer-verifiable hashes", "এক্সপ্লোরারে যাচাইযোগ্য হ্যাশ"), col: 4, row: 0 },
        { id: "cert", kind: "audit", label: b("Loss certificate (IDEA-026)", "ক্ষতি সার্টিফিকেট (IDEA-026)"), sub: b("Shows L_max live before activation", "সক্রিয় করার আগে L_max দেখায়"), col: 0, row: 4 },
        { id: "halt", kind: "audit", label: b("Executor self-halt (IDEA-075)", "এক্সিকিউটর সেলফ-হল্ট (IDEA-075)"), sub: b("Halts and bumps nonce on invariant breach", "নিয়ম ভাঙলে থামে ও nonce বাড়ায়"), col: 3, row: 4 },
      ],
      edges: [
        { from: "inv", to: "llm", kind: "data", label: b("read as data", "ডেটা হিসেবে পড়া") },
        { from: "owner", to: "t0", kind: "auth", label: b("signs each obligation", "প্রতিটি দায়ে স্বাক্ষর") },
        { from: "owner", to: "t1", kind: "auth", label: b("signs once per envelope", "এনভেলপ প্রতি একবার") },
        { from: "owner", to: "t2", kind: "auth", label: b("signs new T0 to escalate", "এসকালেটে নতুন T0") },
        { from: "owner", to: "t3", kind: "auth", label: b("signs once", "একবার স্বাক্ষর") },
        { from: "owner", to: "t4", kind: "auth", label: b("owner only", "শুধু মালিক") },
        { from: "llm", to: "t0", kind: "tx", label: b("redeem inside window", "উইন্ডোর মধ্যে রিডিম") },
        { from: "llm", to: "t1", kind: "tx", label: b("pay in-terms invoices", "শর্ত-মাফিক ইনভয়েস পরিশোধ") },
        { from: "llm", to: "t3", kind: "tx", label: b("decide when / how much", "কখন / কত — সিদ্ধান্ত") },
        { from: "llm", to: "t4", kind: "block", label: b("no authority", "কোনো কর্তৃত্ব নেই") },
        { from: "t0", to: "reserve", kind: "funds", label: b("pay from reserve", "রিজার্ভ থেকে পরিশোধ") },
        { from: "t1", to: "oper", kind: "funds", label: b("pay from operating", "অপারেটিং থেকে পরিশোধ") },
        { from: "oper", to: "reserve", kind: "funds", label: b("one-way top-up (T3)", "একমুখী টপ-আপ (T3)") },
        { from: "reserve", to: "chain", kind: "tx", label: b("settle", "সেটেল") },
        { from: "oper", to: "chain", kind: "tx", label: b("settle", "সেটেল") },
        { from: "cert", to: "owner", kind: "data", label: b("bound shown to owner", "মালিককে সীমা দেখায়") },
        { from: "halt", to: "t4", kind: "auth", label: b("bump nonce", "nonce বাড়ায়") },
      ],
    },
    {
      id: "h008-route-z",
      title: b("Route Z — Safe with Roles 2.1.1 and Delay 1.1.1", "রুট Z — Safe সহ Roles 2.1.1 ও Delay 1.1.1"),
      caption: b(
        "A conditional implementation alternative (finalaudit.md §K, §Q). It adds the delayed human-veto lane (IDEA-080) but depends on patched Zodiac modules and carries a documented bypass history in Delay 1.1.0. Route M and route Z are mutually exclusive choices; they are never combined into one claimed implementation.",
        "একটি শর্তাধীন বাস্তবায়ন বিকল্প (finalaudit.md §K, §Q)। এটি বিলম্বিত মানব-ভেটো লেন (IDEA-080) যোগ করে, কিন্তু প্যাচড Zodiac মডিউলের ওপর নির্ভরশীল এবং Delay 1.1.0-এ নথিভুক্ত বাইপাস ইতিহাস আছে। রুট M ও রুট Z পরস্পর-বর্জনকারী পছন্দ; এদের একটি দাবিকৃত বাস্তবায়নে মেলানো হয় না।"
      ),
      status: b("Conditional alternative — needs X1b; not a completed feature", "শর্তাধীন বিকল্প — X1b লাগবে; সম্পন্ন ফিচার নয়"),
      zones: [
        { label: b("Untrusted: AI", "অবিশ্বস্ত: এআই"), col0: 0, col1: 0, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Safe + Zodiac modules (onchain)", "Safe + Zodiac মডিউল (অনচেইন)"), col0: 1, col1: 2, row0: 0, row1: 3, tone: "enforced" },
      ],
      nodes: [
        { id: "llm", kind: "agent", label: b("LLM agent (untrusted)", "LLM এজেন্ট (অবিশ্বস্ত)"), sub: b("Proposes payments; holds gas-only key", "পেমেন্ট প্রস্তাব করে; শুধু গ্যাস-কী"), col: 0, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner (offline key)", "মালিক (অফলাইন কী)"), sub: b("Grants roles; may skip a queued payment", "রোল দেয়; কিউ-করা পেমেন্ট স্কিপ করতে পারে"), col: 0, row: 3 },
        { id: "roles", kind: "contract", label: b("Zodiac Roles 2.1.1", "Zodiac Roles 2.1.1"), sub: b("Allowance, recipient conditions", "অ্যালাউয়েন্স, প্রাপক শর্ত"), col: 1, row: 0 },
        { id: "delay", kind: "contract", label: b("Zodiac Delay 1.1.1", "Zodiac Delay 1.1.1"), sub: b("Cooldown queue; owner skips by nonce", "কুলডাউন কিউ; মালিক nonce দিয়ে স্কিপ করে"), col: 1, row: 1 },
        { id: "t0", kind: "policy", label: b("T0 per-obligation allowance", "T0 প্রতি-দায় অ্যালাউয়েন্স"), sub: b("No refill; recipient EqualTo vendor", "রিফিল নেই; প্রাপক = বিক্রেতা"), col: 2, row: 0 },
        { id: "t1", kind: "policy", label: b("T1 period allowance", "T1 পিরিয়ড অ্যালাউয়েন্স"), sub: b("Refill period + recipient conditions", "রিফিল পিরিয়ড + প্রাপক শর্ত"), col: 2, row: 1 },
        { id: "t2", kind: "policy", label: b("T2 queued payment", "T2 কিউ-করা পেমেন্ট"), sub: b("Executes after cooldown unless skipped", "কুলডাউনের পর চলে, স্কিপ না হলে"), col: 2, row: 2 },
        { id: "safe", kind: "wallet", label: b("Safe (treasury)", "Safe (ট্রেজারি)"), sub: b("Reserve and operating funds", "রিজার্ভ ও অপারেটিং ফান্ড"), col: 3, row: 1 },
        { id: "chain", kind: "chain", label: b("Public EVM testnet", "পাবলিক EVM টেস্টনেট"), col: 4, row: 1 },
      ],
      edges: [
        { from: "llm", to: "roles", kind: "tx", label: b("exec within role", "রোলের মধ্যে exec") },
        { from: "llm", to: "delay", kind: "tx", label: b("queue above threshold", "সীমার ওপরে কিউ") },
        { from: "owner", to: "roles", kind: "auth", label: b("grant / revoke role", "রোল দেওয়া / বাতিল") },
        { from: "owner", to: "delay", kind: "auth", label: b("veto: skip by nonce", "ভেটো: nonce দিয়ে স্কিপ") },
        { from: "roles", to: "t0", kind: "auth" },
        { from: "roles", to: "t1", kind: "auth" },
        { from: "delay", to: "t2", kind: "auth" },
        { from: "t0", to: "safe", kind: "funds", label: b("pay vendor", "বিক্রেতাকে পরিশোধ") },
        { from: "t1", to: "safe", kind: "funds", label: b("pay in set", "সেটের মধ্যে পরিশোধ") },
        { from: "t2", to: "safe", kind: "funds", label: b("after cooldown", "কুলডাউনের পর") },
        { from: "safe", to: "chain", kind: "tx", label: b("settle", "সেটেল") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. Owner sets the authority", "১. মালিক কর্তৃত্ব নির্ধারণ করে"),
      body: b(
        "The owner signs one mandate per approved obligation (T0), one per envelope (T1), and one for reserve funding (T3). The wallet renders typed data; the AI's summary is shown separately as untrusted.",
        "মালিক প্রতিটি অনুমোদিত দায়ের (T0), প্রতিটি এনভেলপের (T1) ও রিজার্ভ ফান্ডিংয়ের (T3) জন্য একটি করে ম্যান্ডেটে স্বাক্ষর করে। ওয়ালেট টাইপড ডেটা দেখায়; এআই-এর সারাংশ আলাদাভাবে অবিশ্বস্ত হিসেবে দেখানো হয়।"
      ),
      detail: b("The owner key is offline and never in the runtime, prompts or logs.", "মালিক-কী অফলাইন; রানটাইম, প্রম্পট বা লগে কখনো থাকে না।"),
      src: "finalaudit.md §K",
      nodes: ["owner", "t0", "t1", "t3"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent reads the invoice (as data)", "২. এজেন্ট ইনভয়েস পড়ে (ডেটা হিসেবে)"),
      body: b(
        "The LLM extracts the vendor, amount and due date. Invoices, emails and API bodies are treated as data; no agent path creates authority.",
        "LLM বিক্রেতা, পরিমাণ ও নির্ধারিত তারিখ নিষ্কাশন করে। ইনভয়েস, ইমেইল ও API বডি ডেটা হিসেবে গণ্য; কোনো এজেন্ট-পথ কর্তৃত্ব তৈরি করে না।"
      ),
      src: "finalaudit.md §K (prompt injection)",
      nodes: ["inv", "llm"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("3. Agent matches and decides timing", "৩. এজেন্ট মেলায় ও সময় ঠিক করে"),
      body: b(
        "It matches the invoice to a mandate or envelope, chooses when to pay inside the window, and decides reserve top-ups. Whether the LLM does this better than a template parser is unmeasured (X3).",
        "এটি ইনভয়েসকে ম্যান্ডেট বা এনভেলপের সাথে মেলায়, উইন্ডোর মধ্যে কখন পরিশোধ করবে ঠিক করে এবং রিজার্ভ টপ-আপ সিদ্ধান্ত নেয়। টেমপ্লেট পার্সারের চেয়ে LLM ভালো করে কি না তা অপরিমিত (X3)।"
      ),
      src: "finalaudit.md §N, §Q",
      nodes: ["llm"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("4. Mandate caveats decide what is allowed", "৪. ম্যান্ডেট caveat ঠিক করে কী অনুমোদিত"),
      body: b(
        "Authority is not judged by the model. T0 allows one exact, one-use, windowed, redeemer-bound transfer; T1 allows period-capped transfers to a recipient set. Anything else has no mandate.",
        "কর্তৃত্ব মডেল বিচার করে না। T0 একটি সুনির্দিষ্ট, একবার-ব্যবহারযোগ্য, উইন্ডোযুক্ত, redeemer-বাউন্ড ট্রান্সফার অনুমতি দেয়; T1 প্রাপক-সেটে পিরিয়ড-ক্যাপযুক্ত ট্রান্সফার অনুমতি দেয়। বাকি সবকিছুর ম্যান্ডেট নেই।"
      ),
      src: "finalaudit.md §K tiers",
      nodes: ["t0", "t1", "t2", "t3"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("5. Redemption executes onchain", "৫. রিডেম্পশন অনচেইনে সম্পন্ন হয়"),
      body: b(
        "The agent redeems from the reserve (obligations) or operating account (envelopes). The transfer settles on a public EVM testnet and produces an explorer-verifiable hash.",
        "এজেন্ট রিজার্ভ (দায়) বা অপারেটিং অ্যাকাউন্ট (এনভেলপ) থেকে রিডিম করে। ট্রান্সফার পাবলিক EVM টেস্টনেটে সেটেল হয় এবং এক্সপ্লোরারে যাচাইযোগ্য হ্যাশ তৈরি করে।"
      ),
      src: "finalaudit.md §K, §R (X1)",
      nodes: ["reserve", "oper", "chain"],
      diagram: 0,
    },
    {
      control: "audit",
      title: b("6. Result is verified, not assumed", "৬. ফলাফল যাচাই করা হয়, ধরে নেওয়া হয় না"),
      body: b(
        "Receipts are confirmed on two RPCs through proposed, submitted, included and finalized states. Each hash is linked to its signed mandate hash and invoice digest.",
        "রিসিপ্ট দুটি RPC-তে proposed, submitted, included ও finalized অবস্থার মধ্য দিয়ে নিশ্চিত করা হয়। প্রতিটি হ্যাশ তার স্বাক্ষরিত ম্যান্ডেট হ্যাশ ও ইনভয়েস ডাইজেস্টের সাথে যুক্ত।"
      ),
      src: "finalaudit.md §K (verification, auditability)",
      nodes: ["chain", "cert"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("7. Unsafe or unmandated actions fail", "৭. অনিরাপদ বা ম্যান্ডেটহীন কাজ ব্যর্থ হয়"),
      body: b(
        "A wrong amount, recipient or token, an early or expired redemption, a wrong redeemer, a second redemption or a swapped address reverts. A vendor bill that would breach the reserve is refused (expected behaviour, untested).",
        "ভুল পরিমাণ, প্রাপক বা টোকেন, আগাম বা মেয়াদোত্তীর্ণ রিডেম্পশন, ভুল redeemer, দ্বিতীয় রিডেম্পশন বা বদলানো ঠিকানা রিভার্ট হয়। যে বিক্রেতা-বিল রিজার্ভ ভাঙত তা প্রত্যাখ্যাত হয় (প্রত্যাশিত আচরণ, অপরীক্ষিত)।"
      ),
      src: "finalaudit.md §R (X1 negative, adversarial)",
      nodes: ["t0", "t1", "llm", "t4"],
      diagram: 0,
    },
    {
      control: "owner",
      title: b("8. Owner can stop everything", "৮. মালিক সবকিছু থামাতে পারে"),
      body: b(
        "One owner transaction bumps the nonce and revokes every mandate; disableDelegation revokes a single one. The executor can also self-halt on an invariant breach (IDEA-075), but the owner's revoke is the human trigger.",
        "মালিকের একটি ট্রান্সজ্যাকশন nonce বাড়িয়ে সব ম্যান্ডেট বাতিল করে; disableDelegation একটি বাতিল করে। এক্সিকিউটর নিয়ম ভাঙলে নিজেও থামতে পারে (IDEA-075), তবে মালিকের revoke-ই মানব-ট্রিগার।"
      ),
      src: "finalaudit.md §K (recovery), §F",
      nodes: ["owner", "t4", "halt"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "documented",
    note: b(
      "This is the documented payroll-reserve demo (R001 F03; finalaudit.md §N). It has not been executed; every outcome below is the intended behaviour pending X1–X4.",
      "এটি নথিভুক্ত পে-রোল-রিজার্ভ ডেমো (R001 F03; finalaudit.md §N)। এটি এক্সিকিউট করা হয়নি; নিচের প্রতিটি ফলাফল X1–X4 পেন্ডিং অবস্থায় প্রত্যাশিত আচরণ।"
    ),
    situation: b(
      "A crypto SME or DAO treasury holds stablecoins in two accounts: a payroll reserve and an operating account. It owes two approved vendor invoices and has one in-terms envelope bill.",
      "একটি ক্রিপ্টো SME বা DAO ট্রেজারি দুটি অ্যাকাউন্টে স্টেবলকয়েন রাখে: পে-রোল রিজার্ভ ও অপারেটিং অ্যাকাউন্ট। এর দুটি অনুমোদিত বিক্রেতা-ইনভয়েস ও একটি শর্ত-মাফিক এনভেলপ বিল বকেয়া।"
    ),
    objective: b(
      "Pay what is owed on time without a human clicking per payment, never pay a fabricated invoice, and keep the payroll reserve intact.",
      "প্রতিটি পেমেন্টে মানুষের ক্লিক ছাড়া সময়মতো বকেয়া পরিশোধ, বানানো ইনভয়েস কখনো পরিশোধ না করা, এবং পে-রোল রিজার্ভ অক্ষুণ্ণ রাখা।"
    ),
    reasoning: b(
      "The agent extracts vendor, amount and date from each invoice and matches it to the owner-signed mandate or envelope it belongs to.",
      "এজেন্ট প্রতিটি ইনভয়েস থেকে বিক্রেতা, পরিমাণ ও তারিখ নিষ্কাশন করে এবং সেটি যে মালিক-স্বাক্ষরিত ম্যান্ডেট বা এনভেলপের, তার সাথে মেলায়।"
    ),
    decision: b(
      "Redeem the two T0 mandates inside their windows and pay the envelope bill from operating funds. For the bill that would breach the reserve, it has no mandate and must escalate.",
      "দুটি T0 ম্যান্ডেট তাদের উইন্ডোর মধ্যে রিডিম করা এবং এনভেলপ বিল অপারেটিং ফান্ড থেকে পরিশোধ করা। যে বিল রিজার্ভ ভাঙত তার ম্যান্ডেট নেই, তাই এসকালেট করতে হবে।"
    ),
    permission: b(
      "Each redemption passes only if amount, recipient, token, window, redeemer and use-count match the signed caveats. The envelope bill must stay inside its period cap and recipient set.",
      "প্রতিটি রিডেম্পশন তখনই পাস করে যখন পরিমাণ, প্রাপক, টোকেন, উইন্ডো, redeemer ও ব্যবহার-সংখ্যা স্বাক্ষরিত caveat-এর সাথে মেলে। এনভেলপ বিল পিরিয়ড-ক্যাপ ও প্রাপক-সেটের মধ্যে থাকতে হবে।"
    ),
    onchain: b(
      "Three transfers settle on a public EVM testnet. Attempts that break a caveat revert onchain and leave revert hashes or traces.",
      "তিনটি ট্রান্সফার পাবলিক EVM টেস্টনেটে সেটেল হয়। caveat ভাঙা প্রচেষ্টা অনচেইনে রিভার্ট হয় এবং রিভার্ট হ্যাশ বা ট্রেস রেখে যায়।"
    ),
    result: b(
      "Approved obligations are paid once to the right vendors; the reserve is untouched by the refused bill; the owner can revoke everything in one transaction.",
      "অনুমোদিত দায় সঠিক বিক্রেতাদের একবার পরিশোধ হয়; প্রত্যাখ্যাত বিল রিজার্ভ ছোঁয় না; মালিক এক ট্রান্সজ্যাকশনে সবকিছু বাতিল করতে পারে।"
    ),
    failure: b(
      "An injected “wallet changed” invoice or a duplicate payment request fails onchain. A red-team drain with the agent key must stay under the displayed bound.",
      "ইনজেক্ট করা “wallet changed” ইনভয়েস বা ডুপ্লিকেট পেমেন্ট অনুরোধ অনচেইনে ব্যর্থ হয়। এজেন্ট-কী দিয়ে রেড-টিম ড্রেন প্রদর্শিত সীমার নিচে থাকতে হবে।"
    ),
    evidence: b(
      "Explorer-verified hashes for positives, revert hashes or traces for negatives, signed delegation JSON, balances before and after, and a clean-checkout reproduction by a second team member.",
      "পজিটিভের জন্য এক্সপ্লোরার-যাচাইকৃত হ্যাশ, নেগেটিভের জন্য রিভার্ট হ্যাশ বা ট্রেস, স্বাক্ষরিত ডেলিগেশন JSON, আগে-পরে ব্যালেন্স, এবং দ্বিতীয় দলসদস্যের ক্লিন-চেকআউট পুনরুৎপাদন।"
    ),
    cases: [
      { key: "normal", basis: "documented", outcome: b("Two approved invoices and the in-terms envelope bill are paid to their real vendors.", "দুটি অনুমোদিত ইনভয়েস ও শর্ত-মাফিক এনভেলপ বিল আসল বিক্রেতাদের পরিশোধ হয়।") },
      { key: "insufficient", basis: "documented", outcome: b("A vendor bill that would breach the payroll reserve is refused.", "যে বিক্রেতা-বিল পে-রোল রিজার্ভ ভাঙত তা প্রত্যাখ্যাত হয়।") },
      { key: "unauthorized", basis: "expected", outcome: b("A wrong recipient, token or redeemer reverts; there is no mandate for it.", "ভুল প্রাপক, টোকেন বা redeemer রিভার্ট হয়; এর কোনো ম্যান্ডেট নেই।") },
      { key: "overlimit", basis: "expected", outcome: b("A payment over the period cap or a reserve-to-operating move reverts (X2 negative tests).", "পিরিয়ড-ক্যাপের ওপরে পেমেন্ট বা রিজার্ভ-থেকে-অপারেটিংয়ে সরানো রিভার্ট হয় (X2 নেগেটিভ টেস্ট)।") },
      { key: "duplicate", basis: "documented", outcome: b("A duplicate payment fails onchain: limitedCalls = 1 on T0.", "ডুপ্লিকেট পেমেন্ট অনচেইনে ব্যর্থ হয়: T0-তে limitedCalls = 1।") },
      { key: "malicious", basis: "documented", outcome: b("An injected “wallet changed” invoice fails onchain, because the recipient is pinned in the signed mandate.", "ইনজেক্ট করা “wallet changed” ইনভয়েস অনচেইনে ব্যর্থ হয়, কারণ স্বাক্ষরিত ম্যান্ডেটে প্রাপক নির্দিষ্ট করা।") },
      { key: "failure", basis: "expected", outcome: b("A stuck or crashed transaction never produces a duplicate payment or a false “finalized” status (X4, 0 duplicates required).", "আটকে যাওয়া বা ক্র্যাশ করা ট্রান্সজ্যাকশন কখনো ডুপ্লিকেট পেমেন্ট বা মিথ্যা “finalized” স্ট্যাটাস তৈরি করে না (X4, ০ ডুপ্লিকেট প্রয়োজন)।") },
    ],
  },
  competitors: [
    {
      name: "Request Finance",
      existing: b("Stablecoin approvals-to-payments workflow.", "স্টেবলকয়েন অনুমোদন-থেকে-পেমেন্ট ওয়ার্কফ্লো।"),
      similar: b("Pays vendor invoices after human approval.", "মানুষের অনুমোদনের পর বিক্রেতা-ইনভয়েস পরিশোধ করে।"),
      adds: b("An agent whose authority is bounded onchain, not by approval workflow.", "অনুমোদন-ওয়ার্কফ্লো নয়, অনচেইনে সীমাবদ্ধ কর্তৃত্বের এজেন্ট।"),
      solved: b("Payables workflow (kept as a workflow competitor, not an agent competitor).", "পেয়েবলস ওয়ার্কফ্লো (এজেন্ট প্রতিদ্বন্দ্বী নয়, ওয়ার্কফ্লো প্রতিদ্বন্দ্বী)।"),
      unverified: b("Full external search not done.", "পূর্ণ বাহ্যিক অনুসন্ধান করা হয়নি।"),
      url: "https://partners.circle.com/partner/request-finance",
      src: "finalaudit.md §J, A-20",
    },
    {
      name: "AgentsPay",
      existing: b("Bill-pay agents with offchain caps.", "অফচেইন ক্যাপসহ বিল-পে এজেন্ট।"),
      similar: b("Agent pays bills within limits.", "সীমার মধ্যে এজেন্ট বিল পরিশোধ করে।"),
      adds: b("Limits enforced by onchain contracts and a segregated reserve.", "অনচেইন কন্ট্রাক্ট ও বিচ্ছিন্ন রিজার্ভ দিয়ে প্রয়োগকৃত সীমা।"),
      solved: b("Offchain spending caps.", "অফচেইন খরচ-ক্যাপ।"),
      unverified: b("Whether a segregated reserve differentiates in practice.", "বাস্তবে বিচ্ছিন্ন রিজার্ভ আলাদা করে কি না।"),
      url: "https://agentspay.ai/use-cases/bill-pay-agents",
      src: "finalaudit.md §J",
    },
    {
      name: "Cleared",
      existing: b("An obligation registry; agent sessions are on its roadmap.", "দায়-রেজিস্ট্রি; এজেন্ট সেশন তাদের রোডম্যাপে।"),
      similar: b("Authenticates obligations before payment.", "পেমেন্টের আগে দায় প্রমাণীকরণ করে।"),
      adds: b("Mandate redemption and reserve/envelope tiers around the agent.", "এজেন্টকে ঘিরে ম্যান্ডেট রিডেম্পশন ও রিজার্ভ/এনভেলপ স্তর।"),
      solved: b("Registry of obligations.", "দায়ের রেজিস্ট্রি।"),
      unverified: b("Roadmap items may close the gap.", "রোডম্যাপের কাজ ব্যবধান বন্ধ করতে পারে।"),
      url: "https://clearedpay.xyz/cleared-whitepaper.pdf",
      src: "finalaudit.md §J",
    },
    {
      name: "PACE",
      existing: b("Binds approvals to exact bytes.", "অনুমোদনকে সুনির্দিষ্ট বাইটে বাঁধে।"),
      similar: b("Exact-approval binding, like T0 mandates.", "T0 ম্যান্ডেটের মতো সুনির্দিষ্ট-অনুমোদন বাঁধন।"),
      adds: b("Combined with envelopes, reserve and a loss bound.", "এনভেলপ, রিজার্ভ ও ক্ষতির সীমার সাথে সমন্বিত।"),
      solved: b("Exact approval binding.", "সুনির্দিষ্ট অনুমোদন বাঁধন।"),
      unverified: b("Deployed behaviour untested.", "ডিপ্লয়কৃত আচরণ অপরীক্ষিত।"),
      url: "https://arxiv.org/abs/2608.17220",
      src: "finalaudit.md §J",
    },
    {
      name: "MetaMask Smart Accounts Kit (caveats)",
      existing: b("Delegation caveats: exactExecution, limitedCalls, timestamp, redeemer, erc20PeriodTransfer, allowedCalldata, nonce.", "ডেলিগেশন caveat: exactExecution, limitedCalls, timestamp, redeemer, erc20PeriodTransfer, allowedCalldata, nonce।"),
      similar: b("This is the enforcement layer HYBRID-008 itself uses on route M.", "রুট M-এ HYBRID-008 নিজেই এই প্রয়োগ-স্তর ব্যবহার করে।"),
      adds: b("Composition of tiers and the loss bound; no new primitive.", "স্তরের সমন্বয় ও ক্ষতির সীমা; নতুন কোনো primitive নয়।"),
      solved: b("One-use, exact, expiring, redeemer-bound authority (verified existing capability, documentation level).", "একবার-ব্যবহার, সুনির্দিষ্ট, মেয়াদি, redeemer-বাউন্ড কর্তৃত্ব (যাচাইকৃত বিদ্যমান সক্ষমতা, ডকুমেন্টেশন-স্তর)।"),
      unverified: b("Deployed behaviour untested (X1).", "ডিপ্লয়কৃত আচরণ অপরীক্ষিত (X1)।"),
      url: "https://docs.metamask.io/smart-accounts-kit/reference/delegation/caveats/",
      src: "finalaudit.md §J",
    },
  ],
  advantages: [
    { text: b("Whole spending authority is owner-signed and enforced by existing contracts, not by the model.", "সম্পূর্ণ খরচের কর্তৃত্ব মালিক-স্বাক্ষরিত এবং মডেল নয়, বিদ্যমান কন্ট্রাক্টের মাধ্যমে প্রয়োগকৃত।"), src: "§K" },
    { text: b("Only candidate scoring well on asset management, transaction execution and risk control together.", "সম্পদ ব্যবস্থাপনা, লেনদেন সম্পাদন ও ঝুঁকি নিয়ন্ত্রণে একসাথে ভালো স্কোর পাওয়া একমাত্র প্রার্থী।"), src: "§N" },
    { text: b("Staged build: failure at one gate still leaves a submittable product (IDEA-001, then IDEA-073).", "ধাপে ধাপে নির্মাণ: এক গেটে ব্যর্থ হলেও জমা দেওয়ার মতো পণ্য থাকে (IDEA-001, তারপর IDEA-073)।"), src: "§T" },
    { text: b("Highest Layer B centre (78) and leads under all four weightings.", "সর্বোচ্চ Layer B কেন্দ্র (৭৮) এবং চারটি ওজনেই শীর্ষে।"), src: "§M, §P" },
    { text: b("A stated, formula-based loss bound for a stolen agent key (a design ceiling, not an audited guarantee).", "চুরি যাওয়া এজেন্ট-কী-র জন্য সূত্র-ভিত্তিক ক্ষতির সীমা (ডিজাইন সর্বোচ্চ, অডিটেড নিশ্চয়তা নয়)।"), src: "§K" },
  ],
  weaknesses: [
    { text: b("Tier composition, caveat semantics and the loss bound are untested (X1, X2).", "স্তরের সমন্বয়, caveat-এর অর্থ ও ক্ষতির সীমা অপরীক্ষিত (X1, X2)।"), src: "§L" },
    { text: b("Every mechanism already exists; novelty is integration-level (10–11 of 20 per this package).", "প্রতিটি কৌশল আগে থেকেই আছে; নতুনত্ব ইন্টিগ্রেশন-স্তরের (এই প্যাকেজে ২০-এর মধ্যে ১০–১১)।"), src: "§J, §Q" },
    { text: b("AI value over a deterministic template parser is unmeasured (X3).", "ডিটারমিনিস্টিক টেমপ্লেট পার্সারের চেয়ে এআই-এর মূল্য অপরিমিত (X3)।"), src: "§L" },
    { text: b("Route Z needs patched Zodiac modules and has a bypass history in Delay 1.1.0.", "রুট Z-এর জন্য প্যাচড Zodiac মডিউল দরকার এবং Delay 1.1.0-এ বাইপাসের ইতিহাস আছে।"), src: "§J, §K" },
    { text: b("If any assumption A1–A5 fails, every token in both accounts is exposed.", "A1–A5-এর কোনো অনুমান ব্যর্থ হলে উভয় অ্যাকাউন্টের সব টোকেন ঝুঁকিতে।"), src: "§K" },
    { text: b("Delegation framework audit scope not reviewed; “audited release tags” only.", "ডেলিগেশন ফ্রেমওয়ার্কের অডিট পরিসর পর্যালোচিত হয়নি; শুধু “audited release tags”।"), src: "§J, §Q" },
  ],
  innovation: [
    { cls: "existing", text: b("One-use, exact, expiring, redeemer-bound payment authority.", "একবার-ব্যবহার, সুনির্দিষ্ট, মেয়াদি, redeemer-বাউন্ড পেমেন্ট কর্তৃত্ব।"), experiment: "X1" },
    { cls: "contradicted", text: b("R010's “functional gap” for period-capped, recipient-restricted envelopes: contradicted by existing frameworks.", "পিরিয়ড-ক্যাপযুক্ত, প্রাপক-সীমিত এনভেলপের R010-এর “functional gap”: বিদ্যমান ফ্রেমওয়ার্ক দ্বারা খণ্ডিত।"), experiment: "X2" },
    { cls: "unverified", text: b("A segregated reserve that the agent can fund but never drain.", "বিচ্ছিন্ন রিজার্ভ, যেটি এজেন্ট ফান্ড করতে পারে কিন্তু কখনো খালি করতে পারে না।"), experiment: "X2, X6" },
    { cls: "unverified", text: b("A live conditional loss certificate tested by attackers.", "আক্রমণকারীদের দ্বারা পরীক্ষিত লাইভ শর্তাধীন ক্ষতি-সার্টিফিকেট।"), experiment: "X2, X6" },
    { cls: "unverified", text: b("AI improves invoice matching over rules (insufficient evidence).", "নিয়মের চেয়ে এআই ইনভয়েস মেলানো উন্নত করে (অপর্যাপ্ত প্রমাণ)।"), experiment: "X3" },
    { cls: "combined", text: b("The combination of mandates, envelopes, segregated reserve and veto lane is the only remaining differentiation.", "ম্যান্ডেট, এনভেলপ, বিচ্ছিন্ন রিজার্ভ ও ভেটো লেনের সমন্বয়ই একমাত্র অবশিষ্ট পার্থক্য।"), experiment: "X1, X2, X6" },
  ],
  innovationNeeds: b(
    "To support the strongest claim: X2 must show 0 non-obligation reserve outflow and no drain above the displayed bound, and X6 must yield a contribution statement of at most three cited sentences. If the claim already exists, it is reduced to integration quality.",
    "সবচেয়ে শক্তিশালী দাবি সমর্থন করতে: X2-কে ০ নন-অবলিগেশন রিজার্ভ আউটফ্লো ও প্রদর্শিত সীমার ওপরে কোনো ড্রেন নয় দেখাতে হবে, এবং X6-কে সর্বোচ্চ তিনটি উদ্ধৃত বাক্যের অবদান-বিবৃতি দিতে হবে। দাবি আগে থেকে থাকলে তা ইন্টিগ্রেশন-মানে নামিয়ে আনা হবে।"
  ),
  security: {
    aiCan: [
      { text: b("Read invoices and propose matches.", "ইনভয়েস পড়া ও মিল প্রস্তাব করা।") },
      { text: b("Choose timing inside a mandate's window.", "ম্যান্ডেটের উইন্ডোর মধ্যে সময় বেছে নেওয়া।") },
      { text: b("Reallocate within owner-set envelope totals and fund the reserve one-way.", "মালিক-নির্ধারিত এনভেলপ-মোটের মধ্যে পুনর্বণ্টন ও একমুখী রিজার্ভ ফান্ডিং।") },
      { text: b("Escalate anything without a mandate.", "ম্যান্ডেট ছাড়া যেকোনো কিছু এসকালেট করা।") },
    ],
    aiCannot: [
      { text: b("Create or widen any authority (no agent path creates authority).", "কোনো কর্তৃত্ব তৈরি বা বাড়ানো (কোনো এজেন্ট-পথ কর্তৃত্ব তৈরি করে না)।") },
      { text: b("Pay an unapproved recipient, token or amount.", "অননুমোদিত প্রাপক, টোকেন বা পরিমাণে পরিশোধ।") },
      { text: b("Drain the reserve into operating funds (top-ups are one-way).", "রিজার্ভ থেকে অপারেটিংয়ে টেনে নেওয়া (টপ-আপ একমুখী)।") },
      { text: b("Reach T4: grants, revocation, withdrawals, upgrades.", "T4-এ পৌঁছানো: গ্র্যান্ট, বাতিল, উইথড্রয়াল, আপগ্রেড।") },
    ],
    authorizes: b(
      "The owner, with an offline key, signs each mandate; the wallet renders typed data and the AI's summary is shown separately as untrusted.",
      "অফলাইন কী-সহ মালিক প্রতিটি ম্যান্ডেটে স্বাক্ষর করে; ওয়ালেট টাইপড ডেটা দেখায় এবং এআই-এর সারাংশ আলাদাভাবে অবিশ্বস্ত হিসেবে দেখানো হয়।"
    ),
    enforcedWhere: b(
      "In existing contracts: MetaMask caveats on route M, or Safe with Roles 2.1.1 and Delay 1.1.1 on route Z. No custom Solidity unless IDEA-086 is chosen.",
      "বিদ্যমান কন্ট্রাক্টে: রুট M-এ MetaMask caveat, বা রুট Z-এ Safe সহ Roles 2.1.1 ও Delay 1.1.1। IDEA-086 বেছে না নিলে কোনো কাস্টম Solidity নেই।"
    ),
    ifManipulated: b(
      "A fooled model still holds a gas-only, redeem-only key, so under A1–A5 nothing can be paid to an unapproved recipient. Reachable outflow is bounded by L_max.",
      "প্রতারিত মডেলের কাছেও শুধু গ্যাস ও রিডিম-সীমিত কী থাকে, তাই A1–A5 অনুমানে অননুমোদিত প্রাপককে কিছু দেওয়া যায় না। পৌঁছানো আউটফ্লো L_max দ্বারা সীমিত।"
    ),
    ifFails: b(
      "Reverted, expired and failed cases are recorded as such; stuck transactions use fee-bounded same-nonce replacement; status moves through proposed, submitted, included, finalized and is confirmed on two RPCs.",
      "রিভার্ট, মেয়াদোত্তীর্ণ ও ব্যর্থ কেস সেভাবেই রেকর্ড হয়; আটকে যাওয়া ট্রান্সজ্যাকশনে ফি-সীমিত একই-nonce প্রতিস্থাপন; অবস্থা proposed, submitted, included, finalized হয়ে দুটি RPC-তে নিশ্চিত হয়।"
    ),
    ownerStop: b(
      "One transaction: a nonce bump revokes all mandates; disableDelegation revokes one. Then revoke, verify, reconcile, rotate.",
      "একটি ট্রান্সজ্যাকশন: nonce bump সব ম্যান্ডেট বাতিল করে; disableDelegation একটি বাতিল করে। এরপর revoke, verify, reconcile, rotate।"
    ),
    exposure: b(
      "L_max = sum of unredeemed T0 amounts + (envelope cap × remaining periods) + unvetoed queued amount (route Z only) + gas tank G. A design ceiling, not an audited guarantee.",
      "L_max = অ-রিডিম T0 পরিমাণের যোগফল + (এনভেলপ ক্যাপ × অবশিষ্ট পিরিয়ড) + ভেটো-না-হওয়া কিউ পরিমাণ (শুধু রুট Z) + গ্যাস ট্যাংক G। ডিজাইন সর্বোচ্চ, অডিটেড নিশ্চয়তা নয়।"
    ),
    tested: b(
      "Documented only. X1–X4 are pending; no control above has been experimentally verified.",
      "শুধু নথিভুক্ত। X1–X4 পেন্ডিং; উপরের কোনো নিয়ন্ত্রণ পরীক্ষামূলকভাবে যাচাই করা হয়নি।"
    ),
  },
  roadmap: {
    mvp: [
      b("Reserve and operating accounts", "রিজার্ভ ও অপারেটিং অ্যাকাউন্ট"),
      b("Three obligations", "তিনটি দায়"),
      b("Two envelopes", "দুটি এনভেলপ"),
      b("One token, one chain", "একটি টোকেন, একটি চেইন"),
    ],
    optional: [
      b("Veto lane IDEA-080 (route Z; only if X1b passes)", "ভেটো লেন IDEA-080 (রুট Z; শুধু X1b পাস করলে)"),
      b("Surplus placement IDEA-074 (stretch)", "উদ্বৃত্ত বিনিয়োগ IDEA-074 (স্ট্রেচ)"),
      b("Temporal floor IDEA-086 (only if segregation is rejected; new code)", "টেম্পোরাল ফ্লোর IDEA-086 (বিচ্ছিন্নকরণ বাতিল হলেই; নতুন কোড)"),
    ],
    deferred: [
      b("Onchain AP2 mandate verifier IDEA-085", "অনচেইন AP2 ম্যান্ডেট ভেরিফায়ার IDEA-085"),
      b("Public red-team arena (stays a logged private session unless time allows)", "পাবলিক রেড-টিম অ্যারেনা (সময় না থাকলে লগড প্রাইভেট সেশন)"),
    ],
    dependencies: [
      b("Smart Accounts Kit, or Safe with Zodiac, on the chosen testnet", "নির্বাচিত টেস্টনেটে Smart Accounts Kit, বা Safe সহ Zodiac"),
      b("Test token and faucet", "টেস্ট টোকেন ও ফসেট"),
      b("Two RPC providers", "দুটি RPC প্রদানকারী"),
    ],
    blockers: [
      b("Toolkit not working within 6 working hours fails X1", "৬ কর্মঘণ্টার মধ্যে টুলকিট না চললে X1 ব্যর্থ"),
      b("Route Z needs a patched Zodiac mastercopy; verify the version first", "রুট Z-এর জন্য প্যাচড Zodiac mastercopy দরকার; আগে সংস্করণ যাচাই করুন"),
      b("Open organizer item O1: whether public-testnet hashes count", "খোলা আয়োজক-প্রশ্ন O1: পাবলিক-টেস্টনেট হ্যাশ গণ্য হবে কি না"),
    ],
    stages: [
      { label: b("X1 mandate enforcement", "X1 ম্যান্ডেট প্রয়োগ"), when: b("Due 14 Oct 23:59 Dhaka", "ডেডলাইন ১৪ অক্টোবর ২৩:৫৯ ঢাকা"), items: [b("Cheapest falsifier; 0.5–1 engineer-day", "সবচেয়ে সস্তা ফলসিফায়ার; ০.৫–১ ইঞ্জিনিয়ার-দিন")] },
      { label: b("Stage 1 uploaded", "Stage 1 আপলোড"), when: b("By 16 Oct 23:59 Dhaka", "১৬ অক্টোবর ২৩:৫৯ ঢাকার মধ্যে"), items: [b("Explorer-verified hashes (IDEA-001 floor)", "এক্সপ্লোরার-যাচাইকৃত হ্যাশ (IDEA-001 ফ্লোর)")] },
      { label: b("X2 gate for Stage 2", "Stage 2-এর জন্য X2 গেট"), when: b("Or Stage 2 cut by 17 Oct 23:59", "অথবা ১৭ অক্টোবর ২৩:৫৯-এ Stage 2 বাদ"), items: [b("0 reserve leakage; no drain above bound", "০ রিজার্ভ লিকেজ; সীমার ওপরে কোনো ড্রেন নেই")] },
      { label: b("Submission deadline", "জমার শেষ সময়"), when: b("20 Oct (no changes after)", "২০ অক্টোবর (পরে কোনো পরিবর্তন নয়)"), items: [b("Treat the 20 Oct submission as final", "২০ অক্টোবরের জমাকে চূড়ান্ত গণ্য করুন")] },
    ],
  },
  scores: {
    task: "31–36",
    security: "23–27",
    innovation: "19–25",
    centres: { value: 13, novelty: 11, security: 22, feasibility: 15, demo: 9, deps: 8 },
  },
  relatedIds: ["IDEA-073", "HYBRID-002R", "IDEA-001", "HYBRID-001"],
};
