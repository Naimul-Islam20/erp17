"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryCtaClassName } from "@/constants/cta";
import menus from "@/data/menus";
import { BiChevronDown, BiCircle } from "react-icons/bi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "@/components/layout/mobileMenu";
import { openConsultationFromLogo } from "@/lib/consultation-popup";

// 🔹 Dynamic Icon Resolver
function getIcon(iconName) {
  if (!iconName) return BiCircle;
  if (BiIcons[iconName]) return BiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  return BiCircle;
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 🔹 scroll state
  const navRef = useRef(null);
  const menuList = Array.isArray(menus)
    ? menus.filter((menu) => menu.menu_uid !== "blog")
    : [];

  // 🔹 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside listener (desktop dropdown)
  useEffect(() => {
    function handleClickOutside(event) {
      if (openDropdown !== null && navRef.current) {
        // Only close when clicking fully outside the desktop nav area.
        if (!navRef.current.contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    }

    if (openDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Close mobile drawer when viewport is desktop (matches Tailwind lg: 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm"
      >
        <div className="container">
          <div className="flex h-[88px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" onClick={openConsultationFromLogo}>
                <div className="w-20 md:w-[120px]">
                  <Image
                    src="/ERP_logo.png"
                    alt="ERP17 Logo"
                    width={120}
                    height={40}
                    priority
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            </div>

            {/* 🔹 Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <ul className="flex space-x-6">
                {menuList.map((menu) => {
                  const childCount = menu.children?.length || 0;
                  const hasChildren =
                    Boolean(menu?.has_child) && Array.isArray(menu?.children) && childCount > 0;

                  return (
                    <li
                      key={menu.id}
                      className="relative flex flex-col items-start"
                    >
                      {hasChildren ? (
                        <div
                          className="flex items-center cursor-pointer font-medium text-gray-800 hover:text-[var(--primary)] uppercase"
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === menu.id ? null : menu.id,
                            )
                          }
                        >
                          <span>{menu.menu_name}</span>
                          <BiChevronDown className="ml-1" />
                        </div>
                      ) : (
                        <Link
                          href={`/${menu.menu_uid}`}
                          className="font-medium text-gray-800 hover:text-[var(--primary)] uppercase"
                        >
                          {menu.menu_name}
                        </Link>
                      )}

                      {hasChildren && openDropdown === menu.id && (
                        <div
                          className={`
    ${
      childCount > 10
        ? "fixed text-gray-800 top-[88px] left-0 right-0 mx-auto w-[90vw] max-w-[1600px] bg-white shadow-lg border border-gray-300 z-50 p-6 max-h-[80vh] overflow-y-auto overscroll-contain"
        : "absolute top-full mt-8 text-gray-800 bg-white shadow-lg border border-gray-300 z-50 p-6 " +
          (childCount > 5
            ? "left-1/2 transform text-gray-800 -translate-x-1/2 min-w-[700px]"
            : "left-1/2 transform text-gray-800 -translate-x-1/2 min-w-[280px]")
    }
  `}
                        >
                          <div
                            className={`grid gap-4 ${
                              childCount > 10
                                ? "grid-cols-3"
                                : childCount > 5
                                  ? "grid-cols-2"
                                  : "grid-cols-1"
                            }`}
                          >
                            {menu.children?.map((child) => {
                              const Icon = getIcon(child.menu_icon);
                              return (
                                <Link
                                  key={child.id}
                                  href={`/${child.menu_uid}`}
                                  className="flex items-start space-x-3 p-3 hover:bg-gray-100 rounded"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center">
                                    <Icon
                                      style={{ color: child.icon_color }}
                                      className="h-4 w-4"
                                    />
                                  </span>
                                  <div className="flex flex-col">
                                    <span className="font-medium">
                                      {child.menu_name}
                                    </span>
                                    <span className="text-[11px] mt-1 text-gray-500">
                                      {child.description}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Get Started button */}
              <div className="ml-6">
                <Link href="/get-quote" className={primaryCtaClassName}>Get a Quote</Link>
              </div>
            </div>

            {/* 🔸 Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className="text-3xl text-[var(--secondary)]"
                aria-label="Open menu"
                aria-expanded={isMobileOpen}
                aria-controls="mobile-side-menu"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menus={menuList}
      />
    </>
  );
}
