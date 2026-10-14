// Validate that the bn libraryFields.json covers all 96 records.
const fs = require('fs');
const path = 'D:/projects/shenzenpresentation/app/src/i18n/bn/libraryFields.json';
const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
const ids = Object.keys(data).filter(k => k.startsWith('IDEA-') || k.startsWith('HYBRID-'));
const hyb = ids.filter(k => k.startsWith('HYBRID-')).sort();
const idea = ids.filter(k => k.startsWith('IDEA-')).sort();
console.log('Total records:', ids.length);
console.log('  HYBRIDs:', hyb.length, hyb);
console.log('  IDEAs:', idea.length, 'first:', idea[0], 'last:', idea[idea.length - 1]);
// Check coverage of all 96 expected
const expected = [];
for (let i = 1; i <= 86; i++) expected.push('IDEA-' + String(i).padStart(3, '0'));
expected.push('HYBRID-001', 'HYBRID-002', 'HYBRID-002R', 'HYBRID-003', 'HYBRID-004', 'HYBRID-005', 'HYBRID-006', 'HYBRID-007', 'HYBRID-008', 'HYBRID-009');
const missing = expected.filter(e => !ids.includes(e));
console.log('Missing expected:', missing);
