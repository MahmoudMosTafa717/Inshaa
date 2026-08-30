"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  PhoneCall, 
  Menu, 
  X, 
  Calculator, 
  MessageSquare,
  ArrowUpLeft,
  MapPin,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا الهندسية", href: "/services" },
    { name: "معرض المشروعات", href: "/projects" },
    { name: "حاسبة المقايسات", href: "/calculator", badge: "تفاعلية" },
    { name: "عن المكتب والاعتمادات", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  return (
    <>
      {/* Top Engineering Syndicate & Regional Presence Bar */}
      <header className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-desert-400 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              مكتب إنشاء للهندسة // م. عماد الدين أمين (سجل استشاري 1248/خ)
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-brick-500" />
              نطاق العمل: الفيوم (المقر الرئيسي) • 6 أكتوبر • الشيخ زايد • العاصمة الإدارية
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+201001234567"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-desert-400 font-mono text-xs transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-desert-400" />
              <span>0100 123 4567</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main sticky navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-paper-300 py-3"
            : "bg-paper-50 border-b border-paper-300 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity based on Notebook IE Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* IE Circular Crest Monogram */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-petroleum-950 border-2 border-desert-500 p-0.5 flex items-center justify-center shadow-md group-hover:border-brick-600 transition-colors">
              <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-1 relative overflow-hidden">
                <div className="flex items-center justify-center leading-none">
                  <span className="text-[14px] font-black text-petroleum-800 font-mono tracking-tighter">IE</span>
                </div>
                {/* Micro house and tower stylized graphic */}
                <div className="flex items-end justify-center gap-0.5 mt-0.5">
                  <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-brick-600 transform rotate-45" />
                  <div className="w-2 h-3.5 bg-petroleum-700" />
                </div>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display group-hover:text-brick-700 transition-colors">
                  مكتب إنـشــاء للـهـنـدسـة
                </span>
                <span className="text-[11px] px-2 py-0.5 bg-brick-50 text-brick-800 border border-brick-300 font-mono font-bold">
                  استشاري
                </span>
              </div>
              <span className="text-xs text-slate-600 font-mono">
                مهندس استشاري / <strong className="text-slate-900 font-semibold">عماد الدين أمين</strong>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold transition-all relative font-display ${
                    isActive
                      ? "text-brick-700 font-bold"
                      : "text-slate-700 hover:text-brick-700 hover:bg-paper-100"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="mr-1.5 text-[10px] bg-desert-600 text-white px-1.5 py-0.2 font-mono">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-3 h-0.5 bg-brick-600" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="/calculator"
              className="font-mono text-xs hidden md:inline-flex border-desert-600 text-desert-800 hover:bg-desert-50"
            >
              <Calculator className="w-3.5 h-3.5 ml-1 text-desert-600" />
              احسب مقايستك
            </Button>

            <Button
              variant="primary"
              size="sm"
              href="/contact"
              className="text-xs bg-brick-700 hover:bg-brick-800 border-brick-700 text-white shadow-architectural"
            >
              <span>حجز استشارة هندسية</span>
              <ArrowUpLeft className="w-4 h-4 mr-1" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-paper-50 border-b border-paper-300 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 text-base font-semibold font-display flex items-center justify-between ${
                      isActive
                        ? "bg-brick-50 text-brick-900 border-r-4 border-brick-600 font-bold"
                        : "text-slate-700 hover:bg-paper-100"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-xs bg-desert-600 text-white px-2 py-0.5 font-mono">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-paper-300 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                href="/contact"
                className="w-full justify-center bg-brick-700 hover:bg-brick-800 border-brick-700 text-white font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>طلب استشارة ومراجعة مخطط</span>
                <ArrowUpLeft className="w-4 h-4 mr-1.5" />
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/calculator"
                className="w-full justify-center font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calculator className="w-4 h-4 ml-2 text-desert-600" />
                حاسبة المقايسات وتكلفة البناء
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
