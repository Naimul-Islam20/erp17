"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const sections = [
  {
    heading: "General ledger & journals",
    subText:
      "Post double-entry journals with clear audit trails; period close checks help finance teams stay compliant without losing speed.",
    list: [
      "Chart of accounts you can extend by branch, cost center, or project.",
      "Recurring journals and templates for month-end accruals.",
      "Role-based approval before sensitive postings go live.",
    ],
    img: "/img/products/accounts/ledger.svg",
    imgRight: false,
  },
  {
    heading: "Bank & cash visibility",
    subText:
      "Import statements, match payments to invoices, and spot unreconciled lines early—so your cash position is always trustworthy.",
    list: [
      "Multi-bank and multi-currency support with clear FX handling.",
      "Suggested matches reduce manual ticking on long statements.",
      "Exception lists for finance to review in one queue.",
    ],
    img: "/img/products/accounts/reports.svg",
    imgRight: true,
  },
  {
    heading: "Reporting that leadership reads",
    subText:
      "Trial balance, P&amp;L, balance sheet, and cash flow views roll up from the same ledger ERP17 already uses for operations.",
    list: [
      "Drill from summary lines to underlying vouchers when questions arise.",
      "Export-friendly layouts for auditors and banks.",
      "Optional dashboards for budget vs actual by department.",
    ],
    img: "/img/products/accounts/ledger.svg",
    imgRight: false,
  },
];

const AccountsPage = () => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-sky-50 pt-10 md:pt-14 pb-10 md:pb-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        <div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(#0ea5e9 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z"
              fill="url(#paint0_linear_accounts)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_accounts"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0ea5e9" />
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                ERP17 · Accounts
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Books that stay <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600">
                  accurate in the cloud
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                ERP17 Accounts connects your ledger to sales, purchasing, and payroll—so finance closes faster with fewer
                spreadsheets and a single source of truth.
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
                  src="/img/products/accounts/hero.svg"
                  alt="Accounts and ledger illustration"
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{sec.heading}</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{sec.subText}</p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-sky-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-sky-600 w-5 h-5 md:w-6 md:h-6" />
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

export default AccountsPage;
