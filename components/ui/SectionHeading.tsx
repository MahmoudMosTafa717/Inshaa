import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "right" | "center" | "left";
  className?: string;
}

export function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  align = "right",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center max-w-3xl mx-auto",
        align === "right" && "text-right max-w-3xl",
        align === "left" && "text-left max-w-3xl",
        className
      )}
    >
      {(tag || number) && (
        <div
          className={cn(
            "flex items-center gap-3 mb-3 font-mono text-xs font-bold text-brick-700 tracking-wider",
            align === "center" && "justify-center"
          )}
        >
          {number && (
            <span className="bg-brick-50 text-brick-900 px-2.5 py-0.5 border border-brick-300">
              {number}
            </span>
          )}
          {tag && <span>{"//"} {tag}</span>}
          <div className="h-px bg-desert-400 flex-1 max-w-[80px]" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
