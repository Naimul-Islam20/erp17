import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Shift Management | ERP17",
  description: "Roster setup, shift duties, and workforce scheduling with ERP17.",
};

const shiftSections = [
  {
    heading: "Shift Set up",
    subText: "Provide scheduled shifts for employees.",
    list: [
      "Admins can build employee schedules in a minute.",
      "Multiple shifts can be set.",
      "Shift management can reduce absenteeism, late arrivals, etc.",
      "Admins can easily maintain company’s shifts through ERP17 Software.",
    ],
    img: "/img/products/shift/SM2.png",
    imgRight: false,
  },
  {
    heading: "Roster Eligible Employee",
    subText: "Choose and manage employees for rostering.",
    list: [
      "Admins can easily choose an employee for rostering.",
      "Admins search the name, select the employee, then grant rostering rights.",
    ],
    img: "/img/products/shift/SM3.png",
    imgRight: true,
  },
  {
    heading: "Roster Set Up",
    subText: "Control roster setup in the office.",
    list: [
      "After shift setup and choosing employees for roster duty, admin assigns the roster duty.",
      "Admin assigns employees according to the shift duties.",
      "Admin clicks on the employees and then selects the roster date and timetable.",
      "Admin can also drag and drop employees in the roster table.",
    ],
    img: "/img/products/shift/SM4.png",
    imgRight: false,
  },
  {
    heading: "Shift Management Report",
    subText: "Control roster setup in the office with detailed reports.",
    list: [
      "Various reports are available in ERP17 Software.",
      "Attendance reports can be generated monthly, weekly, or daily at any time.",
      "Extra time reports, overtime reports, and attendance analysis reports can also be generated.",
    ],
    img: "/img/products/shift/SM5.png",
    imgRight: true,
  },
];

export default function ShiftManagementPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Shift Management"
      title="Optimize Your Employee Scheduling"
      heroDescription="The ultimate solution for roster setup, shift duties, and attendance management. Streamline your company's workforce scheduling with ease using ERP17."
      heroImage="/img/products/shift-management.png"
      heroImageAlt="Shift Management Software"
      sections={shiftSections}
    />
  );
}
