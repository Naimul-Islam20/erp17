import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Payroll Management | ERP17",
  description: "Manage salary structures, payments, payslips, and employee loans with ERP17 payroll software.",
};

const payrollSections = [
  {
    heading: "Salary Structure",
    subText: "ERP17 can assist you in building salary structure types.",
    list: [
      "Salary structure is needed to be ready to provide the salary.",
      "Salary structure can be ready by creating and processing breakups, also by consolidated structure.",
      "Just create the structure then it will help you to generate salary within seconds."
    ],
    img: "/img/products/payroll/PS2.png",
    imgRight: true
  },
  {
    heading: "Salary Payment",
    subText: "Managers can easily manage salary payment options.",
    list: [
      "Salary can be disbursed by the bank, through cash, or by cheque.",
      "Managers can easily choose any of the available options while disbursing.",
      "Through ERP17 employee management software, an admin can add the template format of any bank for salary payment."
    ],
    img: "/img/products/payroll/PS3.png",
    imgRight: false
  },
  {
    heading: "Salary Pay Slip",
    subText: "Employees can view and get their salary slip via ERP17 app.",
    list: [
      "When salary is disbursed, employees can get the payslip from an admin or HR.",
      "After salary generation, an employee can get payslip via mail.",
      "ERP17 app also allows employees to view their payslip.",
      "Payslip shows all breakdowns related to adjustments, tax, deductions, etc."
    ],
    img: "/img/products/payroll/PS4.png",
    imgRight: true
  },
  {
    heading: "Salary Certificate",
    subText: "Salary certificate can be created easily from ERP17.",
    list: [
      "Salary certificate is important for both organization and employees.",
      "From ERP17, you can create a customized salary certificate for any employee within seconds."
    ],
    img: "/img/products/payroll/PS5.png",
    imgRight: false
  },
  {
    heading: "Loan Management",
    subText: "ERP17 can help you manage employee loans.",
    list: [
      "Employees can apply for advance salary or loan via ERP17.",
      "Applications can be approved or rejected by supervisors.",
      "Applications can be submitted via web or mobile app.",
      "Loan can be adjusted with salary or by cash."
    ],
    img: "/img/products/payroll/PS6.png",
    imgRight: true
  }
];

export default function PayrollPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Payroll Management"
      title="Automate Your Salary Disbursement"
      heroDescription="Manage salary structures, payments, and payslips effortlessly. ERP17 provides a complete payroll and loan management solution for modern organizations."
      heroImage="/img/products/payroll.png"
      heroImageAlt="Payroll Software"
      sections={payrollSections}
    />
  );
}
