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
  Users,
  MapPin
} from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { teamData } from "@/lib/data/team";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "عن مكتب إنشاء للهندسة | التاريخ والاعتماد النقابي وم. عماد الدين أمين",
  description: "تعرف على تاريخ مكتب إنشاء للهندسة بقيادة مهندس استشاري / عماد الدين أمين، وسجل اعتماده بنقابة المهندسين المصرية بمحافظة الفيوم، 6 أكتوبر، والشيخ زايد.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="Organization"
        data={{
          name: "مكتب إنشاء للهندسة",
          founder: {
            "@type": "Person",
            name: "م. عماد الدين أمين",
            jobTitle: "مؤسس المكتب واستشاري منشآت خرسانية معتمد",
          },
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
            <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-3 py-1 border border-brick-300 inline-block mb-3">
              {"//"} الهوية والتاريخ الاستشاري
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display leading-tight">
              أكثر من 20 عاماً من الريادة في الاستشارات والتصميم الهندسي
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              تأسس <strong>مكتب إنشاء للهندسة (Engineering Establishment Office - IE)</strong> بقيادة <strong>مهندس استشاري / عماد الدين أمين</strong> ليكون صرحاً هندسياً رائداً يجمع بين دقة الكود الهندسي المصري والفخامة المعمارية، مع التركيز التاريخي والميداني على محافظة الفيوم ومدن غرب القاهرة (6 أكتوبر والشيخ زايد) والمشروعات الكبرى بالعاصمة الإدارية.
            </p>
          </div>

          {/* Firm Mission & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-slate-900 p-8 cad-border shadow-soft-elevation space-y-4">
              <div className="w-12 h-12 bg-brick-50 border border-brick-300 text-brick-700 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                رؤيتنا المعمارية
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                ابتكار تصميمات معمارية متناسقة تلائم البيئة المصرية وتستغل مسطح الأرض بأعلى كفاءة وظيفية دون أي مساحات مهدرة، مع دمج التقنيات الذكية والجماليات البصرية المعاصرة.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-900 p-8 cad-border shadow-soft-elevation space-y-4">
              <div className="w-12 h-12 bg-petroleum-50 border border-petroleum-300 text-petroleum-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                الأمان والمسؤولية الإنشائية
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                الالتزام الحرفي بالكود المصري لتصميم المنشآت الخرسانية ECP 203 ودراسة استجابة المبنى للأحمال الزلزالية والرياح، لتحقيق أعلى درجات الأمان الإنشائي مع توفير حقيقي في كميات الخرسانة وحديد التسليح.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-900 p-8 cad-border shadow-soft-elevation space-y-4">
              <div className="w-12 h-12 bg-desert-50 border border-desert-300 text-desert-800 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                النزاهة والرقابة الميدانية
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                الإشراف الموقعي الصارم لحماية ميزانية العميل من أخطاء ومبالغات المقاولين، واستلام كل مرحلة صب خرسانات وحدادة بموجب محاضر فنية واختبارات معملية موثقة.
              </p>
            </div>
          </div>

          {/* Accreditations Sheet */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 border-2 border-slate-900 shadow-xl mb-16 space-y-6">
            <div>
              <span className="text-xs font-mono text-desert-400 font-bold block mb-1">
                {"//"} الاعتمادات والتراخيص الرسمية بمصر
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
                    سجل استشاري معتمد رقم 1248/خ - مهندس استشاري / عماد الدين أمين.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">الإدارة الهندسية بمحافظة الفيوم</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    اعتماد ومراجعة تراخيص البناء بمدينة الفيوم، الفيوم الجديدة، والمسلة وقارون.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">جهازا 6 أكتوبر والشيخ زايد</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    سجل قيد استشاري معتمد لاستخراج التراخيص ومطابقة الاشتراطات البنائية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">المجمعة العشرية المصرية</h3>
                  <p className="text-xs text-slate-300 font-sans">
                    مكتب معتمد لمراجعة واعتماد اللوحات الإنشائية ووثائق التأمين على المنشآت.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Leadership Profiles */}
          <div className="mb-16">
            <div className="text-right max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-3 py-1 border border-brick-300 inline-block mb-2">
                {"//"} القيادات والمهندسون الاستشاريون
              </span>
              <h2 className="text-3xl font-bold text-slate-900 font-display">
                فريق يقود مشروعاتك بأعلى درجات الكفاءة
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.map((member) => (
                <Card key={member.id} variant="default" className="h-full flex flex-col justify-between hover:border-brick-700 group transition-colors">
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
                      <h3 className="text-lg font-bold text-slate-900 font-display mb-1 group-hover:text-brick-700 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-brick-700 leading-snug mb-2 font-mono">
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3 font-sans">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-paper-100 border-t border-paper-300 text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
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
              يسعدنا استقبالك بمقرنا الرئيسي بمحافظة الفيوم أو فرع أكتوبر
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-sans">
              تواصل معنا لتنسيق جلسة عمل هندسية مع الاستشاري لمناقشة أفكار مشروعك والاطلاع على المخططات والتراخيص.
            </p>
            <div className="pt-2">
              <Button variant="primary" size="lg" href="/contact" className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold">
                <span>تواصل معنا وحجز موعد</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
