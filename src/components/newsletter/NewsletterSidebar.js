"use client";

import Link from "next/link";

function navLinkClass(isActive) {
  return `inline-flex rounded-full border px-3 py-1.5 text-sm transition-colors ${
    isActive
      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
      : "border-slate-200 bg-white text-black hover:border-[var(--primary)] hover:text-[var(--primary)]"
  }`;
}

export default function NewsletterSidebar({
  categories = [],
  activeCategories = [],
  isAllNewsActive = false,
  onCategorySelect,
}) {
  const isCategoryActive = (name) => {
    return activeCategories.includes(name);
  };

  const renderNavItem = ({ label, href, isActive, onClick }) => {
    if (onClick) {
      return (
        <button type="button" onClick={onClick} className={navLinkClass(isActive)}>
          {label}
        </button>
      );
    }

    return (
      <Link href={href} className={navLinkClass(isActive)}>
        {label}
      </Link>
    );
  };

  return (
    <aside className="w-full lg:w-[200px] shrink-0">
      <nav
        className="lg:sticky lg:top-24 rounded-xl border border-slate-200 bg-slate-50/50 p-4"
        aria-label="News navigation"
      >
        <div className="flex flex-wrap gap-2">
          {renderNavItem({
            label: "All News",
            href: "/newsletter",
            isActive: isAllNewsActive,
            onClick: onCategorySelect ? () => onCategorySelect(null) : undefined,
          })}
          <ul className="flex flex-wrap gap-2">
            {categories.map((name) => (
              <li key={name}>
                {renderNavItem({
                  label: name,
                  href: `/newsletter?category=${encodeURIComponent(name)}`,
                  isActive: isCategoryActive(name),
                  onClick: onCategorySelect
                    ? () => onCategorySelect(name)
                    : undefined,
                })}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
