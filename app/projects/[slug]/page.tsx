import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  User, 
  Boxes, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  FileCheck
} from "lucide-react";
import { projectsData, Project } from "@/lib/data/projects";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return constructMetadata({ title: "المشروع غير موجود" });
  }

  return constructMetadata({
    title: `${project.title} | دراسة حالة معمارية وإنشائية - مكتب إنشاء للهندسة`,
    description: `${project.description} - ${project.location}. مسطح مباني ${project.area} م².`,
    image: project.heroImage,
    canonicalUrl: `/projects/${project.slug}`,
  });
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        type="Project"
        data={{
          name: project.title,
          description: project.description,
          locationCreated: {
            "@type": "Place",
            name: project.location,
          },
          image: project.heroImage,
        }}
      />

      <div className="bg-paper-50 min-h-screen py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-8 border-b border-paper-300 pb-3">
            <Link href="/" className="hover:text-slate-900">الرئيسية</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-slate-900">سابقة الأعمال</Link>
            <span>/</span>
            <span className="text-brick-700 font-bold">{project.title}</span>
          </nav>

          {/* Project Header */}
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-10 cad-border shadow-soft-elevation mb-10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-200 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="bg-brick-50 text-brick-900 font-bold px-2.5 py-1 border border-brick-300">
                  {project.categoryAr}
                </span>
                <span className="text-slate-500">• {project.year}</span>
              </div>

              <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {project.statusAr}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display leading-tight mb-4">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-slate-600 font-mono mb-6">
              <MapPin className="w-4 h-4 text-brick-600" />
              <span>{project.location}</span>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl font-normal font-sans">
              {project.description}
            </p>
          </div>

          {/* Main Hero Image with Scale Watermark */}
          <div className="relative aspect-[16/9] w-full overflow-hidden border-2 border-slate-900 bg-slate-950 mb-12 shadow-2xl cad-border">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-slate-950/90 text-desert-400 font-mono text-xs px-3 py-1.5 backdrop-blur-sm border border-slate-700">
              INSHAA ENGINEERING CONSULTANCY // ENG. EMAD EL-DIN AMIN
            </div>
          </div>

          {/* Technical Specs & Engineering Analysis (2 columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Left Col: Engineering Challenge & Solution (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white border border-paper-300 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2 border-b border-paper-200 pb-3">
                  <ShieldCheck className="w-5 h-5 text-brick-700" />
                  <span>التحدي الهندسي بالموقع:</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-white border border-paper-300 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2 border-b border-paper-200 pb-3">
                  <Boxes className="w-5 h-5 text-emerald-600" />
                  <span>الحل الإنشائي والمعماري المعتمد:</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="bg-paper-100 border border-paper-300 p-6 space-y-3">
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  أبرز المواصفات والتجهيزات المنفذة:
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 font-sans">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: CAD Specs Sheet (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 border-2 border-slate-900 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-desert-400 font-bold block mb-1">
                  {"//"} بطاقة الحصر الهندسي والمواصفات
                </span>
                <h3 className="text-xl font-bold font-display">
                  البيانات الإنشائية والمعمارية
                </h3>
              </div>

              <div className="space-y-3 text-xs font-mono border-t border-slate-800 pt-4">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">المساحة الإجمالية:</span>
                  <span className="font-bold text-desert-400">{project.area} م²</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">مسطح الدور والارتفاع:</span>
                  <span className="font-bold text-white">{project.cadSpecs.footprintArea}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">عدد الطوابق:</span>
                  <span className="font-bold text-white">{project.cadSpecs.totalFloors}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">حجم الخرسانات:</span>
                  <span className="font-bold text-white">{project.cadSpecs.concreteVolume}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">أطنان حديد التسليح:</span>
                  <span className="font-bold text-white">{project.cadSpecs.steelTonnage}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">مواقف السيارات:</span>
                  <span className="font-bold text-white">{project.cadSpecs.parkingCapacity}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <Button variant="primary" size="md" href="/contact" className="w-full justify-center bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold">
                  <span>طلب استشارة لتنفيذ مشروع مماثل</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          {project.gallery.length > 0 && (
            <div className="bg-white border border-paper-300 p-6 sm:p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-6">
                معرض صور المشروع والتشطيبات
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden border border-paper-300 group">
                    <Image
                      src={img}
                      alt={`${project.title} - صورة ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-paper-300">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-brick-700 font-display"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة لسابقة الأعمال</span>
            </Link>

            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brick-700 hover:text-brick-800 font-mono"
            >
              <span>احسب تكلفة مشروعك المشابه الآن</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
