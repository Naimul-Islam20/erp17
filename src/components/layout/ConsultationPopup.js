"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ConsultationPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, [pathname]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/45 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close consultation form"
          className="absolute right-3 top-3 rounded-full px-2 py-1 text-lg text-slate-500 hover:text-slate-700"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[var(--secondary)]">Get Free Consultation</h2>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <label htmlFor="consultation-name" className="mb-1 block text-sm font-medium text-slate-700">
              Name:
            </label>
            <input
              id="consultation-name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div>
            <label htmlFor="consultation-mobile" className="mb-1 block text-sm font-medium text-slate-700">
              Mobile:
            </label>
            <input
              id="consultation-mobile"
              type="tel"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[var(--primary)] py-2.5 font-semibold text-white transition hover:bg-[var(--primary-hover)]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
