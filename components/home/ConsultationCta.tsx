import React from "react";
import { ArrowUpLeft, PhoneCall, Calendar, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/motion/FadeInView";

export function ConsultationCta() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-slate-950 border-2 border-amber-600 p-8 sm:p-12 lg:p-16 cad-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-right">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-3 py-1 border border-amber-800/80 inline-block">
                // استشارة هندسية أولية مجانية
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
                هل تمتلك قطعة أرض أو ترغب في تصميم وإشراف فيلتك القادمة؟
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                احجز جلسة استشارية فنية مع مهندس استشاري بمقر مكتبنا بالتجمع الخامس. سنراجع معك اشتراطات الجهاز والارتدادات ونقدم لك تحليلاً مبدئياً للمشروع والمقايسة التقديرية.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  مراجعة اشتراطات جهاز المدينة
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  تقدير تكلفة الهيكل والتشطيب
                </span>
                <span className="flex items-center gap-1.5 text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  بدون أي التزام مالي مسبق
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                variant="amber"
                size="lg"
                href="/contact"
                className="w-full justify-center text-base py-4 font-bold shadow-architectural-amber"
              >
                <Calendar className="w-5 h-5 ml-2" />
                <span>احجز موعد استشارة بمقر المكتب</span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="tel:+201001234567"
                className="w-full justify-center bg-slate-800 text-white border-slate-700 hover:bg-slate-700 font-mono text-sm"
              >
                <PhoneCall className="w-4 h-4 ml-2 text-amber-400" />
                <span>اتصال مباشر: 0100 123 4567</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
