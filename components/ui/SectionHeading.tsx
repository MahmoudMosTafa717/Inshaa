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
            "flex items-center gap-3 mb-3 font-mono text-xs font-semibold text-amber-700 tracking-wider",
            align === "center" && "justify-center"
          )}
        >
          {number && (
            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 border border-amber-300">
              {number}
            </span>
          )}
          {tag && <span>// {tag}</span>}
          <div className="h-px bg-slate-200 flex-1 max-w-[80px]" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
