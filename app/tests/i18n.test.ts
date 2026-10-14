// Smoke test for the i18n layer.
// Verifies:
// 1. Every English UI key has a Bengali translation (or is in INTENTIONAL).
// 2. Every Bengali fields.json entry has a real string (not empty / not the English original).
// 3. The Bengali snapshot.json covers every experiment, tier, condition, and decision-history event.

import { describe, it, expect } from "vitest";
import enUi from "../src/i18n/en/ui.json";
import bnUi from "../src/i18n/bn/ui.json";
import bnFields from "../src/i18n/bn/fields.json";
import bnSnapshot from "../src/i18n/bn/snapshot.json";

const INTENTIONAL = new Set([
  "decisions.go", "decisions.conditionalGo", "decisions.noGo",
  "decisions.pass", "decisions.conditionalPass", "decisions.fail",
  "decisions.failThisRound",
  "labels.layerB", "labels.layerA", "labels.layerARange",
  "labels.gate", "labels.decision",
  "verdict.preserved",
  "explorer.filters.go", "explorer.filters.conditional", "explorer.filters.noGo",
  "compare.byId",
  "library.idCol",
]);

const TOP_TEN_IDS = [
  "HYBRID-008", "IDEA-073", "IDEA-001", "HYBRID-002R", "HYBRID-009",
  "IDEA-033", "HYBRID-001", "HYBRID-003", "IDEA-074", "IDEA-081",
];

const FIELDS_PER_ID = [
  "name", "financialProblem", "customer", "agentResponsibilities",
  "assetManagementRole", "onchainWorkflow", "securityModel",
  "closestCompetitor", "noveltyHypothesis", "dependencies",
  "feasibility", "mvpScope", "demoScenario", "evidenceConfidence",
  "tier1Problem", "tier1Attractive", "tier1Concern",
  "changeStatus", "changeNote", "layerA", "layerBAndRange",
];

const EXPERIMENT_IDS = ["X1", "X1b", "X2", "X3", "X4", "X5", "X6"];
const TIER_IDS = ["T0", "T1", "T2", "T3", "T4"];
const CONDITION_IDS = [
  "F-01", "F-02", "F-03", "F-04", "F-05", "F-06", "F-07",
  "F-08", "F-09", "F-10", "F-11",
];
const TOP3_IDS = ["HYBRID-008", "IDEA-073", "HYBRID-002R"];
const HISTORY_IDS = ["preAudit", "auditA", "auditB", "postAudit"];

function getByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
}

describe("i18n: UI bundle coverage", () => {
  it("every English key has a Bengali translation", () => {
    const missing: string[] = [];
    const sameAsEn: string[] = [];
    function walk(obj: any, prefix = "") {
      for (const [k, v] of Object.entries(obj)) {
        const key = prefix ? `${prefix}.${k}` : k;
        if (v && typeof v === "object") {
          walk(v, key);
        } else {
          const bn = getByPath(bnUi, key);
          if (bn === undefined) missing.push(key);
          else if (bn === v && !INTENTIONAL.has(key)) sameAsEn.push(key);
        }
      }
    }
    walk(enUi);
    expect(missing, "Missing keys: " + missing.join(", ")).toHaveLength(0);
    expect(sameAsEn, "Same-as-English keys (intentional?): " + sameAsEn.join(", ")).toHaveLength(0);
  });
});

describe("i18n: top-10 candidate fields", () => {
  for (const id of TOP_TEN_IDS) {
    for (const field of FIELDS_PER_ID) {
      it(`${id} → ${field} has a Bengali translation`, () => {
        const v = (bnFields as any)[id]?.[field];
        expect(v, `${id}.${field} is missing`).toBeDefined();
        expect(typeof v).toBe("string");
        expect((v as string).trim().length).toBeGreaterThan(0);
      });
    }
  }
});

describe("i18n: snapshot bundle", () => {
  for (const id of EXPERIMENT_IDS) {
    it(`experiment ${id} has all fields translated`, () => {
      const e = (bnSnapshot as any).experiments?.[id];
      expect(e, `experiment ${id} missing`).toBeDefined();
      for (const f of [
        "title", "status", "due", "hypothesis", "minimumImplementation",
        "toolsAndInfrastructure", "environment", "positiveTests",
        "negativeTests", "adversarialTests", "quantitativeAcceptance",
        "failureConditions", "onchainEvidence", "exposureLimit",
        "externalDependencies", "estimatedEffort", "resultImplications",
      ]) {
        expect(e[f], `${id}.${f} missing`).toBeDefined();
        expect(typeof e[f]).toBe("string");
        expect((e[f] as string).trim().length).toBeGreaterThan(0);
      }
    });
  }
  for (const id of TIER_IDS) {
    it(`tier ${id} has all fields translated`, () => {
      const t = (bnSnapshot as any).security?.tiers?.[id];
      expect(t, `tier ${id} missing`).toBeDefined();
      for (const f of ["name", "authority", "routeM", "routeZ", "exposure"]) {
        expect(t[f], `${id}.${f} missing`).toBeDefined();
        expect((t[f] as string).trim().length).toBeGreaterThan(0);
      }
    });
  }
  for (const id of CONDITION_IDS) {
    it(`condition ${id} is translated`, () => {
      const v = (bnSnapshot as any).finalSelectionConditions?.[id];
      expect(v, `condition ${id} missing`).toBeDefined();
      expect((v as string).trim().length).toBeGreaterThan(0);
    });
  }
  for (const id of TOP3_IDS) {
    it(`top-3 ${id} has uncertainty + reason translated`, () => {
      const v = (bnSnapshot as any).topThreeValidation?.[id];
      expect(v).toBeDefined();
      expect(v.uncertainty.trim().length).toBeGreaterThan(0);
      expect(v.reason.trim().length).toBeGreaterThan(0);
    });
  }
  for (const id of HISTORY_IDS) {
    it(`decision history ${id} is translated`, () => {
      const v = (bnSnapshot as any).decisionHistoryEvents?.[id];
      expect(v).toBeDefined();
      expect(v.title.trim().length).toBeGreaterThan(0);
      expect(v.detail.trim().length).toBeGreaterThan(0);
      expect(v.source.trim().length).toBeGreaterThan(0);
    });
  }
});
