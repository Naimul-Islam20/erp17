import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  ChevronLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import blogsData from "@/data/blogs.json";

export function generateStaticParams() {
  return blogsData.map((blog) => ({ slug: blog.slug }));
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
    <main className="py-10 md:py-16 bg-white min-h-screen">
      {/* Header / Breadcrumb */}
      <div className="container mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-sky-500 transition-colors font-medium group"
        >
          <ChevronLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Blog
        </Link>
      </div>

      <article className="container">
        <div>
          {/* Category & Title */}
          <div className="mb-8">
            <span className="bg-sky-100 text-sky-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#141451] leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-y border-gray-100 py-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {blog.author[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-none">
                    {blog.author}
                  </p>
                  <p className="text-xs mt-1">Author</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-sky-500" />
                <span>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-sky-500" />
                <span>{blog.readTime}</span>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
                  Share:
                </span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all text-gray-400">
                    <Facebook size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all text-gray-400">
                    <Twitter size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
            <p className="text-xl font-medium text-[#141451] mb-8 leading-relaxed italic border-l-4 border-sky-500 pl-6">
              {blog.excerpt}
            </p>

            <p className="mb-6">
              Effective HR management is the backbone of any successful
              organization. In the dynamic business environment of Bangladesh,
              staying ahead with digital solutions like ERP17 is no longer a
              luxury but a necessity. Companies are moving away from manual
              spreadsheets and paperwork to integrated systems that handle
              everything from recruitment to payroll.
            </p>

            <h3 className="text-2xl font-bold text-[#141451] mt-10 mb-4">
              Why Digital HR Matters
            </h3>
            <p className="mb-6">
              When processes are automated, HR teams can focus on what really
              matters—the people. For instance, automated attendance tracking
              with geofencing ensures that employees are where they need to be,
              while automated payroll reduces the monthly administrative burden
              by up to 70%.
            </p>

            <div className="bg-sky-50 p-8 rounded-2xl mb-10">
              <h4 className="text-xl font-bold text-[#141451] mb-3 text-sky-700">
                Key Benefits of Modern HR Systems:
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Reduced human errors in payroll calculations.</li>
                <li>Better transparency in leave and attendance management.</li>
                <li>Enhanced security for confidential employee data.</li>
                <li>
                  Real-time reporting and analytics for better decision-making.
                </li>
              </ul>
            </div>

            <p className="mb-6">
              As we look toward the future, the integration of AI and machine
              learning in HR processes will further revolutionize how we manage
              talent. From predicting employee burnout to identifying the best
              candidates through data-driven recruitment, the possibilities are
              endless.
            </p>

            <p>
              In conclusion, embracing a comprehensive HR and payroll solution
              like ERP17 allows Bangladeshi companies to scale efficiently while
              maintaining a happy, productive workforce.
            </p>
          </div>

          {/* Related Posts */}
          <div className="pt-16 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-[#141451] mb-8">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className="group"
                >
                  <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-[#141451] group-hover:text-sky-500 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2">{post.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
