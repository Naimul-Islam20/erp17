import { Users } from "lucide-react";
import ProductDetailsLayout from "@/components/products/ProductDetailsLayout";

export const metadata = {
  title: "CRM Software Solution | ERP17",
  description:
    "Smart Client Relationship Management (CRM) solution to manage leads, automate sales, track customer interactions, and boost conversions.",
};

const features = [
  {
    id: "1. Lead Management",
    desc: "Capture, organize, and track leads from multiple sources like websites, social media, email campaigns, and phone calls. Assign leads automatically to your sales team based on custom rules or territories.",
    benefits: ["Centralized lead database", "Auto-assignment rules", "Lead prioritization and scoring", "Faster response time"],
  },
  {
    id: "2. Sales Pipeline Tracking",
    desc: "Visualize your entire sales funnel in real-time. Move leads through stages such as New, Contacted, Qualified, Proposal Sent, and Closed - with drag-and-drop simplicity.",
    benefits: ["Clear sales pipeline visibility", "Real-time progress tracking", "Forecasting and revenue prediction", "Identify bottlenecks instantly"],
  },
  {
    id: "3. Client Database Management",
    desc: "Maintain a comprehensive client profile including contact details, communication history, past transactions, preferences, and notes - accessible to your team at any time.",
    benefits: ["Better customer understanding", "Personalized service and follow-ups", "Improved customer retention", "Easy data retrieval for support/sales"],
  },
  {
    id: "4. Task & Activity Scheduling",
    desc: "Assign tasks, set reminders, log calls, schedule meetings, and follow-ups within the CRM. Keep your sales and support teams productive and on-track.",
    benefits: ["No missed follow-ups", "Improved team coordination", "Daily/weekly agenda views", "Email & push notifications"],
  },
  {
    id: "5. Communication & Email Integration",
    desc: "Send, receive, and track emails directly from the CRM. Use predefined email templates, schedule bulk messages, and monitor open rates and click-throughs.",
    benefits: ["Seamless email marketing", "Auto-log of communication history", "Campaign performance tracking", "Improve client engagement"],
  },
  {
    id: "6. Quotation & Invoice Management",
    desc: "Create professional quotations and invoices in seconds. Track the status of quotes, get approvals, and convert them into invoices effortlessly.",
    benefits: ["Faster deal closure", "Templates for branding", "Automatic status updates", "Integrated with accounts module"],
  },
  {
    id: "7. Reports & Analytics",
    desc: "Access real-time reports on leads, deals, team performance, revenue, conversion rates, and customer activity. Make smarter business decisions with powerful dashboards.",
    benefits: ["Custom report builder", "Export to Excel or PDF", "KPIs and goal tracking", "Sales trend visualization"],
  },
  {
    id: "8. User Role & Permission Control",
    desc: "Assign specific roles and access levels to team members. Ensure that sensitive customer data is only accessible by authorized users.",
    benefits: ["Enhanced data privacy", "Controlled team collaboration", "Compliance-ready structure", "Admin-level visibility"],
  },
  {
    id: "9. Mobile CRM Access",
    desc: "Access your Client Relationship Management (CRM) on the go with mobile-friendly views or native app support. Let your sales team update leads or close deals while in the field.",
    benefits: ["Anytime, anywhere access", "Mobile notifications", "Offline data sync", "Faster field operations"],
  },
  {
    id: "10. Third-Party Integrations",
    desc: "Integrate with email platforms, accounting software, messaging tools, and social media to bring all customer touchpoints into one platform.",
    benefits: ["Seamless workflow automation", "Reduce data silos", "Centralized communication", "Extend CRM functionality"],
  },
];

export default function CRMDetailsPage() {
  return (
    <ProductDetailsLayout
      breadcrumb="Client Relationship Management (CRM)"
      title="Client Relationship Management (CRM)"
      heroDescription="Smart Client Relationship Management (CRM) solution to manage leads, automate sales, track customer interactions, and boost conversions with real-time analytics and reporting."
      introIcon={Users}
      introImage="/img/products/crm-hero.jpg"
      introImageAlt="Client Relationship Management (CRM) Software"
      introTitle="Turn Leads into Lasting Customer Relationships"
      introText="In today's competitive market, nurturing client relationships is the key to sustainable business growth. At ERP17, we've developed an advanced Client Relationship Management (CRM) Software that helps you manage leads, automate sales processes, and deliver personalized experiences - all from a single platform. Whether you're a startup or an enterprise, our CRM adapts to your unique workflow and scales with your business."
      highlights={["Lead Management","Sales Pipeline Tracking","Client Management","Activity Scheduling","Email Integration","Quotation & Invoicing","Reports & Analytics","User Role & Permission","Mobile CRM Access","API Integrations"]}
      whyChoose={{
        title: "What Is a CRM System?",
        paragraphs: ["Managing leads and customers manually through spreadsheets or disconnected tools can result in lost opportunities, miscommunication, and poor client retention. Our Client Resource Management (CRM) system solves these challenges by offering a centralized, automated, and intelligent solution that streamlines customer interactions, improves team productivity, and enhances decision-making through real-time insights.\n              \n\n              \n\n              A CRM is no longer a luxury - it's a necessity for businesses that want to stay ahead."],
      }}
      features={features}
      showDeployment={false}
      industries={{
        title: "Suitable for All Industries",
        
        items: ["Automotive Sales & Service","Real Estate Agencies","Educational Institutions","eCommerce Businesses","Finance & Investment Firms","IT and Digital Agencies","Healthcare & Clinics","Manufacturing & Distribution"],
      }}
      trust={{
        title: "Why Choose ERP17?",
        items: ["Intuitive User Interface","Affordable Pricing with Flexible Packages","Scalable for Small to Large Teams","Bangla & English Language Support","Expert Training & Ongoing Support","Integration with HRM, Accounts, POS, and ERP Modules"],
        footer: "Whether you need a lightweight CRM to track leads or a full-fledged system to run your customer operations, our solution grows with your business - without the technical burden.",
      }}
      security={{
        title: "Security You Can Trust",
        text: "Your customer data is your most valuable asset - and we protect it with enterprise-grade security. Our CRM platform includes data encryption, secure logins, daily backups, and role-based access control to keep your information safe.",
      }}
      extraSections={[]}
/>
  );
}
