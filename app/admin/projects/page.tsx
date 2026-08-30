"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Boxes, 
  Plus, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Save, 
  MapPin, 
  Image as ImageIcon,
  Layers
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Project } from "@/lib/data/projects";
import { Button } from "@/components/ui/Button";

const emptyProject: Project = {
  id: "",
  title: "",
  slug: "",
  category: "residential",
  categoryAr: "فيلات سكنية فاخرة",
  location: "محافظة الفيوم",
  area: 600,
  year: "2025",
  status: "completed",
  statusAr: "منفذ ومعتمد بالكامل",
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  description: "",
  challenge: "",
  solution: "",
  structuralSystem: "هيكل خرساني متكامل - كود ECP 203",
  features: ["تصميم معماري وإنشائي متكامل", "مطابقة اشتراطات التراخيص"],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  ],
  client: "عميل خاص / مستثمر",
  cadSpecs: {
    footprintArea: "300 م²",
    totalFloors: "بدروم + أرضي + أول + روف",
    concreteVolume: "450 م³ خرسانة مسلحة",
    steelTonnage: "45 طن حديد تسليح عالي المقاومة",
    parkingCapacity: "2 سيارة بالبدروم",
  },
  bimLayers: {
    architectural: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    structural: "https://images.unsplash.com/photo-1541888946425-d0fbb180ecb5?auto=format&fit=crop&w=1000&q=80",
    mep: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    render: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  }
};

export default function AdminProjectsPage() {
  const { state, addProject, updateProject, deleteProject } = useAdminData();
  const { projects } = state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>(emptyProject);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenAdd = () => {
    setCurrentProject({
      ...emptyProject,
      id: `proj-${Date.now()}`,
      slug: `project-${Date.now()}`,
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project: Project) => {
    setCurrentProject(JSON.parse(JSON.stringify(project)));
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (slug: string, title: string) => {
    if (confirm(`هل أنت متأكد من حذف مشروع "${title}" نهائياً من الموقع؟`)) {
      deleteProject(slug);
      showNotify("تم حذف المشروع بنجاح.");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject.title || !currentProject.slug) {
      alert("يرجى ملء اسم المشروع والاسم الرابط (Slug).");
      return;
    }

    if (isEditing) {
      updateProject(currentProject.slug, currentProject);
      showNotify("تم تحديث بيانات المشروع بنجاح!");
    } else {
      addProject(currentProject);
      showNotify("تمت إضافة المشروع الجديد بنجاح!");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 text-right">
      {/* Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} إدارة سابقة الأعمال والمشروعات
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            معرض المشروعات ({projects.length} مشروع)
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            إضافة وتعديل وحذف الفيلات والأبراج والمجمعات التجارية وبيانات الـ CAD
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={handleOpenAdd}
          className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
        >
          <Plus className="w-4 h-4 ml-1.5" />
          <span>إضافة مشروع جديد</span>
        </Button>
      </div>

      {notification && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{notification}</span>
        </div>
      )}

      {/* Projects Grid / Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white border-2 border-slate-900 cad-border shadow-soft-elevation flex flex-col justify-between overflow-hidden group"
          >
            <div>
              <div className="relative aspect-[16/10] w-full bg-slate-950">
                <Image
                  src={p.heroImage}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-slate-950/80 text-white text-[10px] font-mono px-2 py-0.5">
                  {p.categoryAr}
                </div>
                <div className="absolute bottom-2 left-2 bg-brick-700 text-white text-[10px] font-mono font-bold px-2 py-0.5">
                  {p.area} م²
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1 text-[11px] font-mono text-brick-700">
                  <MapPin className="w-3 h-3" />
                  <span>{p.location}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display line-clamp-1">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 font-sans">
                  {p.description}
                </p>
              </div>
            </div>

            <div className="p-3 bg-paper-50 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenEdit(p)}
                  className="p-1.5 bg-white border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 text-xs font-mono flex items-center gap-1"
                  title="تعديل المشروع"
                >
                  <Edit3 className="w-3.5 h-3.5 text-desert-600" />
                  <span>تعديل</span>
                </button>

                <button
                  onClick={() => handleDelete(p.slug, p.title)}
                  className="p-1.5 bg-white border border-rose-200 hover:border-rose-600 text-rose-700 text-xs font-mono flex items-center gap-1"
                  title="حذف المشروع"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>حذف</span>
                </button>
              </div>

              <Link
                href={`/projects/${p.slug}`}
                target="_blank"
                className="text-[11px] font-mono text-slate-500 hover:text-brick-700 flex items-center gap-1"
              >
                <span>معاينة</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Project Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 text-right">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">
                {isEditing ? `تعديل مشروع: ${currentProject.title}` : "إضافة مشروع هندسي جديد"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              {/* Row 1: Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    اسم المشروع:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: برج الصفوة التجاري بالمسلة"
                    value={currentProject.title}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    الاسم الرابط في المتصفح (Slug بالإنجليزية):
                  </label>
                  <input
                    type="text"
                    required
                    dir="ltr"
                    placeholder="safwa-tower-fayoum"
                    value={currentProject.slug}
                    onChange={(e) => setCurrentProject({ ...currentProject, slug: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-mono text-right"
                  />
                </div>
              </div>

              {/* Row 2: Category, Location, Area, Year */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    التصنيف:
                  </label>
                  <select
                    value={currentProject.category}
                    onChange={(e) => {
                      const cat = e.target.value as any;
                      const catAr = 
                        cat === "residential" ? "فيلات سكنية فاخرة" :
                        cat === "commercial" ? "أبراج ومراكز تجارية" :
                        cat === "administrative" ? "مبانٍ ومقرات إدارية" : "تصميم داخلي وديكور";
                      setCurrentProject({ ...currentProject, category: cat, categoryAr: catAr });
                    }}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  >
                    <option value="residential">فيلات وسكني</option>
                    <option value="commercial">تجاري وأبراج</option>
                    <option value="administrative">إداري ومقرات</option>
                    <option value="interior">ديكور وتشطيب</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    الموقع / المحافظة:
                  </label>
                  <input
                    type="text"
                    required
                    value={currentProject.location}
                    onChange={(e) => setCurrentProject({ ...currentProject, location: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    المساحة (م²):
                  </label>
                  <input
                    type="number"
                    required
                    value={currentProject.area}
                    onChange={(e) => setCurrentProject({ ...currentProject, area: Number(e.target.value) })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    سنة التنفيذ:
                  </label>
                  <input
                    type="text"
                    value={currentProject.year}
                    onChange={(e) => setCurrentProject({ ...currentProject, year: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Row 3: Hero Image URL */}
              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                  رابط صورة الغلاف الرئيسية (Image URL):
                </label>
                <input
                  type="url"
                  dir="ltr"
                  required
                  value={currentProject.heroImage}
                  onChange={(e) => setCurrentProject({ ...currentProject, heroImage: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono text-right"
                />
              </div>

              {/* Row 4: Description */}
              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                  الوصف الهندسي العام للمشروع:
                </label>
                <textarea
                  rows={2}
                  required
                  value={currentProject.description}
                  onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              {/* Row 5: Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    التحدي الهندسي بالموقع:
                  </label>
                  <textarea
                    rows={2}
                    value={currentProject.challenge}
                    onChange={(e) => setCurrentProject({ ...currentProject, challenge: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                    الحل الإنشائي والمعماري المنفذ:
                  </label>
                  <textarea
                    rows={2}
                    value={currentProject.solution}
                    onChange={(e) => setCurrentProject({ ...currentProject, solution: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  />
                </div>
              </div>

              {/* Row 6: CAD Specs */}
              <div className="p-4 bg-slate-900 text-white space-y-3">
                <span className="text-xs font-mono text-desert-400 font-bold block">
                  بطاقة الحصر الهندسي (CAD Specs):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div>
                    <label className="block text-slate-400 mb-1">مسطح الدور والارتفاع:</label>
                    <input
                      type="text"
                      value={currentProject.cadSpecs.footprintArea}
                      onChange={(e) => setCurrentProject({
                        ...currentProject,
                        cadSpecs: { ...currentProject.cadSpecs, footprintArea: e.target.value }
                      })}
                      className="w-full p-2 bg-slate-800 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">عدد الطوابق:</label>
                    <input
                      type="text"
                      value={currentProject.cadSpecs.totalFloors}
                      onChange={(e) => setCurrentProject({
                        ...currentProject,
                        cadSpecs: { ...currentProject.cadSpecs, totalFloors: e.target.value }
                      })}
                      className="w-full p-2 bg-slate-800 border border-slate-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">حجم الخرسانات:</label>
                    <input
                      type="text"
                      value={currentProject.cadSpecs.concreteVolume}
                      onChange={(e) => setCurrentProject({
                        ...currentProject,
                        cadSpecs: { ...currentProject.cadSpecs, concreteVolume: e.target.value }
                      })}
                      className="w-full p-2 bg-slate-800 border border-slate-700 text-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={() => setIsModalOpen(false)}
                >
                  <span>إلغاء</span>
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
                >
                  <Save className="w-4 h-4 ml-1.5" />
                  <span>حفظ المشروع وتحديث الموقع</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
