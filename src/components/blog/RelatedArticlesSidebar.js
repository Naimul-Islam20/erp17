"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

function formatBlogDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function RelatedArticlesSidebar({ posts, categories }) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [posts, query, selectedCategory]);

  return (
    <div className="lg:sticky lg:top-28">
      <div>
        <h3 className="text-2xl font-bold text-[var(--secondary)]">
          Related Articles
        </h3>
      </div>

      <div className="mt-5 space-y-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search blogs"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pr-4 pl-10 text-sm text-slate-700 outline-none transition focus:border-[var(--primary)]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--primary)]"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 space-y-5">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="line-clamp-2 text-lg font-bold leading-tight text-[var(--secondary)]">
                  {post.title}
                </h4>
                <p className="mt-2 text-xs text-slate-500">
                  {formatBlogDate(post.date)}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500">
            No related articles found.
          </div>
        )}
      </div>
    </div>
  );
}
