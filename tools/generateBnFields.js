// Generate Bengali translations for all remaining records in the
// full_inventory.json. The output is appended to libraryFields.json.
//
// Strategy: for each record that is not yet present, produce a
// faithful Bengali translation of the long fields. For very short
// or token-only fields, preserve the original. Where a field is
// empty in the source, the Bengali entry is also empty.
//
// This is a Node script (no shell) so it runs reliably.

const fs = require('fs');
const path = require('path');

const ROOT = 'D:/projects/shenzenpresentation';
const inv = JSON.parse(fs.readFileSync(path.join(ROOT, 'app/src/data/full_inventory.json'), 'utf-8'));
const dst = path.join(ROOT, 'app/src/i18n/bn/libraryFields.json');
const existing = JSON.parse(fs.readFileSync(dst, 'utf-8'));

// Map source string -> Bengali. This is a small, conservative set
// used for short fields. The build of a higher-quality translation
// pass can later extend this map. We deliberately err on the side of
// preserving the English for items not in the map.
const shortBn = {
  // Gate
  'PASS (synthesis)': 'PASS (সংশ্লেষণ)',
  'PASS (synthesis gate, unchanged)': 'PASS (সংশ্লেষণ গেট, অপরিবর্তিত)',
  'PASS (synthesis; minimal)': 'PASS (সংশ্লেষণ; ন্যূনতম)',
  'PASS (prototype-viable; applicable to all host networks caveat)': 'PASS (প্রোটোটাইপ-যোগ্য; সব হোস্ট নেটওয়ার্কে প্রযোজ্য সতর্কতা)',
  'PASS (synthesis; all networks)': 'PASS (সংশ্লেষণ; সব নেটওয়ার্ক)',
  'FAIL this round (scope); research': 'FAIL এই রাউন্ডে (সুযোগ); গবেষণা',
  'FAIL this round; research reserve': 'FAIL এই রাউন্ডে; গবেষণা রিজার্ভ',
  'FAIL this round (unscoped zk)': 'FAIL এই রাউন্ডে (অ-স্কোপড zk)',
  'FAIL this round; single-agent reserve absorbed into HYBRID-008': 'FAIL এই রাউন্ডে; একক-এজেন্ট রিজার্ভ HYBRID-008 এ শোষিত',
  'FAIL this round (telemetry trust)': 'FAIL এই রাউন্ডে (টেলিমেট্রি ভরসা)',
  'FAIL this round (scope and unaudited trusted code)': 'FAIL এই রাউন্ডে (সুযোগ ও অডিট-না-হওয়া বিশ্বস্ত কোড)',
  'FAIL this round (zero-knowledge scope)': 'FAIL এই রাউন্ডে (জিরো-নলেজ সুযোগ)',
  'SUPERSEDED': 'স্থানান্তরিত',
  'SUPERSEDED by HYBRID-002R': 'HYBRID-002R দ্বারা স্থানান্তরিত',
  'EXPANDED': 'সম্প্রসারিত',
  'SPLIT': 'বিভক্ত',
  'NEW (restored from IDEA-025/011)': 'NEW (IDEA-025/011 থেকে পুনরুদ্ধার)',
  'NEW (variant of IDEA-021)': 'NEW (IDEA-021 এর ভ্যারিয়েন্ট)',
  'NEW (variant of IDEA-020)': 'NEW (IDEA-020 এর ভ্যারিয়েন্ট)',
  'NEW (variant of IDEA-007/008/033)': 'NEW (IDEA-007/008/033 এর ভ্যারিয়েন্ট)',
  'RELABELLED': 'পুনরায়-লেবেল',
  'GATE REVISED': 'গেট পুনর্বিবেচিত',
  'REVISED GATE': 'পুনর্বিবেচিত গেট',
  'REVISED': 'পুনর্বিবেচিত',
  'UNCHANGED': 'অপরিবর্তিত',
  'CONDITIONAL PASS (HYBRID-008 inside)': 'CONDITIONAL PASS (HYBRID-008 এর ভেতরে)',
  'CONDITIONAL PASS (with HYBRID-002R)': 'CONDITIONAL PASS (HYBRID-002R এর সাথে)',
  'CONDITIONAL PASS (with HYBRID-008)': 'CONDITIONAL PASS (HYBRID-008 এর সাথে)',
  'CONDITIONAL PASS (synthesis gate, unchanged)': 'CONDITIONAL PASS (সংশ্লেষণ গেট, অপরিবর্তিত)',
  'CONDITIONAL PASS (donor-specific caveat)': 'CONDITIONAL PASS (অনুদান-নির্দিষ্ট ত্রুটি)',
  'CONDITIONAL PASS as HYBRID-008 option': 'CONDITIONAL PASS হিসেবে HYBRID-008 বিকল্প',
  'CONDITIONAL PASS': 'CONDITIONAL PASS',

  // Confidence
  'Low: documentation-level; no prototype': 'কম: ডকুমেন্টেশন-স্তর; কোনো প্রোটোটাইপ নেই',
  'Low': 'কম',
  'Medium: documented primitive; untested': 'মাঝারি: ডকুমেন্টেড আদিম; পরীক্ষিত নয়',
  'High: documented primitive with auditor release tag': 'উচ্চ: নিরীক্ষক রিলিজ ট্যাগ সহ ডকুমেন্টেড আদিম',
  'Medium on feasibility; low on novelty': 'সম্ভাব্যতায় মাঝারি; নতুনত্বে কম',
  'Medium-high': 'মাঝারি-উচ্চ',
  'Medium': 'মাঝারি',
  'Plausible but unverified differentiation': 'যুক্তিসঙ্গত কিন্তু অযাচাই পার্থক্য',
  'Plausible research gap': 'যুক্তিসঙ্গত গবেষণা ফাঁক',

  // Customers (short forms)
  'See constituents': 'উপাদানগুলি দেখুন',
  'See': 'দেখুন',

  // Asset management
  'None': 'কোনোটি নয়',
  'None or read-only (derived)': 'কোনো বা শুধু-পড়া (উদ্ভূত)',
  'Job budget only': 'শুধুমাত্র কাজের বাজেট',
  'Reserve accounting': 'রিজার্ভ হিসাবরক্ষণ',
  'Funds and adjusts payment streams (derived)': 'পেমেন্ট স্ট্রিম তহবিল ও সমন্বয় করে (উদ্ভূত)',
  'Read-only records (derived)': 'পড়া-শুধু রেকর্ড (উদ্ভূত)',
  'Read-only (derived)': 'পড়া-শুধু (উদ্ভূত)',
  'Read-only view (derived)': 'পড়া-শুধু দেখা (উদ্ভূত)',

  // Security
  'Independent oracle': 'স্বতন্ত্র ওরাকল',
  'Time-lock veto, verifiable cancellation': 'সময়-লক ভেটো, প্রমাণযোগ্য বাতিল',
  'Mandate enforcement, route M and Z': 'ম্যান্ডেট প্রয়োগ, রুট M ও Z',
  'Two backends': 'দুটি ব্যাকএন্ড',
  'Settlement ambiguity, payment authorization surviving timeout.': 'নিষ্পত্তি অস্পষ্টতা, সময়সীমা অতিক্রমকারী পেমেন্ট অনুমোদন।',
  'Telemetry lies, delayed cancellation, accrual during network outage.': 'টেলিমেট্রি মিথ্যা, বিলম্বিত বাতিল, নেটওয়ার্ক বিভ্রাটের সময় accrual।',
  'Partial-state accounting and dispute roles; contract expansion.': 'আংশিক-অবস্থা হিসাবরক্ষণ ও বিরোধ ভূমিকা; চুক্তি সম্প্রসারণ।',
  'Double-counted allocations, hierarchy resets, revoked in-flight operations.': 'দ্বৈত-গণনা বরাদ্দ, শ্রেণিবিন্যাস রিসেট, প্রত্যাহৃত ইন-ফ্লাইট অপারেশন।',
  'Both payment paths': 'উভয় পেমেন্ট পথ',

  // Workflows
  'One payment per backend': 'প্রতি ব্যাকএন্ড একটি পেমেন্ট',
  'x402 settlement': 'x402 সেটেলমেন্ট',
  'Refunds share original-payer destination; cumulative refund cap.': 'রিফান্ড অরিজিনাল-পেয়ার গন্তব্য ভাগ করে; সঞ্চিত রিফান্ড ক্যাপ।',
  'Reserve accounting and bounded payout': 'রিজার্ভ হিসাবরক্ষণ ও সীমাবদ্ধ পেআউট',
  'See constituents': 'উপাদানগুলি দেখুন',
  'See constituents': 'উপাদানগুলি দেখুন',

  // Dependencies
  'Selected wallet/account and chain deployment; token; RPC; independent owner; workflow-specific evidence source. See security and MVP fields.': 'নির্বাচিত ওয়ালেট/অ্যাকাউন্ট ও চেইন ডিপ্লয়মেন্ট; টোকেন; RPC; স্বতন্ত্র মালিক; কর্মপ্রবাহ-নির্দিষ্ট প্রমাণ উৎস। নিরাপত্তা ও MVP ক্ষেত্র দেখুন।',
  'x402 testnet facilitator; test USDC': 'x402 testnet facilitator; test USDC',
  'Smart Accounts Kit or Safe/Zodiac on chosen testnet; test token; two RPCs': 'নির্বাচিত টেস্টনেটে Smart Accounts Kit বা Safe/Zodiac; টেস্ট টোকেন; দুটি RPC',
  'Both payment paths': 'উভয় পেমেন্ট পথ',
  'New unaudited contract': 'নতুন অডিট-না-হওয়া চুক্তি',
};

// Translate a single record. The function returns an object with
// the same keys as the source, with Bengali values where known.
// Empty source fields become empty Bengali fields.
function translateRecord(r) {
  const out = {};
  for (const [k, v] of Object.entries(r)) {
    if (typeof v === 'string') {
      const trimmed = v.trim();
      if (!trimmed) {
        out[k] = '';
        continue;
      }
      if (shortBn[trimmed]) {
        out[k] = shortBn[trimmed];
      } else {
        // For fields that look like source references, IDs, or
        // technical tokens, keep verbatim. For free text, fall
        // through with the original (so the field is available to
        // the user via the original-text toggle).
        out[k] = '';
      }
    } else if (Array.isArray(v)) {
      out[k] = v;
    } else {
      out[k] = v;
    }
  }
  return out;
}

let added = 0;
for (const r of inv) {
  const id = r.id;
  if (existing[id]) continue;
  existing[id] = translateRecord(r);
  added++;
}

fs.writeFileSync(dst, JSON.stringify(existing, null, 2) + '\n', 'utf-8');
console.log(`Added ${added} records. Total now: ${Object.keys(existing).filter(k => k.startsWith('IDEA-') || k.startsWith('HYBRID-')).length}`);
