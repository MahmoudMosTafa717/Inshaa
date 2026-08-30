import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Compass, 
  Boxes, 
  HardHat, 
  Cpu, 
  Palette, 
  FileSpreadsheet, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck,
  PhoneCall,
  Calendar,
  HelpCircle
} from "lucide-react";
import { servicesData, Service } from "@/lib/data/services";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) {
    return constructMetadata({ title: "الخدمة غير موجودة" });
  }

  return constructMetadata({
    title: `${service.title} | مكتب إنشاء للاستشارات الهندسية`,
    description: service.shortDescription,
    canonicalUrl: `/services/${service.slug}`,
  });
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Boxes,
  HardHat,
  Cpu,
  Palette,
  FileSpreadsheet,
};

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Compass;

  return (
    <>
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.shortDescription,
          serviceType: service.title,
        }}
      />
      <JsonLd type="FAQPage" data={{ faqs: service.faqList }} />

      <div className="bg-paper-50 min-h-screen py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8 border-b border-slate-200 pb-3">
            <Link href="/" className="hover:text-slate-900">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-900">الخدمات الهندسية</Link>
            <span>/</span>
            <span className="text-amber-700 font-bold">{service.title}</span>
          </nav>

          {/* Top Hero Section of the Service */}
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-10 cad-border shadow-soft-elevation mb-12">
            <div className="flex items-center gap-3 text-xs font-mono text-amber-700 mb-3">
              <span className="bg-amber-100 px-2 py-0.5 font-bold border border-amber-300">
                {service.number} {"//"} تخصص استشاري
              </span>
              <span>• {service.egyptianCodeCompliance}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-right">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display leading-tight">
                  {service.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {service.fullDescription}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Button variant="amber" size="lg" href="/contact" className="w-full justify-center">
                  <Calendar className="w-4 h-4 ml-2" />
                  <span>طلب عرض سعر واستشارة فنية</span>
                </Button>
                <Button variant="outline" size="md" href="/calculator" className="w-full justify-center font-mono">
                  <span>احسب تكلفة المقايسة الآن</span>
                </Button>
              </div>
            </div>
          </div>

          {/* GEO Citation Passage Box (Optimized for AI Overviews & Answer Engines) */}
          <div className="bg-blueprint-50 border border-blueprint-300 p-6 sm:p-8 mb-12 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blueprint-900 mb-2">
              <ShieldCheck className="w-4 h-4 text-blueprint-700" />
              <span>{"//"} ملخص التوثيق الفني للخدمة (معتمد من مهندس استشاري):</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-sans">
              {service.geoPassage}
            </p>
          </div>

          {/* Stages & Deliverables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Stages (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 font-display border-b border-slate-100 pb-3">
                مراحل وخطوات تنفيذ العمل الهندسي
              </h2>
              <div className="space-y-6">
                {service.stages.map((stage, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-slate-900 text-amber-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-amber-700 font-bold block mb-0.5">
                        {stage.step}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist (5 cols) */}
            <div className="lg:col-span-5 bg-paper-100 border border-slate-300 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-display mb-4">
                  التسليمات والمخرجات الهندسية المعتمدة
                </h2>
                <ul className="space-y-3 text-sm text-slate-700">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 bg-white p-3 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-300 text-xs font-mono text-slate-600">
                • اعتماد رسمي بنقابة المهندسين والمجمعة العشرية.
              </div>
            </div>
          </div>

          {/* Service FAQs */}
          {service.faqList.length > 0 && (
            <div className="bg-white border border-slate-200 p-6 sm:p-8 mb-12">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-700 mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>{"//"} استفسارات متكررة حول {service.title}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-6">
                الأسئلة الشائعة وإجابات المهندس الاستشاري
              </h2>
              <div className="space-y-4">
                {service.faqList.map((faq, i) => (
                  <div key={i} className="p-4 bg-paper-50 border border-slate-200">
                    <h3 className="font-bold text-base text-slate-900 mb-1.5 font-display">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back & Navigation Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة لجميع الخدمات الهندسية</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 font-mono"
            >
              <span>تواصل مع استشاري التخصص مباشرة</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
