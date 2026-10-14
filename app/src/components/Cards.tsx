interface StatCardProps {
  label: string;
  value: React.ReactNode;
  hint?: string;
  accent?: boolean;
}

export function StatCard({ label, value, hint, accent }: StatCardProps) {
  return (
    <div
      className={`relative rounded-xl p-4 sm:p-5 border ${
        accent
          ? "border-accent-500/40 bg-accent-500/5"
          : "border-ink-800 bg-ink-900/60"
      }`}
    >
      <div className="text-[11px] uppercase tracking-[0.18em] text-ink-300 mb-2">
        {label}
      </div>
      <div className="text-xl sm:text-2xl font-semibold text-ink-50 leading-tight">
        {value}
      </div>
      {hint && <div className="text-[11px] text-ink-300 mt-2 leading-relaxed">{hint}</div>}
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function SectionHeader({ eyebrow, title, subtitle, children }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent-400 mb-2">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold text-ink-50 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-ink-200 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}