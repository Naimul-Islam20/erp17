// app/hrFeatures.js
"use client";

import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

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

const HrFeatures = () => {
  return (
<section className="py-5 md:py-16 bg-white">
  <div className="container">
    {/* Section title + description */}
    <div className="text-center mb-4 md:mb-12 px-2 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-[var(--secondary)]">
        The Power Behind Your Business Growth
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 md:mt-6 leading-relaxed">
        ERP17 Cloud Solution provides a unified ecosystem that seamlessly integrates every department of your enterprise.
        From real-time financial insights and automated inventory to streamlined HR and sales, our modules work together to
        eliminate operational chaos. Experience the ultimate control needed to scale your business while enjoying a
        hassle-free life.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
      {features.map((feature, index) => {
        const Icon = FaIcons[feature.icon] || FaIcons.FaCircle;
        return (
          <Link
            key={index}
            href={feature.href}
            className="group bg-white rounded-2xl p-3 sm:p-5 border border-gray-200 hover:border-[var(--primary)] transition duration-300 flex flex-col h-full hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            <Icon className="text-3xl sm:text-4xl text-[var(--primary)] mb-2 sm:mb-3" />
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--secondary)] mb-1 sm:mb-2 group-hover:text-[var(--secondary)]">
              {feature.name}
            </h3>
            <p className="text-sm sm:text-sm text-gray-600 mb-2 sm:mb-3">
              {feature.desc}
            </p>
            <ul className="text-sm sm:text-sm text-gray-700 list-disc pl-5 space-y-1">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Link>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default HrFeatures;
