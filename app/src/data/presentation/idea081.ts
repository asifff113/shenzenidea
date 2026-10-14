import { b, type CandidatePresentation } from "./types";

// IDEA-081 — Attestation-gated escrow.
// Source: finalaudit.md §B (EAS testnet unconfirmed), §F (restored from R010 C03 / R012 C02),
// §I, §J, §L, §M, §S.

export const IDEA_081: CandidatePresentation = {
  id: "IDEA-081",
  role: b("Restored concept — NO-GO this round", "পুনরুদ্ধারকৃত ধারণা — এই রাউন্ডে NO-GO"),
  headline: b(
    "Release escrow only when the agent's verdict AND the counterparty's attestation or acceptance both hold.",
    "এসক্রো কেবল তখনই ছাড়া, যখন এজেন্টের রায় এবং কাউন্টারপার্টির প্রত্যয়ন বা গ্রহণ — দুটিই বজায়।"
  ),
  keyPoint: b(
    "A strong concept R010 called its most original, blocked because a bootstrappable attestation source is unavailable by 20 Oct.",
    "একটি শক্তিশালী ধারণা, যাকে R010 সবচেয়ে মৌলিক বলেছে, কিন্তু ২০ অক্টোবরের মধ্যে বুটস্ট্র্যাপযোগ্য প্রত্যয়ন-উৎস না থাকায় আটকে আছে।"
  ),
  quick: {
    problem: b("Escrow is released on one party's say-so.", "এসক্রো এক পক্ষের কথায় ছাড়া হয়।"),
    affected: b("Agent and freelance buyers.", "এজেন্ট ও ফ্রিল্যান্স ক্রেতা।"),
    solution: b(
      "Funds sit in an escrow contract. Release requires two things together: the agent's verdict on the deliverable AND a counterparty attestation or acceptance. If neither condition arrives before expiry, the funds are refunded.",
      "ফান্ড এসক্রো কন্ট্রাক্টে থাকে। ছাড়ার জন্য একসাথে দুটি শর্ত লাগে: ডেলিভারেবল সম্পর্কে এজেন্টের রায় এবং কাউন্টারপার্টির প্রত্যয়ন বা গ্রহণ। মেয়াদ শেষের আগে শর্ত না এলে ফান্ড ফেরত যায়।"
    ),
    versusNormal: b(
      "A generic escrow lets one party or one model decide. Here a conjunctive condition means a fooled agent alone cannot release funds, and a one-sided claim alone cannot either.",
      "সাধারণ এসক্রোতে এক পক্ষ বা এক মডেল সিদ্ধান্ত নেয়। এখানে সংযোগমূলক শর্তের অর্থ প্রতারিত এজেন্ট একা ফান্ড ছাড়তে পারে না, একতরফা দাবিও পারে না।"
    ),
    example: b(
      "One milestone and one attestation: there is no release without both conditions.",
      "একটি মাইলস্টোন ও একটি প্রত্যয়ন: দুটি শর্ত ছাড়া কোনো ছাড় নেই।"
    ),
    why: b(
      "R010 named it the most original idea and the conjunctive gate is a clear, demonstrable mechanism (novelty centre 14 of 20).",
      "R010 একে সবচেয়ে মৌলিক ধারণা বলেছে এবং সংযোগমূলক গেট একটি পরিষ্কার, প্রদর্শনযোগ্য কৌশল (নতুনত্ব-কেন্দ্র ২০-এর মধ্যে ১৪)।"
    ),
    risk: b(
      "The attestation source cannot be bootstrapped in time (R010 L04088); Ethereum Attestation Service testnet deployments were not confirmed; feasibility is low by 20 Oct.",
      "প্রত্যয়ন-উৎস সময়মতো বুটস্ট্র্যাপ করা যায় না (R010 L04088); Ethereum Attestation Service টেস্টনেট ডিপ্লয়মেন্ট নিশ্চিত হয়নি; ২০ অক্টোবরের মধ্যে বাস্তবায়নযোগ্যতা কম।"
    ),
    decisionMeaning: b(
      "NO-GO (gate: FAIL this round): the concept is strong but the attestation dependency blocks it; it is not presented as an approved implementation.",
      "NO-GO (গেট: এই রাউন্ডে FAIL): ধারণা শক্তিশালী কিন্তু প্রত্যয়ন-নির্ভরতা একে আটকে রেখেছে; এটি অনুমোদিত বাস্তবায়ন হিসেবে উপস্থাপিত নয়।"
    ),
  },
  diagrams: [
    {
      id: "i081-escrow",
      title: b("Attestation-gated escrow — the AND condition", "প্রত্যয়ন-গেটেড এসক্রো — AND শর্ত"),
      caption: b(
        "Interpretation of the IDEA-081 record: fund, attest, release or refund. Release requires the verdict AND the counterparty attestation or acceptance. The attestation source is an unresolved dependency and is drawn as such.",
        "IDEA-081 রেকর্ডের ব্যাখ্যা: ফান্ড, প্রত্যয়ন, ছাড় বা ফেরত। ছাড়ার জন্য রায় এবং কাউন্টারপার্টির প্রত্যয়ন বা গ্রহণ — দুটিই লাগে। প্রত্যয়ন-উৎস অমীমাংসিত নির্ভরতা এবং সেভাবেই আঁকা।"
      ),
      status: b("Failed the gate this round — dependency unresolved", "এই রাউন্ডে গেটে ব্যর্থ — নির্ভরতা অমীমাংসিত"),
      zones: [
        { label: b("Untrusted: AI verdict", "অবিশ্বস্ত: এআই রায়"), col0: 1, col1: 1, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Escrow condition (onchain)", "এসক্রো শর্ত (অনচেইন)"), col0: 2, col1: 3, row0: 1, row1: 1, tone: "enforced" },
      ],
      nodes: [
        { id: "buyer", kind: "owner", label: b("Buyer", "ক্রেতা"), sub: b("Funds the escrow", "এসক্রো ফান্ড করে"), col: 3, row: 0 },
        { id: "seller", kind: "external", label: b("Seller / counterparty", "বিক্রেতা / কাউন্টারপার্টি"), sub: b("Delivers; may attest or accept", "ডেলিভারি দেয়; প্রত্যয়ন বা গ্রহণ করতে পারে"), col: 0, row: 2 },
        { id: "agent", kind: "agent", label: b("Agent verdict", "এজেন্টের রায়"), sub: b("Assesses the deliverable", "ডেলিভারেবল মূল্যায়ন করে"), col: 1, row: 0 },
        { id: "att", kind: "audit", label: b("Attestation or acceptance", "প্রত্যয়ন বা গ্রহণ"), sub: b("Source unresolved by 20 Oct (R010 L04088)", "২০ অক্টোবরের মধ্যে উৎস অমীমাংসিত (R010 L04088)"), col: 1, row: 2 },
        { id: "and", kind: "policy", label: b("AND gate", "AND গেট"), sub: b("Verdict AND attestation/acceptance", "রায় এবং প্রত্যয়ন/গ্রহণ"), col: 2, row: 1 },
        { id: "escrow", kind: "contract", label: b("Escrow contract", "এসক্রো কন্ট্রাক্ট"), sub: b("Holds funds · expiry refund", "ফান্ড ধরে · মেয়াদে ফেরত"), col: 3, row: 1 },
        { id: "rel", kind: "wallet", label: b("Release to seller", "বিক্রেতাকে ছাড়"), sub: b("Only if both hold", "শুধু দুটিই বজায় থাকলে"), col: 4, row: 0 },
        { id: "ref", kind: "wallet", label: b("Refund to buyer", "ক্রেতাকে ফেরত"), sub: b("On expiry", "মেয়াদ শেষে"), col: 4, row: 2 },
      ],
      edges: [
        { from: "buyer", to: "escrow", kind: "funds", label: b("fund", "ফান্ড") },
        { from: "seller", to: "att", kind: "data", label: b("deliver / accept", "ডেলিভারি / গ্রহণ") },
        { from: "agent", to: "and", kind: "auth", label: b("verdict", "রায়") },
        { from: "att", to: "and", kind: "auth", label: b("attestation", "প্রত্যয়ন") },
        { from: "and", to: "escrow", kind: "auth", label: b("both true", "দুটিই সত্য") },
        { from: "escrow", to: "rel", kind: "funds", label: b("release", "ছাড়") },
        { from: "escrow", to: "ref", kind: "funds", label: b("expiry refund", "মেয়াদে ফেরত") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. The buyer funds the escrow", "১. ক্রেতা এসক্রো ফান্ড করে"),
      body: b("Funds are held by the escrow contract for one milestone.", "একটি মাইলস্টোনের জন্য ফান্ড এসক্রো কন্ট্রাক্টে থাকে।"),
      nodes: ["buyer", "escrow"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. The agent assesses the deliverable", "২. এজেন্ট ডেলিভারেবল মূল্যায়ন করে"),
      body: b(
        "It produces a verdict, but a verdict alone can never release funds.",
        "এটি একটি রায় দেয়, কিন্তু রায় একা কখনো ফান্ড ছাড়তে পারে না।"
      ),
      src: "record (agent responsibilities)",
      nodes: ["agent", "and"],
      diagram: 0,
    },
    {
      control: "external",
      title: b("3. The counterparty attests or accepts", "৩. কাউন্টারপার্টি প্রত্যয়ন বা গ্রহণ করে"),
      body: b(
        "A signed counterparty attestation or acceptance is needed. A source for it that can be bootstrapped is the unresolved dependency.",
        "কাউন্টারপার্টির স্বাক্ষরিত প্রত্যয়ন বা গ্রহণ দরকার। বুটস্ট্র্যাপযোগ্য উৎস না থাকাই অমীমাংসিত নির্ভরতা।"
      ),
      src: "finalaudit.md §F, §L",
      nodes: ["seller", "att", "and"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("4. The AND condition decides release", "৪. AND শর্ত ছাড়া ঠিক করে"),
      body: b(
        "Release happens only if the verdict and the attestation/acceptance are both present (conjunctive release).",
        "রায় এবং প্রত্যয়ন/গ্রহণ উভয়ই থাকলেই কেবল ছাড় হয় (সংযোগমূলক ছাড়)।"
      ),
      src: "record (security model)",
      nodes: ["and", "escrow"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("5. Release, or refund on expiry", "৫. ছাড়, বা মেয়াদে ফেরত"),
      body: b(
        "Funds go to the seller if both hold; otherwise they are refunded to the buyer on expiry.",
        "দুটিই বজায় থাকলে ফান্ড বিক্রেতার কাছে যায়; নইলে মেয়াদ শেষে ক্রেতাকে ফেরত যায়।"
      ),
      nodes: ["escrow", "rel", "ref"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough around the documented MVP (one milestone, one attestation; no release without both conditions). No amounts are given; nothing has been executed and no attestation service is assumed available.",
      "নথিভুক্ত MVP (একটি মাইলস্টোন, একটি প্রত্যয়ন; দুটি শর্ত ছাড়া ছাড় নেই) ঘিরে চিত্রণমূলক ওয়াকথ্রু। কোনো অঙ্ক দেওয়া নেই; কিছুই এক্সিকিউট করা হয়নি এবং কোনো প্রত্যয়ন-সেবা উপলব্ধ ধরা হয়নি।"
    ),
    situation: b(
      "An agent or freelance buyer funds one milestone in escrow; a seller delivers work.",
      "একজন এজেন্ট বা ফ্রিল্যান্স ক্রেতা এক মাইলস্টোনের জন্য এসক্রোতে ফান্ড দেয়; বিক্রেতা কাজ ডেলিভার করে।"
    ),
    objective: b(
      "Pay the seller only when delivery is genuinely complete, without trusting either side alone.",
      "কোনো এক পক্ষকে একা বিশ্বাস না করে, ডেলিভারি সত্যিই সম্পূর্ণ হলে তবেই বিক্রেতাকে পরিশোধ।"
    ),
    reasoning: b("The agent assesses whether the deliverable meets the milestone.", "এজেন্ট ডেলিভারেবল মাইলস্টোন পূরণ করে কি না মূল্যায়ন করে।"),
    decision: b("Issue a verdict; wait for the counterparty attestation or acceptance.", "রায় দেওয়া; কাউন্টারপার্টির প্রত্যয়ন বা গ্রহণের অপেক্ষা।"),
    permission: b("The escrow releases only if the verdict AND the attestation/acceptance are both present.", "রায় এবং প্রত্যয়ন/গ্রহণ উভয়ই থাকলেই কেবল এসক্রো ছাড়ে।"),
    onchain: b("Fund, attest, then release or refund.", "ফান্ড, প্রত্যয়ন, তারপর ছাড় বা ফেরত।"),
    result: b("Funds reach the seller only after both conditions hold.", "দুটি শর্ত বজায় থাকার পরই কেবল ফান্ড বিক্রেতার কাছে পৌঁছায়।"),
    failure: b(
      "If either condition is missing at expiry, the funds are refunded to the buyer.",
      "মেয়াদ শেষে কোনো একটি শর্ত না থাকলে ফান্ড ক্রেতাকে ফেরত যায়।"
    ),
    evidence: b(
      "Not specified in the provided research materials beyond the demo statement; no experiment is assigned.",
      "ডেমো-বিবৃতির বাইরে প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই; কোনো পরীক্ষা নির্ধারিত নেই।"
    ),
    cases: [
      { key: "normal", basis: "expected", outcome: b("Verdict and attestation both present: funds are released.", "রায় ও প্রত্যয়ন উভয়ই আছে: ফান্ড ছাড়া হয়।") },
      { key: "unauthorized", basis: "documented", outcome: b("No release without both conditions.", "দুটি শর্ত ছাড়া কোনো ছাড় নেই।") },
      { key: "malicious", basis: "expected", outcome: b("A fooled agent verdict alone cannot release; the attestation condition is still required.", "প্রতারিত এজেন্টের রায় একা ছাড়তে পারে না; প্রত্যয়ন-শর্ত তবুও প্রয়োজন।") },
      { key: "failure", basis: "documented", outcome: b("Expiry refund if the conditions are not met.", "শর্ত পূরণ না হলে মেয়াদে ফেরত।") },
    ],
  },
  competitors: [
    {
      name: "ERC-8183 · Virtuals ACP · Trustless Work",
      existing: b("Named in the record as the closest competitors.", "রেকর্ডে নিকটতম প্রতিদ্বন্দ্বী হিসেবে উল্লিখিত।"),
      similar: b("Escrow-style settlement for agent or freelance work.", "এজেন্ট বা ফ্রিল্যান্স কাজের জন্য এসক্রো-ধরনের সেটেলমেন্ট।"),
      adds: b("A conjunctive release condition: verdict AND attestation (plausible, unverified).", "সংযোগমূলক ছাড়-শর্ত: রায় এবং প্রত্যয়ন (সম্ভাব্য, অযাচাইকৃত)।"),
      solved: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
      unverified: b("Whether the AND condition differentiates in practice.", "AND শর্ত বাস্তবে আলাদা করে কি না।"),
      src: "finalaudit.md §I",
    },
  ],
  advantages: [
    { text: b("R010 called it its most original idea (novelty centre 14 of 20).", "R010 একে নিজের সবচেয়ে মৌলিক ধারণা বলেছে (নতুনত্ব-কেন্দ্র ২০-এর মধ্যে ১৪)।"), src: "§F, §M" },
    { text: b("A clear conjunctive mechanism with an expiry refund.", "মেয়াদে ফেরতসহ পরিষ্কার সংযোগমূলক কৌশল।"), src: "record" },
    { text: b("Maximum loss is the escrow amount.", "সর্বোচ্চ ক্ষতি এসক্রো অঙ্ক।"), src: "§L" },
  ],
  weaknesses: [
    { text: b("Attestation source cannot be bootstrapped by 20 Oct (R010 L04088).", "২০ অক্টোবরের মধ্যে প্রত্যয়ন-উৎস বুটস্ট্র্যাপ করা যায় না (R010 L04088)।"), src: "§L" },
    { text: b("Ethereum Attestation Service testnet deployments not confirmed.", "Ethereum Attestation Service টেস্টনেট ডিপ্লয়মেন্ট নিশ্চিত নয়।"), src: "§B" },
    { text: b("Feasibility low by 20 Oct; low evidence confidence.", "২০ অক্টোবরের মধ্যে বাস্তবায়নযোগ্যতা কম; কম প্রমাণ-আত্মবিশ্বাস।"), src: "record" },
    { text: b("Weak Layer B feasibility (9 of 20) and dependencies (5 of 10).", "দুর্বল Layer B বাস্তবায়নযোগ্যতা (২০-এর মধ্যে ৯) ও নির্ভরতা (১০-এর মধ্যে ৫)।"), src: "§M" },
  ],
  innovation: [
    { cls: "existing", text: b("Escrow with attestation exists in adjacent standards (ERC-8183, Virtuals ACP, Trustless Work).", "প্রত্যয়নসহ এসক্রো সংলগ্ন মানদণ্ডে আছে (ERC-8183, Virtuals ACP, Trustless Work)।") },
    { cls: "unverified", text: b("A conjunctive verdict-AND-attestation gate; R010's most original idea.", "সংযোগমূলক রায়-এবং-প্রত্যয়ন গেট; R010-এর সবচেয়ে মৌলিক ধারণা।") },
  ],
  innovationNeeds: b(
    "A working, bootstrappable attestation source on the chosen testnet, then a demonstration that there is no release without both conditions.",
    "নির্বাচিত টেস্টনেটে একটি কার্যকর, বুটস্ট্র্যাপযোগ্য প্রত্যয়ন-উৎস, তারপর দুটি শর্ত ছাড়া কোনো ছাড় নেই তার প্রদর্শনী।"
  ),
  security: {
    aiCan: [{ text: b("Assess the deliverable and issue a verdict.", "ডেলিভারেবল মূল্যায়ন করে রায় দেওয়া।") }],
    aiCannot: [
      { text: b("Release funds on its verdict alone.", "নিজের রায়ের ভিত্তিতে একা ফান্ড ছাড়া।") },
      { text: b("Produce the counterparty attestation or acceptance.", "কাউন্টারপার্টির প্রত্যয়ন বা গ্রহণ তৈরি করা।") },
    ],
    authorizes: b("The buyer funds the escrow; the counterparty attests or accepts.", "ক্রেতা এসক্রো ফান্ড করে; কাউন্টারপার্টি প্রত্যয়ন বা গ্রহণ করে।"),
    enforcedWhere: b("In the escrow contract: conjunctive release and expiry refund.", "এসক্রো কন্ট্রাক্টে: সংযোগমূলক ছাড় ও মেয়াদে ফেরত।"),
    ifManipulated: b(
      "A manipulated verdict still needs the attestation to release.",
      "প্রতারিত রায়ও ছাড়ার জন্য প্রত্যয়ন লাগে।"
    ),
    ifFails: b("Funds are refunded on expiry.", "মেয়াদ শেষে ফান্ড ফেরত যায়।"),
    ownerStop: b("Not specified in the provided research materials.", "প্রদত্ত গবেষণা-উপকরণে নির্দিষ্ট করা নেই।"),
    exposure: b("The escrow amount.", "এসক্রো অঙ্ক।"),
    tested: b("Documented only; no experiment is assigned.", "শুধু নথিভুক্ত; কোনো পরীক্ষা নির্ধারিত নেই।"),
  },
  roadmap: {
    mvp: [b("One milestone", "একটি মাইলস্টোন"), b("One attestation", "একটি প্রত্যয়ন")],
    optional: [],
    deferred: [b("Entire concept this round: NO-GO", "এই রাউন্ডে পুরো ধারণা: NO-GO")],
    dependencies: [b("A bootstrappable attestation source (R010 L04088)", "বুটস্ট্র্যাপযোগ্য প্রত্যয়ন-উৎস (R010 L04088)")],
    blockers: [
      b("Attestation source unavailable by 20 Oct", "২০ অক্টোবরের মধ্যে প্রত্যয়ন-উৎস অনুপলব্ধ"),
      b("EAS testnet deployments unconfirmed", "EAS টেস্টনেট ডিপ্লয়মেন্ট অনিশ্চিত"),
    ],
  },
  scores: {
    task: "20–30",
    security: "16–23",
    innovation: "19–26",
    centres: { value: 11, novelty: 14, security: 16, feasibility: 9, demo: 8, deps: 5 },
  },
  relatedIds: ["HYBRID-003", "IDEA-033"],
};
