// app/hrFeatures.js
"use client";

import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const features = [
  {
    href: "/products/crm",
    icon: "FaAddressBook",
    name: "CRM",
    desc: "Leads, deals, contacts, and pipelines in one cloud CRM on ERP17.",
    points: [
      "Customizable stages and pipeline value your team can trust",
      "Companies and contacts with full activity history",
      "Managers see workload and deals without digging through inboxes",
    ],
  },
  {
    href: "/products/hrm",
    icon: "FaUsers",
    name: "HRM",
    desc: "Human resource management — profiles, documents, hierarchy & reports in one place.",
    points: [
      "Employee records, org structure, and HR documents in one system",
      "Policies and approvals that scale with your headcount",
      "Role-based access for HR, line managers, and employees",
    ],
  },
  {
    href: "/products/ecommerce",
    icon: "FaShoppingCart",
    name: "eCommerce",
    desc: "Online store, catalog, checkout, and order management on ERP17 Cloud.",
    points: [
      "Catalog, pricing, and variants aligned with inventory",
      "Checkout flows with tax and order status customers can follow",
      "Orders feed accounts so revenue matches operations",
    ],
  },
  {
    href: "/products/hotel-booking",
    icon: "FaHotel",
    name: "Hotel Booking",
    desc: "Rooms, rates, reservations, and guest experience in one booking suite.",
    points: [
      "Availability and rate plans in a single operational calendar",
      "Reservations and guest folios updated in real time",
      "Front office, housekeeping, and billing on one platform",
    ],
  },
  {
    href: "/products/gamezone",
    icon: "FaGamepad",
    name: "Gamezone",
    desc: "Engage teams with quests, points, badges, and leaderboards on ERP17.",
    points: [
      "Quests tied to onboarding, compliance, or sales goals",
      "Leaderboards that motivate without exposing payroll data",
      "HR sets rules; staff see a simple, game-style progress view",
    ],
  },
  {
    href: "/products/point-of-sale",
    icon: "FaCashRegister",
    name: "Point of Sale",
    desc: "Fast retail checkout, barcodes, receipts, and store sync on ERP17 Cloud.",
    points: [
      "Barcode and keyboard-friendly checkout for busy counters",
      "Shifts, registers, and cash variance visible to HQ",
      "Sales queue locally when the link drops, then sync cleanly",
    ],
  },
  {
    href: "/products/distribution",
    icon: "FaTruck",
    name: "Distribution",
    desc: "Depot to dealer — stock transfers, van sales, and delivery tracking on ERP17.",
    points: [
      "Transfers and van routes with stock movement everyone can see",
      "Proof of delivery and status for each drop",
      "Tied to inventory and invoicing so nothing is re-keyed at night",
    ],
  },
  {
    href: "/products/accounts",
    icon: "FaCalculator",
    name: "Accounts",
    desc: "Chart of accounts, journals, bank reconciliation, and financial reporting on ERP17 Cloud.",
    points: [
      "General ledger and journals with a clear audit trail",
      "Bank and cash matching without spreadsheet gymnastics",
      "Financial statements from the same data as sales and stock",
    ],
  },
  {
    href: "/products/invoicing",
    icon: "FaFileInvoice",
    name: "Invoicing",
    desc: "Quotes, tax-ready invoices, payments, and customer statements in one billing flow.",
    points: [
      "Quotes that convert to invoices with consistent line items and tax",
      "Payments and aging your collections team can work from daily",
      "Links to inventory and accounts for margin you can defend",
    ],
  },
  {
    href: "/products/inventory",
    icon: "FaBoxes",
    name: "Inventory",
    desc: "Multi-location stock, batches, reorder alerts, and valuation synced with sales and purchasing.",
    points: [
      "On-hand, reserved, and inbound by site or bin",
      "Batches, serials, and reorder signals purchasing can trust",
      "Valuation aligned with POS, eCommerce, and distribution",
    ],
  },
];

const HrFeatures = () => {
  return (
<section className="py-10 md:py-16 bg-white">
  <div className="container">
    {/* Page Title */}
    <div className="text-center mb-6 md:mb-12 px-2">
      <h2 className="text-base sm:text-lg md:text-xl text-gray-500">
        ERP17 Cloud Product Suite
      </h2>
      <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-[#141451] font-bold mt-1 md:mt-4 leading-snug">
        Modules from CRM to inventory — one platform for your business
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
            className="group bg-white rounded-2xl p-3 sm:p-5 border border-gray-200 hover:border-sky-500 transition duration-300 flex flex-col h-full hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            <Icon className="text-3xl sm:text-4xl text-sky-500 mb-2 sm:mb-3" />
            <h3 className="text-lg sm:text-xl font-semibold text-[#141451] mb-1 sm:mb-2 group-hover:text-sky-700">
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
