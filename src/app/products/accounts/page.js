import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Account Management Software | ERP17",
  description:
    "Powerful accounting software for managing invoices, expenses, billing, payments, financial reports, and budgeting with accuracy and automation.",
};

const features = [
  {
    id: "1. Comprehensive Ledger Management",
    desc: "Maintain an organized, digital ledger of all your business's financial transactions. Effortlessly track debits, credits, journal entries, and balances for every account.",
    benefits: ["Automated double-entry bookkeeping", "Easy reconciliation and error detection", "Quick access to all account histories"],
  },
  {
    id: "2. Invoicing and Billing",
    desc: "Create professional invoices and bills in seconds. Customize templates with your branding, set recurring invoices, and automate payment reminders to improve your cash flow.",
    benefits: ["Faster billing and payments", "Reduce late payments with reminders", "GST/VAT and discount integration"],
  },
  {
    id: "3. Expense & Income Tracking",
    desc: "Record and categorize all expenses and income with just a few clicks. Get detailed breakdowns and visual reports to see exactly where your money is going.",
    benefits: ["Clear financial visibility", "Budget control and forecasting", "Prevents overspending"],
  },
  {
    id: "4. Bank Reconciliation",
    desc: "Easily reconcile your bank statements with system records. Identify discrepancies, match transactions, and ensure your books are always accurate and up to date.",
    benefits: ["Saves hours of manual checking", "Reduces errors and fraud risk", "Simple matching interface"],
  },
  {
    id: "5. Multi-Currency Support",
    desc: "Transact and report in multiple currencies-ideal for businesses dealing with global clients and suppliers.",
    benefits: ["Real-time currency conversion", "Supports international business", "Accurate reporting for all regions"],
  },
  {
    id: "6. Tax Management",
    desc: "Automate tax calculations and prepare returns for VAT, GST, or local taxes. Stay compliant with changing regulations and never miss a tax deadline.",
    benefits: ["Automated tax calculation", "Tax report generation", "Avoid costly penalties"],
  },
  {
    id: "7. Financial Reporting & Analytics",
    desc: "Access a wide range of real-time reports, including balance sheets, profit and loss statements, cash flow analysis, and custom analytics. Visual dashboards make data interpretation easy for everyone.",
    benefits: ["Informed decision-making", "Audit-ready statements", "Export to Excel, PDF, etc."],
  },
  {
    id: "8. Integrated Payment Solutions",
    desc: "Receive and record payments through multiple channels-bank transfer, cash, cheque, or digital wallet. Seamless integration with payment gateways improves collection efficiency.",
    benefits: ["Instant payment updates", "Fewer manual entries", "Better cash management"],
  },
  {
    id: "9. Role-Based User Access",
    desc: "Assign roles and set permissions for team members. Keep sensitive financial data secure and ensure accountability with audit logs.",
    benefits: ["Enhanced data privacy", "Prevent unauthorized access", "Track changes and user activity"],
  },
  {
    id: "10. Mobile & Cloud Access",
    desc: "Access your accounting system from anywhere, at any time, using your mobile device or desktop. Enjoy automatic updates and data backups with robust cloud hosting.",
    benefits: ["Work remotely and collaborate", "Automatic software upgrades", "Safe, encrypted cloud storage"],
  },
];

export default function AccountsDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Account Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">Account Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              Powerful accounting software for managing invoices, expenses, billing, payments, financial reports, and budgeting with accuracy and automation.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/accounts/hero.svg" alt="Account Management Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Account Management Software</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                Managing your company&apos;s finances doesn&apos;t have to be complicated or time-consuming. At ERP17, we empower businesses with a modern, intuitive Account Management Software that streamlines financial operations, automates complex accounting processes, and delivers real-time insights for smarter decision-making. Designed for businesses of any size, our software is your all-in-one solution for financial management, compliance, and growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Ledger Management",
                  "Invoicing and Billing",
                  "Expense & Income",
                  "Bank Reconciliation",
                  "Multi-Currency",
                  "Tax Management",
                  "Reporting & Analytics",
                  "Integrated Payment",
                  "Role-Based User",
                  "Mobile Access",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our Account Management Software?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Traditional manual accounting is often slow, error-prone, and resource-intensive. Our Account Management Software is built to simplify bookkeeping, boost productivity, and ensure compliance with regulatory requirements. It&apos;s cloud-based, secure, and easy to use-giving you and your team confidence in your financial data at all times.
              <br />
              <br />
              From daily transactions to annual audits, our solution makes accounting efficient, transparent, and reliable.
            </p>
          </section>

          <section className="space-y-8 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] inline-block">Key Features</h2>

            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[var(--secondary)]">{feature.id}</h3>
                  <p className="text-lg text-black leading-relaxed text-justify">{feature.desc}</p>
                  <p className="font-black uppercase text-[10px] tracking-widest mt-2 opacity-60">Benefits:</p>
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

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Data Security and Compliance</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Our Account Management Software employs the latest security protocols including SSL encryption, multi-factor authentication, and regular backups. Stay compliant with industry standards and local regulations, ensuring your financial data is always safe and protected.
            </p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Who Is It For?</h2>
            <p className="text-lg font-medium text-black">Our software is trusted by:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "SMEs and large enterprises",
                "Retailers and wholesalers",
                "Service providers",
                "Manufacturers",
                "Non-profits and associations",
                "Educational institutions",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why Businesses Prefer Us</h2>
            <ul className="space-y-1.5">
              {[
                "User-friendly Interface: Minimal training required",
                "Customization: Adaptable to unique workflows",
                "Local Language Support: English and Bangla available",
                "Seamless Integration: Works with ERP, CRM, HRM, and POS",
                "Dedicated Support: 24/7 assistance from our expert team",
                "Affordable Pricing: Flexible plans for every budget",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Success Story</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              &quot;After switching to ERP17&apos;s Account Management Software, our invoicing time reduced by 60%, and financial reporting became 100% accurate. We now have better control over our cash flow and compliance.&quot;- A leading retail company.
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Get Started With Smart Accounting</h2>
            <p className="text-lg font-medium text-black">Take the hassle out of accounting and focus on what matters-growing your business.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
