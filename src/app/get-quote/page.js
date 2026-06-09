import { Suspense } from "react";
import GetQuoteForm from "@/components/plans/GetQuoteForm";

export const metadata = {
  title: "Get a Quote",
  description:
    "Request a custom ERP17 quote tailored to your business needs. Share your requirements and our team will get back to you.",
};

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary-soft)_0%,_transparent_60%)]" />
        <div className="container relative max-w-4xl mx-auto px-2 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--secondary)]">
            Get a Quote
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every enterprise has unique needs. Share your requirements and
            we&apos;ll tailor an ERP17 solution that fits your business.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container max-w-4xl">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-slate-200/80 bg-white p-8 text-center text-slate-500">
                Loading form...
              </div>
            }
          >
            <GetQuoteForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
