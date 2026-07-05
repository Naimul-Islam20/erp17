import Link from "next/link";
import EducationContent from "@/components/education/EducationContent";
import { getEducations } from "@/lib/educations-api";

export const metadata = {
  title: "Education | ERP17",
  description: "Watch ERP17 tutorial videos and product guidance.",
};

export default async function EducationPage() {
  const tutorials = await getEducations();

  return (
    <main className="min-h-screen bg-white pt-24 pb-12">
      <div className="container max-w-6xl mx-auto px-4">
        <nav className="flex gap-2 text-sm text-black mb-6">
          <Link
            href="/"
            className="hover:text-[var(--primary)] transition-colors hover:underline"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">Education</span>
        </nav>

        <EducationContent items={tutorials} />
      </div>
    </main>
  );
}
