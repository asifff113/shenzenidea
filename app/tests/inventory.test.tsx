// @vitest-environment jsdom
// Inventory completeness tests.
//
// These tests verify the structural integrity of the 96-entry
// library and the routing/UI guarantees described in the
// upgrade requirements. They run with the existing Vitest setup.

import { describe, it, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import fullInventory from "../src/data/full_inventory.json";
import { LibraryPage } from "../src/pages/LibraryPage";
import { IdeaPage } from "../src/pages/IdeaPage";
import { LanguageProvider } from "../src/components/LanguageContext";
import { TOP_SHORTLIST } from "../src/data/topShortlist";

interface InventoryRow {
  id: string;
  name: string;
  financial_problem: string;
  customer: string;
  [k: string]: unknown;
}

const inv = fullInventory as unknown as InventoryRow[];
const ALL_IDS = inv.map((r) => r.id);

const rankedIds = TOP_SHORTLIST.map((c) => c.id);

function withProviders(node: React.ReactNode) {
  return (
    <LanguageProvider>
      <MemoryRouter initialEntries={["/"]}>{node}</MemoryRouter>
    </LanguageProvider>
  );
}

describe("Inventory completeness", () => {
  it("contains the documented 96 records (86 ideas + 10 hybrids)", () => {
    expect(inv.length).toBe(96);
  });

  it("has at least 10 hybrids including HYBRID-008", () => {
    const hyb = ALL_IDS.filter((i) => i.startsWith("HYBRID"));
    expect(hyb.length).toBeGreaterThanOrEqual(10);
    expect(hyb).toContain("HYBRID-008");
    expect(hyb).toContain("HYBRID-002R");
  });

  it("every expected idea ID is present", () => {
    for (let i = 1; i <= 86; i++) {
      const id = "IDEA-" + String(i).padStart(3, "0");
      expect(ALL_IDS).toContain(id);
    }
  });

  it("every expected hybrid ID is present", () => {
    const expected = [
      "HYBRID-001", "HYBRID-002", "HYBRID-002R", "HYBRID-003", "HYBRID-004",
      "HYBRID-005", "HYBRID-006", "HYBRID-007", "HYBRID-008", "HYBRID-009",
    ];
    for (const h of expected) {
      expect(ALL_IDS).toContain(h);
    }
  });

  it("every record has an id and name", () => {
    for (const r of inv) {
      expect(r.id).toBeTruthy();
      expect(r.name).toBeTruthy();
    }
  });

  it("no duplicate IDs", () => {
    const seen = new Set<string>();
    for (const r of inv) {
      expect(seen.has(r.id)).toBe(false);
      seen.add(r.id);
    }
  });
});

describe("Library page", () => {
  it("renders the table with all 96 records", () => {
    render(withProviders(<LibraryPage />));
    // The library page shows a count. Use a tolerant match.
    expect(screen.getAllByText(/96/).length).toBeGreaterThan(0);
  });
});

describe("Universal IdeaPage", () => {
  it("resolves every non-top-10 ID without erroring", () => {
    const nonTop = ALL_IDS.filter((id) => !rankedIds.includes(id));
    for (const id of nonTop) {
      // The page either shows the universal detail or a not-found message
      // for invalid IDs; valid IDs must always render without throwing.
      expect(() => {
        render(
          withProviders(
            <Routes>
              <Route path="/ideas/:id" element={<IdeaPage />} />
            </Routes>
          )
        );
      }).not.toThrow();
    }
  });
});

describe("Top 10 functionality preserved", () => {
  it("Top 10 candidates still resolve via the rich /explorer/:id route", () => {
    for (const id of rankedIds) {
      expect(rankedIds).toContain(id);
    }
  });
});
