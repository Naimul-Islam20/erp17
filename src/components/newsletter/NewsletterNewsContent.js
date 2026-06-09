"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import NewsletterListItem from "@/components/newsletter/NewsletterListItem";
import NewsletterPageShell from "@/components/newsletter/NewsletterPageShell";

function groupByMonth(items) {
  const groups = [];
  const map = new Map();

  for (const item of items) {
    const label =
      item.month && item.year ? `${item.month} ${item.year}` : "Updates";
    if (!map.has(label)) {
      const group = { label, items: [] };
      map.set(label, group);
      groups.push(group);
    }
    map.get(label).items.push(item);
  }

  return groups;
}

export default function NewsletterNewsContent({ items, categories }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filteredItems = activeCategory
    ? items.filter((item) => item.categories?.includes(activeCategory))
    : items;

  const monthGroups = groupByMonth(filteredItems);

  return (
    <NewsletterPageShell
      categories={categories}
      activeCategories={activeCategory ? [activeCategory] : []}
    >
      <div className="mb-8">
        <nav className="flex gap-2 text-sm text-black mb-4">
          <Link href="/">
            Home
          </Link>
          <span>/</span>
          <span>Newsletter</span>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold text-black">
          {activeCategory || "All News"}
        </h1>
        <p className="mt-1 text-sm text-black">
          {filteredItems.length} update{filteredItems.length === 1 ? "" : "s"}
        </p>
      </div>

      {filteredItems.length > 0 ? (
        <div className="space-y-10">
          {monthGroups.map((group) => (
            <section key={group.label}>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-200">
                {group.label}
              </h2>
              <div className="relative border-l-2 border-[var(--primary-soft)] ml-1">
                {group.items.map((item) => (
                  <NewsletterListItem key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className="text-sm text-black py-8">
          No updates in this category.{" "}
          <Link href="/newsletter" className="text-[var(--primary)]">
            View all
          </Link>
        </p>
      )}
    </NewsletterPageShell>
  );
}
