// app/erp17Info.js
"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const HrApp = () => {
  return (
    <section className="relative bg-white py-10 md:py-16">
      <div className="container">

        {/* Flex container for 2 columns */}
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-24">

          {/* Left Column - Image */}
          <div className="order-2 lg:order-2 relative w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] mx-auto lg:mx-0">
            <Image
              src="/img/home/intgMobile.webp"
              alt="ERP17 Mobile App Illustration"
              width={600}
              height={600}
              className="rounded-2xl object-contain"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex-1 space-y-4 md:space-y-5">

            {/* Headline + paragraph */}
            <div className="text-center lg:text-start">
              <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-[var(--secondary)] mt-2 leading-snug">
                ERP17 Mobile App
              </p>
              <p className="text-gray-700 text-base sm:text-lg mt-3">
                ERP17 delivers a cloud-based HR and payroll system designed to simplify HR tasks, cut down paperwork, and empower both employers and employees with smooth digital tools.
              </p>
            </div>

            {/* Features / Tick Points */}
            <div className="space-y-3 md:space-y-4">
              {[ 
                "Manage Workforce On-The-Go – Track attendance, payroll, leave approvals, and employee records in real time, from anywhere.",
                "Cloud-Powered HR & Payroll – Experience seamless, fully cloud-based workforce management at your fingertips.",
                "Tailored for Bangladeshi Businesses – Affordable and intuitive solutions crafted for local companies, small or large."
              ].map((item, index) => (
                <div key={index} className="flex gap-3 bg-white p-3 sm:p-4 rounded-xl border border-gray-300">
                  <AiOutlineCheckCircle  className="text-[var(--primary)] w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 md:mt-8 text-center lg:text-left">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                ERP17 is a comprehensive HR and payroll solution that transforms traditional HR processes into smart, automated workflows — helping businesses save time, reduce errors, and support their teams effectively.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HrApp;
