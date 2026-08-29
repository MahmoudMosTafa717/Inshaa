import React from "react";
import { Star, Quote, MapPin } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/motion/FadeInView";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          tag="ثقة العملاء والمطورين"
          title="ماذا يقول عملاؤنا في القاهرة والمدن الجديدة"
          subtitle="شهادات حقيقية من أصحاب الفلل ورجال الأعمال والمطورين العقاريين الذين وثقوا بمكتب إنشاء لتصميم وإدارة مشروعاتهم."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((test, idx) => (
            <FadeInView key={test.id} delay={idx * 0.1}>
              <Card variant="blueprint" className="p-6 h-full flex flex-col justify-between hover:border-slate-900">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-200" />
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-base font-display">
                    {test.name}
                  </h4>
                  <p className="text-xs text-amber-800 font-medium mt-0.5">
                    {test.role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-2">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{test.location} • {test.project}</span>
                  </div>
                </div>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
