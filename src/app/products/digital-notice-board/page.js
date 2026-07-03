import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Digital Notice Board | ERP17",
  description: "Publish announcements and reach employees instantly with digital notice boards.",
};

const noticeBoardSections = [
  {
    heading: "Digital Notice Board",
    subText:
      "Create public announcements, bulletin board management, and more with the best HR management software.",
    list: [
      "Through ERP17 Software you can easily display digital notice board.",
      "You will find it useful as no one has to go desk to desk to deliver a message.",
      "Just create a notice board from the admin panel and everyone will get a pop up notification through the app.",
    ],
    img: "/img/products/digital/DN2.svg",
    imgRight: false,
  },
  {
    heading: "Creation of Notices",
    subText: "Create notice and attach document with ERP17.",
    list: [
      "An admin can create a notice from web and mobile app.",
      "An admin can easily send notice to an employee or a department or a branch.",
      "An admin can also attach any kind of document.",
    ],
    img: "/img/products/digital/DN3.png",
    imgRight: true,
  },
];

export default function DigitalNoticeBoardPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Digital Notice Board"
      title="Instant Broadcast Updates"
      heroDescription="Publish all updates on a digital notice board. Create announcements, manage bulletins, and reach everyone instantly with pop-up notifications through ERP17."
      heroImage="/img/products/digital-notice-board.png"
      heroImageAlt="Digital Notice Board"
      sections={noticeBoardSections}
    />
  );
}
