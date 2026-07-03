import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Geo-Fencing | ERP17",
  description: "Virtual boundaries and location-validated attendance with ERP17 geo-fencing.",
};

const geoFencingSections = [
  {
    heading: "Smart Geo-Fencing",
    subText: "Define virtual boundaries around your office locations to ensure employees are on-site when they clock in.",
    list: [
      "Set multiple geographic perimeters for different branches.",
      "Automatically verify attendance location via mobile GPS.",
      "Receive alerts for attendance attempts outside designated zones.",
      "Seamless integration with live tracking maps."
    ],
    img: "/img/products/tracking/ET1.png", // Reusing relevant image
    imgRight: false,
  },
  {
    heading: "Remote Site Monitoring",
    subText: "Perfect for field workers and remote project sites where traditional biometric devices aren't feasible.",
    list: [
      "Track attendance at client locations or construction sites.",
      "No hardware installation required - just the ERP17 app.",
      "Real-time visibility into who is at which site.",
      "Historical location logs for compliance and reporting."
    ],
    img: "/img/products/face/FR2.svg",
    imgRight: true,
  }
];

export default function GeoFencingPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Geo-Fencing"
      title="Secure Geo-Fencing"
      heroDescription="Ensure your workforce is where they need to be. defining virtual boundaries and validating attendance locations in real-time with ERP17&apos;s advanced geo-fencing technology."
      heroImage="/img/products/geo-fencing.png"
      heroImageAlt="Geo-Fencing Attendance"
      sections={geoFencingSections}
    />
  );
}
