import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "CRM Software Solution | ERP17",
  description:
    "Smart Client Relationship Management (CRM) solution to manage leads, automate sales, track customer interactions, and boost conversions.",
};

const features = [
  {
    id: "1. Lead Management",
    desc: "Capture, organize, and track leads from multiple sources like websites, social media, email campaigns, and phone calls. Assign leads automatically to your sales team based on custom rules or territories.",
    benefits: ["Centralized lead database", "Auto-assignment rules", "Lead prioritization and scoring", "Faster response time"],
  },
  {
    id: "2. Sales Pipeline Tracking",
    desc: "Visualize your entire sales funnel in real-time. Move leads through stages such as New, Contacted, Qualified, Proposal Sent, and Closed - with drag-and-drop simplicity.",
    benefits: ["Clear sales pipeline visibility", "Real-time progress tracking", "Forecasting and revenue prediction", "Identify bottlenecks instantly"],
  },
  {
    id: "3. Client Database Management",
    desc: "Maintain a comprehensive client profile including contact details, communication history, past transactions, preferences, and notes - accessible to your team at any time.",
    benefits: ["Better customer understanding", "Personalized service and follow-ups", "Improved customer retention", "Easy data retrieval for support/sales"],
  },
  {
    id: "4. Task & Activity Scheduling",
    desc: "Assign tasks, set reminders, log calls, schedule meetings, and follow-ups within the CRM. Keep your sales and support teams productive and on-track.",
    benefits: ["No missed follow-ups", "Improved team coordination", "Daily/weekly agenda views", "Email & push notifications"],
  },
  {
    id: "5. Communication & Email Integration",
    desc: "Send, receive, and track emails directly from the CRM. Use predefined email templates, schedule bulk messages, and monitor open rates and click-throughs.",
    benefits: ["Seamless email marketing", "Auto-log of communication history", "Campaign performance tracking", "Improve client engagement"],
  },
  {
    id: "6. Quotation & Invoice Management",
    desc: "Create professional quotations and invoices in seconds. Track the status of quotes, get approvals, and convert them into invoices effortlessly.",
    benefits: ["Faster deal closure", "Templates for branding", "Automatic status updates", "Integrated with accounts module"],
  },
  {
    id: "7. Reports & Analytics",
    desc: "Access real-time reports on leads, deals, team performance, revenue, conversion rates, and customer activity. Make smarter business decisions with powerful dashboards.",
    benefits: ["Custom report builder", "Export to Excel or PDF", "KPIs and goal tracking", "Sales trend visualization"],
  },
  {
    id: "8. User Role & Permission Control",
    desc: "Assign specific roles and access levels to team members. Ensure that sensitive customer data is only accessible by authorized users.",
    benefits: ["Enhanced data privacy", "Controlled team collaboration", "Compliance-ready structure", "Admin-level visibility"],
  },
  {
    id: "9. Mobile CRM Access",
    desc: "Access your Client Relationship Management (CRM) on the go with mobile-friendly views or native app support. Let your sales team update leads or close deals while in the field.",
    benefits: ["Anytime, anywhere access", "Mobile notifications", "Offline data sync", "Faster field operations"],
  },
  {
    id: "10. Third-Party Integrations",
    desc: "Integrate with email platforms, accounting software, messaging tools, and social media to bring all customer touchpoints into one platform.",
    benefits: ["Seamless workflow automation", "Reduce data silos", "Centralized communication", "Extend CRM functionality"],
  },
];

export default function CRMDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Client Relationship Management (CRM)</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">
              Client Relationship Management (CRM)
            </h1>
            <p className="text-base md:text-lg font-bold">
              Smart Client Relationship Management (CRM) solution to manage leads, automate sales, track customer interactions, and boost conversions with real-time analytics and reporting.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image
                  src="/img/products/crm/hero.svg"
                  alt="CRM Software Visual"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Client Relationship Management (CRM) Software</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                In today&apos;s competitive market, nurturing client relationships is the key to sustainable business growth. At ERP17, we&apos;ve developed an advanced Client Relationship Management (CRM) Software that helps you manage leads, automate sales processes, and deliver personalized experiences - all from a single platform. Whether you&apos;re a startup or an enterprise, our CRM adapts to your unique workflow and scales with your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Lead Management",
                  "Sales Pipeline Tracking",
                  "Client Management",
                  "Activity Scheduling",
                  "Email Integration",
                  "Quotation & Invoicing",
                  "Reports & Analytics",
                  "User Role & Permission",
                  "Mobile CRM Access",
                  "API Integrations",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">What Is a CRM System?</h2>
            <p className="text-base leading-relaxed font-medium text-justify">
              Managing leads and customers manually through spreadsheets or disconnected tools can result in lost opportunities, miscommunication, and poor client retention. Our Client Resource Management (CRM) system solves these challenges by offering a centralized, automated, and intelligent solution that streamlines customer interactions, improves team productivity, and enhances decision-making through real-time insights.
              <br />
              <br />
              A CRM is no longer a luxury - it&apos;s a necessity for businesses that want to stay ahead.
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Security You Can Trust</h2>
            <p className="text-base leading-relaxed text-justify">
              Your customer data is your most valuable asset - and we protect it with enterprise-grade security. Our CRM platform includes data encryption, secure logins, daily backups, and role-based access control to keep your information safe.
            </p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Suitable for All Industries</h2>
            <p className="text-base font-medium">Our CRM system is highly customizable and used across various sectors, including:</p>
            <div className="space-y-1.5 text-sm font-bold">
              {[
                "Automotive Sales & Service",
                "Real Estate Agencies",
                "Educational Institutions",
                "eCommerce Businesses",
                "Finance & Investment Firms",
                "IT and Digital Agencies",
                "Healthcare & Clinics",
                "Manufacturing & Distribution",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why Choose ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Intuitive User Interface",
                "Affordable Pricing with Flexible Packages",
                "Scalable for Small to Large Teams",
                "Bangla & English Language Support",
                "Expert Training & Ongoing Support",
                "Integration with HRM, Accounts, POS, and ERP Modules",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-base font-bold">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
            <p className="text-base font-medium pt-2">
              Whether you need a lightweight CRM to track leads or a full-fledged system to run your customer operations, our solution grows with your business - without the technical burden.
            </p>
          </section>

          <section className="space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Case Study Snapshot</h3>
            <p className="text-base leading-relaxed text-justify">
              &quot;A leading car dealership increased its lead conversion by 35% and reduced follow-up delays by 60% after implementing our CRM system. The system auto-assigned leads to salespersons, sent follow-up reminders, and centralized customer communication - resulting in higher satisfaction and increased sales.&quot;
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Upgrade?</h2>
            <p className="text-base font-medium">
              Our CRM solution is more than just software - it&apos;s a business growth engine. If you&apos;re ready to simplify your sales process, manage client relationships effectively, and boost revenue, we&apos;re here to help.
            </p>
            <p className="text-base font-medium">Contact ERP17 today for a free demo.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
