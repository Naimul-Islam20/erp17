import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Attendance Management | ERP17",
  description:
    "Cloud-based attendance software with real-time monitoring, geo-fencing, and biometric integration.",
};

const sections = [
  {
    heading: "Employee Time & Attendance Tracking with ERP17",
    list: [
      "Employees can easily mark their attendance using the ERP17 Mobile App or the web portal.",
      "With geo-fencing enabled, attendance is validated only within the assigned location radius, ensuring compliance with company policies.",
    ],
    img: "/img/products/AM2.svg",
    imgRight: false,
  },
  {
    heading: "Remote Attendance Tracking with ERP17",
    list: [
      "Employees can mark their attendance from anywhere using the ERP17 Mobile App or web portal.",
      "Supervisors, Admins, and HR teams can easily access real-time location data to monitor attendance efficiently and ensure compliance.",
    ],
    img: "/img/products/AM3.svg",
    imgRight: true,
  },
  {
    heading: "Overtime Calculation & Management with ERP17",
    list: [
      "Fully Automated System: ERP17 allows companies to calculate and manage overtime automatically.",
      "Quick Processing: Overtime can be processed within seconds, saving time and effort.",
      "Track Employee Hours: HRs and Admins can easily monitor total working hours for accurate payroll and compliance.",
    ],
    img: "/img/products/AM4.svg",
    imgRight: false,
  },
  {
    heading: "Employee Attendance Reporting with ERP17",
    list: [
      "Flexible Reports: Generate attendance reports daily, weekly, or monthly as per requirement.",
      "Instant Access: Reports can be quickly accessed anytime by the appropriate authority.",
      "Detailed Analysis: Create extra time reports, overtime reports, and attendance analysis effortlessly.",
    ],
    img: "/img/products/AM5.svg",
    imgRight: true,
  },
];

export default function AttendanceManagementPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Attendance Management"
      title="Smart Attendance Tracking"
      heroDescription="Manage employee attendance with the best Cloud-Based Management Software in Bangladesh. Real-time monitoring, geo-fencing, and biometric integration for your workforce."
      heroImage="/img/products/AM1.svg"
      heroImageAlt="Attendance Management Software"
      sections={sections}
    />
  );
}
