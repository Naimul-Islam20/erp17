"use client";

import React from "react";
import ProductImage from "@/components/ui/ProductImage";
import { AiOutlineCheckCircle } from "react-icons/ai";

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

const TaskManagementPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with Unique Background & Patterns */}
      <section className="relative overflow-hidden bg-amber-50 pt-10 md:pt-12 pb-10 md:pb-24">
        
        {/* Background Decorative Elements */}
        {/* 1. Slanted Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-100/60 -skew-x-12 transform origin-top-right translate-x-1/4 hidden md:block" />
        
        {/* 2. Dot Pattern */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 hidden md:block" style={{ backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)', backgroundSize: '15px 15px' }}></div>
        <div className="absolute bottom-20 right-1/2 w-48 h-48 opacity-10 hidden md:block" style={{ backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        {/* 3. Floating Orb/Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>

        {/* 4. Abstract SVG Shape */}
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100Z" fill="url(#paint0_linear_task)" />
            <defs>
              <linearGradient id="paint0_linear_task" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f59e0b" />
                <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
                Task Management System
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Streamline Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Workflow Efficiently
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                A complete solution for assigning, tracking, and reporting tasks. Organize responsibilities and improve workflow with ERP17 — the all-in-one HR management system.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <button className="px-8 py-4 bg-amber-600 text-white font-bold rounded-2xl hover:bg-amber-700 shadow-xl shadow-amber-200 transition-all hover:scale-105 active:scale-95 text-sm md:text-base">
                  Contact Us
                </button>
                <button className="px-8 py-4 bg-white text-amber-600 font-bold rounded-2xl border-2 border-amber-100 hover:bg-amber-50 transition-all text-sm md:text-base">
                  View Demo
                </button>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative z-10">
                <ProductImage
                  src="/img/products/task/task1.png"
                  alt="Task Management Illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections Content */}
      <section className="py-20 bg-white">
        <div className="container space-y-24 md:space-y-32">
          {taskSections.map((sec, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Text Content */}
              <div className={`flex-1 space-y-6 text-center md:text-left order-2 ${sec.imgRight ? "md:order-1" : "md:order-2"}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {sec.heading}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {sec.subText}
                </p>
                <div className="grid gap-4 pt-2">
                  {sec.list.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-amber-50 p-1 rounded-full flex-shrink-0 mt-1">
                        <AiOutlineCheckCircle className="text-amber-600 w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`flex-1 w-full order-1 ${sec.imgRight ? "md:order-2" : "md:order-1"}`}>
                <div className="w-full">
                  <ProductImage
                    src={sec.img}
                    alt={sec.heading}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TaskManagementPage;
