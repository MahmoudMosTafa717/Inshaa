"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Upload, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar,
  Send,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "فيلا سكنية",
    location: "محافظة الفيوم (الفيوم الجديدة / المسلة)",
    plotArea: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0].name);
    }
  };

  return (
    <>
      <JsonLd type="LocalBusiness" />

      <div className="bg-paper-50 min-h-screen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-right max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-3 py-1 border border-brick-300 inline-block mb-3">
              {"//"} قنوات التواصل وحجز الاستشارات الهندسية
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-display leading-tight">
              تواصل مع مكتب إنشاء للهندسة أو احجز موعداً بمقرنا بالفيوم أو أكتوبر
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              سواء كنت ترغب في مراجعة كروكي قطعة أرضك، استخراج رخصة بناء بالفيوم أو جهازي أكتوبر وزايد، أو طلب مقايسة وتصميم هندسي متكامل، يسعدنا استقبالك وتقديم استشارة أولية مع <strong>مهندس استشاري / عماد الدين أمين</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Consultation Booking Form (7 cols) */}
            <div className="lg:col-span-7 bg-white border-2 border-slate-900 p-6 sm:p-10 cad-border shadow-soft-elevation">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    تم استلام طلبك وتنسيق موعد الاستشارة بنجاح!
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                    شكراً لتواصلك مع مكتب إنشاء للهندسة. سيتواصل معك الاستشاري هاتفياً خلال ساعات عمل اليوم لمراجعة تفاصيل الموقع والمخططات.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setSubmitted(false)}
                      className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white"
                    >
                      <span>تقديم طلب استشارة آخر</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-paper-300 pb-4">
                    <h2 className="text-2xl font-bold text-slate-900 font-display">
                      استمارة حجز استشارة هندسية ومراجعة كروكي
                    </h2>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      * يرجى إدخال بيانات موقعك وسنتواصل معك خلال ساعتين عمل.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                        الاسم بالكامل:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="المهندس / الأستاذ..."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-paper-50 border border-paper-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                        رقم الهاتف المحمول (واتساب):
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0100 123 4567"
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-paper-50 border border-paper-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm font-mono text-right"
                      />
                    </div>
                  </div>

                  {/* Project Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                        نوع المنشأة:
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-3 bg-paper-50 border border-paper-300 focus:border-slate-900 text-sm font-sans"
                      >
                        <option value="فيلا سكنية">فيلا سكنية فاخرة</option>
                        <option value="برج وعمارة سكنية">برج أو عمارة سكنية</option>
                        <option value="مبنى تجاري / إداري">مبنى أو مول تجاري وإداري</option>
                        <option value="تشطيب وديكور داخلي">تصميم داخلي وتشطيبات</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                        موقع المشروع (المحافظة / المدينة):
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full p-3 bg-paper-50 border border-paper-300 focus:border-slate-900 text-sm font-sans"
                      >
                        <option value="محافظة الفيوم (الفيوم الجديدة / المسلة)">محافظة الفيوم (الفيوم الجديدة / المسلة / قارون)</option>
                        <option value="مدينة 6 أكتوبر">مدينة 6 أكتوبر والتوسعات</option>
                        <option value="مدينة الشيخ زايد">مدينة الشيخ زايد ومحور البستان</option>
                        <option value="العاصمة الإدارية الجديدة">العاصمة الإدارية الجديدة</option>
                        <option value="القاهرة الجديدة والتجمع">القاهرة الجديدة والتجمع الخامس</option>
                      </select>
                    </div>
                  </div>

                  {/* Plot Area */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                      مساحة الأرض أو مسطح المباني التقديري (م²):
                    </label>
                    <input
                      type="text"
                      placeholder="مثال: 500 م²"
                      value={formData.plotArea}
                      onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                      className="w-full p-3 bg-paper-50 border border-paper-300 focus:border-slate-900 text-sm font-sans"
                    />
                  </div>

                  {/* File Upload Simulation (CAD / PDF) */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                      إرفاق كروكي الأرض أو المخططات (اختياري - PDF / DWG / صورة):
                    </label>
                    <div className="relative border-2 border-dashed border-paper-300 hover:border-brick-700 p-4 text-center transition-colors bg-paper-50">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.dwg,.jpg,.png,.zip"
                      />
                      <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                      <span className="text-xs text-slate-600 font-mono block">
                        {selectedFile ? `الملف المرفق: ${selectedFile}` : "انقر هنا لاختيار ملف أو اسحبه للإرفاق"}
                      </span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                      تفاصيل أو اشتراطات خاصة ترغب في مناقشتها:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="اكتب أي ملاحظات حول عدد الطوابق، الارتدادات، الرغبة في عمل بدروم..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 bg-paper-50 border border-paper-300 focus:border-slate-900 text-sm font-sans"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center font-bold bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-display">
                    <Send className="w-4 h-4 ml-2" />
                    <span>إرسال طلب الاستشارة وحجز الموعد</span>
                  </Button>
                </form>
              )}
            </div>

            {/* Office Locations & Direct Contacts (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Main Fayoum Office Card */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 border-2 border-slate-900 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-desert-400 font-bold">
                  <Building className="w-4 h-4" />
                  <span>{"//"} المقر الرئيسي - محافظة الفيوم</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  مكتب الفيوم (المقر الرئيسي)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  منطقة المسلة، بالقرب من ديوان عام المحافظة ومجمع المصالح الحكومية، مدينة الفيوم.
                </p>

                <div className="space-y-2 text-xs font-mono pt-3 border-t border-slate-800 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-desert-400 shrink-0" />
                    <span>0100 123 4567 / 0100 987 6543</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-desert-400 shrink-0" />
                    <span>info@inshaa-engineering.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-desert-400 shrink-0" />
                    <span>السبت - الخميس: 9:00 ص - 8:00 م</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href="https://wa.me/201001234567"
                    external
                    className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white font-bold"
                  >
                    <MessageCircle className="w-4 h-4 ml-1.5" />
                    <span>محادثة واتساب فورية مع الاستشاري</span>
                  </Button>
                </div>
              </div>

              {/* West Cairo Branch Card */}
              <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 font-bold">
                  <Building className="w-4 h-4" />
                  <span>{"//"} فرع غرب القاهرة</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  مكتب 6 أكتوبر والشيخ زايد
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-mono">
                  مدينة 6 أكتوبر ومحور البستان بالشيخ زايد، الجيزة.
                </p>
                <div className="text-xs font-mono text-slate-700 pt-2 border-t border-paper-300">
                  هاتف الفرع: 0100 987 6543
                </div>
              </div>

              {/* Syndicate Proof Box */}
              <div className="p-4 bg-brick-50 border border-brick-300 text-xs text-brick-950 font-mono flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brick-700 shrink-0" />
                <span>
                  مكتب إنشاء للهندسة مسجل بنقابة المهندسين المصرية برقم قيد استشاري 1248/خ - م. عماد الدين أمين.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
