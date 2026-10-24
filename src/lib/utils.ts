import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility helper to concatenate and format conditional classnames cleanly (shadcn standard)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to element by ID
 */
export function scrollToSection(id: string): void {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
