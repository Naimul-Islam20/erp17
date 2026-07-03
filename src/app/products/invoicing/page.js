import { FileText } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

export const metadata = {
  title: "Invoicing Management Software | ERP17",
  description:
    "Smart invoicing solution for quotation, billing, tax handling, payment collection, receivable tracking, and financial reporting with complete automation.",
};

const features = [
  {
    id: "1. Quotation to Invoice Workflow",
    desc: "Create professional quotations and convert approved quotes into invoices instantly. Keep item details, tax rules, and discounts consistent without re-entry.",
    benefits: ["Faster quote-to-cash cycle", "Reduced manual billing errors", "Version-controlled quotation history"],
  },
  {
    id: "2. Smart Invoice Generation",
    desc: "Generate branded invoices with customer info, itemized lines, tax calculations, and payment terms in seconds.",
    benefits: ["Professional invoice templates", "One-click invoice generation", "Custom numbering and branding"],
  },
  {
    id: "3. Tax & Compliance Handling",
    desc: "Configure VAT/GST and local tax rules per item or service type. Ensure every invoice follows compliance-ready formats.",
    benefits: ["Accurate tax calculation", "Compliance-ready documentation", "Easy audit support"],
  },
  {
    id: "4. Payment Tracking & Collection",
    desc: "Track full, partial, and overdue payments in real time. Monitor collection status and reduce receivable delays with smart reminders.",
    benefits: ["Real-time payment updates", "Partial payment support", "Automated collection follow-ups"],
  },
  {
    id: "5. Credit Notes & Adjustments",
    desc: "Issue credit notes, debit notes, and invoice adjustments linked directly to original billing documents.",
    benefits: ["Structured return/refund handling", "Accurate customer balance updates", "Transparent adjustment logs"],
  },
  {
    id: "6. Customer Statement Management",
    desc: "Generate customer-wise account statements including open, overdue, and settled transactions.",
    benefits: ["Clear receivable visibility", "Improved customer communication", "Faster settlement reconciliation"],
  },
  {
    id: "7. Recurring Invoicing",
    desc: "Automate recurring invoices for subscriptions, retainers, and service contracts with configurable frequency.",
    benefits: ["No missed recurring bills", "Consistent monthly cash flow", "Reduced repetitive work"],
  },
  {
    id: "8. Multi-Currency & Multi-Branch Billing",
    desc: "Manage invoicing across multiple currencies and branches from one platform with branch-wise controls.",
    benefits: ["Branch-level invoice management", "Currency-wise reporting", "Centralized billing governance"],
  },
  {
    id: "9. Invoicing Analytics & Reports",
    desc: "Access invoice aging, collection trends, tax summaries, and billing performance insights from live dashboards.",
    benefits: ["Collection performance insights", "Better cash flow planning", "Exportable reports (PDF/Excel)"],
  },
  {
    id: "10. Integration with ERP & Accounts",
    desc: "Sync invoices, payments, and receivables directly with Accounts, Inventory, and CRM for seamless end-to-end operations.",
    benefits: ["Unified financial workflow", "No duplicate data entry", "Real-time accounting alignment"],
  },
];

export default function UinvoicingDetailsPage() {
  return (
    <ProductDetailsLayout
      breadcrumb="Invoicing Management Software"
      title="Invoicing Management Software"
      heroDescription="Smart invoicing solution for quotation, billing, tax handling, payment collection, receivable tracking, and financial reporting with complete automation."
      introIcon={FileText}
      introImage="/img/products/invoicing-hero.jpg"
      introImageAlt="Accelerate Billing and Improve Collections"
      introTitle="Accelerate Billing and Improve Collections"
      introText="ERP17 Invoicing platform helps businesses simplify the full billing lifecycle - from quotation to collection. Our system ensures every invoice is accurate, tax-compliant, and payment-trackable while reducing manual work and delays. Whether you are a service company, distributor, or multi-branch enterprise, this solution gives you complete billing control and better receivable management."
      highlights={["Quote to Invoice","Smart Billing","Tax Automation","Payment Tracking","Credit Notes","Customer Statements","Recurring Billing","Multi-Branch Billing","Invoice Analytics","ERP Integration"]}
      whyChoose={{
        title: "Why Choose Our Invoicing Solution?",
        paragraphs: ["Manual invoicing and disconnected payment tracking often lead to delays, errors, and cash flow pressure. Our invoicing software centralizes billing, receivable monitoring, and tax calculations in one system.\n              \n\n              \n\n              This gives your finance and operations teams better visibility, faster collections, and cleaner records for reporting and compliance."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: ["Service and consulting firms","Wholesale and distribution companies","Retail and eCommerce businesses","Subscription-based businesses","Manufacturing operations","Multi-branch organizations"],
      }}
      trust={{
        title: "Why ERP17?",
        items: ["Simple and fast billing interface","Flexible for small to enterprise operations","Bangla and English support available","Seamless Accounts, ERP, and CRM integration","Dedicated onboarding and support team"],
      }}
      security={{
        title: "Security & Compliance",
        text: "We secure invoice and payment data with role-based access controls, encrypted storage, detailed logs, and reliable backups to support compliance and audit readiness.",
      }}
      extraSections={[]}
/>
  );
}
