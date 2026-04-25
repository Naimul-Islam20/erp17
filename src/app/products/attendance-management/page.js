"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content arrays
const section1 = {
  heading: "Employee Time & Attendance Tracking with ERP17",
  list: [
    "Employees can easily mark their attendance using the ERP17 Mobile App or the web portal.",
    "With geo-fencing enabled, attendance is validated only within the assigned location radius, ensuring compliance with company policies.",
  ],
  img: "/img/products/AM2.svg",
  imgRight: false,
};

const section2 = {
  heading: "Remote Attendance Tracking with ERP17",
  list: [
    "Employees can mark their attendance from anywhere using the ERP17 Mobile App or web portal.",
    "Supervisors, Admins, and HR teams can easily access real-time location data to monitor attendance efficiently and ensure compliance.",
  ],
  img: "/img/products/AM3.svg",
  imgRight: true,
};

const section3 = {
  heading: "Overtime Calculation & Management with ERP17",
  list: [
    "Fully Automated System: ERP17 allows companies to calculate and manage overtime automatically.",
    "Quick Processing: Overtime can be processed within seconds, saving time and effort.",
    "Track Employee Hours: HRs and Admins can easily monitor total working hours for accurate payroll and compliance.",
  ],
  img: "/img/products/AM4.svg",
  imgRight: false,
};

const section4 = {
  heading: "Employee Attendance Reporting with ERP17",
  list: [
    "Flexible Reports: Generate attendance reports daily, weekly, or monthly as per requirement.",
    "Instant Access: Reports can be quickly accessed anytime by the appropriate authority.",
    "Detailed Analysis: Create extra time reports, overtime reports, and attendance analysis effortlessly.",
  ],
  img: "/img/products/AM5.svg",
  imgRight: true,
};

// Array of all sections
const sections = [section1, section2, section3, section4];

const Page = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden pt-10 md:pt-14 pb-10 md:pb-24">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary-soft)]/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(var(--primary) 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(var(--primary) 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary-soft)]/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[var(--primary-soft)]/30 rounded-full blur-3xl"></div>
        
        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_attendance)" />
            <defs>
              <linearGradient id="paint0_linear_attendance" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-ping"></span>
                Time & Attendance System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--secondary)] leading-[1.1] tracking-tight">
                Smart <br />
                <span className="text-[var(--secondary)]">
                  Attendance Tracking
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Manage employee attendance with the best Cloud-Based Management Software in Bangladesh. Real-time monitoring, geo-fencing, and biometric integration for your workforce.
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
                  src="/img/products/AM1.svg"
                  alt="Attendance Software Illustration"
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
          {sections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Text Content */}
              <div className={`flex-1 space-y-6 text-center md:text-left order-2 ${sec.imgRight ? "md:order-1" : "md:order-2"}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] leading-tight">
                  {sec.heading}
                </h2>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-[var(--primary-soft)] p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-[var(--primary)] w-5 h-5 md:w-6 md:h-6" />
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

export default Page;
