#!/usr/bin/env python3
"""Add layerBAndRange and prototypeValidation fields to each RANKING_LAYER_B_BALANCED item."""
import re
from pathlib import Path

P = Path(r"D:\projects\shenzenpresentation\app\src\data\snapshot.ts")
text = P.read_text(encoding="utf-8")

PROTOTYPE = {"HYBRID-008", "IDEA-073", "HYBRID-002R"}

# Find each item: { rank: N, id: "...", ... }
item_re = re.compile(
    r"\{\s*rank: \d+,\s*id: \"([^\"]+)\",(.*?)synthesisRank: \"[^\"]+\",\s*decision: \"[^\"]+\",\s*\}",
    re.DOTALL,
)


def replace_item(m: re.Match) -> str:
    cid = m.group(1)
    body = m.group(0)
    if "layerBAndRange" in body:
        return body
    layer_b_m = re.search(r"layerB: (\d+),", body)
    low_m = re.search(r"layerBLow: (\d+),", body)
    high_m = re.search(r"layerBHigh: (\d+),", body)
    centre_m = re.search(r"layerBCentre: (\d+),", body)
    if not (layer_b_m and low_m and high_m and centre_m):
        return body
    low, high, centre = int(low_m.group(1)), int(high_m.group(1)), int(centre_m.group(1))
    insert = (
        f"    layerBAndRange: \"{low}\u2013{high} ({centre})\",\n"
        f"    prototypeValidation: {str(cid in PROTOTYPE).lower()},\n"
    )
    # insert after the layerB: N, line
    new_body = re.sub(
        r"(layerB: \d+,\n)", r"\1" + insert, body, count=1
    )
    return new_body


new_text = item_re.sub(replace_item, text)
P.write_text(new_text, encoding="utf-8")
print("Patched", P)
print("Items with layerBAndRange:", new_text.count("layerBAndRange"))
print("Items with prototypeValidation:", new_text.count("prototypeValidation"))
