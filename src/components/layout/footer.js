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
  const staticMenus = menuList.filter((menu) => !menu.has_child);
  const productChildren = productsMenu?.children || [];
  const primaryProductLinks = productChildren.slice(0, 6);
  const moreProductLinks = productChildren.slice(6);

  return (
    <footer className="bg-[#0f0f3d] text-gray-300">
      {/* Main Footer Content */}
      <div className="pt-20 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1: Brand & Contact */}
            <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" className="inline-block">
                <Image src="/logo.jpeg" alt="ERP17 Logo" width={140} height={40} className="brightness-200" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                The most advanced and comprehensive HR & Payroll management system in Bangladesh. 
                Trusted by hundreds of leading businesses nationwide.
              </p>
              <div className="space-y-4 w-full">
                <div className="flex items-start justify-center md:justify-start gap-3 text-center md:text-left mx-auto md:mx-0 max-w-[280px] sm:max-w-none">
                  <FaMapMarkerAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                  <p className="text-sm">House 39 (Level 4), Road 8, Block k, Halishahar, Aghrabad, Chattogram</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaEnvelope className="text-[var(--primary)] flex-shrink-0" />
                  <Link href="mailto:biz.dev@erp17.com" className="text-sm hover:text-[var(--primary)] transition-colors">
                    biz.dev@erp17.com
                  </Link>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaPhoneAlt className="text-[var(--primary)] flex-shrink-0" />
                  <p className="text-sm">+880 17 1342 8432 (Sales)</p>
                </div>
              </div>
            </div>

            {/* Column 2: Products */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                Products
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {primaryProductLinks.map((item) => (
                  <li key={item.id}>
                    <Link href={`/${item.menu_uid}`} className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all">
                      {item.menu_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Devices + More Products */}
            <div className="text-center md:text-left">
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
                    <Link href={`/${item.menu_uid}`} className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all">
                      {item.menu_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Pages */}
            <div className="text-center md:text-left">
              <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                Pages
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                {staticMenus.map((item) => (
                  <li key={item.id}>
                    <Link href={`/${item.menu_uid}`} className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all">
                      {item.menu_name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-white text-sm font-bold mb-4">Follow Our Socials</h4>
                <div className="flex gap-3 justify-center md:justify-start">
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
