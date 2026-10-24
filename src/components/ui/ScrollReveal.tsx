"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimationDirection = "top" | "bottom" | "left" | "right" | "none";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "direction"> {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: boolean;
  className?: string;
  viewportOnce?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "bottom",
  delay = 0,
  duration = 0.7,
  distance = 36,
  scale = false,
  className,
  viewportOnce = true,
  ...rest
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "top":
        return { y: -distance, x: 0 };
      case "bottom":
        return { y: distance, x: 0 };
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPos,
        scale: scale ? 0.95 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: viewportOnce,
        amount: 0.05,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("w-full", className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
