"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ConsultationPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, [pathname]);

  const dismissPopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dismissPopup();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <button
          type="button"
          onClick={dismissPopup}
          aria-label="Close consultation form"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-slate-600 transition hover:bg-white hover:text-slate-900"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          <div className="bg-[var(--primary-soft)] p-6 md:p-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--primary)] font-semibold">
              Free Expert Session
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[var(--secondary)]">
              Get Free Consultation
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Share your details. Our team will contact you with a suitable plan for your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-3.5">
            <div>
              <label htmlFor="consultation-name" className="mb-1 block text-sm font-medium text-slate-700">
                Name:
              </label>
              <input
                id="consultation-name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
              />
            </div>

            <div>
              <label htmlFor="consultation-company" className="mb-1 block text-sm font-medium text-slate-700">
                Company Name:
              </label>
              <input
                id="consultation-company"
                type="text"
                required
                placeholder="Enter company name"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
              />
            </div>

            <div>
              <label htmlFor="consultation-designation" className="mb-1 block text-sm font-medium text-slate-700">
                Designamtion:
              </label>
              <input
                id="consultation-designation"
                type="text"
                required
                placeholder="Enter your designation"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="consultation-mobile" className="mb-1 block text-sm font-medium text-slate-700">
                  Mobile:
                </label>
                <input
                  id="consultation-mobile"
                  type="tel"
                  required
                  placeholder="+880..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
                />
              </div>
              <div>
                <label htmlFor="consultation-email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email:
                </label>
                <input
                  id="consultation-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[var(--primary)] py-2.5 font-semibold text-white transition hover:bg-[var(--primary-hover)]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
