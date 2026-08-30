"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  PhoneCall, 
  Menu, 
  X, 
  Compass, 
  Calculator, 
  MessageSquare,
  Sparkles,
  ArrowUpLeft
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/seo";

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
      {/* Top Engineering Syndicate ticker bar */}
      <header className="bg-slate-900 text-slate-300 text-xs py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              سجل استشاري نقابة المهندسين المصرية رقم 1248/خ
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              اعتمادات أجهزة: التجمع الخامس • الشيخ زايد • العاصمة الإدارية • 6 أكتوبر
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+201001234567"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-mono transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-amber-500" />
              <span>0100 123 4567 (20+)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main sticky navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
            : "bg-white border-b border-slate-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 text-amber-500 flex items-center justify-center font-bold text-xl border-2 border-slate-900 group-hover:bg-amber-600 group-hover:text-white transition-all">
              <Compass className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight font-display flex items-center gap-1.5">
                مكتب إنـشــاء
                <span className="text-xs px-1.5 py-0.5 bg-amber-100 text-amber-900 font-mono font-normal">
                  استشاري
                </span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                للاستشارات الهندسية والتصميم المعماري
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
                  className={`px-3 py-2 text-sm font-medium transition-all relative ${
                    isActive
                      ? "text-amber-700 font-semibold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="mr-1.5 text-[10px] bg-amber-500 text-white px-1.5 py-0.2 font-mono">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-3 h-0.5 bg-amber-600" />
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
              className="font-mono text-xs hidden md:inline-flex"
            >
              <Calculator className="w-3.5 h-3.5 ml-1 text-amber-600" />
              احسب مقايستك
            </Button>

            <Button
              variant="amber"
              size="sm"
              href="/contact"
              className="text-xs"
            >
              <span>احجز استشارة معتمدة</span>
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
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 text-base font-medium flex items-center justify-between ${
                      isActive
                        ? "bg-amber-50 text-amber-900 border-r-4 border-amber-600 font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-xs bg-amber-600 text-white px-2 py-0.5 font-mono">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <Button
                variant="amber"
                size="md"
                href="/contact"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>طلب استشارة هندسية ومراجعة مخطط</span>
                <ArrowUpLeft className="w-4 h-4 mr-1.5" />
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/calculator"
                className="w-full justify-center font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calculator className="w-4 h-4 ml-2 text-amber-600" />
                حاسبة المقايسات وتكلفة البناء
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
