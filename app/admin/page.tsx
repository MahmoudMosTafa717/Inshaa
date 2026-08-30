"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Boxes, 
  Compass, 
  Users, 
  Star, 
  Calculator, 
  MessageSquare, 
  ArrowUpLeft, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Activity,
  PlusCircle,
  ExternalLink
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function AdminOverviewPage() {
  const { state, updateLeadStatus } = useAdminData();
  const { identity, projects, services, team, testimonials, leads } = state;

  const newLeadsCount = leads.filter((l) => l.status === "new").length;

  return (
    <div className="space-y-8 text-right">
      {/* Top Welcome Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 border-2 border-slate-900 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-desert-400 font-bold">
              نظام إدارة المحتوى والعمليات الهندسية المباشر
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-display text-white">
            مرحباً بك في لوحة تحكم مكتب إنشاء للهندسة
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-mono">
            بإشراف: <strong className="text-white">{identity.leadConsultant}</strong> • {identity.syndicateNumber}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="primary"
            size="md"
            href="/admin/projects"
            className="bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
          >
            <PlusCircle className="w-4 h-4 ml-1.5" />
            <span>إضافة مشروع جديد</span>
          </Button>

          <Button
            variant="outline"
            size="md"
            href="/"
            external
            className="border-slate-700 text-white hover:bg-slate-800 text-xs font-mono"
          >
            <span>زيارة الموقع المباشر</span>
            <ExternalLink className="w-3.5 h-3.5 mr-1 text-desert-400" />
          </Button>
        </div>
      </div>

      {/* KPI Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Projects Card */}
        <Link href="/admin/projects" className="block group">
          <div className="bg-white p-5 border-2 border-slate-900 cad-border shadow-soft-elevation hover:border-brick-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500">المشروعات وسابقة الأعمال</span>
              <div className="w-9 h-9 bg-brick-50 text-brick-700 flex items-center justify-center border border-brick-200">
                <Boxes className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">
              {projects.length}
            </div>
            <p className="text-[11px] font-mono text-slate-500 mt-1">
              بالفيوم، 6 أكتوبر، الشيخ زايد والعاصمة
            </p>
          </div>
        </Link>

        {/* Services Card */}
        <Link href="/admin/services" className="block group">
          <div className="bg-white p-5 border-2 border-slate-900 cad-border shadow-soft-elevation hover:border-brick-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500">الخدمات الاستشارية</span>
              <div className="w-9 h-9 bg-petroleum-50 text-petroleum-700 flex items-center justify-center border border-petroleum-200">
                <Compass className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">
              {services.length}
            </div>
            <p className="text-[11px] font-mono text-slate-500 mt-1">
              خدمات هندسية معتمدة بالكود المصري
            </p>
          </div>
        </Link>

        {/* Team Card */}
        <Link href="/admin/team" className="block group">
          <div className="bg-white p-5 border-2 border-slate-900 cad-border shadow-soft-elevation hover:border-brick-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500">الكادر والاستشاريون</span>
              <div className="w-9 h-9 bg-desert-50 text-desert-800 flex items-center justify-center border border-desert-300">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black font-mono text-slate-900">
              {team.length}
            </div>
            <p className="text-[11px] font-mono text-slate-500 mt-1">
              استشاريون مقيدون بنقابة المهندسين
            </p>
          </div>
        </Link>

        {/* Leads Card */}
        <Link href="/admin/leads" className="block group">
          <div className="bg-white p-5 border-2 border-slate-900 cad-border shadow-soft-elevation hover:border-brick-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-500">طلبات الاستشارات الواردة</span>
              <div className="w-9 h-9 bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black font-mono text-slate-900">{leads.length}</span>
              {newLeadsCount > 0 && (
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 border border-emerald-300">
                  {newLeadsCount} طلب جديد
                </span>
              )}
            </div>
            <p className="text-[11px] font-mono text-slate-500 mt-1">
              متابعة العملاء وحجز جلسات المراجعة
            </p>
          </div>
        </Link>
      </div>

      {/* Quick Action Navigation Grid */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-lg font-bold text-slate-900 font-display">
            التحكم السريع في أقسام وصفحات الموقع
          </h2>
          <span className="text-xs font-mono text-slate-500">
            تحديث فوري للموقع المباشر
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/identity"
            className="p-4 bg-paper-50 hover:bg-paper-100 border border-slate-300 flex items-center justify-between group transition-colors"
          >
            <div>
              <div className="font-bold text-sm text-slate-900 font-display group-hover:text-brick-700">
                بيانات وهوية المكتب
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                تعديل الاسم، الشعار، أرقام الهواتف، والمقرات
              </div>
            </div>
            <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-brick-700 transition-transform group-hover:-translate-x-1" />
          </Link>

          <Link
            href="/admin/calculator"
            className="p-4 bg-paper-50 hover:bg-paper-100 border border-slate-300 flex items-center justify-between group transition-colors"
          >
            <div>
              <div className="font-bold text-sm text-slate-900 font-display group-hover:text-brick-700">
                أسعار ومعاملات المقايسات
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                تعديل سعر المتر ومعاملات المحافظات والمدن
              </div>
            </div>
            <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-brick-700 transition-transform group-hover:-translate-x-1" />
          </Link>

          <Link
            href="/admin/testimonials"
            className="p-4 bg-paper-50 hover:bg-paper-100 border border-slate-300 flex items-center justify-between group transition-colors"
          >
            <div>
              <div className="font-bold text-sm text-slate-900 font-display group-hover:text-brick-700">
                آراء وتقييمات العملاء
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                إضافة شهادات مطورين وأصحاب الفلل بالفيوم وأكتوبر
              </div>
            </div>
            <ArrowUpLeft className="w-4 h-4 text-slate-400 group-hover:text-brick-700 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Recent Consultation Requests Inbox */}
      <div className="bg-white border-2 border-slate-900 p-6 sm:p-8 cad-border shadow-soft-elevation space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-display">
              أحدث طلبات الاستشارات الهندسية والمقايسات
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              الواردة مباشرة من استمارات الموقع وحاسبة التكاليف
            </p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs font-bold text-brick-700 hover:text-brick-800 font-mono flex items-center gap-1"
          >
            <span>عرض كافة الطلبات ({leads.length})</span>
            <ArrowUpLeft className="w-3.5 h-3.5" />
          </Link>
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-10 text-slate-500 font-mono text-xs">
            لا توجد طلبات جديدة حتى الآن.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead className="bg-paper-100 text-slate-700 font-mono border-b border-slate-300">
                <tr>
                  <th className="p-3">اسم العميل</th>
                  <th className="p-3">رقم الهاتف</th>
                  <th className="p-3">نوع المشروع</th>
                  <th className="p-3">الموقع والمساحة</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3">الإجراء السريع</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {leads.slice(0, 5).map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 font-sans">
                    <td className="p-3 font-bold text-slate-900 font-display">{lead.name}</td>
                    <td className="p-3 font-mono" dir="ltr">{lead.phone}</td>
                    <td className="p-3">{lead.projectType}</td>
                    <td className="p-3 font-mono text-slate-600">
                      {lead.location} {lead.plotArea && `(${lead.plotArea})`}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] font-mono font-bold ${
                          lead.status === "new"
                            ? "bg-amber-100 text-amber-900 border border-amber-300"
                            : lead.status === "meeting_scheduled"
                            ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                            : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {lead.status === "new" ? "طلب جديد" : lead.status === "meeting_scheduled" ? "موعد محدد" : lead.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <a
                        href={`https://wa.me/2${lead.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-1 border border-emerald-300 hover:bg-emerald-100"
                      >
                        <span>محادثة واتساب</span>
                        <ArrowUpLeft className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
