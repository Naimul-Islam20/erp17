"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, Phone, Mail } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How will my business benefit from ERP17's HR Software?",
    answer: (
      <div className="space-y-3">
        <p>
          ERP17 streamlines HR operations for businesses in Bangladesh. It boosts
          efficiency, reduces manual admin work, and helps you stay compliant with local
          labor laws.
        </p>
        <p>
          The platform automates payroll, attendance, and employee management so your
          team can focus on strategic growth. It also provides actionable insights so
          everyone can work smarter together.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "What does ERP17 HR Software do?",
    answer: (
      <div>
        <p>ERP17 is an all‑in‑one HRIS & HRM platform to automate your HR processes.</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Attendance management</li>
          <li>Shift & leave management</li>
          <li>Payroll & tax management</li>
          <li>Expense management</li>
          <li>Employee management & tracking</li>
          <li>Tasks management</li>
          <li>Digital noticeboard & notifications</li>
          <li>Face recognition attendance</li>
          <li>And more</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    question: "Does ERP17's HR Software support payroll?",
    answer: (
      <div className="space-y-3">
        <p>
          Yes. ERP17 includes a complete payroll engine with salary structures,
          allowances, deductions, and automated tax calculations.
        </p>
        <p>Generate payslips, process payroll cycles, and export reports in clicks.</p>
      </div>
    ),
  },
  {
    id: 4,
    question: "How do I choose the best HR software in Bangladesh?",
    answer: (
      <div className="space-y-3">
        <p>
          Start by mapping your HR needs (payroll, attendance, self‑service, cloud
          access), then match solutions to your company size and industry.
        </p>
        <p>
          ERP17 offers flexible modules and pricing so you pay for what you need and
          scale as you grow.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "Is ERP17 the best HR software in Bangladesh?",
    answer: (
      <div>
        <p>
          ERP17 is trusted for comprehensive HR & payroll features, a user‑friendly
          interface, and compliance‑focused workflows—making it a top choice for
          organizations in Bangladesh.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "Is ERP17 suitable for small businesses?",
    answer: (
      <div>
        <p>
          Absolutely. ERP17 serves startups, SMEs, and large enterprises with packages
          tailored to team size and budget.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question: "How much does ERP17 HR Software cost?",
    answer: (
      <div className="space-y-2">
        <p>Pricing varies by organization size:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-medium">Tiny:</span> 1 – 25 Employees</li>
          <li><span className="font-medium">Small:</span> 26 – 50 Employees</li>
          <li><span className="font-medium">Mid:</span> 51 – 100 Employees</li>
          <li><span className="font-medium">Large:</span> 100+ Employees</li>
        </ul>
        <p>Check our packages for full details.</p>
      </div>
    ),
  },
  {
    id: 8,
    question: "Can I see a demo of ERP17?",
    answer: (
      <div>
        <p>
          Of course! Request a call at <span className="font-semibold">+880 17 1342 8432</span>
          or schedule a meeting—our team will gladly show you around.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    question: "Can ERP17 be customized to fit my organization’s needs?",
    answer: (
      <div>
        <p>
          Yes. ERP17 is highly customizable. Tell us your processes and we’ll tailor the
          workflows to match. Send us an email and we’ll get back ASAP.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    question: "Is ERP17 cloud‑based?",
    answer: (
      <div>
        <p>
          Yes. ERP17 is a secure, cloud‑based HR solution with automatic updates and
          enterprise‑grade infrastructure.
        </p>
      </div>
    ),
  },
  {
    id: 11,
    question: "How does ERP17 ensure security of employee data?",
    answer: (
      <div className="ps-5">
        <p>
          We prioritize security with strong encryption, role‑based access, and robust
          cloud controls. We also provide free setup and core HR data upload to ensure a
          smooth go‑live.
        </p>
      </div>
    ),
  },
  {
    id: 12,
    question: "Do you provide support?",
    answer: (
      <div className="space-y-2">
        <p>
          Yes. Our professional support team provides onboarding, training, and ongoing
          help when you need it.
        </p>
        <p>Support hotline: <span className="font-semibold">+880 9606 881188</span></p>
      </div>
    ),
  },
  {
    id: 13,
    question: "Do you have a mobile app?",
    answer: (
      <div>
        <p>Yes. ERP17 is available on both Android and iOS for on‑the‑go HR.</p>
      </div>
    ),
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-300 bg-white text-blue rounded-2xl overflow-hidden   transition">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-950 leading-snug">{q}</h3>
        <ChevronDown
          className={`shrink-0 text-gray-800 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-0 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ERP17Faq() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="container pt-10 md:pt-16 pb-6 text-black text-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl text-[#141451] font-extrabold tracking-tight">
            FAQ
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Still have questions? Contact our team and we’ll respond fast.
          </p>

          {/* Contact CTA */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 pt-2">
            {/* First 2 phone numbers on the same line for mobile, and part of the main row for desktop */}
            <div className="flex flex-row gap-2 justify-center">
              <a
                href="tel:+8801713428432"
                className="inline-flex items-center gap-1.5 rounded-xl px-2 sm:px-4 py-2 border border-sky-200 bg-white shadow hover:shadow-md transition text-[9px] sm:text-xs md:text-sm whitespace-nowrap"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" /> +880 17 1342 8432
              </a>
              <a
                href="tel:+8809606881188"
                className="inline-flex items-center gap-1.5 rounded-xl px-2 sm:px-4 py-2 border border-sky-200 bg-white shadow hover:shadow-md transition text-[9px] sm:text-xs md:text-sm whitespace-nowrap"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" /> Support: +880 9606 881188
              </a>
            </div>
            {/* Email on its own line on mobile, but side-by-side on desktop */}
            <a
              href="mailto:hello@erp17.com"
              className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 border border-gray-200 bg-white shadow hover:shadow-md transition text-[9px] sm:text-xs md:text-sm whitespace-nowrap"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" /> hello@erp17.com
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="container pb-10 md:pb-16 grid grid-cols-1 gap-3">
        {faqs.map((f) => (
          <FaqItem key={f.id} q={f.question} a={f.answer} />
        ))}
      </section>
    </div>
  );
}
