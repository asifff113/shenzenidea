# Translation Quality Report

**Date:** 14 Oct 2026
**Project:** Agent Wallet — Idea Explorer (Bengali localization)
**Source authoritative package:** `finalaudit.md`, `agent-wallet-post-audit-decision-summary.md`, 14 Oct 2026

## 1. What was translated

Every user-facing surface in the application:

- 9 page components (Overview, Explorer, Candidate, Compare, Security, Decision History, Library, Final Selection Gates, Presentation Mode)
- 1 shell with navigation, language switcher, and footer
- 5 shared components (IdeaCard, IdeaDetailSections, BilingualText, Badges, MermaidBlock)
- 1 context provider for language
- 1 i18n core (`i18n/core.ts`) + 1 fields helper (`i18n/fieldHelpers.ts`)
- Bengali field-translation bundle for the 10 ranked candidates (`i18n/bn/fields.json`)
- Bengali snapshot bundle for tiers, experiments, conditions, top-three validation, decision-history events, security loss formula, and unresolved questions (`i18n/bn/snapshot.json`)
- Bengali UI bundle (`i18n/bn/ui.json`)
- English authoritative UI bundle (`i18n/en/ui.json`)

## 2. What was deliberately not translated

- **Technical identifiers and standard names:** `HYBRID-008`, `IDEA-073`, `USDC`, `Base Sepolia`, `MetaMask`, `Safe`, `Zodiac`, `Roles`, `x402`, `ERC-4337`, `EIP-3009`, `EIP-7710`, `EIP-1271`, `A1`–`A5`, `X1`–`X6`, `F-01`–`F-11`, `R001`–`R014`, `L04088`, `L05371`, `C19`, `T0`–`T4`, `Route M`, `Route Z`.
- **Decisions and gates:** `GO`, `CONDITIONAL GO`, `NO-GO`, `PASS`, `CONDITIONAL PASS`, `FAIL`, `FAIL this round`, `PENDING`. Bengali view shows the English label followed by a Bengali gloss.
- **Status text in source citations:** e.g. `R001 F22 (F22)`, `master_inventory.csv` references, URL anchors — kept exactly.
- **Numerical values and ranges:** `78`, `68–86`, `Layer B 78`, `0.7` lead difference — all preserved.
- **Code identifiers and paths:** `viem`, `Tailwind`, `React`, `HashRouter`, JSON file names.

## 3. Terminology decisions

The Bengali translation follows these conventions for technical terms
(English term is preserved alongside the Bengali for clarity):

| English | বাংলা |
| --- | --- |
| Smart Account | স্মার্ট অ্যাকাউন্ট |
| Smart Contract | স্মার্ট কন্ট্র্যাক্ট |
| Spending Limit | খরচের সীমা |
| Prompt Injection | প্রম্পট ইনজেকশন |
| Transaction Hash | ট্রানজ্যাকশন হ্যাশ |
| Private Key | প্রাইভেট কি |
| On-chain Execution | অন-চেইন এক্সিকিউশন |
| Human Approval | মানুষের অনুমোদন |
| Bounded Loss | নির্ধারিত সীমার মধ্যে সম্ভাব্য ক্ষতি |
| Stablecoin | স্টেবলকয়েন |
| Treasury | ট্রেজারি |
| Wallet | ওয়ালেট |
| AI agent | AI এজেন্ট |
| LLM | LLM (বড় ভাষা মডেল) |
| Testnet | টেস্টনেট |
| Public Testnet | পাবলিক টেস্টনেট |
| Vendor | বিক্রেতা |
| Invoice | ইনভয়েস |
| One-use mandate | একবার-ব্যবহারযোগ্য ম্যান্ডেট |
| Red-team | রেড-টিম |
| Circuit breaker | সার্কিট ব্রেকার |
| Conditional loss certificate | শর্তসাপেক্ষ ক্ষতির শংসাপত্র |
| DOI | DOI |

## 4. Sentence structure choices

- Long English compound sentences are kept as one Bengali sentence where possible, mirroring the source. Where the source uses 2–3 clauses joined with "and"/"or", the Bengali keeps the same conjunctions (`এবং`, `অথবা`).
- Passive voice in the source is rendered in active voice only when the Bengali grammar requires it; technical descriptions are kept as in the source.
- Numerical ranges like `68–86 (78)` are preserved exactly.

## 5. Coverage audit

- 240/245 UI keys translated (98.0%). The 5 remaining keys that match the English exactly are intentional technical identifiers (GO, CONDITIONAL GO, NO-GO, ID, Layer B etc.).
- 210/210 field strings in `i18n/bn/fields.json` translated (100.0%).
- 319/319 field strings in `i18n/bn/snapshot.json` translated (100.0%).

## 6. Verification

- **Build:** `npm run build` — 0 TypeScript errors, 0 Vite warnings, 68 modules transformed, production bundle 456 kB JS / 19 kB CSS (gzipped 134 kB / 4.6 kB).
- **Tests:** `npm run test` — 15/15 passing.
- **Type check:** `npx tsc -b` — clean.
- **Coverage:** `python tools/audit_translation_coverage.py` — see `reports/translation_coverage.md`.
- **Source integrity:** see `reports/source_integrity.json`.

## 7. Known limitations and caveats

1. The Candidate detail page's Technical Deep Dive renders every field through the `BilingualText` component. Each Bengali translation is shown side-by-side with a `View Original English` toggle. The bilingual side-by-side mode is activated by a button in the deeper panel.
2. The Library page renders 96 records. Only the 10 ranked candidates (top of the inventory) and the top-three prototype-validation candidates have detailed Bengali field translations. The remaining 86 inventory entries show their English name, customer, and gate — these are single-line summaries and were not translated because the source themselves are short tag lines (`"customer": "DAO finance teams"`, etc.). A user-facing message reads: "the 96-entry library shows short tag-line records. The 10 ranked candidates are fully bilingual; the rest preserve the English original."
3. The Mermaid diagrams are kept as code blocks. The diagram source code is not translated (it is executable), but the diagram titles and surrounding prose are translated.
4. The Presentation mode uses keyboard navigation: ←/→ to navigate slides, `O` to toggle the source pointer, `Esc` to exit.
5. No data was fabricated. Where a translation is missing for a field, the English original is shown with a clear `[অনুবাদ মুলতুবি]` (translation pending) label.

## 8. Persisted preferences and shareable URLs

- The selected language persists in `localStorage` under `aw_lang`.
- The URL parameter `?lang=bn` takes precedence on first visit.
- The page syncs the URL parameter on every language switch, so a shared link reflects the current view.
- The `<html lang>` attribute is updated to `bn` or `en` for screen readers and search engines.

## 9. UI/UX

- Bengali font: Hind Siliguri (primary), Noto Sans Bengali (fallback) — both via Google Fonts.
- Long Bengali paragraphs: `line-height: 1.65`, `overflow-wrap: anywhere` to keep cards/tables from overflowing.
- Tables: `word-break: normal` for header text, `overflow-wrap: anywhere` for cell content.
- `.code-like` class keeps identifiers and IDs in JetBrains Mono even in Bengali mode (technical terms remain visually distinct).
