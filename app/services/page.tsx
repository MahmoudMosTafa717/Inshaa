import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Compass, 
  Boxes, 
  HardHat, 
  Cpu, 
  Palette, 
  FileSpreadsheet, 
  ArrowUpLeft, 
  Check, 
  HelpCircle,
  ShieldCheck
} from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { constructMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeInView } from "@/components/motion/FadeInView";

export const metadata: Metadata = constructMetadata({
  title: "خدمات الاستشارات الهندسية والتصميم المعماري | مكتب إنشاء للهندسة",
  description: "خدمات استشارية معتمدة تشمل التصميم المعماري، التصميم الإنشائي، شبكات MEP، استخراج تراخيص البناء بالفيوم وأكتوبر وزايد، والإشراف الهندسي الميداني.",
  canonicalUrl: "/services",
});

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Boxes,
  HardHat,
  Cpu,
  Palette,
  FileSpreadsheet,
};

export default function ServicesPage() {
  const allFaqs = servicesData.flatMap((s) => s.faqList);

  return (
    <>
      <JsonLd type="Service" data={{ name: "خدمات الاستشارات الهندسية المتكاملة" }} />
      <JsonLd type="FAQPage" data={{ faqs: allFaqs }} />

      <div className="bg-paper-50 min-h-screen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-right max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-3 py-1 border border-brick-300 inline-block mb-3">
              {"//"} دليل الخدمات الهندسية المعتمدة
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display leading-tight">
              خدمات استشارية متكاملة تضمن دقة التصميم وسلامة التنفيذ
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              نقدم في مكتب إنشاء للهندسة باقة متكاملة من الاستشارات الهندسية التخصصية لكافة المنشآت السكنية والتجارية في مصر، مع ضمان المطابقة التامة لاشتراطات كود البناء المصري ونقابة المهندسين المصرية برئاسة <strong>مهندس استشاري / عماد الدين أمين</strong>.
            </p>
          </div>

          {/* Services Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.icon] || Compass;
              return (
                <FadeInView key={service.id} delay={idx * 0.08}>
                  <Card variant="default" className="h-full flex flex-col justify-between hover:border-brick-700 group transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300">
                          {service.number} {"//"} تخصص
                        </span>
                        <div className="w-12 h-12 bg-paper-100 group-hover:bg-brick-700 group-hover:text-white transition-colors border border-paper-300 flex items-center justify-center text-slate-800">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display group-hover:text-brick-700 transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4 font-sans">
                        {service.fullDescription}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <div className="border-t border-paper-200 pt-4 space-y-2">
                        <span className="text-xs font-mono text-slate-500 font-bold block">
                          التسليمات والمخرجات الهندسية:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="bg-paper-100/60 border-t border-paper-200">
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {service.egyptianCodeCompliance.split("،")[0]}
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-brick-700 transition-colors font-display"
                      >
                        <span>تفاصيل ومراحل العمل</span>
                        <ArrowUpLeft className="w-4 h-4 text-brick-600" />
                      </Link>
                    </CardFooter>
                  </Card>
                </FadeInView>
              );
            })}
          </div>

          {/* Unified FAQs Section for GEO / Rich Snippets */}
          <div className="bg-white border-2 border-slate-900 p-8 sm:p-12 cad-border shadow-soft-elevation">
            <div className="flex items-center gap-2 text-xs font-mono text-brick-700 mb-2 font-bold">
              <HelpCircle className="w-4 h-4" />
              <span>{"//"} الأسئلة الشائعة حول الاستشارات الهندسية والتراخيص بمصر</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-8">
              كل ما تحتاج معرفته عن استخراج التراخيص والإشراف الهندسي
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allFaqs.map((faq, i) => (
                <div key={i} className="p-5 bg-paper-50 border border-paper-300">
                  <h3 className="font-bold text-base text-slate-900 mb-2 font-display">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
