"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  tagline: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tagline,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}) => {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center max-w-3xl mx-auto flex flex-col items-center" : "max-w-2xl text-left",
        className
      )}
    >
      {/* 1. Tagline Badge entering smoothly from TOP */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em] font-semibold mb-3 sm:mb-4 shadow-xs max-w-full",
          isDark
            ? "bg-neutral-900/80 border border-neutral-700/80 text-neutral-300 backdrop-blur-md"
            : "glass-pill text-neutral-700"
        )}
      >
        {number && (
          <span className={cn("font-mono text-[10px] sm:text-xs", isDark ? "text-white" : "text-black font-bold")}>
            {number}
          </span>
        )}
        <span
          className={cn(
            "w-3 sm:w-4 h-[1.5px]",
            isDark ? "bg-neutral-500" : "bg-neutral-900"
          )}
        />
        <span className="truncate sm:whitespace-normal">{tagline}</span>
      </motion.div>

      {/* 2. Main Title entering smoothly */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-serif-luxury text-xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 leading-[1.2]",
          isDark ? "text-white" : "text-neutral-950"
        )}
      >
        {title}
      </motion.h2>

      {/* 3. Subtitle entering smoothly from BOTTOM */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "text-sm sm:text-base leading-relaxed font-normal",
            isDark ? "text-neutral-400" : "text-neutral-600",
            isCenter ? "max-w-2xl mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
