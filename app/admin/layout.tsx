"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Building2, 
  Compass, 
  Boxes, 
  Users, 
  Star, 
  Calculator, 
  MessageSquare, 
  Download, 
  Upload, 
  RotateCcw, 
  LogOut, 
  ExternalLink, 
  ShieldCheck, 
  Menu, 
  X,
  FileCode2,
  CheckCircle2
} from "lucide-react";
import { useAdminAuth } from "@/lib/admin/auth";
import { useAdminData } from "@/lib/context/AdminDataContext";
import { Button } from "@/components/ui/Button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading, logout, user } = useAdminAuth();
  const { exportBackupJson, importBackupJson, resetToDefaults, state } = useAdminData();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleExport = () => {
    const jsonStr = exportBackupJson();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inshaa-engineering-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    showNotification("تم تصدير ملف النسخة الاحتياطية بنجاح!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          const success = importBackupJson(content);
          if (success) {
            showNotification("تم استيراد وتطبيق البيانات بنجاح!");
          } else {
            alert("الملف غير صالح، يرجى اختيار ملف JSON مطابق.");
          }
        }
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    if (confirm("هل أنت متأكد من استعادة بيانات الموقع إلى الإعدادات الافتراضية للمكتب؟")) {
      resetToDefaults();
      showNotification("تمت استعادة الإعدادات الافتراضية بنجاح.");
    }
  };

  // If on login page, render children directly without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // If loading or not authenticated, render login view
  if (!isLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border-2 border-brick-700 p-8 cad-border shadow-2xl space-y-6 text-right">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-desert-500 flex items-center justify-center mx-auto text-white font-mono font-black text-xl">
              IE
            </div>
            <h1 className="text-2xl font-black text-slate-900 font-display">
              لوحة تحكم مكتب إنشاء للهندسة
            </h1>
            <p className="text-xs text-slate-600 font-mono">
              يرجى تسجيل الدخول للوصول إلى أدوات إدارة وتحرير الموقع
            </p>
          </div>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              href="/admin/login"
              className="w-full justify-center bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
            >
              <span>تسجيل الدخول للوحة الإدارة</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: "لوحة القيادة والمؤشرات", href: "/admin", icon: LayoutDashboard },
    { label: "الهوية والبيانات والمقرات", href: "/admin/identity", icon: Building2 },
    { label: "المشروعات وسابقة الأعمال", href: "/admin/projects", icon: Boxes, count: state.projects.length },
    { label: "الخدمات الهندسية ومراحلها", href: "/admin/services", icon: Compass, count: state.services.length },
    { label: "الكادر والاستشاريون", href: "/admin/team", icon: Users, count: state.team.length },
    { label: "آراء وتقييمات العملاء", href: "/admin/testimonials", icon: Star, count: state.testimonials.length },
    { label: "معادلات وأسعار المقايسات", href: "/admin/calculator", icon: Calculator },
    { label: "صندوق طلبات الاستشارات", href: "/admin/leads", icon: MessageSquare, count: state.leads.filter(l => l.status === "new").length, alert: true },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans text-slate-900">
      {/* Mobile Top Navigation */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-desert-500 flex items-center justify-center font-mono font-bold text-xs text-desert-400">
            IE
          </div>
          <span className="font-bold font-display text-sm">لوحة الإدارة الهندسية</span>
        </div>
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-1 text-slate-300 hover:text-white"
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Navigation (Desktop & Mobile Drawer) */}
      <aside
        className={`w-full md:w-72 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col justify-between border-l border-slate-800 ${
          mobileNavOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div>
          {/* Brand header */}
          <div className="p-5 border-b border-slate-800">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-950 to-slate-800 border-2 border-desert-500 flex items-center justify-center text-desert-400 font-mono font-black text-sm shadow-md">
                IE
              </div>
              <div>
                <span className="text-base font-black text-white font-display block leading-tight">
                  مكتب إنشاء للهندسة
                </span>
                <span className="text-[11px] font-mono text-desert-400 block">
                  لوحة التحكم الإدارية المباشرة
                </span>
              </div>
            </Link>

            {user && (
              <div className="mt-4 p-2.5 bg-slate-950/80 border border-slate-800 text-[11px] font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate text-slate-200">{user.name}</span>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-none transition-all font-display ${
                    isActive
                      ? "bg-brick-700 text-white font-bold shadow-sm"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? "text-desert-300" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 font-bold ${
                        item.alert && item.count > 0
                          ? "bg-emerald-500 text-slate-950 animate-pulse"
                          : isActive
                          ? "bg-brick-800 text-white"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Global Operations & Backup Bar */}
        <div className="p-4 border-t border-slate-800 space-y-2 bg-slate-950/50">
          <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-2">
            أدوات النسخ الاحتياطي والمزامنة:
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
              title="تصدير نسخة احتياطية من كافة البيانات"
            >
              <Download className="w-3.5 h-3.5 text-desert-400" />
              <span>تصدير JSON</span>
            </button>

            <label className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 cursor-pointer transition-colors">
              <Upload className="w-3.5 h-3.5 text-petroleum-400" />
              <span>استيراد</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="text-[11px] text-slate-400 hover:text-rose-400 font-mono flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>استعادة الافتراضي</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="text-[11px] text-desert-400 hover:text-desert-300 font-mono flex items-center gap-1 transition-colors"
            >
              <span>معاينة الموقع</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 p-2 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 text-xs font-mono border border-rose-800/50 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50 min-h-screen">
        {/* Floating Notification Toast */}
        {notification && (
          <div className="fixed top-4 left-4 z-50 bg-slate-900 text-white px-4 py-3 border-2 border-desert-500 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top duration-300 font-mono text-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>{notification}</span>
          </div>
        )}

        <div className="p-4 sm:p-6 lg:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
