import NewsletterSidebar from "@/components/newsletter/NewsletterSidebar";

export default function NewsletterPageShell({
  children,
  categories,
  activeCategories = [],
  isAllNewsActive = false,
  onCategorySelect,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      <NewsletterSidebar
        categories={categories}
        activeCategories={activeCategories}
        isAllNewsActive={isAllNewsActive}
        onCategorySelect={onCategorySelect}
      />
      <div className="flex-1 min-w-0 w-full">{children}</div>
    </div>
  );
}
