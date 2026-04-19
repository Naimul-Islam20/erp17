"use client";

import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section content array
const securitySections = [
  {
    heading: "Device Change Request",
    subText: "Change requests need to be accepted before an employee can log in to his mobile application with the credentials.",
    list: [
      "1 mobile app for an individual user.",
      "When an employee login to his/her mobile app with the credentials, they will not be able to change the employee account until the device change request is accepted.",
      "Only an admin can accept or reject the request."
    ],
    img: "/img/products/security/S2.svg",
    imgRight: false
  },
  {
    heading: "User Setup",
    subText: "Create and configure your new employee profile with the ERP17 Software program easily.",
    list: [
      "Make a user category.",
      "Assign employees according to the category.",
      "Admin can easily edit, delete and reset passwords.",
      "Admin can set the screen permissions."
    ],
    img: "/img/products/security/S3.svg",
    imgRight: true
  },
  {
    heading: "User Setup",
    subText: "Create and configure your new employee profile with the ERP17 Software program easily.",
    list: [
      "Make a user category.",
      "Assign employees according to the category.",
      "Admin can easily edit, delete and reset passwords.",
      "Admin can set the screen permissions."
    ],
    img: "/img/products/security/S4.svg",
    imgRight: false
  },
  {
    heading: "HTTPS",
    subText: "We use high security for safeguarding our visitors' data.",
    list: [
      "We are maintaining SSL/TLS (https) for any data transfer and it is DV (Domain validation) certificate which will be reissued every 90 days.",
      "The HTTPS request is already verified by hosting and certificates."
    ],
    img: "/img/products/security/S5.svg",
    imgRight: true
  },
  {
    heading: "SQL Injection",
    subText: "We're using a standard algorithm and parameterized SQL operations to shield our ERP17 software from numerous kinds of malicious attacks.",
    list: [
      "This is one of the most common hacking techniques which might destroy our database.",
      "We are maintaining a standard coding structure and parameterized SQL operations to protect our ERP17 Software from any kind of malicious attack or hacking technique like SQL Injection."
    ],
    img: "/img/products/security/S6.svg",
    imgRight: false
  },
  {
    heading: "Data Encryption",
    subText: "Information from ERP17 Software is kept confidential.",
    list: [
      "Data is securely protected in our ERP17 Software.",
      "We consider our own developed encryption/decryption technique for password mechanism."
    ],
    img: "/img/products/security/S7.svg",
    imgRight: true
  }
];

const SecurityPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 md:pt-24 pb-10 md:pb-24">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-200/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#475569 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#475569 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-slate-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_security)" />
            <defs>
              <linearGradient id="paint0_linear_security" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#475569" />
                <stop offset="1" stopColor="#475569" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-slate-600 animate-ping"></span>
                Secure HRIS Solution
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Data Safety & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">
                  Total Privacy
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Keep your company data safe and confidential. ERP17 employs advanced encryption, SQL injection protection, and secure device management for your peace of mind.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button className="px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-900 shadow-xl shadow-slate-200 transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                  Contact Us
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border-2 border-slate-200 hover:bg-slate-50 transition-all text-sm md:text-base">
                  View Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative z-10">
                <ProductImage 
                  src="/img/products/security/S1.png"
                  alt="Security Software Illustration"
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
          {securitySections.map((sec, idx) => (
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
                      <div className="bg-slate-100 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-slate-600 w-5 h-5 md:w-6 md:h-6" />
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

export default SecurityPage;
