"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Save, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  DollarSign, 
  RotateCcw,
  Sparkles,
  Layers
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { formatCurrencyEGP } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function AdminCalculatorSettingsPage() {
  const { state, updateCalculatorRates } = useAdminData();
  const [rates, setRates] = useState(state.projectTypeRates);
  const [multipliers, setMultipliers] = useState(state.locationMultipliers);
  const [saved, setSaved] = useState(false);

  // Test bench state for live preview
  const [testType, setTestType] = useState<"villa" | "residential_building" | "commercial" | "interior">("villa");
  const [testArea, setTestArea] = useState(650);
  const [testLocation, setTestLocation] = useState<"fayoum" | "october" | "sheikh_zayed" | "new_capital" | "new_cairo">("fayoum");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCalculatorRates(rates, multipliers);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  // Calculate test preview
  const currentTestRate = rates[testType];
  const currentTestMult = multipliers[testLocation]?.multiplier || 1.0;
  const previewDesignFee = Math.round(currentTestRate.baseDesignPerSqm * testArea * currentTestMult);
  const previewSupervisionFee = Math.round(currentTestRate.baseSupervisionPerSqm * testArea * currentTestMult);
  const previewConstructionMin = Math.round(currentTestRate.constructionCostPerSqmMin * testArea);
  const previewConstructionMax = Math.round(currentTestRate.constructionCostPerSqmMax * testArea);

  return (
    <div className="space-y-8 text-right">
      {/* Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} محرك قواعد التسعير والمقايسات
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            إعدادات حاسبة التكاليف والمقايسات التقديرية
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            التحكم في سعر المتر المربع للتصميم والإشراف وتكاليف البناء ومعاملات المحافظات والمدن
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>تم حفظ قواعد التسعير بنجاح!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Base Rates per Project Type */}
        <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
          <h2 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200 pb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-brick-700" />
            <span>1. تسعير المتر المربع الأساسي لأنواع المشروعات (جنيه مصري / م²)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(Object.keys(rates) as Array<keyof typeof rates>).map((typeKey) => {
              const r = rates[typeKey];
              return (
                <div key={typeKey} className="p-5 bg-paper-50 border-2 border-slate-300 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-sm text-slate-900 font-display">{r.label}</span>
                    <span className="text-[11px] font-mono text-slate-500">{typeKey}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-mono text-slate-700 mb-1">أتعاب التصميم (ج/م²):</label>
                      <input
                        type="number"
                        required
                        value={r.baseDesignPerSqm}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRates({
                            ...rates,
                            [typeKey]: { ...r, baseDesignPerSqm: val },
                          });
                        }}
                        className="w-full p-2 bg-white border border-slate-300 font-mono font-bold text-brick-700"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-slate-700 mb-1">أتعاب الإشراف (ج/م²):</label>
                      <input
                        type="number"
                        required
                        value={r.baseSupervisionPerSqm}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRates({
                            ...rates,
                            [typeKey]: { ...r, baseSupervisionPerSqm: val },
                          });
                        }}
                        className="w-full p-2 bg-white border border-slate-300 font-mono font-bold text-petroleum-700"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-slate-700 mb-1">تكلفة التشييد الأدنى (ج/م²):</label>
                      <input
                        type="number"
                        required
                        value={r.constructionCostPerSqmMin}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRates({
                            ...rates,
                            [typeKey]: { ...r, constructionCostPerSqmMin: val },
                          });
                        }}
                        className="w-full p-2 bg-white border border-slate-300 font-mono text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-slate-700 mb-1">تكلفة التشييد الأعلى (ج/م²):</label>
                      <input
                        type="number"
                        required
                        value={r.constructionCostPerSqmMax}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setRates({
                            ...rates,
                            [typeKey]: { ...r, constructionCostPerSqmMax: val },
                          });
                        }}
                        className="w-full p-2 bg-white border border-slate-300 font-mono text-slate-800"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Regional Multipliers */}
        <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
          <h2 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200 pb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brick-700" />
            <span>2. معاملات المحافظات والمدن (Location Multipliers)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(Object.keys(multipliers) as Array<keyof typeof multipliers>).map((locKey) => {
              const m = multipliers[locKey];
              return (
                <div key={locKey} className="p-4 bg-paper-50 border border-slate-300 space-y-3">
                  <div className="font-bold text-xs text-slate-900 font-display line-clamp-1">{m.label}</div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 mb-1">المعامل الرقمي (Multiplier):</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={m.multiplier}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setMultipliers({
                          ...multipliers,
                          [locKey]: { ...m, multiplier: val },
                        });
                      }}
                      className="w-full p-2 bg-white border border-slate-300 font-mono font-bold text-desert-700 text-sm"
                    />
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    {m.areaTier}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Simulator Test Bench */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 border-2 border-slate-900 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono text-desert-400 font-bold">
              {"//"} منصة الاختبار المباشر للحاسبة (Live Simulation Test Bench)
            </span>
            <span className="text-xs font-mono text-emerald-400">تحديث فوري</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">نوع المنشأة:</label>
              <select
                value={testType}
                onChange={(e) => setTestType(e.target.value as any)}
                className="w-full p-2 bg-slate-800 border border-slate-700 text-white text-xs font-sans"
              >
                <option value="villa">فيلا سكنية فاخرة</option>
                <option value="residential_building">عمارة / برج سكني</option>
                <option value="commercial">مبنى تجاري / إداري</option>
                <option value="interior">تشطيب وديكور داخلي</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">المساحة (م²):</label>
              <input
                type="number"
                value={testArea}
                onChange={(e) => setTestArea(Number(e.target.value))}
                className="w-full p-2 bg-slate-800 border border-slate-700 text-white text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">الموقع:</label>
              <select
                value={testLocation}
                onChange={(e) => setTestLocation(e.target.value as any)}
                className="w-full p-2 bg-slate-800 border border-slate-700 text-white text-xs font-sans"
              >
                <option value="fayoum">محافظة الفيوم</option>
                <option value="october">مدينة 6 أكتوبر</option>
                <option value="sheikh_zayed">مدينة الشيخ زايد</option>
                <option value="new_capital">العاصمة الإدارية</option>
                <option value="new_cairo">القاهرة الجديدة</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800 text-center font-mono">
            <div className="p-3 bg-slate-950 border border-slate-800">
              <div className="text-[11px] text-slate-400">أتعاب التصميم:</div>
              <div className="text-base font-bold text-desert-400 mt-1">{formatCurrencyEGP(previewDesignFee)}</div>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800">
              <div className="text-[11px] text-slate-400">أتعاب الإشراف:</div>
              <div className="text-base font-bold text-petroleum-400 mt-1">{formatCurrencyEGP(previewSupervisionFee)}</div>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 sm:col-span-2">
              <div className="text-[11px] text-slate-400">ميزانية التشييد التقديرية:</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">
                {formatCurrencyEGP(previewConstructionMin)} - {formatCurrencyEGP(previewConstructionMax)}
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold font-display"
          >
            <Save className="w-4 h-4 ml-2" />
            <span>حفظ قواعد التسعير وتحديث الحاسبة بالموقع</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
