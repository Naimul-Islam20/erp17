"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <section className="container max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--secondary)]">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-slate-600">
          The page could not load. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[var(--secondary)] text-[var(--secondary)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--primary-soft)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}
