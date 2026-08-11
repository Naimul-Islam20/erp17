import Link from "next/link";

/**
 * Odoo-like legal page: dark hero + single-column body (no left TOC).
 */
export default function LegalPageLayout({
  title,
  effectiveDate,
  sections,
  relatedHref,
  relatedLabel,
}) {
  return (
    <main className="min-h-screen bg-white">
      {/* Dark hero — matches Odoo legal header band */}
      <section className="bg-[#54575a] pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto w-full max-w-[1100px] px-5 text-center md:px-8">
          <h1 className="text-[34px] font-bold leading-tight text-white md:text-[48px]">
            {title}
          </h1>
          <p className="mt-4 text-[15px] text-white/80 md:text-base">
            Last update: {effectiveDate}
          </p>
        </div>
      </section>

      {/* Single column content — no left sidebar */}
      <section className="bg-white pb-24 pt-12 md:pt-16">
        <div className="mx-auto w-full max-w-[760px] px-5 md:px-8">
          <div className="space-y-14 md:space-y-16">
            {sections.map((section) => (
              <section key={section.id || section.title} id={section.id}>
                <h2 className="text-[26px] font-bold leading-snug text-[#212529] md:text-[32px]">
                  {section.title}
                </h2>
                <div className="legal-prose mt-5 space-y-4 text-[15px] leading-[1.75] text-[#4a4a4a] md:text-[16px] md:leading-[1.8]">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {relatedHref && relatedLabel ? (
            <p className="mt-16 border-t border-[#e9ecef] pt-8 text-[15px] text-[#4a4a4a]">
              See also:{" "}
              <Link
                href={relatedHref}
                className="font-medium text-[var(--primary)] underline underline-offset-2"
              >
                {relatedLabel}
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
