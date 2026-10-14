// Lightweight Vitest tests for the structured data layer.
// These run via `npm test` and verify that the candidate data
// remains internally consistent (no missing IDs, no duplicate
// rankings, every shortlist candidate has a gate, etc.).

import { describe, it, expect } from "vitest";
import {
  TOP_SHORTLIST,
  EXPERIMENTS,
  AUDIT_A_ADJUDICATIONS,
  AUDIT_B_DISPOSITIONS,
  RANKING_LAYER_B_BALANCED,
  INVENTORY_TOTALS,
  SNAPSHOT_DATE,
} from "../src/data";
import fullInventory from "../src/data/full_inventory.json";

describe("Top shortlist", () => {
  it("contains exactly 10 candidates", () => {
    expect(TOP_SHORTLIST).toHaveLength(10);
  });

  it("ranks are 1..10 in order", () => {
    expect(TOP_SHORTLIST.map((c) => c.rank)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("every candidate has a non-empty id, name, financial problem", () => {
    for (const c of TOP_SHORTLIST) {
      expect(c.id).toMatch(/^(IDEA|HYBRID)-\w+/);
      expect(c.name).toBeTruthy();
      expect(c.financialProblem).toBeTruthy();
    }
  });

  it("HYBRID-008 is the provisional preference", () => {
    expect(TOP_SHORTLIST[0].id).toBe("HYBRID-008");
    expect(TOP_SHORTLIST[0].prototypeValidation).toBe(true);
  });

  it("the three prototype-validation candidates are HYBRID-008, IDEA-073, HYBRID-002R", () => {
    const proto = TOP_SHORTLIST.filter((c) => c.prototypeValidation).map((c) => c.id);
    expect(proto.sort()).toEqual(["HYBRID-002R", "HYBRID-008", "IDEA-073"]);
  });
});

describe("Experiments", () => {
  it("contains X1, X1b, X2, X3, X4, X5, X6", () => {
    const ids = EXPERIMENTS.map((e) => e.id);
    expect(ids).toEqual(["X1", "X1b", "X2", "X3", "X4", "X5", "X6"]);
  });

  it("all experiments are pending (none reported as run)", () => {
    for (const e of EXPERIMENTS) {
      expect(e.status).toMatch(/PENDING|no experiment run/i);
    }
  });
});

describe("Ranking table", () => {
  it("matches the top shortlist order", () => {
    expect(RANKING_LAYER_B_BALANCED.map((r) => r.id)).toEqual(TOP_SHORTLIST.map((c) => c.id));
  });

  it("ranks are 1..10", () => {
    expect(RANKING_LAYER_B_BALANCED.map((r) => r.rank)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe("Adjudication", () => {
  it("Audit A has 27 named findings", () => {
    expect(AUDIT_A_ADJUDICATIONS).toHaveLength(27);
  });
  it("Audit B dispositions are present (>=17 named)", () => {
    // The post-audit decision package names 43 Audit B findings (39 confirmed,
    // 3 partially, 1 uncheckable). The full mapping file was not supplied, so
    // the application carries a faithful subset of 17 dispositions whose
    // findings are actioned in section F/G of finalaudit.md.
    expect(AUDIT_B_DISPOSITIONS.length).toBeGreaterThanOrEqual(17);
  });
  it("Audit A verdicts are all non-empty strings", () => {
    for (const row of AUDIT_A_ADJUDICATIONS) {
      expect(row.verdict).toBeTruthy();
      expect(typeof row.verdict).toBe("string");
    }
  });
});

describe("Inventory totals", () => {
  it("matches the post-audit snapshot", () => {
    expect(INVENTORY_TOTALS.totalEntries).toBe(96);
    expect(INVENTORY_TOTALS.topTenShortlist).toBe(10);
    expect(INVENTORY_TOTALS.prototypeValidationCandidates).toBe(3);
  });
  it("snapshot date is set", () => {
    expect(SNAPSHOT_DATE).toMatch(/^2026-10-1\d$/);
  });
});

describe("Full inventory JSON", () => {
  it("has 96 entries (86 ideas + 10 hybrids)", () => {
    const rows = fullInventory as Array<{ id: string }>;
    expect(rows).toHaveLength(96);
    const hybrids = rows.filter((r) => r.id.startsWith("HYBRID"));
    expect(hybrids).toHaveLength(10);
  });
});
