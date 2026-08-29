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
import { projectsData, Project } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/motion/FadeInView";

export function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  const categories = [
    { id: "all", label: "جميع المشروعات (150+)" },
    { id: "residential", label: "فيلات وسكني فاخر" },
    { id: "administrative", label: "أبراج ومبانٍ إدارية" },
    { id: "commercial", label: "مراكز ومولات تجارية" },
    { id: "interior", label: "تصميم داخلي وتشطيبات" },
  ];

  return (
    <section className="py-20 bg-paper-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            number="03"
            tag="سابقة الأعمال والمشروعات"
            title="مشروعات هندسية صممت وشيدت بأعلى معايير الدقة"
            subtitle="استعرض نماذج حية لمشروعاتنا في التجمع الخامس، الشيخ زايد، العاصمة الإدارية، والساحل الشمالي."
            className="mb-0"
          />

          <Button variant="outline" size="md" href="/projects" className="shrink-0 self-start md:self-auto">
            <span>معرض الأعمال الكامل</span>
            <ArrowUpLeft className="w-4 h-4 mr-1.5" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                filter === cat.id
                  ? "bg-slate-900 text-white shadow-architectural"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
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
              <Card variant="default" className="group overflow-hidden flex flex-col justify-between h-full hover:border-slate-900">
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
                      <span className="bg-slate-950/80 text-white text-[11px] font-mono px-2.5 py-1 backdrop-blur-sm">
                        {project.categoryAr}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-amber-600 text-white text-xs font-mono font-bold px-3 py-1">
                      {project.area} م² مسطح
                    </div>
                  </div>

                  {/* Metadata & Title */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-mono mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Technical Specs List */}
                    <div className="bg-paper-100 p-3 text-xs text-slate-700 font-mono space-y-1.5 border border-slate-200">
                      <div className="flex justify-between">
                        <span className="text-slate-500">النظام الإنشائي:</span>
                        <span className="font-semibold text-slate-900 line-clamp-1">{project.structuralSystem.split(" ")[0]} {project.structuralSystem.split(" ")[1]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">سنة التنفيذ:</span>
                        <span className="font-semibold text-slate-900">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="px-6 py-4 border-t border-slate-100 bg-white flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.statusAr}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>دراسة الحالة والمخططات</span>
                    <ArrowUpLeft className="w-4 h-4" />
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
