"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { buildWebsiteLeadsApiUrl } from "@/lib/api-config";
import { PLANS } from "@/data/plansComparison";
import { ALL_QUOTE_APPS, QUOTE_APP_VALUES } from "@/data/quote-apps";

const VALID_PLAN_IDS = new Set(PLANS.map((plan) => plan.id));

function getPlanFromUrl() {
  if (typeof window === "undefined") return "";
  const plan = new URLSearchParams(window.location.search).get("plan");
  return plan && VALID_PLAN_IDS.has(plan) ? plan : "";
}

function getModulesFromUrl() {
  if (typeof window === "undefined") return [];
  const raw = new URLSearchParams(window.location.search).get("modules") || "";
  if (!raw.trim()) return [];
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter((value) => QUOTE_APP_VALUES.has(value));
}

function FormFloating({
  id,
  name,
  label,
  type = "text",
  required = false,
  defaultValue = "",
}) {
  return (
    <div className="form-floating">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        placeholder={label}
        className="form-control"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function FormFloatingTextarea({ id, name, label, required = false, rows = 4 }) {
  return (
    <div className="form-floating form-floating-textarea">
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        placeholder={label}
        className="form-control"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default function GetQuoteForm() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedModules, setSelectedModules] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  useEffect(() => {
    setSelectedPlan(getPlanFromUrl());
    setSelectedModules(getModulesFromUrl());
  }, []);

  const selectedCount = selectedModules.length;

  const selectedModuleLabels = useMemo(() => {
    return ALL_QUOTE_APPS.filter((app) =>
      selectedModules.includes(app.value),
    ).map((app) => app.label);
  }, [selectedModules]);

  const changeAppsHref = useMemo(() => {
    const params = new URLSearchParams();
    if (selectedModules.length > 0) {
      params.set("modules", selectedModules.join(","));
    }
    if (selectedPlan) {
      params.set("plan", selectedPlan);
    }
    const query = params.toString();
    return query ? `/choose-apps?${query}` : "/choose-apps";
  }, [selectedModules, selectedPlan]);

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
    const userDescription = String(formData.get("description") || "").trim();

    const payload = {
      name: String(formData.get("name") || ""),
      designation: String(formData.get("designation") || ""),
      company_name: String(formData.get("companyName") || ""),
      employee_count: 0,
      plan_name: selectedPlan || "",
      modules_needed: selectedModules,
      email: String(formData.get("email") || ""),
      mobile_no: String(formData.get("mobile") || ""),
      address: String(formData.get("address") || ""),
      description: [
        userDescription,
        selectedModuleLabels.length
          ? `Selected apps: ${selectedModuleLabels.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join(". "),
      organization_id:
        process.env.NEXT_PUBLIC_ERP17_ORGANIZATION_ID ||
        "4afeebf7-5427-4753-8ee3-2c9b2b3c2658",
      company_id: process.env.NEXT_PUBLIC_ERP17_COMPANY_ID || "",
      branch_id: process.env.NEXT_PUBLIC_ERP17_BRANCH_ID || "",
    };

    if (payload.modules_needed.length === 0) {
      showToast("error", "Please select at least one module first.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(buildWebsiteLeadsApiUrl("/crm/website-leads"), {
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
      setSelectedPlan(getPlanFromUrl());
      setSelectedModules(getModulesFromUrl());
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
                className="text-base leading-none text-slate-400 transition hover:text-slate-700"
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <section className="bg-white pt-10 md:pt-14">
        <div className="mx-auto max-w-[920px] px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--secondary)] md:text-5xl">
            Get a Quote
          </h1>
          <p className="mt-3 text-[15px] text-[var(--secondary)]/80">
            Free instant access. No credit card required.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[920px] px-4">
          <div className="flex items-center justify-between gap-3 rounded-t-2xl bg-[#f3f4f6] px-4 py-4 sm:px-6">
            <p className="text-[15px] text-[var(--secondary)]">
              {selectedCount === 0
                ? "No apps selected"
                : `${selectedCount} app${selectedCount > 1 ? "s" : ""} selected`}
            </p>
            <Link
              href={changeAppsHref}
              className="shrink-0 rounded-[4px] bg-white px-4 py-2 text-[14px] font-semibold text-[var(--primary)] shadow-sm ring-1 ring-[var(--primary-soft)] transition hover:bg-[var(--primary-soft)]/40"
            >
              Change apps selection
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] pb-20 pt-6">
        <form onSubmit={handleSubmit} className="mx-auto max-w-[920px] px-4">
          <div className="space-y-4">
            <FormFloating
              id="name"
              name="name"
              label="Full Name"
              required
            />
            <FormFloating
              id="companyName"
              name="companyName"
              label="Company Name"
              required
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormFloating
                id="email"
                name="email"
                type="email"
                label="Email"
                required
              />
              <FormFloating
                id="mobile"
                name="mobile"
                type="tel"
                label="Phone Number"
                defaultValue="+880"
                required
              />
            </div>

            <FormFloating
              id="designation"
              name="designation"
              label="Designation"
              required
            />
            <FormFloating
              id="address"
              name="address"
              label="Address"
              required
            />
            <FormFloatingTextarea
              id="description"
              name="description"
              label="Description"
              required
            />
          </div>

          <p className="mt-5 text-center text-[13px] leading-relaxed text-[var(--secondary)]/70">
            By clicking on Start Now, you accept our{" "}
            <Link
              href="/terms-condition"
              className="text-[var(--primary)] underline underline-offset-2"
            >
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-[var(--primary)] underline underline-offset-2"
            >
              Privacy Policy
            </Link>
          </p>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-[4px] border border-[var(--primary)] bg-[var(--primary)] px-8 py-4 text-[18px] font-semibold text-white transition hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Start Now"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
