"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Banknote,
  Bell,
  Calculator,
  Car,
  Check,
  Clock,
  Factory,
  Gamepad2,
  Hotel,
  KeyRound,
  LayoutGrid,
  Mail,
  Package,
  ParkingSquare,
  Ship,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Users,
  UsersRound,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { ALL_QUOTE_APPS, QUOTE_APP_VALUES } from "@/data/quote-apps";
import { PLANS } from "@/data/plansComparison";

const ICONS = {
  Banknote,
  Bell,
  Calculator,
  Car,
  Clock,
  Factory,
  Gamepad2,
  Hotel,
  KeyRound,
  LayoutGrid,
  Mail,
  Package,
  ParkingSquare,
  Ship,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Users,
  UsersRound,
  UtensilsCrossed,
  Wallet,
};

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

export default function ChooseAppsContent() {
  const router = useRouter();
  const [plan, setPlan] = useState("");
  const [selected, setSelected] = useState(() => new Set());

  useEffect(() => {
    setPlan(getPlanFromUrl());
    setSelected(new Set(getModulesFromUrl()));
  }, []);

  const selectedCount = selected.size;

  const selectedApps = useMemo(() => {
    return ALL_QUOTE_APPS.filter((app) => selected.has(app.value));
  }, [selected]);

  const toggleApp = (value) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  };

  const handleContinue = () => {
    if (selected.size === 0) return;

    const params = new URLSearchParams();
    params.set("modules", Array.from(selected).join(","));
    if (plan) {
      params.set("plan", plan);
    }
    router.push(`/get-quote?${params.toString()}`);
  };

  return (
    <div className={`min-h-screen bg-[#f5f6f8] ${selectedCount > 0 ? "pb-28 lg:pb-10" : "pb-10"}`}>
      <section className="pt-10 pb-6 md:pt-14 md:pb-8">
        <div className="container max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--secondary)] md:text-5xl">
            Choose your{" "}
            <span className="relative inline-block text-[var(--primary)]">
              Apps
              <span
                className="pointer-events-none absolute left-0 right-0 -bottom-1 h-2 rounded-full bg-[var(--primary-soft)] opacity-90"
                aria-hidden
              />
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Select the modules you need. Then continue to request your quote.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="container max-w-6xl">
          <div className="flex gap-0 lg:items-start lg:gap-0">
            <div
              className={`min-w-0 flex-1 transition-[max-width] duration-500 ease-in-out ${
                selectedCount > 0 ? "lg:max-w-[calc(100%-300px)] xl:max-w-[calc(100%-320px)]" : "lg:max-w-full"
              }`}
            >
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {ALL_QUOTE_APPS.map((app) => {
                  const Icon = ICONS[app.icon] || LayoutGrid;
                  const isSelected = selected.has(app.value);

                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => toggleApp(app.value)}
                      aria-pressed={isSelected}
                      className={`relative flex h-[58px] items-center gap-1.5 rounded-lg border-2 bg-white py-2.5 pl-2 pr-3 text-left transition md:h-[62px] md:rounded-xl md:gap-2 md:pl-2.5 md:pr-4 ${
                        isSelected
                          ? "border-[var(--primary)] shadow-sm"
                          : "border-transparent shadow-[0_1px_3px_rgba(15,23,42,0.08)] hover:shadow-[0_2px_8px_rgba(15,23,42,0.12)]"
                      }`}
                    >
                      {isSelected ? (
                        <span className="absolute -right-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-sm md:h-6 md:w-6">
                          <Check className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={3} />
                        </span>
                      ) : null}

                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white md:h-10 md:w-10"
                        style={{ backgroundColor: app.color }}
                      >
                        <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.1} />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-800 md:text-base">
                        {app.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <aside
              aria-hidden={selectedCount === 0}
              className={`hidden shrink-0 overflow-hidden transition-all duration-500 ease-in-out lg:block ${
                selectedCount > 0
                  ? "ml-8 w-[280px] opacity-100 xl:w-[300px]"
                  : "ml-0 w-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="sticky top-28 w-[280px] rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:rounded-xl xl:w-[300px]">
                <h3 className="text-base font-bold text-[var(--secondary)]">
                  {selectedCount} App{selectedCount > 1 ? "s" : ""} selected
                </h3>

                <div className="mt-4 max-h-[42vh] space-y-3 overflow-y-auto pr-1">
                  {selectedApps.map((app) => {
                    const Icon = ICONS[app.icon] || LayoutGrid;
                    return (
                      <div key={app.value} className="flex items-center gap-3">
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                          style={{ backgroundColor: app.color }}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2.1} />
                        </span>
                        <span className="text-sm font-medium text-slate-700">
                          {app.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleContinue}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-hover)] md:rounded-xl"
                >
                  Continue
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {selectedCount > 0 ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
          <div className="container flex max-w-6xl items-center justify-between gap-3 py-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--secondary)]">
                {selectedCount} selected
              </p>
              <p className="mt-0.5 truncate text-xs text-slate-500">
                {selectedApps.map((app) => app.label).join(", ")}
              </p>
            </div>
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--primary-hover)]"
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
