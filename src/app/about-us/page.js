"use client";

import Link from "next/link";
import {
  Target,
  Rocket,
  Shield,
  Users,
  Database,
  Cpu,
  TrendingUp,
  Zap,
  Award,
  Calendar,
  Building2,
  Lightbulb,
  Globe2,
} from "lucide-react";
import { primaryCtaClassName } from "@/constants/cta";

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* --- STANDARD HERO SECTION --- */}
      <section className="relative overflow-hidden bg-sky-50 pt-8 md:pt-12 pb-16 md:pb-28 flex items-center">
        {/* Background Decorative Elements (Standard Site Style) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        <div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block"
          style={{
            backgroundImage:
              "radial-gradient(#0ea5e9 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(#0ea5e9 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            {/* Left Column - Text */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs md:text-sm font-bold uppercase tracking-wider border border-sky-200/60">
                  EMP17 · About Us
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Our Story: Smarter Business. <br /> Hassle-Free Life.
                </span>
              </h1>

              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Founded with a mission to solve complex business challenges,
                ERP17 is the result of years of industry experience and a
                passion for empowering founders through intelligent automation.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link href="/contact" className={primaryCtaClassName}>
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 w-full relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                  alt="Professional Office"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE BEGINNING & VISION --- */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-sky-600 uppercase tracking-[0.2em] mb-4">
                  The Beginning
                </h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                  9+ Years of Software Excellence
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The journey of <strong>Muktodhara Technology Ltd.</strong>{" "}
                  began in 2017. With over 9 years of experience in the software
                  development industry, we have dedicated ourselves to solving
                  complex business challenges through innovative technology.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-sky-500" />
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Lightbulb className="text-sky-500 w-6 h-6" /> Our Vision
                </h4>
                <p className="text-xl italic text-slate-700 leading-relaxed">
                  "To ensure Founder's Freedom through the right use of
                  technology, so businesses grow through smart automation and
                  founders enjoy a simple, worry-free life."
                </p>
              </div>
            </div>

            <div className="relative h-full flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-sky-600 text-white rounded-3xl shadow-xl shadow-sky-200">
                  <Calendar className="w-10 h-10 mb-4 opacity-80" />
                  <p className="text-4xl font-black mb-2">2017</p>
                  <p className="font-semibold text-sky-100">Year Founded</p>
                </div>
                <div className="p-8 bg-slate-900 text-white rounded-3xl mt-8">
                  <Award className="w-10 h-10 mb-4 text-sky-400" />
                  <p className="text-4xl font-black mb-2">9+</p>
                  <p className="font-semibold text-slate-300">
                    Years Experience
                  </p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl">
                  <Building2 className="w-10 h-10 mb-4 text-sky-600" />
                  <p className="text-2xl font-black text-slate-900 mb-1">
                    BASIS
                  </p>
                  <p className="text-slate-500 text-sm font-medium">
                    Member Council
                  </p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl mt-4">
                  <Globe2 className="w-10 h-10 mb-4 text-blue-600" />
                  <p className="text-2xl font-black text-slate-900 mb-1">
                    CCCI
                  </p>
                  <p className="text-slate-500 text-sm font-medium">
                    Chittagong Chamber
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PAIN POINTS --- */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">
              The Real Struggles
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              The Challenges We Observed
            </h3>
            <p className="text-lg text-slate-600">
              Throughout our journey, we realized that traditional, fragmented
              software often fails to provide a comprehensive solution for a
              growing enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Fragmentation",
                icon: <Database className="w-8 h-8" />,
                desc: "Managing multiple software for different departments, making it impossible to see a unified business summary on a single dashboard.",
              },
              {
                title: "Operational Inefficiency",
                icon: <Cpu className="w-8 h-8" />,
                desc: "High dependency on manual work despite having software, leading to redundancy.",
              },
              {
                title: "Rising Costs",
                icon: <TrendingUp className="w-8 h-8" />,
                desc: "Skyrocketing customization and development costs when trying to integrate different systems.",
              },
              {
                title: "Stagnant Growth",
                icon: <Zap className="w-8 h-8" />,
                desc: "Lack of full automation, which keeps founders occupied with daily chores rather than strategic scaling.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200"
              >
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BIRTH OF ERP17 - REDESIGNED MILESTONE --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Side: Product Visual Mockup */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 w-full overflow-hidden rounded-[2rem] shadow-2xl border border-slate-100">
                <img
                  src="/img/about/dashboard-mockup.png"
                  alt="ERP17 Dashboard Mockup"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative accents behind image */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-[80px] -z-10" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-[100px] -z-10 opacity-60" />
            </div>

            {/* Right Side: Content */}
            <div className="lg:w-1/2 space-y-8 text-slate-800">
              <div className="space-y-4">
                <span className="inline-block py-1.5 px-4 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest">
                  A Major Milestone
                </span>
                <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  The Birth of <br />
                  <span className="text-sky-600">ERP17 Cloud </span> <br />{" "}
                  Solution
                </h3>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-900">
                  Driven by the mission to eliminate real-world struggles, we
                  decided to build a platform that brings every aspect of a
                  business under one powerful dashboard.
                </p>
                <p>
                  In 2023, our expert team commenced this ambitious project.
                  After rigorous development and testing, we successfully
                  launched <strong>ERP17 Cloud Solution</strong> - not just a
                  software, but a complete business ecosystem for small, medium,
                  and large enterprises.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <div className="h-0.5 w-12 bg-sky-500" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  A Complete Ecosystem
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">
              Why ERP17?
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Our Core Pillars
            </h3>
            <p className="text-lg text-slate-600">
              We believe a founder's true role is to grow the business, not just
              run it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "One-Stop Solution",
                icon: <Globe2 />,
                desc: "From Accounts and Inventory to HRM and eCommerce - everything is integrated under one roof.",
              },
              {
                title: "Freedom to Scale",
                icon: <Rocket />,
                desc: "Our system is designed to grow as your business grows, providing the flexibility you need for expansion.",
              },
              {
                title: "Local Empathy",
                icon: <Users />,
                desc: "Built with a deep understanding of local market, ensuring compliance with local Tax/VAT and local payment gateway integration.",
              },
              {
                title: "Hassle-Free Experience",
                icon: <Shield />,
                desc: "We simplify complexity so you can reclaim your peace of mind.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-white border border-slate-200 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS & CTA COMBINED (NO BOX) --- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Achievements & Social Proof */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-4">
                  Our Achievements
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  Trusted by Reputed <br /> Organizations
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Today, numerous reputed organizations rely on ERP17 Cloud
                  Solution to lead a hassle-free business. As a proud member of{" "}
                  <strong>BASIS</strong> and the <strong>CCCI</strong>, we're
                  committed to maintaining the highest standards of transparency
                  and quality in the IT sector.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 h-32 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center justify-center shadow-sm">
                  <span className="font-black text-slate-800 text-2xl tracking-tighter">
                    BASIS
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Member
                  </span>
                </div>
                <div className="flex-1 h-32 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col items-center justify-center shadow-sm">
                  <span className="font-black text-slate-800 text-2xl tracking-tighter">
                    CCCI
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Member
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: CTA */}
            <div className="p-10 md:p-14 bg-sky-50 rounded-[40px] border border-sky-100 flex flex-col justify-center text-center lg:text-left relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Let's Build a Smarter <br /> Future Together
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Transform your operations with one connected platform and give
                  your team the freedom to focus.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className={primaryCtaClassName}>
                    Get Started Now
                  </Link>
                </div>
              </div>

              {/* Subtle background element for the right side only */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/20 rounded-full blur-3xl text-slate-800" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
