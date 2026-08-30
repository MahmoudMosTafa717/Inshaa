"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowUpLeft, 
  FileText,
  Lock
} from "lucide-react";
import { useAdminData } from "@/lib/context/AdminDataContext";

export function Footer() {
  const pathname = usePathname();
  const { state } = useAdminData();
  const { identity, services } = state;

  // Don't render public footer on admin dashboard pages
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-brick-600">
      {/* Top Technical Certification Banner */}
      <div className="border-b border-slate-800 py-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brick-500/10 border border-brick-500/30 flex items-center justify-center text-brick-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm font-display">سجل استشاري نقابة المهندسين المصرية</h4>
                <p className="text-xs text-slate-400 font-mono">سجل رقم {identity.syndicateNumber}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-petroleum-500/10 border border-petroleum-500/30 flex items-center justify-center text-petroleum-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm font-display">مطابقة كود البناء المصري ECP</h4>
                <p className="text-xs text-slate-400">اعتمادات محافظة الفيوم، أجهزة 6 أكتوبر، زايد، والعاصمة</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm font-display">عقود ملزمة وتأمين هندسي</h4>
                <p className="text-xs text-slate-400">توثيق رسمي وإشراف ميداني صارم يضمن حقوق المالك</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Firm identity & intro */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-desert-500 flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-0.5">
                  <span className="text-xs font-black text-petroleum-900 font-mono">IE</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight font-display block">
                  {identity.name}
                </span>
                <p className="text-xs text-desert-400 font-mono">
                  {identity.leadConsultant}
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md pt-2 font-sans">
              {identity.description}
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <p>• {identity.syndicateNumber}</p>
              <p>• {identity.englishName}</p>
            </div>
          </div>

          {/* Col 3: Services links */}
          <div>
            <h3 className="text-white font-bold text-sm font-display mb-4 border-r-2 border-brick-500 pr-2">
              الخدمات الهندسية
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-desert-400 font-mono text-xs">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Coverage locations & fast links */}
          <div>
            <h3 className="text-white font-bold text-sm font-display mb-4 border-r-2 border-desert-500 pr-2">
              مناطق العمل الرئيسية
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {identity.primaryLocations.map((loc, idx) => (
                <li key={idx}>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    مشروعات {loc}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-1.5 text-desert-400 hover:text-desert-300 font-medium font-mono text-xs"
                >
                  <span>حاسبة تكاليف المشروعات</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Office locations */}
          <div>
            <h3 className="text-white font-bold text-sm font-display mb-4 border-r-2 border-brick-500 pr-2">
              الفروع والمقرات
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brick-500 shrink-0 mt-0.5" />
                <span>
                  <strong>المقر الرئيسي:</strong> {identity.fayoumAddress}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-desert-400 shrink-0 mt-0.5" />
                <span>
                  <strong>فرع غرب القاهرة:</strong> {identity.octoberAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brick-400 shrink-0" />
                <a href={`tel:${identity.phonePrimary.replace(/[^0-9+]/g, "")}`} className="font-mono hover:text-white">
                  {identity.phonePrimary} / {identity.phoneSecondary}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brick-400 shrink-0" />
                <a href={`mailto:${identity.email}`} className="font-mono hover:text-white">
                  {identity.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{identity.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Technical Signature */}
      <div className="border-t border-slate-800/80 py-5 bg-slate-950 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {identity.name} - {identity.leadConsultant}.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <Link href="/about" className="hover:text-slate-400">عن المكتب</Link>
            <Link href="/services" className="hover:text-slate-400">الخدمات</Link>
            <Link href="/admin" className="text-slate-400 hover:text-desert-400 flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>لوحة الإدارة</span>
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
