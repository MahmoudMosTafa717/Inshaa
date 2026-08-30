import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "brick" | "desert" | "amber" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] font-display";

  const variantStyles = {
    primary: "bg-brick-700 text-white hover:bg-brick-800 focus:ring-brick-700 shadow-architectural-brick border-2 border-brick-700",
    brick: "bg-brick-700 text-white hover:bg-brick-800 focus:ring-brick-700 shadow-architectural-brick border-2 border-brick-700",
    desert: "bg-desert-600 text-white hover:bg-desert-700 focus:ring-desert-500 shadow-architectural-amber border-2 border-desert-600",
    amber: "bg-desert-600 text-white hover:bg-desert-700 focus:ring-desert-500 shadow-architectural-amber border-2 border-desert-600",
    secondary: "bg-paper-100 text-slate-900 border border-paper-300 hover:bg-paper-200 focus:ring-slate-400",
    cyan: "bg-petroleum-700 text-white hover:bg-petroleum-800 focus:ring-petroleum-600 shadow-architectural border-2 border-petroleum-700",
    outline: "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-900",
    ghost: "bg-transparent text-slate-700 hover:bg-paper-100 hover:text-slate-900",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-bold",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
