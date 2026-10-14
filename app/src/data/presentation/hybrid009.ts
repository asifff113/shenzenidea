import { b, type CandidatePresentation } from "./types";

// HYBRID-009 — Obligation-reserved agent commerce.
// Source: finalaudit.md §F (R001 F22 restored), §I, §J, §K, §L, §M, §N, §Q, §S.

export const HYBRID_009: CandidatePresentation = {
  id: "HYBRID-009",
  role: b("Conditional hybrid (late; only if both payment paths pass)", "শর্তাধীন হাইব্রিড (দেরিতে; শুধু দুটি পেমেন্ট পথই পাস করলে)"),
  headline: b(
    "Let an agent buy services without eating the cash committed to obligations.",
    "প্রতিশ্রুত দায়ের নগদ না খেয়ে এজেন্টকে সার্ভিস কিনতে দিন।"
  ),
  keyPoint: b(
    "Uncertainty: it needs both the delegation path (X1) and the x402 path (X5) working by 15 Oct, so scope is the main risk; novelty is a source-backed but unverified combination.",
    "অনিশ্চয়তা: ১৫ অক্টোবরের মধ্যে ডেলিগেশন পথ (X1) ও x402 পথ (X5) দুটিই কাজ করতে হবে, তাই পরিসরই প্রধান ঝুঁকি; নতুনত্ব উৎস-সমর্থিত কিন্তু অযাচাইকৃত সমন্বয়।"
  ),
  quick: {
    problem: b(
      "An agent buys services but must preserve budget for mandatory commitments.",
      "এজেন্ট সার্ভিস কেনে কিন্তু বাধ্যতামূলক প্রতিশ্রুতির জন্য বাজেট সংরক্ষণ করতে হবে।"
    ),
    affected: b("Agent operators with recurring obligations.", "পুনরাবৃত্ত দায়সহ এজেন্ট অপারেটর।"),
    solution: b(
      "It is HYBRID-008 plus x402 service purchases paid only from operating funds. The reserve is a separate account that the purchasing path cannot reach.",
      "এটি HYBRID-008 এবং তার সাথে শুধু অপারেটিং ফান্ড থেকে পরিশোধিত x402 সার্ভিস-ক্রয়। রিজার্ভ আলাদা অ্যাকাউন্ট, যেখানে ক্রয়-পথ পৌঁছাতে পারে না।"
    ),
    versusNormal: b(
      "HYBRID-008's reserve had no competing spender. This gives the reserve a real one (R001 F22) and shows why it exists.",
      "HYBRID-008-এর রিজার্ভে কোনো প্রতিযোগী খরচকারী ছিল না। এটি রিজার্ভকে একটি বাস্তব খরচকারী দেয় (R001 F22) এবং রিজার্ভ কেন আছে তা দেখায়।"
    ),
    example: b(
      "One obligation, one envelope and one paid endpoint: a service purchase that would breach the reserve is refused.",
      "একটি দায়, একটি এনভেলপ ও একটি পেইড এন্ডপয়েন্ট: যে সার্ভিস-ক্রয় রিজার্ভ ভাঙত তা প্রত্যাখ্যাত হয়।"
    ),
    why: b(
      "Its upper ranges are high (task up to 36, innovation up to 25) and it is the superset of HYBRID-008 and HYBRID-002R, but the Layer A range 67–87 is wide.",
      "এর ঊর্ধ্ব-রেঞ্জ উচ্চ (টাস্ক ৩৬ পর্যন্ত, নতুনত্ব ২৫ পর্যন্ত) এবং এটি HYBRID-008 ও HYBRID-002R-এর সুপারসেট, তবে Layer A রেঞ্জ ৬৭–৮৭ বিস্তৃত।"
    ),
    risk: b(
      "Scope: it needs both payment paths working; feasibility is low to medium by 20 Oct and confidence is low.",
      "পরিসর: দুটি পেমেন্ট পথই কাজ করতে হবে; ২০ অক্টোবরের মধ্যে বাস্তবায়নযোগ্যতা নিম্ন থেকে মাঝারি এবং আত্মবিশ্বাস কম।"
    ),
    decisionMeaning: b(
      "CONDITIONAL GO, only if X1 and X5 both pass by 15 Oct and Stage 1 is uploaded. It cannot be validated independently in time.",
      "CONDITIONAL GO, শুধু X1 ও X5 উভয়ই ১৫ অক্টোবরের মধ্যে পাস করলে এবং Stage 1 আপলোড হলে। এটি সময়মতো স্বাধীনভাবে যাচাই করা যায় না।"
    ),
  },
  diagrams: [
    {
      id: "h009-union",
      title: b("Reserve-aware agent commerce (union of two paths)", "রিজার্ভ-সচেতন এজেন্ট কমার্স (দুটি পথের সমন্বয়)"),
      caption: b(
        "Interpretation of finalaudit.md §I: HYBRID-008 flows plus x402 settlements; security is the union of HYBRID-008 and HYBRID-002R controls. It depends on both paths working and neither has been tested.",
        "finalaudit.md §I-এর ব্যাখ্যা: HYBRID-008 প্রবাহ ও x402 সেটেলমেন্ট; নিরাপত্তা HYBRID-008 ও HYBRID-002R নিয়ন্ত্রণের সমন্বয়। এটি দুটি পথই কাজ করার ওপর নির্ভরশীল এবং কোনোটিই পরীক্ষিত নয়।"
      ),
      status: b("Conditional on X1 and X5 — design only", "X1 ও X5-এর ওপর শর্তাধীন — শুধু ডিজাইন"),
      zones: [
        { label: b("HYBRID-008 path (mandates, envelopes)", "HYBRID-008 পথ (ম্যান্ডেট, এনভেলপ)"), col0: 1, col1: 2, row0: 0, row1: 1, tone: "enforced" },
        { label: b("HYBRID-002R path (x402 purchase)", "HYBRID-002R পথ (x402 ক্রয়)"), col0: 1, col1: 3, row0: 2, row1: 2, tone: "owner" },
      ],
      nodes: [
        { id: "owner", kind: "owner", label: b("Owner (offline key)", "মালিক (অফলাইন কী)"), sub: b("Signs mandates and the purchase budget", "ম্যান্ডেট ও ক্রয়-বাজেটে স্বাক্ষর"), col: 0, row: 0 },
        { id: "agent", kind: "agent", label: b("Agent", "এজেন্ট"), sub: b("HYBRID-008 duties + buys services", "HYBRID-008-এর কাজ + সার্ভিস কেনা"), col: 0, row: 1 },
        { id: "t0", kind: "policy", label: b("T0 obligation mandates", "T0 দায়-ম্যান্ডেট"), sub: b("One-use, exact", "একবার-ব্যবহার, সুনির্দিষ্ট"), col: 1, row: 0 },
        { id: "reserve", kind: "wallet", label: b("Reserve account", "রিজার্ভ অ্যাকাউন্ট"), sub: b("Committed to obligations", "দায়ের জন্য প্রতিশ্রুত"), col: 2, row: 0 },
        { id: "t1", kind: "policy", label: b("T1 envelope", "T1 এনভেলপ"), sub: b("Period cap, recipient set", "পিরিয়ড-ক্যাপ, প্রাপক-সেট"), col: 1, row: 1 },
        { id: "oper", kind: "wallet", label: b("Operating account", "অপারেটিং অ্যাকাউন্ট"), sub: b("Only source of service spending", "সার্ভিস-খরচের একমাত্র উৎস"), col: 2, row: 1 },
        { id: "payer", kind: "signer", label: b("x402 payer", "x402 পেয়ার"), sub: b("Funded from operating only", "শুধু অপারেটিং থেকে ফান্ডেড"), col: 1, row: 2 },
        { id: "svc", kind: "external", label: b("Paid service endpoint", "পেইড সার্ভিস এন্ডপয়েন্ট"), sub: b("402 body is data", "৪০২ বডি ডেটা"), col: 2, row: 2 },
        { id: "chain", kind: "chain", label: b("Public EVM testnet", "পাবলিক EVM টেস্টনেট"), col: 3, row: 1 },
        { id: "refuse", kind: "audit", label: b("Purchase refused", "ক্রয় প্রত্যাখ্যাত"), sub: b("Would breach the reserve", "রিজার্ভ ভাঙত"), col: 3, row: 2 },
      ],
      edges: [
        { from: "owner", to: "t0", kind: "auth", label: b("signs", "স্বাক্ষর") },
        { from: "owner", to: "t1", kind: "auth" },
        { from: "owner", to: "payer", kind: "auth", label: b("purchase budget", "ক্রয়-বাজেট") },
        { from: "agent", to: "t0", kind: "tx", label: b("redeem", "রিডিম") },
        { from: "agent", to: "payer", kind: "tx", label: b("buy service", "সার্ভিস কেনা") },
        { from: "t0", to: "reserve", kind: "funds" },
        { from: "t1", to: "oper", kind: "funds" },
        { from: "oper", to: "payer", kind: "funds", label: b("funds purchases", "ক্রয় ফান্ড") },
        { from: "payer", to: "svc", kind: "tx", label: b("x402 payment", "x402 পেমেন্ট") },
        { from: "payer", to: "reserve", kind: "block", label: b("no path to reserve", "রিজার্ভে পথ নেই") },
        { from: "svc", to: "refuse", kind: "data", label: b("over budget?", "বাজেটের বেশি?") },
        { from: "oper", to: "chain", kind: "tx", label: b("settle", "সেটেল") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. Owner funds a reserve and an operating account", "১. মালিক রিজার্ভ ও অপারেটিং অ্যাকাউন্ট ফান্ড করে"),
      body: b(
        "Mandates cover obligations from the reserve; envelopes and the purchase budget draw only on the operating account.",
        "ম্যান্ডেট রিজার্ভ থেকে দায় কভার করে; এনভেলপ ও ক্রয়-বাজেট শুধু অপারেটিং অ্যাকাউন্ট থেকে নেয়।"
      ),
      src: "finalaudit.md §I",
      nodes: ["owner", "reserve", "oper"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent runs HYBRID-008 duties", "২. এজেন্ট HYBRID-008-এর কাজ করে"),
      body: b(
        "It matches invoices to mandates and envelopes, as in HYBRID-008.",
        "এটি HYBRID-008-এর মতোই ইনভয়েসকে ম্যান্ডেট ও এনভেলপের সাথে মেলায়।"
      ),
      nodes: ["agent", "t0", "t1"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("3. Agent decides to buy a service", "৩. এজেন্ট সার্ভিস কেনার সিদ্ধান্ত নেয়"),
      body: b(
        "It chooses a paid endpoint and an x402 purchase. The purchase is a discretionary spender competing with obligations (R001 F22).",
        "এটি একটি পেইড এন্ডপয়েন্ট ও x402 ক্রয় বেছে নেয়। ক্রয়টি দায়ের সাথে প্রতিযোগিতাকারী ঐচ্ছিক খরচকারী (R001 F22)।"
      ),
      src: "finalaudit.md §F, A-15",
      nodes: ["agent", "payer", "svc"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("4. The purchase path cannot reach the reserve", "৪. ক্রয়-পথ রিজার্ভে পৌঁছাতে পারে না"),
      body: b(
        "Because the payer is funded from operating funds only, a service purchase that would breach the reserve is refused. This depends on both X1 and X5 passing.",
        "পেয়ার শুধু অপারেটিং ফান্ড থেকে ফান্ডেড হওয়ায়, রিজার্ভ ভাঙত এমন সার্ভিস-ক্রয় প্রত্যাখ্যাত হয়। এটি X1 ও X5 উভয়ই পাস করার ওপর নির্ভর করে।"
      ),
      src: "finalaudit.md §I, §N",
      nodes: ["payer", "reserve", "refuse"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("5. Allowed payments settle", "৫. অনুমোদিত পেমেন্ট সেটেল হয়"),
      body: b(
        "Mandate redemptions and x402 settlements both settle on the testnet.",
        "ম্যান্ডেট রিডেম্পশন ও x402 সেটেলমেন্ট দুটিই টেস্টনেটে সেটেল হয়।"
      ),
      nodes: ["oper", "chain"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (one obligation, one envelope, one paid endpoint). No amounts are given; nothing has been executed.",
      "নথিভুক্ত MVP (একটি দায়, একটি এনভেলপ, একটি পেইড এন্ডপয়েন্ট) ঘিরে চিত্রণমূলক ওয়াকথ্রু। কোনো অঙ্ক দেওয়া হয়নি; কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b(
      "An agent operator has a recurring obligation, an envelope for routine spend, and wants the agent to buy a paid API.",
      "একজন এজেন্ট অপারেটরের একটি পুনরাবৃত্ত দায়, রুটিন খরচের একটি এনভেলপ আছে, এবং তিনি চান এজেন্ট একটি পেইড API কিনুক।"
    ),
    objective: b(
      "Buy the service without using money committed to the obligation.",
      "দায়ের জন্য প্রতিশ্রুত অর্থ ব্যবহার না করে সার্ভিস কেনা।"
    ),
    reasoning: b(
      "The agent weighs the purchase against the operating balance, not the reserve.",
      "এজেন্ট ক্রয়টিকে রিজার্ভ নয়, অপারেটিং ব্যালেন্সের বিপরীতে বিবেচনা করে।"
    ),
    decision: b("Buy only if the operating account can pay it.", "অপারেটিং অ্যাকাউন্ট দিতে পারলেই কেনা।"),
    permission: b(
      "The x402 payer holds only operating funds; the reserve is unreachable from the purchase path.",
      "x402 পেয়ারের কাছে শুধু অপারেটিং ফান্ড থাকে; ক্রয়-পথ থেকে রিজার্ভে পৌঁছানো যায় না।"
    ),
    onchain: b("An x402 settlement on the testnet for allowed purchases.", "অনুমোদিত ক্রয়ের জন্য টেস্টনেটে x402 সেটেলমেন্ট।"),
    result: b("The obligation stays funded; allowed purchases complete.", "দায় ফান্ডেড থাকে; অনুমোদিত ক্রয় সম্পন্ন হয়।"),
    failure: b(
      "A purchase that would breach the reserve is refused at the reserve floor.",
      "যে ক্রয় রিজার্ভ ভাঙত তা রিজার্ভ ফ্লোরে প্রত্যাখ্যাত হয়।"
    ),
    evidence: b(
      "X1 and X5 results for each path and a refused-purchase demonstration.",
      "প্রতিটি পথের X1 ও X5 ফলাফল এবং প্রত্যাখ্যাত-ক্রয়ের প্রদর্শনী।"
    ),
    cases: [
      { key: "normal", basis: "expected", outcome: b("A purchase within the operating balance completes.", "অপারেটিং ব্যালেন্সের মধ্যে ক্রয় সম্পন্ন হয়।") },
      { key: "insufficient", basis: "documented", outcome: b("A service purchase refused when it would breach the reserve.", "যে সার্ভিস-ক্রয় রিজার্ভ ভাঙত তা প্রত্যাখ্যাত।") },
      { key: "malicious", basis: "expected", outcome: b("A 402 that changes the payee is refused, as in HYBRID-002R.", "পেয়ি বদলানো ৪০২ প্রত্যাখ্যাত, HYBRID-002R-এর মতো।") },
    ],
  },
  competitors: [
    {
      name: "Nevermined",
      existing: b("Named in R001 as close prior art.", "R001-এ কাছাকাছি পূর্ববর্তী কাজ হিসেবে উল্লিখিত।"),
      similar: b("Agent payments for services.", "সার্ভিসের জন্য এজেন্ট পেমেন্ট।"),
      adds: b("Reserve protection against service spending.", "সার্ভিস-খরচের বিপরীতে রিজার্ভ সুরক্ষা।"),
      solved: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      unverified: b("R001 itself names Nevermined as close.", "R001 নিজেই Nevermined-কে কাছাকাছি বলেছে।"),
      src: "finalaudit.md §J",
    },
    {
      name: "Circle",
      existing: b("Named in R001 as close prior art.", "R001-এ কাছাকাছি পূর্ববর্তী কাজ হিসেবে উল্লিখিত।"),
      similar: b("Payment infrastructure for agent commerce.", "এজেন্ট কমার্সের জন্য পেমেন্ট অবকাঠামো।"),
      adds: b("Reserve-aware spending.", "রিজার্ভ-সচেতন খরচ।"),
      solved: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      unverified: b("R001 itself names Circle as close.", "R001 নিজেই Circle-কে কাছাকাছি বলেছে।"),
      src: "finalaudit.md §J",
    },
  ],
  advantages: [
    { text: b("Gives HYBRID-008's reserve a real competing spender (R001 F22).", "HYBRID-008-এর রিজার্ভকে বাস্তব প্রতিযোগী খরচকারী দেয় (R001 F22)।"), src: "§F" },
    { text: b("Superset of HYBRID-008 and HYBRID-002R.", "HYBRID-008 ও HYBRID-002R-এর সুপারসেট।"), src: "§F" },
    { text: b("Task range reaches 36 and innovation range 25 (upper ends), among the highest of the top five.", "টাস্ক রেঞ্জ ৩৬ ও নতুনত্ব রেঞ্জ ২৫ পর্যন্ত পৌঁছায় (ঊর্ধ্ব প্রান্ত), শীর্ষ পাঁচের মধ্যে সর্বোচ্চগুলোর একটি।"), src: "§M" },
  ],
  weaknesses: [
    { text: b("Needs both payment paths working by 15 Oct; feasibility low to medium by 20 Oct.", "১৫ অক্টোবরের মধ্যে দুটি পেমেন্ট পথই কাজ করতে হবে; ২০ অক্টোবরের মধ্যে বাস্তবায়নযোগ্যতা নিম্ন থেকে মাঝারি।"), src: "§I, §L" },
    { text: b("Confidence is low; cannot be validated independently in time.", "আত্মবিশ্বাস কম; সময়মতো স্বাধীনভাবে যাচাই করা যায় না।"), src: "§O" },
    { text: b("Underfunding priority between obligations and purchases is unspecified.", "দায় ও ক্রয়ের মধ্যে আন্ডারফান্ডিং-অগ্রাধিকার অনির্দিষ্ট।"), src: "A-15" },
  ],
  innovation: [
    { cls: "combined", text: b("Reserve plus x402 purchasing, restored from R001 F22.", "রিজার্ভ ও x402 ক্রয়, R001 F22 থেকে পুনরুদ্ধার।"), experiment: "X1, X5" },
    { cls: "unverified", text: b("Service spending that respects obligation reserves.", "দায়-রিজার্ভকে সম্মান করা সার্ভিস-খরচ।"), experiment: "X1 + X5" },
  ],
  innovationNeeds: b(
    "Both X1 and X5 must pass by 15 Oct and Stage 1 must be uploaded; only then can a reserve-refusal demonstration support the claim.",
    "১৫ অক্টোবরের মধ্যে X1 ও X5 দুটিই পাস করতে হবে এবং Stage 1 আপলোড হতে হবে; তবেই রিজার্ভ-প্রত্যাখ্যান প্রদর্শনী দাবিকে সমর্থন করতে পারে।"
  ),
  security: {
    aiCan: [
      { text: b("Everything HYBRID-008's agent can do within mandates and envelopes.", "ম্যান্ডেট ও এনভেলপের মধ্যে HYBRID-008-এর এজেন্ট যা পারে।") },
      { text: b("Choose a paid endpoint and initiate an x402 purchase within budget.", "পেইড এন্ডপয়েন্ট বাছা ও বাজেটের মধ্যে x402 ক্রয় শুরু।") },
    ],
    aiCannot: [
      { text: b("Spend reserve funds on services.", "সার্ভিসে রিজার্ভ ফান্ড খরচ।") },
      { text: b("Change a pinned payee or exceed the purchase budget.", "নির্দিষ্ট পেয়ি বদলানো বা ক্রয়-বাজেট ছাড়ানো।") },
    ],
    authorizes: b("The owner signs mandates, envelopes and the purchase budget.", "মালিক ম্যান্ডেট, এনভেলপ ও ক্রয়-বাজেটে স্বাক্ষর করে।"),
    enforcedWhere: b(
      "Union of HYBRID-008 and HYBRID-002R controls: account-enforced mandates and caps, plus payee pinning and a bounded payer.",
      "HYBRID-008 ও HYBRID-002R নিয়ন্ত্রণের সমন্বয়: অ্যাকাউন্ট-প্রয়োগকৃত ম্যান্ডেট ও ক্যাপ, এবং পেয়ি-পিনিং ও সীমিত পেয়ার।"
    ),
    ifManipulated: b(
      "A fooled agent still cannot reach reserve funds from the purchase path.",
      "প্রতারিত এজেন্টও ক্রয়-পথ থেকে রিজার্ভ ফান্ডে পৌঁছাতে পারে না।"
    ),
    ifFails: b("As HYBRID-008 and HYBRID-002R: revert, stop and reconcile.", "HYBRID-008 ও HYBRID-002R-এর মতো: রিভার্ট, থামা ও সমন্বয়।"),
    ownerStop: b("One-transaction nonce revoke plus stopping top-ups.", "এক-ট্রান্সজ্যাকশন nonce revoke এবং টপ-আপ বন্ধ।"),
    exposure: b("Union of both bounds.", "দুটি সীমার সমন্বয়।"),
    tested: b("Documented only; X1 and X5 are pending.", "শুধু নথিভুক্ত; X1 ও X5 পেন্ডিং।"),
  },
  roadmap: {
    mvp: [b("One obligation", "একটি দায়"), b("One envelope", "একটি এনভেলপ"), b("One paid endpoint", "একটি পেইড এন্ডপয়েন্ট")],
    optional: [],
    deferred: [b("Underfunding priority rules", "আন্ডারফান্ডিং অগ্রাধিকার নিয়ম")],
    dependencies: [b("Both payment paths: the delegation family and x402", "দুটি পেমেন্ট পথ: ডেলিগেশন-পরিবার ও x402")],
    blockers: [b("X1 and X5 must both pass by 15 Oct", "১৫ অক্টোবরের মধ্যে X1 ও X5 দুটিই পাস করতে হবে")],
    stages: [
      { label: b("X1 and X5 pass", "X1 ও X5 পাস"), when: b("By 15 Oct", "১৫ অক্টোবরের মধ্যে"), items: [b("Prerequisite for any work", "যেকোনো কাজের পূর্বশর্ত")] },
      { label: b("Stage 1 uploaded", "Stage 1 আপলোড"), items: [b("Then build the reserve-refusal demo", "তারপর রিজার্ভ-প্রত্যাখ্যান ডেমো তৈরি")] },
    ],
  },
  scores: {
    task: "28–36",
    security: "20–26",
    innovation: "19–25",
    centres: { value: 13, novelty: 12, security: 19, feasibility: 11, demo: 9, deps: 6 },
  },
  relatedIds: ["HYBRID-008", "HYBRID-002R"],
};
