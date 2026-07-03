import { ShoppingCart } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

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
    <ProductDetailsLayout
      breadcrumb="eCommerce Management Software"
      title="eCommerce Management Software"
      heroDescription="Complete eCommerce solution for product catalog, order management, payment integration, inventory sync, marketing tools, and customer experience optimization."
      introIcon={ShoppingCart}
      introImage="/img/products/ecommerce-hero.jpg"
      introImageAlt="Grow Faster with Smart eCommerce Operations"
      introTitle="Grow Faster with Smart eCommerce Operations"
      introText="At ERP17, our eCommerce Management Software helps you manage your complete online business from one powerful dashboard. From product listing and checkout to logistics, payments, and customer retention, every part of your workflow becomes faster, more accurate, and easier to scale. Whether you operate a single online shop or a multi-store brand, our cloud-ready system gives you complete control and visibility in real time."
      highlights={["Product Catalog","Smart Checkout","Order Fulfillment","Inventory Sync","Payment Integration","Customer CRM","Marketing Automation","Multi-Store Control","Live Analytics","Secure Cloud Platform"]}
      whyChoose={{
        title: "Why Choose Our eCommerce Solution?",
        paragraphs: ["Managing eCommerce with disconnected tools leads to delays, overselling, payment mismatches, and poor customer experience. Our software unifies storefront, order, inventory, and finance into one ecosystem, helping your team work smarter and respond faster.\n              \n\n              \n\n              The result is lower operational cost, higher conversion, and better long-term customer loyalty."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Ideal for All Industries",
        
        items: [],
      }}
      trust={{
        title: "Why ERP17?",
        items: ["Easy to use and quick to deploy","Scalable for startups to enterprises","Bangla & English support available","Seamless ERP, CRM, POS, and Accounts integration","Dedicated implementation and support team"],
      }}
      security={{
        title: "Security & Reliability",
        text: "We follow enterprise-level security practices including encrypted transactions, secure user access, audit logs, and regular backups to ensure your business and customer data remain protected at all times.",
      }}
      extraSections={[]}
/>
  );
}
