"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Check, X, Plus, Minus, Sparkles, Phone } from "lucide-react";
import { primaryCtaClassName } from "@/constants/cta";
import { PLANS, COMPARISON_ROWS } from "@/data/plansComparison";

const FEATURED_PLAN_ID = "business";
const MODULE_FEATURES_SECTION_ID = "Module & Features";

function formatPrice(amount) {
  return `৳${amount.toLocaleString("en-BD")}`;
}

function PlanPrice({ plan, isYearly }) {
  const priceClass = "text-xl md:text-2xl lg:text-3xl";

  if (plan.priceLabel) {
    return (
      <div className="mt-2 md:mt-3 flex flex-col items-center gap-1 md:gap-1.5">
        <div className="flex items-baseline justify-center gap-1">
          <span
            className={`${priceClass} font-extrabold tracking-tight text-[var(--secondary)]`}
          >
            {plan.priceLabel}
          </span>
        </div>
        {isYearly ? (
          <span
            className="rounded-full border border-transparent px-2 py-0.5 md:px-2.5 md:py-1 text-[11px] md:text-sm font-medium invisible"
            aria-hidden="true"
          >
            Save
          </span>
        ) : null}
      </div>
    );
  }

  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const hasYearlyDiscount =
    isYearly && plan.yearlyPrice < plan.monthlyPrice && plan.monthlyPrice > 0;
  if (hasYearlyDiscount) {
    const savings = plan.monthlyPrice - plan.yearlyPrice;

    return (
      <div className="mt-2 md:mt-3 flex flex-col items-center gap-1 md:gap-1.5">
        <div className="flex items-baseline justify-center gap-1">
          <span
            className={`${priceClass} font-extrabold tracking-tight text-[var(--secondary)]`}
          >
            {formatPrice(price)}
          </span>
          <span className="text-[10px] md:text-xs font-medium text-slate-400">
            /mo
          </span>
        </div>
        <span className="rounded-full border border-emerald-200/70 bg-emerald-50/90 px-2 py-0.5 md:px-2.5 md:py-1 text-[11px] md:text-sm font-medium text-emerald-600">
          Save {formatPrice(savings)}
        </span>
      </div>
    );
  }

  return (
    <div className="mt-2 md:mt-3 flex items-baseline justify-center gap-1">
      <span
        className={`${priceClass} font-extrabold tracking-tight text-[var(--secondary)]`}
      >
        {formatPrice(price)}
      </span>
      <span className="text-[10px] md:text-xs font-medium text-slate-400">
        /mo
      </span>
    </div>
  );
}

function CellValue({ value }) {
  if (!value || value === "-") {
    return <span className="text-slate-300">—</span>;
  }

  const lower = value.toLowerCase();
  const iconSize = "h-6 w-6 md:h-7 md:w-7";
  const iconInner = "h-3.5 w-3.5 md:h-4 md:w-4";

  if (lower === "yes") {
    return (
      <span
        className={`inline-flex ${iconSize} items-center justify-center rounded-full bg-emerald-50 text-emerald-600`}
        aria-label="Included"
      >
        <Check className={iconInner} strokeWidth={2.5} />
      </span>
    );
  }
  if (lower === "no") {
    return (
      <span
        className={`inline-flex ${iconSize} items-center justify-center rounded-full bg-slate-100 text-black`}
        aria-label="Not included"
      >
        <X className={iconInner} strokeWidth={2.5} />
      </span>
    );
  }

  return (
    <span className="text-[11px] md:text-sm font-medium leading-snug text-slate-700">
      {value}
    </span>
  );
}

function groupComparisonBySection(rows) {
  const groups = [];
  let current = null;

  for (const row of rows) {
    if (row.type === "section") {
      current = { id: row.label, section: row, children: [] };
      groups.push(current);
      continue;
    }
    if (current) {
      current.children.push(row);
    }
  }

  return groups;
}

const SECTION_GROUPS = groupComparisonBySection(COMPARISON_ROWS);
const PLAN_COL_COUNT = PLANS.length + 1;

const TABLE_LAYOUT = {
  featureColWidth: 180,
  planColWidth: 140,
  tableMinWidth: 180 + PLANS.length * 140,
  featureColPercent: `${(180 / (180 + PLANS.length * 140)) * 100}%`,
  planColPercent: `${(140 / (180 + PLANS.length * 140)) * 100}%`,
};

function PlansTableColgroup({ layout }) {
  return (
    <colgroup>
      <col style={{ width: layout.featureColPercent }} />
      {PLANS.map((plan) => (
        <col key={plan.id} style={{ width: layout.planColPercent }} />
      ))}
    </colgroup>
  );
}

function SectionToggleIcon({ isExpanded }) {
  return (
    <span className="relative inline-flex h-6 w-6 md:h-7 md:w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[var(--primary)] shadow-sm">
      <Plus
        className={`absolute h-3 w-3 md:h-3.5 md:w-3.5 transition-all duration-300 ease-out ${
          isExpanded
            ? "scale-75 opacity-0 rotate-90"
            : "scale-100 opacity-100 rotate-0"
        }`}
        strokeWidth={2.5}
        aria-hidden={isExpanded}
      />
      <Minus
        className={`absolute h-3 w-3 md:h-3.5 md:w-3.5 transition-all duration-300 ease-out ${
          isExpanded
            ? "scale-100 opacity-100 rotate-0"
            : "scale-75 opacity-0 -rotate-90"
        }`}
        strokeWidth={2.5}
        aria-hidden={!isExpanded}
      />
    </span>
  );
}

export default function PlansComparisonTable() {
  const layout = TABLE_LAYOUT;
  const [billing, setBilling] = useState("yearly");
  const [expandedSections, setExpandedSections] = useState(
    () => new Set([MODULE_FEATURES_SECTION_ID]),
  );

  const isYearly = billing === "yearly";

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const stickyCellClass =
    "sticky left-0 z-10 bg-white border-r border-slate-200 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.06)]";
  const stickyHeadClass =
    "sticky left-0 z-20 bg-slate-50 border-r border-slate-200 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.06)]";

  const renderFeatureRow = (row, index) => (
    <tr
      key={`feature-${row.label}-${index}`}
      className="border-b border-slate-100 transition-colors hover:bg-slate-50/60"
    >
      <td
        className={`${stickyCellClass} px-3 py-2.5 pl-8 md:px-5 md:py-3.5 md:pl-12`}
      >
        <span className="text-xs md:text-sm text-slate-700">{row.label}</span>
      </td>
      {row.values.map((value, planIndex) => (
        <td
          key={PLANS[planIndex].id}
          className="bg-white px-2 py-2.5 md:px-4 md:py-3.5 text-center align-middle border-r border-slate-200 last:border-r-0"
        >
          <CellValue value={value} />
        </td>
      ))}
    </tr>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="relative overflow-hidden py-8 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary-soft)_0%,_transparent_60%)]" />
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-[var(--primary)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-[var(--secondary)]/5 blur-3xl" />

        <div className="container relative text-center max-w-3xl mx-auto px-3 md:px-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)]/20 bg-white/80 px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--primary)] shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5" />
            Flexible Pricing
          </span>
          <h1 className="mt-4 md:mt-5 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--secondary)]">
            Choose Your Plan
          </h1>
          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed px-1">
            Compare ERP17 packages and pick the right fit for your growing
            business.
          </p>

          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-white p-1 sm:p-1.5 shadow-md shadow-slate-200/50">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  billing === "monthly"
                    ? "bg-[var(--secondary)] text-white shadow-sm"
                    : "text-slate-600 hover:text-[var(--secondary)]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  billing === "yearly"
                    ? "bg-[var(--secondary)] text-white shadow-sm"
                    : "text-slate-600 hover:text-[var(--secondary)]"
                }`}
              >
                Yearly
                <span
                  className={`ml-1 text-[10px] sm:text-xs font-medium ${
                    billing === "yearly"
                      ? "text-[var(--primary)]"
                      : "text-emerald-600"
                  }`}
                >
                  (Save 20%)
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-16">
        <div className="container px-3 md:px-3">
          <p className="mb-2 text-center text-[11px] font-medium text-slate-400 md:hidden">
            Swipe left to compare all plans
          </p>

          <div className="relative overflow-x-auto overscroll-x-contain rounded-xl md:rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40 [-webkit-overflow-scrolling:touch]">
            <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-6 bg-gradient-to-l from-white/95 to-transparent md:hidden" />
            <table
              className="w-full border-collapse table-fixed text-left"
              style={{ minWidth: layout.tableMinWidth }}
            >
              <PlansTableColgroup layout={layout} />
              <thead>
                <tr className="border-b border-slate-200">
                  <th
                    className={`${stickyHeadClass} p-3 md:p-5 text-left align-bottom min-w-[124px]`}
                  >
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-slate-400 leading-tight">
                      {isYearly ? "Billed Annually" : "Billed Monthly"}
                    </span>
                  </th>
                  {PLANS.map((plan) => {
                    const isFeatured = plan.id === FEATURED_PLAN_ID;
                    return (
                      <th
                        key={plan.id}
                        className={`relative min-w-[108px] p-3 md:p-5 text-center align-bottom border-r border-slate-200 last:border-r-0 ${
                          isFeatured
                            ? "bg-gradient-to-b from-[var(--primary-soft)]/80 to-[var(--primary-soft)]/20"
                            : "bg-slate-50"
                        }`}
                      >
                        {isFeatured ? (
                          <span className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-md md:rounded-b-lg bg-[var(--primary)] px-2 md:px-3 py-0.5 md:py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-white shadow-sm whitespace-nowrap">
                            Most Popular
                          </span>
                        ) : null}
                        <p
                          className={`font-bold text-sm md:text-base uppercase tracking-wide ${
                            isFeatured
                              ? "text-[var(--secondary)] mt-3 md:mt-4"
                              : "text-[var(--secondary)]"
                          }`}
                        >
                          {plan.name}
                        </p>
                        <PlanPrice plan={plan} isYearly={isYearly} />
                        {plan.ctaType === "call" ? (
                          <a
                            href={plan.ctaHref}
                            aria-label={plan.ctaLabel}
                            className="mt-3 md:mt-4 w-full text-[10px] md:text-xs px-3 md:px-4 py-2 md:py-2.5 inline-flex items-center justify-center rounded-full border-2 border-[var(--secondary)] bg-[var(--secondary)] text-white font-bold hover:bg-[var(--secondary)]/90 text-center transition-all duration-200"
                          >
                            <Phone
                              className="h-3.5 w-3.5 md:h-4 md:w-4 text-white"
                              strokeWidth={2.5}
                            />
                          </a>
                        ) : (
                          <Link
                            href={`/get-quote?plan=${plan.id}`}
                            className={`mt-3 md:mt-4 w-full text-[10px] md:text-xs px-3 md:px-4 py-2 md:py-2.5 inline-block transition-all duration-200 ${
                              isFeatured
                                ? primaryCtaClassName +
                                  " shadow-md shadow-[var(--primary)]/25 hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:-translate-y-0.5"
                                : "rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)] font-bold hover:bg-[var(--secondary)] hover:text-white text-center"
                            }`}
                          >
                            {plan.ctaLabel}
                          </Link>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {SECTION_GROUPS.map((group) => {
                  const isExpanded = expandedSections.has(group.id);
                  const featureCount = group.children.length;

                  return (
                    <Fragment key={group.id}>
                      <tr className="border-y border-slate-200">
                        <td colSpan={PLAN_COL_COUNT} className="p-0">
                          <button
                            type="button"
                            onClick={() => toggleSection(group.id)}
                            className={`flex w-full items-center gap-2 md:gap-3 px-3 md:px-5 py-3 md:py-3.5 text-left text-xs md:text-sm font-bold transition-all duration-200 ${
                              isExpanded
                                ? "bg-[var(--primary-soft)]/60 text-slate-800"
                                : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                            }`}
                            aria-expanded={isExpanded}
                          >
                            <SectionToggleIcon isExpanded={isExpanded} />
                            <span className="min-w-0 truncate">
                              {group.section.label}
                            </span>
                            <span
                              className={`ml-auto shrink-0 text-[10px] md:text-xs font-medium ${
                                isExpanded
                                  ? "text-[var(--primary)]"
                                  : "text-slate-400"
                              }`}
                            >
                              {featureCount} items
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td colSpan={PLAN_COL_COUNT} className="p-0">
                          <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                              isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden min-h-0">
                              <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
                                <table
                                  className="w-full border-collapse table-fixed"
                                  style={{ minWidth: layout.tableMinWidth }}
                                >
                                  <PlansTableColgroup layout={layout} />
                                  <tbody>
                                    {group.children.map((row, index) =>
                                      renderFeatureRow(row, index),
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-6 md:mt-8 text-center text-xs md:text-sm text-slate-500 px-2">
            Need a custom solution?{" "}
            <Link
              href="/get-quote"
              className="font-semibold text-[var(--primary)] hover:underline"
            >
              Get a Quote
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
