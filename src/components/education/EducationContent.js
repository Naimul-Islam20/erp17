"use client";

import { useMemo, useState } from "react";

export default function EducationContent({ items = [] }) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return items;

    return items.filter((item) => {
      const title = item.title?.toLowerCase() || "";
      const category = item.category?.toLowerCase() || "";
      return title.includes(search) || category.includes(search);
    });
  }, [items, query]);

  return (
    <>
      <section className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="text-left max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3">
            Tutorial Videos
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Learn ERP17 step by step. Click and watch the training videos below.
          </p>
        </div>

        <form
          className="flex w-full lg:w-auto lg:min-w-[440px] gap-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tutorial videos..."
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
          />
          <button
            type="submit"
            className="rounded-xl bg-[var(--primary)] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Search
          </button>
        </form>
      </section>

      {filteredItems.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((video) => (
            <article
              key={video.id}
              className="rounded-2xl border border-gray-200 overflow-hidden bg-white"
            >
              <div className="aspect-video bg-slate-100">
                {video.youtubeId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-4 text-center text-sm text-slate-500">
                    Video unavailable
                  </div>
                )}
              </div>
              <div className="p-4">
                {video.category ? (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                    {video.category}
                  </p>
                ) : null}
                <h2 className="text-lg font-bold text-[var(--secondary)]">
                  {video.title}
                </h2>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <p className="py-10 text-sm text-slate-600">
          {query.trim()
            ? "No tutorial videos match your search."
            : "No tutorial videos available yet."}
        </p>
      )}
    </>
  );
}
