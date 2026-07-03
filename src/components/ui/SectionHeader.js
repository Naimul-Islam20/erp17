export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "left"
      ? "text-left mx-0"
      : "text-center mx-auto";

  return (
    <header className={`max-w-3xl mb-6 md:mb-8 ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="inline-flex items-center rounded-full border border-[var(--primary-soft)] bg-[var(--primary-soft)]/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--secondary)] sm:text-4xl md:text-[2.5rem] md:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
