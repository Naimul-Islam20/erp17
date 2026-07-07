"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  primaryCtaClassName,
  secondaryOutlineCtaClassName,
} from "@/constants/cta";

const highlights = [
  "Built for Bangladesh businesses — VAT & local compliance",
  "Cloud-based — access anywhere, scale anytime",
];

const stats = [
  { value: "1,000+", label: "Businesses served" },
  { value: "9+", label: "Years of experience" },
  { value: "20+", label: "Integrated modules" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-6 pb-10 md:pt-10 md:pb-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--primary-soft) 0%, transparent 42%), radial-gradient(circle at 80% 0%, rgba(59,161,0,0.08) 0%, transparent 35%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 space-y-4 text-center md:space-y-5 lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm">
                ERP17 Cloud Solution
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--secondary)] sm:text-5xl md:text-6xl">
              Simplify Operations.
              <span className="mt-1 block text-[var(--primary)]">
                Accelerate Growth.
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 md:text-lg lg:mx-0">
              Empower your enterprise with intelligent automation that drives
              growth while eliminating operational stress. One cloud platform
              for finance, people, inventory, and sales.
            </p>

            <ul className="mx-auto max-w-xl space-y-2 text-left lg:mx-0">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700 md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/get-quote" className={primaryCtaClassName}>
                Get a Quote
              </Link>
              <Link
                href="/plans"
                className={`${secondaryOutlineCtaClassName} group`}
              >
                View Plans
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative mx-auto max-w-xl pb-6 lg:max-w-none lg:pb-8">
              <div className="absolute -inset-4 hidden rounded-[2rem] bg-gradient-to-br from-[var(--primary-soft)]/80 to-transparent blur-2xl md:block" />
              <div className="relative overflow-hidden rounded-xl md:rounded-3xl md:border md:border-slate-200/80 md:bg-white md:p-3 md:shadow-xl md:shadow-slate-200/60">
                <Image
                  src="/img/one-touch-community.jpeg"
                  alt="ERP17 business management dashboard"
                  width={700}
                  height={500}
                  className="h-auto w-full rounded-xl object-cover md:rounded-2xl"
                  priority
                />
              </div>

              <div className="absolute -bottom-2 left-3 right-3 grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:left-5 sm:right-5 sm:gap-3 sm:p-4 md:-bottom-3 md:left-6 md:right-6 md:gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-base font-bold text-[var(--secondary)] sm:text-xl md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-xs md:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
