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
  CostEstimatorParams,
  calculateProjectEstimates 
} from "@/lib/data/costEstimator";
import { formatCurrencyEGP, formatArea } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Slider } from "@/components/ui/Slider";
import { Button } from "@/components/ui/Button";

export function CostEstimatorWidget() {
  const [projectType, setProjectType] = useState<CostEstimatorParams["projectType"]>("villa");
  const [builtUpArea, setBuiltUpArea] = useState<number>(650);
  const [scope, setScope] = useState<CostEstimatorParams["scope"]>("design_and_supervision");
  const [location, setLocation] = useState<CostEstimatorParams["location"]>("fayoum");
  const [finishLevel, setFinishLevel] = useState<"standard" | "luxury" | "ultra_luxury">("luxury");

  const results = calculateProjectEstimates({
    projectType,
    builtUpArea,
    scope,
    location,
    finishLevel,
  });

  const projectTypes = [
    { id: "villa", label: "فيلا سكنية فاخرة", icon: "🏡" },
    { id: "residential_building", label: "عمارة / برج سكني", icon: "🏢" },
    { id: "commercial", label: "مبنى تجاري / إداري", icon: "🏬" },
    { id: "interior", label: "تشطيب وديكور داخلي", icon: "🛋️" },
  ];

  const scopes = [
    { id: "design_and_supervision", label: "تصميم كامل + إشراف هندسي موقعي", note: "الخيار الموصى به" },
    { id: "full_design", label: "تصميم معماري وإنشائي واستخراج رخصة البناء" },
    { id: "supervision_only", label: "إشراف هندسي ميداني واستلام صب الخرسانات" },
  ];

  const locations = [
    { id: "fayoum", label: "محافظة الفيوم (الفيوم الجديدة / المسلة / قارون)" },
    { id: "october", label: "مدينة 6 أكتوبر والتوسعات" },
    { id: "sheikh_zayed", label: "مدينة الشيخ زايد ومحور البستان" },
    { id: "new_capital", label: "العاصمة الإدارية الجديدة" },
    { id: "new_cairo", label: "القاهرة الجديدة والتجمع الخامس" },
  ];

  const finishLevels = [
    { id: "standard", label: "نصف تشطيب (محارة وحلوق)" },
    { id: "luxury", label: "تشطيب فاخر (Super Lux)" },
    { id: "ultra_luxury", label: "ألترا لوكس ومواد مستوردة" },
  ];

  const generateWhatsAppMessage = () => {
    const text = `مرحباً مكتب إنشاء للهندسة (م. عماد الدين أمين)،
قمت بحساب تقديري لمشروعي عبر حاسبة الموقع الإلكتروني:
- نوع المشروع: ${projectTypes.find(p => p.id === projectType)?.label}
- المساحة الإجمالية: ${builtUpArea} م²
- الموقع: ${locations.find(l => l.id === location)?.label}
- نطاق العمل: ${scopes.find(s => s.id === scope)?.label}
- أتعاب التصميم التقديرية: ${formatCurrencyEGP(results.estimatedDesignFee)}
أرغب في حجز جلسة استشارية هندسية لمراجعة كروكي الأرض ومناقشة تفاصيل المشروع.`;
    return `https://wa.me/201001234567?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-20 bg-paper-50 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          tag="حاسبة المشروعات الهندسية"
          title="احسب تكلفة تصميم ومقايسة مشروعك بدقة"
          subtitle="أداة هندسية تفاعلية تمنحك تقديراً دقيقاً لأتعاب التصميم، الإشراف الهندسي، وميزانية التشييد المتوقعة بالسوق المصري بمحافظة الفيوم وأكتوبر وزايد."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Input Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-2 uppercase">
                1. اختر نوع المشروع:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as CostEstimatorParams["projectType"])}
                    className={`p-3 text-center transition-all flex flex-col items-center justify-center gap-1.5 border font-display ${
                      projectType === type.id
                        ? "bg-brick-700 text-white border-brick-700 shadow-architectural font-bold"
                        : "bg-paper-50 text-slate-700 border-paper-300 hover:border-slate-400"
                    }`}
                  >
                    <span className="text-xl">{type.icon}</span>
                    <span className="text-xs font-semibold">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Built Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold font-mono text-slate-800 uppercase">
                  2. مسطح المباني الإجمالي (م²):
                </label>
                <span className="text-lg font-extrabold font-mono text-brick-700 bg-brick-50 px-3 py-0.5 border border-brick-300">
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
              <label className="block text-xs font-bold font-mono text-slate-800 mb-2 uppercase">
                3. نطاق الخدمات الاستشارية المطلوبة:
              </label>
              <div className="space-y-2">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id as CostEstimatorParams["scope"])}
                    className={`w-full p-3 text-right text-xs sm:text-sm font-medium border flex items-center justify-between transition-all font-display ${
                      scope === s.id
                        ? "bg-brick-50 border-brick-700 text-brick-950 font-bold"
                        : "bg-paper-50 border-paper-300 text-slate-700 hover:bg-paper-100"
                    }`}
                  >
                    <span>{s.label}</span>
                    {s.note && (
                      <span className="text-[10px] font-mono bg-desert-600 text-white px-2 py-0.5 font-bold">
                        {s.note}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Project Location */}
            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-2 uppercase">
                4. موقع المشروع (المحافظة / المدينة):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setLocation(loc.id as CostEstimatorParams["location"])}
                    className={`p-2.5 text-right text-xs border transition-all font-display ${
                      location === loc.id
                        ? "bg-slate-900 text-white border-slate-900 font-bold shadow-sm"
                        : "bg-paper-50 text-slate-700 border-paper-300 hover:bg-paper-100"
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
                <label className="block text-xs font-bold font-mono text-slate-800 mb-2 uppercase">
                  5. مستوى التشطيب المستهدف:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {finishLevels.map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setFinishLevel(lvl.id as any)}
                      className={`p-2 text-center text-xs border transition-all font-display ${
                        finishLevel === lvl.id
                          ? "bg-desert-600 text-white border-desert-600 font-bold"
                          : "bg-paper-50 text-slate-700 border-paper-300 hover:bg-paper-100"
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
              <span className="text-xs font-mono text-desert-400 font-bold block mb-1">
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
                  <div className="text-2xl font-black font-mono text-desert-400">
                    {formatCurrencyEGP(results.estimatedDesignFee)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-sans">
                    تشمل: معماري 1:50 + إنشائي ECP + شبكات MEP + رخصة البناء
                  </div>
                </div>
              )}

              {scope !== "full_design" && (
                <div className="bg-slate-800/80 p-4 border border-slate-700">
                  <div className="text-xs text-slate-400 font-mono mb-1">
                    أتعاب الإشراف الميداني واستلام الصبات:
                  </div>
                  <div className="text-2xl font-black font-mono text-petroleum-400">
                    {formatCurrencyEGP(results.estimatedSupervisionFee)}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-sans">
                    تشمل: مهندس مقيم/زيارات + مكعبات الخرسانة + محاضر الاستلام
                  </div>
                </div>
              )}

              <div className="bg-slate-950 p-4 border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>ميزانية التشييد التقديرية (بناء وتشطيب):</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-white">
                  {formatCurrencyEGP(results.estimatedConstructionBudgetMin)} إلى {formatCurrencyEGP(results.estimatedConstructionBudgetMax)}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-desert-400 shrink-0" />
                  <span>المدة الزمنية التقديرية: ~{results.expectedDurationMonths} شهراً</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="space-y-3 pt-2">
              <Button
                variant="primary"
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
                className="w-full justify-center text-slate-900 bg-white hover:bg-paper-100 font-bold"
              >
                <span>حجز موعد بمقر المكتب بالفيوم أو أكتوبر</span>
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
