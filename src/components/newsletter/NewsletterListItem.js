import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatNewsletterDate } from "@/lib/newsletters-core";

function displayTitle(title = "") {
  return title.replace(/^(\[[^\]]+\]|\([^)]+\))\s*/i, "").trim() || title;
}

export default function NewsletterListItem({ item, compact = false }) {
  const formattedDate = formatNewsletterDate(item);

  if (compact) {
    return (
      <article className="py-3 border-b border-slate-100 last:border-b-0">
        {formattedDate ? (
          <p className="text-xs text-black mb-1">{formattedDate}</p>
        ) : null}
        <h3 className="text-sm font-medium text-black">
          <Link href={`/newsletter/${item.slug}`}>
            {displayTitle(item.title)}
          </Link>
        </h3>
      </article>
    );
  }

  return (
    <article className="relative pl-6 pb-8 last:pb-0">
      <span
        className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-[calc(50%+1px)] rounded-full border-2 border-white bg-[var(--primary)] ring-2 ring-[var(--primary-soft)]"
        aria-hidden
      />

      <Link
        href={`/newsletter/${item.slug}`}
        className="block rounded-xl border border-slate-200 bg-slate-50/80 p-4 md:p-5"
      >
        <div className="flex flex-wrap items-center gap-2">
          {formattedDate ? (
            <time
              dateTime={item.date || undefined}
              className="text-xs font-medium text-[var(--primary)]"
            >
              {formattedDate}
            </time>
          ) : null}
          {item.category ? (
            <span className="rounded-full bg-[var(--primary-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--primary)]">
              {item.category}
            </span>
          ) : null}
        </div>

        <h2 className="mt-2 text-base md:text-lg font-semibold text-black leading-snug pr-6">
          {displayTitle(item.title)}
        </h2>

        {item.excerpt ? (
          <p className="mt-2 text-sm text-black leading-relaxed line-clamp-2">
            {item.excerpt}
          </p>
        ) : null}

        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-black">
          Read update
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </article>
  );
}
