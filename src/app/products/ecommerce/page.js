import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "eCommerce Management Software | ERP17",
  description:
    "Complete eCommerce solution for product catalog, order management, payment integration, inventory sync, marketing tools, and customer experience optimization.",
};

const features = [
  {
    id: "1. Product Catalog & Variants",
    desc: "Create a powerful online storefront with unlimited products, categories, tags, and variants (size, color, weight, etc.). Easily manage prices, offers, and stock by SKU.",
    benefits: ["Centralized product management", "Variant-wise stock tracking", "SEO-friendly product pages"],
  },
  {
    id: "2. Smart Shopping Cart & Checkout",
    desc: "Provide a smooth checkout experience with coupon support, shipping calculation, and multiple payment methods. Reduce cart abandonment with optimized user flow.",
    benefits: ["Fast and secure checkout", "Coupon and promo code support", "Guest and registered checkout options"],
  },
  {
    id: "3. Order & Fulfillment Management",
    desc: "Track each order from placement to delivery. Manage packing, shipment status, delivery updates, cancellations, and returns from one centralized panel.",
    benefits: ["Real-time order status updates", "Shipment and return workflows", "Reduced delivery errors"],
  },
  {
    id: "4. Inventory Synchronization",
    desc: "Keep stock levels synchronized across website, warehouse, and POS. Avoid overselling with live inventory updates and auto low-stock alerts.",
    benefits: ["Live stock sync", "Low-stock notifications", "Warehouse-level stock visibility"],
  },
  {
    id: "5. Payment Gateway Integration",
    desc: "Integrate with major payment gateways for cards, mobile banking, internet banking, and COD. Automatically capture payment confirmations and transaction logs.",
    benefits: ["Multiple payment modes", "Secure transaction handling", "Automated reconciliation support"],
  },
  {
    id: "6. Customer Account & CRM",
    desc: "Provide customer dashboards with order history, saved addresses, and support tickets. Track behavior and buying patterns to personalize engagement.",
    benefits: ["Better customer retention", "Personalized shopping experience", "Integrated CRM workflow"],
  },
  {
    id: "7. Promotions & Marketing Tools",
    desc: "Run campaigns using discount rules, bundle offers, flash sales, and referral programs. Connect with email/SMS marketing to recover abandoned carts and boost repeat orders.",
    benefits: ["Campaign automation", "Abandoned cart recovery", "Higher conversion rate"],
  },
  {
    id: "8. Multi-Vendor / Multi-Store Support",
    desc: "Operate multiple storefronts or support vendor-based selling with centralized admin controls. Perfect for franchise, wholesale, or marketplace-style models.",
    benefits: ["Centralized multi-store control", "Vendor and commission setup", "Unified reporting"],
  },
  {
    id: "9. Analytics & Business Intelligence",
    desc: "Access live dashboards for sales, conversion rates, order sources, and customer lifetime value. Make data-driven decisions for growth and profitability.",
    benefits: ["Real-time performance insights", "Top product and channel analysis", "Exportable reports"],
  },
  {
    id: "10. Security, Backup & Scalability",
    desc: "Protect customer and transaction data with modern security controls, automated backups, and scalable infrastructure to handle growth and traffic spikes.",
    benefits: ["Encrypted data protection", "Automated backup and recovery", "Scalable architecture for growth"],
  },
];

export default function EcommerceDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">eCommerce Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">eCommerce Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              Complete eCommerce solution for product catalog, order management, payment integration, inventory sync, marketing tools, and customer experience optimization.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/ecommerce.png" alt="eCommerce Software Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Grow Faster with Smart eCommerce Operations</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                At ERP17, our eCommerce Management Software helps you manage your complete online business from one powerful dashboard. From product listing and checkout to logistics, payments, and customer retention, every part of your workflow becomes faster, more accurate, and easier to scale. Whether you operate a single online shop or a multi-store brand, our cloud-ready system gives you complete control and visibility in real time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Product Catalog",
                  "Smart Checkout",
                  "Order Fulfillment",
                  "Inventory Sync",
                  "Payment Integration",
                  "Customer CRM",
                  "Marketing Automation",
                  "Multi-Store Control",
                  "Live Analytics",
                  "Secure Cloud Platform",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our eCommerce Solution?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Managing eCommerce with disconnected tools leads to delays, overselling, payment mismatches, and poor customer experience. Our software unifies storefront, order, inventory, and finance into one ecosystem, helping your team work smarter and respond faster.
              <br />
              <br />
              The result is lower operational cost, higher conversion, and better long-term customer loyalty.
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Best Fit For</h2>
            <p className="text-lg font-medium text-black">This platform is ideal for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Retail and fashion brands",
                "Electronics and gadget stores",
                "FMCG and grocery businesses",
                "Health and beauty stores",
                "B2B wholesale and distributors",
                "Multi-vendor marketplace operators",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Security & Reliability</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              We follow enterprise-level security practices including encrypted transactions, secure user access, audit logs, and regular backups to ensure your business and customer data remain protected at all times.
            </p>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "Easy to use and quick to deploy",
                "Scalable for startups to enterprises",
                "Bangla & English support available",
                "Seamless ERP, CRM, POS, and Accounts integration",
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
            <h3 className="text-2xl font-black text-[var(--secondary)]">Client Success Snapshot</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              &quot;After implementing ERP17 eCommerce platform, our order processing time dropped by 45%, and stock mismatch issues were nearly eliminated. Our repeat purchase rate also improved significantly through automated campaigns.&quot;
            </p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Scale Your Online Business?</h2>
            <p className="text-lg font-medium text-black">Digitize your commerce operations with one reliable platform built for speed, growth, and customer satisfaction.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
