"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import { scrollToSection } from "@/lib/utils";
import { Phone, MapPin, ArrowUp, ExternalLink } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface FooterProps {
  onNavigateTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const [showFloatingTop, setShowFloatingTop] = useState(false);
  const [alignKey, setAlignKey] = useState(0);
  const lastScrollY = useRef(0);
  const isScrollingUpRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const firstPageThreshold = window.innerHeight * 0.7; // Past the first page / hero section
      const scrollDiff = lastScrollY.current - currentScrollY;

      // Only active after crossing the first page
      if (currentScrollY > firstPageThreshold) {
        const isNearBottom =
          window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 250;

        // When scrolling UP (or near bottom)
        if (scrollDiff > 4 || isNearBottom) {
          if (!isScrollingUpRef.current) {
            isScrollingUpRef.current = true;
            // Increments key so entrance and auto-alignment animation triggers every time user scrolls up
            setAlignKey((prev) => prev + 1);
          }
          setShowFloatingTop(true);
        } else if (scrollDiff < -6 && !isNearBottom) {
          // When scrolling down, hide so that next scroll-up re-triggers auto-alignment
          isScrollingUpRef.current = false;
          setShowFloatingTop(false);
        }
      } else {
        // Still on the first page, keep hidden
        isScrollingUpRef.current = false;
        setShowFloatingTop(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Personal Data", id: "personal" },
    { label: "Work & Capabilities", id: "work" },
    { label: "Landmark Projects", id: "projects" },
    { label: "Achievements & Milestones", id: "achievements" },
    { label: "Office Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#0f1115] text-neutral-300 border-t border-neutral-800 pt-16 pb-12">
      <div className="luxury-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-14 flex-shrink-0">
                <Image
                  src="/images/company/logo-mark-transparent.png"
                  alt={companyData.brandName}
                  fill
                  sizes="48px"
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury font-bold text-xl sm:text-2xl tracking-wider text-white leading-tight">
                  {companyData.brandName}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#62c937] font-semibold mt-0.5">
                  Towards Fortune Unfoldings
                </span>
              </div>
            </div>

            <p className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              {companyData.legalName} • ESTABLISHED {companyData.establishedYear}
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              &ldquo;{companyData.visionStatement}&rdquo;
            </p>

            <p className="text-xs text-neutral-500 leading-relaxed max-w-md">
              Expert in building construction, Project Management Consultancy (PMC), Engineering, Procurement and Construction (EPC), and Project Delivery based in Madurai, Tamil Nadu.
            </p>

            {/* Official Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {/* YouTube */}
              <a
                href={companyData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="DHANAM HOLDING YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={companyData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="DHANAM HOLDING Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={companyData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="DHANAM HOLDING Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="N.E.Praveen Elangovan LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 font-mono">
              Portfolio Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (link.id === "home") {
                        handleScrollToTop();
                      } else if (onNavigateTab) {
                        onNavigateTab(link.id);
                      } else {
                        scrollToSection(link.id);
                      }
                    }}
                    className="!bg-transparent text-xs sm:text-sm text-white hover:!text-[#62c937] transition-colors tracking-wide text-left cursor-pointer p-0 block border-0 outline-none shadow-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Office & Location Info */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 font-mono">
              Office Location &amp; Contact
            </h3>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400">
              <MapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5 leading-relaxed">
                <span className="block">1, Anuppanadi Road, Teppakulam,</span>
                <span className="block">Madurai – 625009,</span>
                <span className="block">Tamil Nadu, India.</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={companyData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <span className="text-[10px] tracking-widest uppercase text-neutral-500 block font-mono">
                TELEPHONE &amp; WHATSAPP
              </span>
              {companyData.contactNumbers.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm">
                  <Phone className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <a
                    href={phone.telLink}
                    className="text-white hover:underline font-mono font-bold"
                  >
                    {phone.display}
                  </a>
                  <a
                    href={phone.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

            {/* GSTIN Compliance with generous top and bottom spacing */}
            <div className="pt-5 pb-5 border-t border-neutral-800/80 text-xs">
              <span className="text-[10px] tracking-[0.22em] uppercase text-neutral-400 block font-mono mb-2.5">
                GSTIN COMPLIANCE
              </span>
              <span className="font-mono text-white font-bold text-sm sm:text-base tracking-wider block">
                {companyData.gstin}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 {companyData.brandName}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Managing Director: N.E.Praveen Elangovan</span>
            <span className="hidden sm:inline">•</span>
            <span>Madurai, Tamil Nadu</span>
          </div>
        </div>
      </div>

      {/* Floating Animated Up Arrow Button (Floats above footer, activates after first page, auto-aligns on every scroll up) */}
      <AnimatePresence>
        {showFloatingTop && (
          <motion.button
            key={`floating-top-${alignKey}`}
            onClick={handleScrollToTop}
            initial={{ opacity: 0, y: 35, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.8 }}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 460,
              damping: 20,
            }}
            className="fixed bottom-7 right-7 z-50 w-12 h-12 flex items-center justify-center bg-[#0f1115]/95 hover:bg-black text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-white shadow-2xl backdrop-blur-md rounded-full cursor-pointer transition-colors group"
            aria-label="Scroll back to top of page"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
