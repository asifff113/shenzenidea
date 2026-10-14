# Change Summary — Agent Wallet Idea Explorer (Bengali Localization)

## What was the defect?

The original site had a thin localization layer: only navigation,
footer, and a small set of page labels were translated when the user
switched to Bengali. Every page's actual research content — idea
descriptions, security architecture, experiments, comparison tables,
decision history, validation conditions — remained in English.

## How was the defect fixed?

### New i18n architecture

- `app/src/i18n/core.ts` — typed access to the bilingual bundle, with
  fallback tracking so untranslated keys can be detected.
- `app/src/i18n/en/ui.json` and `app/src/i18n/bn/ui.json` — parallel
  bundles for all UI text, page titles, and labels.
- `app/src/i18n/bn/fields.json` — Bengali translations of every
  meaningful research field for each of the 10 ranked candidates
  (name, financial problem, customer, agent responsibilities, asset
  management role, on-chain workflow, security model, closest
  competitor, novelty hypothesis, dependencies, feasibility, MVP
  scope, demo scenario, evidence confidence, three tier-1 problem /
  attractive / concern summaries, change status, change note, layer
  A range, layer B range).
- `app/src/i18n/bn/snapshot.json` — Bengali translations for:
  - research process stages (7 stages)
  - top-three validation (uncertainty + reason per candidate)
  - unresolved questions (Q-01 … Q-12)
  - eleven final-selection conditions (F-01 … F-11)
  - six experiments (X1, X1b, X2, X3, X4, X5, X6) — every field
    (title, status, due, hypothesis, minimum implementation, tools,
    environment, positive/negative/adversarial tests, quantitative
    acceptance, failure conditions, on-chain evidence, exposure
    limit, external dependencies, estimated effort, result
    implications)
  - five security tiers (T0–T4: name, authority, granted-by, route M,
    route Z, agent autonomy, exposure)
  - six supporting components (IDEA-026, IDEA-075, IDEA-076, IDEA-080,
    IDEA-084, IDEA-086)
  - four decision-history events (pre-audit, audit A, audit B,
    post-audit)
  - loss formula heading, body, and source
- `app/src/i18n/glossary.json` — Bengali glosses for 50+ technical
  terms (Smart Account, Spending Limit, Prompt Injection, etc.).

### LanguageContext replacement

`app/src/components/LanguageContext.tsx` was rewritten to:
- Read `?lang=bn` from the URL on first visit.
- Read `aw_lang` from `localStorage` on subsequent visits.
- Persist the selection to `localStorage` and to the URL parameter
  on every change.
- Update the `<html lang>` attribute for screen readers.
- Expose a `t(key)` helper for UI strings and a `useFieldTranslation`
  hook for record fields.

### Component updates

- `Shell.tsx` — uses `t()` for nav, app title, and footer.
- `IdeaCard.tsx` — renders `name` and `financialProblem` in Bengali
  via `fieldBn(id, field, fallback)`.
- `IdeaDetailSections.tsx` — every field of every candidate renders
  through a `<BilingualText>` component with a `View Original
  English` toggle and a side-by-side bilingual mode.
- `BilingualText.tsx` (new) — the core rendering helper. It shows
  Bengali when available, falls back to the English original with a
  clear `[অনুবাদ মুলতুবি]` (translation pending) label when not,
  and offers a side-by-side mode.
- `OverviewPage.tsx` — every paragraph, label, and stat card uses
  Bengali translations from the snapshot bundle.
- `ExplorerPage.tsx` — filter labels, search placeholder, no-results
  message, and tier 2/3/4 explanations all translated.
- `CandidatePage.tsx` — name, security tiers, and all sections use
  Bengali; the page-level controls are bilingual.
- `ComparePage.tsx` — every comparison cell uses the field
  translation. In Bengali mode, each cell shows the Bengali text
  first, with a `<details>` element that reveals the original
  English on click.
- `SecurityPage.tsx` — five tabs (Permission tiers, Loss bound,
  Diagrams, Control matrix, Experiments) all translated; the
  experiments list renders every field of every experiment in
  Bengali.
- `DecisionHistoryPage.tsx` — pre-audit, audit A, audit B, post-audit
  stages, plus the full Audit A (27 findings) and Audit B
  dispositions tables.
- `LibraryPage.tsx` — every translated candidate name and every
  control is bilingual; the gate column and row totals are
  translated.
- `ValidationPage.tsx` — every one of the eleven final-selection
  conditions rendered in Bengali.
- `PresentationPage.tsx` — every slide rendered in both English and
  Bengali; keyboard navigation works in both languages.

### Visual & accessibility

- `app/index.html` — added Google Fonts `Hind Siliguri` and
  `Noto Sans Bengali` for proper Bengali glyph coverage.
- `app/src/index.css` — added `.font-bn` class with proper font
  stack, `line-height: 1.65` for Bengali paragraphs,
  `overflow-wrap: anywhere` for long compound Bengali words, and
  table-friendly line wrapping.

### Coverage audit and quality verification

- `tools/audit_translation_coverage.py` — enumerates every UI key
  and every research field, checks for missing / empty / identical
  translations, and produces a Markdown report. Run with
  `python tools/audit_translation_coverage.py`.
- `tools/verify_source_integrity.py` — recomputes SHA-256 of every
  original research file to confirm the localization has not
  modified any source.

## Files modified

- `app/src/App.tsx` (no structural change, kept)
- `app/src/main.tsx` (no structural change)
- `app/src/index.css` (added Bengali font CSS)
- `app/src/components/Shell.tsx` (translated nav, footer)
- `app/src/components/IdeaCard.tsx` (Bengali name + problem)
- `app/src/components/IdeaDetailSections.tsx` (full bilingual field rendering)
- `app/src/components/LanguageContext.tsx` (URL param + localStorage + HTML lang)
- `app/src/components/BilingualText.tsx` (new — bilingual renderer with side-by-side)
- `app/src/components/MermaidBlock.tsx` (no change, kept source)
- `app/src/components/Badges.tsx` (no change)
- `app/src/components/Cards.tsx` (no change)
- `app/src/pages/OverviewPage.tsx` (full Bengali)
- `app/src/pages/ExplorerPage.tsx` (filters, controls)
- `app/src/pages/CandidatePage.tsx` (full Bengali)
- `app/src/pages/ComparePage.tsx` (every cell translated)
- `app/src/pages/SecurityPage.tsx` (tiers, loss, experiments all translated)
- `app/src/pages/DecisionHistoryPage.tsx` (every event, every audit row)
- `app/src/pages/LibraryPage.tsx` (search, filter, name column translated)
- `app/src/pages/ValidationPage.tsx` (every condition)
- `app/src/pages/PresentationPage.tsx` (every slide)
- `app/src/i18n/core.ts` (new)
- `app/src/i18n/fieldHelpers.ts` (new)
- `app/src/i18n/useFieldTranslation.ts` (new)
- `app/src/i18n/en/ui.json` (new, 245 keys)
- `app/src/i18n/bn/ui.json` (new, 245 keys, 240 translated, 5 intentional)
- `app/src/i18n/bn/fields.json` (new, 10 candidates, 210 strings)
- `app/src/i18n/bn/snapshot.json` (new, 319 strings)
- `app/src/i18n/glossary.json` (new, 50+ terms)
- `app/index.html` (added Bengali fonts)
- `tools/audit_translation_coverage.py` (new)
- `tools/verify_source_integrity.py` (new)
- `reports/translation_coverage.md` (new)
- `reports/translation_coverage_summary.json` (new)
- `reports/translation_quality_report.md` (new)
- `reports/change_summary.md` (this file)

## Original research files — NOT modified

The following files were hashed before and after the localization work.
Their SHA-256 values must remain identical:

- `finalaudit.md`
- `agent-wallet-post-audit-decision-summary.md`
- `claudeaudit.md`
- `Audit_Report.md`
- `master_inventory.csv`
- `master_inventory.json`
- `agent_wallet_research_report.md`

See `reports/source_integrity.json` for the actual hash values.
