"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const hrmSections = [
  {
    heading: "Basic Employee Info",
    subText: "A soft copy of your certificates and other professional documents can be plugged into the ERP17 software's employee information list.",
    list: [
      "Every employee’s details must be recorded by the company in the HRM module.",
      "In ERP17 Software, using HRM you can store all the information like Contact, email address, phone number, Blood group, Joining date, etc.",
      "For employee accounts, email id and password are mandatory."
    ],
    img: "/img/products/employee-manege/EM2.png",
    imgRight: false
  },
  {
    heading: "Attached Document",
    subText: "The ability to add any kind of soft copy to an employee's listed information is available in the software program.",
    list: [
      "Employees documents are very important to be stored in HRM.",
      "Within the software, any kind of soft copy like CV, Educational Certificates, etc. can be attached to the employee’s information list.",
      "Admin/HR can archive the documents according to their work process."
    ],
    img: "/img/products/employee-manege/EM3.png",
    imgRight: true
  },
  {
    heading: "Employment History",
    subText: "The admin can input the figure of the previous company's name, employment duration, and income records in this section.",
    list: [
      "Employment history is needed to be stored for a company.",
      "Who came from which company needed to be tracked.",
      "Admin can input the previous company’s name, work duration, previous salary at this section."
    ],
    img: "/img/products/employee-manege/EM4.png",
    imgRight: false
  },
  {
    heading: "Supervisor Selection",
    subText: "Human Resources managers and supervisors can be selected in this spot.",
    list: [
      "Supervisors need to be selected for the applications which are made by the employees.",
      "Supervisors, direct supervisors can be selected at this section."
    ],
    img: "/img/products/employee-manege/EM5.jpg",
    imgRight: true
  },
  {
    heading: "Report Template",
    subText: "ERP17 has various sorts of report templates that you can use in your work.",
    list: [
      "Any kind of documents like NOC, experience certificate etc can be generated through ERP17 Software.",
      "Just provide the valid information and the template will be generated accordingly."
    ],
    img: "/img/products/employee-manege/EM6.jpg",
    imgRight: false
  },
  {
    heading: "Employee Hierarchy",
    subText: "An annual survey of employees' status will be presented in this report. The transfer, promotion, or designation of employees can be made visible in this summary.",
    list: [
      "In this report you can easily get the overall status of an employee.",
      "An employees transfer, promotion, designation status will be shown in the report."
    ],
    img: "/img/products/employee-manege/em7.png",
    imgRight: true
  }
];

const HrmPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden pt-10 md:pt-20 pb-10 md:pb-24">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary-soft)]/70 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: "radial-gradient(var(--primary) 1.5px, transparent 1.5px)", backgroundSize: "15px 15px" }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: "radial-gradient(var(--primary) 2px, transparent 2px)", backgroundSize: "20px 20px" }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--primary-soft)]/60 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-[var(--primary-soft)]/40 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_employee)" />
            <defs>
              <linearGradient id="paint0_linear_employee" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
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
                ERP17 · HRM
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[var(--secondary)] leading-[1.12] tracking-tight">
                People, records, and HR workflows{" "}
                <span className="text-[var(--primary)]">
                  in one intelligent workspace
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Centralize profiles, documents, history, hierarchy, and reports so HR spends less time on admin and more on strategy—backed by ERP17 Cloud.
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
                  src="/img/products/employee-manege/EM1.svg"
                  alt="HRM software"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Content */}
      <section className="py-20 bg-white">
        <div className="container space-y-24 md:space-y-32">
          {hrmSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
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

export default HrmPage;
