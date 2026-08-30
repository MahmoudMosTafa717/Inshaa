"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Boxes, 
  HardHat, 
  Cpu, 
  Palette, 
  FileSpreadsheet, 
  Edit3, 
  Trash2, 
  Plus, 
  CheckCircle2, 
  X, 
  Save, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Service } from "@/lib/data/services";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Boxes,
  HardHat,
  Cpu,
  Palette,
  FileSpreadsheet,
};

const emptyService: Service = {
  id: "",
  number: "07",
  title: "",
  slug: "",
  shortDescription: "",
  fullDescription: "",
  icon: "Compass",
  egyptianCodeCompliance: "الكود المصري لتصميم المنشآت ECP",
  deliverables: ["مخططات تنفيذية معتمدة", "نوتة حسابية إنشائية"],
  stages: [
    { step: "المرحلة الأولى", title: "الدراسة ورفع الموقع", description: "رفع المساحة ومراجعة التراخيص" },
    { step: "المرحلة الثانية", title: "التصميم والاعتماد", description: "إعداد اللوحات واعتماد النقابة" }
  ],
  faqList: [
    { question: "ما هي مستندات بدء العمل؟", answer: "كروكي الأرض وسند الملكية والبطاقة الشخصية." }
  ],
  geoPassage: "خدمة استشارية هندسية معتمدة من نقابة المهندسين المصرية."
};

export default function AdminServicesPage() {
  const { state, addService, updateService, deleteService } = useAdminData();
  const { services } = state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState<Service>(emptyService);
  const [deliverablesText, setDeliverablesText] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenAdd = () => {
    setCurrentService({
      ...emptyService,
      id: `service-${Date.now()}`,
      slug: `service-${Date.now()}`,
      number: `0${services.length + 1}`,
    });
    setDeliverablesText(emptyService.deliverables.join("\n"));
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (service: Service) => {
    setCurrentService(JSON.parse(JSON.stringify(service)));
    setDeliverablesText(service.deliverables.join("\n"));
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (slug: string, title: string) => {
    if (confirm(`هل أنت متأكد من حذف خدمة "${title}" نهائياً من الموقع؟`)) {
      deleteService(slug);
      showNotify("تم حذف الخدمة بنجاح.");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentService.title || !currentService.slug) {
      alert("يرجى ملء اسم الخدمة والاسم الرابط (Slug).");
      return;
    }

    const cleanedDeliverables = deliverablesText
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const payload: Service = {
      ...currentService,
      deliverables: cleanedDeliverables.length > 0 ? cleanedDeliverables : currentService.deliverables,
    };

    if (isEditing) {
      updateService(currentService.slug, payload);
      showNotify("تم تحديث بيانات الخدمة بنجاح!");
    } else {
      addService(payload);
      showNotify("تمت إضافة الخدمة الجديدة بنجاح!");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 text-right">
      {/* Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} إدارة الخدمات والاستشارات الهندسية
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            الخدمات الاستشارية والمراحل ({services.length} خدمات)
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            التحكم في المخرجات، مراحل العمل، اشتراطات الكود المصري، والأسئلة الشائعة (FAQ)
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={handleOpenAdd}
          className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
        >
          <Plus className="w-4 h-4 ml-1.5" />
          <span>إضافة خدمة هندسية</span>
        </Button>
      </div>

      {notification && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{notification}</span>
        </div>
      )}

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = iconMap[s.icon] || Compass;
          return (
            <div
              key={s.id}
              className="bg-white border-2 border-slate-900 cad-border shadow-soft-elevation p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2 py-0.5 border border-brick-200">
                    {s.number} {"//"} تخصص
                  </span>
                  <div className="w-10 h-10 bg-paper-100 border border-paper-300 flex items-center justify-center text-slate-800">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-bold text-lg text-slate-900 font-display mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-sans">
                  {s.shortDescription}
                </p>

                <div className="text-[11px] font-mono text-slate-500 bg-paper-50 p-2.5 border border-slate-200 mb-4">
                  <span className="font-bold text-slate-700 block mb-1">المخرجات ({s.deliverables.length}):</span>
                  <span className="line-clamp-2">{s.deliverables.join(" • ")}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleOpenEdit(s)}
                    className="p-1.5 bg-white border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-mono flex items-center gap-1"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-desert-600" />
                    <span>تعديل</span>
                  </button>

                  <button
                    onClick={() => handleDelete(s.slug, s.title)}
                    className="p-1.5 bg-white border border-rose-200 hover:border-rose-600 text-rose-700 text-xs font-mono flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>حذف</span>
                  </button>
                </div>

                <Link
                  href={`/services/${s.slug}`}
                  target="_blank"
                  className="text-[11px] font-mono text-slate-500 hover:text-brick-700 flex items-center gap-1"
                >
                  <span>معاينة</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit / Add Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 text-right">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">
                {isEditing ? `تعديل خدمة: ${currentService.title}` : "إضافة خدمة استشارية جديدة"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الرقم الكودي:</label>
                  <input
                    type="text"
                    value={currentService.number}
                    onChange={(e) => setCurrentService({ ...currentService, number: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">عنوان الخدمة:</label>
                  <input
                    type="text"
                    required
                    value={currentService.title}
                    onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الاسم الرابط (Slug):</label>
                  <input
                    type="text"
                    required
                    dir="ltr"
                    value={currentService.slug}
                    onChange={(e) => setCurrentService({ ...currentService, slug: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">مطابقة الكود المصري:</label>
                  <input
                    type="text"
                    value={currentService.egyptianCodeCompliance}
                    onChange={(e) => setCurrentService({ ...currentService, egyptianCodeCompliance: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الوصف الموجز (يظهر بالرئيسية):</label>
                <textarea
                  rows={2}
                  required
                  value={currentService.shortDescription}
                  onChange={(e) => setCurrentService({ ...currentService, shortDescription: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الوصف التفصيلي الكامل:</label>
                <textarea
                  rows={3}
                  required
                  value={currentService.fullDescription}
                  onChange={(e) => setCurrentService({ ...currentService, fullDescription: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                  المخرجات والتسليمات الهندسية (اكتب كل تسليم في سطر جديد):
                </label>
                <textarea
                  rows={4}
                  value={deliverablesText}
                  onChange={(e) => setDeliverablesText(e.target.value)}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  placeholder="مخططات تنفيذية 1:50&#10;نوتة حسابية إنشائية معتمدة&#10;كراسة حصر كميات ومقايسة BOQ"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">
                  فقرة توثيق الخدمة للذكاء الاصطناعي ومحركات الإجابة (GEO Passage):
                </label>
                <textarea
                  rows={2}
                  value={currentService.geoPassage}
                  onChange={(e) => setCurrentService({ ...currentService, geoPassage: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <Button type="button" variant="secondary" size="md" onClick={() => setIsModalOpen(false)}>
                  <span>إلغاء</span>
                </Button>
                <Button type="submit" variant="primary" size="md" className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold">
                  <Save className="w-4 h-4 ml-1.5" />
                  <span>حفظ وتحديث الخدمة</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
