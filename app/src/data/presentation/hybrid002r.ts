import { b, type CandidatePresentation } from "./types";

// HYBRID-002R — ServiceMeter with failure stop (revised).
// Source: finalaudit.md §I, §J, §K (control matrix), §L, §M, §N, §O, §R (X5), §S.

export const HYBRID_002R: CandidatePresentation = {
  id: "HYBRID-002R",
  role: b("Independent fallback (different infrastructure family)", "স্বাধীন ফলব্যাক (ভিন্ন অবকাঠামো-পরিবার)"),
  headline: b(
    "Stop paying for services that keep failing: pay, verify the output, stop after a failed check.",
    "যে সার্ভিস বারবার ব্যর্থ হয় তার জন্য অর্থ দেওয়া বন্ধ করুন: পরিশোধ করুন, আউটপুট যাচাই করুন, ব্যর্থ হলে থামুন।"
  ),
  keyPoint: b(
    "Uncertainty: weak asset-management fit and low novelty; smart-account validator behaviour for x402 is untested (X5).",
    "অনিশ্চয়তা: সম্পদ-ব্যবস্থাপনায় দুর্বল মিল ও কম নতুনত্ব; x402-এর জন্য স্মার্ট-অ্যাকাউন্ট ভ্যালিডেটরের আচরণ অপরীক্ষিত (X5)।"
  ),
  quick: {
    problem: b(
      "Repeated paid calls return unusable output, and an agent can keep paying for a service that has already failed.",
      "বারবার পেইড কল অব্যবহারযোগ্য আউটপুট ফেরত দেয়, আর এজেন্ট ব্যর্থ হয়ে যাওয়া সার্ভিসের জন্যও টাকা দিয়ে যেতে পারে।"
    ),
    affected: b("Agent operators who buy paid APIs and services.", "যেসব এজেন্ট অপারেটর পেইড API ও সার্ভিস কেনেন।"),
    solution: b(
      "The agent chooses a provider, pays through an x402 payment, checks the returned output with a client-side predicate, and stops further spending if the check fails.",
      "এজেন্ট একটি প্রোভাইডার বেছে নেয়, x402 পেমেন্টে অর্থ দেয়, ক্লায়েন্ট-সাইড প্রেডিকেট দিয়ে ফেরত আসা আউটপুট যাচাই করে এবং যাচাই ব্যর্থ হলে আর খরচ করে না।"
    ),
    versusNormal: b(
      "x402 payment identifiers and signed receipts prove a payment happened, but they do not judge whether the output was useful. ServiceMeter adds a spend stop tied to an output check, inside a job budget.",
      "x402 payment identifier ও সাইনড রিসিপ্ট প্রমাণ করে পেমেন্ট হয়েছে, কিন্তু আউটপুট কাজের ছিল কি না তা বিচার করে না। ServiceMeter একটি জব-বাজেটের মধ্যে আউটপুট-যাচাইয়ের সাথে যুক্ত খরচ-বিরতি যোগ করে।"
    ),
    example: b(
      "Two local paid endpoints, one honest and one faulty, with a 10-unit budget: the faulty seller stops spending after its first failed check and an injected price is refused.",
      "দুটি লোকাল পেইড এন্ডপয়েন্ট, একটি সৎ ও একটি ত্রুটিপূর্ণ, ১০-ইউনিট বাজেটসহ: ত্রুটিপূর্ণ বিক্রেতা প্রথম ব্যর্থ যাচাইয়ের পর খরচ থামায় এবং ইনজেক্ট করা মূল্য প্রত্যাখ্যাত হয়।"
    ),
    why: b(
      "It is the only shortlisted path that is independent of the delegation family, so it is the contingency if every HYBRID-008 route fails X1.",
      "শর্টলিস্টে এটিই একমাত্র পথ যা ডেলিগেশন-পরিবার থেকে স্বাধীন, তাই HYBRID-008-এর সব রুট X1-এ ব্যর্থ হলে এটি বিকল্প।"
    ),
    risk: b(
      "Its asset-management pillar is weak (job budget only), novelty is low, and paid non-delivery within the budget remains possible.",
      "এর সম্পদ-ব্যবস্থাপনা স্তম্ভ দুর্বল (শুধু জব বাজেট), নতুনত্ব কম, এবং বাজেটের মধ্যে অর্থ দিয়ে সার্ভিস না পাওয়া সম্ভব থেকে যায়।"
    ),
    decisionMeaning: b(
      "CONDITIONAL GO as the fallback: primary only if every HYBRID-008 route fails X1 by 15 Oct; an operating-spend module only if X1 and X5 both pass by 15 Oct.",
      "ফলব্যাক হিসেবে CONDITIONAL GO: প্রাইমারি কেবল যদি HYBRID-008-এর সব রুট ১৫ অক্টোবরের মধ্যে X1-এ ব্যর্থ হয়; অপারেটিং-স্পেন্ড মডিউল কেবল যদি X1 ও X5 উভয়ই ১৫ অক্টোবরের মধ্যে পাস করে।"
    ),
  },
  diagrams: [
    {
      id: "h002r-option-a",
      title: b("Option A — deployed smart-account payer (EIP-1271)", "অপশন A — ডিপ্লয়কৃত স্মার্ট-অ্যাকাউন্ট পেয়ার (EIP-1271)"),
      caption: b(
        "Interpretation of finalaudit.md §I and §K. The payer is a deployed ERC-4337 account whose signatures are validated onchain via EIP-1271. Documented in x402 wallet compatibility; validator behaviour for restricted signing is untested (X5).",
        "finalaudit.md §I ও §K-এর ব্যাখ্যা। পেয়ার একটি ডিপ্লয়কৃত ERC-4337 অ্যাকাউন্ট, যার স্বাক্ষর EIP-1271 দিয়ে অনচেইনে যাচাই হয়। x402 wallet compatibility-তে নথিভুক্ত; সীমিত স্বাক্ষরের জন্য ভ্যালিডেটরের আচরণ অপরীক্ষিত (X5)।"
      ),
      status: b("Design only — X5 pending", "শুধু ডিজাইন — X5 পেন্ডিং"),
      zones: [
        { label: b("Untrusted: AI and 402 data", "অবিশ্বস্ত: এআই ও ৪০২ ডেটা"), col0: 0, col1: 0, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Deterministic guards and onchain", "ডিটারমিনিস্টিক গার্ড ও অনচেইন"), col0: 1, col1: 3, row0: 1, row1: 2, tone: "enforced" },
      ],
      nodes: [
        { id: "agent", kind: "agent", label: b("LLM agent (untrusted)", "LLM এজেন্ট (অবিশ্বস্ত)"), sub: b("Choose quote, pay, check, stop or switch", "কোট বাছা, পরিশোধ, যাচাই, থামা বা বদলানো"), col: 0, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner", "মালিক"), sub: b("Sets origins, payees, job budget", "অরিজিন, পেয়ি, জব বাজেট ঠিক করে"), col: 0, row: 2 },
        { id: "service", kind: "external", label: b("Service endpoint", "সার্ভিস এন্ডপয়েন্ট"), sub: b("Honest or faulty; 402 body is data", "সৎ বা ত্রুটিপূর্ণ; ৪০২ বডি ডেটা"), col: 1, row: 0 },
        { id: "guard", kind: "policy", label: b("Spend guard", "খরচ গার্ড"), sub: b("Payee pinned per origin · price ceiling · one outstanding authorization", "অরিজিন প্রতি পেয়ি নির্দিষ্ট · মূল্য সীমা · একটি বকেয়া অনুমোদন"), col: 1, row: 1 },
        { id: "payer", kind: "wallet", label: b("Smart-account payer", "স্মার্ট-অ্যাকাউন্ট পেয়ার"), sub: b("Deployed ERC-4337, signs via EIP-1271", "ডিপ্লয়কৃত ERC-4337, EIP-1271 দিয়ে স্বাক্ষর"), col: 1, row: 2 },
        { id: "fac", kind: "contract", label: b("x402 facilitator", "x402 ফ্যাসিলিটেটর"), sub: b("Exact (EIP-3009) or Permit2", "Exact (EIP-3009) বা Permit2"), col: 2, row: 2 },
        { id: "pred", kind: "policy", label: b("Client-side output predicate", "ক্লায়েন্ট-সাইড আউটপুট প্রেডিকেট"), sub: b("Judges the result, not the payment", "পেমেন্ট নয়, ফলাফল বিচার করে"), col: 2, row: 0 },
        { id: "chain", kind: "chain", label: b("Base Sepolia settlement", "Base Sepolia সেটেলমেন্ট"), sub: b("Test USDC", "টেস্ট USDC"), col: 3, row: 2 },
        { id: "stop", kind: "audit", label: b("Pass: continue · Fail: stop", "পাস: চলুন · ফেল: থামুন"), sub: b("Stop future spend, return code", "ভবিষ্যৎ খরচ বন্ধ, রিটার্ন কোড"), col: 3, row: 0 },
        { id: "receipt", kind: "audit", label: b("Settlement receipt check", "সেটেলমেন্ট রিসিপ্ট যাচাই"), sub: b("Independent of seller's signed receipt", "বিক্রেতার সাইনড রিসিপ্ট থেকে স্বাধীন"), col: 3, row: 1 },
      ],
      edges: [
        { from: "owner", to: "guard", kind: "auth", label: b("origins, payees, budget", "অরিজিন, পেয়ি, বাজেট") },
        { from: "owner", to: "payer", kind: "funds", label: b("funds job budget", "জব বাজেট ফান্ড") },
        { from: "agent", to: "service", kind: "data", label: b("choose quote, request", "কোট বাছা, অনুরোধ") },
        { from: "service", to: "guard", kind: "data", label: b("402 payment required", "৪০২ পেমেন্ট প্রয়োজন") },
        { from: "guard", to: "payer", kind: "tx", label: b("authorize one payment", "একটি পেমেন্ট অনুমোদন") },
        { from: "payer", to: "fac", kind: "tx", label: b("signed authorization", "স্বাক্ষরিত অনুমোদন") },
        { from: "fac", to: "chain", kind: "funds", label: b("settle", "সেটেল") },
        { from: "chain", to: "receipt", kind: "data", label: b("receipt", "রিসিপ্ট") },
        { from: "service", to: "pred", kind: "data", label: b("result", "ফলাফল") },
        { from: "pred", to: "stop", kind: "auth", label: b("pass / fail", "পাস / ফেল") },
      ],
    },
    {
      id: "h002r-option-b",
      title: b("Option B — two-tier hot wallet (job budget only)", "অপশন B — দুই-স্তরের হট ওয়ালেট (শুধু জব বাজেট)"),
      caption: b(
        "A separate payer option, not combined with Option A. A hot wallet holds only the job budget and is topped up by a period-capped delegation, so loss is bounded by the hot balance, the remaining top-up allowance, unexpired authorizations and fees.",
        "আলাদা পেয়ার বিকল্প; অপশন A-র সাথে মেলানো হয়নি। হট ওয়ালেটে শুধু জব বাজেট থাকে এবং পিরিয়ড-ক্যাপযুক্ত ডেলিগেশন দিয়ে টপ-আপ হয়, তাই ক্ষতি হট ব্যালেন্স, অবশিষ্ট টপ-আপ অ্যালাউয়েন্স, মেয়াদ-না-ফুরানো অনুমোদন ও ফি দ্বারা সীমিত।"
      ),
      status: b("Design only — X5 pending; the default if the smart-account path fails", "শুধু ডিজাইন — X5 পেন্ডিং; স্মার্ট-অ্যাকাউন্ট পথ ব্যর্থ হলে ডিফল্ট"),
      zones: [
        { label: b("Untrusted: AI and 402 data", "অবিশ্বস্ত: এআই ও ৪০২ ডেটা"), col0: 0, col1: 0, row0: 0, row1: 0, tone: "untrusted" },
        { label: b("Deterministic guards and onchain", "ডিটারমিনিস্টিক গার্ড ও অনচেইন"), col0: 1, col1: 3, row0: 1, row1: 3, tone: "enforced" },
      ],
      nodes: [
        { id: "agent", kind: "agent", label: b("LLM agent (untrusted)", "LLM এজেন্ট (অবিশ্বস্ত)"), sub: b("Choose quote, pay, check, stop", "কোট বাছা, পরিশোধ, যাচাই, থামা"), col: 0, row: 0 },
        { id: "owner", kind: "owner", label: b("Owner smart account", "মালিক স্মার্ট অ্যাকাউন্ট"), sub: b("Signs the top-up delegation", "টপ-আপ ডেলিগেশনে স্বাক্ষর"), col: 0, row: 3 },
        { id: "service", kind: "external", label: b("Service endpoint", "সার্ভিস এন্ডপয়েন্ট"), sub: b("Honest or faulty; 402 body is data", "সৎ বা ত্রুটিপূর্ণ; ৪০২ বডি ডেটা"), col: 1, row: 0 },
        { id: "guard", kind: "policy", label: b("Spend guard", "খরচ গার্ড"), sub: b("Payee pinned per origin · one outstanding authorization", "অরিজিন প্রতি পেয়ি নির্দিষ্ট · একটি বকেয়া অনুমোদন"), col: 1, row: 1 },
        { id: "deleg", kind: "policy", label: b("Period-capped delegation", "পিরিয়ড-ক্যাপযুক্ত ডেলিগেশন"), sub: b("Top-up only", "শুধু টপ-আপ"), col: 1, row: 3 },
        { id: "hot", kind: "signer", label: b("Hot wallet", "হট ওয়ালেট"), sub: b("Holds only the job budget", "শুধু জব বাজেট রাখে"), col: 2, row: 2 },
        { id: "fac", kind: "contract", label: b("x402 facilitator", "x402 ফ্যাসিলিটেটর"), sub: b("Exact (EIP-3009) or Permit2", "Exact (EIP-3009) বা Permit2"), col: 3, row: 2 },
        { id: "pred", kind: "policy", label: b("Client-side output predicate", "ক্লায়েন্ট-সাইড আউটপুট প্রেডিকেট"), col: 2, row: 0 },
        { id: "stop", kind: "audit", label: b("Pass: continue · Fail: stop", "পাস: চলুন · ফেল: থামুন"), sub: b("Stop top-ups and spending", "টপ-আপ ও খরচ বন্ধ"), col: 3, row: 0 },
        { id: "chain", kind: "chain", label: b("Base Sepolia settlement", "Base Sepolia সেটেলমেন্ট"), col: 3, row: 3 },
      ],
      edges: [
        { from: "owner", to: "deleg", kind: "auth", label: b("signs delegation", "ডেলিগেশনে স্বাক্ষর") },
        { from: "deleg", to: "hot", kind: "funds", label: b("period-capped top-up", "পিরিয়ড-ক্যাপযুক্ত টপ-আপ") },
        { from: "agent", to: "service", kind: "data", label: b("choose quote, request", "কোট বাছা, অনুরোধ") },
        { from: "service", to: "guard", kind: "data", label: b("402 payment required", "৪০২ পেমেন্ট প্রয়োজন") },
        { from: "guard", to: "hot", kind: "tx", label: b("one authorization", "একটি অনুমোদন") },
        { from: "hot", to: "fac", kind: "tx", label: b("signed payment", "স্বাক্ষরিত পেমেন্ট") },
        { from: "fac", to: "chain", kind: "funds", label: b("settle", "সেটেল") },
        { from: "service", to: "pred", kind: "data", label: b("result", "ফলাফল") },
        { from: "pred", to: "stop", kind: "auth", label: b("pass / fail", "পাস / ফেল") },
      ],
    },
  ],
  steps: [
    {
      control: "owner",
      title: b("1. Owner fixes origins, payees and the job budget", "১. মালিক অরিজিন, পেয়ি ও জব বাজেট ঠিক করে"),
      body: b(
        "The owner sets which origins may be paid, the payee for each, and the job budget. Option B adds a period-capped, top-up-only delegation.",
        "মালিক ঠিক করে কোন অরিজিনকে অর্থ দেওয়া যাবে, প্রতিটির পেয়ি কে, এবং জব বাজেট কত। অপশন B-তে যোগ হয় পিরিয়ড-ক্যাপযুক্ত, শুধু-টপ-আপ ডেলিগেশন।"
      ),
      src: "finalaudit.md §K (HYBRID-002R)",
      nodes: ["owner", "guard"],
      diagram: 0,
    },
    {
      control: "ai",
      title: b("2. Agent chooses a provider and requests", "২. এজেন্ট প্রোভাইডার বেছে অনুরোধ করে"),
      body: b(
        "The LLM chooses a provider and quote and sends the request. It does not control payee, ceiling or budget.",
        "LLM একটি প্রোভাইডার ও কোট বেছে অনুরোধ পাঠায়। পেয়ি, মূল্য-সীমা বা বাজেট সে নিয়ন্ত্রণ করে না।"
      ),
      nodes: ["agent", "service"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("3. The 402 response is treated as data", "৩. ৪০২ প্রতিক্রিয়া ডেটা হিসেবে গণ্য"),
      body: b(
        "A 402 body cannot change the payee. Redirects to new origins are refused, a price above the ceiling is refused, and only one authorization may be outstanding.",
        "৪০২ বডি পেয়ি বদলাতে পারে না। নতুন অরিজিনে রিডাইরেক্ট প্রত্যাখ্যাত, মূল্য-সীমার ওপরের দাম প্রত্যাখ্যাত, এবং একসাথে একটিই অনুমোদন বকেয়া থাকতে পারে।"
      ),
      src: "finalaudit.md §K (prompt injection, duplicates)",
      nodes: ["service", "guard"],
      diagram: 0,
    },
    {
      control: "onchain",
      title: b("4. Payment settles through x402", "৪. x402-এর মাধ্যমে পেমেন্ট সেটেল হয়"),
      body: b(
        "The payer signs an x402 exact (EIP-3009) or Permit2 authorization and the facilitator settles on Base Sepolia with test USDC.",
        "পেয়ার x402 exact (EIP-3009) বা Permit2 অনুমোদনে স্বাক্ষর করে এবং ফ্যাসিলিটেটর টেস্ট USDC-সহ Base Sepolia-তে সেটেল করে।"
      ),
      src: "finalaudit.md §I",
      nodes: ["payer", "fac", "chain"],
      diagram: 0,
    },
    {
      control: "audit",
      title: b("5. Settlement is verified separately", "৫. সেটেলমেন্ট আলাদাভাবে যাচাই হয়"),
      body: b(
        "The settlement receipt is checked independently of the seller's signed receipt. Payment settlement is not the same as useful output.",
        "বিক্রেতার সাইনড রিসিপ্ট থেকে স্বাধীনভাবে সেটেলমেন্ট রিসিপ্ট যাচাই হয়। পেমেন্ট সেটেল হওয়া মানেই কাজের আউটপুট পাওয়া নয়।"
      ),
      src: "finalaudit.md §K (verification)",
      nodes: ["chain", "receipt"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("6. A client-side predicate checks the output", "৬. ক্লায়েন্ট-সাইড প্রেডিকেট আউটপুট যাচাই করে"),
      body: b(
        "The predicate judges whether the returned output is usable. This is the part x402 payment identifiers and receipts do not do.",
        "প্রেডিকেট বিচার করে ফেরত আসা আউটপুট ব্যবহারযোগ্য কি না। x402 payment identifier ও রিসিপ্ট এই কাজটি করে না।"
      ),
      src: "finalaudit.md §J",
      nodes: ["service", "pred"],
      diagram: 0,
    },
    {
      control: "deterministic",
      title: b("7. Pass continues; fail stops future spend", "৭. পাস হলে চলে; ফেল হলে ভবিষ্যৎ খরচ বন্ধ"),
      body: b(
        "On failure the system stops further spending and returns a code (a preauthorized alternate is the only allowed exception). Unexpired authorizations still count until expiry.",
        "ব্যর্থ হলে সিস্টেম আর খরচ করে না এবং একটি কোড ফেরত দেয় (পূর্ব-অনুমোদিত বিকল্পই একমাত্র অনুমোদিত ব্যতিক্রম)। মেয়াদ-না-ফুরানো অনুমোদন মেয়াদ শেষ পর্যন্ত গণনায় থাকে।"
      ),
      src: "finalaudit.md §K (recovery), §R (X5)",
      nodes: ["pred", "stop"],
      diagram: 0,
    },
  ],
  scenario: {
    kind: "illustrative",
    note: b(
      "Illustrative walkthrough. The 10-unit budget, the honest and faulty endpoints and the stop behaviour are the documented X5 setup; the narration around them is written for explanation. Nothing has been executed.",
      "চিত্রণমূলক ওয়াকথ্রু। ১০-ইউনিট বাজেট, সৎ ও ত্রুটিপূর্ণ এন্ডপয়েন্ট এবং থামার আচরণ নথিভুক্ত X5 সেটআপ; এর চারপাশের বর্ণনা ব্যাখ্যার জন্য লেখা। কিছুই এক্সিকিউট করা হয়নি।"
    ),
    situation: b(
      "An agent operator runs a task that needs paid API calls. Two local paid endpoints exist: one honest and one faulty. The job budget is 10 test units.",
      "একজন এজেন্ট অপারেটরের কাজে পেইড API কল দরকার। দুটি লোকাল পেইড এন্ডপয়েন্ট আছে: একটি সৎ, একটি ত্রুটিপূর্ণ। জব বাজেট ১০ টেস্ট ইউনিট।"
    ),
    objective: b(
      "Finish the task using paid services without paying again and again for a seller that returns unusable output.",
      "অব্যবহারযোগ্য আউটপুট দেওয়া বিক্রেতাকে বারবার অর্থ না দিয়ে পেইড সার্ভিস দিয়ে কাজ শেষ করা।"
    ),
    reasoning: b(
      "The agent picks a provider and quote, then must decide from the returned output whether to continue or stop.",
      "এজেন্ট একটি প্রোভাইডার ও কোট বাছে, তারপর ফেরত আসা আউটপুট দেখে চালিয়ে যাবে না থামবে তা ঠিক করতে হয়।"
    ),
    decision: b(
      "Pay the honest endpoint and continue. For the faulty endpoint, the first failed check ends spending.",
      "সৎ এন্ডপয়েন্টকে পরিশোধ করে চালিয়ে যাওয়া। ত্রুটিপূর্ণ এন্ডপয়েন্টের ক্ষেত্রে প্রথম ব্যর্থ যাচাইয়েই খরচ শেষ।"
    ),
    permission: b(
      "Payment is allowed only to the payee pinned for that origin, under the price ceiling, with one outstanding authorization, inside the job budget.",
      "পেমেন্ট কেবল ওই অরিজিনের জন্য নির্দিষ্ট পেয়িকে, মূল্য-সীমার নিচে, একটি বকেয়া অনুমোদনসহ, জব বাজেটের মধ্যে অনুমোদিত।"
    ),
    onchain: b(
      "An x402 settlement on Base Sepolia with test USDC produces a settlement hash for each payment actually made.",
      "টেস্ট USDC-সহ Base Sepolia-তে x402 সেটেলমেন্ট প্রতিটি আসল পেমেন্টের জন্য সেটেলমেন্ট হ্যাশ তৈরি করে।"
    ),
    result: b(
      "Honest task completes. Spend after the first failed check is zero (except a preauthorized alternate) and below the baseline that uses only the x402 extensions.",
      "সৎ কাজ সম্পন্ন হয়। প্রথম ব্যর্থ যাচাইয়ের পর খরচ শূন্য (পূর্ব-অনুমোদিত বিকল্প ছাড়া) এবং শুধু x402 এক্সটেনশন ব্যবহারকারী বেসলাইনের নিচে।"
    ),
    failure: b(
      "A 402 that changes the payee, a redirect to a new origin, a timeout after settlement or a replay must not cause a second charge.",
      "যে ৪০২ পেয়ি বদলায়, নতুন অরিজিনে রিডাইরেক্ট, সেটেলমেন্টের পর টাইমআউট বা রিপ্লে — কোনোটিই দ্বিতীয়বার চার্জ করবে না।"
    ),
    evidence: b(
      "Settlement hashes and content digests; spend after failure compared with the extensions-only baseline.",
      "সেটেলমেন্ট হ্যাশ ও কনটেন্ট ডাইজেস্ট; ব্যর্থতার পর খরচ শুধু-এক্সটেনশন বেসলাইনের সাথে তুলনা।"
    ),
    cases: [
      { key: "normal", basis: "documented", outcome: b("Honest task completes (X5 positive test).", "সৎ কাজ সম্পন্ন হয় (X5 পজিটিভ টেস্ট)।") },
      { key: "failure", basis: "documented", outcome: b("Wrong output stops spending: 0 charges after the first failed check (except a preauthorized alternate).", "ভুল আউটপুট খরচ থামায়: প্রথম ব্যর্থ যাচাইয়ের পর ০ চার্জ (পূর্ব-অনুমোদিত বিকল্প ছাড়া)।") },
      { key: "overlimit", basis: "documented", outcome: b("A price over the ceiling is refused (X5 negative test).", "মূল্য-সীমার ওপরের দাম প্রত্যাখ্যাত (X5 নেগেটিভ টেস্ট)।") },
      { key: "malicious", basis: "documented", outcome: b("A 402 that changes the payee, or a redirect to a new origin, is refused (X5 adversarial).", "পেয়ি বদলানো ৪০২ বা নতুন অরিজিনে রিডাইরেক্ট প্রত্যাখ্যাত (X5 অ্যাডভার্সারিয়াল)।") },
      { key: "duplicate", basis: "documented", outcome: b("One outstanding authorization and the x402 payment identifier: 0 duplicate charges required.", "একটি বকেয়া অনুমোদন ও x402 payment identifier: ০ ডুপ্লিকেট চার্জ প্রয়োজন।") },
    ],
  },
  competitors: [
    {
      name: "x402 payment identifier and signed receipts",
      existing: b("Extensions that identify a payment and give a signed receipt.", "পেমেন্ট শনাক্ত করে ও সাইনড রিসিপ্ট দেয় এমন এক্সটেনশন।"),
      similar: b("Duplicate protection and proof of payment.", "ডুপ্লিকেট সুরক্ষা ও পেমেন্টের প্রমাণ।"),
      adds: b("A stop tied to an output check.", "আউটপুট-যাচাইয়ের সাথে যুক্ত বিরতি।"),
      solved: b("Payment identity and receipt.", "পেমেন্ট পরিচয় ও রিসিপ্ট।"),
      unverified: b("They do not judge output; benefit over this baseline is X5's test.", "এগুলো আউটপুট বিচার করে না; এই বেসলাইনের তুলনায় সুবিধা X5-এর পরীক্ষা।"),
      url: "https://docs.x402.org/extensions/payment-identifier",
      src: "finalaudit.md §J",
    },
    {
      name: "Coinbase Agentic Wallet",
      existing: b("Guardrails for agent wallets; specifics unspecified.", "এজেন্ট ওয়ালেটের গার্ডরেল; বিবরণ অনির্দিষ্ট।"),
      similar: b("Spending guardrails for agents.", "এজেন্টের জন্য খরচ-গার্ডরেল।"),
      adds: b("Output-check stop (unverified).", "আউটপুট-যাচাই বিরতি (অযাচাইকৃত)।"),
      solved: b("Unspecified guardrails.", "অনির্দিষ্ট গার্ডরেল।"),
      unverified: b("Guardrails are unspecified, so overlap cannot be confirmed.", "গার্ডরেল অনির্দিষ্ট, তাই মিল নিশ্চিত করা যায় না।"),
      url: "https://docs.cdp.coinbase.com/agentic-wallet/welcome",
      src: "finalaudit.md §J",
    },
    {
      name: "x402 wallet compatibility (smart accounts)",
      existing: b("Deployed ERC-4337 accounts via EIP-1271.", "EIP-1271-এর মাধ্যমে ডিপ্লয়কৃত ERC-4337 অ্যাকাউন্ট।"),
      similar: b("The Option A payer path itself.", "অপশন A পেয়ার পথ নিজেই।"),
      adds: b("Nothing new; relies on it.", "নতুন কিছু নয়; এর ওপর নির্ভরশীল।"),
      solved: b("Smart-account payer for x402 (verified existing capability).", "x402-এর জন্য স্মার্ট-অ্যাকাউন্ট পেয়ার (যাচাইকৃত বিদ্যমান সক্ষমতা)।"),
      unverified: b("Token must route signatures to EIP-1271; Permit2 needs an onchain approval; validator behaviour untested.", "টোকেনকে স্বাক্ষর EIP-1271-এ পাঠাতে হবে; Permit2-এর জন্য অনচেইন অনুমোদন লাগে; ভ্যালিডেটরের আচরণ অপরীক্ষিত।"),
      url: "https://docs.x402.org/advanced-concepts/wallet-compatibility",
      src: "finalaudit.md §J",
    },
    {
      name: "Circuit breakers (engineering pattern)",
      existing: b("A common engineering pattern for stopping repeated failures.", "বারবার ব্যর্থতা থামানোর একটি সাধারণ প্রকৌশল-প্যাটার্ন।"),
      similar: b("Stop after failure.", "ব্যর্থতার পর থামা।"),
      adds: b("Applies it to paid agent calls.", "এটি পেইড এজেন্ট কলে প্রয়োগ করে।"),
      solved: b("The pattern itself is common.", "প্যাটার্নটি নিজেই সাধারণ।"),
      unverified: b("Novelty is low (weakening evidence).", "নতুনত্ব কম (দুর্বলকারী প্রমাণ)।"),
      src: "finalaudit.md §J",
    },
  ],
  advantages: [
    { text: b("Independent of the delegation family; the contingency if every HYBRID-008 route fails X1.", "ডেলিগেশন-পরিবার থেকে স্বাধীন; HYBRID-008-এর সব রুট X1-এ ব্যর্থ হলে বিকল্প।"), src: "§T" },
    { text: b("No custom contract: facilitator and token code only.", "কাস্টম কন্ট্রাক্ট নেই: শুধু ফ্যাসিলিটেটর ও টোকেন কোড।"), src: "§K" },
    { text: b("Feasibility medium to high; loss bounded by the budget.", "বাস্তবায়নযোগ্যতা মাঝারি থেকে উচ্চ; ক্ষতি বাজেট দ্বারা সীমিত।"), src: "§L, §N" },
    { text: b("Stopping after a failed output check reduces wasted spend (unverified).", "ব্যর্থ আউটপুট-যাচাইয়ের পর থামলে অপচয় কমে (অযাচাইকৃত)।"), src: "§J" },
  ],
  weaknesses: [
    { text: b("Asset-management pillar is weak: job budget only.", "সম্পদ-ব্যবস্থাপনা স্তম্ভ দুর্বল: শুধু জব বাজেট।"), src: "§L" },
    { text: b("Low novelty: circuit breakers are a common engineering pattern.", "কম নতুনত্ব: সার্কিট ব্রেকার সাধারণ প্রকৌশল-প্যাটার্ন।"), src: "§J" },
    { text: b("Paid non-delivery within the budget is still possible; weak Topic F fit.", "বাজেটের মধ্যে অর্থ দিয়ে সার্ভিস না পাওয়া এখনও সম্ভব; Topic F-এ দুর্বল মিল।"), src: "§N" },
    { text: b("Smart-account validator behaviour for restricted signing is unknown (X5).", "সীমিত স্বাক্ষরের জন্য স্মার্ট-অ্যাকাউন্ট ভ্যালিডেটরের আচরণ অজানা (X5)।"), src: "§Q" },
    { text: b("Facilitator uptime and faucet are external dependencies.", "ফ্যাসিলিটেটরের আপটাইম ও ফসেট বাহ্যিক নির্ভরতা।"), src: "§R" },
  ],
  innovation: [
    { cls: "existing", text: b("Smart-account payer for x402 (EIP-1271).", "x402-এর জন্য স্মার্ট-অ্যাকাউন্ট পেয়ার (EIP-1271)।"), experiment: "X5" },
    { cls: "existing", text: b("Payment identifier and signed receipts exist but do not judge output.", "payment identifier ও সাইনড রিসিপ্ট আছে কিন্তু আউটপুট বিচার করে না।") },
    { cls: "unverified", text: b("Stopping spend after a failed output check.", "ব্যর্থ আউটপুট-যাচাইয়ের পর খরচ থামানো।"), experiment: "X5" },
  ],
  innovationNeeds: b(
    "X5 must show post-failure spend below the extensions baseline with 0 duplicates; otherwise ServiceMeter is dropped.",
    "X5-কে ০ ডুপ্লিকেটসহ এক্সটেনশন বেসলাইনের নিচে ব্যর্থতা-পরবর্তী খরচ দেখাতে হবে; নইলে ServiceMeter বাদ।"
  ),
  security: {
    aiCan: [
      { text: b("Choose provider and quote.", "প্রোভাইডার ও কোট বাছা।") },
      { text: b("Request and interpret the output check result.", "অনুরোধ করা ও আউটপুট-যাচাইয়ের ফল ব্যাখ্যা।") },
    ],
    aiCannot: [
      { text: b("Change the payee: it is pinned per origin.", "পেয়ি বদলানো: এটি অরিজিন প্রতি নির্দিষ্ট।") },
      { text: b("Exceed the price ceiling or the job budget.", "মূল্য-সীমা বা জব বাজেট ছাড়ানো।") },
      { text: b("Hold more than one outstanding authorization.", "একটির বেশি বকেয়া অনুমোদন রাখা।") },
    ],
    authorizes: b("Owner-set origins, payees and job budget.", "মালিক-নির্ধারিত অরিজিন, পেয়ি ও জব বাজেট।"),
    enforcedWhere: b(
      "By the smart account (Option A) or by the hot balance and period-capped top-up (Option B); payee pinning is offchain.",
      "স্মার্ট অ্যাকাউন্ট (অপশন A) বা হট ব্যালেন্স ও পিরিয়ড-ক্যাপযুক্ত টপ-আপ (অপশন B) দ্বারা; পেয়ি-পিনিং অফচেইন।"
    ),
    ifManipulated: b(
      "402 bodies are data; redirects to new origins are refused. Loss is bounded by the budget.",
      "৪০২ বডি ডেটা; নতুন অরিজিনে রিডাইরেক্ট প্রত্যাখ্যাত। ক্ষতি বাজেট দ্বারা সীমিত।"
    ),
    ifFails: b(
      "Stop future spending and return a code; the settlement receipt is checked independently of the seller's receipt.",
      "ভবিষ্যৎ খরচ বন্ধ ও কোড ফেরত; বিক্রেতার রিসিপ্ট থেকে স্বাধীনভাবে সেটেলমেন্ট রিসিপ্ট যাচাই।"
    ),
    ownerStop: b(
      "Stop top-ups; unexpired authorizations are counted until expiry.",
      "টপ-আপ বন্ধ; মেয়াদ-না-ফুরানো অনুমোদন মেয়াদ শেষ পর্যন্ত গণনা।"
    ),
    exposure: b(
      "Hot balance + remaining top-up allowance + unexpired authorizations + fees (X5 exposure limit: 10 test USDC).",
      "হট ব্যালেন্স + অবশিষ্ট টপ-আপ অ্যালাউয়েন্স + মেয়াদ-না-ফুরানো অনুমোদন + ফি (X5 এক্সপোজার সীমা: ১০ টেস্ট USDC)।"
    ),
    tested: b("Documented only; X5 is pending.", "শুধু নথিভুক্ত; X5 পেন্ডিং।"),
  },
  roadmap: {
    mvp: [
      b("Two local paid endpoints: honest and faulty", "দুটি লোকাল পেইড এন্ডপয়েন্ট: সৎ ও ত্রুটিপূর্ণ"),
      b("10-unit job budget", "১০-ইউনিট জব বাজেট"),
      b("Payer option A or B, payee pinning, output predicate, payment identifier", "পেয়ার অপশন A বা B, পেয়ি পিনিং, আউটপুট প্রেডিকেট, payment identifier"),
    ],
    optional: [b("Operating-spend module for HYBRID-008, only if X1 and X5 both pass by 15 Oct", "HYBRID-008-এর অপারেটিং-স্পেন্ড মডিউল, শুধু X1 ও X5 উভয়ই ১৫ অক্টোবরের মধ্যে পাস করলে")],
    deferred: [b("Mainnet or real-money deployment (not recommended)", "মেইননেট বা আসল-অর্থ ডিপ্লয়মেন্ট (সুপারিশকৃত নয়)")],
    dependencies: [
      b("x402 packages and a public testnet facilitator", "x402 প্যাকেজ ও পাবলিক টেস্টনেট ফ্যাসিলিটেটর"),
      b("Base Sepolia test USDC and a faucet", "Base Sepolia টেস্ট USDC ও ফসেট"),
    ],
    blockers: [
      b("Facilitator unusable fails X5", "ফ্যাসিলিটেটর ব্যবহারের অযোগ্য হলে X5 ব্যর্থ"),
      b("No gain over the extensions baseline drops ServiceMeter", "এক্সটেনশন বেসলাইনের চেয়ে লাভ না হলে ServiceMeter বাদ"),
      b("Disclose weak asset-management coverage", "দুর্বল সম্পদ-ব্যবস্থাপনা কভারেজ প্রকাশ করতে হবে"),
    ],
    stages: [
      { label: b("Run X5", "X5 চালান"), when: b("About 1–1.5 engineer-days", "প্রায় ১–১.৫ ইঞ্জিনিয়ার-দিন"), items: [b("Pass: fallback or operating-spend module. Fail: drop ServiceMeter.", "পাস: ফলব্যাক বা অপারেটিং-স্পেন্ড মডিউল। ফেল: ServiceMeter বাদ।")] },
      { label: b("Activation decision", "সক্রিয়করণ সিদ্ধান্ত"), when: b("By 15 Oct", "১৫ অক্টোবরের মধ্যে"), items: [b("Primary only if every HYBRID-008 route fails X1", "প্রাইমারি শুধু HYBRID-008-এর সব রুট X1-এ ব্যর্থ হলে")] },
    ],
  },
  scores: {
    task: "25–32",
    security: "20–25",
    innovation: "16–22",
    centres: { value: 11, novelty: 10, security: 19, feasibility: 16, demo: 9, deps: 7 },
  },
  relatedIds: ["HYBRID-008", "HYBRID-009", "IDEA-073"],
};
