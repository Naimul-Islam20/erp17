"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const sections = [
  {
    heading: "Employee Leave App’s Benefits",
    subText: "It manages your employee absences and leaves with cloud-based HRM Software. This absence & leave management software has features like Employee Leave Applications, Leave Calendar, Leave Reliever, and more.",
    list: [
      "It helps employees to work from anywhere.",
      "ERP17 Leave Management Software has replaced traditional hard copy applications.",
      "Staff can easily submit their leave application through mobile app or web.",
      "This Employee Leave App will send the leave application to the layerwise approver.",
      "Leave requests can be accepted or rejected quickly."
    ],
    img: "/img/products/employee/EL2.svg",
    imgRight: false,
  },
  {
    heading: "Leave Reliever",
    subText: "All Hours is a cloud-based leave management system that enables you to efficiently manage, approve, and track leave requests and absences from any device.",
    list: [
      "If an employee goes on leave, they can assign someone to complete their tasks.",
      "When an employee applies for leave and selects a leave reliever, the reliever will get an email notification."
    ],
    img: "/img/products/employee/EL3.webp",
    imgRight: true,
  },
  {
    heading: "Leave Status",
    subText: "Our ERP17 dashboard allows you to view the status of leaves allotted to each employee.",
    list: [
      "Admins can look up each employee’s leave status, counts, replacements, and more data.",
      "Office staff can also check their leave status through ERP17 app or web portal."
    ],
    img: "/img/products/employee/el4.svg",
    imgRight: false,
  },
  {
    heading: "Multiple Leaves Approver",
    subText: "ERP17 provides a feature for multiple layers of leave approval.",
    list: [
      "Admins can set the parameters for leave approvers.",
      "Multiple layers can be added for approving leave requests.",
      "Approvers are informed and can approve or reject accordingly."
    ],
    img: "/img/products/employee/EL5.webp",
    imgRight: true,
  },
  {
    heading: "Leave Calendar",
    subText: "Staff can use the app or web portal to view how much leave they have scheduled or already taken during the year.",
    list: [
      "Leave calendar is available in mobile app and web.",
      "Through the leave calendar, anyone from any department can see the leave applications of a team.",
      "Anyone can apply for leaves after knowing others’ leave status."
    ],
    img: "/img/products/employee/EL6.webp",
    imgRight: false,
  }
];

const EmployeeLeavePage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden pt-8 md:pt-0 pb-10 md:pb-20">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#f97316 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#f97316 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_leaves)" />
            <defs>
              <linearGradient id="paint0_linear_leaves" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" />
                <stop offset="1" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
                Leave Management System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[var(--secondary)] leading-[1.1] tracking-tight">
                Seamless <br />
                <span className="text-[var(--secondary)]">
                  Leave Tracking
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Manage employee absences and leaves with ease. Our cloud-based solution features layer-wise approval, leave relievers, and a shared team calendar.
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
                  src="/img/products/employee/EL1.webp"
                  alt="Employee Leave Management Illustration"
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
      <section className="py-6 md:py-20 bg-white">
        <div className="container space-y-10 md:space-y-32">
          {sections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
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
                      <div className="bg-orange-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-orange-600 w-5 h-5 md:w-6 md:h-6" />
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

export default EmployeeLeavePage;
