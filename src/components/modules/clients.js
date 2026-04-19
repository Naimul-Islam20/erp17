"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const clients = [
  "/img/home/c1.svg",
  "/img/home/c9.svg",
  "/img/home/c10.svg",
  "/img/home/c2.svg",
  "/img/home/c5.svg",
  "/img/home/c6.svg",
  "/img/home/c7.svg",
  "/img/home/c8.svg",
];

export default function ClientsMarquee() {
  const repeatedClients = [...clients, ...clients]; // continuous marquee

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.333%, 0, 0); }
          }
          .marquee-viewport {
            width: 100%;
            overflow: hidden;
            background: white;
            position: relative;
          }
          .marquee-container {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }
          .marquee-item {
            flex: 0 0 auto;
            width: 140px;
            height: 60px;
            margin-right: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border: 1px solid #f1f5f9;
            border-radius: 0.75rem;
            padding: 0.75rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          .marquee-viewport:hover .marquee-container {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="w-full bg-white py-10 md:py-16">
        {/* Title — hidden per request
        <div className="container text-center mb-10 md:mb-12">
          <h2 className="text-sm md:text-md lg:text-xl text-[#2f2f57]">
            Companies Using
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-[#141451] mt-3 md:mt-4 font-bold leading-snug">
            Modern HR & Payroll Software in Bangladesh
          </p>
        </div>
        */}

        {/* Clients Marquee */}
        <div className="marquee-viewport py-6 md:py-8">
          <div className="marquee-container">
            {/* Displaying images 3 times to ensure zero gaps during transition */}
            {[...clients, ...clients, ...clients].map((imgSrc, i) => (
              <div key={i} className="marquee-item">
                <Image
                  src={imgSrc}
                  alt={`Client ${i + 1}`}
                  width={110}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons always side by side */}
        <div className="container flex justify-center items-center flex-wrap gap-4 sm:gap-8 md:gap-12 mt-12 md:mt-16">
          {/* Get Started */}
          <Link
            href="/get-started"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold 
            py-3 px-5 sm:py-4 sm:px-7 rounded-full transition text-sm sm:text-base whitespace-nowrap"
          >
            Get Started
            <FaArrowRight size={16} className="sm:size-5" />
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center border border-sky-500 gap-2 hover:bg-gray-100 text-sky-500 font-semibold 
            py-3 px-5 sm:py-4 sm:px-7 rounded-full transition text-sm sm:text-base whitespace-nowrap"
          >
            Contact
            <FaArrowRight size={16} className="sm:size-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
