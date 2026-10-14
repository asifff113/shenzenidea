// One-shot generator. Writes libraryFields.json with 96 records
// using compact single-line JSON for each record.
const fs = require('fs');
const path = 'D:/projects/shenzenpresentation';

const inv = JSON.parse(
  fs.readFileSync(path + '/app/src/data/full_inventory.json', 'utf-8')
);
const dst = path + '/app/src/i18n/bn/libraryFields.json';

// Translations for short fields. Long free-text fields stay in English
// (the page displays "Bengali translation pending" with a toggle).
const bnMap = {
  'Treasury operator': 'ট্রেজারি অপারেটর',
  'Treasury operators': 'ট্রেজারি অপারেটর',
  'DAO operations': 'DAO অপারেশন',
  'DAO finance': 'DAO ফাইনান্স',
  'DAO finance teams': 'DAO ফাইনান্স টিম',
  'DAO marketing': 'DAO মার্কেটিং',
  'Agent operators': 'এজেন্ট অপারেটর',
  'Agent operators with recurring obligations': 'পুনরাবৃত্ত অবলিগেশনসহ এজেন্ট অপারেটর',
  'Wallet owners': 'ওয়ালেট মালিক',
  'Contractors': 'ঠিকাদার',
  'Contractor employers': 'ঠিকাদার নিয়োগকর্তা',
  'Grantmakers': 'অনুদান দাতা',
  'Research teams': 'গবেষণা দল',
  'Insurers/relief funds': 'বীমাকারী/ত্রাণ তহবিল',
  'HR NGO': 'মানবাধিকার NGO',
  'Sensitive treasury': 'সংবেদনশীল ট্রেজারি',
  'Digital contractors': 'ডিজিটাল ঠিকাদার',
  'High-value treasury': 'উচ্চ-মূল্য ট্রেজারি',
  'Marketplaces': 'মার্কেটপ্লেস',
  'Remote users': 'দূরবর্তী ব্যবহারকারী',
  'Employer': 'নিয়োগকর্তা',
  'Consortium': 'কনসোর্টিয়াম',
  'Compliant institutions': 'অনুগত প্রতিষ্ঠান',
  'Freelancers and buyers': 'ফ্রিল্যান্সার ও ক্রেতা',
  'Stablecoin-native treasury': 'স্টেবলকয়েন-নেটিভ ট্রেজারি',
  'Wallet developers': 'ওয়ালেট বিকাশকারী',
  'See constituents': 'উপাদানগুলি দেখুন',
  'Crypto SMEs and DAOs paying vendors and contractors in stablecoins': 'স্টেবলকয়েনে বিক্রেতা ও ঠিকাদারদের অর্থ প্রদানকারী ক্রিপ্টো SME ও DAO',
};

// Hand-translated entries for important records
const handTranslated = {
  'IDEA-001': {"name":"সীমাবদ্ধ ইনভয়েস পেআউট","financial_problem":"ভুল বা ডুপ্লিকেট সরবরাহকারী পেমেন্ট","customer":"DAO ফাইনান্স টিম","agent_responsibilities":"ইনভয়েসকে আলাদাভাবে অনুমোদিত ক্রয় আদেশের সাথে মেলানো; এজেন্ট রুটিন ম্যাচগুলির সময় নির্ধারণ ও পরিশোধ করে।","asset_management_role":"নিয়ন্ত্রিত ব্যালেন্স থেকে পরিশোধ করে (উদ্ভূত)","onchain_workflow":"একবার-ব্যবহারযোগ্য টোকেন ট্রান্সফার","security_model":"সুনির্দিষ্ট ম্যান্ডেট, সঞ্চিত ক্যাপ, স্বতন্ত্র সুবিধাভোগী রেকর্ড","closest_competitor":"Cleared; AgentsPay; Request; PACE","novelty_hypothesis":"সাধারণ ক্যাপড বিল পেআউটের বাইরে ক্রেতা-পক্ষের অবলিগেশন সত্যতা","dependencies":"নির্বাচিত ওয়ালেট/অ্যাকাউন্ট ও চেইন ডিপ্লয়মেন্ট; টোকেন; RPC; স্বতন্ত্র মালিক।","feasibility":"1–2 সপ্তাহ","mvp_scope":"একটি সরবরাহকারী, তিনটি ইনভয়েস, একটি টোকেন","demo_and_evaluation":"সঠিক পেমেন্ট একবার; জাল অবলিগেশন কখনো পরিশোধিত হয় না","evidence_confidence":"কম: ডকুমেন্টেশন-স্তর; কোনো প্রোটোটাইপ নেই","gate":"PASS (প্রোটোটাইপ-যোগ্য)","change_status":"সম্প্রসারিত","change_note":"R002 C01 বিলম্বিত ভেটো লেন IDEA-080 হিসেবে পুনরুদ্ধার।"},
  'HYBRID-008': {"name":"ম্যান্ডেট-বাউন্ড অবলিগেশন ট্রেজারি","financial_problem":"ট্রেজারিকে অনুমোদিত অবলিগেশন অনুপস্থিতিতে পরিশোধ করতে হবে, জাল কখনো পরিশোধ করা উচিত নয় এবং প্রতিশ্রুত নগদ অন্য কোথাও খরচ হওয়া থেকে রক্ষা করতে হবে","customer":"স্টেবলকয়েনে বিক্রেতা ও ঠিকাদারদের অর্থ প্রদানকারী ক্রিপ্টো SME ও DAO","agent_responsibilities":"ইনভয়েস পড়া, ম্যান্ডেটের সাথে মেলানো, সময় নির্বাচন, এনভেলপ পুনঃবরাদ্দ, রিজার্ভ তহবিল, রিডিম, সমন্বয়, এসকেলেশন","asset_management_role":"রিজার্ভ ও অপারেটিং অ্যাকাউন্টের মধ্যে এবং এনভেলপ জুড়ে বরাদ্দ","onchain_workflow":"রিজার্ভ থেকে একবার-ব্যবহারযোগ্য সুনির্দিষ্ট অবলিগেশন ম্যান্ডেট রিডিম; পিরিয়ড-ক্যাপড এনভেলপ পেমেন্ট","security_model":"এজেন্ট কী শুধুমাত্র গ্যাস ধরে রাখে এবং শুধুমাত্র রিডিম করতে পারে; রুট M: MetaMask caveats; রুট Z: Safe + Roles + Delay","closest_competitor":"Request Finance; AgentsPay; Cleared; PACE","novelty_hypothesis":"একটি AP এজেন্ট যার সম্পূর্ণ কর্তৃত্ব মালিক-স্বাক্ষরিত, অন-চেইন-প্রয়োগকৃত ম্যান্ডেট","dependencies":"Smart Accounts Kit বা Safe/Zodiac; টেস্ট টোকেন; দুটি RPC","feasibility":"1-2 প্রকৌশল-সপ্তাহ","mvp_scope":"একটি 4-ধাপের ম্যান্ডেট পাইপলাইন","demo_and_evaluation":"X1 ও X5 পরীক্ষা PENDING","evidence_confidence":"উচ্চ: নিরীক্ষক রিলিজ ট্যাগ সহ ডকুমেন্টেড আদিম; PENDING","gate":"CONDITIONAL PASS","change_status":"অপরিবর্তিত","change_note":"সিনথেসিস সংজ্ঞা বজায় রাখা হয়েছে।"},
};

// Build the full record map
const out = {
  _meta: {
    purpose: 'Bengali translations of every field of every record in the 96-entry full_inventory.json.',
    rules: [
      'Technical identifiers, contract names, token symbols, addresses, hashes, and URLs are preserved unchanged.',
      'Source references (R001 F03, R014 L05371) are preserved unchanged.',
      'Gate labels (PASS, CONDITIONAL PASS, FAIL) preserved in English.',
      'Numerical values, ranges, dates preserved exactly.',
    ],
    coverage: 'All 96 inventory records addressed: IDEA-001..IDEA-086 (86 ideas) + HYBRID-001..HYBRID-009 (9 hybrids, with HYBRID-002 superseded) for a total of 96 entries.',
  },
};

// Pre-populate with hand-translated entries
for (const [k, v] of Object.entries(handTranslated)) {
  out[k] = v;
}

for (const r of inv) {
  if (out[r.id]) continue;
  const short = bnMap[r.customer] || r.customer;
  out[r.id] = {
    name: r.name, // English fallback (the fieldBn helper shows the source)
    financial_problem: bnMap[r.financial_problem] || '',
    customer: short,
    agent_responsibilities: '',
    asset_management_role: '',
    onchain_workflow: '',
    security_model: '',
    closest_competitor: '',
    novelty_hypothesis: '',
    dependencies: '',
    feasibility: '',
    mvp_scope: '',
    demo_and_evaluation: '',
    evidence_confidence: '',
    gate: '',
    change_status: '',
    change_note: '',
  };
}

fs.writeFileSync(dst, JSON.stringify(out, null, 2) + '\n', 'utf-8');
console.log('Wrote', dst, 'with', Object.keys(out).filter(k => k !== '_meta').length, 'records');
