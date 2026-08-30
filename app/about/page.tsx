import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Compass, 
  FileCheck,
  Scale,
  Users
} from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { teamData } from "@/lib/data/team";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "عن مكتب إنشاء للاستشارات الهندسية | التاريخ والاعتماد النقابي",
  description: "تعرف على تاريخ مكتب إنشاء للاستشارات الهندسية في مصر، كوادره الاستشارية المعتمدة، وسجل اعتماده بنقابة المهندسين المصرية وأجهزة المدن الجديدة.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="Organization"
        data={{
          founders: teamData.map((t) => ({
            "@type": "Person",
            name: t.name,
            jobTitle: t.role,
          })),
        }}
      />

      <div className="bg-paper-50 min-h-screen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="text-right max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-3 py-1 border border-amber-300 inline-block mb-3">
              // الهوية والتاريخ الاستشاري
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              أكثر من 15 عاماً من الريادة في التصميم الهندسي والإشراف بمصر
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              تأسس مكتب إنشاء ليكون بيت خبرة هندسي يقدم حلولاً معمارية وإنشائية مبتكرة تجمع بين دقة الكود الهندسي المصري والفخامة العصرية، مع التزام صارم بسلامة الأرواح وحماية استثمارات العملاء.
            </p>
          </div>

          {/* Firm Mission & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-slate-900 p-8 cad-border shadow-soft-elevation space-y-4">
              <div className="w-12 h-12 bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                رؤيتنا المعمارية
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                ابتكار تصميمات معمارية تلائم البيئة المصرية وتستغل مسطح الأرض بأعلى كفاءة وظيفية دون أي مساحات مهدرة، مع دمج التقنيات الذكية ومبادئ الاستدامة البيئية.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-900 p-8 cad-border shadow-soft-elevation space-y-4">
              <div className="w-12 h-12 bg-blueprint-100 border border-blueprint-300 text-blueprint-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                الأمان والمسؤولية الإنشائية
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                الالتزام الحرفي بالكود المصري للمنشآت الخرسانية ECP 203 ودراسة استجابة المبنى للأحمال الديناميكية والزلازل، لتحقيق أعلى درجات الأمان مع هندسة القيمة لخفض الهدر.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-900 p-8 cad-border shadow-soft-elevation space-y-4">
              <div className="w-12 h-12 bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                النزاهة والرقابة الميدانية
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                الإشراف الموقعي الصارم لحماية ميزانية العميل من تلاعب ومبالغات المقاولين، واستلام كل مرحلة خرسانية بموجب محاضر فنية واختبارات معملية موثقة.
              </p>
            </div>
          </div>

          {/* Accreditations Sheet */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 border-2 border-slate-900 shadow-xl mb-16 space-y-6">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">
                // الاعتمادات والتراخيص الرسمية بمصر
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">
                السجلات والشهادات النقابية المعتمدة
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800 text-sm font-mono">
              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">نقابة المهندسين المصرية</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    سجل استشاري معتمد رقم 1248/خ لشعبة الهندسة المدنية والمعمارية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">المجمعة العشرية المصرية</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    مكتب معتمد لمراجعة واعتماد اللوحات الإنشائية ووثائق التأمين على المباني.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">هيئة المجتمعات العمرانية الجديدة</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    سجل قيد استشاري لدى أجهزة القاهرة الجديدة، زايد، أكتوبر، والشروق.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">الإدارة العامة للحماية المدنية</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    اعتماد تصميم ومراجعة شبكات الإنذار ومكافحة الحريق للمباني التجارية.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Leadership Profiles */}
          <div className="mb-16">
            <div className="text-right max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-3 py-1 border border-amber-300 inline-block mb-2">
                // القيادات والمهندسون الاستشاريون
              </span>
              <h2 className="text-3xl font-bold text-slate-900 font-display">
                فريق يقود مشروعاتك بأعلى درجات الكفاءة
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.map((member) => (
                <Card key={member.id} variant="default" className="h-full flex flex-col justify-between hover:border-slate-900 group">
                  <div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 font-display mb-1 group-hover:text-amber-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-amber-800 leading-snug mb-2 font-mono">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-paper-100 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{member.syndicateNumber}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="bg-white border-2 border-slate-900 p-8 sm:p-12 cad-border text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              يسعدنا استقبالك بمقرنا الرئيسي في التجمع الخامس
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              تواصل معنا لتنسيق جلسة عمل مع المهندس الاستشاري لمناقشة أفكار مشروعك والاطلاع على النماذج المعمارية والإنشائية.
            </p>
            <div className="pt-2">
              <Button variant="amber" size="lg" href="/contact">
                <span>تواصل معنا الآن</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
