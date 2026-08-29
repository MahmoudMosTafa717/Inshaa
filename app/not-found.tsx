import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home, Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-paper-50 min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white border-2 border-slate-900 p-8 text-center cad-border shadow-2xl space-y-6">
        <div className="w-16 h-16 bg-amber-100 border-2 border-amber-600 text-amber-800 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 border border-amber-200">
            ERROR 404 // OUT OF BOUNDS
          </span>
          <h1 className="text-3xl font-bold text-slate-900 font-display">
            الصفحة غير موجودة في المخطط
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            يبدو أن الرابط الذي طلبته غير متاح أو تم نقل المخطط إلى قسم آخر. يمكنك العودة للصفحة الرئيسية أو تصفح الخدمات.
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button variant="primary" size="md" href="/" className="w-full justify-center">
            <Home className="w-4 h-4 ml-2" />
            <span>العودة للصفحة الرئيسية</span>
          </Button>

          <Button variant="outline" size="md" href="/services" className="w-full justify-center">
            <span>دليل الخدمات الهندسية</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
