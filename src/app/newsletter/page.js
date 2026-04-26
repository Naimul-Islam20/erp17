import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Newsletter | ERP17",
  description: "Subscribe to ERP17 newsletter for product updates and insights.",
};

const newsletterItems = [
  {
    title: "ERP17 Cloud Solution Product Update - Q2 2026",
    date: "2026-04-12",
    readTime: "4 min read",
    category: "Product Update",
    image: "/img/home/Banner.svg",
    summary:
      "Major improvements in Accounts, Inventory automation, and role-based dashboard performance for enterprise users.",
  },
  {
    title: "How ERP17 Reduces Manual Work Across Departments",
    date: "2026-03-24",
    readTime: "5 min read",
    category: "Operations",
    image: "/img/home/Banner.svg",
    summary:
      "A practical guide on automating HR, Sales, and reporting workflows using ERP17 integrated modules.",
  },
  {
    title: "New Tutorial Series: ERP17 Mobile Operations",
    date: "2026-02-15",
    readTime: "3 min read",
    category: "Education",
    image: "/img/home/Banner.svg",
    summary:
      "Step-by-step learning resources for ESS app, management dashboard app, and customer portal usage.",
  },
  {
    title: "Security & Compliance Bulletin",
    date: "2026-01-22",
    readTime: "4 min read",
    category: "Security",
    image: "/img/home/Banner.svg",
    summary:
      "Latest updates on ERP17 data encryption, backups, access controls, and best practices for secure deployment.",
  },
];

export default function NewsletterPage() {
  return (
    <main className="py-10 md:py-16 bg-gray-50 min-h-screen">
      <div className="container">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Newsletter</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--secondary)] mb-4">ERP17 Newsletter</h1>
          <p className="text-lg text-gray-600">
            Stay updated with new modules, release notes, training events, and business automation insights from ERP17.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletterItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden shrink-0">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[var(--secondary)] leading-snug mb-3 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">{item.summary}</p>

                <button
                  type="button"
                  className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-bold text-sm flex items-center gap-1"
                >
                  Read Newsletter
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}
