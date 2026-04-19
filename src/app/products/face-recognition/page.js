// app/face-recognition/page.jsx
"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

// Section Content Array
const faceSections = [
  {
    heading: "Automate Attendance System Using Face Recognition",
    subText:
      "Our face recognition system is integrated into a simple mobile app, making attendance automation easy and accurate.",
    list: [
      "Quickly register faces with a selfie from the app.",
      "Real-time sync with internet connection for updated attendance data.",
      "Clean and user-friendly interface for both employees and admins.",
    ],
    img: "/img/products/face/face2.png",
    imgRight: false,
  },
  {
    heading: "Real-Time Attendance & Location Tracking",
    subText:
      "Track employee attendance in real-time and monitor location with GPS integration.",
    list: [
      "Instantly check who is present or absent.",
      "Captures exact check-in/check-out time for precise records.",
      "GPS ensures employees mark attendance from the correct location.",
    ],
    img: "/img/products/face/face3.png",
    imgRight: true,
  },
  {
    heading: "Ensure Access Security",
    subText:
      "Prevent fake attendance entries and improve security with advanced recognition checks.",
    list: [
      "Eye-blink detection ensures only live persons can check in.",
      "Blocks photo or video-based fraudulent attendance.",
      "Admins can securely verify and approve rostering.",
    ],
    img: "/img/products/face/face4.png",
    imgRight: false,
  },
  {
    heading: "Remote Attendance & Reports",
    subText:
      "Employees can mark attendance remotely and admins can generate detailed reports anytime.",
    list: [
      "Supports remote attendance for distributed teams.",
      "Reports show attendance trends, absenteeism, and punctuality.",
      "Seamlessly integrates with existing HR systems and scales easily.",
    ],
    img: "/img/products/face/face5.png",
    imgRight: true,
  },
];

const FaceRecognitionPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden bg-indigo-50 pt-10 md:pt-8 pb-10 md:pb-20">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#4f46e5 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#4f46e5 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_face)" />
            <defs>
              <linearGradient id="paint0_linear_face" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4f46e5" />
                <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
                Face Recognition System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                AI Powered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Facial Recognition
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Collect attendance with facial recognition. Manage employee presence in real-time and ensure access security — all powered by AI-based recognition.
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
                  src="/img/products/face/face1.png"
                  alt="Face Recognition Attendance"
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
          {faceSections.map((sec, idx) => (
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
                      <div className="bg-indigo-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-indigo-600 w-5 h-5 md:w-6 md:h-6" />
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

export default FaceRecognitionPage;
