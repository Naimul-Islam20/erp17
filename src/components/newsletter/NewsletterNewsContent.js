"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NewsletterListItem from "@/components/newsletter/NewsletterListItem";
import NewsletterPageShell from "@/components/newsletter/NewsletterPageShell";

function getCategoryFromUrl() {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("category");
}

export default function NewsletterNewsContent({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const syncCategoryFromUrl = () => {
      setActiveCategory(getCategoryFromUrl());
    };

    syncCategoryFromUrl();
    window.addEventListener("popstate", syncCategoryFromUrl);

    return () => {
      window.removeEventListener("popstate", syncCategoryFromUrl);
    };
  }, []);

  const handleCategorySelect = (category) => {
    const nextCategory = category || null;
    const nextUrl = nextCategory
      ? `/newsletter?category=${encodeURIComponent(nextCategory)}`
      : "/newsletter";

    window.history.pushState({}, "", nextUrl);
    setActiveCategory(nextCategory);
  };

  const filteredItems = activeCategory
    ? items.filter((item) => item.categories?.includes(activeCategory))
    : items;

  return (
    <NewsletterPageShell
      categories={categories}
      activeCategories={activeCategory ? [activeCategory] : []}
      isAllNewsActive={!activeCategory}
      onCategorySelect={handleCategorySelect}
    >
      <div className="mb-8">
        <nav className="flex gap-2 text-sm text-black mb-4">
          <Link href="/">Home</Link>
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
        <div className="relative border-l-2 border-[var(--primary-soft)] ml-1">
          {filteredItems.map((item) => (
            <NewsletterListItem key={item.id} item={item} />
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
