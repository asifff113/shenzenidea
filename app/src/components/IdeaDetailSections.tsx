import type { Candidate } from "../data";
import { useLang } from "./LanguageContext";
import { fieldBn } from "../i18n/fieldHelpers";
import { SideBySideParagraph, BilingualText } from "./BilingualText";
import { useState } from "react";

interface SectionsProps {
  candidate: Candidate;
  depth: "quick" | "technical";
  lang: "en" | "bn";
}

function f(c: Candidate, field: string): string {
  return fieldBn(c.id, field, (c as any)[field] ?? "");
}

/**
 * Renders the two-depth detail for a candidate. The "quick" depth shows a
 * distilled 3-bullet summary; the "technical" depth shows every field
 * verbatim with side-by-side bilingual rendering. Both depths translate
 * every field using fieldBn; missing translations fall back to the
 * English original with a clear "[অনুবাদ মুলতুবি]" label.
 */
export function IdeaDetailSections({ candidate: c, depth, lang }: SectionsProps) {
  const t = useLang().t;
  if (depth === "quick") {
    const problem = f(c, "tier1Problem") || c.financialProblem;
    const attractive = f(c, "tier1Attractive");
    const concern = f(c, "tier1Concern");
    return (
      <div className={`space-y-2 text-sm leading-relaxed ${lang === "bn" ? "font-bn" : ""}`}>
        <Bullet label={t("sections.B")}>{problem}</Bullet>
        {attractive && <Bullet label={t("sections.F")}>{attractive}</Bullet>}
        {concern && <Bullet label={t("sections.G")}>{concern}</Bullet>}
      </div>
    );
  }
  return <TechnicalDepth candidate={c} lang={lang} />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="flex gap-2">
      <span className="text-accent-400 font-semibold shrink-0">{label}</span>
      <span className="text-ink-100">{children}</span>
    </p>
  );
}

function TechnicalDepth({ candidate: c, lang }: { candidate: Candidate; lang: "en" | "bn" }) {
  const t = useLang().t;
  const [sideBySide, setSideBySide] = useState(false);
  const bn = lang === "bn";
  const heading = (k: string) => (
    <h4 className="text-[11px] uppercase tracking-[0.18em] text-accent-400 mt-3">
      {t(`sections.${k}`)}
    </h4>
  );
  return (
    <div className={`text-sm space-y-1 ${bn ? "font-bn" : ""}`}>
      <div className="flex justify-end">
        <button
          onClick={() => setSideBySide((v) => !v)}
          className="text-[10px] uppercase tracking-widest text-accent-400 hover:text-accent-300 underline"
        >
          {sideBySide ? t("common.bengaliOnly") : t("common.sideBySide")}
        </button>
      </div>
      {heading("A")}
      <BilingualText
        id={c.id}
        field="name"
        en={c.name}
        sideBySide={sideBySide}
        showOriginalToggle={false}
      />
      {heading("B")}
      <BilingualText id={c.id} field="financialProblem" en={c.financialProblem} sideBySide={sideBySide} />
      <p className="text-ink-300">
        <strong>{t("sections.customerLabel")}</strong>{" "}
        <BilingualText id={c.id} field="customer" en={c.customer} sideBySide={sideBySide} />
      </p>
      {heading("C")}
      <BilingualText
        id={c.id}
        field="agentResponsibilities"
        en={c.agentResponsibilities}
        sideBySide={sideBySide}
      />
      <p className="text-ink-300">
        <strong>{t("sections.assetManagementFunction")}</strong>{" "}
        <BilingualText
          id={c.id}
          field="assetManagementRole"
          en={c.assetManagementRole}
          sideBySide={sideBySide}
        />
      </p>
      <p className="text-ink-300">
        <strong>{t("sections.onchainExecution")}</strong>{" "}
        <BilingualText
          id={c.id}
          field="onchainWorkflow"
          en={c.onchainWorkflow}
          sideBySide={sideBySide}
        />
      </p>
      {heading("I")}
      <BilingualText id={c.id} field="securityModel" en={c.securityModel} sideBySide={sideBySide} />
      {heading("E")}
      <BilingualText
        id={c.id}
        field="closestCompetitor"
        en={c.closestCompetitor}
        sideBySide={sideBySide}
      />
      {heading("F")}
      <BilingualText
        id={c.id}
        field="noveltyHypothesis"
        en={c.noveltyHypothesis}
        sideBySide={sideBySide}
      />
      {heading("H")}
      <BilingualText id={c.id} field="dependencies" en={c.dependencies} sideBySide={sideBySide} />
      <p className="text-ink-300">
        <strong>{t("sections.feasibility")}</strong>{" "}
        <BilingualText id={c.id} field="feasibility" en={c.feasibility} sideBySide={sideBySide} />
      </p>
      <p className="text-ink-300">
        <strong>{t("sections.mvpScope")}</strong>{" "}
        <BilingualText id={c.id} field="mvpScope" en={c.mvpScope} sideBySide={sideBySide} />
      </p>
      {heading("J")}
      <BilingualText id={c.id} field="demoScenario" en={c.demoScenario} sideBySide={sideBySide} />
      {heading("K")}
      <p className="text-ink-300">
        <strong>{t("sections.internalLayerB")}</strong>{" "}
        <span className="code-like">{c.layerBCentre}</span>
      </p>
      <p className="text-ink-300">
        <strong>{t("sections.layerARange")}</strong>{" "}
        <span className="code-like">{c.layerA}</span>
      </p>
      <p className="text-[11px] text-ink-300">{t("sections.internalScore")}</p>
      {c.experiments.length === 0 ? (
        <p className="text-ink-300">
          {t("sections.noExperiment")} <span className="code-like">{c.feasibility}</span>.
        </p>
      ) : (
        <p className="text-ink-300">
          {t("labels.experiments")}: {c.experiments.join(", ")}
        </p>
      )}
      <p className="text-[11px] text-ink-300">{t("sections.statusNoExperiment")}</p>
      {heading("L")}
      <p className="text-ink-300">
        <strong>{t("sections.evidenceConfidence")}</strong>{" "}
        <BilingualText
          id={c.id}
          field="evidenceConfidence"
          en={c.evidenceConfidence}
          sideBySide={sideBySide}
        />
      </p>
      {heading("M")}
      <p className="text-ink-300 text-[11px]">
        {t("sections.sourceAnchors")} {c.id}: {c.sources.join(", ")}
      </p>
      {c.changeNote && (
        <p className="text-ink-300 text-[11px]">
          <strong>{t("labels.changeStatus")}:</strong> {c.changeStatus}. <strong>{t("labels.changeNote")}:</strong> {c.changeNote}
        </p>
      )}
    </div>
  );
}

export { SideBySideParagraph };
