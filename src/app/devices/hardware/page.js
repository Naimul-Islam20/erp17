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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supported Devices
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
            Works Seamlessly with Top Attendance Machines in Bangladesh
          </h3>
          <p className="text-gray-600 leading-relaxed">
            ERP17 is a leading biometric attendance software in Bangladesh 
            that works out of the box with the most popular fingerprint and 
            face recognition attendance devices. Whether your team uses ZKTeco 
            terminals or hybrid setups, our platform supports both real-time 
            syncing over IP and offline Biotime database integration. 
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            With ERP17, you no longer need manual CSV exports or third-party 
            syncing software. Every device log is automatically pushed into our 
            cloud system, enabling accurate shift tracking, late mark detection, 
            and automated payroll calculations.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/img/devices/D1.webp"
            alt="Attendance Device"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      <DevicesPage/>
    </section>
  );
}
