import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getBlogs } from "@/lib/blogs-api";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="py-10 md:py-16 bg-gray-50 min-h-screen">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--secondary)] mb-6">
            Our Insights & <span className="text-[var(--secondary)]">Blog</span>
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest trends in HR management, payroll automation, and workplace productivity in Bangladesh.
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>

                <div className="h-[60px] mb-3">
                  <h2 className="text-xl font-bold text-[var(--secondary)] line-clamp-2 group-hover:text-[var(--secondary)] transition-colors leading-snug">
                    <Link href={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h2>
                </div>

                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-start pt-4 border-t border-gray-100 mt-auto">
                  <Link 
                    href={`/blog/${blog.id}`}
                    className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-bold text-sm flex items-center gap-1 group/link"
                  >
                    Read More 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        ) : (
          <p className="py-10 text-center text-sm text-slate-600">
            No blog data available yet.
          </p>
        )}
      </div>
    </main>
  );
}
