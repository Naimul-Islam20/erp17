import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Invoicing Management Software | ERP17",
  description:
    "Smart invoicing solution for quotation, billing, tax handling, payment collection, receivable tracking, and financial reporting with complete automation.",
};

const features = [
  {
    id: "1. Quotation to Invoice Workflow",
    desc: "Create professional quotations and convert approved quotes into invoices instantly. Keep item details, tax rules, and discounts consistent without re-entry.",
    benefits: ["Faster quote-to-cash cycle", "Reduced manual billing errors", "Version-controlled quotation history"],
  },
  {
    id: "2. Smart Invoice Generation",
    desc: "Generate branded invoices with customer info, itemized lines, tax calculations, and payment terms in seconds.",
    benefits: ["Professional invoice templates", "One-click invoice generation", "Custom numbering and branding"],
  },
  {
    id: "3. Tax & Compliance Handling",
    desc: "Configure VAT/GST and local tax rules per item or service type. Ensure every invoice follows compliance-ready formats.",
    benefits: ["Accurate tax calculation", "Compliance-ready documentation", "Easy audit support"],
  },
  {
    id: "4. Payment Tracking & Collection",
    desc: "Track full, partial, and overdue payments in real time. Monitor collection status and reduce receivable delays with smart reminders.",
    benefits: ["Real-time payment updates", "Partial payment support", "Automated collection follow-ups"],
  },
  {
    id: "5. Credit Notes & Adjustments",
    desc: "Issue credit notes, debit notes, and invoice adjustments linked directly to original billing documents.",
    benefits: ["Structured return/refund handling", "Accurate customer balance updates", "Transparent adjustment logs"],
  },
  {
    id: "6. Customer Statement Management",
    desc: "Generate customer-wise account statements including open, overdue, and settled transactions.",
    benefits: ["Clear receivable visibility", "Improved customer communication", "Faster settlement reconciliation"],
  },
  {
    id: "7. Recurring Invoicing",
    desc: "Automate recurring invoices for subscriptions, retainers, and service contracts with configurable frequency.",
    benefits: ["No missed recurring bills", "Consistent monthly cash flow", "Reduced repetitive work"],
  },
  {
    id: "8. Multi-Currency & Multi-Branch Billing",
    desc: "Manage invoicing across multiple currencies and branches from one platform with branch-wise controls.",
    benefits: ["Branch-level invoice management", "Currency-wise reporting", "Centralized billing governance"],
  },
  {
    id: "9. Invoicing Analytics & Reports",
    desc: "Access invoice aging, collection trends, tax summaries, and billing performance insights from live dashboards.",
    benefits: ["Collection performance insights", "Better cash flow planning", "Exportable reports (PDF/Excel)"],
  },
  {
    id: "10. Integration with ERP & Accounts",
    desc: "Sync invoices, payments, and receivables directly with Accounts, Inventory, and CRM for seamless end-to-end operations.",
    benefits: ["Unified financial workflow", "No duplicate data entry", "Real-time accounting alignment"],
  },
];

export default function InvoicingDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Invoicing Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">Invoicing Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              Smart invoicing solution for quotation, billing, tax handling, payment collection, receivable tracking, and financial reporting with complete automation.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/invoicing/hero.svg" alt="Invoicing Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Accelerate Billing and Improve Collections</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                ERP17 Invoicing platform helps businesses simplify the full billing lifecycle - from quotation to collection. Our system ensures every invoice is accurate, tax-compliant, and payment-trackable while reducing manual work and delays. Whether you are a service company, distributor, or multi-branch enterprise, this solution gives you complete billing control and better receivable management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Quote to Invoice",
                  "Smart Billing",
                  "Tax Automation",
                  "Payment Tracking",
                  "Credit Notes",
                  "Customer Statements",
                  "Recurring Billing",
                  "Multi-Branch Billing",
                  "Invoice Analytics",
                  "ERP Integration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-base font-bold text-black uppercase tracking-tight">
                    <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our Invoicing Solution?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Manual invoicing and disconnected payment tracking often lead to delays, errors, and cash flow pressure. Our invoicing software centralizes billing, receivable monitoring, and tax calculations in one system.
              <br />
              <br />
              This gives your finance and operations teams better visibility, faster collections, and cleaner records for reporting and compliance.
            </p>
          </section>

          <section className="space-y-8 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] inline-block">Core Modules & Features</h2>

            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[var(--secondary)]">{feature.id}</h3>
                  <p className="text-lg text-black leading-relaxed text-justify">{feature.desc}</p>
                  <p className="font-black uppercase text-[10px] tracking-widest mt-2 opacity-60">Key Benefits:</p>
                  <ul className="space-y-1 pt-0.5">
                    {feature.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-black font-bold text-base">
                        <FaCheck className="text-[var(--primary)] text-[10px] mt-1 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Best Fit For</h2>
            <p className="text-lg font-medium text-black">This software is ideal for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Service and consulting firms",
                "Wholesale and distribution companies",
                "Retail and eCommerce businesses",
                "Subscription-based businesses",
                "Manufacturing operations",
                "Multi-branch organizations",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Security & Compliance</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              We secure invoice and payment data with role-based access controls, encrypted storage, detailed logs, and reliable backups to support compliance and audit readiness.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Simple and fast billing interface",
                "Flexible for small to enterprise operations",
                "Bangla and English support available",
                "Seamless Accounts, ERP, and CRM integration",
                "Dedicated onboarding and support team",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Success Snapshot</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              &quot;After deploying ERP17 Invoicing, our billing cycle reduced by 50% and overdue collections improved significantly through real-time receivable tracking and automated reminders.&quot;
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Modernize Your Billing Workflow?</h2>
            <p className="text-lg font-medium text-black">Automate invoicing, improve collections, and gain clear financial visibility from one platform.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
