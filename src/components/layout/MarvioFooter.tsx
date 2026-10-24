"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { ceoProfileData } from "@/data/ceo";
import { companyData } from "@/data/company";

interface MarvioFooterProps {
  onNavigate?: (section: string) => void;
}

export const MarvioFooter: React.FC<MarvioFooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (e: React.MouseEvent, section: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(section);
    }
  };

  return (
    <footer className="bg-[#07080e] border-t border-white/10 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
              <span className="font-bold text-xs text-white">DH</span>
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                DANAM HOLDINGS
              </span>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                N.E. Praveen Elangovan &bull; Managing Director
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-mono">
            <a href="#home" onClick={(e) => handleNav(e, "home")} className="hover:text-white transition-colors cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleNav(e, "about")} className="hover:text-white transition-colors cursor-pointer">About MD</a>
            <a href="#projects" onClick={(e) => handleNav(e, "projects")} className="hover:text-white transition-colors cursor-pointer">Projects</a>
            <a href="#ventures" onClick={(e) => handleNav(e, "ventures")} className="hover:text-white transition-colors cursor-pointer">Ventures</a>
            <a href="#contact" onClick={(e) => handleNav(e, "contact")} className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/30 text-white flex items-center justify-center transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p>
            &copy; 2026 DANAM HOLDINGS. All Rights Reserved.
          </p>
          <p className="text-neutral-500">
            Towards Fortune Unfoldings &bull; Architecture by Marvio System
          </p>
        </div>
      </div>
    </footer>
  );
};
