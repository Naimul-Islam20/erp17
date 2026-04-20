// app/devices/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

const allDevices = [
  {
    id: 1,
    name: "Tipsoi TC-03 (Exit Reader)",
    img: "/img/devices/D2.webp",
    brand: "Tipsoi",
    type: "Exit Reader",
    details: [
      "Series: Tipsoi",
      "Model: TC-03",
      "MRP: 3,000",
      "Reseller Price: 2,000",
    ],
  },
  {
    id: 2,
    name: "Tipsoi TC-10 (RFID Card Reader)",
    img: "/img/devices/D3.webp",
    brand: "Tipsoi",
    type: "RFID Card Reader",
    details: [
      "Series: Tipsoi",
      "Model: TC-10",
      "MRP: 12,000",
      "Reseller Price: 8,000",
    ],
  },
  {
    id: 3,
    name: "Tipsoi TF-80",
    img: "/img/devices/D4.webp",
    brand: "Tipsoi",
    type: "Fingerprint Reader",
    details: [
      "Series: Tipsoi",
      "Model: TF-80",
      "MRP: 25,000",
      "Reseller Price: 13,500",
    ],
  },
  {
    id: 4,
    name: "Tipsoi Fastface 5 Lite",
    img: "/img/devices/D5.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-505",
      "MRP: 32,000",
      "Reseller Price: 24,000",
    ],
  },
  {
    id: 5,
    name: "Tipsoi Fastface 5",
    img: "/img/devices/D6.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-510",
      "MRP: 40,000",
      "Reseller Price: 33,000",
    ],
  },
  {
    id: 6,
    name: "Tipsoi Fastface 5 Pro",
    img: "/img/devices/D7.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-530",
      "MRP: 45,000",
      "Reseller Price: 36,500",
    ],
  },
  {
    id: 7,
    name: "Tipsoi Fastface 5 Pro FP",
    img: "/img/devices/D8.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-550",
      "MRP: 52,000",
      "Reseller Price: 42,000",
    ],
  },
  {
    id: 8,
    name: "Tipsoi Fastface 7",
    img: "/img/devices/D9.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-710",
      "MRP: 75,000",
      "Reseller Price: 50,000",
    ],
  },
  {
    id: 9,
    name: "Tipsoi Fastface 7 Lite",
    img: "/img/devices/D10.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-705",
      "MRP: 55,000",
      "Reseller Price: 40,000",
    ],
  },
  {
    id: 10,
    name: "Tipsoi Fastface 8",
    img: "/img/devices/D11.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-830",
      "MRP: 100,000",
      "Reseller Price: 61,000",
    ],
  },
  {
    id: 11,
    name: "Tipsoi Fastface 8 Lite",
    img: "/img/devices/D12.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-805",
      "MRP: 65,000",
      "Reseller Price: 50,000",
    ],
  },
  {
    id: 12,
    name: "Tipsoi Fastface Go Lite",
    img: "/img/devices/D13.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-505P",
      "MRP: 42,000",
      "Reseller Price: 34,500",
    ],
  },
  {
    id: 13,
    name: "Tipsoi Fastface Go",
    img: "/img/devices/D8.webp",
    brand: "Tipsoi",
    type: "Face",
    details: [
      "Series: Fast Face",
      "Model: D-510P",
      "MRP: 50,000",
      "Reseller Price: 44,500",
    ],
  },
  {
    id: 14,
    name: "Tipsoi Prompt P40",
    img: "/img/devices/D3.webp",
    brand: "Tipsoi",
    type: "Prompt",
    details: [
      "Series: Prompt",
      "Model: P-40",
      "MRP: 12,000",
      "Reseller Price: 10,000",
    ],
  },
  {
    id: 15,
    name: "Tipsoi Prompt P310",
    img: "/img/devices/D4.webp",
    brand: "Tipsoi",
    type: "Prompt",
    details: [
      "Series: Prompt",
      "Model: P-310",
      "MRP: 26,000",
      "Reseller Price: 20,500",
    ],
  },
  {
    id: 16,
    name: "Tipsoi Prompt P205",
    img: "/img/devices/D5.webp",
    brand: "Tipsoi",
    type: "Prompt",
    details: [
      "Series: Prompt",
      "Model: P-205",
      "MRP: 16,000",
      "Reseller Price: 13,500",
    ],
  },
];
export default function DevicesPage() {
  const [brand, setBrand] = useState("All Brands");
  const [type, setType] = useState("All Types");

  const filteredDevices = allDevices.filter((device) => {
    const brandMatch = brand === "All Brands" || device.brand === brand;
    const typeMatch = type === "All Types" || device.type === type;
    return brandMatch && typeMatch;
  });

  return (
    <section className="bg-white py-16">
      <div className="  container">
        {/* Header with Left & Right */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Supported Devices
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              ERP17 currently supports the following Tipsoi devices, widely
              used across factories, offices, retail stores, and educational
              institutions in Bangladesh. These models are fully compatible with:
            </p>
          </div>

          {/* Right Side - Filters */}
          <div className="flex gap-4">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="text-sm border border-gray-300 rounded-lg p-2"
            >
              <option>All Brands</option>
              <option>Tipsoi</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="text-sm border border-gray-300 rounded-lg p-2"
            >
              <option>All Types</option>
              <option>Exit Reader</option>
              <option>RFID Card Reader</option>
              <option>Fingerprint Reader</option>
              <option>Face</option>
              <option>Prompt</option>
            </select>
          </div>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredDevices.map((device) => (
            <div
              key={device.id}
              className="border border-gray-300 rounded-xl shadow-sm  transition flex flex-col p-6"
            >
            {/* Image */}
{/* Image */}
<div className="flex justify-center mb-6">
  <Image
    src={device.img}
    alt={device.name}
    width={250}
    height={200}
    className="rounded-lg w-full max-w-[250px] max-h-[200px] object-contain"
  />
</div>



              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {device.name}
              </h3>

              {/* Details */}
              <ul className="text-gray-700 text-base space-y-3 mb-6 flex-1">
                {device.details.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AiOutlineCheckCircle className="text-sky-500 text-lg w-6 h-6 mt-0.5" />
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>

             {/* Button fixed bottom */}
<a
  href="https://wa.me/8801XXXXXXXXX?"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto text-start w-full text-sky-600 font-medium"
>
  Contact Us — To Buy!
</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
