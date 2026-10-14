// Bengali translations of UI labels, headings, and key research terms.
// Translations are faithful, not creative. Candidate IDs, numbers, formulas,
// experiment IDs, and source citations remain in English. Technical English
// terms (GO, CONDITIONAL GO, NO-GO, etc.) are kept alongside the Bengali.
//
// Source: finalaudit.md, master_inventory.csv.
// This is a translation layer; it does not replace the original English.

export const BN = {
  // App
  appTitle: "এজেন্ট ওয়ালেট — আইডিয়া এক্সপ্লোরার",
  appSubtitle: "২০২৬ শেনজেন আন্তর্জাতিক ফিনটেক প্রতিযোগিতা",
  researchSnapshot: "গবেষণা স্ন্যাপশট",
  finalResearchPackage: "চূড়ান্ত গবেষণা প্যাকেজ",

  // Navigation
  navOverview: "সারসংক্ষেপ",
  navExplorer: "আইডিয়া এক্সপ্লোরার",
  navCompare: "তুলনা",
  navSecurity: "নিরাপত্তা ও যাচাই",
  navHistory: "সিদ্ধান্তের ইতিহাস",
  navLibrary: "সম্পূর্ণ গবেষণা গ্রন্থাগার",
  navPresent: "উপস্থাপনা মোড",

  // Decision statuses
  go: "GO",
  conditionalGo: "CONDITIONAL GO",
  noGo: "NO-GO",
  pass: "PASS",
  conditionalPass: "CONDITIONAL PASS",
  fail: "FAIL",

  // Common labels
  rank: "র‍্যাঙ্ক",
  layerB: "লেয়ার B",
  layerARange: "লেয়ার A পরিসীমা",
  gate: "গেট",
  decision: "সিদ্ধান্ত",
  sources: "উৎস",
  experiment: "পরীক্ষা",
  experiments: "পরীক্ষাসমূহ",
  status: "অবস্থা",
  pending: "মুলতবি",
  servedBy: "যাদের জন্য",
  due: "বাকি",
  hypothesis: "প্রকল্পনা",
  acceptance: "গ্রহণযোগ্যতা",
  failure: "ব্যর্থতার শর্ত",
  evidence: "প্রমাণ",
  exposure: "আর্থিক ঝুঁকি",
  effort: "প্রচেষ্টা",
  implications: "ফলাফলের প্রভাব",

  // Phase / process
  processTitle: "গবেষণা প্রক্রিয়া",
  processSubtitle:
    "স্বতন্ত্র গবেষণা → সংশ্লেষণ → স্বতন্ত্র নিরীক্ষা → নিরীক্ষা-পরবর্তী রায়দান → প্রোটোটাইপ যাচাই → চূড়ান্ত নির্বাচন",

  // Idea explorer
  quick: "দ্রুত বোঝা",
  technical: "প্রযুক্তিগত গভীর ডাইভ",
  whatIs: "এই ধারণাটি কী?",
  whyMatters: "এই সমস্যাটি কেন গুরুত্বপূর্ণ?",
  howAgent: "এজেন্ট কীভাবে কাজ করে?",
  whyBlockchain: "ব্লকচেইন কেন?",
  competitors: "বিদ্যমান প্রতিযোগী ও পূর্বসূত্র",
  whyBetter: "এই ধারণা কেন ভালো হতে পারে?",
  weaknesses: "দুর্বলতা ও সীমাবদ্ধতা",
  implementation: "প্রযুক্তিগত বাস্তবায়ন",
  securityArchitecture: "নিরাপত্তা স্থাপত্য",
  demoScenario: "ডেমো পরিস্থিতি",
  evaluation: "মূল্যায়ন ও র‍্যাঙ্কিং",
  validation: "যাচাইকরণের প্রয়োজনীয়তা",
  sourceEvidence: "উৎস প্রমাণ",

  // Two reading depths header
  twoDepthsTitle: "দুটি পড়ার গভীরতা",
  quickLead: "নতুন সদস্যরা প্রথমে এখানে শুরু করুন।",
  technicalLead:
    "যাচাই-প্রস্তুত সদস্য ও নিরীক্ষকদের জন্য উৎস-ভিত্তিক পূর্ণ তথ্য।",

  // Compare
  compareTitle: "ধারণা তুলনা",
  compareSubtitle:
    "দুই বা তিনটি ধারণা পাশাপাশি দেখুন। এই টুল পূর্ব-নির্ধারিত উৎস-ভিত্তিক ক্ষেত্র ব্যবহার করে; এটি নতুন স্কোর তৈরি করে না।",
  selectTwoOrThree: "তুলনা করতে দুই বা তিনটি আইডিয়া নির্বাচন করুন।",

  // Security
  securityTitle: "নিরাপত্তা ও যাচাইকরণ",
  securitySubtitle:
    "প্রোটোটাইপ পরীক্ষাগুলি কোনওটিই এখনও পরিচালিত হয়নি। প্রতিটি পরীক্ষা এখানে একটি পরিকল্পিত বিশেষ উল্লেখ।",
  conditionalLoss: "শর্তাধীন ক্ষতি সীমা (চুরি হওয়া এজেন্ট কী-এর জন্য)",

  // Decision history
  historyTitle: "সিদ্ধান্তের ইতিহাস",
  historySubtitle:
    "সংশ্লেষণ → নিরীক্ষা A (প্রতিকূল পর্যালোচনা) → নিরীক্ষা B (একীভূতকরণ অখণ্ডতা) → নিরীক্ষা-পরবর্তী রায়দান।",
  preAuditContext:
    "প্রাক-নিরীক্ষা: ১৪টি উৎস প্রতিবেদন (R001–R014) একত্রিত করে ৭০টি ধারণা ও ৭টি হাইব্রিড। HYBRID-001 প্রাথমিক পছন্দ ছিল।",
  auditA: "নিরীক্ষা A: ২৭টি সিদ্ধান্ত-পরিবর্তনকারী অনুসন্ধান — ১৩ নিশ্চিত, ৮ আংশিক, ৩ পরীক্ষা-নির্ভর, ২ খণ্ডিত, ১ অসমর্থিত।",
  auditB: "নিরীক্ষা B: ৪৩টি নামকরা অনুসন্ধান — ৩৯ নিশ্চিত, ৩ আংশিক, ১ যাচাই-অযোগ্য। সম্পূর্ণতা FAIL টিকে আছে; কোনো সংকটপূর্ণ অসঙ্গতি নেই।",
  postAudit:
    "নিরীক্ষা-পরবর্তী: ৯৬টি এন্ট্রি (৮৬ ধারণা + ১০ হাইব্রিড)। HYBRID-008 চারটি ওজনের অধীনে নেতৃত্ব দিচ্ছে (৭৮ সুষম)।",

  // Library
  libraryTitle: "সম্পূর্ণ গবেষণা গ্রন্থাগার",
  librarySubtitle:
    "৯৬টি এন্ট্রি, ১৬-ক্ষেত্রের রেকর্ড সহ। কোনো প্রবেশযোগ্য সূত্র নেই; কেবল গবেষণা-প্যাকেজের উৎস-ভিত্তিক সারসংক্ষেপ।",
  filterByRanking: "র‍্যাঙ্কিং অনুযায়ী ফিল্টার",
  filterByGate: "গেট অনুযায়ী ফিল্টার",
  filterByDecision: "সিদ্ধান্ত অনুযায়ী ফিল্টার",
  filterByPrototype: "প্রোটোটাইপ যাচাই",
  searchPlaceholder: "ID, নাম, বা উৎস অনুসন্ধান…",

  // Presentation mode
  presentationTitle: "উপস্থাপনা মোড",
  presentationSubtitle:
    "ধারণা কেন্দ্রিক, নিরীক্ষা-প্রক্রিয়া নয়। কীবোর্ড নেভিগেশন: ← →, Esc থেকে প্রস্থান।",
  slideOf: "স্লাইড {current} / {total}",
  pressEsc: "প্রস্থানের জন্য Esc চাপুন",
  pressArrows: "← → নেভিগেট করুন",

  // Validation
  validationTitle: "চূড়ান্ত নির্বাচনের পূর্বশর্ত (১১টি)",
  validationSubtitle:
    "এগুলি উৎস-ভিত্তিক; বাস্তবায়ন চলাকালীন যাচাই করা প্রয়োজন। কোনোটি এখনও সম্পন্ন হয়নি।",

  // Layout
  openOriginal: "মূল প্রমাণ খুলুন",
  sourceFile: "উৎস ফাইল",
  sourceSection: "উৎস বিভাগ",
  originalPassage: "মূল উদ্ধৃতি",
  notSpecified: "প্রদত্ত গবেষণা উপকরণে উল্লেখিত নয়।",
  sourceFilePostAudit: "agent-wallet-post-audit-decision-summary.md",
  sourceFileFinalAudit: "finalaudit.md",
  sourceFileInventory: "master_inventory.csv",

  // Landing
  heroTitle: "২০২৬ শেনজেন ফিনটেকাথন",
  heroSubtitle: "বিষয় F: এজেন্ট ওয়ালেট",
  heroTagline:
    "স্বাধীন গবেষণা, সংশ্লেষণ, দুটি স্বতন্ত্র নিরীক্ষা, এবং একটি নিরীক্ষা-পরবর্তী রায়দান প্যাকেজ — সব একটি উৎস-সংরক্ষণকারী ইন্টারেক্টিভ এক্সপ্লোরারে।",
  ctaExplore: "ধারণাগুলি অন্বেষণ করুন",
  ctaCompare: "প্রোটোটাইপ প্রার্থীদের তুলনা",
  ctaSecurity: "নিরাপত্তা ও যাচাই",
  ctaPresentation: "উপস্থাপনা মোড",

  // Stats
  statTotalIdeas: "মোট এন্ট্রি",
  statTopTen: "শীর্ষ-১০ সংক্ষিপ্ত তালিকা",
  statTopFive: "বিস্তারিত শীর্ষ-৫",
  statPrototype: "প্রোটোটাইপ যাচাই প্রার্থী",
  statDate: "চূড়ান্ত স্ন্যাপশট",
  statSelection: "নির্বাচনী অবস্থা",
  statExperiments: "পরীক্ষার অবস্থা",
  selectionStatus: "প্রোভিশনাল পছন্দ HYBRID-008; কোনো বিজয়ী ঘোষিত হয়নি",
  experimentsStatus: "কোনো পরীক্ষা এখনও পরিচালিত হয়নি — X1 এর বাকি ১৪ অক্টোবর ২৩:৫৯ ঢাকা",

  // Three prototype candidates
  protoHeader: "তিনটি প্রোটোটাইপ যাচাই প্রার্থী",
  protoSub:
    "এই তিনটি নির্দিষ্ট সন্দেহ দূর করার জন্য নির্বাচিত হয়েছে, কেবল র‍্যাঙ্ক অনুসারে নয়।",
  // Footer
  footerDisclaimers:
    "এই ইন্টারফেস গবেষণাটি উপস্থাপন করে; এটি গবেষণা সম্পাদনা, পুনরায় র‍্যাঙ্কিং, বা সিদ্ধান্ত প্রতিস্থাপন করে না।",
  footerHashes: "উৎস ফাইলের SHA-256 হ্যাশ",
  footerValid: "অখণ্ডতা যাচাই",
  footerNoApi: "রানটাইমে কোনো বাহ্যিক গবেষণা API প্রয়োজন নেই।",
};
