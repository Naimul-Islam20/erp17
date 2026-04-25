"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { allDevices, DEVICE_PRICE_MAP } from "../devices";

export default function DeviceDetailsPage() {
  const params = useParams();
  const deviceId = Number(params?.id);
  const device = allDevices.find((item) => item.id === deviceId);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  if (!device) {
    return (
      <section className="bg-white py-16">
        <div className="container">
          <p className="text-lg text-slate-700 mb-4">Device not found.</p>
          <Link href="/devices/hardware" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-hover)]">
            Back to Hardware
          </Link>
        </div>
      </section>
    );
  }

  const groupedDetails = device.details.reduce((groups, detail) => {
    const [labelPart, ...valueParts] = detail.split(":");
    const label = labelPart?.trim() || "";
    const value = valueParts.join(":").trim();

    if (!value) {
      groups.push({ label: detail, values: [] });
      return groups;
    }

    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.label === label) {
      lastGroup.values.push(value);
    } else {
      groups.push({ label, values: [value] });
    }

    return groups;
  }, []);

  const getLabelValue = (labelName) => {
    const found = groupedDetails.find((item) => item.label.toLowerCase() === labelName.toLowerCase());
    if (!found || found.values.length === 0) return "";
    return found.values[0];
  };

  const priceMrp = getLabelValue("MRP");
  const priceReseller = getLabelValue("Reseller Price");
  const fallbackPrice = DEVICE_PRICE_MAP[device.id];
  const finalMrp = priceMrp || fallbackPrice?.mrp || "";
  const finalReseller = priceReseller || fallbackPrice?.reseller || "";
  const priceText =
    finalMrp && finalReseller
      ? `MRP ${finalMrp} | Reseller ${finalReseller}`
      : finalMrp || finalReseller || "Price on request";

  const topSummaryLabels = ["Brand", "Model", "Type", "Authentication Method"];
  const topSummary = topSummaryLabels
    .map((label) => {
      const value = getLabelValue(label);
      return value ? { label, value } : null;
    })
    .filter(Boolean);

  const bottomDetails = groupedDetails.filter((group) => {
    const lowerLabel = group.label.toLowerCase();
    return ![
      "mrp",
      "reseller price",
      "feature",
      "feature and performance",
    ].includes(lowerLabel);
  });

  const featureGroup = groupedDetails.find(
    (group) =>
      group.label.toLowerCase() === "feature" ||
      group.label.toLowerCase() === "feature and performance",
  );
  const quickDetailsText = featureGroup?.values?.slice(0, 2).join(" • ") || "";
  const featureList = featureGroup?.values || [];

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container">
        <div className="mb-6">
          <Link href="/devices/hardware" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-hover)]">
            ← Back to Hardware
          </Link>
        </div>

        <div className="grid gap-3 sm:gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-1">
            <div className="relative aspect-[4/4] w-full overflow-hidden rounded-none bg-slate-100 sm:aspect-[3/2] lg:aspect-[6/5] lg:rounded-xl">
              <Image
                src={device.img}
                alt={device.name}
                width={800}
                height={700}
                className="h-full w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setImageModalOpen(true)}
                className="absolute inset-0 z-10 cursor-zoom-in"
                aria-label="Open device image"
              />
            </div>
          </div>

          <div className="pt-0">
            <h1 className="text-3xl tracking-tight text-slate-900 sm:text-4xl font-bold">
              {device.name}
            </h1>

            {quickDetailsText ? (
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                {quickDetailsText}
              </p>
            ) : null}

            {topSummary.length > 0 ? (
              <ul className="space-y-2 mt-6 mb-5">
                {topSummary.map((item) => (
                  <li key={item.label} className="grid grid-cols-[140px_12px_minmax(0,1fr)] items-start text-sm">
                    <span className="font-semibold text-[var(--secondary)]">{item.label}</span>
                    <span className="text-center text-slate-500">:</span>
                    <span className="text-slate-700">{item.value}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-3 flex flex-wrap items-baseline gap-2">
              <span className="text-xl text-slate-900 font-semibold">{priceText}</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/8801XXXXXXXXX?"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-[var(--primary)] bg-[var(--primary)] py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)] sm:w-auto sm:min-w-[180px] sm:px-8 text-center"
              >
                Order
              </a>
              <Link
                href="/devices/hardware"
                className="w-full rounded-full border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:w-auto sm:min-w-[180px] sm:px-8 text-center"
              >
                Back
              </Link>
            </div>

            {featureList.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-base font-semibold text-[var(--secondary)] mb-2">Feature and Performance</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                  {featureList.map((feature, idx) => (
                    <li key={`feature-${idx}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--secondary)] mb-4">Details</h2>
          <ul className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
            {bottomDetails.map((group, idx) => (
              <li key={`${group.label}-${idx}`} className="px-4 py-2 text-sm leading-6 odd:bg-[var(--primary-soft)]/30 even:bg-white">
                {group.values.length > 0 ? (
                  <div className="grid grid-cols-[160px_12px_minmax(0,1fr)] items-start gap-1">
                    <span className="font-semibold text-[var(--secondary)]">{group.label}</span>
                    <span className="text-center text-slate-500">:</span>
                    <div className="text-slate-700 space-y-1">
                      {group.values.map((value, valueIdx) => (
                        <p key={`${group.label}-value-${valueIdx}`}>{value}</p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <span className="text-slate-700">{group.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {imageModalOpen ? (
        <div className="fixed inset-0 z-[80] bg-black/90" onClick={() => setImageModalOpen(false)}>
          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8">
            <div className="relative w-full overflow-hidden sm:h-[82vh] sm:w-auto sm:max-w-[92vw]" onClick={(event) => event.stopPropagation()}>
              <Image
                src={device.img}
                alt={`${device.name} full view`}
                width={1400}
                height={1100}
                className="block w-full h-auto object-contain select-none sm:h-full sm:w-auto sm:max-w-full"
              />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setImageModalOpen(false);
              }}
              aria-label="Close image modal"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/35 text-lg text-white transition-colors hover:bg-black/55 sm:right-6 sm:top-6"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
