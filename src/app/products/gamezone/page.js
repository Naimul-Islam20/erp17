import { Gamepad2 } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

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
    <ProductDetailsLayout
      breadcrumb="Gamezone Management Software"
      title="Gamezone Management Software"
      heroDescription="Gamified engagement and operations platform with quests, leaderboards, rewards, attendance challenges, and performance analytics for modern teams."
      introIcon={Gamepad2}
      introImage="/img/products/gamezone-hero.jpg"
      introImageAlt="Make Work More Engaging and Measurable"
      introTitle="Make Work More Engaging and Measurable"
      introText="ERP17 Gamezone platform transforms routine activities into goal-driven, reward-based experiences. From HR engagement to sales motivation, you can build a culture where performance is visible, participation is exciting, and outcomes are measurable. Whether your focus is productivity, teamwork, or retention, Gamezone helps you drive behavior change at scale with real-time gamification."
      highlights={["Quest Builder","XP & Rewards","Live Leaderboards","Badge System","KPI Gamification","Tournaments","Team Challenges","Smart Notifications","Engagement Analytics","Secure Admin Control"]}
      whyChoose={{
        title: "Why Choose Gamezone?",
        paragraphs: ["Teams perform better when goals are visible, progress is rewarded, and achievements are recognized. Gamezone helps organizations improve consistency, accountability, and morale by combining game mechanics with real business workflows.\n              \n\n              \n\n              Instead of chasing reminders manually, you can automate motivation through points, badges, and leaderboard-driven engagement."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: [],
      }}
      trust={{
        title: "Why ERP17?",
        items: ["Fast setup with customizable rules","Scalable for startups to enterprise teams","Seamless integration with ERP, HRM, and CRM","Bangla and English interface support","Dedicated implementation and support team"],
      }}
      security={{
        title: "Security & Data Integrity",
        text: "Gamezone uses secure access controls, role-based permissions, and complete action logs to ensure your engagement data remains trustworthy and protected.",
      }}
      extraSections={[]}
    />
  );
}
