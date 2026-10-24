"use client";

import React, { useState, useEffect } from "react";
import { NavItem } from "@/types";
import { scrollToSection } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowRight } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Personal Data", href: "#personal", sectionId: "personal" },
  { label: "Work", href: "#work", sectionId: "work" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
];

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (sectionId === "home") {
      scrollToSection("home");
      if (onTabChange) onTabChange("home");
    } else {
      if (onTabChange) {
        onTabChange(sectionId);
      } else {
        scrollToSection(sectionId);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-md border-b border-white/60 py-3.5"
            : "bg-white/70 backdrop-blur-md border-b border-neutral-200/40 py-4 sm:py-5"
        }`}
      >
        <div className="luxury-container flex items-center justify-between">
          {/* Desktop Navigation Links - Clean Minimalist Layout without Logo/Company Name */}
          <nav
            className="hidden lg:flex items-center space-x-2 xl:space-x-3"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                activeTab === item.sectionId ||
                (!activeTab && item.sectionId === "home");
              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`relative px-3.5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors focus:outline-none focus:ring-1 focus:ring-black rounded-lg ${
                    isActive
                      ? "text-black font-bold bg-neutral-100/90"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-black animate-in fade-in duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Title Placeholder / Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => {
                scrollToSection("home");
                if (onTabChange) onTabChange("home");
              }}
              className="text-xs font-mono uppercase tracking-widest text-neutral-800 font-bold focus:outline-none"
            >
              PORTFOLIO
            </button>
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className={`hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900 cursor-pointer shadow-sm rounded-xl ${
                activeTab === "contact"
                  ? "bg-neutral-800 text-white ring-2 ring-black"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-neutral-800 hover:text-black hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black cursor-pointer rounded-lg"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        activeSection={activeTab || "home"}
        onTabSelect={(id) => {
          if (onTabChange) onTabChange(id);
          else scrollToSection(id);
        }}
      />
    </>
  );
};
