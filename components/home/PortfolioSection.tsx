"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  ArrowUpLeft, 
  Layers, 
  Sparkles 
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/motion/FadeInView";

export function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");
  const { state } = useAdminData();
  const { projects } = state;

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

  const categories = [
    { id: "all", label: `جميع المشروعات (${projects.length})` },
    { id: "residential", label: "فيلات وسكني فاخر" },
    { id: "commercial", label: "أبراج ومراكز تجارية" },
    { id: "administrative", label: "مبانٍ ومقرات إدارية" },
  ];

  return (
    <section className="py-20 bg-paper-50 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            number="03"
            tag="سابقة الأعمال والمشروعات"
            title="مشروعات هندسية صممت وشيدت بأعلى معايير الدقة"
            subtitle="استعرض نماذج حية لمشروعاتنا المنفذة بمحافظة الفيوم، مدينة 6 أكتوبر، الشيخ زايد، والعاصمة الإدارية."
            className="mb-0"
          />

          <Button variant="outline" size="md" href="/projects" className="shrink-0 self-start md:self-auto font-display border-slate-900 text-slate-900">
            <span>معرض المشروعات الكامل</span>
            <ArrowUpLeft className="w-4 h-4 mr-1.5 text-brick-600" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-paper-300 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold font-display transition-all ${
                filter === cat.id
                  ? "bg-brick-700 text-white shadow-architectural-brick"
                  : "bg-white text-slate-700 hover:bg-paper-100 border border-paper-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <FadeInView key={project.id} delay={idx * 0.1}>
              <Card variant="default" className="group overflow-hidden flex flex-col justify-between h-full hover:border-brick-700 transition-colors">
                <div>
                  {/* Hero photo container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Status & Area Badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="bg-slate-950/85 text-white text-[11px] font-mono px-2.5 py-1 backdrop-blur-sm border border-slate-800">
                        {project.categoryAr}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-brick-700 text-white text-xs font-mono font-bold px-3 py-1">
                      {project.area} م² مسطح
                    </div>
                  </div>

                  {/* Metadata & Title */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-brick-700 font-mono mb-2 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-brick-600" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-brick-700 transition-colors font-display mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4 font-sans">
                      {project.description}
                    </p>

                    {/* Technical Specs List */}
                    <div className="bg-paper-100 p-3 text-xs text-slate-700 font-mono space-y-1.5 border border-paper-300">
                      <div className="flex justify-between">
                        <span className="text-slate-500">النظام الإنشائي:</span>
                        <span className="font-bold text-slate-900 line-clamp-1">{project.structuralSystem.split(" ")[0]} {project.structuralSystem.split(" ")[1]} {project.structuralSystem.split(" ")[2]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">سنة التنفيذ:</span>
                        <span className="font-bold text-slate-900">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 py-4 border-t border-paper-200 bg-white flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-mono flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.statusAr}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-brick-700 transition-colors font-display"
                  >
                    <span>دراسة الحالة والمخططات</span>
                    <ArrowUpLeft className="w-4 h-4 text-brick-600" />
                  </Link>
                </div>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
