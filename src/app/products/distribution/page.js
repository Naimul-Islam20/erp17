import { Truck } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

export const metadata = {
  title: "Distribution Management Software | ERP17",
  description:
    "End-to-end distribution software for warehouse control, route planning, dealer management, stock transfer, delivery tracking, and channel analytics.",
};

const features = [
  {
    id: "1. Dealer & Channel Management",
    desc: "Manage distributors, dealers, retailers, and channel partners from one centralized platform. Configure pricing tiers, territory rules, and credit policies per partner.",
    benefits: ["Dealer-wise pricing and limits", "Territory and channel segmentation", "Improved partner visibility"],
  },
  {
    id: "2. Stock Transfer & Replenishment",
    desc: "Move inventory across warehouses, depots, and branch points with real-time tracking. Automate replenishment triggers based on stock movement and demand.",
    benefits: ["Real-time transfer status", "Auto replenishment workflow", "Reduced stock-out risk"],
  },
  {
    id: "3. Warehouse Operations",
    desc: "Handle goods receive, put-away, picking, dispatch, and returns with clear transaction logs and operational traceability.",
    benefits: ["Faster warehouse throughput", "Accurate inward/outward records", "Reduced operational errors"],
  },
  {
    id: "4. Route Planning & Delivery Scheduling",
    desc: "Optimize delivery routes for vans and field teams using route planning tools. Schedule deliveries by time slot, area, and vehicle capacity.",
    benefits: ["Lower delivery cost", "Better route efficiency", "On-time distribution performance"],
  },
  {
    id: "5. Proof of Delivery (POD)",
    desc: "Capture delivery confirmation via signature, OTP, or digital acknowledgment. Keep delivery proof records linked with invoices and dispatch notes.",
    benefits: ["Delivery dispute reduction", "Verified handover records", "Complete dispatch audit trail"],
  },
  {
    id: "6. Batch, Expiry & Lot Tracking",
    desc: "Track products by batch or lot with expiry visibility for regulated and FMCG industries. Ensure first-expiry-first-out (FEFO) compliance where needed.",
    benefits: ["Batch-level traceability", "Expiry risk control", "Compliance support for regulated goods"],
  },
  {
    id: "7. Mobile Distribution App",
    desc: "Enable field sales and delivery teams with mobile access for order capture, stock updates, payment collection, and live reporting.",
    benefits: ["Field productivity boost", "Real-time order sync", "Instant visibility from the ground"],
  },
  {
    id: "8. Returns & Reverse Logistics",
    desc: "Manage return flows for damaged, expired, or unsold goods. Track reverse movement and credit adjustments with clear approval processes.",
    benefits: ["Structured return workflow", "Faster credit note processing", "Reduced reconciliation delays"],
  },
  {
    id: "9. Billing, Collections & Credit Control",
    desc: "Generate invoices, track receivables, and monitor overdue balances by dealer or route. Strengthen cash flow with better collection discipline.",
    benefits: ["Dealer-wise outstanding control", "Automated due tracking", "Improved collection efficiency"],
  },
  {
    id: "10. Distribution Analytics & BI",
    desc: "Get actionable insights on route performance, SKU movement, fill rates, dealer sales, and delivery turnaround from real-time dashboards.",
    benefits: ["Channel-wise performance insights", "Data-driven inventory decisions", "Exportable management reports"],
  },
];

export default function UdistributionDetailsPage() {
  return (
    <ProductDetailsLayout
      breadcrumb="Distribution Management Software"
      title="Distribution Management Software"
      heroDescription="End-to-end distribution software for warehouse control, route planning, dealer management, stock transfer, delivery tracking, and channel analytics."
      introIcon={Truck}
      introImage="/img/products/distribution-hero.jpg"
      introImageAlt="Control Your Supply Chain from Depot to Dealer"
      introTitle="Control Your Supply Chain from Depot to Dealer"
      introText="ERP17 Distribution Management Software helps businesses streamline product flow across warehouses, routes, and channels. Whether you manage FMCG, pharmaceuticals, wholesale, or multi-branch distribution, our system ensures stock visibility, delivery efficiency, and stronger channel control. Reduce manual coordination, prevent leakage, and improve cash recovery with one integrated platform."
      highlights={["Dealer Management","Stock Transfer","Warehouse Ops","Route Planning","POD Tracking","Batch & Expiry","Mobile Distribution","Reverse Logistics","Credit Control","Live Analytics"]}
      whyChoose={{
        title: "Why Choose Our Distribution Solution?",
        paragraphs: ["Distribution businesses often struggle with fragmented systems, delayed stock updates, and weak route-level visibility. Our platform unifies inventory, delivery, partner billing, and collections into one connected workflow.\n              \n\n              \n\n              This helps teams reduce operational delays, improve service levels, and scale distribution confidently."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: ["FMCG and consumer goods distributors","Pharmaceutical and healthcare distribution","Food and beverage supply networks","Electronics and hardware distributors","Wholesale and trade channels","Multi-warehouse logistics businesses"],
      }}
      trust={{
        title: "Why ERP17?",
        items: ["Built for real-world distribution complexity","Scalable across territories and channels","Bangla and English support available","Integrated with ERP, Accounts, POS, and CRM modules","Dedicated onboarding and support team"],
      }}
      security={{
        title: "Security & Reliability",
        text: "Our distribution platform uses secure access controls, role-based permissions, complete transaction logs, and cloud backups to protect mission-critical supply chain data.",
      }}
      extraSections={[]}
/>
  );
}
