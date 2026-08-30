"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpLeft, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  Compass,
  Building2,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BlueprintCanvas } from "@/components/motion/BlueprintCanvas";
import { FadeInView } from "@/components/motion/FadeInView";

export function HeroSection() {
  const cityBadges = [
    "التجمع الخامس",
    "الشيخ زايد",
    "العاصمة الإدارية الجديدة",
    "6 أكتوبر",
    "الشروق",
    "الساحل الشمالي",
  ];

  return (
    <section className="relative overflow-hidden bg-paper-50 border-b border-slate-200 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Interactive Blueprint Canvas Background */}
      <BlueprintCanvas className="opacity-70" gridSize={32} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Syndicate Verification Badge */}
        <FadeInView direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-300 px-3 py-1.5 mb-6 text-xs font-mono text-slate-800 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>مكتب استشارات هندسية معتمد • نقابة المهندسين المصرية</span>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <FadeInView direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] font-display">
                استشارات هندسية وتصميم معماري{" "}
                <span className="relative inline-block text-amber-600 underline decoration-amber-300 decoration-wavy decoration-2">
                  يبني رؤيتك بدقة
                </span>{" "}
                ويحمي استثمارك
              </h1>
            </FadeInView>

            <FadeInView direction="up" delay={0.3}>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal">
                نحول قطعتك السكنية أو التجارية إلى صرح معماري فاخر. تصميمات هندسية مطابقة لكود البناء المصري ECP، استخراج فوري للتراخيص بأجهزة المدن الجديدة، وإشراف ميداني يضمن لك توفير حتى 18% من تكاليف الخرسانة والحديد.
              </p>
            </FadeInView>

            {/* Value bullets */}
            <FadeInView direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>تراخيص معتمدة بدون مخالفات أو تأخير</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>نوته حسابية إنشائية بختم مهندس استشاري</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>إشراف هندسي صارم على صب الخرسانات</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>مقايسة كميات BOQ دقيقة لحمايتك من المقاولين</span>
                </div>
              </div>
            </FadeInView>

            {/* Action Buttons */}
            <FadeInView direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button variant="amber" size="lg" href="/calculator" className="text-base shadow-architectural-amber">
                  <Calculator className="w-5 h-5 ml-2" />
                  <span>احسب تكلفة تصميم ومقايسة مشروعك</span>
                </Button>

                <Button variant="outline" size="lg" href="/projects" className="text-base">
                  <span>سابقة أعمال الفلل والمشروعات</span>
                  <ArrowUpLeft className="w-5 h-5 mr-2" />
                </Button>
              </div>
            </FadeInView>

            {/* Trust metrics banner */}
            <FadeInView direction="up" delay={0.45}>
              <div className="pt-6 border-t border-slate-200/80 flex items-center gap-6 text-xs text-slate-600 font-mono">
                <div>
                  <span className="font-bold text-slate-900 text-base font-sans">150+</span> مشروع منجز
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div>
                  <span className="font-bold text-slate-900 text-base font-sans">100%</span> قبول التراخيص
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div>
                  <span className="font-bold text-slate-900 text-base font-sans">15+</span> عاماً بمصر
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Architectural Visual Stack (5 cols) */}
          <div className="lg:col-span-5 relative">
            <FadeInView direction="left" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Architectural Hero Image */}
                <div className="relative border-2 border-slate-900 bg-white p-2 shadow-2xl cad-border">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                      alt="تصميم فيلا سكنية حديثة التجمع الخامس - مكتب إنشاء للاستشارات الهندسية"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Architectural scale watermark */}
                    <div className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[10px] font-mono px-2 py-1 backdrop-blur-sm">
                      SCALE 1:50 // REVIT BIM 2025
                    </div>
                  </div>

                  {/* Blueprint details header */}
                  <div className="p-3 bg-paper-50 border-t border-slate-200 mt-2 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">مشروع فيلا النرجس // التجمع الخامس</span>
                    <span className="text-amber-700 bg-amber-100 px-2 py-0.5 font-sans">معتمد</span>
                  </div>
                </div>

                {/* Floating CAD Badge Card */}
                <div className="absolute -bottom-6 -right-6 bg-white border-2 border-slate-900 p-4 shadow-architectural hidden sm:block max-w-[240px] z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 font-mono">مواصفات الكود المصري</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    تصميم إنشائي مقاوم للزلازل ECP 201 مع تقرير جسات التربة المعتمد.
                  </p>
                </div>

                {/* Floating Metric Card */}
                <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-3 shadow-xl hidden sm:flex items-center gap-3 border border-slate-800 z-20">
                  <Compass className="w-7 h-7 text-amber-400" />
                  <div>
                    <div className="text-xs font-mono text-slate-300">وفر الحديد والتكلفة</div>
                    <div className="text-sm font-bold text-amber-400">حتى 18% توفير هندسي</div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        {/* City Ticker Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-500 shrink-0 font-semibold">
              {"//"} مناطق المشروعات المعتمدة وتراخيص البناء:
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              {cityBadges.map((city) => (
                <span
                  key={city}
                  className="bg-white border border-slate-200 hover:border-amber-400 text-slate-800 text-xs px-3 py-1 font-medium transition-colors"
                >
                  ✦ {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
