import React from "react";
import { ShieldCheck, Building, Award, PiggyBank } from "lucide-react";
import { FadeInView } from "@/components/motion/FadeInView";

export function StatsTicker() {
  const stats = [
    {
      icon: Building,
      value: "150+",
      label: "مشروع سكني وتجاري منجز",
      desc: "فيلات وقصور ومبانٍ إدارية في القاهرة والمدن الجديدة",
      color: "text-amber-600",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "اعتماد رسمي للتراخيص",
      desc: "مطابقة لاشتراطات أجهزة التجمع وزايد والمجمعة العشرية",
      color: "text-emerald-600",
    },
    {
      icon: Award,
      value: "24+",
      label: "عاماً خبرة استشارية متراكمة",
      desc: "نخبة من المهندسين الاستشاريين المقيدين بنقابة المهندسين",
      color: "text-blueprint-600",
    },
    {
      icon: PiggyBank,
      value: "18%",
      label: "توفير في تكاليف الخرسانة والحديد",
      desc: "عبر الحسابات الإنشائية المتقدمة وهندسة القيمة (Value Eng)",
      color: "text-amber-700",
    },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInView key={item.label} delay={idx * 0.1}>
                <div className="p-6 bg-paper-50 border border-slate-200 cad-border hover:border-slate-900 transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl sm:text-4xl font-extrabold font-mono ${item.color}`}>
                        {item.value}
                      </span>
                      <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 pt-2 border-t border-slate-200 font-mono">
                    {item.desc}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
