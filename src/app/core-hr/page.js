"use client";

import Link from "next/link";
import { primaryCtaClassName } from "@/constants/cta";

export default function CoreHRPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Core HR</h1>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>
      <p className="text-gray-700 mb-6">
        Organize and empower your entire workforce with our Core HR solutions. 
        Manage employee data, streamline HR processes, and boost productivity.
      </p>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Features:</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Centralized employee records</li>
          <li>Effortless attendance management</li>
          <li>Automated leave and schedule handling</li>
          <li>Secure and robust access control</li>
        </ul>
      </div>

      <div className="mt-6">
        <Link href="/contact" className={primaryCtaClassName}>
          Get Started
        </Link>
      </div>
    </div>
  );
}
