import Link from "next/link";

export const metadata = {
  title: "Terms and Condition | ERP17",
  description: "Detailed ERP17 terms and conditions for platform access, billing, responsibilities, and service usage.",
};

export default function TermsConditionPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Terms Condition</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-[var(--secondary)] mb-2">Terms and Condition</h1>
        <p className="text-sm text-gray-500 mb-6">Effective date: April 26, 2026</p>

        <div className="space-y-6 text-gray-700 leading-7">
          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">1) Acceptance of Terms</h2>
            <p>
              By using ERP17 services, you agree to comply with these terms, related policies, and applicable laws. If you
              do not agree, you should not access or use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">2) Account Responsibilities</h2>
            <p>
              Customers are responsible for maintaining account confidentiality, managing user permissions, and ensuring that
              their teams use ERP17 lawfully. Any activity under your account is considered authorized by your organization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">3) Subscription, Billing, and Renewal</h2>
            <p>
              ERP17 services may include one-time implementation charges and recurring subscription fees based on selected
              modules, users, and usage scope. Delayed payments may lead to service limitation or temporary suspension
              according to agreed commercial terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">4) Service Availability and Changes</h2>
            <p>
              We continuously improve ERP17 and may update features, UI, integrations, or system behavior. Planned maintenance
              and emergency fixes may occasionally impact availability. We aim to provide prior notice for major changes when possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">5) Data Ownership and Compliance</h2>
            <p>
              Business data uploaded by customers remains customer-owned. ERP17 processes data to deliver services and support.
              Customers remain responsible for ensuring the legality and accuracy of submitted data and for complying with
              sector-specific regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">6) Limitation and Support Scope</h2>
            <p>
              ERP17 is provided on a best-effort and professionally managed basis under active support plans. Dedicated support,
              bug fixes, and updates are included according to subscribed service scope and response commitments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">7) Contact</h2>
            <p>
              For contract, billing, or legal clarifications, contact
              <span className="font-semibold"> support@erp17.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
