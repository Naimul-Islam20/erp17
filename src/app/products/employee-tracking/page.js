import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Employee Tracking | ERP17",
  description: "Real-time employee location and performance tracking with ERP17.",
};

const monitoringSections = [
  {
    heading: "Employee Monitoring",
    subText: "From ERP17, you can track your employees as they work.",
    list: [
      "Easily track your employees through ERP17 Software.",
      "Admins or supervisors/managers can check last location and tracking history.",
      "Admin has to enable tracking for specific employees.",
      "Admin can check tracking history by selecting Plotting and Run time options."
    ],
    img: "/img/products/tracking/ET2.png",
    imgRight: false
  },
  {
    heading: "Schedule Tracking",
    subText: "Schedule tracking for employees to ensure efficient monitoring.",
    list: [
      "Schedules for tracking are really needed.",
      "Admin has to create schedules and assign employees according to the schedule."
    ],
    img: "/img/products/tracking/ET3.png",
    imgRight: true
  },
  {
    heading: "Tracking Report",
    subText: "View detailed tracking reports right on your computer.",
    list: [
      "Tracking reports are available in ERP17 Software.",
      "Admin can get the tracking report for a certain date.",
      "Tracking data is updated within 5 minutes.",
      "Admin can get the address along with the timestamp in the report."
    ],
    img: "/img/products/tracking/ET4.png",
    imgRight: false
  }
];

export default function EmployeeTrackingPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Employee Tracking"
      title="Real-Time Employee Tracking"
      heroDescription="Gain full visibility into your workforce with ERP17. Monitor location, time, and performance in real-time with our state-of-the-art tracking infrastructure."
      heroImage="/img/products/employee-tracking.png"
      heroImageAlt="Employee Tracking Software"
      sections={monitoringSections}
    />
  );
}
