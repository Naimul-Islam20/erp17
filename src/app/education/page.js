import Link from "next/link";

export const metadata = {
  title: "Education | ERP17",
  description: "Watch ERP17 tutorial videos and product guidance.",
};

const tutorials = [
  {
    title: "ERP17 Platform Overview",
    description: "Get a quick walkthrough of ERP17 modules and dashboard experience.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "HRM and Attendance Setup",
    description: "Learn how to configure attendance flow, shifts, and approvals.",
    youtubeId: "aqz-KE-bpKQ",
  },
  {
    title: "Accounts and Invoicing Basics",
    description: "Understand invoicing, ledger entries, and report generation.",
    youtubeId: "ysz5S6PUM-U",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-6xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Education</span>
        </nav>

        <section className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-left max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3">Tutorial Videos</h1>
            <p className="text-gray-600 text-base md:text-lg">
              Learn ERP17 step by step. Click and watch the training videos below.
            </p>
          </div>

          <form className="flex w-full lg:w-auto lg:min-w-[440px] gap-2">
            <input
              type="text"
              placeholder="Search tutorial videos..."
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-soft)]"
            />
            <button
              type="button"
              className="rounded-xl bg-[var(--primary)] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
            >
              Search
            </button>
          </form>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((video) => (
            <article key={video.title} className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-[var(--secondary)]">{video.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{video.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
