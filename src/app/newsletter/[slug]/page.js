import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getNewsletters } from "@/lib/newsletters";
import { formatNewsletterDate } from "@/lib/newsletters-core";
import NewsletterBody from "@/components/newsletter/NewsletterBody";
import NewsletterListItem from "@/components/newsletter/NewsletterListItem";
import NewsletterPageShell from "@/components/newsletter/NewsletterPageShell";
import { getNewsletterCategories } from "@/data/newsletterNav";

export async function generateStaticParams() {
  const newsletterItems = await getNewsletters().catch(() => []);
  return newsletterItems.map((item) => ({ slug: item.slug }));
}

function displayTitle(title = "") {
  return title.replace(/^(\[[^\]]+\]|\([^)]+\))\s*/i, "").trim() || title;
}

export default async function NewsletterDetailsPage({ params }) {
  const { slug } = await params;
  const newsletterItems = await getNewsletters();
  const categories = getNewsletterCategories(newsletterItems);

  const newsletter = newsletterItems.find((item) => item.slug === slug);

  if (!newsletter) {
    notFound();
  }

  const relatedNewsletters = newsletterItems
    .filter((item) => item.id !== newsletter.id)
    .slice(0, 3);

  const formattedDate = formatNewsletterDate(newsletter);

  return (
    <main className="min-h-screen bg-white py-8 md:py-12">
      <div className="container max-w-5xl">
        <NewsletterPageShell
          categories={categories}
          activeCategories={newsletter.categories || []}
          isAllNewsActive={false}
        >
          <article>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-1 text-sm text-black mb-6"
            >
              <ChevronLeft size={16} />
              All News
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              {formattedDate ? (
                <p className="text-sm text-black">{formattedDate}</p>
              ) : null}
              {newsletter.category ? (
                <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-0.5 text-xs font-semibold text-[var(--primary)]">
                  {newsletter.category}
                </span>
              ) : null}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-black leading-snug">
              {displayTitle(newsletter.title)}
            </h1>

            {newsletter.image ? (
              <div className="mt-6 max-w-3xl">
                <Image
                  src={newsletter.image}
                  alt={displayTitle(newsletter.title)}
                  width={768}
                  height={432}
                  className="w-full h-auto rounded-xl border border-slate-200 object-cover"
                />
              </div>
            ) : null}

            <NewsletterBody
              content={newsletter.content || newsletter.description}
            />

            {relatedNewsletters.length > 0 ? (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-sm font-semibold text-black mb-4">
                  More updates
                </h2>
                {relatedNewsletters.map((item) => (
                  <NewsletterListItem key={item.id} item={item} compact />
                ))}
              </div>
            ) : null}
          </article>
        </NewsletterPageShell>
      </div>
    </main>
  );
}
