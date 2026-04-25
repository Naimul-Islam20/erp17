import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Gamezone Management Software | ERP17",
  description:
    "Gamified engagement and operations platform with quests, leaderboards, rewards, attendance challenges, and performance analytics for modern teams.",
};

const features = [
  {
    id: "1. Quest & Challenge Builder",
    desc: "Create engaging tasks, missions, and achievement-based workflows for employees, teams, or customers. Build one-time or recurring challenges with deadlines and scoring rules.",
    benefits: ["Custom mission templates", "Recurring challenge automation", "Goal-based progress tracking"],
  },
  {
    id: "2. Points, XP & Reward Engine",
    desc: "Assign points and experience (XP) for completed tasks, attendance consistency, sales milestones, and training completion. Configure reward tiers and redemption policies.",
    benefits: ["Motivation through gamification", "Flexible reward policies", "Auto point assignment logic"],
  },
  {
    id: "3. Leaderboards & Rankings",
    desc: "Boost performance with real-time leaderboards by team, department, branch, or campaign. Encourage healthy competition while maintaining transparency.",
    benefits: ["Real-time rank updates", "Department-wise competition", "Seasonal leaderboard reset"],
  },
  {
    id: "4. Badge & Achievement System",
    desc: "Issue digital badges for milestones like punctuality, top sales, process compliance, and customer service excellence.",
    benefits: ["Recognition culture", "Milestone-based achievements", "Shareable internal profiles"],
  },
  {
    id: "5. Performance-linked Gamification",
    desc: "Connect game mechanics with KPIs such as attendance, sales, lead conversion, or support resolution. Turn routine work into measurable engagement.",
    benefits: ["KPI-driven engagement", "Higher task completion rates", "Improved accountability"],
  },
  {
    id: "6. Event & Tournament Management",
    desc: "Run short-term campaigns, tournaments, and seasonal events with defined scorecards, time windows, and reward pools.",
    benefits: ["Campaign-based participation", "Auto winner declaration", "Event analytics and reporting"],
  },
  {
    id: "7. Team Collaboration Challenges",
    desc: "Launch group missions that require collaboration instead of individual competition. Perfect for cross-functional teamwork and culture building.",
    benefits: ["Improved team collaboration", "Shared goals and outcomes", "Cross-team engagement"],
  },
  {
    id: "8. Notifications & Engagement Triggers",
    desc: "Send automated push/email/SMS notifications for challenge launches, score updates, reward unlocks, and rank changes.",
    benefits: ["Timely engagement prompts", "Higher participation rate", "Smart trigger-based communication"],
  },
  {
    id: "9. Insights, Reports & Behavior Analytics",
    desc: "Track participation, completion ratios, high performers, inactive users, and reward utilization. Use dashboards to continuously optimize engagement strategy.",
    benefits: ["Participation heatmaps", "Actionable behavior analytics", "Exportable engagement reports"],
  },
  {
    id: "10. Secure Role-based Admin Controls",
    desc: "Control who can create campaigns, approve rewards, view reports, and manage configurations through role-based permissions and audit logs.",
    benefits: ["Secure governance model", "Controlled admin access", "Audit-ready activity history"],
  },
];

export default function GamezoneDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Gamezone Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">Gamezone Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              Gamified engagement and operations platform with quests, leaderboards, rewards, attendance challenges, and performance analytics for modern teams.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/gamezone/hero.svg" alt="Gamezone Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Make Work More Engaging and Measurable</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                ERP17 Gamezone platform transforms routine activities into goal-driven, reward-based experiences. From HR engagement to sales motivation, you can build a culture where performance is visible, participation is exciting, and outcomes are measurable. Whether your focus is productivity, teamwork, or retention, Gamezone helps you drive behavior change at scale with real-time gamification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Quest Builder",
                  "XP & Rewards",
                  "Live Leaderboards",
                  "Badge System",
                  "KPI Gamification",
                  "Tournaments",
                  "Team Challenges",
                  "Smart Notifications",
                  "Engagement Analytics",
                  "Secure Admin Control",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-base font-bold text-black uppercase tracking-tight">
                    <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Gamezone?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Teams perform better when goals are visible, progress is rewarded, and achievements are recognized. Gamezone helps organizations improve consistency, accountability, and morale by combining game mechanics with real business workflows.
              <br />
              <br />
              Instead of chasing reminders manually, you can automate motivation through points, badges, and leaderboard-driven engagement.
            </p>
          </section>

          <section className="space-y-8 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] inline-block">Core Modules & Features</h2>

            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[var(--secondary)]">{feature.id}</h3>
                  <p className="text-lg text-black leading-relaxed text-justify">{feature.desc}</p>
                  <p className="font-black uppercase text-[10px] tracking-widest mt-2 opacity-60">Key Benefits:</p>
                  <ul className="space-y-1 pt-0.5">
                    {feature.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-black font-bold text-base">
                        <FaCheck className="text-[var(--primary)] text-[10px] mt-1 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Best Fit For</h2>
            <p className="text-lg font-medium text-black">This solution is ideal for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Sales and marketing teams",
                "HR and people operations",
                "Call centers and support desks",
                "Retail and multi-branch operations",
                "Training and onboarding programs",
                "Corporate culture and engagement initiatives",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Security & Data Integrity</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Gamezone uses secure access controls, role-based permissions, and complete action logs to ensure your engagement data remains trustworthy and protected.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Fast setup with customizable rules",
                "Scalable for startups to enterprise teams",
                "Seamless integration with ERP, HRM, and CRM",
                "Bangla and English interface support",
                "Dedicated implementation and support team",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Success Snapshot</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              &quot;After deploying Gamezone, our monthly task completion rate increased by 38% and internal participation in training programs more than doubled. Team motivation is now visible and measurable in real time.&quot;
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Gamify Your Team Performance?</h2>
            <p className="text-lg font-medium text-black">Turn goals into engaging challenges and build a high-performance culture with Gamezone.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
