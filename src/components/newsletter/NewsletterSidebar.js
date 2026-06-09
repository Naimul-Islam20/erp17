"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function navLinkClass(isActive) {
  return `block py-1.5 text-sm text-black ${
    isActive ? "font-semibold" : "font-medium"
  }`;
}

export default function NewsletterSidebar({
  categories = [],
  activeCategories = [],
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category");

  const isNewsletterList = pathname === "/newsletter" || pathname === "/newsletter/";
  const isAllNewsActive =
    isNewsletterList && !queryCategory && activeCategories.length === 0;

  const isCategoryActive = (name) => {
    if (queryCategory && queryCategory === name) return true;
    return activeCategories.includes(name);
  };

  return (
    <aside className="w-full lg:w-[200px] shrink-0">
      <nav
        className="lg:sticky lg:top-24 space-y-5 rounded-xl border border-slate-200 bg-slate-50/50 p-4"
        aria-label="News navigation"
      >
        <div>
          <p className="text-xs font-semibold text-black mb-2">News</p>
          <Link href="/newsletter" className={navLinkClass(isAllNewsActive)}>
            All News
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold text-black mb-2">Categories</p>
          <ul className="space-y-1">
            {categories.map((name) => (
              <li key={name}>
                <Link
                  href={`/newsletter?category=${encodeURIComponent(name)}`}
                  className={navLinkClass(isCategoryActive(name))}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
