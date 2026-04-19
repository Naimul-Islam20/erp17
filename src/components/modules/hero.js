"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-sky-50 pt-8 md:pt-12 pb-16 md:pb-28 flex items-center">
      
      {/* Background Decorative Elements */}
      {/* 1. Slanted Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
      
      {/* 2. Dot Pattern */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
      <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      
      {/* 3. Floating Orb/Circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

      {/* 4. Abstract SVG Shape */}
      <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_home)" />
          <defs>
            <linearGradient id="paint0_linear_home" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Column - Text */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
          

            <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              ERP17 Cloud Solution <br />
              <span className=" text-blue-500">
                Smarter Business. Hassle-Free Life.
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Empower your enterprise with intelligent automation that drives growth while eliminating operational stress. ERP17 Cloud Solution streamlines your entire workflow, allowing you to focus on the big picture without the daily headaches. Experience the perfect harmony of professional excellence and a truly hassle-free life.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button className="px-8 py-4 bg-sky-500 text-white font-bold rounded-2xl hover:bg-sky-600 shadow-xl shadow-sky-200 transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                Get Started
              </button>
              <button className="px-8 py-4 bg-white text-sky-500 font-bold rounded-2xl border-2 border-sky-100 hover:bg-sky-50 transition-all text-sm md:text-base">
                Watch Demo
              </button>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-2">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-sky-200 overflow-hidden shadow-sm">
                      <div className="w-full h-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-[10px] text-white font-bold">HR</div>
                   </div>
                 ))}
               </div>
               <p className="text-gray-500 text-sm font-medium">Joined by <span className="text-sky-600 font-bold">500+</span> companies nationwide</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full relative">
            <div className="relative z-10">
              <Image
                src="/img/home/hero-image-1.png"
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
    </section>
  );
};

export default HeroSection;
