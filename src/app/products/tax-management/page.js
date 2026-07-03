import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Tax Management | ERP17",
  description: "Automate income tax calculations, salary deductions, and investment tracking with ERP17.",
};

const taxSections = [
  {
    heading: "Tax Calculation",
    subText: "ERP17 will help you to calculate income taxes.",
    list: [
      "ERP17 is included with online tax preparation, processing, submission according to the Bangladesh Govt. policy.",
      "It is a system-guided, easy-to-use tax preparation software that will save you time, money, and reduce any potential audits by the government.",
      "Through ERP17 you can generate your salary easily with tax.",
      "Using income tax calculation software ensures you only pay the necessary taxes.",
      "The salary income tax calculation software calculates the different deductions allowed under the Income Tax Act and provides employees with the net salary after tax deduction.",
    ],
    img: "/img/products/tax/TM2.png",
    imgRight: false,
  },
  {
    heading: "Salary Calculation",
    subText:
      "ERP17 Software will help you to calculate net income after deducting taxes and other costs.",
    list: [
      "The salary income tax calculation system will help calculate the taxes based on the salary income.",
      "Deduct employee EPF, labor welfare funds, and others from their gross salary.",
      "Calculate net salary income after considering applicable taxes and other deductions.",
      "The salary tax calculation system is a valuable tax calculator software for HR who want to know how much they will pay for salary.",
    ],
    img: "/img/products/tax/TM3.png",
    imgRight: true,
  },
  {
    heading: "Tax Factors",
    subText: "ERP17 can help you automate tax collecting data.",
    list: [
      "Tax factors depend on basic, house rent, medical allowance, and conveyance.",
      "After inputting these options, the admin has to create the slab.",
      "Then the tax will be calculated automatically.",
      "An admin can edit or delete according to their company’s policy.",
    ],
    img: "/img/products/tax/TM4.png",
    imgRight: false,
  },
  {
    heading: "Tax Rules",
    subText: "With the help of ERP17 Software you can add the financial rules.",
    list: [
      "Tax rules are important for tax calculation.",
      "In ERP17 Software, an admin or a finance person can add the tax rules.",
      "Admin or finance person has to select the tax calculation methods to generate the tax rules.",
      "Deduction from salary varies from person to person depending on their investment in EPF, labor welfare fund, and other such schemes.",
    ],
    img: "/img/products/tax/TM5.png",
    imgRight: true,
  },
];

export default function TaxManagementPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Tax Management"
      title="Effortless Tax Management"
      heroDescription="Simplify income tax calculations according to government policy. ERP17 automates tax rule setup, salary deductions, and investment tracking for complete peace of mind."
      heroImage="/img/products/tax-management.png"
      heroImageAlt="Tax Management Software"
      sections={taxSections}
    />
  );
}
