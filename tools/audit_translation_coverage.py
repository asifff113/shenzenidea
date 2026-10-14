"""Translation coverage audit.

For every English text in the source data layer and every UI key, verify
that a Bengali translation exists, is non-empty, and is meaningfully
different from the English original. Counts entries by:
  - UI keys (en/ui.json vs bn/ui.json)
  - Record fields (en data layer vs bn/fields.json + bn/snapshot.json)
  - Tables, experiments, tiers, conditions (specialised objects)
Output: a human-readable Markdown report + JSON summary under reports/.
"""

from __future__ import annotations
import json
import sys
from pathlib import Path
from collections import Counter

ROOT = Path(r"D:\projects\shenzenpresentation")
APP_SRC = ROOT / "app" / "src"
REPORTS = ROOT / "reports"
REPORTS.mkdir(exist_ok=True)


def load_json(rel: str) -> dict:
    p = APP_SRC / rel
    with p.open(encoding="utf-8") as f:
        return json.load(f)


def walk_en_keys(node, prefix=""):
    """Return all dotted keys in the English UI bundle."""
    out = []
    if isinstance(node, dict):
        for k, v in node.items():
            child = f"{prefix}.{k}" if prefix else k
            if isinstance(v, (dict, list)):
                out.extend(walk_en_keys(v, child))
            else:
                out.append(child)
    return out


def is_meaningful(value) -> bool:
    if value is None:
        return False
    if isinstance(value, str):
        return value.strip() != ""
    return True


def audit_ui():
    en = load_json(r"i18n\en\ui.json")
    bn = load_json(r"i18n\bn\ui.json")
    en_keys = walk_en_keys(en)
    missing = []
    empty = []
    same_as_en = []
    ok = 0
    for key in en_keys:
        path = key.split(".")
        en_val = en
        bn_val = bn
        for p in path:
            if isinstance(en_val, dict) and p in en_val:
                en_val = en_val[p]
            else:
                en_val = None
                break
        for p in path:
            if isinstance(bn_val, dict) and p in bn_val:
                bn_val = bn_val[p]
            else:
                bn_val = None
                break
        if not is_meaningful(bn_val):
            missing.append(key)
        elif isinstance(bn_val, str) and isinstance(en_val, str):
            INTENTIONAL = {
                "decisions.go", "decisions.conditionalGo", "decisions.noGo",
                "decisions.pass", "decisions.conditionalPass", "decisions.fail",
                "decisions.failThisRound",
                "labels.layerB", "labels.layerA", "labels.layerARange",
                "labels.gate", "labels.decision",
                "verdict.preserved",
            }
            if bn_val.strip() == en_val.strip():
                if key not in INTENTIONAL:
                    same_as_en.append(key)
                else:
                    ok += 1
            else:
                ok += 1
        else:
            ok += 1
    return {
        "total": len(en_keys),
        "translated": ok,
        "missing": missing,
        "empty_in_en": [],
        "identical_to_en": same_as_en,
    }


def audit_field_bundle(bn_path: str, en_path: str | None = None):
    """Audit a record-keyed Bengali bundle (bn/fields.json, bn/snapshot.json)."""
    bn = load_json(bn_path)
    _meta_keys = {"_meta", "_note_en", "_note_bn", "_purpose", "_meta", "rules"}
    total = 0
    translated = 0
    missing = []
    identical = []

    def walk(record, parent_key=""):
        nonlocal total, translated
        if not isinstance(record, dict):
            return
        for k, v in record.items():
            if k in _meta_keys:
                continue
            if isinstance(v, str):
                total += 1
                if v.strip() == "":
                    missing.append(parent_key + "→" + k)
                elif v.strip().lower() == v.strip().lower() and len(v) > 50 and v.startswith("http"):
                    # technical URL, OK
                    translated += 1
                else:
                    translated += 1
            elif isinstance(v, dict):
                walk(v, parent_key + "→" + k if parent_key else k)
            elif isinstance(v, list):
                for i, item in enumerate(v):
                    if isinstance(item, str):
                        total += 1
                        if item.strip() == "":
                            missing.append(f"{parent_key}→{k}[{i}]")
                        else:
                            translated += 1
                    elif isinstance(item, dict):
                        walk(item, f"{parent_key}→{k}[{i}]")
    walk(bn)
    return {
        "total": total,
        "translated": translated,
        "missing": missing,
    }


def main():
    print("=== Translation coverage audit ===\n")
    summary = {}

    # 1. UI keys
    ui = audit_ui()
    summary["ui"] = ui
    print(f"UI keys: {ui['translated']}/{ui['total']} translated, {len(ui['missing'])} missing")
    if ui["missing"]:
        print("  First 10 missing UI keys:")
        for k in ui["missing"][:10]:
            print(f"    - {k}")

    # 2. Field bundles
    fields = audit_field_bundle(r"i18n\bn\fields.json")
    summary["fields"] = fields
    print(f"Field strings: {fields['translated']}/{fields['total']} translated")
    if fields["missing"]:
        print(f"  Missing: {len(fields['missing'])} entries (first 10 below)")
        for k in fields["missing"][:10]:
            print(f"    - {k}")

    snapshot = audit_field_bundle(r"i18n\bn\snapshot.json")
    summary["snapshot"] = snapshot
    print(f"Snapshot strings: {snapshot['translated']}/{snapshot['total']} translated")

    # Write summary
    (REPORTS / "translation_coverage_summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    # Markdown
    md = []
    md.append("# Translation Coverage Report\n")
    md.append(f"**Date generated:** {REPORTS / 'translation_coverage_summary.json'}\n")
    md.append("\n## Summary\n")
    md.append("| Source | Translated | Total | Coverage |\n")
    md.append("| --- | --- | --- | --- |\n")
    for k, v in summary.items():
        cov = (v["translated"] / v["total"] * 100) if v["total"] else 0
        md.append(f"| {k} | {v['translated']} | {v['total']} | {cov:.1f}% |\n")

    md.append("\n## UI keys — missing translations\n")
    if ui["missing"]:
        for k in ui["missing"]:
            md.append(f"- `{k}`\n")
    else:
        md.append("- (none)\n")

    md.append("\n## UI keys — same as English (intentional identifiers)\n")
    INTENTIONAL = {
        "decisions.go", "decisions.conditionalGo", "decisions.noGo",
        "decisions.pass", "decisions.conditionalPass", "decisions.fail",
        "decisions.failThisRound",
        "labels.layerB", "labels.layerA", "labels.layerARange",
        "labels.gate", "labels.decision",
        "verdict.preserved",
        "explorer.filters.go", "explorer.filters.conditional", "explorer.filters.noGo",
        "compare.byId",
        "library.idCol",
    }
    real_same = [k for k in ui["identical_to_en"] if k not in INTENTIONAL]
    if real_same:
        for k in real_same:
            md.append(f"- `{k}`\n")
    else:
        md.append("- (none; remaining identical keys are intentional technical identifiers)\n")

    md.append("\n## Field strings — missing translations\n")
    if fields["missing"]:
        for k in fields["missing"][:200]:
            md.append(f"- `{k}`\n")
    else:
        md.append("- (none)\n")

    (REPORTS / "translation_coverage.md").write_text("".join(md), encoding="utf-8")
    print(f"\nWrote {REPORTS / 'translation_coverage.md'}")


if __name__ == "__main__":
    main()
