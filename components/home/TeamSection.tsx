import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, UserCheck } from "lucide-react";
import { teamData } from "@/lib/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/motion/FadeInView";

export function TeamSection() {
  return (
    <section className="py-20 bg-paper-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          tag="الكادر الهندسي الاستشاري"
          title="نخبة من المهندسين الاستشاريين المقيدين بالنقابة"
          subtitle="يقود مشروعاتنا أساتذة ومهندسون استشاريون ذوو خبرة تزيد عن 20 عاماً في تصميم وتنفيذ المنشآت الخرسانية والمعمارية في مصر."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member, idx) => (
            <FadeInView key={member.id} delay={idx * 0.1}>
              <Card variant="default" className="h-full flex flex-col justify-between hover:border-slate-900 group">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-2 right-2 bg-slate-950/80 text-amber-400 font-mono text-[10px] px-2 py-0.5 backdrop-blur-sm">
                      {member.experienceYears}+ عاماً خبرة
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 font-display mb-1 group-hover:text-amber-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 leading-snug mb-2 font-mono">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-paper-100 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="line-clamp-1">{member.syndicateNumber}</span>
                </div>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
