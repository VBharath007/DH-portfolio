"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { companyData } from "@/data/company";

interface MarvioHeaderProps {
  onOpenMenu?: () => void;
  onNavigate?: (section: string) => void;
  activeSection?: string;
}

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: companyData.socialLinks.facebook,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: companyData.socialLinks.instagram,
    icon: (
      <svg
        className="w-5 h-5 fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: companyData.socialLinks.linkedin,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.88a1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0 1.45-1.45Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: companyData.socialLinks.youtube,
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export const MarvioHeader: React.FC<MarvioHeaderProps> = ({ onOpenMenu, onNavigate, activeSection = "home" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c16]/80 backdrop-blur-2xl py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="w-full px-4 sm:px-10 lg:px-12">
        <div className="relative flex items-center justify-between">
          {/* Left: Official Corporate Logo & Typography Lockup */}
          <div className="flex items-center justify-start shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("home");
                }
              }}
              className="group inline-flex items-center gap-2 sm:gap-3.5 select-none cursor-pointer"
              title="DANAM HOLDINGS — Towards Fortune Unfoldings"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white border border-white/30 shadow-md group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all duration-300 shrink-0 flex items-center justify-center p-1.5">
                <Image
                  src="/logo-mark.png"
                  alt="DANAM HOLDINGS Logo"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-base font-extrabold text-white tracking-wider uppercase leading-tight group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  DANAM HOLDINGS
                </span>
                <span className="text-[7px] sm:text-[9.5px] font-mono tracking-[0.14em] sm:tracking-[0.22em] text-neutral-400 uppercase leading-none block mt-0.5 whitespace-nowrap">
                  TOWARDS FORTUNE UNFOLDINGS
                </span>
              </div>
            </a>
          </div>

          {/* Center: Social Media Channels (Larger icons, perfectly centered horizontally, borderless) */}
          <nav
            aria-label="Social Channels"
            className="hidden md:flex items-center gap-3 sm:gap-4 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          >
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="group relative w-10 h-10 rounded-full text-neutral-300 hover:text-emerald-400 hover:bg-white/[0.08] flex items-center justify-center transition-all duration-300 hover:scale-120 cursor-pointer"
              >
                {item.icon}
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-[#0b0c16]/95 text-white border border-white/20 backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right: Contact Pill Button (Desktop) & Circular Side Menu Button (Mobile/Tablet) */}
          <div className="flex items-center gap-2 sm:gap-4 justify-end shrink-0">
            {/* "Contact" Pill Outline Button with Green Fog Flow (Visible on Desktop / sm+) */}
            <a
              id="header-contact-button"
              href="#contact"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("contact");
                }
              }}
              className="hidden sm:inline-flex relative group overflow-hidden items-center justify-center px-4 sm:px-6 py-2 rounded-full reflective-glass-pill text-white text-xs sm:text-sm font-medium tracking-wide border border-white/20 hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(52,211,153,0.55),inset_0_0_12px_rgba(52,211,153,0.35)] transition-all duration-500 cursor-pointer"
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
            </a>

            {/* Circular Side Menu Button (Visible on mobile, triggers MarvioDrawer) */}
            <button
              id="header-menu-button"
              onClick={onOpenMenu}
              aria-label="Open Navigation Menu"
              className="flex md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-emerald-400 text-black flex-col items-center justify-center gap-1 shadow-xl transition-all hover:scale-105 cursor-pointer shrink-0"
            >
              <span className="w-4 h-[2px] bg-black rounded-full" />
              <span className="w-4 h-[2px] bg-black rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
