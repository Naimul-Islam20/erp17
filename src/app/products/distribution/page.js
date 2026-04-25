import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Distribution Management Software | ERP17",
  description:
    "End-to-end distribution software for warehouse control, route planning, dealer management, stock transfer, delivery tracking, and channel analytics.",
};

const features = [
  {
    id: "1. Dealer & Channel Management",
    desc: "Manage distributors, dealers, retailers, and channel partners from one centralized platform. Configure pricing tiers, territory rules, and credit policies per partner.",
    benefits: ["Dealer-wise pricing and limits", "Territory and channel segmentation", "Improved partner visibility"],
  },
  {
    id: "2. Stock Transfer & Replenishment",
    desc: "Move inventory across warehouses, depots, and branch points with real-time tracking. Automate replenishment triggers based on stock movement and demand.",
    benefits: ["Real-time transfer status", "Auto replenishment workflow", "Reduced stock-out risk"],
  },
  {
    id: "3. Warehouse Operations",
    desc: "Handle goods receive, put-away, picking, dispatch, and returns with clear transaction logs and operational traceability.",
    benefits: ["Faster warehouse throughput", "Accurate inward/outward records", "Reduced operational errors"],
  },
  {
    id: "4. Route Planning & Delivery Scheduling",
    desc: "Optimize delivery routes for vans and field teams using route planning tools. Schedule deliveries by time slot, area, and vehicle capacity.",
    benefits: ["Lower delivery cost", "Better route efficiency", "On-time distribution performance"],
  },
  {
    id: "5. Proof of Delivery (POD)",
    desc: "Capture delivery confirmation via signature, OTP, or digital acknowledgment. Keep delivery proof records linked with invoices and dispatch notes.",
    benefits: ["Delivery dispute reduction", "Verified handover records", "Complete dispatch audit trail"],
  },
  {
    id: "6. Batch, Expiry & Lot Tracking",
    desc: "Track products by batch or lot with expiry visibility for regulated and FMCG industries. Ensure first-expiry-first-out (FEFO) compliance where needed.",
    benefits: ["Batch-level traceability", "Expiry risk control", "Compliance support for regulated goods"],
  },
  {
    id: "7. Mobile Distribution App",
    desc: "Enable field sales and delivery teams with mobile access for order capture, stock updates, payment collection, and live reporting.",
    benefits: ["Field productivity boost", "Real-time order sync", "Instant visibility from the ground"],
  },
  {
    id: "8. Returns & Reverse Logistics",
    desc: "Manage return flows for damaged, expired, or unsold goods. Track reverse movement and credit adjustments with clear approval processes.",
    benefits: ["Structured return workflow", "Faster credit note processing", "Reduced reconciliation delays"],
  },
  {
    id: "9. Billing, Collections & Credit Control",
    desc: "Generate invoices, track receivables, and monitor overdue balances by dealer or route. Strengthen cash flow with better collection discipline.",
    benefits: ["Dealer-wise outstanding control", "Automated due tracking", "Improved collection efficiency"],
  },
  {
    id: "10. Distribution Analytics & BI",
    desc: "Get actionable insights on route performance, SKU movement, fill rates, dealer sales, and delivery turnaround from real-time dashboards.",
    benefits: ["Channel-wise performance insights", "Data-driven inventory decisions", "Exportable management reports"],
  },
];

export default function DistributionDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Distribution Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">Distribution Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              End-to-end distribution software for warehouse control, route planning, dealer management, stock transfer, delivery tracking, and channel analytics.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/distribution/hero.svg" alt="Distribution Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Control Your Supply Chain from Depot to Dealer</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                ERP17 Distribution Management Software helps businesses streamline product flow across warehouses, routes, and channels. Whether you manage FMCG, pharmaceuticals, wholesale, or multi-branch distribution, our system ensures stock visibility, delivery efficiency, and stronger channel control. Reduce manual coordination, prevent leakage, and improve cash recovery with one integrated platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Dealer Management",
                  "Stock Transfer",
                  "Warehouse Ops",
                  "Route Planning",
                  "POD Tracking",
                  "Batch & Expiry",
                  "Mobile Distribution",
                  "Reverse Logistics",
                  "Credit Control",
                  "Live Analytics",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our Distribution Solution?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Distribution businesses often struggle with fragmented systems, delayed stock updates, and weak route-level visibility. Our platform unifies inventory, delivery, partner billing, and collections into one connected workflow.
              <br />
              <br />
              This helps teams reduce operational delays, improve service levels, and scale distribution confidently.
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
                "FMCG and consumer goods distributors",
                "Pharmaceutical and healthcare distribution",
                "Food and beverage supply networks",
                "Electronics and hardware distributors",
                "Wholesale and trade channels",
                "Multi-warehouse logistics businesses",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Security & Reliability</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Our distribution platform uses secure access controls, role-based permissions, complete transaction logs, and cloud backups to protect mission-critical supply chain data.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Built for real-world distribution complexity",
                "Scalable across territories and channels",
                "Bangla and English support available",
                "Integrated with ERP, Accounts, POS, and CRM modules",
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
              &quot;By implementing ERP17 Distribution platform, we reduced delivery disputes by 42% and improved dealer fulfillment consistency through real-time route, stock, and POD visibility.&quot;
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Optimize Your Distribution Network?</h2>
            <p className="text-lg font-medium text-black">Unify warehouse, route, and channel operations in one intelligent distribution platform.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
