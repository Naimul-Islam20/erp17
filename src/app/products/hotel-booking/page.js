import { Hotel } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

export const metadata = {
  title: "Hotel Booking Management Software | ERP17",
  description:
    "Complete hotel and resort booking software for reservations, room inventory, front desk operations, billing, guest management, and revenue analytics.",
};

const features = [
  {
    id: "1. Reservation & Booking Engine",
    desc: "Manage direct, OTA, phone, and walk-in bookings from one unified dashboard. Prevent overbooking with real-time room availability and instant status sync.",
    benefits: ["Centralized booking calendar", "Real-time availability updates", "No double-booking conflicts"],
  },
  {
    id: "2. Front Desk Operations",
    desc: "Handle check-in, check-out, room upgrades, extensions, and guest requests quickly through a front-desk optimized interface.",
    benefits: ["Faster check-in/out flow", "Live room status updates", "Reduced manual entry errors"],
  },
  {
    id: "3. Room & Inventory Management",
    desc: "Control room categories, rates, occupancy, housekeeping status, and maintenance blocks from one place.",
    benefits: ["Room-type wise pricing", "Housekeeping and maintenance tracking", "Optimized room utilization"],
  },
  {
    id: "4. Dynamic Pricing & Revenue Control",
    desc: "Set seasonal rates, weekend pricing, event-based surcharges, and promotional discounts to maximize occupancy and revenue.",
    benefits: ["Flexible pricing rules", "Higher RevPAR potential", "Automated rate updates"],
  },
  {
    id: "5. Guest Profile & CRM",
    desc: "Build detailed guest profiles including stay history, preferences, and special requests for personalized service.",
    benefits: ["Personalized guest experience", "Repeat guest tracking", "Improved retention and satisfaction"],
  },
  {
    id: "6. Billing, Folio & Payments",
    desc: "Generate guest folios with room charges, food bills, services, taxes, and discounts. Support split payments and multiple payment channels.",
    benefits: ["Accurate guest billing", "Multi-mode payment support", "Faster settlement at checkout"],
  },
  {
    id: "7. Housekeeping & Task Assignment",
    desc: "Assign cleaning and room readiness tasks to housekeeping teams with live status visibility.",
    benefits: ["Faster room turnover", "Task-level accountability", "Real-time housekeeping dashboard"],
  },
  {
    id: "8. Multi-Property Management",
    desc: "Operate multiple hotels, resorts, or properties from one cloud platform while keeping branch-level controls.",
    benefits: ["Centralized command panel", "Property-wise comparison reports", "Standardized operations"],
  },
  {
    id: "9. Reports & Business Analytics",
    desc: "Get occupancy, ADR, RevPAR, booking source, cancellation trend, and revenue analytics in real time.",
    benefits: ["Data-driven pricing decisions", "Performance tracking by period", "Exportable audit-ready reports"],
  },
  {
    id: "10. Security & Access Control",
    desc: "Secure sensitive guest and financial data through role-based permissions, audit logs, and encrypted cloud storage.",
    benefits: ["Controlled staff access", "Improved compliance posture", "Reliable data protection"],
  },
];

export default function HotelBookingDetailsPage() {
  return (
    <ProductDetailsLayout
      breadcrumb="Hotel Booking Management Software"
      title="Hotel Booking Management Software"
      heroDescription="Complete hotel and resort booking software for reservations, room inventory, front desk operations, billing, guest management, and revenue analytics."
      introIcon={Hotel}
      introImage="/img/products/hotel-hero.jpg"
      introImageAlt="Run Hospitality Operations with Confidence"
      introTitle="Run Hospitality Operations with Confidence"
      introText="ERP17 provides an intelligent Hotel Booking Management platform designed for hotels, resorts, serviced apartments, and guest houses. From booking confirmation to final checkout, every guest touchpoint is digitized for speed, accuracy, and better service quality. Our cloud-based system helps you reduce operational friction, improve occupancy planning, and grow revenue with real-time business visibility."
      highlights={["Reservation Control","Front Desk Management","Room Inventory","Dynamic Pricing","Guest CRM","Folio & Billing","Housekeeping Tasks","Multi-Property Access","Live Analytics","Secure Role Control"]}
      whyChoose={{
        title: "Why Choose Our Hotel Booking Solution?",
        paragraphs: ["Hospitality businesses need precision, speed, and guest-first workflows. Our platform combines reservation, room management, billing, and reporting in one ecosystem so your team can focus more on service and less on manual coordination.\n              \n\n              \n\n              It helps reduce booking errors, improves operational visibility, and enables better decision-making across every property."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: ["Hotels and resorts","Boutique properties and guest houses","Serviced apartments","Business and transit hotels","Multi-property hospitality groups","Hostels and lodging chains"],
      }}
      trust={{
        title: "Why ERP17?",
        items: ["Hospitality-ready UI for front desk teams","Scalable for single to multi-property operations","Bangla and English support available","Seamless integration with POS, Accounts, and ERP workflows","Dedicated onboarding and support team"],
      }}
      security={{
        title: "Security & Compliance",
        text: "We secure reservation and guest data with role-based controls, encrypted storage, activity logs, and reliable backups to support operational continuity and compliance.",
      }}
      extraSections={[]}
/>
  );
}
