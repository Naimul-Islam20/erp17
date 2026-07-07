import { Package } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

export const metadata = {
  title: "Inventory Management Software | ERP17",
  description:
    "Advanced inventory software for stock tracking, multi-warehouse control, batch management, reorder automation, and real-time inventory analytics.",
};

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

export default function InventoryDetailsPage() {
  return (
    <ProductDetailsLayout
      breadcrumb="Inventory Management Software"
      title="Inventory Management Software"
      heroDescription="Advanced inventory software for stock tracking, multi-warehouse control, batch management, reorder automation, and real-time inventory analytics."
      introIcon={Package}
      introImage="/img/products/inventory-hero.jpg"
      introImageAlt="Inventory Management Software"
      introTitle="Track Stock Smarter, Cut Costs Faster"
      introText="Managing stock manually across multiple locations can lead to overstocking, stockouts, losses, and delayed deliveries. At ERP17, our Inventory Management Software helps businesses gain complete control over inventory movement, valuation, and replenishment from one powerful system. From purchase to warehouse to sales, every stock transaction is tracked in real time so your business can run smoothly, reduce costs, and improve profitability."
      highlights={["Real-Time Stock Tracking","Multi-Warehouse Control","Batch and Serial Tracking","Low-Stock Alerts","Reorder Automation","Barcode and QR Support","Supplier Management","Stock Valuation","Demand Forecasting","ERP Integration"]}
      whyChoose={{
        title: "Why Choose Our Inventory Solution?",
        paragraphs: [
          "Our inventory platform gives you a centralized, accurate, and automation-driven way to handle stock across your entire organization. Whether you run retail stores, warehouses, distribution channels, or manufacturing units, our system keeps inventory synchronized in real time and minimizes human error.",
          "From procurement planning to stock dispatch, every workflow becomes faster and smarter.",
        ],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Business Types",
        subtitle: "Our inventory system is perfect for:",
        items: ["Retail and wholesale businesses","Distributors and supply chain companies","Manufacturing industries","Pharmaceutical and healthcare suppliers","eCommerce and omni-channel sellers","Super shops and chain stores"],
      }}
      trust={{
        title: "Why Businesses Choose ERP17",
        items: ["Simple and user-friendly interface","Fast implementation with training support","Scalable for small to enterprise-level operations","Cloud and on-premise deployment options","Seamless integration with POS, Accounts, and ERP","Reliable support from expert teams"],
      }}
      security={{
        title: "Inventory Security and Accuracy",
        text: "Protect your stock data with role-based permissions, transaction-level logs, and complete audit trails. Every stock movement is recorded with date, time, and user details, ensuring accountability and reducing inventory fraud or manipulation risks.",
      }}
      extraSections={[]}
/>
  );
}
