"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_LOGO_ALT, SITE_LOGO_SRC } from "@/constants/brand";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const solutionLinks = [
  { name: "HRM & Payroll", href: "/products/hrm" },
  { name: "CRM", href: "/products/crm" },
  { name: "Accounts", href: "/products/accounts" },
  { name: "Inventory", href: "/products/inventory" },
  { name: "Point of Sale", href: "/products/point-of-sale" },
  { name: "eCommerce", href: "/products/ecommerce" },
  { name: "Invoiceing", href: "/products/invoicing" },
];

const quickLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Education", href: "/education" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Privecy Policy", href: "/privacy-policy" },
  { name: "Terms Condition", href: "/terms-condition" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/muktodharalimited",
    label: "Facebook",
  },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white">
      {children}
      <span className="mt-2 block h-0.5 w-8 rounded-full bg-[var(--primary)]" />
    </h3>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/75 transition-colors hover:text-[var(--primary)]"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white/80">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[600px] -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-3xl"
        aria-hidden
      />

      <div className="container relative pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              <Image
                src={SITE_LOGO_SRC}
                alt={SITE_LOGO_ALT}
                width={340}
                height={76}
                className="h-auto w-[140px] object-contain md:w-[155px]"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              ERP17 Cloud Solution is a leading business management platform
              empowering enterprises with seamless automation. With a legacy of
              serving 1,000+ businesses over 9 years, we specialize in
              delivering integrated tools that simplify operations. Our mission
              is simple: Smarter Business. Hassle-Free Life.
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--primary)]">
              Simplify Operations. Accelerate Growth.
            </p>
          </div>

          {/* Solutions + Pages */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-4 lg:gap-8">
            <div>
              <FooterHeading>Solutions</FooterHeading>
              <ul className="space-y-3">
                {solutionLinks.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Pages</FooterHeading>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <FooterLink href={item.href}>{item.name}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <FooterHeading>Location</FooterHeading>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  strokeWidth={2.2}
                />
                <span>
                  <span className="font-medium text-white/90">
                    Dhaka Office:
                  </span>{" "}
                  820 Makkah Tower(9th Floor) West Shewrapara, Mirpur,
                  Dhaka-1216 Bangladesh
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  strokeWidth={2.2}
                />
                <span>
                  <span className="font-medium text-white/90">
                    Chittagong Office:
                  </span>{" "}
                  House#13, Road#3, Block-K, Halishahar, Chittagong. Bangladesh
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  strokeWidth={2.2}
                />
                <span>
                  <span className="font-medium text-white/90">Phone:</span>{" "}
                  <a
                    href="tel:+8801982211000"
                    className="hover:text-[var(--primary)]"
                  >
                    8801982211000
                  </a>
                  ,{" "}
                  <a
                    href="tel:+8801752711277"
                    className="hover:text-[var(--primary)]"
                  >
                    8801752711277
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]"
                  strokeWidth={2.2}
                />
                <span>
                  <span className="font-medium text-white/90">Email:</span>{" "}
                  <a
                    href="mailto:support@erp17.com"
                    className="hover:text-[var(--primary)]"
                  >
                    support@erp17.com
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-white/90">
                Follow Our Socials
              </p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-[var(--primary)]/40 hover:bg-[var(--primary)] hover:text-white"
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <Image
            src="/payment.png"
            alt="Accepted payment methods"
            width={1600}
            height={240}
            className="h-auto w-full object-contain opacity-95"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/20 py-5">
        <div className="container text-center">
          <p className="text-sm text-white/65">
            © 2026, ERP17 Cloud Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
