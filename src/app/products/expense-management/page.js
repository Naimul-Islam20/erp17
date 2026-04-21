"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Expense Sections
const expenseSections = [
  {
    heading: "Claim",
    subText:
      "ERP17 Expense offers handy features to capture and record every penny your business spends. Prevent an unseen expense from reoccurring.",
    list: [
      "Employees can easily claim for their expenses through ERP17.",
      "They can easily submit their expenses through app or the web.",
      "An admin can also store the office expenses through claim by using ERP17 Software.",
      "Employees can upload any kind of documents of their expenses."
    ],
    img: "/img/products/expense/EM2.png",
    imgRight: false
  },
  {
    heading: "Claim Category",
    subText:
      "Make claim from selected categories. ERP17 Expense offers handy features to capture and record every penny your business spends. Prevent an unseen expense from reoccurring.",
    list: [
      "An admin can make any kind of categories for claim.",
      "After the category is set up, then any employees can apply for the claim."
    ],
    img: "/img/products/expense/EM3.png",
    imgRight: true
  },
  {
    heading: "Claim Report",
    subText:
      "When your employees are traveling all around the city/ country, ERP17 Expense Management will allow you to keep track of expenses right from your mobile device or from the web to ensure error-free calculations.",
    list: [
      "After submitting the claim, an admin can generate a report according to the needs.",
      "Admin has to select the date range, status and categories to generate a report."
    ],
    img: "/img/products/expense/EM4.png",
    imgRight: false
  }
];

const ExpenseManagementPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden pt-8 md:pt-8 pb-10 md:pb-20">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#10b981 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_expense)" />
            <defs>
              <linearGradient id="paint0_linear_expense" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10b981" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                Expense Management System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--secondary)] leading-[1.1] tracking-tight">
                Master Your <br />
                <span className="text-[var(--primary)]">
                  Business Expenses
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Capture every penny with ERP17 Expense. Streamline claims, manage categories, and generate error-free reports right from your mobile device or the web.
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
                  src="/img/products/expense/EM1.png"
                  alt="Expense Management Illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections Content */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container space-y-10 md:space-y-32">
          {expenseSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              {/* Text Content */}
              <div className={`flex-1 space-y-6 text-center md:text-left order-2 ${sec.imgRight ? "md:order-1" : "md:order-2"}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
                  {sec.heading}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {sec.subText}
                </p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-emerald-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-emerald-600 w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`flex-1 w-full order-1 ${sec.imgRight ? "md:order-2" : "md:order-1"}`}>
                <div className="w-full">
                  <ProductImage
                    src={sec.img}
                    alt={sec.heading}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
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

export default ExpenseManagementPage;
