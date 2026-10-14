# Source Manifest

**Project:** Agent Wallet — Idea Explorer
**Snapshot date:** 14 October 2026
**Source-of-truth package:** post-audit decision package (`agent-wallet-post-audit-decision-summary.md` + `finalaudit.md`)

Every research artefact that the application depends on is listed here with its path, byte size, SHA-256 checksum, and the way it is consumed. All checksums are recomputed by `tools/validate_integrity.py` on every run; if any file changes unexpectedly, the integrity check fails.

## Primary sources (authoritative)

| File | Size | SHA-256 (truncated) | Used for |
|---|---:|---|---|
| `agent-wallet-post-audit-decision-summary.md` | 2 856 B | `3af6cdbfa51f8acf…` | Headline numbers, provisional preference, GO/CONDITIONAL GO/NO-GO list |
| `finalaudit.md` | 95 624 B | `152fef930e56e2ac…` | Detailed adjudication, candidate deep-dives, experiments, decision-history |

## Supporting sources (historical / origin)

| File | Size | SHA-256 (truncated) | Used for |
|---|---:|---|---|
| `agent_wallet_research_report.md` | 69 603 B | `17135f13c322b6f0…` | Independent preliminary research (pre-audit); labelled as historical in the decision-history view |
| `claudeaudit.md` (Audit A) | 64 195 B | `e7360bfc0e5a8b33…` | 27 adversarial findings; 13 confirmed, 8 partial, 3 need experiments, 2 contradicted, 1 unsupported |
| `Audit_Report.md` (Audit B) | 24 921 B | `32e11f10f82828e4…` | Merger-integrity audit: 43 named findings, completeness FAIL stands, no critical discrepancy |
| `master_inventory.csv` | 81 843 B | `f57bd9c178e8076f…` | 96-entry catalogue; 86 ideas + 10 hybrids; 16 fields per record |
| `master_inventory.json` | 123 952 B | `d4d07f307c6e3cb0…` | Same data as CSV, machine-readable |

## Original research package (extracted)

| File | Size | Used for |
|---|---:|---|
| `decision_package_extracted/Agent_Wallet_Decision_Package/Executive_Decision_Memo.md` | 3 833 B | Pre-audit memo (HYBRID-001 preferred) — historical reference |
| `decision_package_extracted/Agent_Wallet_Decision_Package/Agent_Wallet_Decision_Report.md` | 236 121 B | Consolidated synthesis (70 ideas + 7 hybrids, 51 claim checks, 40 external source records) |
| `decision_package_extracted/Agent_Wallet_Decision_Package/idea_catalogue.md` | 121 271 B | Per-idea catalogue; field-by-field summaries |
| `decision_package_extracted/Agent_Wallet_Decision_Package/research_ledgers.json` | 1 057 077 B | Per-source ledger; URLs, mentions, source items |
| `decision_package_extracted/Agent_Wallet_Decision_Package/source_table_rows.json` | 383 659 B | Original report table rows; verbatim extraction |
| `decision_package_extracted/Agent_Wallet_Decision_Package/original_concept_crosswalk.json` | 120 844 B | Source-to-synthesis crosswalk |
| `decision_package_extracted/Agent_Wallet_Decision_Package/manifest.json` | 3 397 B | Package manifest (all 22 listed files match) |
| `decision_package_extracted/Agent_Wallet_Decision_Package/anonymous_source_text/R001.txt` … `R014.txt` | (14 files) | 14 anonymised research exports (the supply set behind the synthesis) |
| `decision_package_extracted/Agent_Wallet_Decision_Package/anonymous_source_text/source_blocks.json` | 1 113 397 B | All anchored source blocks; raw provenance |
| `Agent_Wallet_Complete_Decision_Package.zip` | 1 031 693 B | Original ZIP archive (hash matches the synthesis's claim) |
| `All responses.docx` | 827 067 B | Original DOCX (SHA-256 `15d768c66095b62e…`; matches the synthesis's report) |

## Generated artefacts

| File | Used for |
|---|---|
| `tools/source_checksums.json` | SHA-256 of all primary + supporting source files; recomputed by `validate_integrity.py` |
| `tools/validate_integrity.py` | Runs the integrity checks; exits non-zero on any failure |
| `tools/patch_snapshot.py` | One-off helper that added the `layerBAndRange` and `prototypeValidation` fields to `RANKING_LAYER_B_BALANCED`; run during data layer construction |
| `reports/source_integrity_report.md` | Markdown table of every integrity check, OK / FAIL |
| `reports/source_integrity_report.json` | Same data, machine-readable |
| `reports/source_manifest.md` | This file |
| `reports/research_coverage.md` | Per-candidate field coverage for the top 10 + library |
| `reports/interface_testing.md` | Functions exercised and their results |
| `reports/setup_and_usage.md` | How to install, run, build, validate, and present |

## What is **not** in the source set

The post-audit summary names nine Audit B supporting files that were not supplied to the audit team. These are likewise not available to this application:

- R004 full research notebook
- Clean pre-concatenation R006
- R007 referenced canvas
- R008 concepts 6–10
- R014 sections 1–6
- Audit B's full traceability matrix
- Audit B's 12 of 22 high-priority discrepancy records (full file)
- e-invoice preprint (arXiv 2609.37819) — was rate-limited on 13 Oct

Where any of these would resolve an open question, the application shows the question and the evidence that would resolve it (see `UNRESOLVED_QUESTIONS` and `FINAL_SELECTION_CONDITIONS` in the data layer). It does not invent content to fill the gap.
