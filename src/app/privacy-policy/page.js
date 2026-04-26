import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ERP17",
  description: "Detailed ERP17 privacy policy covering data collection, usage, security, and user rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-[var(--secondary)] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective date: April 26, 2026</p>

        <div className="space-y-6 text-gray-700 leading-7">
          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">1) Information We Collect</h2>
            <p>
              ERP17 collects business and user information required to provide cloud ERP services, including account details,
              company setup data, employee records, attendance logs, transaction data, and support communication history.
              We may also collect technical metadata such as IP address, device type, browser version, and login timestamps.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">2) How We Use Data</h2>
            <p>
              We use collected data to deliver product features, generate analytics dashboards, improve platform performance,
              provide customer support, send service updates, and maintain account security. We do not sell your personal or
              organizational data to third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">3) Data Security and Retention</h2>
            <p>
              ERP17 applies encryption in transit and at rest, role-based access controls (RBAC), regular backups, and
              monitoring procedures to protect data from unauthorized access, alteration, or loss. Data is retained based on
              business and legal requirements, and can be archived or deleted upon verified customer request where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">4) Sharing and Third-Party Services</h2>
            <p>
              We share limited data only with trusted infrastructure or integration partners necessary to operate ERP17
              services (for example, hosting, communication, payment, or API integrations). These partners are contractually
              required to maintain confidentiality and security standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">5) Your Rights</h2>
            <p>
              Authorized customers may request access, correction, export, or deletion of eligible data. To process such
              requests, contact our support team from your registered business account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--secondary)] mb-2">6) Contact</h2>
            <p>
              For privacy concerns or data protection requests, contact us at
              <span className="font-semibold"> support@erp17.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
