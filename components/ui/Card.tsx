import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blueprint" | "flat" | "elevated";
  cornerTicks?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  cornerTicks = true,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-slate-200 shadow-soft-elevation",
    blueprint: "bg-white border border-blueprint-200 hover:border-blueprint-400 shadow-soft-elevation",
    flat: "bg-paper-100 border border-paper-300",
    elevated: "bg-white border-2 border-slate-900 shadow-architectural",
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-200",
        variantStyles[variant],
        cornerTicks && "cad-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  );
}
