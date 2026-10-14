"""Compute SHA-256 checksums for all provided research source files."""
import hashlib
import json
import os
from pathlib import Path

ROOT = Path(r"D:\projects\shenzenpresentation")

# Top-level source files explicitly provided to the build task.
TOP_LEVEL = [
    "agent-wallet-post-audit-decision-summary.md",
    "agent_wallet_research_report.md",
    "Audit_Report.md",
    "claudeaudit.md",
    "finalaudit.md",
    "master_inventory.csv",
    "master_inventory.json",
    "Agent_Wallet_Complete_Decision_Package.zip",
    "All responses.docx",
]

# Decision package inner files (extracted earlier).
PKG_DIR = ROOT / "decision_package_extracted" / "Agent_Wallet_Decision_Package"
INNER_FILES = sorted(
    [
        "Agent_Wallet_Decision_Report.md",
        "Executive_Decision_Memo.md",
        "idea_catalogue.md",
        "manifest.json",
        "original_concept_crosswalk.json",
        "README.md",
        "research_ledgers.json",
        "source_table_rows.json",
    ]
    + [f"anonymous_source_text/R{i:03d}.txt" for i in range(1, 15)]
    + ["anonymous_source_text/source_blocks.json"]
)


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with p.open("rb") as fh:
        for chunk in iter(lambda: fh.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def main() -> None:
    out = {
        "generated": "2026-10-14",
        "root": str(ROOT),
        "top_level": [],
        "decision_package_inner": [],
    }
    for name in TOP_LEVEL:
        p = ROOT / name
        if p.exists():
            out["top_level"].append(
                {"path": name, "size_bytes": p.stat().st_size, "sha256": sha256_file(p)}
            )
        else:
            out["top_level"].append({"path": name, "missing": True})
    for name in INNER_FILES:
        p = PKG_DIR / name
        if p.exists():
            out["decision_package_inner"].append(
                {"path": name, "size_bytes": p.stat().st_size, "sha256": sha256_file(p)}
            )
        else:
            out["decision_package_inner"].append({"path": name, "missing": True})
    (ROOT / "tools" / "source_checksums.json").write_text(
        json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(json.dumps(out, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
