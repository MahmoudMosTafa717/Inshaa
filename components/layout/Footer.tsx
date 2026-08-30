import React from "react";
import Link from "next/link";
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award,
  ArrowUpLeft,
  FileText
} from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { servicesData } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-amber-600">
      {/* Top Technical Certification Banner */}
      <div className="border-b border-slate-800 py-8 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">اعتماد نقابة المهندسين المصرية</h4>
                <p className="text-xs text-slate-400 font-mono">سجل استشاري رقم 1248/خ - استشارات منشآت خرسانية</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blueprint-500/10 border border-blueprint-500/30 flex items-center justify-center text-blueprint-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">كود البناء المصري الموحد ECP</h4>
                <p className="text-xs text-slate-400">مطابقة اشتراطات أجهزة المدن الجديدة والمجمعة العشرية</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">توثيق العقود والتأمين الهندسي</h4>
                <p className="text-xs text-slate-400">عقود رسمية ملزمة بضمان سلامة الهيكل الإنشائي</p>
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
              <div className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight font-display">
                  مكتب إنـشــاء للاستشارات الهندسية
                </span>
                <p className="text-xs text-amber-400 font-mono">
                  INSHAA CONSULTING & ARCHITECTURE
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              بيت خبرة واستشارات هندسية معتمد يقدم خدمات التصميم المعماري والإنشائي، واستخراج تراخيص البناء، والإشراف الهندسي الميداني الدقيق على تنفيذ الفيلات والمشروعات التجارية والإدارية في جمهورية مصر العربية.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <p>• السجل التجاري: 189422 - بطاقة ضريبية: 492-108-765</p>
              <p>• عضو الاتحاد الإفريقي للمهندسين الاستشاريين (FCIC)</p>
            </div>
          </div>

          {/* Col 3: Services links */}
          <div>
            <h3 className="text-white font-bold text-sm font-display mb-4 border-r-2 border-amber-500 pr-2">
              الخدمات الهندسية
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-500 font-mono text-xs">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Coverage locations & fast links */}
          <div>
            <h3 className="text-white font-bold text-sm font-display mb-4 border-r-2 border-amber-500 pr-2">
              مناطق التغطية والعمل
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  فيلات التجمع الخامس والقاهرة الجديدة
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  مشروعات الشيخ زايد و 6 أكتوبر
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  أبراج ومباني العاصمة الإدارية
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  فيلات الساحل الشمالي والعلمين
                </Link>
              </li>
              <li className="pt-3">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium font-mono text-xs"
                >
                  <span>حاسبة تكاليف المشروعات</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Office locations */}
          <div>
            <h3 className="text-white font-bold text-sm font-display mb-4 border-r-2 border-amber-500 pr-2">
              الفروع والتواصل
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>المقر الرئيسي:</strong> شارع التسعين الشمالي، مركز المدينة، التجمع الخامس، القاهرة الجديدة.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>فرع غرب القاهرة:</strong> بيفرلي هيلز، محور البستان، الشيخ زايد، الجيزة.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+201001234567" className="font-mono hover:text-white">
                  +20 100 123 4567 / 02 2814 9000
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:info@inshaa-engineering.com" className="font-mono hover:text-white">
                  info@inshaa-engineering.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>الأحد - الخميس: 9:00 ص - 6:00 م</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Technical Signature */}
      <div className="border-t border-slate-800/80 py-5 bg-slate-950 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} مكتب إنشاء للاستشارات الهندسية والتصميم المعماري.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <Link href="/about" className="hover:text-slate-400">عن المكتب</Link>
            <Link href="/services" className="hover:text-slate-400">الخدمات</Link>
            <Link href="/llms.txt" className="text-amber-500/80 hover:text-amber-400">llms.txt (AI Index)</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
