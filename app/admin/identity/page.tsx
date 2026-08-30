"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Save, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  FileText
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Button } from "@/components/ui/Button";

export default function AdminIdentityPage() {
  const { state, updateIdentity } = useAdminData();
  const [formData, setFormData] = useState(state.identity);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateIdentity(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 text-right">
      {/* Top Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} إعدادات الهوية وبيانات الاتصال
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            الهوية المؤسسية وبيانات المقرات والاعتمادات
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            يتم تحديث هذه البيانات فوراً في الهيدر، الفوتر، والصفحة الرئيسية، وصفحة التواصل
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>تم حفظ التعديلات بنجاح!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Firm Name & Lead Consultant */}
        <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
          <h2 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200 pb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brick-700" />
            <span>1. هوية المكتب والقيادة الاستشارية</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                اسم المكتب الرسمي (بالعربية):
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                اسم المكتب بالإنجليزية:
              </label>
              <input
                type="text"
                dir="ltr"
                value={formData.englishName}
                onChange={(e) => setFormData({ ...formData, englishName: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-mono text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                المهندس الاستشاري الرئيسي / رئيس المكتب:
              </label>
              <input
                type="text"
                required
                value={formData.leadConsultant}
                onChange={(e) => setFormData({ ...formData, leadConsultant: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                رقم السجل الاستشاري بنقابة المهندسين:
              </label>
              <input
                type="text"
                value={formData.syndicateNumber}
                onChange={(e) => setFormData({ ...formData, syndicateNumber: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
              الشعار اللفظي والوصف المختصر (Tagline):
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
              النبذة التعريفية للمكتب (تظهر في الفوتر وعن المكتب):
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
            />
          </div>
        </div>

        {/* Section 2: Contact Info & Phones */}
        <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
          <h2 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200 pb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-brick-700" />
            <span>2. أرقام الهواتف والتواصل والمواعيد</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                الهاتف الرئيسي (واتساب):
              </label>
              <input
                type="text"
                dir="ltr"
                value={formData.phonePrimary}
                onChange={(e) => setFormData({ ...formData, phonePrimary: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-mono text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                الهاتف الإضافي / فرع أكتوبر:
              </label>
              <input
                type="text"
                dir="ltr"
                value={formData.phoneSecondary}
                onChange={(e) => setFormData({ ...formData, phoneSecondary: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-mono text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                البريد الإلكتروني الرسمي:
              </label>
              <input
                type="email"
                dir="ltr"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-mono text-right"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
              مواعيد العمل الرسمية:
            </label>
            <input
              type="text"
              value={formData.workingHours}
              onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
            />
          </div>
        </div>

        {/* Section 3: Branches & Physical Addresses */}
        <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
          <h2 className="text-lg font-bold text-slate-900 font-display border-b border-slate-200 pb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brick-700" />
            <span>3. عناوين المقرات والفروع</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                عنوان المقر الرئيسي (محافظة الفيوم):
              </label>
              <input
                type="text"
                value={formData.fayoumAddress}
                onChange={(e) => setFormData({ ...formData, fayoumAddress: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                عنوان فرع غرب القاهرة (6 أكتوبر والشيخ زايد):
              </label>
              <input
                type="text"
                value={formData.octoberAddress}
                onChange={(e) => setFormData({ ...formData, octoberAddress: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                عنوان فرع شرق القاهرة (العاصمة الإدارية والتجمع):
              </label>
              <input
                type="text"
                value={formData.cairoAddress}
                onChange={(e) => setFormData({ ...formData, cairoAddress: e.target.value })}
                className="w-full p-3 bg-paper-50 border border-slate-300 focus:border-brick-700 text-sm font-sans"
              />
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold font-display"
          >
            <Save className="w-4 h-4 ml-2" />
            <span>حفظ وتطبيق التعديلات على الموقع فوراً</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
