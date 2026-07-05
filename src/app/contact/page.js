"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { buildApiUrl } from "@/lib/api-config";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  const showToast = (type, message) => {
    setToast({ visible: true, type, message });
    window.setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSubmitting(true);

    const formData = new FormData(formElement);
    const payload = {
      name: String(formData.get("name") || ""),
      company_name: String(formData.get("company_name") || ""),
      designation: String(formData.get("designation") || ""),
      mobile: String(formData.get("mobile") || ""),
      email: String(formData.get("email") || ""),
    };

    try {
      const response = await fetch(buildApiUrl("/expert-sessions"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json().catch(() => ({}));

      if (!response.ok) {
        const firstError = responseBody?.errors
          ? Object.values(responseBody.errors)[0]?.[0]
          : "";
        throw new Error(
          firstError || responseBody?.message || "Failed to submit request.",
        );
      }

      showToast(
        "success",
        responseBody?.message || "Request submitted successfully.",
      );
      formElement.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Could not submit request. Please try again.";
      showToast("error", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gray-50 pt-10 md:pt-16">
      {toast.visible ? (
        <div className="fixed top-[96px] right-5 z-[130] animate-[slideInRight_.35s_ease-out]">
          <div
            className={`min-w-[260px] max-w-sm rounded-xl border px-3.5 py-4 shadow-lg ${
              toast.type === "success"
                ? "border border-green-500 bg-white"
                : "border border-red-500 bg-white"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <p
                className={`flex-1 text-sm leading-5 ${
                  toast.type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {toast.message}
              </p>
              <button
                type="button"
                onClick={() => setToast((prev) => ({ ...prev, visible: false }))}
                className="text-slate-400 hover:text-slate-700 transition text-base leading-none"
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--secondary)] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-[var(--secondary)]">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[var(--secondary)] mb-3">Office Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-soft)] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-[var(--primary)]" />
                    </div>
                    <p className="text-gray-600">
                      Dhaka Office: 820 Makkah Tower(9th Floor) West Shewrapara, Mirpur, Dhaka-1216 Bangladesh
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary-soft)] rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-[var(--primary)]" />
                    </div>
                    <p className="text-gray-600">
                      Chittagong Office: House#13, Road#3, Block-K, Halishahar, Chittagong. Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary-soft)] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--secondary)]">Phone</h3>
                  <p className="text-gray-600">8801982211000</p>
                  <p className="text-gray-600">8801752711277</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary-soft)] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--secondary)]">Email</h3>
                  <p className="text-gray-600">support@erp17.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company_name" className="text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  required
                  placeholder="Enter company name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="designation" className="text-sm font-medium text-gray-700">Designation</label>
                <textarea
                  id="designation"
                  name="designation"
                  required
                  rows="4"
                  placeholder="Enter your designation"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-4 rounded-xl transition duration-300 disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div className="mt-16 h-[450px] w-full border-t border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.165416248358!2d91.79157267566735!3d22.347318841193356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9184285b54d%3A0x6b44a8fc37812546!2sAgrabad%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1708064500000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ERP17 Office Location"
        ></iframe>
      </div>
    </main>
  );
}
