import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: "Restaurant Management Software | ERP17",
  description:
    "Smart management solution for restaurants including order tracking, kitchen management, billing, and inventory control for single or multiple outlets.",
};

const features = [
  {
    id: "1. Advanced Restaurant POS",
    desc: "Speed up your checkout with our touch-optimized POS. Handle split bills, multiple payment modes, and table-side ordering smoothly. Integrated with thermal printers and cash drawers.",
    benefits: ["Fast billing with split-bill options", "Multiple payment gateways", "Quick search and shortcuts"],
  },
  {
    id: "2. Kitchen Order Ticket (KOT)",
    desc: "Eliminate communication gaps between waitstaff and the kitchen. Orders placed via POS or tablet are instantly printed or displayed in the kitchen.",
    benefits: ["Real-time order transmission", "Kitchen Display System (KDS) support", "Order status tracking"],
  },
  {
    id: "3. Table & Floor Management",
    desc: "Design your restaurant floor plan and manage table bookings, occupancy, and turnover rates in real time. Avoid double bookings and improve seating efficiency.",
    benefits: ["Visual floor map", "Real-time table status (Free/Occupied/Dirty)", "Reservation management"],
  },
  {
    id: "4. Dynamic Menu & Recipe Management",
    desc: "Easily update prices, add new dishes, or set seasonal menus across all outlets. Link recipes to inventory to auto-deduct raw materials on every sale.",
    benefits: ["Instant menu updates", "Recipe-based inventory deduction", "Combo and add-on management"],
  },
  {
    id: "5. Inventory & Food Costing",
    desc: "Track raw material stock with precision. Set low-stock alerts, manage internal transfers between branches, and analyze food costing for better margins.",
    benefits: ["Real-time raw material tracking", "Auto-stock reordering alerts", "Wastage and variance reports"],
  },
  {
    id: "6. Online Delivery & Pickup Integration",
    desc: "Manage walk-in, take-away, and delivery orders from a single dashboard. Synchronize with popular third-party delivery platforms for seamless flow.",
    benefits: ["Centralized delivery management", "Driver tracking and assignments", "Delivery-specific pricing"],
  },
  {
    id: "7. Expense & Salary Tracking",
    desc: "Monitor your daily operational expenses and staff payroll. Manage procurement costs and utility bills to get an accurate view of your restaurant's net profit.",
    benefits: ["Daily expense logging", "Staff payroll and tips management", "Supplier payment tracking"],
  },
  {
    id: "8. Customer Loyalty & CRM",
    desc: "Capture customer data and purchase history to build personalized loyalty programs. Offer discounts, points, and special perks to your regulars.",
    benefits: ["Member database management", "Purchase-based reward points", "Automated marketing SMS/Email"],
  },
  {
    id: "9. Multi-Outlet & Franchise Control",
    desc: "Run multiple restaurant branches from a single cloud dashboard. Track sales, inventory, and staff performance for each outlet in real time.",
    benefits: ["Centralized command center", "Outlet-wise comparison reports", "Centralized menu control"],
  },
  {
    id: "10. Restaurant Analytics & BI",
    desc: "Get deep insights into your best-selling items, peak hours, and server performance. Visual dashboards help you optimize operations for maximum growth.",
    benefits: ["Visual sales trends", "Top-selling dish reports", "Hourly and period-wise analytics"],
  },
];

export default function RestaurantDetailsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-5xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Restaurant Management Software</span>
        </nav>

        <div className="space-y-8 text-black">
          <section>
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3 leading-tight">Restaurant Management Software</h1>
            <p className="text-lg md:text-xl font-bold">
              Smart management solution for restaurants including order tracking, kitchen management, billing, and inventory control for single or multiple outlets.
            </p>
          </section>

          <section className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 w-full order-2 lg:order-1 lg:max-h-[500px]">
              <div className="overflow-hidden h-full rounded-xl">
                <Image src="/img/products/point-of-sale/hero.svg" alt="Restaurant Management Visual" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-[var(--secondary)] leading-tight">Streamline Your Dining Success</h2>
              <p className="text-lg leading-relaxed text-black font-medium text-justify">
                The restaurant business moves fast, and you can&apos;t afford to slow down. At ERP17, we provide a specialized Restaurant Management Software that handles everything from the front-of-house to the back-of-house kitchen operations. Our solution is built for speed, accuracy, and operational control - whether you&apos;re running a boutique cafe, a fast-casual chain, or a fine-dining establishment. With cloud-based synchronization and real-time inventory tracking, you can focus on delivering exceptional guest experiences while we handle the technical complexity of your restaurant operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1">
                {[
                  "Order Management",
                  "Kitchen Connectivity",
                  "Inventory Control",
                  "Table Management",
                  "Online Integration",
                  "Staff Payroll",
                  "Customer Loyalty",
                  "Multi-Outlet Sync",
                  "Expense Tracking",
                  "Live BI Dashboards",
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-wide">Why Choose Our Restaurant Solution?</h2>
            <p className="text-lg leading-relaxed text-black font-medium text-justify">
              Our software goes beyond simple billing. It integrates your kitchen (KOT), inventory, and table management into one cohesive system. This reduces order errors, prevents raw material leakage, and speeds up your table turnover rates. With a cloud-first approach, you can sit anywhere in the world and monitor your restaurant&apos;s live sales and performance stats in real time.
              <br />
              <br />
              It&apos;s the ultimate tool for restaurant owners who prioritize efficiency, transparency, and profitability.
            </p>
          </section>

          <section className="space-y-8 pt-4">
            <h2 className="text-3xl font-black text-[var(--secondary)] inline-block">Core Modules & Features</h2>

            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.id} className="space-y-1.5">
                  <h3 className="text-2xl font-black text-[var(--secondary)]">{feature.id}</h3>
                  <p className="text-lg text-black leading-relaxed text-justify">{feature.desc}</p>
                  <p className="font-black uppercase text-[10px] tracking-widest mt-2 opacity-60">Key Benefits:</p>
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
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Flexible Deployment Options</h2>
            <p className="text-lg leading-relaxed text-black text-justify">
              We offer both Cloud-Based and Local Network setups to match your connectivity needs. Our cloud solution ensures you can access data from anywhere, while our local setup ensures the restaurant keeps running even during internet outages.
            </p>
          </section>

          <section className="space-y-3 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Perfect For</h2>
            <p className="text-lg font-medium text-black">Our software is trusted by:</p>
            <div className="space-y-1.5 text-base font-bold text-black">
              {[
                "Fine Dining and Full-service Restaurants",
                "Fast Casual and QSR (Quick Service)",
                "Cafes, Bakeries, and Coffee Shops",
                "Bars, Pubs, and Nightclubs",
                "Food Courts and Franchise Chains",
                "Hotel Dining and Room Service",
              ].map((industry) => (
                <div key={industry} className="flex items-center gap-2.5">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-[10px]" />
                  {industry}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Why ERP17?</h2>
            <ul className="space-y-1.5">
              {[
                "User-Friendly Interface - staff can learn in minutes",
                "Scalable - from a single cafe to 100+ branches",
                "Hardware Compatibility - works with all POS hardware",
                "English & Bangla menu support available",
                "On-ground training & 24/7 dedicated support",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-lg font-bold text-black">
                  <FaCheck className="text-[var(--primary)] flex-shrink-0 text-xs" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-1.5 pt-6">
            <h3 className="text-2xl font-black text-[var(--secondary)]">Customer Success Story</h3>
            <p className="text-lg text-black leading-relaxed text-justify">
              &quot;By implementing the Restaurant Management Solution from ERP17, we reduced our KOT delivery time by 40% and eliminated menu errors completely. The inventory management module alone saved us thousands by reducing food wastage.&quot;
            </p>
            <p className="text-sm font-bold opacity-60">- Operations Head, National Food Chain</p>
          </section>

          <section className="space-y-2 pt-8">
            <h2 className="text-3xl font-black text-[var(--secondary)] uppercase tracking-tight">Ready to Serve Better?</h2>
            <p className="text-lg font-medium text-black">Empower your restaurant with the most intuitive management system on the market.</p>
            <p className="text-lg font-medium text-black">Contact ERP17 today for a free demo or consultation.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
