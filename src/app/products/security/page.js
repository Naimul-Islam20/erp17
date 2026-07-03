import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Security | ERP17",
  description: "Advanced encryption, device management, and data protection for ERP17 software.",
};

const securitySections = [
  {
    heading: "Device Change Request",
    subText: "Change requests need to be accepted before an employee can log in to his mobile application with the credentials.",
    list: [
      "1 mobile app for an individual user.",
      "When an employee login to his/her mobile app with the credentials, they will not be able to change the employee account until the device change request is accepted.",
      "Only an admin can accept or reject the request."
    ],
    img: "/img/products/security/S2.svg",
    imgRight: false
  },
  {
    heading: "User Setup",
    subText: "Create and configure your new employee profile with the ERP17 Software program easily.",
    list: [
      "Make a user category.",
      "Assign employees according to the category.",
      "Admin can easily edit, delete and reset passwords.",
      "Admin can set the screen permissions."
    ],
    img: "/img/products/security/S3.svg",
    imgRight: true
  },
  {
    heading: "User Setup",
    subText: "Create and configure your new employee profile with the ERP17 Software program easily.",
    list: [
      "Make a user category.",
      "Assign employees according to the category.",
      "Admin can easily edit, delete and reset passwords.",
      "Admin can set the screen permissions."
    ],
    img: "/img/products/security/S4.svg",
    imgRight: false
  },
  {
    heading: "HTTPS",
    subText: "We use high security for safeguarding our visitors' data.",
    list: [
      "We are maintaining SSL/TLS (https) for any data transfer and it is DV (Domain validation) certificate which will be reissued every 90 days.",
      "The HTTPS request is already verified by hosting and certificates."
    ],
    img: "/img/products/security/S5.svg",
    imgRight: true
  },
  {
    heading: "SQL Injection",
    subText: "We're using a standard algorithm and parameterized SQL operations to shield our ERP17 software from numerous kinds of malicious attacks.",
    list: [
      "This is one of the most common hacking techniques which might destroy our database.",
      "We are maintaining a standard coding structure and parameterized SQL operations to protect our ERP17 Software from any kind of malicious attack or hacking technique like SQL Injection."
    ],
    img: "/img/products/security/S6.svg",
    imgRight: false
  },
  {
    heading: "Data Encryption",
    subText: "Information from ERP17 Software is kept confidential.",
    list: [
      "Data is securely protected in our ERP17 Software.",
      "We consider our own developed encryption/decryption technique for password mechanism."
    ],
    img: "/img/products/security/S7.svg",
    imgRight: true
  }
];

export default function SecurityPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Security"
      title="Data Safety & Total Privacy"
      heroDescription="Keep your company data safe and confidential. ERP17 employs advanced encryption, SQL injection protection, and secure device management for your peace of mind."
      heroImage="/img/products/security.png"
      heroImageAlt="ERP17 Security"
      sections={securitySections}
    />
  );
}
