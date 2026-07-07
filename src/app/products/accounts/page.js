import { Wallet } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

export const metadata = {
  title: "Account Management Software | ERP17",
  description:
    "Powerful accounting software for managing invoices, expenses, billing, payments, financial reports, and budgeting with accuracy and automation.",
};

const features = [
  {
    id: "1. Comprehensive Ledger Management",
    desc: "Maintain an organized, digital ledger of all your business's financial transactions. Effortlessly track debits, credits, journal entries, and balances for every account.",
    benefits: ["Automated double-entry bookkeeping", "Easy reconciliation and error detection", "Quick access to all account histories"],
  },
  {
    id: "2. Invoicing and Billing",
    desc: "Create professional invoices and bills in seconds. Customize templates with your branding, set recurring invoices, and automate payment reminders to improve your cash flow.",
    benefits: ["Faster billing and payments", "Reduce late payments with reminders", "GST/VAT and discount integration"],
  },
  {
    id: "3. Expense & Income Tracking",
    desc: "Record and categorize all expenses and income with just a few clicks. Get detailed breakdowns and visual reports to see exactly where your money is going.",
    benefits: ["Clear financial visibility", "Budget control and forecasting", "Prevents overspending"],
  },
  {
    id: "4. Bank Reconciliation",
    desc: "Easily reconcile your bank statements with system records. Identify discrepancies, match transactions, and ensure your books are always accurate and up to date.",
    benefits: ["Saves hours of manual checking", "Reduces errors and fraud risk", "Simple matching interface"],
  },
  {
    id: "5. Multi-Currency Support",
    desc: "Transact and report in multiple currencies-ideal for businesses dealing with global clients and suppliers.",
    benefits: ["Real-time currency conversion", "Supports international business", "Accurate reporting for all regions"],
  },
  {
    id: "6. Tax Management",
    desc: "Automate tax calculations and prepare returns for VAT, GST, or local taxes. Stay compliant with changing regulations and never miss a tax deadline.",
    benefits: ["Automated tax calculation", "Tax report generation", "Avoid costly penalties"],
  },
  {
    id: "7. Financial Reporting & Analytics",
    desc: "Access a wide range of real-time reports, including balance sheets, profit and loss statements, cash flow analysis, and custom analytics. Visual dashboards make data interpretation easy for everyone.",
    benefits: ["Informed decision-making", "Audit-ready statements", "Export to Excel, PDF, etc."],
  },
  {
    id: "8. Integrated Payment Solutions",
    desc: "Receive and record payments through multiple channels-bank transfer, cash, cheque, or digital wallet. Seamless integration with payment gateways improves collection efficiency.",
    benefits: ["Instant payment updates", "Fewer manual entries", "Better cash management"],
  },
  {
    id: "9. Role-Based User Access",
    desc: "Assign roles and set permissions for team members. Keep sensitive financial data secure and ensure accountability with audit logs.",
    benefits: ["Enhanced data privacy", "Prevent unauthorized access", "Track changes and user activity"],
  },
  {
    id: "10. Mobile & Cloud Access",
    desc: "Access your accounting system from anywhere, at any time, using your mobile device or desktop. Enjoy automatic updates and data backups with robust cloud hosting.",
    benefits: ["Work remotely and collaborate", "Automatic software upgrades", "Safe, encrypted cloud storage"],
  },
];

export default function UaccountsDetailsPage() {
  return (
    <ProductDetailsLayout
      breadcrumb="Account Management Software"
      title="Account Management Software"
      heroDescription="Powerful accounting software for managing invoices, expenses, billing, payments, financial reports, and budgeting with accuracy and automation."
      introIcon={Wallet}
      introImage="/img/products/accounts-hero.jpg"
      introImageAlt="Account Management Software"
      introTitle="Simplify Finances, Strengthen Business Control"
      introText="Managing your company's finances doesn't have to be complicated or time-consuming. At ERP17, we empower businesses with a modern, intuitive Account Management Software that streamlines financial operations, automates complex accounting processes, and delivers real-time insights for smarter decision-making. Designed for businesses of any size, our software is your all-in-one solution for financial management, compliance, and growth."
      highlights={["Ledger Management","Invoicing and Billing","Expense & Income","Bank Reconciliation","Multi-Currency","Tax Management","Reporting & Analytics","Integrated Payment","Role-Based User","Mobile Access"]}
      whyChoose={{
        title: "Why Choose Our Account Management Software?",
        paragraphs: ["Traditional manual accounting is often slow, error-prone, and resource-intensive. Our Account Management Software is built to simplify bookkeeping, boost productivity, and ensure compliance with regulatory requirements. It's cloud-based, secure, and easy to use-giving you and your team confidence in your financial data at all times.\n              \n\n              \n\n              From daily transactions to annual audits, our solution makes accounting efficient, transparent, and reliable."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: ["SMEs and large enterprises","Retailers and wholesalers","Service providers","Manufacturers","Non-profits and associations","Educational institutions"],
      }}
      trust={{
        title: "Why Businesses Prefer Us",
        items: ["User-friendly Interface: Minimal training required","Customization: Adaptable to unique workflows","Local Language Support: English and Bangla available","Seamless Integration: Works with ERP, CRM, HRM, and POS","Dedicated Support: 24/7 assistance from our expert team","Affordable Pricing: Flexible plans for every budget"],
      }}
      security={{
        title: "Data Security and Compliance",
        text: "Our Account Management Software employs the latest security protocols including SSL encryption, multi-factor authentication, and regular backups. Stay compliant with industry standards and local regulations, ensuring your financial data is always safe and protected.",
      }}
      extraSections={[]}
/>
  );
}
