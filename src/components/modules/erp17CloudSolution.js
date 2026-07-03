"use client";

import {
  BarChart3,
  Building2,
  Cloud,
  LayoutDashboard,
  Layers,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: LayoutDashboard,
    title: "Integrated Real-Time Dashboard",
    description:
      "Whether you manage ten branches or five separate companies, ERP17 provides a consolidated real-time summary on a single screen. This empowers you to make data-driven decisions with precision and speed.",
  },
  {
    icon: Layers,
    title: "Multi-Module Versatility",
    description:
      "From core Financial Accounting and Customer Relationship Management (CRM) to automated Payroll and multi-location Inventory tracking, everything is included in one connected platform.",
  },
  {
    icon: Building2,
    title: "Industry-Specific Depth",
    description:
      "Beyond standard modules, ERP17 supports specialized workflows for Manufacturing, Resorts, Superstores, Distribution, and other operationally complex sectors.",
  },
  {
    icon: Zap,
    title: "Automation That Reduces Manual Work",
    description:
      "Routine operations like attendance-to-payroll flow, invoice lifecycle updates, stock movement tracking, and tax-ready reporting are automated to reduce errors and save time.",
  },
  {
    icon: Cloud,
    title: "Scalable, Cloud-Native Architecture",
    description:
      "ERP17 Cloud Solution scales with your growth, whether you are a growing startup or an enterprise operation with multiple teams, entities, and locations.",
  },
  {
    icon: BarChart3,
    title: "Decision-Ready Insights",
    description:
      "With unified data and actionable analytics, leadership can monitor performance trends, identify bottlenecks, and plan confidently from one ecosystem.",
  },
];

export default function Erp17CloudSolution() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative max-w-6xl">
        <SectionHeader
          eyebrow="ERP17 Cloud Solution"
          title="What is ERP17 Cloud Solution?"
          description="ERP17 Cloud Solution is far more than just conventional business software. It is an integrated ecosystem designed to streamline operations, improve visibility, and empower leadership with the clarity needed for sustainable growth."
          className="max-w-3xl"
        />

        <p className="-mt-4 mb-6 text-center text-lg font-medium text-[var(--primary)] md:-mt-5 md:mb-8">
          A Comprehensive Ecosystem for Smarter Business
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] md:rounded-3xl md:p-7"
              >
                <div className="mb-4 flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary-soft)] to-white text-[var(--primary)] ring-1 ring-[var(--primary-soft)]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="pt-1.5 text-lg font-bold leading-snug text-[var(--secondary)] md:text-xl">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-[var(--primary)]/15 bg-gradient-to-br from-[var(--primary)] via-[#45ad10] to-[var(--primary-hover)] p-8 text-white md:mt-10 md:rounded-3xl md:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-black/10 blur-2xl"
            aria-hidden
          />
          <h3 className="relative text-2xl font-bold md:text-3xl">
            Founder&apos;s Freedom, Powered by ERP17
          </h3>
          <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-white/95 md:text-base md:leading-7">
            Our mission is simple: free founders and leadership teams from
            repetitive operational pressure so they can focus on strategic
            growth. ERP17 combines automation, control, and visibility in one
            cloud ecosystem to make that possible every day.
          </p>
        </div>
      </div>
    </section>
  );
}
