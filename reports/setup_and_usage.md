# Setup and Usage

**Project:** Agent Wallet — Idea Explorer
**Audience:** team members running the project locally or in a meeting room

This document covers everything from a fresh checkout to a finished build, plus the day-to-day commands you will use during team meetings.

## 1. Prerequisites

- **Node.js 20+** (the project is tested on Node 20.x and 22.x).
- **Python 3.10+** (only needed for the integrity validator and coverage report; the application itself is pure JavaScript).
- A modern browser (Chrome, Edge, Firefox, or Safari from 2023 onward). No extension is required.
- Optional: a projector / extended display and a presenter-friendly keyboard for Presentation Mode.

## 2. Install

```bash
cd app
npm install
```

`npm install` pulls React 18, Vite 5, TypeScript 5, Tailwind 3, react-router-dom 6, and Vitest 2. There is no native dependency, so install is fast and reproducible.

## 3. Run the dev server

```bash
cd app
npm run dev
```

Vite serves the application on `http://localhost:5173/` with hot reload. The data layer is read from `app/src/data/`; editing any `.ts` file there refreshes the page in the browser.

## 4. Build for production

```bash
cd app
npm run build
```

Output lands in `app/dist/`:

```
dist/index.html
dist/assets/index-*.css   (~20 KB / 4.7 KB gzipped)
dist/assets/index-*.js    (~433 KB / 121 KB gzipped)
```

The production bundle is a static SPA. Drop `dist/` onto any static-file host (Netlify, GitHub Pages, S3 + CloudFront, an Nginx box) and the app works offline.

To preview the production build locally:

```bash
cd app
npm run preview            # serves on http://localhost:4173/
```

## 5. Test the data layer

```bash
cd app
npm test
```

Vitest runs `tests/data.test.ts` (15 tests) and verifies that the structured data stays internally consistent: the top-10 shortlist has 10 entries in rank order; the three prototype-validation candidates are exactly HYBRID-008, IDEA-073, HYBRID-002R; every experiment is still PENDING; the 96-entry catalogue really has 96 rows.

## 6. Run the source-integrity validator

```bash
python tools/validate_integrity.py
```

The validator recomputes SHA-256 for every source file, then checks 53 specific assertions:

- Top-10 candidate IDs and names match the post-audit package
- Every gate and decision label matches the documented values
- The 7 experiments (X1, X1b, X2, X3, X4, X5, X6) are still present and all marked PENDING
- The Bengali translation file is non-empty, uses Bengali script, and does not inline source formulas
- `master_inventory.csv` has exactly 96 data rows
- The loss formula (`L_max`) is still in the data layer
- The original "Research cutoff" line in the decision report and the "No winner declared" line in the summary are present and unchanged

A non-zero exit code means at least one check failed. Look at `reports/source_integrity_report.md` for the per-check detail.

You can re-run this from anywhere; the script is self-contained.

## 7. Generate the coverage report

```bash
python tools/coverage_report.py
```

Outputs `reports/research_coverage.md` and `reports/research_coverage.json`. Counts populated fields for the top-10 and for the 96-entry catalogue.

## 8. Day-to-day usage during meetings

| What you want to do | Page | Tip |
|---|---|---|
| Show the headline of every shortlisted idea | Overview (`/`) | First slide in a meeting; the ranking table is screen-share friendly |
| Walk a teammate through one idea in detail | Explorer (`/explorer`) → click a card | Use the Quick Understanding tab for newcomers; switch to Technical Deep Dive for engineers |
| Compare the preferred candidate against the alternatives | Compare (`/compare`) | Defaults to HYBRID-008 + IDEA-073; click "Add candidate" to bring in HYBRID-002R |
| Walk through every experiment and its status | Security & Validation (`/security`) | Scroll to the experiments table; press the copy button on any Mermaid diagram to paste it into mermaid.live |
| Explain how the decision changed after the audits | Decision History (`/history`) | Three chronology cards at the top; the post-audit package is the current snapshot |
| Search for a specific idea by ID or source anchor | Full Library (`/library`) | 96 rows, instant search, hybrid-only toggle |
| Open the meeting-ready slide deck | Presentation Mode (`/presentation`) | Keyboard shortcuts: ← / → / Space / PgDn to advance, O to reveal the source pointer, Esc to return to overview |
| Switch the UI to Bengali | Header | Click "বাংলা" in the top right; preserves the original English everywhere it is quoted |

## 9. Source files you should **not** edit

The application is a presentation layer. The following source files are immutable research artefacts and must not be modified:

- `agent-wallet-post-audit-decision-summary.md`
- `agent_wallet_research_report.md`
- `Audit_Report.md`
- `claudeaudit.md`
- `finalaudit.md`
- `master_inventory.csv`
- `master_inventory.json`
- `decision_package_extracted/Agent_Wallet_Decision_Package/…`
- `Agent_Wallet_Complete_Decision_Package.zip`
- `All responses.docx`

The integrity validator asserts the SHA-256 of every one of these on every run. If you need to fix a wording or ranking, the change must be made in the data layer (`app/src/data/*.ts`) and never in the source file.

## 10. Where the data lives (data layer map)

| File | Purpose |
|---|---|
| `app/src/data/types.ts` | Shared TypeScript types |
| `app/src/data/snapshot.ts` | Snapshot dates, inventory totals, ranking table, sensitivity analysis, research-process stages |
| `app/src/data/topShortlist.ts` | The 10 ranked candidates, with verbatim extraction from `finalaudit.md` and `master_inventory.csv` |
| `app/src/data/topFiveDetail.ts` | Top-five detailed labels; the three prototype-validation candidates; the 12 unresolved questions; the 11 final-selection conditions |
| `app/src/data/components.ts` | The 10 supporting components (IDEA-026, IDEA-075, …) with their sources and gates |
| `app/src/data/experiments.ts` | X1, X1b, X2, X3, X4, X5, X6 (all PENDING) |
| `app/src/data/security.ts` | 5 permission tiers (T0–T4), the loss formula, the 11-row control matrix |
| `app/src/data/adjudication.ts` | Audit A (27 findings) and Audit B (17 of 43 dispositions) |
| `app/src/data/diagrams.ts` | Mermaid sources for HYBRID-008, HYBRID-002R, X1 |
| `app/src/data/translations_bn.ts` | Bengali UI labels and key research terms |
| `app/src/data/full_inventory.json` | The 96-entry master catalogue (verbatim from `master_inventory.csv`) |

## 11. Troubleshooting

| Symptom | Fix |
|---|---|
| `npm run dev` complains about port | Run `npm run dev -- --port 5174` |
| The Bengali text shows as boxes | The system needs a Bengali-capable font. Modern OS / browser combinations ship with one; on a projector, switch to a system that does. |
| `python tools/validate_integrity.py` reports a hash mismatch | The source files were modified. Re-extract from the original ZIP (`Agent_Wallet_Complete_Decision_Package.zip`) — see `decision_package_extracted/`. Do not edit the source files in place. |
| The data layer is missing a candidate I expected | The 10 IDs in `app/src/data/topShortlist.ts` come from the post-audit `Ranking (Layer B balanced centre)` table. Anything outside those 10 is a research finding, not a ranked candidate, and belongs to the Library view. |
| A Mermaid diagram looks wrong after copy-paste | The diagram is an interpretation; check the source passages in `finalaudit.md` sections K, O, P and the security tiers table in `app/src/data/security.ts`. |
| The team needs to discuss a candidate without changing the research | Use the meeting script in the Compare view; do not modify any data file. |

## 12. Adding features safely

- **Editing the data layer.** Modify only the `.ts` files under `app/src/data/`. Re-run `npm test` and `python tools/validate_integrity.py` after any change.
- **Adding a new diagram.** Put the Mermaid source in `app/src/data/diagrams.ts` and reference it from the page that needs it. SVG diagrams go in the page component.
- **Adding a new translation.** Add the new key to `app/src/data/translations_bn.ts`. Keep technical English terms (GO, CONDITIONAL GO, NO-GO, CONDITIONAL PASS) in English. Do not add translations that change a number, a formula, or a candidate ID.
- **Adding a new page.** Create the page in `app/src/pages/`, register it in `app/src/App.tsx`, and add a link in `app/src/components/Shell.tsx`. Keep the navigation order consistent.
