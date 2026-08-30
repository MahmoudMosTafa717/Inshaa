"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
}

export function Slider({
  value,
  min,
  max,
  step = 10,
  onChange,
  className,
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("relative w-full py-2", className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2.5 bg-slate-200 rounded-none appearance-none cursor-pointer accent-amber-600 focus:outline-none"
        style={{
          background: `linear-gradient(to left, #D97706 ${percentage}%, #E2E8F0 ${percentage}%)`,
        }}
      />
      <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1.5">
        <span>{min} م²</span>
        <span>{max} م²</span>
      </div>
    </div>
  );
}
