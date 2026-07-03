import { CreditCard } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

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
    <ProductDetailsLayout
      breadcrumb="Point of Sale Software (POS)"
      title="Point of Sale Software (POS)"
      heroDescription="User-friendly Point of sale system for managing sales, inventory, billing, customer data, and payments seamlessly across any retail shop or restaurant businesses."
      introIcon={CreditCard}
      introImage="/img/products/pos-hero.jpg"
      introImageAlt="Point of Sale (POS) Software"
      introTitle="Point of Sale (POS) Software"
      introText="In today's fast-paced retail and service environment, you need more than just a cash register to stay ahead. You need a smart, intuitive, and reliable Point of Sale (POS) system that can handle every aspect of your business - from sales and inventory to billing, reporting, and customer management. At ERP17, we offer a modern, feature-rich POS Software that helps you run your store efficiently, serve customers faster, and make data-driven decisions. Whether you run a retail shop, restaurant, pharmacy, or service center, our POS software is designed to simplify operations and maximize your profits."
      highlights={["Fast and accurate billing","Customizable invoice formats","Multiple payment options (cash, card, digital wallets)"]}
      whyChoose={{
        title: "What Is a POS System?",
        paragraphs: ["A Point of Sale (POS) system is the place where your customers make payments for products or services. But modern POS systems do much more than process sales. They manage inventory, customer data, employees, finances, and generate reports - all in real time.\n              \n\n              \n\n              Our POS software is built to be fast, reliable, secure, and adaptable for businesses of any type."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: [],
      }}
      trust={{
        title: "Why Choose ERP17?",
        items: ["Easy to use - minimal training required","Affordable pricing - fits all budgets","Custom modules and localization (Bangla & English)","Fast customer support and training","Seamless integration with our ERP, CRM, and Accounting modules"],
      }}
      security={{
        title: "Security & Data Protection",
        text: "We prioritize your business security. Our POS system includes role-based access, data encryption, automatic backups, and user audit trails to ensure your information stays secure and confidential.",
      }}
      extraSections={[]}
/>
  );
}
