"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      if (openDropdown !== null) {
        // Find if click is on a menu item or within the dropdown
        const clickedMenuItem = event.target.closest('li.relative');
        const clickedDropdown = event.target.closest('[class*="shadow-lg"]');
        
        // If clicked on the dropdown content itself, don't close
        if (clickedDropdown) {
          return;
        }
        
        // If clicked on a different menu item or anywhere else, close the dropdown
        setOpenDropdown(null);
      }
    }
    
    if (openDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Close mobile drawer when viewport is desktop (matches Tailwind md: 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
     ref={navRef}
  className="sticky top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="container">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="w-20 md:w-30">
                <Image
                  src="/logo.jpeg"
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
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {menus.map((menu) => {
                const childCount = menu.children?.length || 0;
                const hasChildren = menu.has_child;

                return (
                  <li
                    key={menu.id}
                    className="relative flex flex-col items-start"
                  >
                    {hasChildren ? (
                      <div
                        className="flex items-center cursor-pointer font-medium text-gray-800 hover:text-blue-600 uppercase"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === menu.id ? null : menu.id
                          )
                        }
                      >
                        <span>{menu.menu_name}</span>
                        <BiChevronDown className="ml-1" />
                      </div>
                    ) : (
                      <Link
                        href={`/${menu.menu_uid}`}
                        className="font-medium text-gray-800 hover:text-blue-600 uppercase"
                      >
                        {menu.menu_name}
                      </Link>
                    )}

                    {hasChildren && openDropdown === menu.id && (
                 <div
  className={`
    ${childCount > 10
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
    {menu.children.map((child) => {
      const Icon = getIcon(child.menu_icon);
      return (
        <Link
          key={child.id}
          href={`/${child.menu_uid}`}
          className="flex items-start space-x-3 p-3 hover:bg-gray-100 rounded"
          onClick={() => setOpenDropdown(null)}
        >
          <Icon
            style={{ color: child.icon_color }}
            className="mt-1 w-5 h-5"
          />
          <div className="flex flex-col">
            <span className="font-medium">{child.menu_name}</span>
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
              <Link
                href="/get-started-path"
                className="px-4 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* 🔸 Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="text-3xl text-black"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menus={menus}
      />
    </nav>
  );
}
