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
  MapPin 
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Button } from "@/components/ui/Button";
import { BlueprintCanvas } from "@/components/motion/BlueprintCanvas";
import { FadeInView } from "@/components/motion/FadeInView";

export function HeroSection() {
  const { state } = useAdminData();
  const { identity, projects } = state;

  return (
    <section className="relative overflow-hidden bg-paper-50 border-b border-paper-300 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Interactive Blueprint Canvas Background */}
      <BlueprintCanvas className="opacity-60" gridSize={32} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Syndicate Verification Badge */}
        <FadeInView direction="down" delay={0.1}>
          <div className="inline-flex items-center gap-2.5 bg-white/95 border border-brick-300 px-3.5 py-1.5 mb-6 text-xs font-mono text-slate-800 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-brick-700" />
            <span className="font-semibold text-slate-900">
              {identity.name} {"//"} بإشراف {identity.leadConsultant} ({identity.syndicateNumber.split("-")[0]})
            </span>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <FadeInView direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18] font-display">
                استشارات هندسية وتصميم معماري{" "}
                <span className="relative inline-block text-brick-700 underline decoration-desert-500 decoration-wavy decoration-2">
                  يُجسد طموحك بدقة
                </span>{" "}
                ويحمي سلامة منشأتك
              </h1>
            </FadeInView>

            <FadeInView direction="up" delay={0.3}>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal font-sans">
                {identity.description}
              </p>
            </FadeInView>

            {/* Value bullets */}
            <FadeInView direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>تراخيص معتمدة بديوان الفيوم وأجهزة أكتوبر وزايد</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>نوتة حسابية إنشائية بختم مهندس استشاري معتمد</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>إشراف ميداني صارم واستلام كل مرحلة صب</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>مقايسة كميات BOQ دقيقة تحميك من مبالغات المقاولين</span>
                </div>
              </div>
            </FadeInView>

            {/* Action Buttons */}
            <FadeInView direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="/calculator" 
                  className="text-base bg-brick-700 hover:bg-brick-800 border-brick-700 text-white shadow-architectural-brick font-bold font-display"
                >
                  <Calculator className="w-5 h-5 ml-2 text-desert-300" />
                  <span>احسب تكلفة تصميم ومقايسة مشروعك</span>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  href="/projects" 
                  className="text-base border-slate-900 text-slate-900 hover:bg-paper-100 font-display font-semibold"
                >
                  <span>سابقة الأعمال بالمحافظات</span>
                  <ArrowUpLeft className="w-5 h-5 mr-2 text-brick-600" />
                </Button>
              </div>
            </FadeInView>

            {/* Trust metrics banner */}
            <FadeInView direction="up" delay={0.45}>
              <div className="pt-6 border-t border-paper-300 flex items-center gap-6 text-xs text-slate-600 font-mono">
                <div>
                  <span className="font-bold text-slate-900 text-base font-sans">{projects.length}+</span> مشروع منجز
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div>
                  <span className="font-bold text-slate-900 text-base font-sans">100%</span> قبول التراخيص
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div>
                  <span className="font-bold text-slate-900 text-base font-sans">20+</span> عاماً خبرة استشارية
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
                      src={projects[0]?.heroImage || "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1000&q=80"}
                      alt={`${projects[0]?.title || "مشروع هندسي"} - ${identity.name}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Architectural scale watermark */}
                    <div className="absolute bottom-2 left-2 bg-slate-950/85 text-desert-300 text-[10px] font-mono px-2 py-1 backdrop-blur-sm border border-slate-700">
                      SCALE 1:50 // INSHAA CONSULTING STUDIO
                    </div>
                  </div>

                  {/* Blueprint details header */}
                  <div className="p-3 bg-paper-50 border-t border-slate-200 mt-2 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">{projects[0]?.title || "مشروع استشاري معتمد"}</span>
                    <span className="text-brick-800 bg-brick-100 px-2 py-0.5 font-sans font-bold border border-brick-300">
                      معتمد نقابياً
                    </span>
                  </div>
                </div>

                {/* Floating CAD Badge Card */}
                <div className="absolute -bottom-6 -right-6 bg-white border-2 border-slate-900 p-4 shadow-architectural hidden sm:block max-w-[250px] z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 font-mono">كود البناء المصري ECP</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    حسابات دقيقة لمقاومة أحمال الرياح والزلازل مع فحص تربة وتأسيس معتمد.
                  </p>
                </div>

                {/* Floating Metric Card */}
                <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-3 shadow-xl hidden sm:flex items-center gap-3 border-2 border-desert-500 z-20">
                  <Compass className="w-7 h-7 text-desert-400" />
                  <div>
                    <div className="text-xs font-mono text-slate-300">{identity.leadConsultant.split("/")[1] || identity.leadConsultant}</div>
                    <div className="text-sm font-bold text-desert-400">مهندس استشاري معتمد</div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        {/* City Ticker Bar */}
        <div className="mt-14 pt-8 border-t border-paper-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-600 shrink-0 font-bold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brick-600" />
              <span>{"//"} مراكز العمليات الهندسية والتراخيص المعتمدة:</span>
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              {identity.primaryLocations.map((city, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 font-medium transition-colors font-display bg-brick-50 text-brick-900 border border-brick-300 font-bold"
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
