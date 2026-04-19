"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { primaryCtaClassName } from "@/constants/cta";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Erp17Info = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container">
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* ✅ Left Column - Text */}
          <div className="text-center lg:text-left lg:ms-10 space-y-3 order-1">
            <h2 className="text-sm sm:text-base font-bold text-gray-500 uppercase tracking-wide">
              WHAT IS ERP17?
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-10 font-bold text-[#141451] leading-snug">
              ERP17 – Modern HR & Payroll Software for Bangladeshi Businesses
            </p>
            <div className="space-y-3 sm:space-y-4 text-left">
              {[
                "Tired of paying your HR employees yet getting slow results? Rysenova simplifies and automates HR tasks offering the most advanced core HR software solution for businesses in Bangladesh.",
                "Our cloud-based platform provides real-time insights, reduces administrative workload, and ensures compliance with Bangladesh labor laws.",
                "Our cloud-based platform ensures an efficient, compliant, and error-free human resource management system.",
                "Managing HR tasks manually is time-consuming, costly, and prone to errors. Rysenova is here to change that through advanced core HR software solutions.",
                "With Rysenova, you can automate your entire HR process, from payroll and leave management to onboarding and employee performance tracking.",
                "Rysenova is the leading HR and payroll software in Bangladesh offering cloud-based solution for small businesses and enterprises alike, trusted for its payroll automation, attendance tracking, and employee management features.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="flex text-xs sm:text-sm gap-3 text-gray-700 leading-relaxed items-start"
                >
                  <AiOutlineCheckCircle className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                  <span>{text}</span>
                </p>
              ))}
            </div>
            <p className="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 font-semibold">
              Interested? Request a live demo.
            </p>

         <Link
            href="/contact"
            className={`mt-3 sm:mt-4 mx-auto sm:mx-0 ${primaryCtaClassName}`}
          >
            Contact Us
          </Link>

          </div>

          {/* ✅ Right Column - Image (Mobile এ নিচে যাবে) */}
          <div className="flex justify-center lg:justify-end order-2 mt-8 lg:mt-0">
            <Image
              src="/img/home/home-people-web.webp"
              alt="Rysenova Illustration"
              width={500}
              height={500}
              className="rounded-lg object-contain w-[85%] sm:w-[70%] lg:w-[90%] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Erp17Info;
