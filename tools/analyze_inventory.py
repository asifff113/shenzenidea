"""Analyze full_inventory.json: count records, identify schema, detect completeness per idea."""
import json
from pathlib import Path
from collections import Counter

ROOT = Path(r"D:\projects\shenzenpresentation")
inv = json.loads((ROOT / "app" / "src" / "data" / "full_inventory.json").read_text(encoding="utf-8"))

print(f"Total records: {len(inv)}")
ids = [r["id"] for r in inv]
hybrids = [i for i in ids if i.startswith("HYBRID")]
ideas = [i for i in ids if not i.startswith("HYBRID")]
print(f"  HYBRIDs: {len(hybrids)} → {hybrids}")
print(f"  IDEAs:   {len(ideas)}  (range {ideas[0]}..{ideas[-1]})")

# All distinct keys across the dataset
all_keys = Counter()
for r in inv:
    for k in r.keys():
        all_keys[k] += 1
print("\nField coverage (count of records containing each key):")
for k, n in sorted(all_keys.items(), key=lambda x: -x[1]):
    print(f"  {n:>3} / {len(inv)}  {k}")

# Field emptiness per record
print("\nNon-empty per record (key -> count of records with non-empty value):")
nonempty = Counter()
for r in inv:
    for k, v in r.items():
        if isinstance(v, str) and v.strip():
            nonempty[k] += 1
        elif isinstance(v, list) and v:
            nonempty[k] += 1
        elif v and not isinstance(v, (str, list)):
            nonempty[k] += 1
for k, n in sorted(nonempty.items(), key=lambda x: -x[1]):
    print(f"  {n:>3}  {k}")
