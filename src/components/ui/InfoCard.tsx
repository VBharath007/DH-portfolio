"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  variant?: "floating" | "flat" | "elevated";
  dark?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  badge,
  className,
  variant = "floating",
  dark = false,
}) => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div
      onClick={() => setIsTapped((prev) => !prev)}
      className={cn(
        "rounded-2xl transition-all duration-300 relative group overflow-hidden border cursor-pointer select-none active:scale-[0.98]",
        isTapped && "is-active !border-black shadow-xl scale-[1.01]",
        dark
          ? "glass-card-dark text-white border-white/20 hover:border-white active:border-white"
          : "glass-card-interactive text-neutral-900 border-neutral-300/90 hover:!border-black group-hover:!border-black active:!border-black shadow-md",
        variant === "floating" && "p-4 md:p-5",
        variant === "flat" &&
          "p-4 sm:p-6 border-neutral-300/80 bg-white/95 backdrop-blur-md rounded-2xl hover:!border-black active:!border-black",
        variant === "elevated" && "p-4 sm:p-6 glass-panel rounded-2xl hover:!border-black active:!border-black",
        className
      )}
    >
      {/* Specular Top Edge Light Accent */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-400/50 to-transparent group-hover:via-black group-active:via-black transition-all duration-500",
          isTapped && "via-black"
        )}
      />

      <div className="flex items-start justify-between gap-2.5 sm:gap-3 mb-2">
        <span
          className={cn(
            "text-[10px] sm:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.18em] uppercase transition-colors",
            isTapped
              ? "text-black font-bold"
              : dark
              ? "text-neutral-400 group-hover:text-white"
              : "text-neutral-500 group-hover:text-black"
          )}
        >
          {title}
        </span>
        {icon && (
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 active:scale-110 shadow-2xs",
              isTapped
                ? "bg-black text-white border-black [&_svg]:text-white scale-105"
                : dark
                ? "bg-neutral-800/80 text-neutral-200 border border-neutral-700/60 group-hover:border-white group-hover:text-white"
                : "bg-neutral-100/90 text-neutral-700 border border-neutral-300/80 group-hover:bg-black group-hover:text-white group-hover:border-black [&_svg]:group-hover:text-white"
            )}
          >
            {icon}
          </div>
        )}
      </div>

      <div
        className={cn(
          "font-serif-luxury text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1",
          dark ? "text-white" : "text-neutral-950"
        )}
      >
        {value}
      </div>

      {subtitle && (
        <p
          className={cn(
            "text-[11px] sm:text-xs leading-normal font-normal",
            dark ? "text-neutral-400" : "text-neutral-600"
          )}
        >
          {subtitle}
        </p>
      )}

      {badge && (
        <div className="mt-2.5 pt-2 border-t border-neutral-200/80 dark:border-neutral-800/60 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-medium text-neutral-500 truncate">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
