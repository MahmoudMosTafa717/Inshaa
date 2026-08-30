import React from "react";
import { ArrowUpLeft, Calendar, PhoneCall, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ConsultationCta() {
  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background blueprint grid styling */}
      <div className="absolute inset-0 bg-grid-dense opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-petroleum-950 border-2 border-brick-600 p-8 sm:p-12 cad-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-right">
              <span className="text-xs font-mono font-bold text-desert-400 bg-desert-950/90 px-3 py-1 border border-desert-700 inline-block">
                {"//"} استشارة هندسية أولية ومراجعة كروكي
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-display leading-tight">
                هل لديك قطعة أرض بالفيوم، 6 أكتوبر، أو الشيخ زايد وتريد البدء في البناء؟
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed font-sans">
                احجز جلسة استشارية مع <strong className="text-desert-400">مهندس استشاري / عماد الدين أمين</strong> لمراجعة الارتدادات، نسب البناء، كروكي الأرض، وتقديم مقترح تصميمي واقتصادي متكامل.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>سجل استشاري نقابة المهندسين 1248/خ</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-desert-400" />
                  <span>المقر الرئيسي: الفيوم • فروع: 6 أكتوبر والشيخ زايد</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="w-full justify-center bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold font-display text-base shadow-lg"
              >
                <Calendar className="w-5 h-5 ml-2 text-desert-300" />
                <span>حجز موعد استشارة بمقر المكتب</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="https://wa.me/201001234567"
                external
                className="w-full justify-center text-white border-slate-700 hover:bg-slate-800 font-mono text-sm"
              >
                <PhoneCall className="w-4 h-4 ml-2 text-desert-400" />
                <span>محادثة واتساب سريعة: 01001234567</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
