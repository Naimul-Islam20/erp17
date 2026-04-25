import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <section className="container max-w-3xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[var(--secondary)]">ERP17</p>
        <h1 className="mt-3 text-6xl md:text-8xl font-black text-[var(--secondary)] leading-none">404</h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-black text-[var(--secondary)]">Page Not Found</h2>
        <p className="mt-4 text-base md:text-lg text-black/70 max-w-xl mx-auto">
          The page you are looking for does not exist or may have been moved. Please return to the homepage or contact ERP17 support.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[var(--primary)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-[var(--secondary)] text-[var(--secondary)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--primary-soft)] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
