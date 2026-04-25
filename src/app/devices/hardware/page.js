// app/hardware/page.jsx
"use client";

import React from "react";
import Image from "next/image";
import DevicesPage from "./devices";

export default function HardwarePage() {
  return (
    <section className="bg-white py-16">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
            Seamless Attendance Management with Tipsai & ERP17
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Elevate your workplace efficiency with Tipsai fingerprint devices,
            the premium hardware partner perfectly integrated with ERP17 Cloud
            Solution. Featuring a sleek, modern design and high-performance
            sensors, Tipsai ensures rapid and accurate attendance tracking. Its
            seamless real-time data synchronization with our software completely
            automates your HR and Payroll processes, eliminating manual errors
            and saving valuable time. Experience the perfect synergy of style
              and technology, designed to deliver on our promise of a <span className="font-bold text-[var(--secondary)]">&quot;Smarter
              Business, Hassle-Free Life.&quot;</span>
          </p>
         
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/img/devices/D1.webp"
            alt="Attendance Device"
            width={500}
            height={400}
            className="rounded-xl "
          />
        </div>
      </div>
      <DevicesPage />
    </section>
  );
}
