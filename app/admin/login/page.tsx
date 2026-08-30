"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Lock, KeyRound, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useAdminAuth } from "@/lib/admin/auth";
import { Button } from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAdminAuth();
  const [pinOrPass, setPinOrPass] = useState("");
  const [error, setError] = useState(false);

  // If already authenticated, redirect to /admin
  React.useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(pinOrPass);
    if (success) {
      router.push("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background blueprint grid styling */}
      <div className="absolute inset-0 bg-grid-dense opacity-10" />

      <div className="relative max-w-md w-full bg-white border-2 border-slate-900 p-8 sm:p-10 cad-border shadow-2xl space-y-6 z-10 text-right">
        {/* Brand header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-desert-500 flex items-center justify-center mx-auto shadow-md">
            <span className="text-xl font-black text-desert-400 font-mono">IE</span>
          </div>

          <div>
            <h1 className="text-2xl font-black text-slate-900 font-display">
              بوابة الدخول الإدارية
            </h1>
            <p className="text-xs text-slate-500 font-mono mt-1">
              مكتب إنشاء للهندسة • مهندس استشاري / عماد الدين أمين
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-300 text-rose-900 text-xs font-mono flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>رمز الدخول أو كلمة المرور غير صحيحة. يرجى المحاولة مجدداً.</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold font-mono text-slate-700 mb-1.5">
              أدخل رمز الأمان (PIN) أو كلمة مرور المشرف:
            </label>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                placeholder="••••••"
                value={pinOrPass}
                onChange={(e) => {
                  setPinOrPass(e.target.value);
                  setError(false);
                }}
                className="w-full p-3.5 bg-paper-50 border-2 border-slate-300 focus:border-brick-700 focus:ring-0 text-center font-mono text-lg tracking-widest"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <p className="text-[11px] text-slate-500 font-mono mt-1.5 text-center">
              رمز الدخول الافتراضي: <code className="text-brick-700 font-bold font-mono">1248</code> أو <code className="text-brick-700 font-bold font-mono">inshaa-admin-2026</code>
            </p>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold font-display"
          >
            <KeyRound className="w-4 h-4 ml-2 text-desert-300" />
            <span>تسجيل الدخول وإدارة الموقع</span>
          </Button>
        </form>

        <div className="pt-4 border-t border-slate-200 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-brick-700 font-mono transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>العودة للموقع العام للزوار</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
