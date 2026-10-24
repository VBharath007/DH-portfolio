"use client";

import React from "react";
import Image from "next/image";
import { NavItem } from "@/types";
import { X, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeSection: string;
  onTabSelect?: (sectionId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
  activeSection,
  onTabSelect,
}) => {
  if (!isOpen) return null;

  const handleNavClick = (sectionId: string) => {
    if (onTabSelect) {
      onTabSelect(sectionId);
    } else {
      scrollToSection(sectionId);
    }
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-800 font-bold">
              Menu Navigation
            </span>
            <button
              onClick={onClose}
              className="p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 flex flex-col space-y-2">
            {items.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`flex items-center justify-between px-4 py-3 text-sm font-semibold tracking-widest uppercase transition-colors text-left cursor-pointer ${
                    isActive
                      ? "bg-black text-white"
                      : "text-neutral-800 hover:bg-neutral-100 hover:text-black"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer in drawer */}
        <div className="pt-6 border-t border-neutral-200">
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full bg-black text-white py-3.5 px-4 text-xs font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Connect with Secretariat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="mt-4 text-center">
            <span className="text-[11px] text-neutral-400 font-mono">
              DHANAM HOLDING • EXECUTIVE PORTFOLIO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
