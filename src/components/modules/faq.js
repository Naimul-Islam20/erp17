"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How will my business benefit from ERP17 Cloud Solution?",
    answer: (
      <div>
        <p>
          ERP17 brings your entire business operations—including Accounts, Inventory, HR,
          and Sales—under one centralized dashboard. By eliminating data silos and
          automating manual tasks, it provides real-time insights for faster decision-making.
          Ultimately, ERP17 grants you the &quot;Freedom to Scale&quot; while ensuring a
          &quot;Hassle-Free Life.&quot;
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "How much does ERP17 Cloud Solution cost?",
    answer: (
      <div>
        <p>
          Our pricing is designed to be affordable and scalable. Based on your business size
          and specific requirements, you can start using ERP17 with a minimal one-time
          installation charge and a very reasonable monthly subscription fee. This flexible
          approach ensures that you only pay for the value and scale you need.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    question: "Can I see a demo or presentation of ERP17 Cloud Solution?",
    answer: (
      <div>
        <p>
          Absolutely! We highly encourage you to experience the power of ERP17 firsthand.
          You can easily schedule a free, personalized live demo with our experts by clicking
          the &quot;Get a Quote&quot; or &quot;Request a Demo&quot; button on our website.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    question: "Can ERP17 be customized to fit my organization's needs?",
    answer: (
      <div>
        <p>
          Yes. While ERP17 comes as a highly comprehensive ecosystem out-of-the-box, we
          understand that every industry has unique operational flows. Our dedicated
          development team can tailor modules, reporting structures, and specific features
          to perfectly align with your business model.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "Is ERP17 cloud-based?",
    answer: (
      <div>
        <p>
          Yes, ERP17 is a 100% cloud-based architecture. You can securely manage and
          monitor your business from anywhere in the world using any internet-connected
          device. Furthermore, our system features advanced offline-sync capabilities,
          ensuring your critical operations like POS billing never stop, even during internet
          outages.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    question: "How does ERP17 ensure the security of my data?",
    answer: (
      <div>
        <p>
          Corporate data security is our highest priority. ERP17 utilizes high-level data
          encryption, automated daily backups, and Role-Based Access Control (RBAC). Your
          data is hosted on premium, high-performance servers, ensuring it remains strictly
          confidential and protected from unauthorized access.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question: "Do you provide support and maintenance?",
    answer: (
      <div>
        <p>
          Yes, our monthly service includes comprehensive technical support and routine
          maintenance. You will receive dedicated assistance, bug fixes, and continuous
          software updates so your business runs smoothly without any technical
          interruptions.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    question: "Do you have a mobile app?",
    answer: (
      <div>
        <p>
          ERP17 is built with a highly responsive, mobile-first design, meaning you can
          seamlessly operate the full dashboard via any mobile browser. Additionally, we
          provide dedicated mobile applications for specific field operations (like delivery
          tracking or management overviews) upon client request.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    question: "Does ERP17 integrate with hardware like attendance machines?",
    answer: (
      <div>
        <p>
          Yes, ERP17 is fully compatible with premium biometric hardware, including Tipsai
          fingerprint devices. This allows for real-time attendance synchronization directly
          into your HRM and Payroll modules, completely automating your workforce
          management.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    question: "How long does it take to implement ERP17 in my company?",
    answer: (
      <div>
        <p>
          Implementation time depends on your business size and the level of customization
          required. However, for standard setups, our deployment is incredibly swift. We
          also provide comprehensive employee training and data migration support to ensure
          a seamless transition with zero operational downtime.
        </p>
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
        <h3 className="font-semibold text-sm sm:text-base md:text-lg text-[var(--secondary)] leading-snug">{q}</h3>
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
    <div className="bg-white">
      {/* Header */}
      <section className="container pt-5 md:pt-16 pb-4 text-black text-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl text-[var(--secondary)] font-extrabold tracking-tight">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="container pb-6 md:pb-16 grid grid-cols-1 gap-3">
        {faqs.map((f) => (
          <FaqItem key={f.id} q={f.question} a={f.answer} />
        ))}
      </section>
    </div>
  );
}
