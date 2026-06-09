import { isHtmlContent } from "@/lib/newsletters-core";

const htmlContentClassName =
  "mt-8 newsletter-content text-black leading-relaxed text-base max-w-3xl [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_a]:text-[var(--primary)] [&_a]:underline";

export default function NewsletterBody({ content = "" }) {
  if (!content) return null;

  if (isHtmlContent(content)) {
    return (
      <div
        className={htmlContentClassName}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  const paragraphs = content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="mt-8 space-y-4 text-black leading-relaxed text-base max-w-3xl">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}
