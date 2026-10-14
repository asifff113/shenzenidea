import { useState } from "react";

interface MermaidBlockProps {
  title: string;
  source: string;
  caption?: string;
}

/**
 * A Mermaid source display. The full Mermaid JS library is intentionally not
 * bundled to keep the production build small and offline-capable. Teammates
 * can paste the source into https://mermaid.live/ to render the diagram, or
 * keep the inline SVG in CandidatePage for an immediate visual.
 */
export function MermaidBlock({ title, source, caption }: MermaidBlockProps) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="rounded-xl border border-ink-800 bg-ink-900/40 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-ink-800 bg-ink-950/60">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-accent-400">
            Mermaid diagram
          </div>
          <div className="text-sm text-ink-50 font-medium">{title}</div>
        </div>
        <button
          onClick={onCopy}
          className="text-xs px-2 py-1 rounded border border-ink-700 hover:border-accent-500/60 text-ink-200"
        >
          {copied ? "Copied" : "Copy source"}
        </button>
      </div>
      <pre className="text-[11px] leading-relaxed text-ink-200 overflow-x-auto p-4 m-0 code-like whitespace-pre">
{source}
      </pre>
      {caption && (
        <div className="px-4 py-2 text-[11px] text-ink-300 border-t border-ink-800">
          {caption}
        </div>
      )}
    </div>
  );
}
