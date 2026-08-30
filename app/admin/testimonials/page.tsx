"use client";

import React, { useState } from "react";
import { 
  Star, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  X, 
  Save, 
  Quote, 
  MapPin 
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Testimonial } from "@/lib/data/testimonials";
import { Button } from "@/components/ui/Button";

const emptyTestimonial: Testimonial = {
  id: "",
  name: "",
  role: "مالك مشروع / رجل أعمال",
  project: "تصميم وتنفيذ فيلا سكنية",
  location: "محافظة الفيوم",
  comment: "",
  rating: 5,
  date: "2025",
};

export default function AdminTestimonialsPage() {
  const { state, addTestimonial, updateTestimonial, deleteTestimonial } = useAdminData();
  const { testimonials } = state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial>(emptyTestimonial);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenAdd = () => {
    setCurrentTestimonial({
      ...emptyTestimonial,
      id: `test-${Date.now()}`,
      date: new Date().toLocaleDateString("ar-EG", { month: "long", year: "numeric" }),
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (t: Testimonial) => {
    setCurrentTestimonial(JSON.parse(JSON.stringify(t)));
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`هل أنت متأكد من حذف رأي العميل "${name}"؟`)) {
      deleteTestimonial(id);
      showNotify("تم حذف الرأي بنجاح.");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentTestimonial.name || !currentTestimonial.comment) {
      alert("يرجى ملء اسم العميل ونص التقييم.");
      return;
    }

    if (isEditing) {
      updateTestimonial(currentTestimonial.id, currentTestimonial);
      showNotify("تم تحديث الرأي بنجاح!");
    } else {
      addTestimonial(currentTestimonial);
      showNotify("تمت إضافة التقييم الجديد بنجاح!");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 text-right">
      {/* Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} إدارة آراء وتقييمات العملاء
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            آراء العملاء والمطورين ({testimonials.length} تقييمات)
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            إضافة شهادات أصحاب المشروعات في الفيوم و 6 أكتوبر والشيخ زايد والعاصمة
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={handleOpenAdd}
          className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
        >
          <Plus className="w-4 h-4 ml-1.5" />
          <span>إضافة تقييم جديد</span>
        </Button>
      </div>

      {notification && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{notification}</span>
        </div>
      )}

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white border-2 border-slate-900 cad-border shadow-soft-elevation p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-desert-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-paper-300" />
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4 font-sans">
                &ldquo;{t.comment}&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 font-display">{t.name}</h4>
                  <p className="text-[11px] text-brick-700 font-mono font-semibold">{t.role}</p>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 text-desert-600" />
                    <span>{t.location} • {t.project}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(t)}
                    className="p-1.5 bg-white border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-mono"
                    title="تعديل"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-desert-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(t.id, t.name)}
                    className="p-1.5 bg-white border border-rose-200 hover:border-rose-600 text-rose-700 text-xs font-mono"
                    title="حذف"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 text-right">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">
                {isEditing ? `تعديل تقييم: ${currentTestimonial.name}` : "إضافة تقييم عميل جديد"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">اسم العميل:</label>
                  <input
                    type="text"
                    required
                    placeholder="الحاج / فتحي عبد الوهاب"
                    value={currentTestimonial.name}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الصفة / المنصب:</label>
                  <input
                    type="text"
                    required
                    value={currentTestimonial.role}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, role: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">اسم المشروع المشرف عليه:</label>
                  <input
                    type="text"
                    value={currentTestimonial.project}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, project: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">التقييم بالنجوم:</label>
                  <select
                    value={currentTestimonial.rating}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, rating: Number(e.target.value) })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 نجوم)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 نجوم)</option>
                    <option value={3}>⭐⭐⭐ (3 نجوم)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الموقع / المدينة:</label>
                  <input
                    type="text"
                    value={currentTestimonial.location}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, location: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">التاريخ:</label>
                  <input
                    type="text"
                    value={currentTestimonial.date}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, date: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">نص شهادة ورأي العميل:</label>
                <textarea
                  rows={3}
                  required
                  value={currentTestimonial.comment}
                  onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, comment: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <Button type="button" variant="secondary" size="md" onClick={() => setIsModalOpen(false)}>
                  <span>إلغاء</span>
                </Button>
                <Button type="submit" variant="primary" size="md" className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold">
                  <Save className="w-4 h-4 ml-1.5" />
                  <span>حفظ وتحديث التقييم</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
