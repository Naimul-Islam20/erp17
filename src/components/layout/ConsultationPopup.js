"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function ConsultationPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });

  useEffect(() => {
    setIsOpen(true);
  }, [pathname]);

  const dismissPopup = () => {
    setIsOpen(false);
  };

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
      const response = await fetch("http://127.0.0.1:8000/api/expert-sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json().catch(() => ({}));

      if (!response.ok) {
        const firstError = responseBody?.errors ? Object.values(responseBody.errors)[0]?.[0] : "";
        throw new Error(firstError || responseBody?.message || "Failed to submit expert session request.");
      }

      showToast("success", responseBody?.message || "Request submitted successfully.");
      formElement.reset();
      window.setTimeout(() => {
        dismissPopup();
      }, 700);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Could not submit request. Please try again.";
      showToast("error", errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4"
      onClick={dismissPopup}
    >
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
                className={`flex-1 text-sm leading-5 ${toast.type === "success" ? "text-green-700" : "text-red-700"}`}
              >
                {toast.message}
              </p>
              <button
                type="button"
                onClick={() =>
                  setToast((prev) => ({ ...prev, visible: false }))
                }
                className="!text-red-500 hover:!text-red-700 transition text-lg font-bold leading-none bg-white border border-red-500 rounded-full w-6 h-6 inline-flex items-center justify-center"
                style={{ color: "#ef4444" }}
                aria-label="Close notification"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismissPopup}
          aria-label="Close consultation form"
          className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 z-10 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border border-red-500 text-lg font-bold text-red-500 transition hover:bg-red-50 hover:text-red-700"
          style={{ color: "#ef4444" }}
        >
          ×
        </button>

        <div className="grid md:grid-cols-12">
          <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] p-5 sm:p-7 md:col-span-6 md:p-10 flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[220px]">
            <Image
              src="/logo.jpeg"
              alt="ERP17 Logo"
              width={140}
              height={40}
              className="relative -top-6 mb-4 h-auto w-[120px] sm:w-[140px]"
              priority
            />
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/85 font-semibold">
              ERP17 Cloud Solution
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl md:text-4xl font-bold text-[var(--secondary)]">
              Share your details.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm md:text-base leading-6 sm:leading-7 text-black">
              We will help you 10X to grow you Business
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-7 md:col-span-6 md:p-10 space-y-4 sm:space-y-4.5"
          >
            <div>
              <label
                htmlFor="consultation-name"
                className="mb-1 hidden text-sm font-medium text-slate-700 sm:block"
              >
                Name:
              </label>
              <input
                id="consultation-name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
              />
            </div>

            <div>
              <label
                htmlFor="consultation-company"
                className="mb-1 hidden text-sm font-medium text-slate-700 sm:block"
              >
                Company Name:
              </label>
              <input
                id="consultation-company"
                name="company_name"
                type="text"
                required
                placeholder="Enter company name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
              />
            </div>

            <div>
              <label
                htmlFor="consultation-designation"
                className="mb-1 hidden text-sm font-medium text-slate-700 sm:block"
              >
                Designamtion:
              </label>
              <input
                id="consultation-designation"
                name="designation"
                type="text"
                required
                placeholder="Enter your designation"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="consultation-mobile"
                  className="mb-1 hidden text-sm font-medium text-slate-700 sm:block"
                >
                  Mobile:
                </label>
                <input
                  id="consultation-mobile"
                  name="mobile"
                  type="tel"
                  required
                  placeholder="+880..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
                />
              </div>
              <div>
                <label
                  htmlFor="consultation-email"
                  className="mb-1 hidden text-sm font-medium text-slate-700 sm:block"
                >
                  Email:
                </label>
                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-[var(--primary)] py-3 font-semibold text-white transition hover:bg-[var(--primary-hover)] disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
