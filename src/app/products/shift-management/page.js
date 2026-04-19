"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const shiftSections = [
  {
    heading: "Shift Set up",
    subText: "Provide scheduled shifts for employees.",
    list: [
      "Admins can build employee schedules in a minute.",
      "Multiple shifts can be set.",
      "Shift management can reduce absenteeism, late arrivals, etc.",
      "Admins can easily maintain company’s shifts through ERP17 Software.",
    ],
    img: "/img/products/shift/SM2.png",
    imgRight: false,
  },
  {
    heading: "Roster Eligible Employee",
    subText: "Choose and manage employees for rostering.",
    list: [
      "Admins can easily choose an employee for rostering.",
      "Admins search the name, select the employee, then grant rostering rights.",
    ],
    img: "/img/products/shift/SM3.png",
    imgRight: true,
  },
  {
    heading: "Roster Set Up",
    subText: "Control roster setup in the office.",
    list: [
      "After shift setup and choosing employees for roster duty, admin assigns the roster duty.",
      "Admin assigns employees according to the shift duties.",
      "Admin clicks on the employees and then selects the roster date and timetable.",
      "Admin can also drag and drop employees in the roster table.",
    ],
    img: "/img/products/shift/SM4.png",
    imgRight: false,
  },
  {
    heading: "Shift Management Report",
    subText: "Control roster setup in the office with detailed reports.",
    list: [
      "Various reports are available in ERP17 Software.",
      "Attendance reports can be generated monthly, weekly, or daily at any time.",
      "Extra time reports, overtime reports, and attendance analysis reports can also be generated.",
    ],
    img: "/img/products/shift/SM5.png",
    imgRight: true,
  },
];

const ShiftManagementPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden bg-rose-50 pt-10 md:pt-6 pb-10 md:pb-16">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#e11d48 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#e11d48 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_shift)" />
            <defs>
              <linearGradient id="paint0_linear_shift" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
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
                Shift Management System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Optimize Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">
                  Employee Scheduling
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                The ultimate solution for roster setup, shift duties, and attendance management. Streamline your company&apos;s workforce scheduling with ease using ERP17.
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
                  src="/img/products/shift/SM1.png"
                  alt="Shift Management Illustration"
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
          {shiftSections.map((sec, idx) => (
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

export default ShiftManagementPage;
