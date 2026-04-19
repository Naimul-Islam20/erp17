// app/devices/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

const allDevices = [
  {
    id: 1,
    name: "ZKTeco SpeedFace-V5L",
    img: "/img/devices/D2.webp",
    brand: "ZKTeco",
    type: "Face",
    details: [
      "Face Capacity: Supports up to 6,000 face templates (standard)",
      "Fingerprint Capacity: Comes with 6,000 standard, expandable to 10,000",
      "Card Capacity: Can store up to 10,000 card templates",
      "Palm Capacity (optional): Around 3,000 palm templates",
      "Transaction Storage: 200,000 transaction logs",
    ],
  },
  {
    id: 2,
    name: "ZKTeco F18",
    img: "/img/devices/D3.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: 3,000 templates",
      "Card Capacity: 5,000 (optional)",
      "Transaction Capacity: 30,000–100,000 logs",
      "Connectivity: TCP/IP, RS-485, Wiegand, USB-host",
    ],
  },
  {
    id: 3,
    name: "ZKTeco K40",
    img: "/img/devices/D4.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: ~1,000 templates",
      "Transaction Capacity: ~80,000 logs",
      "Connectivity: LAN, USB",
    ],
  },
  {
    id: 4,
    name: "ZKTeco K50-A",
    img: "/img/devices/D5.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: ~2,000 templates",
      "Card Capacity: ~2,000 cards",
      "Connectivity: LAN, USB",
    ],
  },
  {
    id: 5,
    name: "ZKTeco K90",
    img: "/img/devices/D6.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: 1,000 / 2,000 optional",
      "Card Capacity: ~800–3,000",
      "Transaction Capacity: 50,000–100,000 logs",
      "Connectivity: LAN (TCP/IP), USB-host",
    ],
  },
  {
    id: 6,
    name: "ZKTeco F22",
    img: "/img/devices/D7.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: ~3,000 templates",
      "Card Capacity: ~5,000 cards",
      "Transaction Capacity: ~30,000 logs",
      "Connectivity: Wi-Fi, LAN",
    ],
  },
  {
    id: 7,
    name: "ZKTeco MB460",
    img: "/img/devices/D8.webp",
    brand: "ZKTeco",
    type: "Face",
    details: [
      "Face Capacity: ~1,500 templates",
      "Fingerprint Capacity: ~2,000 templates",
      "Card Capacity: ~5,000 cards",
      "Transaction Capacity: ~100,000 logs",
      "Connectivity: Wi-Fi, LAN",
    ],
  },
  {
    id: 8,
    name: "ZKTeco K50",
    img: "/img/devices/D9.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: ~1,000 templates",
      "Card Capacity: ~1,000 cards",
      "Transaction Capacity: ~80,000 logs",
      "Connectivity: LAN, USB",
      "Display: 2.8-inch TFT screen",
    ],
  },
  {
    id: 9,
    name: "ZKTeco K60",
    img: "/img/devices/D10.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: ~3,000 templates",
      "Card Capacity: ~3,000 cards",
      "Transaction Capacity: ~100,000 logs",
      "Connectivity: LAN, USB (No Wi-Fi)",
      "Battery Backup: Built-in backup battery",
      "Display: 2.8″ TFT color screen",
    ],
  },
  {
    id: 10,
    name: "ZKTeco iClock9000-G",
    img: "/img/devices/D11.webp",
    brand: "ZKTeco",
    type: "Fingerprint",
    details: [
      "Fingerprint Capacity: ~3,000 (upgradeable to 6,000)",
      "Card Capacity: ~3,000 (upgradeable to 6,000)",
      "Transaction Capacity: 200,000 logs",
      "Connectivity: LAN, USB-Host; optional GPRS, Wi-Fi, 3G",
      "Display: 2.8″ TFT screen",
      "Battery Backup: 2,600 mAh built-in battery",
    ],
  },
  {
    id: 11,
    name: "ZKTeco MB20-VL",
    img: "/img/devices/D12.webp",
    brand: "ZKTeco",
    type: "Face",
    details: [
      "Face Capacity: ~800 templates",
      "Fingerprint Capacity: ~800 templates",
      "Card Capacity: ~800 cards",
      "Transaction Capacity: ~150,000 logs",
      "Connectivity: TCP/IP, USB-Host, Wi-Fi (optional)",
      "Display: 2.8″ TFT color screen",
      "Optional Backup Battery: 5 V, ~1,900 mAh",
    ],
  },
  {
    id: 12,
    name: "ZKTeco uFace800",
    img: "/img/devices/D13.webp",
    brand: "ZKTeco",
    type: "Face",
    details: [
      "Face Capacity: ~3,000 templates",
      "Fingerprint Capacity: ~4,000 templates",
      "Card Capacity: ~10,000 cards (optional)",
      "Transaction Capacity: ~100,000 logs",
      "Connectivity: TCP/IP, USB-Host, Wi-Fi (optional)",
      "Display: 4.3″ touch-screen TFT",
      "Battery Backup: Optional 2,000 mAh (~4 hours operation)",
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
              ERP17 currently supports the following ZKTeco devices, widely
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
              <option>ZKTeco</option>
              <option>OtherBrand</option>
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="text-sm border border-gray-300 rounded-lg p-2"
            >
              <option>All Types</option>
              <option>Face</option>
              <option>Fingerprint</option>
              <option>Card</option>
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
