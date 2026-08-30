import React from "react";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { CostEstimatorWidget } from "@/components/home/CostEstimatorWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { HelpCircle, Calculator, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "حاسبة تكلفة وتصميم المشروعات الهندسية في مصر 2025/2026",
  description: "أداة هندسية تفاعلية مجانية لحساب أتعاب التصميم المعماري والإنشائي، تكاليف استخراج التراخيص، وأتعاب الإشراف الميداني على تنفيذ الفيلات والعمارات بمصر.",
  canonicalUrl: "/calculator",
});

export default function CalculatorPage() {
  const estimatorFaqs = [
    {
      question: "كيف يتم احتساب أتعاب التصميم المعماري والإنشائي في مصر؟",
      answer: "تُحتسب أتعاب التصميم الاستشاري عادة بالمتر المربع من إجمالي مسطح المباني (Built-Up Area) أو كنسبة مئوية من تكلفة التشييد التقديرية طبقاً للائحة أتعاب نقابة المهندسين المصرية.",
    },
    {
      question: "ماذا تشمل أتعاب الإشراف الهندسي على التنفيذ؟",
      answer: "تشمل زيارات دورية أو مهندساً مقيماً بالموقع لمطابقة أعمال الحفر، استلام حدادة ونجارة القواعد والأعمدة والأسقف، حضور صب الخرسانة الجاهزة وأخذ مكعبات الاختبار المعملية، ومراجعة مستخلصات المقاولين.",
    },
    {
      question: "هل يلتزم المكتب بتقديم مقايسة كميات BOQ تفصيلية؟",
      answer: "نعم، تتضمن باقة التصميم المتكاملة كراسة حصر كميات دقيقة جداً لحديد التسليح، الخرسانات، أعمال المباني، العزل، والتشطيبات لحمايتك من أي مطالبات مالية إضافية.",
    },
  ];

  return (
    <>
      <JsonLd type="FAQPage" data={{ faqs: estimatorFaqs }} />

      <div className="bg-paper-50 min-h-screen py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          {/* Header Banner */}
          <div className="text-right max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100 px-3 py-1 border border-amber-300 inline-block mb-3">
              {"//"} الأداة الهندسية التفاعلية
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              حاسبة تكاليف ومقايسات المشروعات الهندسية بمصر
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              احسب التكلفة التقديرية لأتعاب التصميم المعماري، الحسابات الإنشائية، الإشراف الميداني، وميزانية التشييد المتوقعة بدقة وشفافية.
            </p>
          </div>
        </div>

        {/* Embedded Interactive Widget */}
        <CostEstimatorWidget />

        {/* Technical Explanations & FAQ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white border-2 border-slate-900 p-8 sm:p-12 cad-border shadow-soft-elevation">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-700 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>{"//"} كيف نحسب التكاليف الهندسية؟</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-8">
              الأسس الهندسية المعتمدة لاحتساب التكاليف والمقايسات
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {estimatorFaqs.map((faq, i) => (
                <div key={i} className="p-5 bg-paper-50 border border-slate-200">
                  <h3 className="font-bold text-base text-slate-900 mb-2 font-display">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-50 border border-amber-300 text-xs font-mono text-amber-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                ملاحظة هندسية: تخضع جميع الأسعار للائحة أتعاب نقابة المهندسين المصرية ومتوسط أسعار المواد المعتمدة بوزارة الإسكان.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
