// @vitest-environment jsdom
// Presentation-layer tests: structure, bilingual completeness, source-record
// consistency and rendered diagrams for all ten ranked candidates.

import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { TOP_SHORTLIST } from "../src/data";
import { PRESENTATION_LIST, getPresentation } from "../src/data/presentation";
import { LanguageProvider } from "../src/components/LanguageContext";
import { CandidatePage } from "../src/pages/CandidatePage";
import { PresentationPage } from "../src/pages/PresentationPage";

const EXPECTED: [string, number][] = [
  ["HYBRID-008", 1],
  ["IDEA-073", 2],
  ["IDEA-001", 3],
  ["HYBRID-002R", 4],
  ["HYBRID-009", 5],
  ["IDEA-033", 6],
  ["HYBRID-001", 7],
  ["HYBRID-003", 8],
  ["IDEA-074", 9],
  ["IDEA-081", 10],
];

const BENGALI = /[ঀ-৿]/;

function collectBi(node: unknown, path: string, out: { path: string; en: string; bn: string }[]) {
  if (Array.isArray(node)) {
    node.forEach((x, i) => collectBi(x, `${path}[${i}]`, out));
  } else if (node && typeof node === "object") {
    const o = node as Record<string, unknown>;
    if (typeof o.en === "string" && typeof o.bn === "string" && Object.keys(o).length === 2) {
      out.push({ path, en: o.en, bn: o.bn });
    } else {
      for (const [k, v] of Object.entries(o)) collectBi(v, `${path}.${k}`, out);
    }
  }
}

describe("source records unchanged", () => {
  it("top ten ids and ranks match the post-audit package", () => {
    expect(TOP_SHORTLIST.map((c) => [c.id, c.rank])).toEqual(EXPECTED);
  });
  it("every ranked candidate has a presentation", () => {
    for (const [id] of EXPECTED) expect(getPresentation(id), id).toBeDefined();
    expect(PRESENTATION_LIST.length).toBe(10);
  });
});

describe("presentation data integrity", () => {
  for (const pres of PRESENTATION_LIST) {
    const c = TOP_SHORTLIST.find((x) => x.id === pres.id)!;
    describe(pres.id, () => {
      it("has diagrams with valid nodes and edges", () => {
        expect(pres.diagrams.length).toBeGreaterThanOrEqual(1);
        for (const d of pres.diagrams) {
          const ids = d.nodes.map((n) => n.id);
          expect(new Set(ids).size, `${d.id} duplicate node ids`).toBe(ids.length);
          expect(d.nodes.length).toBeGreaterThanOrEqual(4);
          expect(d.edges.length).toBeGreaterThanOrEqual(3);
          for (const e of d.edges) {
            expect(ids, `${d.id} edge from ${e.from}`).toContain(e.from);
            expect(ids, `${d.id} edge to ${e.to}`).toContain(e.to);
          }
          const seen = new Set<string>();
          for (const n of d.nodes) {
            const k = `${n.col}:${n.row}`;
            expect(seen.has(k), `${d.id} overlapping cell ${k}`).toBe(false);
            seen.add(k);
          }
        }
      });
      it("steps reference real diagrams and nodes", () => {
        expect(pres.steps.length).toBeGreaterThanOrEqual(4);
        for (const st of pres.steps) {
          if (st.diagram !== undefined) {
            const d = pres.diagrams[st.diagram];
            expect(d, "diagram index").toBeDefined();
            for (const n of st.nodes ?? []) expect(d.nodes.map((x) => x.id), n).toContain(n);
          }
        }
      });
      it("scenario, competitors, weaknesses and security are present", () => {
        expect(pres.scenario.cases.length).toBeGreaterThanOrEqual(1);
        expect(pres.competitors.length).toBeGreaterThanOrEqual(1);
        expect(pres.weaknesses.length).toBeGreaterThanOrEqual(2);
        expect(pres.security.aiCan.length).toBeGreaterThanOrEqual(1);
        expect(pres.security.aiCannot.length).toBeGreaterThanOrEqual(1);
        expect(pres.roadmap.mvp.length).toBeGreaterThanOrEqual(1);
      });
      it("every English string has a non-empty Bengali counterpart", () => {
        const all: { path: string; en: string; bn: string }[] = [];
        collectBi(pres, pres.id, all);
        expect(all.length).toBeGreaterThan(40);
        for (const t of all) {
          expect(t.en.trim().length, `${t.path} en`).toBeGreaterThan(0);
          expect(t.bn.trim().length, `${t.path} bn`).toBeGreaterThan(0);
          const identifierOnly = t.bn === t.en || !/[a-z]/.test(t.en); // names, code tokens, GO/NO-GO labels
          if (t.en.length > 25 && !identifierOnly) {
            expect(BENGALI.test(t.bn), `${t.path} lacks Bengali script`).toBe(true);
          }
        }
      });
      it("layer B centre equals the sum of criterion centres", () => {
        const s = pres.scores.centres;
        expect(s.value + s.novelty + s.security + s.feasibility + s.demo + s.deps).toBe(c.layerBCentre);
      });
      it("pending experiments are never presented as completed", () => {
        const json = JSON.stringify(pres).toLowerCase();
        expect(json).not.toMatch(/has been executed successfully/);
        expect(json).not.toMatch(/\bx[1-6]b? (passed|has passed)\b/);
      });
    });
  }
});

function renderPage(path: string) {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/explorer/:id" element={<CandidatePage />} />
          <Route path="/presentation" element={<PresentationPage />} />
        </Routes>
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe("rendered pages", () => {
  beforeEach(() => {
    cleanup();
    window.localStorage.removeItem("aw_lang");
  });

  for (const [id] of EXPECTED) {
    it(`${id}: walkthrough shows a real SVG diagram, not Mermaid source`, () => {
      const { container } = renderPage(`/explorer/${id}?tab=walkthrough`);
      const svg = container.querySelector("figure svg");
      expect(svg, "svg diagram").not.toBeNull();
      expect(container.querySelectorAll("figure svg g rect").length).toBeGreaterThan(3);
      expect(container.textContent).not.toMatch(/flowchart LR/);
      expect(screen.getAllByText(/Step/).length).toBeGreaterThan(0);
    });

    it(`${id}: deep dive has architecture, security, competitors and evaluation`, () => {
      const { container } = renderPage(`/explorer/${id}?tab=deep`);
      for (const anchor of ["arch", "security", "competitors", "assess", "impl", "eval", "valid", "source"]) {
        expect(container.querySelector(`#${anchor}`), anchor).not.toBeNull();
      }
      expect(container.querySelector("figure svg")).not.toBeNull();
    });
  }

  it("Bengali mode translates the page body, not just headings", () => {
    window.localStorage.setItem("aw_lang", "bn");
    const { container } = renderPage("/explorer/HYBRID-008?tab=quick");
    const text = container.textContent ?? "";
    expect(BENGALI.test(text)).toBe(true);
    expect(text).toContain("অ্যাকাউন্টস-পেয়েবল");
    expect(text).toContain("HYBRID-008");
    expect(text).toContain("CONDITIONAL GO");
  });

  it("route Z is labelled conditional and kept separate from route M", () => {
    const diagrams = getPresentation("HYBRID-008")!.diagrams;
    expect(diagrams.map((d) => d.id)).toEqual(["h008-route-m", "h008-route-z"]);
    expect(diagrams[1].status?.en).toMatch(/Conditional alternative/);
    const mIds = new Set(diagrams[0].nodes.map((n) => n.id));
    expect(mIds.has("delay")).toBe(false);
  });

  it("per-candidate deck renders 14 slides", () => {
    const { container } = renderPage("/presentation?c=HYBRID-002R");
    expect(container.querySelector('[data-testid="candidate-deck"]')).not.toBeNull();
    expect(container.querySelectorAll('ol[aria-label="Slides"] li').length).toBe(14);
  });
});
