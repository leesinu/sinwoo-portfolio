type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="mb-6 border-b border-white/10 pb-4">
      <p className="mb-2 inline-flex items-center text-xs uppercase tracking-[0.3em] text-cyan-300/80">
        <span className="mr-2 text-cyan-400">❯</span> Section
      </p>
      <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm text-slate-300">{subtitle}</p> : null}
    </header>
  );
}
