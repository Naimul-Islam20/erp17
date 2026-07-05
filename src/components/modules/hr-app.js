"use client";

import Image from "next/image";
import {
  BarChart3,
  Bell,
  CalendarDays,
  CheckSquare,
  ClipboardList,
  CreditCard,
  Landmark,
  MapPin,
  Megaphone,
  MessageSquare,
  Package,
  Shield,
  Smartphone,
  Truck,
  Wallet,
  Wifi,
} from "lucide-react";

function FeatureIcon({ icon: Icon }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)]/60 text-[var(--primary)]">
      <Icon className="h-4 w-4" />
    </div>
  );
}

const appModules = [
  {
    title: "1. Employee Self-Service (ESS) App",
    description:
      "Designed specifically for general employees, this app is essential for today's hybrid work culture.",
    points: [
      {
        icon: MapPin,
        text: "Attendance: Clock-in and clock-out using Geo-location (GPS) or Facial Recognition.",
      },
      {
        icon: CalendarDays,
        text: "Leave Management: Apply for leave directly through the app and view real-time leave balances.",
      },
      {
        icon: Wallet,
        text: "Payroll: View monthly payment status and download digital salary slips instantly.",
      },
      {
        icon: ClipboardList,
        text: "Task Tracking: Receive daily assignments and provide real-time updates on ongoing projects.",
      },
    ],
  },
  {
    title: "2. Admin & Management Dashboard App",
    description:
      "An indispensable tool for business owners and CEOs to monitor operations from anywhere in the world.",
    points: [
      {
        icon: BarChart3,
        text: "Real-time Analytics: Access visual graphs of total sales, revenue, and profit margins.",
      },
      {
        icon: Package,
        text: "Inventory Alerts: Monitor stock levels and receive instant notifications for low-stock items.",
      },
      {
        icon: CheckSquare,
        text: "Approval System: One-click approval for pending vouchers, leave requests, or purchase orders.",
      },
      {
        icon: Landmark,
        text: "Accounting Summary: Monitor cash flow and track all banking transactions in real-time.",
      },
    ],
  },
  {
    title: "3. Customer & Client Portal App",
    description:
      "Ideal for businesses requiring direct connectivity with their customers (e.g., E-commerce or Service industries).",
    points: [
      {
        icon: Truck,
        text: "Order Tracking: Customers can track the latest status of their orders and deliveries.",
      },
      {
        icon: MessageSquare,
        text: "Support Tickets: Open complaints or service requests directly through the app.",
      },
      {
        icon: CreditCard,
        text: "Payment Gateway: View invoices and make secure online payments within the app.",
      },
      {
        icon: Megaphone,
        text: "Promotions & Offers: Send targeted push notifications for new product launches or seasonal discounts.",
      },
    ],
  },
];

const uspPoints = [
  {
    icon: Bell,
    text: "Push Notifications: Ensure that urgent updates, task reminders, or official notices reach the user's phone instantly.",
  },
  {
    icon: Wifi,
    text: "Offline Support: Allows users to access basic data and perform certain actions even without internet connectivity; data syncs automatically once back online.",
  },
  {
    icon: Shield,
    text: "Biometric Security: Integrated Fingerprint or Face ID locking mechanisms to ensure the highest level of security for sensitive corporate data.",
  },
];

function ModuleCard({ module }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-base font-bold leading-snug text-[var(--secondary)] md:text-lg">
        {module.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
        {module.description}
      </p>
      <ul className="mt-5 space-y-3 border-t border-slate-100 pt-4">
        {module.points.map((point) => (
          <li key={point.text} className="flex gap-3">
            <FeatureIcon icon={point.icon} />
            <span className="pt-1.5 text-sm leading-relaxed text-slate-700 md:text-base">
              {point.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

const HrApp = () => {
  const primaryModules = appModules.slice(0, 2);
  const thirdModule = appModules[2];

  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-12">
      <div className="container">
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--primary-soft)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            <Smartphone className="h-3.5 w-3.5" />
            Mobile Apps
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--secondary)] sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Mobile App Modules for ERP17 Cloud Solution
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-5 lg:col-span-7">
            {primaryModules.map((module) => (
              <ModuleCard key={module.title} module={module} />
            ))}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <h3 className="text-base font-bold text-[var(--secondary)] md:text-lg">
                Our Unique Selling Points (USPs)
              </h3>
              <ul className="mt-4 space-y-4">
                {uspPoints.map(({ icon, text }) => (
                  <li key={text} className="flex gap-3">
                    <FeatureIcon icon={icon} />
                    <p className="pt-1.5 text-sm leading-relaxed text-slate-700 md:text-base">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5 lg:col-span-5 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow md:rounded-3xl">
                <Image
                  src="/img/home/intgMobile.webp"
                  alt="ERP17 Mobile App Illustration"
                  width={600}
                  height={600}
                  className="h-auto w-full rounded-xl object-contain md:rounded-2xl"
                />
            </div>

            {thirdModule ? <ModuleCard module={thirdModule} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrApp;
