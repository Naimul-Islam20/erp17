"use client";

import { useEffect, useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

// Dynamic Icon Resolver
function getIcon(iconName) {
  if (!iconName) return BiIcons.BiCircle;
  if (BiIcons[iconName]) return BiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  return BiIcons.BiCircle;
}

const MobileMenu = ({ isOpen, onClose, menus }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuList = Array.isArray(menus) ? menus : [];

  // Prevent background page from horizontal/vertical scrolling while drawer is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset expanded submenu when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setActiveMenu(null);
    }
  }, [isOpen]);

  const toggleMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`lg:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`fixed inset-0 z-[90] bg-black/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-side-menu"
        className={`fixed inset-y-0 right-0 z-[100] flex h-screen w-[82vw] max-w-xs flex-col bg-white shadow-lg transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-300 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[var(--secondary)]">Menu</h2>
          <button
            onClick={onClose}
            className="text-2xl text-black"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-2 overflow-y-auto flex-1">
          {menuList.map((menu) => {
            const hasChildren =
              Boolean(menu?.has_child) && Array.isArray(menu?.children) && menu.children.length > 0;

            return (
              <li key={menu.id} className="border-b border-gray-300 pb-2">
                {hasChildren ? (
                  <>
                    {/* Parent menu (no icon) */}
                    <div
                      className="flex justify-between items-center cursor-pointer py-2"
                      onClick={() => toggleMenu(menu.id)}
                      role="button"
                      aria-expanded={activeMenu === menu.id}
                    >
                      <span className="text-sm font-medium text-[var(--secondary)] uppercase">
                        {menu.menu_name}
                      </span>
                      {activeMenu === menu.id ? (
                        <GoChevronUp />
                      ) : (
                        <GoChevronDown />
                      )}
                    </div>

                    {/* Dropdown children */}
                    <ul
                      className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        activeMenu === menu.id
                          ? "max-h-[2000px] opacity-100 mt-2"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      {menu.children?.map((child) => {
                        const ChildIcon = getIcon(child.menu_icon);
                        return (
                          <li key={child.id}>
                            <a
                              href={`/${child.menu_uid}`}
                              onClick={onClose}
                              className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-slate-50"
                            >
                              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-soft)]/55 text-[var(--primary)]">
                                <ChildIcon
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
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  // Normal link
                  <a
                    href={`/${menu.menu_uid}`}
                    className="block text-sm text-gray-800 py-2 uppercase"
                    onClick={onClose}
                  >
                    {menu.menu_name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
