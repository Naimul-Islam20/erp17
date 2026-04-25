import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Inventory Management Software | ERP17",
  description:
    "Advanced inventory software for stock tracking, multi-warehouse control, batch management, reorder automation, and real-time inventory analytics.",
};

const InventoryDetailsPage = () => {
  const features = [
    {
      id: "1. Real-Time Stock Tracking",
      desc: "Monitor available, reserved, sold, damaged, and in-transit inventory instantly across all locations. Know exactly what is in stock at any moment to avoid overselling and stock discrepancies.",
      benefits: [
        "Accurate live stock visibility",
        "Prevents overselling and stockouts",
        "Supports faster business decisions",
      ],
    },
    {
      id: "2. Multi-Warehouse Management",
      desc: "Manage inventory across multiple warehouses, godowns, stores, or branch locations from one centralized dashboard. Track internal transfers and maintain location-wise stock control.",
      benefits: [
        "Centralized warehouse operations",
        "Branch-wise stock visibility",
        "Smooth transfer between locations",
      ],
    },
    {
      id: "3. Batch, Serial & Expiry Management",
      desc: "Track products by batch number, serial number, and expiry dates for better quality control and compliance. Essential for pharmaceuticals, FMCG, and perishable goods businesses.",
      benefits: [
        "Improved traceability and compliance",
        "Reduced expired stock losses",
        "Better warranty and return handling",
      ],
    },
    {
      id: "4. Automated Reorder & Low Stock Alerts",
      desc: "Set minimum stock levels and reorder points to receive automatic notifications when stock drops below threshold. Generate purchase requisitions automatically to maintain continuity.",
      benefits: [
        "No manual stock monitoring",
        "Timely procurement planning",
        "Lower risk of stock shortages",
      ],
    },
    {
      id: "5. Purchase & Supplier Management",
      desc: "Manage purchase orders, supplier price lists, delivery timelines, and goods received notes (GRN). Keep complete procurement records and vendor transaction history.",
      benefits: [
        "Better supplier performance tracking",
        "Simplified purchase workflow",
        "Cost control with vendor comparison",
      ],
    },
    {
      id: "6. Barcode & QR Code Integration",
      desc: "Speed up item receiving, counting, transfer, and sales with barcode/QR scanning support. Reduce manual entry errors and improve inventory movement accuracy.",
      benefits: [
        "Faster item handling",
        "Reduced data entry mistakes",
        "Improved operational efficiency",
      ],
    },
    {
      id: "7. Stock Adjustment & Audit Trail",
      desc: "Record adjustments for damaged, missing, returned, or expired items with full reason logs and user tracking. Maintain complete audit trails for accountability and compliance.",
      benefits: [
        "Transparent inventory corrections",
        "Complete user action history",
        "Stronger internal controls",
      ],
    },
    {
      id: "8. Stock Valuation & Costing",
      desc: "Calculate inventory value using methods like FIFO, Weighted Average, or custom costing models. Understand stock value and margin impact in real time.",
      benefits: [
        "Accurate financial reporting",
        "Better profit margin analysis",
        "Supports accounting compliance",
      ],
    },
    {
      id: "9. Demand Forecasting & Analytics",
      desc: "Use sales trends and historical consumption data to forecast future stock demand. Plan purchases and replenishment more intelligently to reduce excess inventory.",
      benefits: [
        "Data-driven procurement",
        "Lower holding and wastage costs",
        "Better seasonal inventory planning",
      ],
    },
    {
      id: "10. ERP Integration & Unified Control",
      desc: "Connect inventory with POS, Accounts, Sales, Purchase, and eCommerce modules for end-to-end business visibility. A single update reflects across all linked systems.",
      benefits: [
        "No duplicate data entry",
        "Unified operations across departments",
        "Faster and accurate reporting",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-primary transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Inventory Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section className="reveal-fade">
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">
              Inventory Management Software
            </h1>
            <p className="text-lg md:text-xl font-bold">
              Advanced inventory software for stock tracking, multi-warehouse control, batch management, reorder automation, and real-time inventory analytics.
            </p>
          </section>

          <section className="reveal flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full">
                <Image
                  src="/img/products/inventory/hero.svg"
                  alt="Inventory Management Visual"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Inventory Management Software</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                Managing stock manually across multiple locations can lead to overstocking, stockouts, losses, and delayed deliveries. At ERP17, our Inventory Management Software helps businesses gain complete control over inventory movement, valuation, and replenishment from one powerful system. From purchase to warehouse to sales, every stock transaction is tracked in real time so your business can run smoothly, reduce costs, and improve profitability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Real-Time Stock Tracking",
                  "Multi-Warehouse Control",
                  "Batch and Serial Tracking",
                  "Low-Stock Alerts",
                  "Reorder Automation",
                  "Barcode and QR Support",
                  "Supplier Management",
                  "Stock Valuation",
                  "Demand Forecasting",
                  "ERP Integration",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-base font-bold text-black uppercase tracking-tight">
                    <FaCheck className="text-primary flex-shrink-0 text-[10px]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="reveal space-y-2 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our Inventory Solution?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Our inventory platform gives you a centralized, accurate, and automation-driven way to handle stock across your entire organization. Whether you run retail stores, warehouses, distribution channels, or manufacturing units, our system keeps inventory synchronized in real time and minimizes human error.
              <br />
              <br />
              From procurement planning to stock dispatch, every workflow becomes faster and smarter.
            </p>
          </section>

          <section className="reveal space-y-8 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] inline-block">Key Features</h2>
            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="reveal space-y-1.5">
                  <h3 className="text-2xl font-black text-[var(--secondary)]">{feature.id}</h3>
                  <p className="text-lg text-black leading-relaxed text-justify">{feature.desc}</p>
                  <p className="font-black uppercase text-[10px] tracking-widest mt-2 opacity-60">Benefits:</p>
                  <ul className="space-y-1 pt-0.5">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-black font-bold text-base">
                        <FaCheck className="text-primary text-[10px] mt-1 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="reveal space-y-2 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Inventory Security and Accuracy</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              Protect your stock data with role-based permissions, transaction-level logs, and complete audit trails. Every stock movement is recorded with date, time, and user details, ensuring accountability and reducing inventory fraud or manipulation risks.
            </p>
          </section>

          <section className="reveal space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ideal for All Business Types</h2>
            <p className="text-lg font-medium text-black">Our inventory system is perfect for:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Retail and wholesale businesses",
                "Distributors and supply chain companies",
                "Manufacturing industries",
                "Pharmaceutical and healthcare suppliers",
                "eCommerce and omni-channel sellers",
                "Super shops and chain stores",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-primary flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="reveal space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why Businesses Choose ERP17</h2>
            <ul className="space-y-1.5">
              {[
                "Simple and user-friendly interface",
                "Fast implementation with training support",
                "Scalable for small to enterprise-level operations",
                "Cloud and on-premise deployment options",
                "Seamless integration with POS, Accounts, and ERP",
                "Reliable support from expert teams",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-primary flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Success Snapshot</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              "After implementing ERP17 Inventory Management Software, we reduced stock mismatch by 85%, improved procurement planning, and cut inventory holding costs significantly. Our warehouse and sales teams now work with complete synchronization."
            </p>
          </section>

          <section className="reveal space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Optimize Your Inventory?</h2>
            <p className="text-lg font-medium text-black">
              Take full control of your stock with a smart, scalable, and reliable inventory management platform.
            </p>
            <p className="text-lg font-medium text-black">
              Contact ERP17 today for a free demo or consultation.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default InventoryDetailsPage;
