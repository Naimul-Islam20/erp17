"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import * as FaIcons from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    href: "/products/accounts",
    icon: "FaCalculator",
    name: "Accounts (Financial Management)",
    desc: "Full-cycle accounting with real-time reports, expense visibility, and VAT & tax compliance aligned with local rules.",
    points: [
      "Full-Cycle Accounting: Manage everything from General Ledger to Profit & Loss statements.",
      "Real-time Reports: Instant access to Balance Sheets, Cash Flow, and Trial Balances.",
      "Expense Tracking: Easily monitor company expenses and categorize overheads.",
      "VAT & Tax Compliance: Automated tax calculations aligned with local regulations.",
    ],
  },
  {
    href: "/products/inventory",
    icon: "FaBoxes",
    name: "Inventory (Stock Management)",
    desc: "Multi-warehouse stock, alerts, barcode flows, and batch or expiry tracking from one operational view.",
    points: [
      "Multi-Warehouse Tracking: Manage stock across multiple locations or branches from one screen.",
      "Low Stock Alerts: Automated notifications when items need to be restocked.",
      "Barcode Integration: Streamline stock-in and stock-out using advanced barcode scanning.",
      "Batch & Expiry Tracking: Maintain quality control with expiry date and batch management.",
    ],
  },
  {
    href: "/products/point-of-sale",
    icon: "FaCashRegister",
    name: "POS (Point of Sale)",
    desc: "Offline-ready billing, fast checkout, multiple payment options, and instant customer receipts.",
    points: [
      "Offline Billing: Continue sales even without internet; data syncs automatically once online.",
      "Quick Checkout: Lightning-fast interface designed for high-traffic retail environments.",
      "Multiple Payment Methods: Support for Cash, Card, and Mobile Financial Services (MFS).",
      "Customer Receipts: Generate professional thermal or digital receipts instantly.",
    ],
  },
  {
    href: "/products/hrm",
    icon: "FaUsers",
    name: "HRM (Human Resource Management)",
    desc: "Centralized employee records, leave workflows, performance insight, and asset assignment in one HR hub.",
    points: [
      "Employee Database: Centralized records for all staff, including documents and history.",
      "Leave Management: Automated workflow for leave applications and approvals.",
      "Performance Tracking: Monitor employee productivity and appraisal records.",
      "Asset Management: Track company equipment issued to specific employees.",
    ],
  },
  {
    href: "/products/crm",
    icon: "FaAddressBook",
    name: "CRM (Customer Relationship Management)",
    desc: "Leads, customer history, automated follow-ups, and loyalty programs to grow repeat business.",
    points: [
      "Lead Management: Track potential clients from the first contact to the final sale.",
      "Customer History: Access complete purchase history and interaction logs for every client.",
      "Automated Follow-ups: Schedule reminders for calls, meetings, or promotional emails.",
      "Loyalty Programs: Manage reward points and special discounts for repeat customers.",
    ],
  },
  {
    href: "/products/ecommerce",
    icon: "FaShoppingCart",
    name: "eCommerce (Online Store Builder)",
    desc: "Storefront, inventory sync, order tracking, payments, and a mobile-friendly shopping experience.",
    points: [
      "Inventory Sync: Your online shop and physical warehouse stay updated in real-time.",
      "Order Management: Track orders from placement to delivery in a single dashboard.",
      "Payment Gateway Integration: Securely accept online payments via local and global cards.",
      "Mobile Optimized: A seamless shopping experience for customers on any device.",
    ],
  },
  {
    href: "/products/hotel-booking",
    icon: "FaHotel",
    name: "Hotel & Resort Booking",
    desc: "Reservations, guest handling, housekeeping, and rich guest profiles for hospitality teams.",
    points: [
      "Room Reservation: Real-time booking calendar with room availability status.",
      "Check-in/Check-out: Simplified guest handling with automated billing.",
      "Housekeeping Management: Track room cleaning status and maintenance tasks.",
      "Guest Profiles: Maintain detailed records and preferences for returning guests.",
    ],
  },
  {
    href: "/products/gamezone",
    icon: "FaGamepad",
    name: "Gamezone Management",
    desc: "Session billing, ticketing, combo offers, and equipment status for entertainment venues.",
    points: [
      "Time-Based Billing: Precise tracking of gaming sessions or facility usage time.",
      "Ticket Generation: Digital or printed tickets for entry and specific activities.",
      "Combo Packages: Easily create and manage offers for food and play-time combos.",
      "Equipment Tracking: Manage the status and maintenance of gaming consoles or machines.",
    ],
  },
];

function FeaturePoint({ text }) {
  const colonIndex = text.indexOf(":");
  const label = colonIndex > -1 ? text.slice(0, colonIndex + 1) : text;
  const detail = colonIndex > -1 ? text.slice(colonIndex + 1).trim() : "";

  return (
    <li className="flex gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)]/60">
        <Check className="h-3 w-3 text-[var(--primary)]" strokeWidth={3} />
      </span>
      <span className="text-sm leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-700">{label}</span>
        {detail ? ` ${detail}` : null}
      </span>
    </li>
  );
}

const HrFeatures = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 to-white py-8 md:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative">
        <SectionHeader
          eyebrow="Modules"
          title="The Power Behind Your Business Growth"
          description="ERP17 Cloud Solution provides a unified ecosystem that seamlessly integrates every department of your enterprise. From real-time financial insights and automated inventory to streamlined HR and sales, our modules work together to eliminate operational chaos. Experience the ultimate control needed to scale your business while enjoying a hassle-free life."
          className="max-w-4xl"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => {
            const Icon = FaIcons[feature.icon] || FaIcons.FaCircle;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.04)] sm:p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] md:rounded-3xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary-soft)] to-white text-[var(--primary)] ring-1 ring-[var(--primary-soft)]">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="text-lg font-bold leading-snug text-[var(--secondary)] sm:text-xl">
                  {feature.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </p>

                <ul className="mt-4 flex-1 space-y-3 border-t border-slate-100 pt-4">
                  {feature.points.map((point) => (
                    <FeaturePoint key={point} text={point} />
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[var(--primary)]">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HrFeatures;
