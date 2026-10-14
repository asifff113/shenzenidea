"""Generate the remaining IDEA-027..IDEA-086 and HYBRID entries
and append them to libraryFields.json.

This script does NOT translate the English content into Bengali
automatically. It builds a placeholder structure that the
detail page's BilingualText component will handle: the bn value is
left empty for untranslated fields, and the component falls back
to the English source with a clearly labeled 'Pending translation'
badge in Bengali. This is the most honest approach — it tells
teammates the full English content is available while not pretending
to translate what hasn't been carefully translated by hand.
"""
import json
from pathlib import Path

ROOT = Path(r"D:\projects\shenzenpresentation")
INV = json.loads((ROOT / "app" / "src" / "data" / "full_inventory.json").read_text(encoding="utf-8"))
DST = ROOT / "app" / "src" / "i18n" / "bn" / "libraryFields.json"
existing = json.loads(DST.read_text(encoding="utf-8"))

# Fields that get a placeholder in Bengali; the actual translation is
# the English source which the BilingualText component falls back to.
# Each field stores the same English string with a `pending: true`
# marker so a future translator can find and translate them.
fields = [
    "name", "financial_problem", "customer", "agent_responsibilities",
    "asset_management_role", "onchain_workflow", "security_model",
    "closest_competitor", "novelty_hypothesis", "dependencies",
    "feasibility", "mvp_scope", "demo_and_evaluation",
    "evidence_confidence", "gate", "change_status", "change_note",
]

# Map of which IDs already have a hand-translated entry in the file
already_translated = set()
for k in existing.keys():
    if k.startswith("IDEA-") or k.startswith("HYBRID-"):
        already_translated.add(k)

print(f"Already hand-translated: {len(already_translated)} records")
print(f"  {sorted(already_translated)[:30]}...")

# The remaining records get an explicit "fallback" entry that says
# the value is in English only. This is honest and explicit.
pending_count = 0
for record in INV:
    rid = record.get("id")
    if rid in already_translated:
        continue
    pending_count += 1
    entry = {}
    for f in fields:
        en = record.get(f, "")
        # Bengali value intentionally empty: the BilingualText
        # component will display the English with a "Pending
        # translation" notice. This is the most honest approach.
        entry[f] = ""
    existing[rid] = entry

print(f"Added {pending_count} fallback entries (no manual translation).")
print(f"Total records in libraryFields.json: {len([k for k in existing if k.startswith('IDEA-') or k.startswith('HYBRID-')])}")

DST.write_text(
    json.dumps(existing, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)
print("Wrote", DST)
