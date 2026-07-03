import ProductSectionsLayout from "@/components/products/ProductSectionsLayout";

export const metadata = {
  title: "Task Management | ERP17",
  description: "Assign, track, and report tasks with ERP17 task management software.",
};

const taskSections = [
  {
    heading: "Employee Task Management",
    subText:
      "Boosting your company’s productivity is our first priority. It saves both valuable time and energy!",
    list: [
      "Task management means tracking each task through its full lifecycle and making decisions according to progress.",
      "With ERP17 software, you can organize and manage tasks more effectively by using features such as creation, planning, assigning, tracking, and reporting.",
    ],
    img: "/img/products/task/task2.png",
    imgRight: false,
  },
  {
    heading: "Employee Task Creation",
    subText:
      "Stay on top of your daily or weekly work by creating instant tasks in your to-do list.",
    list: [
      "Using ERP17, you can easily create tasks by setting titles, assigning employees, choosing start and end dates, priorities, categories, status, descriptions, and uploading any required documents.",
      "Both individuals and team leaders can create tasks from the mobile app as well.",
      "Once a task is created, the assigned person immediately receives a notification.",
    ],
    img: "/img/products/task/task3.png",
    imgRight: true,
  },
  {
    heading: "Task Details",
    subText: "Get detailed updates and manage additional information on tasks.",
    list: [
      "Supervisors or admins can monitor the status and progress of assigned tasks.",
      "After assignment, employees can update the task status and leave comments on activities.",
      "Both creators and assignees are able to exchange comments for better collaboration.",
      "Employees can also record check-in/check-out whenever they visit a company site.",
    ],
    img: "/img/products/task/task4.png",
    imgRight: false,
  },
  {
    heading: "Task Report",
    subText: "Generate in-depth task progress reports within ERP17.",
    list: [
      "Create reports by selecting date ranges and filtering employees or task status.",
      "Admins can track department-wise task reports for better performance insights.",
      "In payslips, all adjustments, deductions, and related breakdowns are also reflected.",
    ],
    img: "/img/products/task/task5.png",
    imgRight: true,
  },
  {
    heading: "Check In - Check Out",
    subText:
      "Easily record check-ins and check-outs at office or client locations.",
    list: [
      "Employees can check in and out at a client’s office or branch while performing tasks.",
      "Simple buttons are available for quick check in and check out actions.",
      "Check-in/out can also be done directly from the mobile app.",
      "Admins instantly receive notifications with location details.",
    ],
    img: "/img/products/task/task6.png",
    imgRight: false,
  },
  {
    heading: "Customers",
    subText:
      "Maintain and manage your company’s customer lists inside ERP17 software.",
    list: [
      "Customer lists are useful for task management and client interactions.",
      "Admins can define a location radius for customer offices or branches.",
      "Employees can only check in/out within the allowed radius set by admin.",
    ],
    img: "/img/products/task/task7.png",
    imgRight: true,
  },
];

export default function TaskManagementPage() {
  return (
    <ProductSectionsLayout
      breadcrumb="Task Management"
      title="Streamline Your Workflow Efficiently"
      heroDescription="A complete solution for assigning, tracking, and reporting tasks. Organize responsibilities and improve workflow with ERP17 — the all-in-one HR management system."
      heroImage="/img/products/task-management.png"
      heroImageAlt="Task Management Software"
      sections={taskSections}
    />
  );
}
