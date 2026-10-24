"use client";

import * as React from "react";
import { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const cn = (...args: any[]) => twMerge(clsx(args));

export interface DockItemData {
  link?: string;
  Icon: React.ReactNode;
  target?: string;
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  isActive?: boolean;
}

export interface AnimatedDockProps {
  className?: string;
  itemClassName?: string;
  items: DockItemData[];
  baseWidth?: number;
  magnifiedWidth?: number;
  distanceRange?: number;
  orientation?: "horizontal" | "vertical";
  showTooltip?: boolean;
}

export const AnimatedDock = ({
  className,
  itemClassName,
  items,
  baseWidth = 40,
  magnifiedWidth = 80,
  distanceRange = 150,
  orientation = "horizontal",
  showTooltip = false,
}: AnimatedDockProps) => {
  const mousePos = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mousePos.set(orientation === "vertical" ? e.pageY : e.pageX)}
      onMouseLeave={() => mousePos.set(Infinity)}
      className={cn(
        orientation === "vertical"
          ? "flex flex-col items-center gap-2.5 rounded-full bg-secondary/50 border border-primary/10 shadow-md p-2"
          : "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-secondary/50 border border-primary/10 shadow-md px-4 pb-3",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="relative group/item flex items-center justify-center">
          <DockItem
            mousePos={mousePos}
            orientation={orientation}
            className={cn(
              itemClassName,
              item.isActive && "bg-emerald-400 text-black border-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.7)] font-bold scale-105"
            )}
            baseWidth={baseWidth}
            magnifiedWidth={magnifiedWidth}
            distanceRange={distanceRange}
          >
            {item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                aria-label={item.label}
                className="grow flex items-center justify-center w-full h-full text-inherit cursor-pointer focus:outline-none"
              >
                {item.Icon}
              </button>
            ) : (
              <Link
                href={item.link || "#"}
                target={item.target}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="grow flex items-center justify-center w-full h-full text-inherit"
              >
                {item.Icon}
              </Link>
            )}
          </DockItem>

          {showTooltip && item.label && (
            <span
              className={cn(
                "pointer-events-none absolute z-50 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-[#0b0c16]/95 text-white border border-white/20 backdrop-blur-md shadow-xl opacity-0 group-hover/item:opacity-100 transition-all duration-200 whitespace-nowrap",
                orientation === "vertical"
                  ? "right-full mr-3 top-1/2 -translate-y-1/2 shadow-emerald-950/40"
                  : "bottom-full mb-2 left-1/2 -translate-x-1/2"
              )}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export interface DockItemProps {
  mousePos: MotionValue<number>;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
  baseWidth?: number;
  magnifiedWidth?: number;
  distanceRange?: number;
}

export const DockItem = ({
  mousePos,
  orientation = "horizontal",
  children,
  className,
  baseWidth = 40,
  magnifiedWidth = 80,
  distanceRange = 150,
}: DockItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mousePos, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    if (orientation === "vertical") {
      return val - bounds.y - bounds.height / 2;
    }
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-distanceRange, 0, distanceRange],
    [baseWidth, magnifiedWidth, baseWidth]
  );
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconScale = useTransform(width, [baseWidth, magnifiedWidth], [1, 1.4]);
  const iconSpring = useSpring(iconScale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={cn(
        "aspect-square rounded-full bg-primary text-secondary-foreground flex items-center justify-center shrink-0",
        className
      )}
    >
      <motion.div
        style={{ scale: iconSpring }}
        className="flex items-center justify-center w-full h-full grow"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
