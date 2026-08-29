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
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = constructMetadata({
  title: "معرض المشروعات وسابقة الأعمال | مكتب إنشاء",
  description: "استعرض سابقة أعمال مكتب إنشاء من الفيلات الفاخرة بالتجمع الخامس، والأبراج الإدارية بالعاصمة الإدارية، والمجمعات التجارية بالشيخ زايد.",
  canonicalUrl: "/projects",
});

export default function ProjectsDirectoryPage() {
  return (
    <>
      <JsonLd
        type="Project"
        data={{
          name: "معرض مشروعات مكتب إنشاء للاستشارات الهندسية",
          description: "سابقة أعمال هندسية متكاملة تتضمن 150+ مشروع سكني وتجاري وإداري في مصر.",
        }}
      />

      <div className="bg-paper-50 min-h-screen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <div className="text-right max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-3 py-1 border border-amber-300 inline-block mb-3">
              // سجل الإنجازات وسابقة الأعمال
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              مشروعات هندسية تعكس دقة المخطط وهيبة الواقع
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              تصفح مجموعة مختارة من مشروعاتنا المنفذة والمشرف عليها في التجمع الخامس، الشيخ زايد، العاصمة الإدارية الجديدة، والساحل الشمالي.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projectsData.map((project) => (
              <Card key={project.id} variant="default" className="group overflow-hidden flex flex-col justify-between h-full hover:border-slate-900">
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
                      <span className="bg-slate-950/80 text-white text-xs font-mono px-2.5 py-1 backdrop-blur-sm">
                        {project.categoryAr}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-amber-600 text-white text-xs font-mono font-bold px-3 py-1">
                      {project.area} م² مسطح
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-mono mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display mb-3">
                      {project.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="bg-paper-100 p-3 text-xs text-slate-700 font-mono space-y-1.5 border border-slate-200">
                      <div className="flex justify-between">
                        <span className="text-slate-500">النظام الإنشائي:</span>
                        <span className="font-semibold text-slate-900 line-clamp-1">{project.structuralSystem}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">سنة التنفيذ:</span>
                        <span className="font-semibold text-slate-900">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-white flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.statusAr}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>تفاصيل دراسة الحالة والمخططات</span>
                    <ArrowUpLeft className="w-4 h-4" />
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
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              تفضل بزيارة مقر مكتبنا بالتجمع الخامس للاطلاع على نماذج المخططات المعمارية والإنشائية المعتمدة ونماذج كراسات حصر الكميات.
            </p>
            <div className="pt-2">
              <Button variant="amber" size="lg" href="/contact">
                <span>تنسيق موعد مع مهندس استشاري</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
