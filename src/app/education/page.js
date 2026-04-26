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

        <section className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-black text-[var(--secondary)] mb-3">Tutorial Videos</h1>
          <p className="text-gray-600 text-base md:text-lg">
            Learn ERP17 step by step. Click and watch the training videos below.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
