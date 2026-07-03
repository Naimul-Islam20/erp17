import Link from "next/link";
import Image from "next/image";
import { Cloud, Server, Shield } from "lucide-react";
import ProductSectionTitle from "@/components/products/ProductSectionTitle";
import ProductCheckItem from "@/components/products/ProductCheckItem";
import {
  DEFAULT_SECURITY_FEATURES,
  DEFAULT_TRUST_POINTS,
} from "@/components/products/productDefaults";
import { resolveIndustryIcon } from "@/components/products/resolveIndustryIcon";

export default function ProductDetailsLayout({
  breadcrumb,
  title,
  heroDescription,
  introIcon: IntroIcon,
  introImage,
  introImageAlt,
  introTitle,
  introText,
  highlights = [],
  whyChoose,
  features = [],
  showDeployment = true,
  industries,
  trust,
  security,
  extraSections = [],
}) {
  const rawTrustItems = trust?.items ?? DEFAULT_TRUST_POINTS;
  const trustPoints = rawTrustItems.map((item, index) =>
    typeof item === "string"
      ? {
          icon: DEFAULT_TRUST_POINTS[index % DEFAULT_TRUST_POINTS.length].icon,
          label: item,
        }
      : item,
  );
  const trustTitle = trust?.title ?? "Why Businesses Trust Us";
  const securityTitle = security?.title ?? "Data Privacy & Security";
  const securityText = security?.text ?? "";
  const securityFeatures = security?.features ?? DEFAULT_SECURITY_FEATURES;

  const industryItems = (industries?.items ?? []).map((item) =>
    typeof item === "string"
      ? { label: item, icon: resolveIndustryIcon(item) }
      : item,
  );

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

      <section className="py-10 md:py-14">
        <div className="container max-w-5xl">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:rounded-3xl">
                <Image
                  src={introImage}
                  alt={introImageAlt}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="order-1 space-y-5 lg:order-2">
              <div className="flex items-center gap-3">
                {IntroIcon ? (
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
                    <IntroIcon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                ) : null}
                <h2 className="text-2xl font-bold text-[var(--secondary)] md:text-3xl">
                  {introTitle}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
                {introText}
              </p>
              {highlights.length > 0 ? (
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <ProductCheckItem key={item}>{item}</ProductCheckItem>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {whyChoose ? (
        <section className="pb-10 md:pb-14">
          <div className="container max-w-5xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:rounded-3xl md:p-8">
              <ProductSectionTitle>{whyChoose.title}</ProductSectionTitle>
              {whyChoose.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base md:leading-7"
                >
                  {paragraph}
                </p>
              ))}
              {whyChoose.footer ? (
                <p className="mt-4 text-sm font-medium text-slate-700 md:text-base">
                  {whyChoose.footer}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {features.length > 0 ? (
        <section className="pb-10 md:pb-14">
          <div className="container max-w-5xl">
            <ProductSectionTitle className="mb-8">Key Features</ProductSectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
                >
                  <h3 className="text-lg font-bold text-[var(--secondary)]">
                    {feature.id}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.desc}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                    Benefits
                  </p>
                  <ul className="mt-2 space-y-2">
                    {feature.benefits.map((benefit) => (
                      <ProductCheckItem key={benefit}>{benefit}</ProductCheckItem>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showDeployment ? (
        <section className="pb-10 md:pb-14">
          <div className="container max-w-5xl">
            <ProductSectionTitle className="mb-6">
              Cloud-Based & On-Premise Options
            </ProductSectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Cloud className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-[var(--secondary)]">Cloud-Based</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Access from anywhere, auto-updates, lower upfront costs
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-[var(--secondary)]">On-Premise</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Full control, custom hosting, and higher data sovereignty
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {industryItems.length > 0 ? (
        <section className="border-y border-slate-200 bg-white py-10 md:py-14">
          <div className="container max-w-5xl">
            <div className="max-w-2xl">
              <ProductSectionTitle>
                {industries?.title ?? "Ideal for All Industries"}
              </ProductSectionTitle>
              {industries?.subtitle ? (
                <p className="mt-3 text-sm text-slate-600 md:text-base">
                  {industries.subtitle}
                </p>
              ) : null}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industryItems.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.label}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
                      <Icon className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {industry.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {trustPoints.length > 0 ? (
        <section className="py-10 md:py-14">
          <div className="container max-w-5xl">
            <ProductSectionTitle className="text-center">
              {trustTitle}
            </ProductSectionTitle>
            <div
              className={`mt-8 grid grid-cols-1 gap-4 ${
                trustPoints.length >= 5
                  ? "sm:grid-cols-2 lg:grid-cols-5"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.label}
                    className="flex flex-col items-center rounded-2xl bg-gradient-to-b from-[var(--primary-soft)]/40 to-white px-4 py-6 text-center ring-1 ring-[var(--primary-soft)]"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary)] shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <p className="text-sm font-semibold leading-snug text-[var(--secondary)]">
                      {point.label}
                    </p>
                  </div>
                );
              })}
            </div>
            {trust?.footer ? (
              <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 md:text-base">
                {trust.footer}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      {extraSections.map((section, index) => (
        <section key={index} className="pb-10 md:pb-14">
          <div className="container max-w-5xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:rounded-3xl md:p-8">
              {section}
            </div>
          </div>
        </section>
      ))}

      {securityText ? (
        <section className="border-t border-slate-200 pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="container max-w-5xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[var(--primary)]/25 text-[var(--primary)]">
                <Shield className="h-7 w-7" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <ProductSectionTitle>{securityTitle}</ProductSectionTitle>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base md:leading-7">
                  {securityText}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
              {securityFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="border-t border-slate-200 pt-4"
                  >
                    <Icon
                      className="h-5 w-5 text-[var(--primary)]"
                      strokeWidth={2.2}
                    />
                    <p className="mt-2 text-sm font-semibold text-[var(--secondary)]">
                      {feature.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
