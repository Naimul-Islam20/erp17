import Link from "next/link";
import Image from "next/image";
import ProductSectionTitle from "@/components/products/ProductSectionTitle";
import ProductCheckItem from "@/components/products/ProductCheckItem";

export default function ProductSectionsLayout({
  breadcrumb,
  title,
  heroDescription,
  heroImage,
  heroImageAlt,
  sections = [],
}) {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50 pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="container max-w-5xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-[var(--secondary)]">
              {breadcrumb}
            </span>
          </nav>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--secondary)] md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            {heroDescription}
          </p>
        </div>
      </section>

      {heroImage ? (
        <section className="py-10 md:py-14">
          <div className="container max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:rounded-3xl">
              <Image
                src={heroImage}
                alt={heroImageAlt ?? title}
                width={1200}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-12 md:pb-16">
        <div className="container max-w-5xl space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <div
              key={`${section.heading}-${index}`}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div
                className={
                  section.imgRight ? "order-2 lg:order-1" : "order-2 lg:order-2"
                }
              >
                <div className="space-y-4">
                  <ProductSectionTitle className="text-xl md:text-2xl">
                    {section.heading}
                  </ProductSectionTitle>
                  {section.subText ? (
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
                      {section.subText}
                    </p>
                  ) : null}
                  <ul className="space-y-2 pt-1">
                    {section.list.map((item) => (
                      <ProductCheckItem key={item}>{item}</ProductCheckItem>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className={
                  section.imgRight ? "order-1 lg:order-2" : "order-1 lg:order-1"
                }
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:rounded-3xl">
                  <Image
                    src={section.img}
                    alt={section.heading}
                    width={900}
                    height={700}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
