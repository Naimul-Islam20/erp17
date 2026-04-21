"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const sections = [
  {
    heading: "Quotes to invoices",
    subText:
      "Send branded quotes, convert winners to invoices in a click, and keep line items, taxes, and discounts consistent end to end.",
    list: [
      "Version history when customers negotiate scope or price.",
      "Deposit and milestone billing patterns without retyping lines.",
      "PDF and email delivery from the same document record.",
    ],
    img: "/img/products/invoicing/quotes.svg",
    imgRight: false,
  },
  {
    heading: "Taxes & compliance-ready detail",
    subText:
      "Configure VAT or other regimes per jurisdiction; ERP17 Invoicing keeps tax bases clear for filing and audits.",
    list: [
      "Per-line tax codes with totals rolled up on the invoice face.",
      "Credit notes and partial reversals tied to the original bill.",
      "Customer statements that show open, overdue, and paid balances.",
    ],
    img: "/img/products/invoicing/payments.svg",
    imgRight: true,
  },
  {
    heading: "Payments & reminders",
    subText:
      "Record bank transfers, cards, or cash against invoices and nudge customers automatically when due dates pass.",
    list: [
      "Payment links or references where your gateway supports them.",
      "Aging buckets your collections team can work from daily.",
      "Sync with Accounts so cash application stays in one system.",
    ],
    img: "/img/products/invoicing/quotes.svg",
    imgRight: false,
  },
];

const InvoicingPage = () => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-10 md:pt-14 pb-10 md:pb-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary-soft)]/70 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        <div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary-soft)]/60 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[var(--primary-soft)]/40 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z"
              fill="url(#paint0_linear_invoicing)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_invoicing"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                ERP17 · Invoicing
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--secondary)] leading-[1.1] tracking-tight">
                Bill faster, <br />
                <span className="text-[var(--primary)]">
                  collect with confidence
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Professional invoices, clear taxes, and payment tracking on ERP17 Cloud—aligned with inventory and accounts
                so revenue recognition stays clean.
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
              <div className="relative z-10">
                <ProductImage
                  src="/img/products/invoicing/hero.svg"
                  alt="Invoicing and billing illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container space-y-24 md:space-y-32">
          {sections.map((sec, idx) => (
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
                <div className="w-full">
                  <ProductImage
                    src={sec.img}
                    alt={sec.heading}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default InvoicingPage;
