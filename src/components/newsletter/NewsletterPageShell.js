import { Suspense } from "react";
import NewsletterSidebar from "@/components/newsletter/NewsletterSidebar";

function SidebarFallback() {
  return <aside className="w-full lg:w-[200px] shrink-0 h-32 bg-slate-100 animate-pulse rounded" />;
}

export default function NewsletterPageShell({
  children,
  categories,
  activeCategories = [],
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
      <Suspense fallback={<SidebarFallback />}>
        <NewsletterSidebar
          categories={categories}
          activeCategories={activeCategories}
        />
      </Suspense>
      <div className="flex-1 min-w-0 w-full">{children}</div>
    </div>
  );
}
