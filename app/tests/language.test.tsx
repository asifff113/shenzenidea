// @vitest-environment jsdom
// English mode must never show Bengali content (the language toggle label is the
// one intentional exception), on every page and every tab.

import { describe, it, expect, beforeEach } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { TOP_SHORTLIST } from "../src/data";

const BENGALI = /[ঀ-৿]/;

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

/** Text content with the language-toggle button removed. */
function visibleText(container: HTMLElement): string {
  const clone = container.cloneNode(true) as HTMLElement;
  // The language-switch button is labelled in Bengali on purpose.
  clone.querySelectorAll("button").forEach((n) => {
    if ((n.textContent ?? "").trim() === "বাংলা") n.remove();
  });
  return clone.textContent ?? "";
}

function bengaliSnippet(text: string): string {
  const m = text.match(/.{0,30}[ঀ-৿]+.{0,30}/);
  return m ? m[0] : "";
}

const ROUTES = [
  "/",
  "/explorer",
  "/compare",
  "/security",
  "/history",
  "/library",
  "/validation",
  "/presentation",
  ...TOP_SHORTLIST.map((c) => `/explorer/${c.id}`),
  ...TOP_SHORTLIST.map((c) => `/explorer/${c.id}?tab=walkthrough`),
  ...TOP_SHORTLIST.map((c) => `/explorer/${c.id}?tab=deep`),
  "/ideas/IDEA-002",
  "/presentation?c=HYBRID-008",
];

describe("English mode shows no Bengali", () => {
  beforeEach(() => {
    cleanup();
    window.history.replaceState({}, "", "/"); // drop a ?lang= left by a previous test
    window.localStorage.setItem("aw_lang", "en");
  });

  for (const route of ROUTES) {
    it(route, () => {
      const { container } = renderAt(route);
      const text = visibleText(container);
      expect(bengaliSnippet(text), `Bengali text on ${route}`).toBe("");
    });
  }

  it("every Security & Validation tab", () => {
    const { container, getAllByRole } = renderAt("/security");
    const buttons = Array.from(container.querySelectorAll("button[aria-pressed]")).filter(
      (b) => !/^(EN|বাংলা)$/.test((b.textContent ?? "").trim())
    );
    expect(buttons.length).toBeGreaterThanOrEqual(5);
    for (const b of buttons) {
      fireEvent.click(b);
      expect(bengaliSnippet(visibleText(container)), `tab ${b.textContent}`).toBe("");
    }
    expect(getAllByRole("button").length).toBeGreaterThan(0);
  });

  it("every Idea Explorer card expands without Bengali", () => {
    const { container } = renderAt("/explorer");
    container.querySelectorAll("article button").forEach((b) => {
      if (/Expand/.test(b.textContent ?? "")) fireEvent.click(b);
    });
    expect(bengaliSnippet(visibleText(container))).toBe("");
  });

  it("every candidate-page evidence/step interaction stays English", () => {
    const { container } = renderAt("/explorer/HYBRID-008?tab=walkthrough");
    container.querySelectorAll("ol button").forEach((b) => fireEvent.click(b));
    container.querySelectorAll('[role="tab"]').forEach((b) => fireEvent.click(b));
    expect(bengaliSnippet(visibleText(container))).toBe("");
  });
});
