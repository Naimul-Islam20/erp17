import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import blogsData from "@/data/blogs.json";

export function generateStaticParams() {
  return blogsData.map((blog) => ({ slug: blog.slug }));
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

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
        <Link
          href="/blog"
          className="text-sky-500 hover:underline mt-4 inline-block"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  // Related posts (excluding current)
  const relatedPosts = blogsData.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white py-10 md:py-16">
      <article className="container max-w-4xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[var(--primary)]"
        >
          <ChevronLeft size={18} />
          Back to Blog
        </Link>

        <section>
          <span className="inline-flex rounded-full bg-[var(--primary-soft)]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
            {blog.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[var(--secondary)] md:text-5xl">
            {blog.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>{blog.author}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[var(--primary)]" />
              {formatBlogDate(blog.date)}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--primary)]" />
              {blog.readTime}
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <div className="relative h-[260px] w-full md:h-[420px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="text-lg font-medium leading-8 text-[var(--secondary)]">
              {blog.excerpt}
            </p>

            <div className="mt-10 space-y-6 text-base leading-8">
              <p>
                Effective HR management is the backbone of any successful
                organization. In the dynamic business environment of Bangladesh,
                staying ahead with digital solutions like ERP17 is no longer a
                luxury but a necessity. Companies are moving away from manual
                spreadsheets and paperwork to integrated systems that handle
                everything from recruitment to payroll.
              </p>

              <h3 className="text-2xl font-bold text-[var(--secondary)]">
                Why Digital HR Matters
              </h3>
              <p>
                When processes are automated, HR teams can focus on what really
                matters, the people. For instance, automated attendance tracking
                with geofencing ensures that employees are where they need to
                be, while automated payroll reduces the monthly administrative
                burden by up to 70%.
              </p>

              <ul className="space-y-2 pl-5">
                <li>Reduced human errors in payroll calculations.</li>
                <li>Better transparency in leave and attendance management.</li>
                <li>Enhanced security for confidential employee data.</li>
                <li>
                  Real-time reporting and analytics for better decision-making.
                </li>
              </ul>

              <p>
                As we look toward the future, the integration of AI and machine
                learning in HR processes will further revolutionize how we
                manage talent. From predicting employee burnout to identifying
                the best candidates through data-driven recruitment, the
                possibilities are endless.
              </p>

              <p>
                In conclusion, embracing a comprehensive HR and payroll
                solution like ERP17 allows Bangladeshi companies to scale
                efficiently while maintaining a happy, productive workforce.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-slate-200 pt-10">
          <h3 className="text-2xl font-bold text-[var(--secondary)]">
            Related Articles
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="line-clamp-2 text-lg font-bold leading-tight text-[var(--secondary)]">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">
                    {formatBlogDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
