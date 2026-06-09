import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PLAN_COUNT = 4;
const Y = Array(PLAN_COUNT).fill("yes");
const N = Array(PLAN_COUNT).fill("no");
const ALL = Array(PLAN_COUNT).fill("All");

/** Add more sections/rows here — run `node scripts/build-plans-data.mjs` to refresh */
const rows = [
  { type: "section", label: "Module & Features" },
  { type: "feature", label: "Module", values: ALL },
  { type: "feature", label: "User", values: ["5", "10", "40", "Unlimited"] },
  { type: "feature", label: "Storage (GB)", values: ["1", "5", "20", "100 GB"] },
  {
    type: "feature",
    label: "Customization",
    values: [
      "no",
      "Yes (Payment Applicable)",
      "Yes (Payment Applicable)",
      "yes",
    ],
  },
  { type: "feature", label: "Training", values: Y },
  {
    type: "feature",
    label: "Support",
    values: [
      "Yes (General)",
      "Yes (General)",
      "Priority (24/7)",
      "Priority (24/7)",
    ],
  },
  { type: "feature", label: "Account Manager", values: ["no", "no", "yes", "yes"] },
  {
    type: "feature",
    label: "POS Outlet",
    values: ["3", "6", "10", "Unlimited"],
  },
  { type: "feature", label: "AI Feature", values: ["no", "yes", "yes", "yes"] },
  {
    type: "feature",
    label: "Employee",
    values: ["10", "20", "50", "Unlimited"],
  },
  { type: "feature", label: "Multi Company", values: ["no", "no", "yes", "yes"] },
  {
    type: "feature",
    label: "Multi Branch",
    values: ["5", "10", "Unlimited", "Unlimited"],
  },
  { type: "feature", label: "API", values: ["no", "no", "yes", "yes"] },
];

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 2500,
    yearlyPrice: 2000,
    priceLabel: null,
    ctaHref: "/get-quote",
    ctaLabel: "Get a Quote",
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: 5000,
    yearlyPrice: 4000,
    priceLabel: null,
    ctaHref: "/get-quote",
    ctaLabel: "Get a Quote",
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 15000,
    yearlyPrice: 12000,
    priceLabel: null,
    ctaHref: "/get-quote",
    ctaLabel: "Get a Quote",
  },
  {
    id: "corporate",
    name: "Corporate",
    monthlyPrice: null,
    priceLabel: "Call Us",
    ctaHref: "tel:+8801982211000",
    ctaLabel: "Call Us",
    ctaType: "call",
  },
];

const content = `/** Auto-generated from scripts/build-plans-data.mjs — run \`node scripts/build-plans-data.mjs\` to refresh */

export const PLANS = ${JSON.stringify(plans, null, 2)};

export const COMPARISON_ROWS = ${JSON.stringify(rows, null, 2)};
`;

writeFileSync(join(__dirname, "../src/data/plansComparison.js"), content);
console.log("Wrote plansComparison.js with", rows.length, "rows");
