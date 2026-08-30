import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  ArrowUpLeft, 
  Layers, 
  Filter
} from "lucide-react";
import { projectsData } from "@/lib/data/projects";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "معرض المشروعات وسابقة الأعمال | مكتب إنشاء للهندسة",
  description: "استعرض سابقة أعمال مكتب إنشاء للهندسة من الأبراج والمولات بالفيوم، الفيلات بالشيخ زايد وأكتوبر، والمباني الإدارية بالعاصمة الإدارية.",
  canonicalUrl: "/projects",
});

export default function ProjectsDirectoryPage() {
  return (
    <>
      <JsonLd
        type="Project"
        data={{
          name: "معرض مشروعات مكتب إنشاء للهندسة",
          description: "سابقة أعمال هندسية متكاملة تتضمن 200+ مشروع سكني وتجاري وإداري في مصر.",
        }}
      />

      <div className="bg-paper-50 min-h-screen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="text-right max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-3 py-1 border border-brick-300 inline-block mb-3">
              {"//"} سجل الإنجازات وسابقة الأعمال
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display leading-tight">
              مشروعات هندسية تعكس دقة المخطط وهيبة الواقع
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              تصفح مجموعة مختارة من مشروعاتنا المنفذة والمشرف عليها في محافظة الفيوم، مدينة 6 أكتوبر، الشيخ زايد، والعاصمة الإدارية الجديدة.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projectsData.map((project) => (
              <Card key={project.id} variant="default" className="group overflow-hidden flex flex-col justify-between h-full hover:border-brick-700 transition-colors">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-3 right-3">
                      <span className="bg-slate-950/85 text-white text-xs font-mono px-2.5 py-1 backdrop-blur-sm border border-slate-800">
                        {project.categoryAr}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-brick-700 text-white text-xs font-mono font-bold px-3 py-1">
                      {project.area} م² مسطح
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-brick-700 font-mono mb-2 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-brick-600" />
                      <span>{project.location}</span>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 group-hover:text-brick-700 transition-colors font-display mb-3">
                      {project.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-sans">
                      {project.description}
                    </p>

                    <div className="bg-paper-100 p-3 text-xs text-slate-700 font-mono space-y-1.5 border border-paper-300">
                      <div className="flex justify-between">
                        <span className="text-slate-500">النظام الإنشائي:</span>
                        <span className="font-bold text-slate-900 line-clamp-1">{project.structuralSystem}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">سنة التنفيذ:</span>
                        <span className="font-bold text-slate-900">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-paper-200 bg-white flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-mono flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.statusAr}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-brick-700 transition-colors font-display"
                  >
                    <span>تفاصيل دراسة الحالة والمخططات</span>
                    <ArrowUpLeft className="w-4 h-4 text-brick-600" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 border-2 border-slate-900 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              هل تود استعراض مخططات ورسومات تنفيذية تفصيلية لمشروعات مشابهة؟
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-sans">
              تفضل بزيارة مقر مكتبنا بالفيوم أو فرع أكتوبر للاطلاع على نماذج المخططات المعمارية والإنشائية المعتمدة ونماذج كراسات حصر الكميات.
            </p>
            <div className="pt-2">
              <Button variant="primary" size="lg" href="/contact" className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold">
                <span>تنسيق موعد مع مهندس استشاري</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
