import Image from "next/image";
import {
  Check,
  Cloud,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Languages,
  Laptop,
  LayoutGrid,
  Lock,
  KeyRound,
  Database,
  Fingerprint,
  Server,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "HRM Software Solution | ERP17",
  description:
    "Comprehensive HRM software for managing attendance, payroll, leave, recruitment, performance, and employee data with automation and analytics.",
};

const highlights = [
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
];

const features = [
  {
    id: "1. Employee Database Management",
    desc: "Maintain a centralized and secure employee profile for every staff member. Store personal details, job history, documents, and emergency contacts - all in one place.",
    benefits: [
      "Quick access to employee records",
      "Centralized storage of HR documents",
      "Role-based access control for data security",
    ],
  },
  {
    id: "2. Attendance & Shift Management",
    desc: "Track employee attendance using manual entries, biometric integration, GPS tracking, or mobile check-in/check-out. Manage flexible shifts and weekly duty rosters with ease.",
    benefits: [
      "Real-time attendance monitoring",
      "Auto-calculated working hours",
      "Shift scheduling and alerts",
    ],
  },
  {
    id: "3. Leave Management System",
    desc: "Automate leave requests, approvals, and balance tracking. Employees can apply for leaves online, while HR/Admin can approve or reject them with just a click.",
    benefits: [
      "Transparent leave tracking",
      "Custom leave types and policies",
      "Email and app notifications",
    ],
  },
  {
    id: "4. Payroll & Salary Management",
    desc: "Generate accurate payslips and manage salary disbursement with built-in payroll tools. The system handles allowances, deductions, taxes, bonuses, and overtime.",
    benefits: [
      "Auto-calculation of salaries",
      "Multiple salary structures",
      "Integration with bank or mobile payment systems",
    ],
  },
  {
    id: "5. Loan & Advance Management",
    desc: "Easily track short-term or long-term employee loans, EMIs, and repayments. Set installment rules and deduction schedules that auto-sync with payroll.",
    benefits: [
      "Automated loan recovery",
      "Transparent deduction statements",
      "Detailed repayment history",
    ],
  },
  {
    id: "6. Performance & KPI Management",
    desc: "Set individual KPIs and track performance reviews periodically. Use customizable appraisal templates to evaluate productivity, goals, and employee growth.",
    benefits: [
      "Streamlined appraisal cycles",
      "Custom review templates",
      "Performance-based reward triggers",
    ],
  },
  {
    id: "7. Recruitment & Onboarding",
    desc: "Simplify the hiring process from job posting to final onboarding. Track applicants, schedule interviews, and manage documentation within the system.",
    benefits: [
      "ATS (Applicant Tracking System) integration",
      "Digital onboarding and document collection",
      "Reduced hiring turnaround time",
    ],
  },
  {
    id: "8. Training & Development",
    desc: "Plan and monitor employee training programs. Maintain skill records and track progress over time to ensure continuous growth and learning.",
    benefits: [
      "Training schedules and alerts",
      "Certification tracking",
      "Department-wise training logs",
    ],
  },
  {
    id: "9. HR Analytics & Reports",
    desc: "Gain insight into employee trends, department performance, attrition rate, payroll summaries, and more with detailed, exportable reports.",
    benefits: [
      "Visual dashboards",
      "Export to Excel, PDF, etc.",
      "Informed decision-making",
    ],
  },
  {
    id: "10. Self-Service Portal (ESS)",
    desc: "Empower employees with access to their data. Let them check attendance, apply for leave, view payslips, update information, and more - anytime, anywhere.",
    benefits: [
      "Reduces HR workload",
      "Improves transparency",
      "Mobile and desktop access",
    ],
  },
];

const industries = [
  { label: "Manufacturing companies", icon: Factory },
  { label: "IT and tech firms", icon: Laptop },
  { label: "Educational institutions", icon: GraduationCap },
  { label: "Security and logistics agencies", icon: Truck },
  { label: "Healthcare and clinics", icon: HeartPulse },
  { label: "Retail and service providers", icon: ShoppingBag },
];

const securityFeatures = [
  { label: "SSL Encryption", icon: Lock },
  { label: "Role-Based Access", icon: KeyRound },
  { label: "MFA", icon: Fingerprint },
  { label: "Data Backups", icon: Database },
];

const trustPoints = [
  { icon: LayoutGrid, label: "User-friendly Interface" },
  { icon: Sparkles, label: "Customizable Modules" },
  { icon: Languages, label: "Local Language Support (Bangla & English)" },
  { icon: Smartphone, label: "Mobile App Integration" },
  { icon: Headphones, label: "24/7 Customer Support" },
];

function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`text-2xl font-bold tracking-tight text-[var(--secondary)] md:text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-700 md:text-base">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)]/60">
        <Check className="h-3 w-3 text-[var(--primary)]" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function HRMDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-8 pb-4 md:pt-12 md:pb-6">
        <div className="container max-w-5xl text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--secondary)] md:text-5xl">
            Human Resource Management (HRM)
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Comprehensive HRM software for managing attendance, payroll, leave,
            recruitment, performance, and employee data with automation and
            analytics.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-10 pt-2 md:pb-14 md:pt-4">
        <div className="container max-w-5xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:rounded-xl">
                <Image
                  src="/img/products/hrm-hero.jpg"
                  alt="HR team collaborating in a modern office"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="order-1 space-y-5 lg:order-2">
              <h2 className="text-2xl font-bold text-[var(--secondary)] md:text-3xl">
                Simplify HR Operations, Empower Your Team
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
                At ERP17, we understand that your people are your most valuable
                asset. That&apos;s why we&apos;ve developed an intelligent and
                feature-rich Human Resource Management (HRM) Software designed to
                simplify HR operations, improve employee engagement, and drive
                business growth. Whether you&apos;re a small business or a large
                enterprise, our HRM software adapts to your needs with
                automation, accuracy, and analytics at its core.
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {highlights.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="pb-10 md:pb-14">
        <div className="container max-w-5xl">
          <div className="rounded-lg border border-slate-200 bg-white p-6 md:rounded-xl md:p-8">
            <SectionTitle>Why Choose Our HRM Software?</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
              Managing human resources manually is time-consuming and
              error-prone. Our Human Resource Management (HRM) solution
              automates daily HR tasks, reduces paperwork, enhances
              productivity, and ensures compliance with labor laws and company
              policies. With our cloud-based system, HR teams can operate from
              anywhere, access real-time data, and focus on strategic activities
              rather than routine administration.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700 md:text-base">
              We bring security, scalability, and simplicity to HR operations -
              all from a single platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-10 md:pb-14">
        <div className="container max-w-5xl">
          <SectionTitle className="mb-8">Key Features</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:rounded-xl md:p-6"
              >
                <h3 className="text-lg font-bold text-[var(--secondary)]">
                  {feature.id}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.desc}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                  Benefits
                </p>
                <ul className="mt-2 space-y-2">
                  {feature.benefits.map((benefit) => (
                    <CheckItem key={benefit}>{benefit}</CheckItem>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="pb-10 md:pb-14">
        <div className="container max-w-5xl">
          <SectionTitle className="mb-6">
            Cloud-Based & On-Premise Options
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5 md:rounded-xl md:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[var(--secondary)]">Cloud-Based</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Access from anywhere, auto-updates, lower upfront costs
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 md:rounded-xl md:p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[var(--secondary)]">On-Premise</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Full control, custom hosting, and higher data sovereignty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-slate-200 bg-white py-10 md:py-14">
        <div className="container max-w-5xl">
          <div className="max-w-2xl">
            <SectionTitle>Ideal for All Industries</SectionTitle>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Our HRM system is perfect for:
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.label}
                  className="flex items-center gap-3 rounded-lg bg-slate-50 px-4 py-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {industry.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-10 md:py-14">
        <div className="container max-w-5xl">
          <SectionTitle className="text-center">
            Why Businesses Trust Us
          </SectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="flex flex-col items-center rounded-lg bg-gradient-to-b from-[var(--primary-soft)]/40 to-white px-4 py-6 text-center ring-1 ring-[var(--primary-soft)] md:rounded-xl"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <p className="text-sm font-semibold leading-snug text-[var(--secondary)]">
                    {point.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-t border-slate-200 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="container max-w-5xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 border-[var(--primary)]/25 text-[var(--primary)] md:rounded-xl">
              <Shield className="h-7 w-7" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <SectionTitle>Data Privacy & Security</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
                We take your data seriously. Our Human Resource Management (HRM)
                software follows industry-standard security protocols with SSL
                encryption, role-based access, multi-factor authentication, and
                regular data backups. Your information stays protected at all
                times.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="border-t border-slate-200 pt-4"
                >
                  <Icon
                    className="h-5 w-5 text-[var(--primary)]"
                    strokeWidth={2.2}
                  />
                  <p className="mt-2 text-sm font-semibold text-[var(--secondary)]">
                    {feature.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
