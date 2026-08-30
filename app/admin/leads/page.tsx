"use client";

import React, { useState } from "react";
import { 
  MessageSquare, 
  Search, 
  Filter, 
  PhoneCall, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Trash2, 
  Edit3, 
  ArrowUpLeft, 
  User, 
  MapPin, 
  FileText,
  Send,
  X
} from "lucide-react";
import { useAdminData, ConsultationLead } from "@/lib/context/AdminDataContext";
import { Button } from "@/components/ui/Button";

export default function AdminLeadsPage() {
  const { state, updateLeadStatus, deleteLead } = useAdminData();
  const { leads } = state;

  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<ConsultationLead | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesFilter = filterStatus === "all" ? true : lead.status === filterStatus;
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleOpenStatusModal = (lead: ConsultationLead) => {
    setSelectedLead(lead);
    setAdminNotes(lead.adminNotes || "");
  };

  const handleSaveStatus = (status: ConsultationLead["status"]) => {
    if (!selectedLead) return;
    updateLeadStatus(selectedLead.id, status, adminNotes);
    showNotify("تم تحديث حالة الطلب والملاحظات بنجاح!");
    setSelectedLead(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`هل أنت متأكد من حذف طلب الاستشارة الخاص بـ "${name}"؟`)) {
      deleteLead(id);
      showNotify("تم حذف الطلب بنجاح.");
    }
  };

  const getStatusBadge = (status: ConsultationLead["status"]) => {
    switch (status) {
      case "new":
        return <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 font-bold font-mono text-[10px]">طلب جديد</span>;
      case "contacted":
        return <span className="bg-sky-100 text-sky-900 border border-sky-300 px-2 py-0.5 font-bold font-mono text-[10px]">تم التواصل هاتفياً</span>;
      case "meeting_scheduled":
        return <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 font-bold font-mono text-[10px]">تحديد موعد بالمكتب</span>;
      case "contracted":
        return <span className="bg-purple-100 text-purple-900 border border-purple-300 px-2 py-0.5 font-bold font-mono text-[10px]">تم التعاقد رسميّاً</span>;
      case "archived":
        return <span className="bg-slate-200 text-slate-700 border border-slate-300 px-2 py-0.5 font-bold font-mono text-[10px]">مؤرشف</span>;
    }
  };

  return (
    <div className="space-y-8 text-right">
      {/* Header */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300 inline-block mb-2">
            {"//"} صندوق طلبات الاستشارات والمقايسات
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            إدارة طلبات العملاء ({leads.length} طلب)
          </h1>
          <p className="text-xs text-slate-600 font-mono mt-1">
            متابعة استمارات الحجز والمقايسات والتواصل المباشر مع العملاء عبر الواتساب
          </p>
        </div>

        {notification && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{notification}</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border-2 border-slate-900 p-4 cad-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {[
            { id: "all", label: "جميع الطلبات" },
            { id: "new", label: "جديد" },
            { id: "contacted", label: "تم التواصل" },
            { id: "meeting_scheduled", label: "موعد محدد" },
            { id: "contracted", label: "تم التعاقد" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id)}
              className={`px-3 py-1.5 text-xs font-bold font-mono transition-all ${
                filterStatus === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-paper-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="بحث بالاسم أو الهاتف أو المدينة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pr-8 bg-paper-50 border border-slate-300 text-xs font-sans"
          />
          <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white border-2 border-slate-900 cad-border shadow-soft-elevation overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="text-center py-16 text-slate-500 font-mono text-xs">
            لا توجد طلبات تطابق معايير البحث الحالية.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-900 text-white font-mono">
                <tr>
                  <th className="p-3.5">تاريخ الطلب</th>
                  <th className="p-3.5">اسم العميل</th>
                  <th className="p-3.5">رقم الهاتف</th>
                  <th className="p-3.5">نوع المشروع</th>
                  <th className="p-3.5">الموقع والمساحة</th>
                  <th className="p-3.5">الحالة</th>
                  <th className="p-3.5">ملاحظات</th>
                  <th className="p-3.5 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-paper-50 font-sans transition-colors">
                    <td className="p-3 font-mono text-[11px] text-slate-500">
                      {new Date(lead.timestamp).toLocaleDateString("ar-EG", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="p-3 font-bold text-slate-900 font-display text-sm">
                      {lead.name}
                    </td>
                    <td className="p-3 font-mono" dir="ltr">
                      {lead.phone}
                    </td>
                    <td className="p-3 font-medium text-slate-800">
                      {lead.projectType}
                    </td>
                    <td className="p-3 font-mono text-slate-600">
                      {lead.location} {lead.plotArea && `(${lead.plotArea})`}
                    </td>
                    <td className="p-3">
                      {getStatusBadge(lead.status)}
                    </td>
                    <td className="p-3 max-w-xs">
                      {lead.notes && (
                        <p className="text-[11px] text-slate-600 line-clamp-1 italic">
                          &ldquo;{lead.notes}&rdquo;
                        </p>
                      )}
                      {lead.adminNotes && (
                        <p className="text-[10px] text-brick-700 font-mono mt-0.5 line-clamp-1">
                          ملاحظة المشرف: {lead.adminNotes}
                        </p>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <a
                          href={`https://wa.me/2${lead.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-mono text-[10px] flex items-center gap-1"
                          title="محادثة واتساب"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>واتساب</span>
                        </a>

                        <button
                          onClick={() => handleOpenStatusModal(lead)}
                          className="p-1.5 bg-paper-100 hover:bg-paper-200 text-slate-700 border border-slate-300 font-mono text-[10px] flex items-center gap-1"
                          title="تعديل الحالة والملاحظات"
                        >
                          <Edit3 className="w-3 h-3 text-desert-600" />
                          <span>الحالة</span>
                        </button>

                        <button
                          onClick={() => handleDelete(lead.id, lead.name)}
                          className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-[10px]"
                          title="حذف الطلب"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Status & Notes Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 p-6 cad-border shadow-2xl max-w-md w-full space-y-5 text-right">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-base text-slate-900 font-display">
                تحديث حالة طلب: {selectedLead.name}
              </h3>
              <button onClick={() => setSelectedLead(null)} className="p-1 text-slate-400 hover:text-slate-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-1.5">
                ملاحظات المهندس المشرف الداخلية:
              </label>
              <textarea
                rows={3}
                placeholder="أضف ملاحظاتك حول مراجعة اللوحات، موعد الاجتماع بالمكتب، أو الاتفاق..."
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full p-2.5 bg-paper-50 border border-slate-300 text-xs font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-800 mb-2">
                اختر الحالة الجديدة للطلب:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleSaveStatus("new")}
                  className="p-2 text-xs font-mono font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-center"
                >
                  طلب جديد
                </button>

                <button
                  type="button"
                  onClick={() => handleSaveStatus("contacted")}
                  className="p-2 text-xs font-mono font-bold bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-300 text-center"
                >
                  تم التواصل
                </button>

                <button
                  type="button"
                  onClick={() => handleSaveStatus("meeting_scheduled")}
                  className="p-2 text-xs font-mono font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-center"
                >
                  تحديد موعد بالمكتب
                </button>

                <button
                  type="button"
                  onClick={() => handleSaveStatus("contracted")}
                  className="p-2 text-xs font-mono font-bold bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-300 text-center"
                >
                  تم التعاقد الرسمي
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
