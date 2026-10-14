"""Convert master_inventory.csv into a normalized JSON consumed by the web app.

Preserves every field from the CSV. No silent rewrites; only structural
normalization for JSON consumption.
"""
import csv
import json
from pathlib import Path

ROOT = Path(r"D:\projects\shenzenpresentation")
SRC = ROOT / "master_inventory.csv"
OUT = ROOT / "app" / "src" / "data" / "full_inventory.json"


def main() -> None:
    rows = []
    with SRC.open(newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            if not row.get("id"):
                continue
            # Sources is a single text field; keep verbatim.
            row["sources_list"] = [
                s.strip() for s in (row.get("sources") or "").split(";") if s.strip()
            ]
            rows.append(row)
    OUT.write_text(json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(rows)} records to {OUT}")


if __name__ == "__main__":
    main()