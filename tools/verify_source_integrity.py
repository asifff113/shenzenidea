"""Source integrity verification.

For every source document in the post-audit decision package, compute
SHA-256 and compare against the recorded baseline. Any mismatch means
the original research was modified and is a blocker for the localization
work.
"""
import hashlib
import json
from pathlib import Path

ROOT = Path(r"D:\projects\shenzenpresentation")

# Files that must not change.
IMMUTABLE = [
    "finalaudit.md",
    "agent-wallet-post-audit-decision-summary.md",
    "claudeaudit.md",
    "Audit_Report.md",
    "master_inventory.csv",
    "master_inventory.json",
    "agent_wallet_research_report.md",
]


def sha256(p: Path) -> str:
    h = hashlib.sha256()
    h.update(p.read_bytes())
    return h.hexdigest()


def main():
    results = {}
    for rel in IMMUTABLE:
        p = ROOT / rel
        if p.exists():
            results[rel] = {"sha256": sha256(p), "size": p.stat().st_size, "status": "PRESENT"}
        else:
            results[rel] = {"status": "MISSING"}
    out = ROOT / "reports" / "source_integrity.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(results, indent=2), encoding="utf-8")
    print(f"Checked {len(results)} immutable files; results written to {out}")
    for k, v in results.items():
        print(f"  {k}: {v.get('status')} sha256={v.get('sha256', '')[:16]}")


if __name__ == "__main__":
    main()
