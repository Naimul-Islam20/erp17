"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";
import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

const gamezoneSections = [
  {
    heading: "Quests & challenges",
    subText:
      "Turn everyday work into clear missions—onboarding tasks, compliance modules, or sales sprints—with XP when people finish on time.",
    list: [
      "Attach quests to ERP17 workflows so progress updates automatically.",
      "Time-bound challenges for teams with optional leaderboards.",
      "HR sets rules; employees see a simple game-style checklist.",
    ],
    img: "/img/products/gamezone/quests.svg",
    imgRight: false,
  },
  {
    heading: "Leaderboards & recognition",
    subText:
      "Healthy competition: show top contributors by points, streaks, or completed quests—without exposing sensitive payroll data.",
    list: [
      "Filter by department, site, or role for fair comparisons.",
      "Seasonal resets so new joiners can climb the board too.",
      "Export snapshots for town-hall slides or newsletters.",
    ],
    img: "/img/products/gamezone/rewards.svg",
    imgRight: true,
  },
  {
    heading: "Rewards & redemption",
    subText:
      "Let people spend earned points on perks your company approves—time off, vouchers, or branded swag—tracked in one ledger.",
    list: [
      "Approval queue for redemptions above a threshold.",
      "Budget caps per team or quarter to keep spend predictable.",
      "Audit trail: who earned, who spent, when it was approved.",
    ],
    img: "/img/products/gamezone/quests.svg",
    imgRight: false,
  },
];

const GamezonePage = () => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-violet-950 pt-10 md:pt-14 pb-10 md:pb-20 text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/40 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        <div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block"
          style={{
            backgroundImage: "radial-gradient(#c4b5fd 1.5px, transparent 1.5px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl" />

        <div className="absolute top-0 right-0 p-8 opacity-20 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z"
              fill="url(#paint0_linear_gz)"
            />
            <defs>
              <linearGradient id="paint0_linear_gz" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a855f7" />
                <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/20 text-violet-200 text-xs md:text-sm font-bold uppercase tracking-wider border border-violet-400/40">
                ERP17 · Gamezone
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                Work that feels <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300">
                  worth playing
                </span>
              </h1>
              <p className="text-violet-100 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                Gamezone layers quests, XP, badges, and rewards on top of ERP17—so culture and completion rates improve without
                extra spreadsheets.
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
              <ProductImage
                src="/img/products/gamezone/hero.svg"
                alt="Gamezone dashboard with quests and leaderboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl ring-2 ring-violet-500/30"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container space-y-24 md:space-y-32">
          {gamezoneSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div
                className={`flex-1 space-y-6 text-center md:text-left order-2 ${
                  sec.imgRight ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{sec.heading}</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{sec.subText}</p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-violet-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-violet-600 w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex-1 w-full order-1 ${sec.imgRight ? "md:order-2" : "md:order-1"}`}>
                <ProductImage src={sec.img} alt={sec.heading} width={500} height={400} className="w-full h-auto rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GamezonePage;
