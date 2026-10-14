# Research-coverage report

**Snapshot:** 14 Oct 2026 · **Tool:** tools/coverage_report.py

Every record in master_inventory.csv has 19 fields. This report counts the populated fields for the top-10 shortlist and for the entire 96-entry catalogue.

## Top-10 shortlist

| ID | Name | Gate | Populated | Missing fields |
|---|---|---|---:|---|
| HYBRID-008 | Mandate-bound obligation treasury | CONDITIONAL PASS | 19/19 | — |
| IDEA-073 | Budget envelope treasury | PASS (prototype-eligible) | 19/19 | — |
| IDEA-001 | Bounded invoice payout | PASS (prototype-eligible; organizer network caveat shared by all) | 19/19 | — |
| HYBRID-002R | ServiceMeter with failure stop (revised) | CONDITIONAL PASS | 19/19 | — |
| HYBRID-009 | Obligation-reserved agent commerce | CONDITIONAL PASS (only if X1 and X5 both pass by 15 Oct) | 19/19 | — |
| IDEA-033 | Original-payer refund governor | CONDITIONAL PASS | 19/19 | — |
| HYBRID-001 | ObligationLock (as specified, custom executor) | FAIL this round (scope and unaudited trusted code) | 19/19 | — |
| HYBRID-003 | PolicyProof payment conformance | FAIL this round; research reserve | 19/19 | — |
| IDEA-074 | Forecast-buffer liquidity sweep | CONDITIONAL PASS as HYBRID-008 stretch only | 19/19 | — |
| IDEA-081 | Attestation-gated escrow | FAIL this round (unavailable dependency) | 19/19 | — |

**Top-10 coverage:** 190/190 (100.0%)

## Full 96-entry catalogue

| Status | Count | % |
|---|---:|---:|
| Fully populated | 96 | 100.0% |
| Partially populated | 0 | 0.0% |
| Empty | 0 | 0.0% |

**Catalogue coverage:** 1824/1824 fields (100.0%)

## Per-field coverage across the catalogue

| Field | Populated | % |
|---|---:|---:|
| `id` | 96/96 | 100.0% |
| `name` | 96/96 | 100.0% |
| `financial_problem` | 96/96 | 100.0% |
| `customer` | 96/96 | 100.0% |
| `agent_responsibilities` | 96/96 | 100.0% |
| `asset_management_role` | 96/96 | 100.0% |
| `onchain_workflow` | 96/96 | 100.0% |
| `security_model` | 96/96 | 100.0% |
| `closest_competitor` | 96/96 | 100.0% |
| `novelty_hypothesis` | 96/96 | 100.0% |
| `dependencies` | 96/96 | 100.0% |
| `feasibility` | 96/96 | 100.0% |
| `mvp_scope` | 96/96 | 100.0% |
| `demo_and_evaluation` | 96/96 | 100.0% |
| `evidence_confidence` | 96/96 | 100.0% |
| `gate` | 96/96 | 100.0% |
| `sources` | 96/96 | 100.0% |
| `change_status` | 96/96 | 100.0% |
| `change_note` | 96/96 | 100.0% |

## Source-anchor coverage

| Field | Has anchor (R###:L#####) | % |
|---|---:|---:|
| `sources` | 86/96 | 89.6% |
| `sources_list` | 0/96 | 0.0% |

## Known gaps and uncertainties

- **Five source reports are incomplete in the supplied extract** (R004, R006, R007, R008, R014). Where this affects a shortlisted candidate, the candidate row notes the affected fields.
- **Audit B's full traceability matrix was not supplied.** The application carries the 17 dispositions whose findings are actioned in sections F/G of finalaudit.md; the remaining ~26 are listed but unchecked.
- **Master inventory rows are always carried forward in full** (96 entries verified by `validate_integrity.py`). The Library page renders every row; missing fields show as blank cells, never as invented values.
- **Bengali translation covers** UI labels, navigation, and key research terms. Candidate-level translations are not auto-generated: the candidate-detail pages render the original English so the technical meaning and source citations are never diluted.
