export function GateBadge({ gate }: { gate: string }) {
  const tone =
    gate === "PASS"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
      : gate === "CONDITIONAL PASS" || gate.startsWith("CONDITIONAL")
      ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
      : gate === "FAIL this round" || gate === "FAIL"
      ? "bg-rose-500/15 text-rose-300 border-rose-500/30"
      : "bg-ink-800 text-ink-200 border-ink-700";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded border ${tone}`}
      title={gate}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {gate}
    </span>
  );
}

export function DecisionBadge({ decision }: { decision: string }) {
  const tone =
    decision === "GO"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
      : decision === "CONDITIONAL GO"
      ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
      : decision === "NO-GO" || decision === "NO-GO as primary"
      ? "bg-rose-500/15 text-rose-300 border-rose-500/30"
      : "bg-ink-800 text-ink-200 border-ink-700";
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded border ${tone}`}
    >
      {decision}
    </span>
  );
}

export function PrototypeBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded border bg-accent-500/15 text-accent-300 border-accent-500/30">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 1l1.2 2.4L9 3.7l-2 2 .5 2.8L5 7.1 2.5 8.5 3 5.7 1 3.7l2.8-.3L5 1z" fill="currentColor" />
      </svg>
      PROTOTYPE
    </span>
  );
}