// Deduplicate libraryFields.json and validate it covers all 96 records.
const fs = require('fs');
const path = 'D:/projects/shenzenpresentation/app/src/i18n/bn/libraryFields.json';
const data = JSON.parse(fs.readFileSync(path, 'utf-8'));

// Dedupe: keep last occurrence of each key
const deduped = {};
for (const k of Object.keys(data)) {
  if (k === '_meta') {
    deduped[k] = data[k];
  } else {
    // For record keys, keep last occurrence (later definitions win)
    deduped[k] = data[k];
  }
}

// The problem is JSON parse preserves last-occurrence. But our JSON
// file had the same key multiple times in the raw text, which is
// invalid JSON. Let me parse it as a string and dedupe.
const raw = fs.readFileSync(path, 'utf-8');
// Find all top-level keys
const re = /^\s*"([A-Z][A-Z0-9\-]+)":\s*\{/gm;
const matches = [...raw.matchAll(re)];
const seen = new Set();
const lines = raw.split('\n');
const out = [];
let skip = false;
let depth = 0;
let i = 0;
const blocks = [];
let cur = null;
for (let j = 0; j < lines.length; j++) {
  const line = lines[j];
  if (cur === null) {
    const m = line.match(/^(\s*)"([A-Z][A-Z0-9\-]+)":\s*\{(.*)$/);
    if (m) {
      cur = { indent: m[1], key: m[2], startLine: j };
      depth = 1;
    } else {
      blocks.push({ start: j, end: j, lines: [line], key: null });
    }
  } else {
    // count braces
    for (const ch of line) {
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
    }
    if (depth === 0) {
      cur.endLine = j;
      blocks.push({ start: cur.startLine, end: cur.endLine, lines: lines.slice(cur.startLine, cur.endLine + 1), key: cur.key });
      cur = null;
    }
  }
}

// Now build the output: keep last block for each key
const lastForKey = {};
for (const b of blocks) {
  if (b.key) {
    lastForKey[b.key] = b;
  }
}
const ordered = [];
for (let j = 0; j < blocks.length; j++) {
  const b = blocks[j];
  if (b.key) {
    if (lastForKey[b.key].start === b.start) {
      ordered.push(b);
    }
  } else {
    ordered.push(b);
  }
}

const finalLines = [];
for (const b of ordered) {
  finalLines.push(...b.lines);
}
const outStr = finalLines.join('\n');
const finalData = JSON.parse(outStr);

console.log('Total records after dedup:',
  Object.keys(finalData).filter(k => k.startsWith('IDEA-') || k.startsWith('HYBRID-')).length
);

fs.writeFileSync(path, JSON.stringify(finalData, null, 2) + '\n', 'utf-8');
console.log('Wrote deduped file.');
