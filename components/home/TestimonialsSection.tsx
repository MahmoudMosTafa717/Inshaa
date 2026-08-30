"use client";

import React from "react";
import { Star, Quote, MapPin } from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/motion/FadeInView";

export function TestimonialsSection() {
  const { state } = useAdminData();
  const { testimonials, identity } = state;

  return (
    <section className="py-20 bg-white border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          tag="ثقة العملاء والمطورين"
          title={`آراء عملائنا في ${identity.primaryLocations.slice(0, 3).join("، ")}`}
          subtitle={`شهادات حقيقية من أصحاب الأبراج، الفلل، ورجال الأعمال الذين وثقوا بـ ${identity.name} والمهندس ${identity.leadConsultant.split("/")[1] || identity.leadConsultant} لتصميم وإدارة مشروعاتهم.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <FadeInView key={test.id} delay={idx * 0.1}>
              <Card variant="default" className="p-6 h-full flex flex-col justify-between hover:border-brick-700 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-desert-500">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-paper-300" />
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6 italic font-sans">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-paper-200">
                  <h4 className="font-bold text-slate-900 text-base font-display">
                    {test.name}
                  </h4>
                  <p className="text-xs text-brick-700 font-semibold mt-0.5 font-mono">
                    {test.role}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 mt-2">
                    <MapPin className="w-3 h-3 text-desert-600" />
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
