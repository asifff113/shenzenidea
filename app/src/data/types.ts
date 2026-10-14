// Shared types for the research data layer. All extracted from the
// post-audit decision package; no invented fields.

export type Gate = "PASS" | "CONDITIONAL PASS" | "FAIL" | "FAIL this round" | string;
export type Decision = "GO" | "CONDITIONAL GO" | "NO-GO" | string;

export interface Candidate {
  id: string;
  name: string;
  rank: number;
  layerBCentre: number;
  layerBAndRange: string;
  layerA: string;
  gate: Gate;
  decision: Decision;
  /** Whether the candidate is one of the three chosen for prototype validation. */
  prototypeValidation: boolean;
  customer: string;
  financialProblem: string;
  agentResponsibilities: string;
  assetManagementRole: string;
  onchainWorkflow: string;
  securityModel: string;
  closestCompetitor: string;
  noveltyHypothesis: string;
  dependencies: string;
  feasibility: string;
  mvpScope: string;
  demoScenario: string;
  evidenceConfidence: string;
  sources: string[];
  changeStatus: string;
  changeNote: string;
  experiments: string[];
}

export interface SupportingComponent {
  id: string;
  name: string;
  purpose: string;
  gate: Gate;
  sources: string[];
  changeStatus: string;
  changeNote: string;
  serves: string[];
}

export interface Experiment {
  id: string;
  title: string;
  serves: string[];
  status: "PENDING — no experiment run";
  due: string;
  hypothesis: string;
  minimumImplementation: string;
  toolsAndInfrastructure: string;
  environment: string;
  positiveTests: string;
  negativeTests: string;
  adversarialTests: string;
  quantitativeAcceptance: string;
  failureConditions: string;
  onchainEvidence: string;
  exposureLimit: string;
  externalDependencies: string;
  estimatedEffort: string;
  resultImplications: string;
}

export interface AdjudicationRow {
  id: string;
  finding: string;
  candidate: string;
  verdict: string;
  evidence: string;
  actionAndImpact: string;
  remainingUncertainty: string;
}

export interface SecurityTier {
  id: string;
  name: string;
  authority: string;
  grantedBy: string;
  routeM: string;
  routeZ: string;
  agentAutonomy: string;
  exposure: string;
}

export interface ThreatControl {
  controlArea: string;
  hybrid008: string;
  hybrid002R: string;
}
