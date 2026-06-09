import Link from "next/link";

export const metadata = {
  title: "Employee Management",
  robots: { index: false, follow: true },
};

export default function EmployeeManagementRedirectPage() {
  return (
    <main className="container mx-auto max-w-lg px-4 py-32 text-center">
      <p className="text-sm text-slate-600">Redirecting to HRM...</p>
      <h1 className="mt-2 text-2xl font-bold text-[var(--secondary)]">
        Employee Management has moved
      </h1>
      <p className="mt-4 text-slate-600">
        This page now lives under{" "}
        <Link href="/products/hrm/" className="font-semibold text-[var(--primary)]">
          HRM
        </Link>
        .
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/products/hrm/");',
        }}
      />
    </main>
  );
}
