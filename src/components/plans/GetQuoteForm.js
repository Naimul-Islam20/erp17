"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { primaryCtaClassName } from "@/constants/cta";
import { buildApiUrl } from "@/lib/api-config";
import { PLANS } from "@/data/plansComparison";

const VALID_PLAN_IDS = new Set(PLANS.map((plan) => plan.id));

function getPlanFromParams(searchParams) {
  const plan = searchParams.get("plan");
  return plan && VALID_PLAN_IDS.has(plan) ? plan : "";
}

const MODULE_OPTIONS = [
  { label: "Full ERP", value: "full_erp" },
  { label: "HRM", value: "hrm" },
  { label: "CRM", value: "crm" },
  { label: "POS", value: "pos" },
  { label: "ECOmmerce", value: "ecommerce" },
  { label: "Accounts", value: "accounts" },
];

export default function GetQuoteForm() {
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState(() =>
    getPlanFromParams(searchParams),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  useEffect(() => {
    setSelectedPlan(getPlanFromParams(searchParams));
  }, [searchParams]);

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
      designation: String(formData.get("designation") || ""),
      company_name: String(formData.get("companyName") || ""),
      employee_count: Number(formData.get("employeeCount") || 0),
      plan_name: String(formData.get("plan") || ""),
      modules_needed: formData.getAll("modules"),
      email: String(formData.get("email") || ""),
      mobile_no: String(formData.get("mobile") || ""),
      address: String(formData.get("address") || ""),
      description: String(formData.get("description") || ""),
    };

    if (!payload.plan_name) {
      showToast("error", "Please select a plan.");
      setIsSubmitting(false);
      return;
    }

    if (payload.modules_needed.length === 0) {
      showToast("error", "Please select at least one module.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(buildApiUrl("/quote-requests"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(errorBody || "Failed to submit quote request.");
      }

      showToast("success", "Your quote request has been submitted successfully.");
      formElement.reset();
      setSelectedPlan(getPlanFromParams(searchParams));
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Could not submit the request. Please try again.";
      showToast("error", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast.visible ? (
        <div className="fixed top-[96px] right-5 z-[130] animate-[slideInRight_.35s_ease-out]">
          <div
            className={`min-w-[260px] max-w-sm rounded-xl border px-3.5 py-4 shadow-lg ${
              toast.type === "success"
                ? "border-green-500 bg-white"
                : "border-red-500 bg-white"
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

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-7 md:p-8">
        <h2 className="text-xl font-bold text-[var(--secondary)] sm:text-2xl">
          Get a Quote
        </h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Share your requirements and we&apos;ll build a custom ERP solution for
          your business.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5 md:grid-cols-2"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="designation" className="mb-2 block text-sm font-semibold text-slate-700">
              Designation
            </label>
            <select
              id="designation"
              name="designation"
              defaultValue="Owner"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            >
              <option value="Owner">Owner</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          <div>
            <label htmlFor="companyName" className="mb-2 block text-sm font-semibold text-slate-700">
              Company Name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              placeholder="Enter company name"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="employeeCount" className="mb-2 block text-sm font-semibold text-slate-700">
              Approx. Number of Employees
            </label>
            <input
              id="employeeCount"
              name="employeeCount"
              type="number"
              min="1"
              required
              placeholder="e.g. 120"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="plan" className="mb-2 block text-sm font-semibold text-slate-700">
              Select Plan
            </label>
            <select
              id="plan"
              name="plan"
              value={selectedPlan}
              onChange={(event) => setSelectedPlan(event.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            >
              <option value="" disabled>
                Choose a plan
              </option>
              {PLANS.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Modules Needed
            </label>
            <div className="space-y-2 rounded-lg border border-slate-300 bg-white p-3 sm:p-4">
              {MODULE_OPTIONS.map((module) => (
                <label
                  key={module.value}
                  className="flex items-center gap-2 px-1 py-1 text-sm text-slate-700"
                >
                  <input
                    type="checkbox"
                    name="modules"
                    value={module.value}
                    className="h-4 w-4 accent-[var(--primary)]"
                  />
                  <span>{module.label}</span>
                </label>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              You can select multiple modules.
            </p>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="mb-2 block text-sm font-semibold text-slate-700">
              Mobile No.
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              placeholder="+880..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="mb-2 block text-sm font-semibold text-slate-700">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              placeholder="Enter address"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              placeholder="Share your requirements..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] sm:px-4 sm:py-3 sm:text-base"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${primaryCtaClassName} w-full sm:w-auto disabled:opacity-60`}
            >
              {isSubmitting ? "Submitting..." : "Get a Quote"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
