"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Building2, 
  MapPin, 
  Clock, 
  FileCheck, 
  ShieldAlert, 
  Sparkles,
  MessageCircle,
  HelpCircle,
  ArrowUpLeft
} from "lucide-react";
import { 
  ProjectType, 
  ScopeType, 
  LocationZone, 
  calculateProjectEstimates 
} from "@/lib/data/costEstimator";
import { formatCurrencyEGP, formatArea } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/motion/FadeInView";

export function CostEstimatorWidget() {
  const [projectType, setProjectType] = useState<ProjectType>("villa");
  const [builtUpArea, setBuiltUpArea] = useState<number>(650);
  const [scope, setScope] = useState<ScopeType>("design_and_supervision");
  const [location, setLocation] = useState<LocationZone>("new_cairo");
  const [finishLevel, setFinishLevel] = useState<"semi_finished" | "luxury" | "ultra_luxury">("luxury");

  const results = calculateProjectEstimates({
    projectType,
    builtUpArea,
    scope,
    location,
    finishLevel,
  });

  const projectTypes = [
    { id: "villa", label: "فيلا سكنية فاخرة", icon: "🏡" },
    { id: "residential_building", label: "عمارة سكنية", icon: "🏢" },
    { id: "commercial", label: "مبنى تجاري / إداري", icon: "🏬" },
    { id: "interior", label: "تشطيب وديكور داخلي", icon: "🛋️" },
  ];

  const scopes = [
    { id: "design_and_supervision", label: "تصميم كامل + إشراف هندسي", note: "الخيار الموصى به" },
    { id: "full_design", label: "تصميم معماري وإنشائي وتراخيص فقط" },
    { id: "supervision_only", label: "إشراف هندسي ميداني واستلام خرسانات" },
  ];

  const locations = [
    { id: "new_cairo", label: "التجمع الخامس والقاهرة الجديدة" },
    { id: "sheikh_zayed", label: "الشيخ زايد و 6 أكتوبر" },
    { id: "new_capital", label: "العاصمة الإدارية الجديدة" },
    { id: "other", label: "الساحل الشمالي ومحافظات مصر" },
  ];

  const finishLevels = [
    { id: "semi_finished", label: "نصف تشطيب (محارة وحلوق)" },
    { id: "luxury", label: "تشطيب فاخر (Super Lux)" },
    { id: "ultra_luxury", label: "ألترا لوكس ومواد مستوردة" },
  ];

  const generateWhatsAppMessage = () => {
    const text = `مرحباً مكتب إنشاء للاستشارات الهندسية،
قمت بحساب تقديري لمشروعي عبر الموقع الإلكتروني:
- نوع المشروع: ${projectTypes.find(p => p.id === projectType)?.label}
- المساحة الإجمالية: ${builtUpArea} م²
- الموقع: ${locations.find(l => l.id === location)?.label}
- نطاق العمل: ${scopes.find(s => s.id === scope)?.label}
- أتعاب التصميم التقديرية: ${formatCurrencyEGP(results.estimatedDesignFee)}
أرغب في حجز جلسة استشارية هندسية لمراجعة المخططات ومناقشة تفاصيل المشروع.`;
    return `https://wa.me/201001234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          tag="حاسبة المشروعات الهندسية"
          title="احسب تكلفة تصميم ومقايسة مشروعك في دقيقة"
          subtitle="أداة هندسية تفاعلية تمنحك تقديراً دقيقاً لأتعاب التصميم، الإشراف الهندسي، وميزانية التشييد المتوقعة بالسوق المصري 2025/2026."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Input Column (7 cols) */}
          <div className="lg:col-span-7 bg-paper-50 border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-700 mb-2 uppercase">
                1. اختر نوع المشروع:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as ProjectType)}
                    className={`p-3 text-center transition-all flex flex-col items-center justify-center gap-1.5 border ${
                      projectType === type.id
                        ? "bg-slate-900 text-white border-slate-900 shadow-architectural font-bold"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="text-xs">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Built Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold font-mono text-slate-700 uppercase">
                  2. مسطح المباني الإجمالي (م²):
                </label>
                <span className="text-lg font-extrabold font-mono text-amber-700 bg-amber-100 px-3 py-0.5 border border-amber-300">
                  {formatArea(builtUpArea)}
                </span>
              </div>
              <Slider
                min={150}
                max={3500}
                step={25}
                value={builtUpArea}
                onChange={setBuiltUpArea}
              />
            </div>

            {/* 3. Scope of Work */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-700 mb-2 uppercase">
                3. نطاق الخدمات الاستشارية المطلوبة:
              </label>
              <div className="space-y-2">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id as ScopeType)}
                    className={`w-full p-3 text-right text-xs sm:text-sm font-medium border flex items-center justify-between transition-all ${
                      scope === s.id
                        ? "bg-amber-50 border-amber-600 text-amber-950 font-bold"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{s.label}</span>
                    {s.note && (
                      <span className="text-[10px] font-mono bg-amber-600 text-white px-2 py-0.5">
                        {s.note}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Project Location */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-700 mb-2 uppercase">
                4. موقع المشروع (الجهاز المختص بالتراخيص):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setLocation(loc.id as LocationZone)}
                    className={`p-2.5 text-right text-xs border transition-all ${
                      location === loc.id
                        ? "bg-slate-900 text-white border-slate-900 font-bold"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    ✦ {loc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Finishing Level (if applicable) */}
            {projectType !== "interior" && (
              <div>
                <label className="block text-xs font-bold font-mono text-slate-700 mb-2 uppercase">
                  5. مستوى التشطيب المستهدف:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {finishLevels.map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setFinishLevel(lvl.id as any)}
                      className={`p-2 text-center text-xs border transition-all ${
                        finishLevel === lvl.id
                          ? "bg-amber-600 text-white border-amber-600 font-bold"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 border-2 border-slate-900 shadow-2xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
                {"//"} التقرير التقديري الأولي للمشروع
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                ملخص التكاليف الهندسية والإنشائية
              </h3>
            </div>

            {/* Price rows */}
            <div className="space-y-4">
              {scope !== "supervision_only" && (
                <div className="bg-slate-800/80 p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 font-mono mb-1">
                    أتعاب التصميم والتراخيص ونوتة الحسابات:
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-amber-400">
                    {formatCurrencyEGP(results.estimatedDesignFee)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    تشمل: معماري 1:50 + إنشائي ECP + شبكات MEP + رخصة البناء
                  </div>
                </div>
              )}

              {scope !== "full_design" && (
                <div className="bg-slate-800/80 p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 font-mono mb-1">
                    أتعاب الإشراف الميداني واستلام الصبات:
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-blueprint-400">
                    {formatCurrencyEGP(results.estimatedSupervisionFee)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    تشمل: مهندس مقيم/زيارات + مكعبات الخرسانة + محاضر الاستلام
                  </div>
                </div>
              )}

              <div className="bg-slate-950 p-4 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>ميزانية التشييد التقديرية (بناء وتشطيب):</span>
                </div>
                <div className="text-lg font-bold font-mono text-white">
                  {formatCurrencyEGP(results.estimatedConstructionBudgetMin)} إلى {formatCurrencyEGP(results.estimatedConstructionBudgetMax)}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>المدة الزمنية التقديرية: ~{results.expectedDurationMonths} شهراً</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="space-y-3 pt-2">
              <Button
                variant="amber"
                size="lg"
                href={generateWhatsAppMessage()}
                external
                className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white font-bold"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                <span>إرسال المقايسة لواتساب الاستشاري</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/contact"
                className="w-full justify-center text-slate-900 bg-white hover:bg-slate-100"
              >
                <span>حجز موعد بمقر المكتب بالتجمع الخامس</span>
                <ArrowUpLeft className="w-4 h-4 mr-1.5" />
              </Button>
            </div>

            <p className="text-[11px] text-slate-400 text-center font-mono">
              * الأرقام تقديرية استرشادية طبقاً لأسعار السوق المصري 2025/2026 ويتم اعتمادها النهائي بعد رفع الموقع والمخططات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
