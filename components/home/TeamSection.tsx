"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, UserCheck } from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/motion/FadeInView";

export function TeamSection() {
  const { state } = useAdminData();
  const { team, identity } = state;

  return (
    <section className="py-20 bg-paper-50 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          tag="الكادر الهندسي الاستشاري"
          title={`بقيادة ${identity.leadConsultant}`}
          subtitle={`يقود مشروعاتنا نخبة من المهندسين الاستشاريين المقيدين بنقابة المهندسين المصرية (${identity.syndicateNumber}) بخبرات تمتد لأكثر من 20 عاماً في تصميم وتنفيذ المنشآت بمحافظة الفيوم وأكتوبر وزايد.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
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
                    <div className="absolute bottom-2 right-2 bg-slate-950/85 text-desert-400 font-mono text-[10px] px-2 py-0.5 backdrop-blur-sm border border-slate-800">
                      {member.experienceYears}+ عاماً خبرة
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 font-display mb-1 group-hover:text-brick-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-brick-700 leading-snug mb-2 font-mono">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 font-sans">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-paper-100 border-t border-paper-300 text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
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
