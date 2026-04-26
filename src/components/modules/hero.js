"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-0 md:pt-12 pb-8 md:pb-28 flex items-center">
      
      {/* Background Decorative Elements */}
      {/* 1. Slanted Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--primary-soft)]/70 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
      
      {/* 2. Dot Pattern */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(var(--primary) 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
      <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(var(--primary) 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      
      {/* 3. Floating Orb/Circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-3xl"></div>

      {/* 4. Abstract SVG Shape */}
      <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_home)" />
          <defs>
            <linearGradient id="paint0_linear_home" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--primary)" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full relative z-10">
        {/* Mobile full-width image (outside container constraints) */}
        <div className="md:hidden w-full mb-4">
          <Image
            src="/img/one-touch-community.jpeg"
            alt="HR Software Illustration"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-16">
          
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 flex-1 space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[var(--primary)] text-xs md:text-sm font-bold uppercase tracking-wider border border-[var(--primary-soft)]">
                ERP17 · Cloud Solution
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight">
              <span className="text-[var(--secondary)]">Smarter Business.</span>{" "}
              <span className="text-[var(--primary)]">Hassle-Free Life.</span>
            </h1>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed w-full max-w-full lg:max-w-3xl mx-auto lg:mx-0 text-justify">
              Empower your enterprise with intelligent automation that drives growth while eliminating operational stress. ERP17 Cloud Solution streamlines your entire workflow, allowing you to focus on the big picture without the daily headaches. Experience the perfect harmony of professional excellence and a truly hassle-free life.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link href="/contact" className={primaryCtaClassName}>
                Get Started
              </Link>
              <Link
                href="/devices"
                className="inline-flex items-center justify-center rounded-full border border-[var(--secondary)] px-6 py-3 text-sm font-semibold text-[var(--secondary)] transition hover:bg-[var(--primary-soft)]"
              >
                Devices
              </Link>
            </div>

           
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex-1 w-full relative hidden md:block">
            <div className="relative z-10">
              <Image
                src="/img/one-touch-community.jpeg"
                alt="HR Software Illustration"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
