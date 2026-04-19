"use client";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaMapMarkedAlt, FaDrawPolygon, FaUsers, FaFingerprint, FaFolderOpen } from "react-icons/fa";

export default function PricingPage() {
  // Pricing Section
  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "For small teams getting started.",
      price: "BDT 1000 /month",
      features: [
        "Employees (Upto 20)",
        "Attendance Management",
        "Schedule Management",
        "Leave Management",
        "Payroll (Basic)",
        "Mobile App",
        "File Storage (500 MB)",
        "Add-ons available",
        "Online customer support (Within 4 business hours)",
      ],
    },
    {
      title: "Lite",
      subtitle: "For growing businesses building momentum.",
      price: "BDT 2000 /month",
      features: [
        "Starter Features +",
        "Employees (Upto 50)",
        "Payroll (Basic)",
        "File Storage (1 GB)",
        "Attendance Device Integration (1)",
        "Add-ons available",
        "Online customer support (Within 4 business hours)",
      ],
    },
    {
      title: "Standard",
      subtitle: "For established teams scaling operations.",
      price: "BDT 3500 /month",
      features: [
        "Lite Features +",
        "Employees (Upto 100)",
        "Asset Management",
        "Payroll (Advance)",
        "File Storage (2 GB)",
        "Attendance Device Integration (2)",
        "Add-ons available",
        "Online customer support (Within 2 business hours)",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "For enterprises with advanced needs.",
      price: " 100+ employees",
      features: [
        "100+ employees",
        "Tailored solutions for large teams with advanced customization",
        "Premium support",
        "Integration with your existing systems",
      ],
    },
  ];

  // Add-ons Section
  const addons = [
    {
      title: "Live Location Tracking",
     
      price: "70/user",
      desc: "Track employees live through GPS to ensure accurate field attendance and real-time accountability.",
      icon: <FaMapMarkedAlt className="w-8 h-8 text-sky-600 mx-auto mb-4" />,
    },
    {
      title: "Geofencing",
    
      price: "10/user",
      desc: "Track locations and ensure compliance with geofencing for accurate attendance.",
      icon: <FaDrawPolygon className="w-8 h-8 text-green-600 mx-auto mb-4" />,
    },
    {
      title: "Employees",
     
      price: "300/10 users",
      desc: "Scale your workforce management by adding more employee profiles to your system.",
      icon: <FaUsers className="w-8 h-8 text-purple-600 mx-auto mb-4" />,
    },
    {
      title: "Attendance Device Integration",
      
      price: "200/device",
      desc: "Integrate with additional devices to expand your HR system’s capabilities.",
      icon: <FaFingerprint className="w-8 h-8 text-orange-600 mx-auto mb-4" />,
    },
    {
      title: "File Storage",
    
      price: "500/GB",
      desc: "Increase your storage capacity to securely manage more HR data and documents.",
      icon: <FaFolderOpen className="w-8 h-8 text-pink-600 mx-auto mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container text-center">
        {/* Pricing Header */}
        <h2 className="text-md tracking-widest text-gray-400 font-bold mb-4">Pricing</h2>
        <p className="text-4xl font-semibold text-black mb-12">
          Affordable Pricing for <span className="text-sky-600 tracking-wide ">ERP17</span> Software - <br />
          Tailored for Your Business Needs
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300  rounded-xl p-6 flex flex-col  transition"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{plan.subtitle}</p>
              <p className="text-2xl font-bold text-sky-600 mb-6">{plan.price}</p>

              <ul className="flex-1 text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                    <AiOutlineCheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p>Call for Price :+880 14 0400 8950</p>

              <button className="bg-sky-500 text-white py-2 rounded-full font-semibold hover:bg-sky-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <h3 className="text-3xl font-bold mb-6">Enhance your experience with Add-ons</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10 text-center">
          {addons.map((addon, idx) => (
            <div
  key={idx}
  className="bg-white border border-gray-300 rounded-lg p-6 gap-3  flex flex-col items-center"
>
  {/* Icon - fixed top */}
  <div className="">{addon.icon}</div>

  {/* Title & Subtitle */}
  <h4 className="text-sm text-gray-600 font-semibold">{addon.title}</h4>
  {addon.subtitle && <p className="text-gray-600 mb-2">{addon.subtitle}</p>}

  {/* Price */}
  {addon.price && (
    <p className="text-gray-600 mb-2">
      BDT <span className="text-sky-600 font-bold">{addon.price}</span>
    </p>
  )}

  {/* Description */}
  <p className="text-gray-600 text-sm">{addon.desc}</p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
