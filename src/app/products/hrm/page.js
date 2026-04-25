import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "HRM Software Solution | ERP17",
  description:
    "Comprehensive HRM software for managing attendance, payroll, leave, recruitment, performance, and employee data with automation and analytics.",
};

const features = [
  {
    id: "1. Employee Database Management",
    desc: "Maintain a centralized and secure employee profile for every staff member. Store personal details, job history, documents, and emergency contacts - all in one place.",
    benefits: ["Quick access to employee records", "Centralized storage of HR documents", "Role-based access control for data security"],
  },
  {
    id: "2. Attendance & Shift Management",
    desc: "Track employee attendance using manual entries, biometric integration, GPS tracking, or mobile check-in/check-out. Manage flexible shifts and weekly duty rosters with ease.",
    benefits: ["Real-time attendance monitoring", "Auto-calculated working hours", "Shift scheduling and alerts"],
  },
  {
    id: "3. Leave Management System",
    desc: "Automate leave requests, approvals, and balance tracking. Employees can apply for leaves online, while HR/Admin can approve or reject them with just a click.",
    benefits: ["Transparent leave tracking", "Custom leave types and policies", "Email and app notifications"],
  },
  {
    id: "4. Payroll & Salary Management",
    desc: "Generate accurate payslips and manage salary disbursement with built-in payroll tools. The system handles allowances, deductions, taxes, bonuses, and overtime.",
    benefits: ["Auto-calculation of salaries", "Multiple salary structures", "Integration with bank or mobile payment systems"],
  },
  {
    id: "5. Loan & Advance Management",
    desc: "Easily track short-term or long-term employee loans, EMIs, and repayments. Set installment rules and deduction schedules that auto-sync with payroll.",
    benefits: ["Automated loan recovery", "Transparent deduction statements", "Detailed repayment history"],
  },
  {
    id: "6. Performance & KPI Management",
    desc: "Set individual KPIs and track performance reviews periodically. Use customizable appraisal templates to evaluate productivity, goals, and employee growth.",
    benefits: ["Streamlined appraisal cycles", "Custom review templates", "Performance-based reward triggers"],
  },
  {
    id: "7. Recruitment & Onboarding",
    desc: "Simplify the hiring process from job posting to final onboarding. Track applicants, schedule interviews, and manage documentation within the system.",
    benefits: ["ATS (Applicant Tracking System) integration", "Digital onboarding and document collection", "Reduced hiring turnaround time"],
  },
  {
    id: "8. Training & Development",
    desc: "Plan and monitor employee training programs. Maintain skill records and track progress over time to ensure continuous growth and learning.",
    benefits: ["Training schedules and alerts", "Certification tracking", "Department-wise training logs"],
  },
  {
    id: "9. HR Analytics & Reports",
    desc: "Gain insight into employee trends, department performance, attrition rate, payroll summaries, and more with detailed, exportable reports.",
    benefits: ["Visual dashboards", "Export to Excel, PDF, etc.", "Informed decision-making"],
  },
  {
    id: "10. Self-Service Portal (ESS)",
    desc: "Empower employees with access to their data. Let them check attendance, apply for leave, view payslips, update information, and more - anytime, anywhere.",
    benefits: ["Reduces HR workload", "Improves transparency", "Mobile and desktop access"],
  },
];

export default function HRMDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Human Resource Management (HRM)</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">
              Human Resource Management (HRM)
            </h1>
            <p className="text-lg md:text-xl font-bold">
              Comprehensive HRM software for managing attendance, payroll, leave, recruitment, performance, and employee data with automation and analytics.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="h-full rounded-xl overflow-hidden">
                <Image
                  src="/img/products/employee-manege/EM1.svg"
                  alt="HRM Software Visual"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Human Resource Management (HRM) Software</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                At ERP17, we understand that your people are your most valuable asset. That&apos;s why we&apos;ve developed an intelligent and feature-rich Human Resource Management (HRM) Software designed to simplify HR operations, improve employee engagement, and drive business growth. Whether you&apos;re a small business or a large enterprise, our HRM software adapts to your needs with automation, accuracy, and analytics at its core.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Employee Management",
                  "Attendance Tracking",
                  "Leave Management",
                  "Payroll Management",
                  "Loan Management",
                  "KPI Management",
                  "Recruitment",
                  "Training Management",
                  "HR Analytics",
                  "Self-Service Portal",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our HRM Software?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Managing human resources manually is time-consuming and error-prone. Our Human Resource Management (HRM) solution automates daily HR tasks, reduces paperwork, enhances productivity, and ensures compliance with labor laws and company policies. With our cloud-based system, HR teams can operate from anywhere, access real-time data, and focus on strategic activities rather than routine administration.
              <br />
              <br />
              We bring security, scalability, and simplicity to HR operations - all from a single platform.
            </p>
          </section>

          <section className="space-y-8 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] inline-block">Key Features</h2>

            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[var(--secondary)]">{feature.id}</h3>
                  <p className="text-lg text-black leading-relaxed text-justify">{feature.desc}</p>
                  <p className="font-black uppercase text-[10px] tracking-widest mt-2 opacity-60">Benefits:</p>
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

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Cloud-Based & On-Premise Options</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Choose the deployment that suits your business needs:
              <br />
              <strong>Cloud-Based:</strong> Access from anywhere, auto-updates, lower upfront costs
              <br />
              <strong>On-Premise:</strong> Full control, custom hosting, and higher data sovereignty
            </p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ideal for All Industries</h2>
            <p className="text-lg font-medium text-black">Our HRM system is perfect for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Manufacturing companies",
                "IT and tech firms",
                "Educational institutions",
                "Security and logistics agencies",
                "Healthcare and clinics",
                "Retail and service providers",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why Businesses Trust Us</h2>
            <ul className="space-y-1.5">
              {[
                "User-friendly Interface",
                "Customizable Modules",
                "Local Language Support (Bangla & English)",
                "Mobile App Integration",
                "24/7 Customer Support",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Data Privacy & Security</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              We take your data seriously. Our Human Resource Management (HRM) software follows industry-standard security protocols with SSL encryption, role-based access, multi-factor authentication, and regular data backups. Your information stays protected at all times.
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Digitize Your HR Department?</h2>
            <p className="text-lg font-medium text-black">
              Let us help you streamline HR operations, reduce manual work, and create a more efficient workplace.
            </p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
