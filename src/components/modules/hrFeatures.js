// app/hrFeatures.js
"use client";

import React from "react";
import * as FaIcons from "react-icons/fa";

const features = [
  {
    icon: "FaMapMarkerAlt",
    name: "Mobile Attendance Tracking with GPS",
    desc: "The ERP17 app simplifies attendance management with accurate, real-time tools.",
    points: [
      "GPS-based location tracking and biometric selfie attendance",
      "Cloud-synced data visible instantly on your dashboard",
      "Supports remote workforces, field staff, and hybrid models",
    ],
  },
  {
    icon: "FaMapMarkedAlt",
    name: "Geo-Fencing for Attendance",
    desc: "Control where your team can clock in.",
    points: [
      "Restrict attendance to office or job sites",
      "Prevent false or remote check-ins",
      "Boost accountability in your HR system",
    ],
  },
  {
    icon: "FaLocationArrow",
    name: "Live Location Tracking",
    desc: "Track employee location live during working hours.",
    points: [
      "Manage mobile and field staff easily",
      "Increase transparency and operational control",
      "Reduce location-related attendance fraud",
    ],
  },
  {
    icon: "FaRegCalendarCheck",
    name: "Instant Leave Requests & Approvals",
    desc: "Digital leave management at your fingertips.",
    points: [
      "Submit and approve leave anytime, anywhere",
      "Live leave balance tracking for employees",
      "HR stays informed through real-time updates",
    ],
  },
  {
    icon: "FaBusinessTime",
    name: "Shift & Schedule Management",
    desc: "Efficient scheduling is critical for workforce performance.",
    points: [
      "Create and assign employee shifts",
      "Notify staff of changes instantly",
      "Maintain consistent workforce coverage",
    ],
  },
  {
    icon: "FaWallet",
    name: "Payslip & Payroll Access",
    desc: "Ensure payroll transparency with mobile access to payslips and salary breakdowns.",
    points: [
      "View and download payslips on-demand",
      "Breakdown includes gross salary, deductions, bonuses",
      "Integrated with your existing payroll process",
    ],
  },
  {
    icon: "FaBell",
    name: "Real-Time HR Notifications",
    desc: "Keep employees informed with push notifications.",
    points: [
      "HR announcements",
      "Policy updates",
      "Attendance, leave, and payroll deadlines",
    ],
  },
  {
    icon: "FaUsers",
    name: "HRM Dashboard",
    desc: "Access and manage employee data in real time.",
    points: [
      "Centralized employee profiles with salary, leave, and attendance history",
      "Lifecycle tracking from onboarding to exit",
      "Admin and managers can update employee info securely",
    ],
  },
  {
    icon: "FaFileInvoiceDollar",
    name: "Auto-Generated Salary Certificate",
    desc: "Generate official salary certificates with one tap.",
    points: [
      "Includes monthly payroll, deductions, and net pay",
      "Ready for bank, visa, and internal use",
      "Signable by HR/Admin for authenticity",
    ],
  },
  {
    icon: "FaCogs",
    name: "Seamless Integration with Web-Based HR Platform",
    desc: "The mobile app connects directly with Rysenova's web dashboard.",
    points: [
      "Real-time sync across devices",
      "Unified experience for HR, admins, and employees",
      "Avoids data duplication and reduces errors",
    ],
  },
  {
    icon: "FaChartBar",
    name: "Reporting & Analytics",
    desc: "Generate real-time HR reports, analyze attendance data, and ensure payroll compliance.",
    points: [
      "Visualize employee attendance, leave balances, and payroll summaries",
      "Make data-driven decisions with built-in HR reporting tools",
      "Streamline audits and forecasting with detailed workforce analytics",
    ],
  },
  {
    icon: "FaShieldAlt",
    name: "Security & Access Control",
    desc: "Protect HR and payroll data with secure access.",
    points: [
      "Assign user permissions to HR, admins, and managers",
      "Prevent unauthorized access to sensitive employee information",
      "Ensure full HR data security aligned with GDPR and local labor laws",
    ],
  },
];

const HrFeatures = () => {
  return (
<section className="py-10 md:py-16 bg-white">
  <div className="container">
    {/* Page Title */}
    <div className="text-center mb-6 md:mb-12 px-2">
      <h2 className="text-base sm:text-lg md:text-xl text-gray-500">
        Key Features of ERP17 Mobile App
      </h2>
      <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-[#141451] font-bold mt-1 md:mt-4 leading-snug">
        Smart Workforce Management Designed for Every Sector
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
      {features.map((feature, index) => {
        const Icon = FaIcons[feature.icon] || FaIcons.FaCircle;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-3 sm:p-5 border border-gray-200  hover:border-sky-500 transition duration-300 flex flex-col"
          >
            <Icon className="text-3xl sm:text-4xl text-sky-500 mb-2 sm:mb-3" />
            <h3 className="text-lg sm:text-xl font-semibold text-[#141451] mb-1 sm:mb-2">
              {feature.name}
            </h3>
            <p className="text-sm sm:text-sm text-gray-600 mb-2 sm:mb-3">
              {feature.desc}
            </p>
            <ul className="text-sm sm:text-sm text-gray-700 list-disc pl-5 space-y-1">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
};

export default HrFeatures;
