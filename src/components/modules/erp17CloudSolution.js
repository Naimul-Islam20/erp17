"use client";

const pillars = [
  {
    title: "Integrated Real-Time Dashboard",
    description:
      "Whether you manage ten branches or five separate companies, ERP17 provides a consolidated real-time summary on a single screen. This empowers you to make data-driven decisions with precision and speed.",
  },
  {
    title: "Multi-Module Versatility",
    description:
      "From core Financial Accounting and Customer Relationship Management (CRM) to automated Payroll and multi-location Inventory tracking, everything is included in one connected platform.",
  },
  {
    title: "Industry-Specific Depth",
    description:
      "Beyond standard modules, ERP17 supports specialized workflows for Manufacturing, Resorts, Superstores, Distribution, and other operationally complex sectors.",
  },
  {
    title: "Automation That Reduces Manual Work",
    description:
      "Routine operations like attendance-to-payroll flow, invoice lifecycle updates, stock movement tracking, and tax-ready reporting are automated to reduce errors and save time.",
  },
  {
    title: "Scalable, Cloud-Native Architecture",
    description:
      "ERP17 Cloud Solution scales with your growth, whether you are a growing startup or an enterprise operation with multiple teams, entities, and locations.",
  },
  {
    title: "Decision-Ready Insights",
    description:
      "With unified data and actionable analytics, leadership can monitor performance trends, identify bottlenecks, and plan confidently from one ecosystem.",
  },
];

export default function Erp17CloudSolution() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[var(--primary)] font-semibold">
            ERP17 Cloud Solution
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[var(--secondary)] leading-tight">
            What is ERP17 Cloud Solution?
          </h2>

          <p className="mt-3 text-lg text-[var(--primary)] font-medium">
            A Comprehensive Ecosystem for Smarter Business
          </p>

          <p className="mt-6 text-slate-600 leading-7">
            ERP17 Cloud Solution is far more than just conventional business software. It is an integrated ecosystem
            designed to streamline operations, improve visibility, and empower leadership with the clarity needed for
            sustainable growth.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[var(--secondary)]">{pillar.title}</h3>
              <p className="mt-3 text-sm md:text-base text-slate-600 leading-7">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--primary-soft)] bg-[var(--primary-soft)]/40 p-5 md:p-7">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--secondary)]">Founder&apos;s Freedom, Powered by ERP17</h3>
          <p className="mt-3 text-slate-700 leading-7">
            Our mission is simple: free founders and leadership teams from repetitive operational pressure so they can
            focus on strategic growth. ERP17 combines automation, control, and visibility in one cloud ecosystem to
            make that possible every day.
          </p>
        </div>
      </div>
    </section>
  );
}
