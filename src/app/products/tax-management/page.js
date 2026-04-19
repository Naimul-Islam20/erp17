"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section Content Array
const taxSections = [
  {
    heading: "Tax Calculation",
    subText: "ERP17 will help you to calculate income taxes.",
    list: [
      "ERP17 is included with online tax preparation, processing, submission according to the Bangladesh Govt. policy.",
      "It is a system-guided, easy-to-use tax preparation software that will save you time, money, and reduce any potential audits by the government.",
      "Through ERP17 you can generate your salary easily with tax.",
      "Using income tax calculation software ensures you only pay the necessary taxes.",
      "The salary income tax calculation software calculates the different deductions allowed under the Income Tax Act and provides employees with the net salary after tax deduction.",
    ],
    img: "/img/products/tax/TM2.png",
    imgRight: false,
  },
  {
    heading: "Salary Calculation",
    subText:
      "ERP17 Software will help you to calculate net income after deducting taxes and other costs.",
    list: [
      "The salary income tax calculation system will help calculate the taxes based on the salary income.",
      "Deduct employee EPF, labor welfare funds, and others from their gross salary.",
      "Calculate net salary income after considering applicable taxes and other deductions.",
      "The salary tax calculation system is a valuable tax calculator software for HR who want to know how much they will pay for salary.",
    ],
    img: "/img/products/tax/TM3.png",
    imgRight: true,
  },
  {
    heading: "Tax Factors",
    subText: "ERP17 can help you automate tax collecting data.",
    list: [
      "Tax factors depend on basic, house rent, medical allowance, and conveyance.",
      "After inputting these options, the admin has to create the slab.",
      "Then the tax will be calculated automatically.",
      "An admin can edit or delete according to their company’s policy.",
    ],
    img: "/img/products/tax/TM4.png",
    imgRight: false,
  },
  {
    heading: "Tax Rules",
    subText: "With the help of ERP17 Software you can add the financial rules.",
    list: [
      "Tax rules are important for tax calculation.",
      "In ERP17 Software, an admin or a finance person can add the tax rules.",
      "Admin or finance person has to select the tax calculation methods to generate the tax rules.",
      "Deduction from salary varies from person to person depending on their investment in EPF, labor welfare fund, and other such schemes.",
    ],
    img: "/img/products/tax/TM5.png",
    imgRight: true,
  },
];

const TaxManagementPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden bg-rose-50 pt-10 md:pt-14 pb-10 md:pb-16">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#e11d48 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#e11d48 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-red-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_tax)" />
            <defs>
              <linearGradient id="paint0_linear_tax" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e11d48" />
                <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                Tax Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Effortless <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500">
                  Tax Management
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Simplify income tax calculations according to government policy. ERP17 automates tax rule setup, salary deductions, and investment tracking for complete peace of mind.
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
                  src="/img/products/tax/TM1.png"
                  alt="Tax Management Illustration"
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
      <section className="py-20 bg-white">
        <div className="container space-y-24 md:space-y-32">
          {taxSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Text Content */}
              <div className={`flex-1 space-y-6 text-center md:text-left order-2 ${sec.imgRight ? "md:order-1" : "md:order-2"}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {sec.heading}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {sec.subText}
                </p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-rose-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-rose-600 w-5 h-5 md:w-6 md:h-6" />
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

export default TaxManagementPage;
