import { Noto_Sans_Bengali } from "next/font/google";
import {
  BadgeDollarSign,
  Building2,
  Car,
  Factory,
  FerrisWheel,
  GraduationCap,
  HeartPulse,
  Hotel,
  Leaf,
  Package,
  Pill,
  ShoppingBag,
  ShoppingBasket,
  Store,
  Truck,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const industries = [
  {
    icon: "factory",
    title: "Manufacturing & Production",
    descriptionBn: "ভারী শিল্প ও উৎপাদনমুখী প্রতিষ্ঠানের জন্য।",
  },
  {
    icon: "shirt",
    title: "RMG & Textiles",
    descriptionBn: "তৈরি পোশাক ও টেক্সটাইল খাতের বিশাল অপারেশন সামলাতে।",
  },
  {
    icon: "basket",
    title: "FMCG & Food Processing",
    descriptionBn: "দ্রুত পচনশীল ও নিত্যপ্রয়োজনীয় পণ্য উৎপাদনকারী প্রতিষ্ঠান।",
  },
  {
    icon: "medical",
    title: "Pharmaceuticals",
    descriptionBn: "ঔষধ উৎপাদন ও কঠোর মান নিয়ন্ত্রিত ডিস্ট্রিবিউশন।",
  },
  {
    icon: "store",
    title: "Retail & Superstore Chains",
    descriptionBn: "মাল্টি-ব্রাঞ্চ এবং রিয়েল-টাইম পস (POS) ইনভেন্টরি।",
  },
  {
    icon: "box",
    title: "Distribution & Wholesale",
    descriptionBn: "বড় আকারের ডিস্ট্রিবিউশন নেটওয়ার্ক ও হোলসেল ব্যবসার জন্য।",
  },
  {
    icon: "bag",
    title: "E-commerce & Marketplaces",
    descriptionBn: "অনলাইন স্টোর বিল্ডার এবং অটোমেটেড অর্ডার ম্যানেজমেন্ট।",
  },
  {
    icon: "hotel",
    title: "Hospitality (Hotels & Resorts)",
    descriptionBn: "রুম বুকিং, গেস্ট সার্ভিস এবং ব্যাক-অফিস অপারেশন।",
  },
  {
    icon: "health",
    title: "Healthcare & Diagnostics",
    descriptionBn: "হাসপাতাল, ক্লিনিক ও ডায়াগনস্টিক সেন্টারের সুশৃঙ্খল ব্যবস্থাপনা।",
  },
  {
    icon: "education",
    title: "Education & Institutions",
    descriptionBn: "স্কুল, কলেজ বা ট্রেনিং সেন্টারের ফি ও স্টাফ ম্যানেজমেন্ট।",
  },
  {
    icon: "construction",
    title: "Real Estate & Construction",
    descriptionBn: "প্রজেক্ট ভিত্তিক কস্ট ট্র্যাকিং এবং কাস্টমার বিলিং।",
  },
  {
    icon: "logistics",
    title: "Logistics & Freight Forwarding",
    descriptionBn: "পণ্য পরিবহন, কুরিয়ার ও শিপিং ম্যানেজমেন্ট।",
  },
  {
    icon: "auto",
    title: "Automobile & Service Centers",
    descriptionBn: "গাড়ি বিক্রয় ও পরবর্তী সার্ভিস রেকর্ডের পূর্ণ সমাধান।",
  },
  {
    icon: "game",
    title: "Entertainment & Game Zones",
    descriptionBn: "ইনডোর গেমিং, থিম পার্ক এবং টিকিটিং সিস্টেম।",
  },
  {
    icon: "agri",
    title: "Agriculture & Agro-business",
    descriptionBn: "ফিড মিল, পোল্ট্রি এবং এগ্রো-ফার্মিং সেক্টর।",
  },
  {
    icon: "services",
    title: "Service-Based Agencies",
    descriptionBn: "আইটি, অ্যাডভার্টাইজিং এবং কনসালটেন্সি ফার্ম।",
  },
  {
    icon: "corporate",
    title: "Corporate Conglomerates",
    descriptionBn: "একাধিক অঙ্গপ্রতিষ্ঠানকে এক ড্যাশবোর্ডে নিয়ন্ত্রণ করার জন্য।",
  },
];

function IndustryIcon({ icon }) {
  const icons = {
    factory: Factory,
    shirt: ShoppingBag,
    basket: ShoppingBasket,
    medical: Pill,
    store: Store,
    box: Package,
    bag: ShoppingBag,
    hotel: Hotel,
    health: HeartPulse,
    education: GraduationCap,
    construction: Building2,
    logistics: Truck,
    auto: Car,
    game: FerrisWheel,
    agri: Leaf,
    services: Wrench,
    corporate: BadgeDollarSign,
  };
  const Icon = icons[icon] ?? Building2;

  return (
    <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
  );
}

function IndustryListBlock({ items, idPrefix }) {
  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, index) => (
        <div key={`${idPrefix}-${index}`} className="py-5 md:py-6 first:pt-4 last:pb-4">
          <div className="flex items-start gap-3 md:gap-4">
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] ring-1 ring-[var(--primary-soft)]"
            >
              <IndustryIcon icon={item.icon} />
            </span>

            <div>
              <h3 className="text-base md:text-lg font-bold text-[var(--secondary)]">{item.title}</h3>
              <p
                lang="bn"
                dir="ltr"
                className={`${notoBengali.className} mt-2 text-[15px] md:text-[17px] text-slate-700 leading-[1.85]`}
              >
                {item.descriptionBn}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function IndustriesWeEmpower() {
  const mid = Math.ceil(industries.length / 2);
  const leftCol = industries.slice(0, mid);
  const rightCol = industries.slice(mid);

  return (
    <section
      id="industries-we-empower"
      className="py-12 md:py-20 scroll-mt-20"
    >
      <div className="container">
        <header className="text-center mb-10 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--secondary)]">
            Industries We Empower
          </h2>
        </header>

        <div className="mx-auto w-full max-w-7xl rounded-2xl border border-slate-200 bg-white px-5 py-2 md:px-8 md:py-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-slate-200">
            <div className="md:pr-6">
              <IndustryListBlock items={leftCol} idPrefix="ind-l" />
            </div>
            <div className="md:pl-6">
              <IndustryListBlock items={rightCol} idPrefix="ind-r" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
