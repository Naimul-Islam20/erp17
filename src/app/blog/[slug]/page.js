import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import RelatedArticlesSidebar from "@/components/blog/RelatedArticlesSidebar";
import { getBlogDetails, getBlogs } from "@/lib/blogs-api";

export async function generateStaticParams() {
  const blogs = await getBlogs().catch(() => []);
  return blogs.map((blog) => ({ slug: String(blog.id) }));
}

function formatBlogDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;
  const blogId = Number(slug);

  if (!Number.isFinite(blogId)) {
    notFound();
  }

  const [blog, blogs] = await Promise.all([getBlogDetails(blogId), getBlogs()]);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogs.filter((b) => b.id !== blog.id);
  const categories = [...new Set(relatedPosts.map((post) => post.category))];
  let hasSkippedHeroImage = false;
  let hasSkippedExcerptBlock = false;

  return (
    <main className="min-h-screen bg-white py-10 md:py-16">
      <article className="container max-w-6xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[var(--primary)]"
        >
          <ChevronLeft size={18} />
          Back to Blog
        </Link>

        <section className="mt-2 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex rounded-full bg-[var(--primary-soft)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                  {blog.category}
                </span>
                <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                  <Calendar className="h-4 w-4 text-[var(--primary)]" />
                  {formatBlogDate(blog.date)}
                </p>
              </div>
              <h1 className="mt-4 text-[1.75rem] font-extrabold leading-tight text-[var(--secondary)] md:text-5xl">
                {blog.title}
              </h1>
            </div>

            <div className="overflow-hidden rounded-lg">
              <div className="relative mt-5 h-[260px] w-full rounded-lg md:h-[420px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="rounded-lg object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mt-5 text-lg font-medium leading-8 text-[var(--secondary)]">
                {blog.excerpt}
              </p>

              <div className="mt-5 space-y-3 text-base leading-8">
                {blog.blocks.map((block) => {
                  if (block.type === "image" && block.image_url) {
                    if (
                      !hasSkippedHeroImage &&
                      block.image_url === blog.image
                    ) {
                      hasSkippedHeroImage = true;
                      return null;
                    }

                    return (
                      <div
                        key={block.id}
                        className="overflow-hidden rounded-2xl border border-slate-200"
                      >
                        <div className="relative h-[240px] w-full md:h-[360px]">
                          <Image
                            src={block.image_url}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    );
                  }

                  if (block.type === "description" && block.body) {
                    if (
                      !hasSkippedExcerptBlock &&
                      block.body === blog.excerpt
                    ) {
                      hasSkippedExcerptBlock = true;
                      return null;
                    }

                    return <p key={block.id}>{block.body}</p>;
                  }

                  if (block.type === "point") {
                    return (
                      <div key={block.id} className="space-y-2">
                        {block.point_title ? (
                          <h3 className="text-2xl font-bold text-[var(--secondary)]">
                            {block.point_title}
                          </h3>
                        ) : null}
                        {Array.isArray(block.points) &&
                        block.points.length > 0 ? (
                          <ul className="list-disc space-y-0.5 pl-6 font-semibold text-[var(--secondary)] marker:text-[var(--primary)]">
                            {block.points.map((point, index) => (
                              <li key={`${block.id}-${index}`}>{point}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    );
                  }

                  if (block.type === "h2" && block.text) {
                    return (
                      <h2
                        key={block.id}
                        className="text-3xl font-bold text-[var(--secondary)]"
                      >
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "h3" && block.text) {
                    return (
                      <h3
                        key={block.id}
                        className="text-2xl font-bold text-[var(--secondary)]"
                      >
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "h4" && block.text) {
                    return (
                      <h4
                        key={block.id}
                        className="text-xl font-bold text-[var(--secondary)]"
                      >
                        {block.text}
                      </h4>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-8">
            <RelatedArticlesSidebar
              posts={relatedPosts}
              categories={categories}
            />
          </aside>
        </section>
      </article>
    </main>
  );
}
