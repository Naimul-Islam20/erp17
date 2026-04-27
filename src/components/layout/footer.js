"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import menus from "@/data/menus";

export default function Footer() {
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

  return (
    <footer className="bg-[#0f0f3d] text-gray-300">
      {/* Main Footer Content */}
      <div className="pt-8 pb-6 md:pt-20 md:pb-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Brand & Contact */}
            <div className="col-span-2 md:col-span-1 space-y-8 flex flex-col items-start text-left">
              <Link href="/" className="inline-block">
                <Image
                  src="/ERP17-footer.png"
                  alt="ERP17 Logo"
                  width={140}
                  height={40}
                  className="brightness-200"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                ERP17 Cloud Solution is a leading business management platform
                empowering enterprises with seamless automation. With a legacy
                of serving 1,000+ businesses over 9 years, we specialize in
                delivering integrated tools that simplify operations. Our
                mission is simple: Smarter Business. Hassle-Free Life.
              </p>
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
                            <Link
                              href={item.href}
                              className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                        Pages
                        <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
                      </h3>
                      <ul className="space-y-4">
                        {quickLinks.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-sm hover:text-[var(--primary)] hover:translate-x-1 inline-block transition-all"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 4: Contact + Socials */}
                <div className="col-span-2 md:col-span-2 lg:col-span-1 text-left">
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
                    <div>
                      <h3 className="text-white text-lg font-bold mb-8 relative inline-block">
                        Location
                        <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[var(--primary)] rounded-full"></span>
                      </h3>
                      <div className="space-y-3 text-sm text-gray-300">
                        <div className="flex items-start gap-2.5">
                          <FaMapMarkerAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                          <p>Dhaka Office: 820 Makkah Tower(9th Floor) West Shewrapara, Mirpur, Dhaka-1216 Bangladesh</p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <FaMapMarkerAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                          <p>Chittagong Office: House#13, Road#3, Block-K, Halishahar, Chittagong. Bangladesh</p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <FaPhoneAlt className="text-[var(--primary)] mt-1 flex-shrink-0" />
                          <p>Phone: 8801982211000, 8801752711277</p>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <FaEnvelope className="text-[var(--primary)] mt-1 flex-shrink-0" />
                          <p>Email: support@erp17.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:mt-8 md:pt-8 md:border-t md:border-gray-800 flex flex-col items-start text-left">
                      <h4 className="text-white text-sm font-bold mb-4">
                        Follow Our Socials
                      </h4>
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

              </div>
            </div>

            <div className="col-span-2 md:col-span-2 lg:col-span-4 mt-0 md:mt-2">
              <Image
                src="/payment.png"
                alt="ERP17 Solutions banner"
                width={1600}
                height={240}
                className="w-full h-20 sm:h-24 md:h-28 object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-8 bg-[#0a0a2b]">
        <div className="container flex items-center justify-center text-center">
          <p className="text-sm text-gray-500">
            ©️ 2026, ERP17 Cloud Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
