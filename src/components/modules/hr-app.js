// app/erp17Info.js
"use client";

import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const appModules = [
  {
    title: "1. Employee Self-Service (ESS) App",
    description:
      "Designed specifically for general employees, this app is essential for today’s hybrid work culture.",
    points: [
      "Attendance: Clock-in and clock-out using Geo-location (GPS) or Facial Recognition.",
      "Leave Management: Apply for leave directly through the app and view real-time leave balances.",
      "Payroll: View monthly payment status and download digital salary slips instantly.",
      "Task Tracking: Receive daily assignments and provide real-time updates on ongoing projects.",
    ],
  },
  {
    title: "2. Admin & Management Dashboard App",
    description:
      "An indispensable tool for business owners and CEOs to monitor operations from anywhere in the world.",
    points: [
      "Real-time Analytics: Access visual graphs of total sales, revenue, and profit margins.",
      "Inventory Alerts: Monitor stock levels and receive instant notifications for low-stock items.",
      "Approval System: One-click approval for pending vouchers, leave requests, or purchase orders.",
      "Accounting Summary: Monitor cash flow and track all banking transactions in real-time.",
    ],
  },
  {
    title: "3. Customer & Client Portal App",
    description:
      "Ideal for businesses requiring direct connectivity with their customers (e.g., E-commerce or Service industries).",
    points: [
      "Order Tracking: Customers can track the latest status of their orders and deliveries.",
      "Support Tickets: Open complaints or service requests directly through the app.",
      "Payment Gateway: View invoices and make secure online payments within the app.",
      "Promotions & Offers: Send targeted push notifications for new product launches or seasonal discounts.",
    ],
  },
];

const uspPoints = [
  "Push Notifications: Ensure that urgent updates, task reminders, or official notices reach the user's phone instantly.",
  "Offline Support: Allows users to access basic data and perform certain actions even without internet connectivity; data syncs automatically once back online.",
  "Biometric Security: Integrated Fingerprint or Face ID locking mechanisms to ensure the highest level of security for sensitive corporate data.",
];

const HrApp = () => {
  const primaryModules = appModules.slice(0, 2);
  const thirdModule = appModules[2];

  return (
    <section className="relative bg-white py-4 sm:py-6 md:py-16">
      <div className="container">

        {/* Flex container for 2 columns */}
        <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4 md:gap-12 lg:gap-24">

          {/* Left Column - Text */}
          <div className="flex-1 space-y-4 md:space-y-5">

            {/* Headline + paragraph */}
            <div className="text-center lg:text-start">
              <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-[var(--secondary)] mt-2 leading-snug">
                Mobile App Modules for ERP17 Cloud Solution
              </p>
            </div>

            {/* Features / Tick Points */}
            <div className="space-y-3 md:space-y-4">
              {primaryModules.map((module) => (
                <div key={module.title} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-300">
                  <h3 className="text-[var(--secondary)] font-bold text-base sm:text-lg">{module.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base mt-2">{module.description}</p>
                  <div className="space-y-2 mt-3">
                    {module.points.map((item) => (
                      <div key={item} className="flex gap-2.5">
                        <AiOutlineCheckCircle className="text-[var(--primary)] w-5 h-5 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-300">
              <h3 className="text-[var(--secondary)] font-bold text-base sm:text-lg">Our Unique Selling Points (USPs)</h3>
              <div className="space-y-2 mt-3">
                {uspPoints.map((item) => (
                  <div key={item} className="flex gap-2.5">
                    <AiOutlineCheckCircle className="text-[var(--primary)] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Image + Module 3 */}
          <div className="order-2 lg:order-2 w-full lg:max-w-[500px] mx-auto lg:mx-0 space-y-4">
            <Image
              src="/img/home/intgMobile.webp"
              alt="ERP17 Mobile App Illustration"
              width={600}
              height={600}
              className="w-full rounded-2xl object-contain"
            />

            {thirdModule ? (
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-300">
                <h3 className="text-[var(--secondary)] font-bold text-base sm:text-lg">{thirdModule.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mt-2">{thirdModule.description}</p>
                <div className="space-y-2 mt-3">
                  {thirdModule.points.map((item) => (
                    <div key={item} className="flex gap-2.5">
                      <AiOutlineCheckCircle className="text-[var(--primary)] w-5 h-5 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HrApp;
