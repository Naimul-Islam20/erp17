"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryCtaClassName } from "@/constants/cta";
import { FOOTER_LOGO_SRC, SITE_LOGO_ALT } from "@/constants/brand";
import menus from "@/data/menus";
import { BiChevronDown, BiCircle } from "react-icons/bi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "@/components/layout/mobileMenu";

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
          <div className="flex h-14 items-center justify-between md:h-[72px] lg:h-[88px]">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <div className="w-[108px] md:w-[140px] lg:w-[160px]">
                  <Image
                    src={FOOTER_LOGO_SRC}
                    alt={SITE_LOGO_ALT}
                    width={340}
                    height={76}
                    priority
                    className="h-auto w-full object-contain"
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
        ? "fixed top-14 md:top-[72px] lg:top-[88px] left-0 right-0 mx-auto w-[90vw] max-w-[1600px] rounded-b-2xl border border-slate-200 bg-white text-gray-800 z-50 p-5 max-h-[80vh] overflow-y-auto overscroll-contain"
        : "absolute top-full mt-6 rounded-b-2xl border border-slate-200 bg-white text-gray-800 z-50 p-5 " +
          (childCount > 5
            ? "left-1/2 -translate-x-1/2 min-w-[720px]"
            : "left-1/2 -translate-x-1/2 min-w-[360px]")
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
                                  className="flex items-start gap-3 px-3 py-3 transition-colors duration-200 hover:bg-slate-50"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)]/55 text-[var(--primary)]">
                                    <Icon
                                      className="h-4 w-4"
                                    />
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <span className="block text-sm font-semibold text-[var(--secondary)]">
                                      {child.menu_name}
                                    </span>
                                    <span className="mt-1 block text-xs leading-5 text-slate-500">
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
