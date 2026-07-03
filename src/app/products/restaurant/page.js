import { UtensilsCrossed } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

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
    <ProductDetailsLayout
      breadcrumb="Restaurant Management Software"
      title="Restaurant Management Software"
      heroDescription="Smart management solution for restaurants including order tracking, kitchen management, billing, and inventory control for single or multiple outlets."
      introIcon={UtensilsCrossed}
      introImage="/img/products/restaurant-hero.jpg"
      introImageAlt="Streamline Your Dining Success"
      introTitle="Streamline Your Dining Success"
      introText="The restaurant business moves fast, and you can't afford to slow down. At ERP17, we provide a specialized Restaurant Management Software that handles everything from the front-of-house to the back-of-house kitchen operations. Our solution is built for speed, accuracy, and operational control - whether you're running a boutique cafe, a fast-casual chain, or a fine-dining establishment. With cloud-based synchronization and real-time inventory tracking, you can focus on delivering exceptional guest experiences while we handle the technical complexity of your restaurant operations."
      highlights={["Order Management","Kitchen Connectivity","Inventory Control","Table Management","Online Integration","Staff Payroll","Customer Loyalty","Multi-Outlet Sync","Expense Tracking","Live BI Dashboards"]}
      whyChoose={{
        title: "Why Choose Our Restaurant Solution?",
        paragraphs: [
          "Our software goes beyond simple billing. It integrates your kitchen (KOT), inventory, and table management into one cohesive system. This reduces order errors, prevents raw material leakage, and speeds up your table turnover rates. With a cloud-first approach, you can sit anywhere in the world and monitor your restaurant's live sales and performance stats in real time.",
          "It's the ultimate tool for restaurant owners who prioritize efficiency, transparency, and profitability.",
        ],
      }}
      features={features}
      showDeployment={true}
      industries={{
        title: "Perfect For",
        subtitle: "Our software is trusted by:",
        items: ["Fine Dining and Full-service Restaurants","Fast Casual and QSR (Quick Service)","Cafes, Bakeries, and Coffee Shops","Bars, Pubs, and Nightclubs","Food Courts and Franchise Chains","Hotel Dining and Room Service"],
      }}
      trust={{
        title: "Why ERP17?",
        items: ["User-Friendly Interface - staff can learn in minutes","Scalable - from a single cafe to 100+ branches","Hardware Compatibility - works with all POS hardware","English & Bangla menu support available","On-ground training & 24/7 dedicated support"],
      }}
      extraSections={[]}
/>
  );
}
