import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "POS Software Solution | ERP17",
  description:
    "User-friendly Point of sale system for managing sales, inventory, billing, customer data, and payments seamlessly across any retail shop or restaurant businesses.",
};

const features = [
  {
    id: "1. Smart Billing and Invoicing",
    desc: "Generate professional invoices instantly with automatic tax and discount calculations. Our POS allows multiple billing formats, barcode scanning, and real-time updates on stock and sales.",
    benefits: ["Fast and accurate billing", "Customizable invoice formats", "Multiple payment options (cash, card, digital wallets)"],
  },
  {
    id: "2. Inventory Management",
    desc: "Track every item in your store - from arrival to sale. Set low-stock alerts, manage batches, and get real-time inventory updates to avoid overstocking or stockouts.",
    benefits: ["Auto-updated inventory after each sale", "Manage product variants (size, color, batch)", "Stock level notifications"],
  },
  {
    id: "3. Multi-User Access with Role Control",
    desc: "Assign roles to your staff and control what each user can see and do. Keep your system secure while allowing seamless team collaboration.",
    benefits: ["Role-based permissions", "Activity logs for tracking user actions", "Improved accountability"],
  },
  {
    id: "4. Customer Management",
    desc: "Capture customer details and purchase history to build loyalty and send personalized offers. Create membership programs, discounts, and loyalty rewards to retain customers.",
    benefits: ["CRM integration", "Purchase history tracking", "Loyalty points system"],
  },
  {
    id: "5. Sales Reporting & Analytics",
    desc: "View detailed daily, weekly, and monthly reports with visual charts. Analyze top-selling products, revenue trends, and employee performance with ease.",
    benefits: ["Real-time data visualization", "Sales comparison by period", "Export reports in PDF/Excel"],
  },
  {
    id: "6. Barcode & QR Code Support",
    desc: "Scan products using barcode or QR code for fast billing and inventory updates. Generate barcodes directly from the POS for new stock.",
    benefits: ["Speed up checkout process", "Reduce manual entry errors", "Auto-price fetch on scan"],
  },
  {
    id: "7. Multi-Location & Franchise Support",
    desc: "Operate multiple branches or franchises from a single dashboard. Monitor inventory, sales, and staff performance across all outlets in real time.",
    benefits: ["Centralized control", "Location-wise reporting", "Sync across branches"],
  },
  {
    id: "8. Offline Mode",
    desc: "Continue sales even when the internet is down. Our POS system stores data offline and syncs automatically when the connection is restored.",
    benefits: ["No disruption to sales", "Data integrity maintained", "Seamless experience for staff and customers"],
  },
  {
    id: "9. Integrated Accounting Features",
    desc: "Automatically sync sales, purchases, and expenses with your accounting module. Simplify financial management and tax compliance.",
    benefits: ["Accurate profit/loss calculation", "Auto-updated financial entries", "Integration with accounting software"],
  },
  {
    id: "10. Device Compatibility",
    desc: "Our POS software works smoothly on desktops, tablets, and POS terminals. It's compatible with printers, barcode scanners, and cash drawers.",
    benefits: ["Easy setup with existing hardware", "Mobile POS option", "Cloud and local deployment available"],
  },
];

export default function POSDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Point of Sale Software (POS)</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-4 leading-tight">Point of Sale Software (POS)</h1>
            <p className="text-lg md:text-xl font-bold">
              User-friendly Point of sale system for managing sales, inventory, billing, customer data, and payments seamlessly across any retail shop or restaurant businesses.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/pos.png" alt="POS Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Point of Sale (POS) Software</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                In today&apos;s fast-paced retail and service environment, you need more than just a cash register to stay ahead. You need a smart, intuitive, and reliable Point of Sale (POS) system that can handle every aspect of your business - from sales and inventory to billing, reporting, and customer management. At ERP17, we offer a modern, feature-rich POS Software that helps you run your store efficiently, serve customers faster, and make data-driven decisions. Whether you run a retail shop, restaurant, pharmacy, or service center, our POS software is designed to simplify operations and maximize your profits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Fast and accurate billing",
                  "Customizable invoice formats",
                  "Multiple payment options (cash, card, digital wallets)",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">What Is a POS System?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              A Point of Sale (POS) system is the place where your customers make payments for products or services. But modern POS systems do much more than process sales. They manage inventory, customer data, employees, finances, and generate reports - all in real time.
              <br />
              <br />
              Our POS software is built to be fast, reliable, secure, and adaptable for businesses of any type.
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

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Target Businesses</h2>
            <p className="text-lg font-medium">Our solution is optimized for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Retail stores (grocery, clothing, electronics)",
                "Restaurants, cafes, and food courts",
                "Pharmacies and clinics",
                "Supermarkets and department stores",
                "Salons and spas",
                "Hardware and construction material shops",
                "Bookstores and stationery shops",
              ].map((use) => (
                <div key={use} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {use}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Security & Data Protection</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              We prioritize your business security. Our POS system includes role-based access, data encryption, automatic backups, and user audit trails to ensure your information stays secure and confidential.
            </p>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Mobile POS & Cloud Access</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Access your business data from anywhere. Our cloud-based POS solution gives you real-time access to sales, stock, and reports from your smartphone or desktop, anytime you need it.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why Choose ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Easy to use - minimal training required",
                "Affordable pricing - fits all budgets",
                "Custom modules and localization (Bangla & English)",
                "Fast customer support and training",
                "Seamless integration with our ERP, CRM, and Accounting modules",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Success Story</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              &quot;With ERP17 POS, we cut down billing time by 50% and gained full control over our stock. The reporting feature alone saved hours of manual work each week.&quot;
            </p>
            <p className="text-sm font-bold opacity-60">- A leading supermarket chain</p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Upgrade?</h2>
            <p className="text-lg font-medium text-black">Empower your team and grow your business faster with our smart POS Software.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
