"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3 text-xs md:text-sm tracking-wider",
    lg: "px-8 py-4 text-sm md:text-base tracking-widest",
  };

  const variantClasses = {
    primary:
      "bg-black text-white border border-black hover:bg-neutral-800 hover:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99]",
    secondary:
      "bg-white text-neutral-900 border border-neutral-300 hover:border-black hover:bg-neutral-50 transition-all duration-200 active:scale-[0.99]",
    outline:
      "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-black hover:text-white hover:border-black transition-all duration-200",
    ghost:
      "bg-transparent text-neutral-800 hover:bg-neutral-100 transition-colors duration-200",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium uppercase transition-all select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2 inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2 inline-flex">{icon}</span>}
    </button>
  );
};
