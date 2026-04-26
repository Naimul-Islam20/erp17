"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import menus from "@/data/menus";

export default function Footer() {
  const menuList = Array.isArray(menus) ? menus : [];
  const productsMenu = menuList.find((menu) => menu.menu_uid === "products");
  const devicesMenu = menuList.find(
    (menu) => menu.menu_uid === "devices" || menu.menu_uid === "devices/hardware" || menu.menu_name === "Devices",
  );
  const solutionLinks = [
    { name: "HRM & Payroll", href: "/products/hrm" },
    { name: "CRM", href: "/products/crm" },
    { name: "Accounts", href: "/products/accounts" },
    { name: "Inventory", href: "/products/inventory" },
    { name: "Point of Sale", href: "/products/point-of-sale" },
    { name: "eCommerce", href: "/products/ecommerce" },
    { name: "Invoiceing", href: "/products/invoicing" },
  ];
  const solutionUids = new Set(solutionLinks.map((item) => item.href.replace(/^\//, "")));
  const moreProductLinks = (productsMenu?.children || []).filter(
    (item) => !solutionUids.has(item.menu_uid),
  );
  const quickLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Education", href: "/education" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Privecy Policy", href: "/privacy-policy" },
    { name: "Terms Condition", href: "/terms-condition" },
  ];

  return (
    <footer className="bg-[#0f0f3d] text-gray-300">
      {/* Main Footer Content */}
      <div className="pt-8 pb-6 md:pt-20 md:pb-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Brand & Contact */}
            <div className="col-span-2 md:col-span-1 space-y-8 flex flex-col items-start text-left">
              <Link href="/" className="inline-block">
                <Image src="/logo.jpeg" alt="ERP17 Logo" width={140} height={40} className="brightness-200" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                ERP17 Cloud Solution is a leading business management platform empowering enterprises with seamless automation.
                With a legacy of serving 1,000+ businesses over 9 years, we specialize in delivering integrated tools that
                simplify operations. Our mission is simple: Smarter Business. Hassle-Free Life.
              </p>
              <div className="space-y-4 w-full">
                <div className="flex items-start justify-start gap-3 text-left mx-0 max-w-[280px] sm:max-w-none">
                  <FaMapMarkerAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Dhaka Office: 820 Makkah Tower(9th Floor) West Shewrapara, Mirpur, Dhaka-1216 Bangladesh
                  </p>
                </div>
                <div className="flex items-start justify-start gap-3 text-left mx-0 max-w-[280px] sm:max-w-none">
                  <FaMapMarkerAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    Chittagong Office: House#13, Road#3, Block-K, Halishahar, Chittagong. Bangladesh
                  </p>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <FaPhoneAlt className="text-[var(--primary)] flex-shrink-0" />
                  <p className="text-sm">Phone: 8801982211000, 8801752711277</p>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <FaEnvelope className="text-[var(--primary)] flex-shrink-0" />
                  <Link href="mailto:support@erp17.com" className="text-sm hover:text-[var(--primary)] transition-colors">
                    Email: support@erp17.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Right-side 3 columns block */}
            <div className="col-span-2 md:col-span-2 lg:col-span-3 lg:col-start-2">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Column 2 + 3: Solutions and Devices + More */}
                <div className="col-span-2 lg:col-span-2 text-left">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                        Solutions
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
                      </h3>
                      <ul className="space-y-4">
                        {solutionLinks.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                        Devices + More
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
                      </h3>
                      <ul className="space-y-4">
                        {devicesMenu ? (
                          <li key={devicesMenu.id}>
                            <Link
                              href={`/${devicesMenu.menu_uid}`}
                              className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all"
                            >
                              {devicesMenu.menu_name}
                            </Link>
                          </li>
                        ) : null}
                        {moreProductLinks.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={`/${item.menu_uid}`}
                              className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all"
                            >
                              {item.menu_name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 4: Pages + Socials */}
                <div className="col-span-2 md:col-span-2 lg:col-span-1 text-left">
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
                    <div>
                      <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                        Pages
                        <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
                      </h3>
                      <ul className="space-y-4">
                        {quickLinks.map((item) => (
                          <li key={item.name}>
                            <Link href={item.href} className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all">
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:mt-8 md:pt-8 md:border-t md:border-gray-800 flex flex-col items-start text-left">
                      <h4 className="text-white text-sm font-bold mb-4">Follow Our Socials</h4>
                      <div className="flex gap-3 justify-start">
                        {[
                          { icon: <FaLinkedinIn />, href: "#" },
                          { icon: <FaFacebookF />, href: "#" },
                          { icon: <FaInstagram />, href: "#" },
                          { icon: <FaYoutube />, href: "#" },
                        ].map((social, idx) => (
                          <Link
                            key={idx}
                            href={social.href}
                            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs hover:bg-[var(--primary)] hover:text-white transition-all shadow-sm"
                          >
                            {social.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-2 lg:col-span-3 mt-0 md:mt-2">
                  <Image
                    src="/payment.png"
                    alt="ERP17 Solutions banner"
                    width={1200}
                    height={220}
                    className="w-full h-20 sm:h-24 object-contain object-left opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-8 bg-[#0a0a2b]">
        <div className="container flex items-center justify-center text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ERP17. All rights reserved. | Developed by{' '}
            <Link href="https://muktodhara.com" className="text-gray-400 hover:text-[var(--primary)] transition-colors font-medium">
              Muktodhara Technology Limited
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
