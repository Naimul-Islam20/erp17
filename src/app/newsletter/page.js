import { Suspense } from "react";
import { getNewsletters } from "@/lib/newsletters";
import NewsletterNewsContent from "@/components/newsletter/NewsletterNewsContent";
import { getNewsletterCategories } from "@/data/newsletterNav";

export const metadata = {
  title: "All News | ERP17",
  description: "ERP17 news and service updates.",
};

export default async function NewsletterPage() {
  const newsletterItems = await getNewsletters();
  const categories = getNewsletterCategories(newsletterItems);

  return (
    <main className="min-h-screen bg-white py-8 md:py-12">
      <div className="container max-w-5xl">
        <Suspense fallback={<p className="text-black text-sm">Loading…</p>}>
          <NewsletterNewsContent items={newsletterItems} categories={categories} />
        </Suspense>
      </div>
    </main>
  );
}
