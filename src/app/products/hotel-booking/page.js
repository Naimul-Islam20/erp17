import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Hotel Booking Management Software | ERP17",
  description:
    "Complete hotel and resort booking software for reservations, room inventory, front desk operations, billing, guest management, and revenue analytics.",
};

const features = [
  {
    id: "1. Reservation & Booking Engine",
    desc: "Manage direct, OTA, phone, and walk-in bookings from one unified dashboard. Prevent overbooking with real-time room availability and instant status sync.",
    benefits: ["Centralized booking calendar", "Real-time availability updates", "No double-booking conflicts"],
  },
  {
    id: "2. Front Desk Operations",
    desc: "Handle check-in, check-out, room upgrades, extensions, and guest requests quickly through a front-desk optimized interface.",
    benefits: ["Faster check-in/out flow", "Live room status updates", "Reduced manual entry errors"],
  },
  {
    id: "3. Room & Inventory Management",
    desc: "Control room categories, rates, occupancy, housekeeping status, and maintenance blocks from one place.",
    benefits: ["Room-type wise pricing", "Housekeeping and maintenance tracking", "Optimized room utilization"],
  },
  {
    id: "4. Dynamic Pricing & Revenue Control",
    desc: "Set seasonal rates, weekend pricing, event-based surcharges, and promotional discounts to maximize occupancy and revenue.",
    benefits: ["Flexible pricing rules", "Higher RevPAR potential", "Automated rate updates"],
  },
  {
    id: "5. Guest Profile & CRM",
    desc: "Build detailed guest profiles including stay history, preferences, and special requests for personalized service.",
    benefits: ["Personalized guest experience", "Repeat guest tracking", "Improved retention and satisfaction"],
  },
  {
    id: "6. Billing, Folio & Payments",
    desc: "Generate guest folios with room charges, food bills, services, taxes, and discounts. Support split payments and multiple payment channels.",
    benefits: ["Accurate guest billing", "Multi-mode payment support", "Faster settlement at checkout"],
  },
  {
    id: "7. Housekeeping & Task Assignment",
    desc: "Assign cleaning and room readiness tasks to housekeeping teams with live status visibility.",
    benefits: ["Faster room turnover", "Task-level accountability", "Real-time housekeeping dashboard"],
  },
  {
    id: "8. Multi-Property Management",
    desc: "Operate multiple hotels, resorts, or properties from one cloud platform while keeping branch-level controls.",
    benefits: ["Centralized command panel", "Property-wise comparison reports", "Standardized operations"],
  },
  {
    id: "9. Reports & Business Analytics",
    desc: "Get occupancy, ADR, RevPAR, booking source, cancellation trend, and revenue analytics in real time.",
    benefits: ["Data-driven pricing decisions", "Performance tracking by period", "Exportable audit-ready reports"],
  },
  {
    id: "10. Security & Access Control",
    desc: "Secure sensitive guest and financial data through role-based permissions, audit logs, and encrypted cloud storage.",
    benefits: ["Controlled staff access", "Improved compliance posture", "Reliable data protection"],
  },
];

export default function HotelBookingDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Hotel Booking Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">Hotel Booking Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              Complete hotel and resort booking software for reservations, room inventory, front desk operations, billing, guest management, and revenue analytics.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/hotel-booking/hero.svg" alt="Hotel Booking Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Run Hospitality Operations with Confidence</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                ERP17 provides an intelligent Hotel Booking Management platform designed for hotels, resorts, serviced apartments, and guest houses. From booking confirmation to final checkout, every guest touchpoint is digitized for speed, accuracy, and better service quality. Our cloud-based system helps you reduce operational friction, improve occupancy planning, and grow revenue with real-time business visibility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Reservation Control",
                  "Front Desk Management",
                  "Room Inventory",
                  "Dynamic Pricing",
                  "Guest CRM",
                  "Folio & Billing",
                  "Housekeeping Tasks",
                  "Multi-Property Access",
                  "Live Analytics",
                  "Secure Role Control",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our Hotel Booking Solution?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Hospitality businesses need precision, speed, and guest-first workflows. Our platform combines reservation, room management, billing, and reporting in one ecosystem so your team can focus more on service and less on manual coordination.
              <br />
              <br />
              It helps reduce booking errors, improves operational visibility, and enables better decision-making across every property.
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
            <p className="text-lg font-medium text-black">This solution is ideal for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Hotels and resorts",
                "Boutique properties and guest houses",
                "Serviced apartments",
                "Business and transit hotels",
                "Multi-property hospitality groups",
                "Hostels and lodging chains",
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
              We secure reservation and guest data with role-based controls, encrypted storage, activity logs, and reliable backups to support operational continuity and compliance.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Hospitality-ready UI for front desk teams",
                "Scalable for single to multi-property operations",
                "Bangla and English support available",
                "Seamless integration with POS, Accounts, and ERP workflows",
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
              &quot;After switching to ERP17 Hotel Booking platform, we reduced check-in delays by 35% and improved occupancy planning through real-time room intelligence and centralized reservation control.&quot;
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Modernize Your Property Operations?</h2>
            <p className="text-lg font-medium text-black">Deliver better guest experiences with a booking and operations platform built for hospitality growth.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
