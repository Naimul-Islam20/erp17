import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Expense Management | ERP17",
  description: "Capture claims, manage categories, and generate expense reports with ERP17.",
};

const expenseSections = [
  {
    heading: "Claim",
    subText:
      "ERP17 Expense offers handy features to capture and record every penny your business spends. Prevent an unseen expense from reoccurring.",
    list: [
      "Employees can easily claim for their expenses through ERP17.",
      "They can easily submit their expenses through app or the web.",
      "An admin can also store the office expenses through claim by using ERP17 Software.",
      "Employees can upload any kind of documents of their expenses."
    ],
    img: "/img/products/expense/EM2.png",
    imgRight: false
  },
  {
    heading: "Claim Category",
    subText:
      "Make claim from selected categories. ERP17 Expense offers handy features to capture and record every penny your business spends. Prevent an unseen expense from reoccurring.",
    list: [
      "An admin can make any kind of categories for claim.",
      "After the category is set up, then any employees can apply for the claim."
    ],
    img: "/img/products/expense/EM3.png",
    imgRight: true
  },
  {
    heading: "Claim Report",
    subText:
      "When your employees are traveling all around the city/ country, ERP17 Expense Management will allow you to keep track of expenses right from your mobile device or from the web to ensure error-free calculations.",
    list: [
      "After submitting the claim, an admin can generate a report according to the needs.",
      "Admin has to select the date range, status and categories to generate a report."
    ],
    img: "/img/products/expense/EM4.png",
    imgRight: false
  }
];

export default function ExpenseManagementPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Expense Management"
      title="Master Your Business Expenses"
      heroDescription="Capture every penny with ERP17 Expense. Streamline claims, manage categories, and generate error-free reports right from your mobile device or the web."
      heroImage="/img/products/expense-management.png"
      heroImageAlt="Expense Management Software"
      sections={expenseSections}
    />
  );
}
