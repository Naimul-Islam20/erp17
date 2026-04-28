import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft } from "lucide-react";
import { getNewsletters } from "@/lib/newsletters";

export default async function NewsletterDetailsPage({ params }) {
  const newsletterItems = await getNewsletters();
  const slug = params.slug;

  const newsletter = newsletterItems.find((item) => item.slug === slug);

  if (!newsletter) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Newsletter not found</h2>
        <Link href="/newsletter" className="text-sky-500 hover:underline mt-4 inline-block">
          Back to Newsletter
        </Link>
      </div>
    );
  }

  const relatedNewsletters = newsletterItems
    .filter((item) => item.id !== newsletter.id)
    .slice(0, 3);

  return (
    <main className="py-8 md:py-16 bg-white min-h-screen">
      <div className="container mb-6 md:mb-8">
        <Link
          href="/newsletter"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-sky-500 transition-colors font-medium group"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Newsletter
        </Link>
      </div>

      <article className="container">
        <div className="mb-6 md:mb-8 w-full max-w-4xl">
          <span className="bg-sky-100 text-sky-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            {newsletter.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#141451] leading-tight mb-5 md:mb-6">
            {newsletter.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 border-y border-gray-100 py-4 md:py-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-sky-500" />
              <span>
                {new Date(newsletter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[220px] sm:h-[260px] md:h-[420px] w-full max-w-4xl rounded-2xl overflow-hidden mb-5 md:mb-6">
          <Image
            src={newsletter.image}
            alt={newsletter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="w-full max-w-4xl">
        

          <div className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed text-justify text-base md:text-lg break-words whitespace-normal">
            <p className="break-words whitespace-normal">
              {newsletter.description || "Details will be available soon."}
            </p>
          </div>

        </div>

        <div className="pt-10 md:pt-16 border-t border-gray-100 mt-10 md:mt-16 w-full max-w-4xl">
          <h3 className="text-xl md:text-2xl font-bold text-[#141451] mb-6 md:mb-8">
            Related Newsletters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedNewsletters.map((item) => (
              <Link
                href={`/newsletter/${item.slug}`}
                key={item.id}
                className="group"
              >
                <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-[#141451] group-hover:text-sky-500 transition-colors line-clamp-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
