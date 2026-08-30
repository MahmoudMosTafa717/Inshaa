"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Users, 
  Plus, 
  Edit3, 
  Trash2, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  Save 
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { TeamMember } from "@/lib/data/team";
import { Button } from "@/components/ui/Button";

const emptyMember: TeamMember = {
  id: "",
  name: "",
  role: "مهندس استشاري",
  syndicateNumber: "سجل نقابة المهندسين المصرية",
  experienceYears: 15,
  bio: "",
  specialization: "التصميم الإنشائي والمعماري",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
};

export default function AdminTeamPage() {
  const { state, addTeamMember, updateTeamMember, deleteTeamMember } = useAdminData();
  const { team } = state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMember>(emptyMember);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenAdd = () => {
    setCurrentMember({
      ...emptyMember,
      id: `team-${Date.now()}`,
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (member: TeamMember) => {
    setCurrentMember(JSON.parse(JSON.stringify(member)));
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`هل أنت متأكد من حذف المهندس "${name}" من قائمة الكادر؟`)) {
      deleteTeamMember(id);
      showNotify("تم حذف العضو بنجاح.");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMember.name || !currentMember.role) {
      alert("يرجى ملء اسم المهندس والمنصب الاستشاري.");
      return;
    }

    if (isEditing) {
      updateTeamMember(currentMember.id, currentMember);
      showNotify("تم تحديث بيانات المهندس بنجاح!");
    } else {
      addTeamMember(currentMember);
      showNotify("تمت إضافة الاستشاري الجديد بنجاح!");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 text-right">
      {/* Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} إدارة الكادر والمهندسين الاستشاريين
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            الكادر الهندسي والاستشاري ({team.length} مهندسين)
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            إضافة وتعديل بيانات الاستشاريين، أرقام السجلات النقابية، وسنوات الخبرة
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={handleOpenAdd}
          className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
        >
          <Plus className="w-4 h-4 ml-1.5" />
          <span>إضافة استشاري / مهندس</span>
        </Button>
      </div>

      {notification && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{notification}</span>
        </div>
      )}

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div
            key={m.id}
            className="bg-white border-2 border-slate-900 cad-border shadow-soft-elevation flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="relative aspect-[4/5] w-full bg-slate-200">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-slate-950/85 text-desert-400 font-mono text-[10px] px-2 py-0.5 border border-slate-800">
                  {m.experienceYears}+ عاماً خبرة
                </div>
              </div>

              <div className="p-4 space-y-1.5">
                <h3 className="font-bold text-base text-slate-900 font-display">
                  {m.name}
                </h3>
                <p className="text-xs font-bold text-brick-700 font-mono leading-tight">
                  {m.role}
                </p>
                <p className="text-[11px] text-slate-600 line-clamp-2 mt-2 font-sans">
                  {m.specialization}
                </p>
              </div>
            </div>

            <div className="p-3 bg-paper-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 line-clamp-1 truncate max-w-[110px]">
                {m.syndicateNumber}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(m)}
                  className="p-1.5 bg-white border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-mono"
                  title="تعديل"
                >
                  <Edit3 className="w-3.5 h-3.5 text-desert-600" />
                </button>
                <button
                  onClick={() => handleDelete(m.id, m.name)}
                  className="p-1.5 bg-white border border-rose-200 hover:border-rose-600 text-rose-700 text-xs font-mono"
                  title="حذف"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Team Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 text-right">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">
                {isEditing ? `تعديل بيانات: ${currentMember.name}` : "إضافة مهندس استشاري جديد"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-900">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">الاسم الكامل:</label>
                  <input
                    type="text"
                    required
                    placeholder="م. أحمد فتحي"
                    value={currentMember.name}
                    onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">المنصب / الدور بالمكتب:</label>
                  <input
                    type="text"
                    required
                    value={currentMember.role}
                    onChange={(e) => setCurrentMember({ ...currentMember, role: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-sm font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">رقم القيد بنقابة المهندسين:</label>
                  <input
                    type="text"
                    value={currentMember.syndicateNumber}
                    onChange={(e) => setCurrentMember({ ...currentMember, syndicateNumber: e.target.value })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-mono text-slate-800 mb-1">سنوات الخبرة:</label>
                  <input
                    type="number"
                    value={currentMember.experienceYears}
                    onChange={(e) => setCurrentMember({ ...currentMember, experienceYears: Number(e.target.value) })}
                    className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">رابط الصورة الشخصية (Image URL):</label>
                <input
                  type="url"
                  dir="ltr"
                  required
                  value={currentMember.image}
                  onChange={(e) => setCurrentMember({ ...currentMember, image: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-mono text-right"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">التخصص الدقيق والخبرات:</label>
                <input
                  type="text"
                  value={currentMember.specialization}
                  onChange={(e) => setCurrentMember({ ...currentMember, specialization: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-mono text-slate-800 mb-1">النبذة التعريفية (Bio):</label>
                <textarea
                  rows={3}
                  value={currentMember.bio}
                  onChange={(e) => setCurrentMember({ ...currentMember, bio: e.target.value })}
                  className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                <Button type="button" variant="secondary" size="md" onClick={() => setIsModalOpen(false)}>
                  <span>إلغاء</span>
                </Button>
                <Button type="submit" variant="primary" size="md" className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold">
                  <Save className="w-4 h-4 ml-1.5" />
                  <span>حفظ وتحديث الكادر</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
