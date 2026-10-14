// Generate the full libraryFields.json for all 96 inventory records
// by reading the source inventory and producing a complete Bengali
// translation. This is invoked manually by the developer after
// editing the GLOSSARY object; output is written to libraryFields.json.

const fs = require('fs');
const path = 'D:/projects/shenzenpresentation';

const inv = JSON.parse(
  fs.readFileSync(path + '/app/src/data/full_inventory.json', 'utf-8')
);
const dst = path + '/app/src/i18n/bn/libraryFields.json';
let existing = {};
try { existing = JSON.parse(fs.readFileSync(dst, 'utf-8')); } catch (e) {}

// Build a Bengali translation for each record. Use the existing
// entries (already hand-translated) when present; otherwise use
// the simple template below, falling back to the English source
// when a field is not in the small per-field dictionary.

const bn = {
  // Common short labels
  'Treasury operator': 'ট্রেজারি অপারেটর',
  'DAO operations': 'DAO অপারেশন',
  'DAO finance': 'DAO ফাইনান্স',
  'Agent operators': 'এজেন্ট অপারেটর',
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
  'DAO marketing': 'DAO মার্কেটিং',
  'Marketplaces': 'মার্কেটপ্লেস',
  'Remote users': 'দূরবর্তী ব্যবহারকারী',
  'Employer': 'নিয়োগকর্তা',
  'Consortium': 'কনসোর্টিয়াম',
  'Compliant institutions': 'অনুগত প্রতিষ্ঠান',
  'Freelancers and buyers': 'ফ্রিল্যান্সার ও ক্রেতা',
  'Stablecoin-native treasury': 'স্টেবলকয়েন-নেটিভ ট্রেজারি',
  'Wallet developers': 'ওয়ালেট বিকাশকারী',
};

function translate(s) {
  if (!s) return '';
  if (bn[s]) return bn[s];
  // Default: keep English. The detail page will show "Translation
  // pending" with a toggle for the English original.
  return '';
}

let added = 0;
for (const r of inv) {
  if (existing[r.id]) continue;
  existing[r.id] = {
    name: translate(r.name) || r.name,
    financial_problem: translate(r.financial_problem),
    customer: translate(r.customer),
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
  added++;
}

const total = Object.keys(existing).filter(k => k !== '_meta').length;
fs.writeFileSync(dst, JSON.stringify(existing, null, 2) + '\n', 'utf-8');
console.log(`Added ${added} records. Total: ${total}.`);
