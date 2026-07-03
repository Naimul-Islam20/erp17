import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Notifications | ERP17",
  description: "Mail and pop-up notifications for leave, payroll, attendance, and more.",
};

const notificationSections = [
  {
    heading: "Mail Notifications",
    subText:
      "Keep employees informed with ERP17 mail notifications sent directly to their inbox.",
    list: [
      "Notifications for leave applications, payslips, visits, daily attendance, claims, and more.",
      "Ensure every employee receives timely updates without manual follow-ups.",
      "Admins can customize which notifications are sent to whom.",
    ],
    img: "/img/products/notifications/N2.png",
    imgRight: false,
  },
  {
    heading: "Pop-up Notifications",
    subText:
      "Instant alerts on mobile devices help employees stay updated in real-time.",
    list: [
      "Pop-up notifications appear immediately when applications are submitted.",
      "One-click navigation takes employees directly to the relevant app section.",
      "Applications like leave, notices, visit, and remote attendance are displayed instantly.",
    ],
    img: "/img/products/notifications/N3.png",
    imgRight: true,
  },
];

export default function NotificationsPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Notifications"
      title="Instant Alerts & Real-time Updates"
      heroDescription="Keep your workforce informed with seamless mail and pop-up notifications. ERP17 ensures timely updates for leave, payroll, and more, improving communication across your organization."
      heroImage="/img/products/notifications.png"
      heroImageAlt="ERP17 Notifications"
      sections={notificationSections}
    />
  );
}
