"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Layers, 
  Eye, 
  Cpu, 
  Boxes, 
  Compass, 
  Sparkles,
  Info,
  CheckCircle2
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeInView } from "@/components/motion/FadeInView";

export function InteractiveBimViewer() {
  const [activeLayer, setActiveLayer] = useState<"render" | "structural" | "architectural" | "mep">("render");

  const layersConfig = {
    render: {
      title: "الريندر المعماري النهائي",
      tag: "LAYER 04 // 3D PHOTOREALISTIC",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description: "المظهر النهائي للفيلا بعد اختيار الخامات، الإضاءات المعمارية، وتنسيق اللاندسكيب وفقاً للريندر الواقعي بدقة 4K.",
      specs: [
        { label: "نوع الواجهة", val: "حجر هاشمي فاخر + زجاج دبل عازل" },
        { label: "الارتفاع الإجمالي", val: "13.50 متر (بدروم + أرضي + أول + روف)" },
        { label: "كفاءة العزل", val: "بولي يوريثان 5 سم معتمد" },
        { label: "المساحة الإجمالية", val: "920 م² مسطح مباني" },
      ]
    },
    structural: {
      title: "المخطط والنموذج الإنشائي (ETABS / SAFE)",
      tag: "LAYER 02 // STRUCTURAL FINITE ELEMENT",
      icon: Boxes,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      description: "تحليل وتصميم الهيكل الإنشائي لمقاومة الزلازل والرياح بنظام البلاطات المسطحة Flat Slab وتوفير 15% من كميات الحديد.",
      specs: [
        { label: "النظام الإنشائي", val: "Flat Slab مع كمرات طرفية مقلوبة" },
        { label: "إجهاد الخرسانة", val: "350 كجم/سم² خرسانة جاهزة" },
        { label: "كود التصميم", val: "الكود المصري ECP 203 للمنشآت الخرسانية" },
        { label: "نوع الأساسات", val: "لبشة مسلحة Raft بسمك 80 سم" },
      ]
    },
    architectural: {
      title: "المخططات التنفيذية وتوزيع الفراغات",
      tag: "LAYER 01 // ARCHITECTURAL WORKING DRAWINGS",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      description: "المساقط الأفقية التنفيذية مقياس 1:50 مع استغلال أمثل لنسبة البناء 40% والارتدادات القانونية بجهاز التجمع الخامس.",
      specs: [
        { label: "نسبة البناء", val: "40% للأرضي و 45% للأول (مطابق تماماً)" },
        { label: "الارتدادات", val: "4م أمامي، 3م جانبي، 4م خلفي" },
        { label: "توجيه الرياح", val: "غرف النوم والريسبشن بالواجهة البحرية" },
        { label: "رخصة البناء", val: "معتمدة من جهاز القاهرة الجديدة" },
      ]
    },
    mep: {
      title: "الشبكات الكهروميكانيكية (MEP & BMS)",
      tag: "LAYER 03 // ELECTROMECHANICAL COORDINATION",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      description: "مسارات التكييف المركزي VRF وشبكات التغذية والصرف والتيار الخفيف مع فحص التعارضات BIM Clash Detection.",
      specs: [
        { label: "نظام التكييف", val: "VRF موفر للطاقة بنسبة 35%" },
        { label: "مكافحة الحريق", val: "مطابق لاشتراطات الدفاع المدني المصري" },
        { label: "السمارت هوم", val: "بنية تحتية KNX للتحكم الذكي" },
        { label: "تغذية المياه", val: "طلمبات رفع إيطالية وخزان سفلي 12 م³" },
      ]
    },
  };

  const current = layersConfig[activeLayer];

  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          tag="تقنيات النمذجة الهندسية BIM"
          title="شاهد كيف نصمم مشروعك طبقة بطبقة"
          subtitle="نستخدم تكنولوجيا BIM Level 2 لمزامنة المخطط المعماري مع الهيكل الإنشائي والشبكات الكهروميكانيكية لمنع أي أخطاء أو تكسير بالموقع."
        />

        {/* Layer Selector Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-paper-100 p-2 border border-slate-300 max-w-2xl mx-auto">
          {(Object.keys(layersConfig) as Array<keyof typeof layersConfig>).map((key) => {
            const config = layersConfig[key];
            const Icon = config.icon;
            const isActive = activeLayer === key;
            return (
              <button
                key={key}
                onClick={() => setActiveLayer(key)}
                className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-3 text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-slate-900 text-white shadow-architectural"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
                <span>{config.title.split(" ")[0]} {config.title.split(" ")[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Viewer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-paper-50 border-2 border-slate-900 p-4 sm:p-8 cad-border shadow-soft-elevation">
          {/* Main Visual Display (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-slate-300 bg-slate-950">
              <Image
                key={activeLayer}
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-opacity duration-300 animate-in fade-in"
              />

              {/* Technical Overlay HUD */}
              <div className="absolute top-3 right-3 bg-slate-950/85 text-white font-mono text-[11px] px-3 py-1.5 backdrop-blur-sm border border-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{current.tag}</span>
              </div>

              <div className="absolute bottom-3 left-3 bg-slate-950/85 text-amber-400 font-mono text-[10px] px-2.5 py-1 border border-slate-800">
                PROJ-2025 // REVIT 3D MODEL
              </div>
            </div>
          </div>

          {/* Layer Technical Metadata (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-right">
            <div>
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 border border-amber-300">
                {current.tag}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-display mt-2">
                {current.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mt-2">
                {current.description}
              </p>
            </div>

            {/* Technical Specs Grid */}
            <div className="bg-white border border-slate-200 p-4 space-y-2.5">
              <span className="text-xs font-mono font-bold text-slate-400 block mb-2">
                // المواصفات الهندسية للطبقة:
              </span>
              {current.specs.map((spec, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-0 font-mono">
                  <span className="text-slate-500">{spec.label}:</span>
                  <span className="font-bold text-slate-900">{spec.val}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button variant="amber" size="md" href="/contact" className="w-full justify-center">
                <span>طلب مراجعة مخططات مشروعك</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
