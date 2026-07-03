export default function ProductSectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight text-[var(--secondary)] md:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}
