"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { companyData } from "@/data/company";

interface MarvioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (id: string, fromMenu?: boolean) => void;
}

export const MarvioDrawer: React.FC<MarvioDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      if (onNavigate) {
        onNavigate(href.replace("#", ""), true);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 160);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-stretch transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none delay-500"
        }`}
    >
      {/* Dark Blur Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Main Sliding Drawer Body: Slides from Right to Left on open, Left to Right on close */}
      <div
        className={`relative w-full h-full flex flex-col md:flex-row bg-[#0c0d19] overflow-hidden shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Left Side: Luxury Interior Showcase Pane */}
        <div
          className={`hidden md:block md:w-5/12 lg:w-5/12 xl:w-5/12 relative min-h-full bg-[#120f26] border-r border-white/10 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
              ? "translate-x-0 opacity-100 scale-100 delay-150"
              : "-translate-x-12 opacity-0 scale-105"
            }`}
        >
          <Image
            src="/images/marvio/menu-drawer-luxury-interior.jpg"
            alt="DANAM HOLDINGS Commercial Interior Architecture"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#0c0d19]/60 pointer-events-none" />
        </div>

        {/* Right Side: Navigation Menu & Coordinates Pane */}
        <div
          className={`w-full md:w-7/12 lg:w-7/12 xl:w-7/12 flex flex-col justify-between px-6 sm:px-10 lg:px-12 py-5 sm:py-6 overflow-y-auto min-h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-x-0 opacity-100 delay-100" : "translate-x-16 opacity-0"
            }`}
        >
          {/* Top Controls: Logo Lockup, Contact Button, Social Icons, Close Circular Trigger */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 gap-3">
            {/* Drawer Header Logo Lockup */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-white border border-white/30 shadow-md flex items-center justify-center p-1 shrink-0">
                <Image
                  src="/logo-mark.png"
                  alt="DANAM HOLDINGS Logo"
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase leading-tight">
                  DANAM HOLDINGS
                </span>
                <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.12em] text-neutral-400 uppercase leading-none block mt-0.5">
                  TOWARDS FORTUNE UNFOLDINGS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Contact Pill Button with Vivid Green Fog Flow on Hover (visible on md+) */}
              <button
                onClick={() => handleLinkClick("#contact")}
                className="hidden md:inline-flex relative group overflow-hidden px-5 sm:px-6 py-2 rounded-full reflective-glass-pill text-white text-xs sm:text-sm font-medium tracking-wide border border-white/20 hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(52,211,153,0.55),inset_0_0_12px_rgba(52,211,153,0.35)] transition-all duration-500 cursor-pointer"
              >
                {/* Vivid Flowing Green Fog Mist Layers */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-full">
                  <span className="absolute -inset-4 bg-emerald-500/15" />
                  <span className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.9)_0%,rgba(16,185,129,0.55)_35%,transparent_70%)] blur-md animate-fog-1" />
                  <span className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.8)_0%,rgba(5,150,105,0.45)_40%,transparent_70%)] blur-lg animate-fog-2" />
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-emerald-300/40 to-emerald-500/20 mix-blend-screen" />
                </span>

                <span className="relative z-10 text-white font-medium group-hover:text-white transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Contact
                </span>
              </button>

              {/* Circular Close Trigger (X) */}
              <button
                onClick={onClose}
                aria-label="Close Navigation Menu"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-emerald-400 text-black flex items-center justify-center shadow-xl transition-all hover:scale-105 cursor-pointer group shrink-0"
              >
                <X className="w-5 h-5 transition-transform group-hover:rotate-90 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Central Body: Navigation Menu (Left), Normal Light Green Line (Middle), and Directory Coordinates (Right) */}
          <div className="my-auto py-6 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-14">
            {/* Primary Bold Navigation List with Rolling Text Hover Effect */}
            <nav className="flex-1 flex flex-col space-y-1.5 sm:space-y-4 w-full">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Portfolio", href: "#projects" },
                { label: "Ventures", href: "#ventures" },
                { label: "Contact", href: "#contact" },
              ].map((item, idx) => (
                <button
                  key={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  style={{
                    transitionDelay: isOpen ? `${200 + idx * 70}ms` : "0ms",
                  }}
                  className={`group relative w-full text-left cursor-pointer transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] py-1 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                    }`}
                >
                  {/* Rolling text */}
                  <div className="relative overflow-hidden h-[46px] sm:h-[64px] lg:h-[72px]">
                    <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                      {/* State 1: Normal */}
                      <div className="h-[46px] sm:h-[64px] lg:h-[72px] flex items-center">
                        <span className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white uppercase">
                          {item.label}
                        </span>
                      </div>

                      {/* State 2: Hover (Italic + Emerald Color) */}
                      <div className="h-[46px] sm:h-[64px] lg:h-[72px] flex items-center">
                        <span className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-emerald-400 uppercase italic">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </nav>

            {/* Normal Light Green Line (Vertical on desktop, horizontal on mobile - No Radium Glow) */}
            <div className="hidden lg:block w-[1px] min-h-[340px] self-stretch bg-emerald-400/40 rounded-full shrink-0" />
            <div className="block lg:hidden w-full h-[1px] bg-emerald-400/40 rounded-full my-4" />

            {/* Directory & Coordinates (Card removed as requested: clean text) */}
            <div className="w-full lg:w-[320px] xl:w-[360px] shrink-0 space-y-5 text-sm text-neutral-300 font-sans">
              <a
                href={companyData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-1 hover:text-emerald-400 transition-colors"
                title="View on Google Maps"
              >
                <p className="text-neutral-400 group-hover:text-emerald-400 transition-colors leading-relaxed">
                  1, Anuppanadi Road, Teppakulam,
                </p>
                <p className="text-neutral-400 group-hover:text-emerald-400 transition-colors leading-relaxed">
                  Madurai – 625009, Tamil Nadu, India
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 uppercase tracking-wider mt-1">
                  View on Google Maps &rarr;
                </span>
              </a>

              <div className="space-y-1">
                <p className="text-neutral-400 leading-relaxed">
                  DANAM HOLDINGS Corporate Office,
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  South India Turnkey Operations
                </p>
              </div>

              <div className="space-y-1 font-mono text-sm">
                <a
                  href="tel:+918110006913"
                  className="block text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  +91 81100 06913
                </a>
                <a
                  href="tel:+919566320944"
                  className="block text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  +91 95663 20944
                </a>
              </div>

              <div className="space-y-1 text-sm">
                <a
                  href="mailto:danamholdings.in"
                  className="block text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  danamholdings.in
                </a>
                <a
                  href="mailto:info@danamholdings.in"
                  className="block text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  info@danamholdings.in
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Line (from Photo 2: "By Mix Design, 2026") */}
          <div className="pt-6 border-t border-white/10 text-xs text-neutral-400 font-mono">
            By Hexavision Technologies, 2026
          </div>
        </div>
      </div>
    </div>
  );
};
