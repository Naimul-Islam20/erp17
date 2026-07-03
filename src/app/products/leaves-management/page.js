import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Leave Management | ERP17",
  description: "Cloud-based leave management with approvals, relievers, calendars, and multi-layer workflows.",
};

const sections = [
  {
    heading: "Employee Leave App’s Benefits",
    subText: "It manages your employee absences and leaves with cloud-based HRM Software. This absence & leave management software has features like Employee Leave Applications, Leave Calendar, Leave Reliever, and more.",
    list: [
      "It helps employees to work from anywhere.",
      "ERP17 Leave Management Software has replaced traditional hard copy applications.",
      "Staff can easily submit their leave application through mobile app or web.",
      "This Employee Leave App will send the leave application to the layerwise approver.",
      "Leave requests can be accepted or rejected quickly."
    ],
    img: "/img/products/employee/EL2.svg",
    imgRight: false,
  },
  {
    heading: "Leave Reliever",
    subText: "All Hours is a cloud-based leave management system that enables you to efficiently manage, approve, and track leave requests and absences from any device.",
    list: [
      "If an employee goes on leave, they can assign someone to complete their tasks.",
      "When an employee applies for leave and selects a leave reliever, the reliever will get an email notification."
    ],
    img: "/img/products/employee/EL3.webp",
    imgRight: true,
  },
  {
    heading: "Leave Status",
    subText: "Our ERP17 dashboard allows you to view the status of leaves allotted to each employee.",
    list: [
      "Admins can look up each employee’s leave status, counts, replacements, and more data.",
      "Office staff can also check their leave status through ERP17 app or web portal."
    ],
    img: "/img/products/employee/el4.svg",
    imgRight: false,
  },
  {
    heading: "Multiple Leaves Approver",
    subText: "ERP17 provides a feature for multiple layers of leave approval.",
    list: [
      "Admins can set the parameters for leave approvers.",
      "Multiple layers can be added for approving leave requests.",
      "Approvers are informed and can approve or reject accordingly."
    ],
    img: "/img/products/employee/EL5.webp",
    imgRight: true,
  },
  {
    heading: "Leave Calendar",
    subText: "Staff can use the app or web portal to view how much leave they have scheduled or already taken during the year.",
    list: [
      "Leave calendar is available in mobile app and web.",
      "Through the leave calendar, anyone from any department can see the leave applications of a team.",
      "Anyone can apply for leaves after knowing others’ leave status."
    ],
    img: "/img/products/employee/EL6.webp",
    imgRight: false,
  }
];

export default function LeavesManagementPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Leave Management"
      title="Seamless Leave Tracking"
      heroDescription="Manage employee absences and leaves with ease. Our cloud-based solution features layer-wise approval, leave relievers, and a shared team calendar."
      heroImage="/img/products/leaves-management.png"
      heroImageAlt="Leave Management Software"
      sections={sections}
    />
  );
}
