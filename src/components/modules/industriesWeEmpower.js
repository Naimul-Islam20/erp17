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
import SectionHeader from "@/components/ui/SectionHeader";

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

  return <Icon className="h-5 w-5" strokeWidth={2} />;
}

export default function IndustriesWeEmpower() {
  return (
    <section
      id="industries-we-empower"
      className="scroll-mt-20 bg-slate-50 py-8 md:py-12"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Industries"
          title="Industries We Empower"
          description="From manufacturing floors to retail chains — ERP17 adapts to the way your sector operates."
        />

        <div className="grid grid-cols-1 gap-4 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((item, index) => (
            <article
              key={`${item.icon}-${index}`}
              className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 pt-4 pb-3"
            >
              <div className="flex h-full flex-col gap-y-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                    <IndustryIcon icon={item.icon} />
                  </div>
                  <h3 className="min-w-0 text-base font-bold leading-snug text-[var(--secondary)]">
                    {item.title}
                  </h3>
                </div>
                <p
                  lang="bn"
                  dir="ltr"
                  className={`${notoBengali.className} text-sm leading-relaxed text-slate-600`}
                >
                  {item.descriptionBn}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
