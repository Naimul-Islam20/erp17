"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const distributionSections = [
  {
    heading: "Stock transfers & dealers",
    subText:
      "Move stock between depots, hubs, and dealer points with delivery notes, pricing tiers, and credit limits enforced in ERP17.",
    list: [
      "Transfer in transit with expected receipt and variance capture.",
      "Primary / secondary pricing for modern trade vs wholesale.",
      "Credit days and outstanding visible before dispatch is approved.",
    ],
    img: "/img/products/distribution/route.svg",
    imgRight: false,
  },
  {
    heading: "Routes, vans & POD",
    subText:
      "Plan beat routes, load vans, and capture proof-of-delivery—signature, photo, or OTP—so disputes drop sharply.",
    list: [
      "Driver mobile view with today’s drops sorted by distance or time slot.",
      "Partial delivery and returnable empties (crates, bottles) tracked.",
      "GPS breadcrumbs optional for high-value loads.",
    ],
    img: "/img/products/distribution/warehouse.svg",
    imgRight: true,
  },
  {
    heading: "Warehouse & compliance",
    subText:
      "GRN against PO, batch and expiry, cycle counts, and quarantine—same item master your POS and eCommerce already use.",
    list: [
      "Batch recall drill-down: which dealer received which lot.",
      "Integration-ready export for auditors or parent company reports.",
      "Low-stock rules per channel so production or import can react early.",
    ],
    img: "/img/products/distribution/route.svg",
    imgRight: false,
  },
];

const DistributionPage = () => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-10 md:pt-14 pb-10 md:pb-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary-soft)]/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        <div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary-soft)]/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[var(--primary-soft)]/30 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z"
              fill="url(#paint0_linear_dist)"
            />
            <defs>
              <linearGradient id="paint0_linear_dist" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-xs md:text-sm font-bold uppercase tracking-wider">
                ERP17 · Distribution
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--secondary)] leading-[1.1] tracking-tight">
                Depot to dealer <br />
                <span className="text-[var(--primary)]">
                  in one supply chain view
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Coordinate warehouses, fleet, and channel stock on ERP17 Cloud—fewer phone calls, fewer stock-outs, and faster
                cash recovery from the field.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className={primaryCtaClassName}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <ProductImage
                src="/img/products/distribution/hero.svg"
                alt="Distribution transfer and dealer overview"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container space-y-24 md:space-y-32">
          {distributionSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div
                className={`flex-1 space-y-6 text-center md:text-left order-2 ${
                  sec.imgRight ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">{sec.heading}</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{sec.subText}</p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-[var(--primary-soft)] p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-[var(--primary)] w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex-1 w-full order-1 ${sec.imgRight ? "md:order-2" : "md:order-1"}`}>
                <ProductImage src={sec.img} alt={sec.heading} width={500} height={400} className="w-full h-auto rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DistributionPage;
