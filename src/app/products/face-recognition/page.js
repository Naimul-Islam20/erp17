import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Face Recognition | ERP17",
  description: "AI-powered facial recognition attendance and access security with ERP17.",
};

const faceSections = [
  {
    heading: "Automate Attendance System Using Face Recognition",
    subText:
      "Our face recognition system is integrated into a simple mobile app, making attendance automation easy and accurate.",
    list: [
      "Quickly register faces with a selfie from the app.",
      "Real-time sync with internet connection for updated attendance data.",
      "Clean and user-friendly interface for both employees and admins.",
    ],
    img: "/img/products/face/face2.png",
    imgRight: false,
  },
  {
    heading: "Real-Time Attendance & Location Tracking",
    subText:
      "Track employee attendance in real-time and monitor location with GPS integration.",
    list: [
      "Instantly check who is present or absent.",
      "Captures exact check-in/check-out time for precise records.",
      "GPS ensures employees mark attendance from the correct location.",
    ],
    img: "/img/products/face/face3.png",
    imgRight: true,
  },
  {
    heading: "Ensure Access Security",
    subText:
      "Prevent fake attendance entries and improve security with advanced recognition checks.",
    list: [
      "Eye-blink detection ensures only live persons can check in.",
      "Blocks photo or video-based fraudulent attendance.",
      "Admins can securely verify and approve rostering.",
    ],
    img: "/img/products/face/face4.png",
    imgRight: false,
  },
  {
    heading: "Remote Attendance & Reports",
    subText:
      "Employees can mark attendance remotely and admins can generate detailed reports anytime.",
    list: [
      "Supports remote attendance for distributed teams.",
      "Reports show attendance trends, absenteeism, and punctuality.",
      "Seamlessly integrates with existing HR systems and scales easily.",
    ],
    img: "/img/products/face/face5.png",
    imgRight: true,
  },
];

export default function FaceRecognitionPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Face Recognition"
      title="AI Powered Facial Recognition"
      heroDescription="Collect attendance with facial recognition. Manage employee presence in real-time and ensure access security — all powered by AI-based recognition."
      heroImage="/img/products/face-recognition.png"
      heroImageAlt="Face Recognition Attendance"
      sections={faceSections}
    />
  );
}
