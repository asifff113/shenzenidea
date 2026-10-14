# Top 10 presentation upgrade — implementation and verification report

Date: 2026-10-14. Baseline tag: `pre-presentation-upgrade` (the single prior commit).

## What was added

Three content layers are kept separate:

| Layer | Where | Label in the UI |
|---|---|---|
| 1 Original research | `app/src/data/topShortlist.ts`, `finalaudit.md`, other source files (unchanged) | "Original research record" |
| 2 Presentation explanation | `app/src/data/presentation/*.ts` (English + Bengali per string) | "Presentation explanation" |
| 3 Illustrative scenario | `scenario.kind = "illustrative"` in the same files | "Illustrative scenario" |

New components (`app/src/components/present/`): SVG architecture diagram renderer
(zoom, fit, full screen, legend, text list, step highlighting), quick view, guided
walkthrough stepper, scenario explorer (case selector), competitor matrix,
advantages/weaknesses/innovation classification, security boundary view, HYBRID-008
authority-tier explorer and loss-bound panel, roadmap, evaluation charts, experiment
explorer, source-evidence drawer, documented comparison table.

New/changed pages: candidate page (three reading modes, prev/next), explorer board and
cards, per-candidate 14-slide presentation deck (`/presentation?c=ID`).

All ten ranked candidates have their own diagrams (13 diagrams in total, including the
separate Route M / Route Z views for HYBRID-008, Option A / Option B for HYBRID-002R, the
chain-to-chain vs provider-to-provider views for HYBRID-003, and a labelled contrast
diagram for IDEA-001).

## What was not changed

No source document and no candidate record (id, name, rank, scores, gate, decision,
experiments) was edited. `tools/validate_integrity.py` still reports 53/53.

## Verification actually run

- `tsc -b`, `vitest run` (350 tests, 4 files), `vite build`: pass.
- New `tests/presentation.test.tsx` checks, for all ten candidates: ids and ranks equal
  the post-audit package; diagrams have valid nodes/edges and no overlapping grid cells;
  walkthrough steps reference real diagrams and nodes; every English string has a
  Bengali counterpart (Bengali script required unless the text is an identifier or a
  GO/NO-GO label); Layer B centre equals the sum of criterion centres; rendered pages
  contain a real SVG diagram (not Mermaid source) in walkthrough and deep-dive modes;
  Bengali mode translates the page body; Route Z is separate and labelled conditional;
  the deck has 14 slides.
- Headless-browser screenshots were captured and inspected for: Explorer board, HYBRID-008
  quick/walkthrough, HYBRID-002R deep dive, HYBRID-009, IDEA-073/-074/-081/-001/-001
  contrast, HYBRID-001 comparison, Bengali walkthrough, deck title slide, narrow (500 px)
  layout. Layout defects found (clipped node text, overlapping labels, diagrams hidden
  behind nodes, a step highlighting a node absent from its diagram) were fixed.

## Known limitations (not hidden)

- Browser interaction (clicks, full-screen, keyboard shortcuts, zoom buttons) was not
  driven by an automated browser; only static screenshots and jsdom render tests were run.
  Screenshots of every candidate page and every deck slide were not individually reviewed.
- The Bengali presentation text was written for this upgrade by the assistant and has not
  been reviewed by a native Bengali speaker.
- Diagrams are interpretations of the source. Where the provided materials do not specify
  a field the UI says "Not specified in the provided research materials."; examples:
  owner-stop and exposure for HYBRID-003 and IDEA-033, any step-by-step demo for
  HYBRID-001, named competitors for IDEA-074.
- Scenario amounts are never invented; illustrative walkthroughs are labelled and reuse
  only documented MVP parameters (for example the 10-unit budget).
- Genuine edge routing is simple (curves between grid cells); some edge labels sit close
  to nodes in dense diagrams. Full-screen and the text list are the fallbacks.
- On phones the diagram scrolls inside its frame at a floor zoom of 80 %.
- No experiment has been run; every experiment is displayed as PENDING.
