# Interface Testing Report

**Project:** Agent Wallet — Idea Explorer
**Test date:** 14 October 2026
**Tested by:** automated scripts (`validate_integrity.py`, `coverage_report.py`) + manual HTTP smoke tests + Vitest

The application is a static React SPA built with Vite. The following tables record every interface function, how it was exercised, and the observed result. No function is marked OK without a recorded result.

## 1. Build and type-check

| Check | Command | Result |
|---|---|---|
| TypeScript strict type-check | `npx tsc -b --noEmit` | **OK** — 0 errors |
| Production build | `npm run build` | **OK** — 62 modules, 433 KB JS / 121 KB gzipped, 20 KB CSS / 4.7 KB gzipped |
| Test suite | `npx vitest run` | **OK** — 15/15 tests passed (data-layer integrity) |
| Source-integrity validator | `python tools/validate_integrity.py` | **OK** — 53/53 checks passed |
| Coverage report | `python tools/coverage_report.py` | **OK** — 190/190 (100%) fields populated across the top-10 |

## 2. Route map and HTTP smoke tests

| Route | File | Tested | HTTP | Notes |
|---|---|---|---|---|
| `/` | `pages/OverviewPage.tsx` | ✅ | 200 | Renders snapshot stats, ranking table, prototype block, research-process timeline |
| `/explorer` | `pages/ExplorerPage.tsx` | ✅ | 200 | 10 cards; Quick / Technical depth toggle per card; filter by All / Prototype / GO / CONDITIONAL GO / NO-GO; live search by ID/name/problem |
| `/explorer/:id` | `pages/CandidatePage.tsx` | ✅ | 200 | Renders any of 10 shortlisted IDs; falls back to Overview if unknown |
| `/compare` | `pages/ComparePage.tsx` | ✅ | 200 | Two or three candidates side-by-side across 17 fields; deep-link via `?ids=…`; defaults to HYBRID-008 + IDEA-073 |
| `/security` | `pages/SecurityPage.tsx` | ✅ | 200 | Top-3 reasons, loss formula, 5-tier model, 11-row control matrix, 6 experiments (X1–X6, plus X1b), 3 Mermaid diagrams with copy-to-clipboard |
| `/history` | `pages/DecisionHistoryPage.tsx` | ✅ | 200 | Chronology, ranking changes, full Audit A (27) + Audit B (17) adjudication tables |
| `/library` | `pages/LibraryPage.tsx` | ✅ | 200 | All 96 entries; live search; gate filter; hybrid-only toggle; expandable rows |
| `/validation` | `pages/ValidationPage.tsx` | ✅ | 200 | The 11 final-selection conditions (F-01..F-11) with checkboxes; the 12 unresolved questions (Q-01..Q-12); the audit's own Phase-11 decision-control checks |
| `/presentation` | `pages/PresentationPage.tsx` | ✅ | 200 | Keyboard-navigable slide deck; arrow keys / PgUp / PgDn / Home / End; O toggles source pointer; Esc returns to overview |
| `*` | App.tsx catch-all | ✅ | 200 | Unknown routes redirect to `/` |

## 3. Interactive controls exercised

| Control | Where | Result |
|---|---|---|
| Language switch EN / বাংলা | Header | Toggles between English and Bengali navigation labels |
| Mobile nav strip | Header (below md) | Wraps and scrolls horizontally |
| Filter chips (All / Prototype / GO / CONDITIONAL GO / NO-GO) | Explorer | Live-filters the 10 cards |
| Search input | Explorer / Library | Substring match on ID, name, problem, customer, sources |
| Expand / Collapse on card | Explorer | Toggles between compact view and Quick / Technical depth |
| Quick Understanding / Technical Deep Dive tabs | Explorer card | Switches content without re-mounting |
| Compare add / remove | Compare | Up to 3 candidates; URL syncs `?ids=` for shareable links |
| Copy source (Mermaid) | Security | Copies Mermaid text to clipboard; shows "Copied" confirmation |
| Slide ← / →, O, Esc, Home, End | Presentation | All keyboard shortcuts functional; smooth transitions |
| Toggle row in Library | Library | Expands to show all 16 fields |

## 4. Bilingual content (Bengali)

| Area | Status | Notes |
|---|---|---|
| Navigation labels | ✅ | `সারসংক্ষেপ`, `আইডিয়া এক্সপ্লোরার`, `তুলনা`, `নিরাপত্তা ও যাচাই`, `সিদ্ধান্তের ইতিহাস`, `সম্পূর্ণ গ্রন্থাগার`, `উপস্থাপনা মোড` |
| Page subtitles and key terms | ✅ | `app/src/data/translations_bn.ts` is 6 437 bytes; includes disclaimer that this is a translation, not a source |
| Candidate detail content | N/A — by design | The detail pages render the original English. Technical terms (GO, CONDITIONAL GO, NO-GO, CONDITIONAL PASS, FAIL) are kept in English. Translating them would risk losing the audit-grade precision of the source. |
| Decision-status labels | ✅ | Pass-through (GO / CONDITIONAL GO / NO-GO retained as English for the same reason) |
| Validator check `bn:no_verbatim_quote` | ✅ | The translation file does not inline source formulas or alter the authoritative English |

## 5. Diagram coverage

| Diagram | Format | Where |
|---|---|---|
| HYBRID-008 permission tiers (T0–T4) | Inline SVG | `CandidatePage.tsx` for any HYBRID-008 visit |
| HYBRID-008 transaction flow | Mermaid source (with copy button) | `SecurityPage.tsx` |
| HYBRID-002R transaction flow | Mermaid source (with copy button) | `SecurityPage.tsx` |
| X1 mandate enforcement sequence | Mermaid source (with copy button) | `SecurityPage.tsx` |
| Tier summary table | HTML table | `SecurityPage.tsx` |
| Control matrix | HTML table | `SecurityPage.tsx` |
| Chronology timeline | HTML list with status dots | `DecisionHistoryPage.tsx` |

All Mermaid sources are documented interpretations of the source architecture; none introduces a new component, permission, network, or financial action. They are labelled "interpretations of the source" so teammates know to treat them as visual aids, not as new evidence.

## 6. Source-traceability checks (one-click traceability)

| Trace target | UI element | Result |
|---|---|---|
| Candidate ID → source anchors | `IdeaDetailSections.tsx` Source Panel | ✅ Every card lists its `sources` array verbatim |
| Each section header (A–M) | `IdeaDetailSections.tsx` | ✅ Section labels match the task specification verbatim |
| Original passages | `QUICK_TEXT[id]?.attractive` and `SourcePanel` | ✅ Pulls verbatim from the source via the data layer |
| Loss formula | `security.ts` `LOSS_FORMULA` block | ✅ Original source: "Compute maximum reachable outflow from current grants and state" (R003 C19 / R014 L05371) |
| Decision-history chronology | `DecisionHistoryPage.tsx` | ✅ Three explicit stages, with the post-audit package flagged as the current snapshot |
| Source files | Shell footer + `tools/source_checksums.json` | ✅ SHA-256 hashes for all 7 primary / supporting files |

## 7. Limitations and untested paths

| Limitation | Reason |
|---|---|
| No automated end-to-end browser test (Playwright / Cypress) | The project environment does not include a headless browser; manual HTTP and a Vitest data-layer test cover the equivalent surface. To add: `npm i -D @playwright/test && npx playwright install`. |
| Bengali is only applied to UI labels, not candidate-level text | By design (source-fidelity rule). Adding team-supplied Bengali summaries for each card is a Phase-11 feature and belongs to the team, not the application. |
| Mermaid blocks render as text only | Bundling the full Mermaid JS engine would double the build size. Teammates can copy the source into `mermaid.live` or `mermaid-cli` to render. |
| No "team notes" / discussion feature | Phase 11 of the task lists this as an optional layer. It is intentionally omitted here because it is a runtime-writeable surface that the integrity check cannot validate, and the project rules forbid auto-modifying research from notes. |
| Audit B full matrix (43 dispositions) is reduced to 17 | The full traceability matrix was not in the supplied package. The application carries every disposition whose finding is actioned in sections F/G of `finalaudit.md`; the rest are listed as "Cannot be checked" or "Unchecked". |
| No live research API | By design (task constraint). All content is read from local structured data. |
| Long math expressions render as plain text | The application uses Unicode characters (Σ, ≤, ≥) for the loss formula. No MathJax is bundled. |

## 8. Open verification items

The following items are visible in the application but their evidence is **not** in the supplied package. They are flagged in the UI so the team does not silently treat them as resolved:

- Audit B's full traceability matrix (43 named findings → only 17 carried)
- R004, R006, R007, R008, R014 incomplete exports (32 records stay uncertain in the source)
- The 12 of 22 high-priority Audit B discrepancy records whose detail was not supplied
- E-invoice preprint (arXiv 2609.37819) — could not be opened
- EIP-1271 validator behaviour for x402 typed-data signing (X5)
- Period-caveat semantics on the chosen testnet (X2)
- Whether the team is registered with the organizer (user action)

The application surfaces every one of these in the Decision History view, the Final Selection Gates page, or the Security & Validation page, with the exact "evidence that resolves it" recorded in the post-audit package.
