"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface SplitTextProps {
  children: string;
  className?: string;
  charClassName?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  splitBy?: "chars" | "words" | "lines";
  staggerDelay?: number;
  duration?: number;
  delay?: number;
  trigger?: any;
  yOffset?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({
  children,
  className,
  charClassName,
  wordClassName,
  as: Component = "span",
  splitBy = "chars",
  staggerDelay = 0.025,
  duration = 0.6,
  delay = 0.05,
  yOffset = 24,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return React.createElement(
      Component,
      {
        className: cn("inline-block", className),
        "aria-label": children,
      },
      children
    );
  }

  if (splitBy === "words") {
    const words = children.split(" ");
    return React.createElement(
      Component,
      {
        className: cn("inline-block", className),
        "aria-label": children,
      },
      words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]">
          <motion.span
            initial={{ opacity: 0, y: yOffset }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn("inline-block", wordClassName)}
          >
            {word}
          </motion.span>
        </span>
      ))
    );
  }

  // Chars
  const chars = Array.from(children);
  return React.createElement(
    Component,
    {
      className: cn("inline-block", className),
      "aria-label": children,
    },
    chars.map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: yOffset, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration,
          delay: delay + i * staggerDelay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "inline-block",
          char === " " ? "whitespace-pre" : "",
          charClassName
        )}
      >
        {char}
      </motion.span>
    ))
  );
};
