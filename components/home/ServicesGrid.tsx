import React from "react";
import Link from "next/link";
import { 
  Compass, 
  Boxes, 
  HardHat, 
  Cpu, 
  Palette, 
  FileSpreadsheet,
  ArrowUpLeft,
  Check
} from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { FadeInView } from "@/components/motion/FadeInView";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Boxes,
  HardHat,
  Cpu,
  Palette,
  FileSpreadsheet,
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-paper-50 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          tag="الخدمات الاستشارية المتكاملة"
          title="خدمات استشارية معتمدة تغطي كافة مراحل مشروعك"
          subtitle="من أول فكرة التصميم المعماري واستخراج التراخيص بالفيوم وأكتوبر وزايد، وحتى الحسابات الإنشائية والإشراف الميداني الصارم واستلام الأعمال."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || Compass;
            return (
              <FadeInView key={service.id} delay={idx * 0.08}>
                <Card
                  variant="default"
                  className="h-full flex flex-col justify-between hover:border-brick-700 group transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brick-700 bg-brick-50 px-2.5 py-1 border border-brick-300">
                        {service.number} {"//"} تخصص
                      </span>
                      <div className="w-12 h-12 bg-paper-100 group-hover:bg-brick-700 group-hover:text-white transition-colors border border-paper-300 flex items-center justify-center text-slate-800">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-display group-hover:text-brick-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {service.shortDescription}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="border-t border-paper-200 pt-4 space-y-2">
                      <span className="text-[11px] font-mono text-slate-500 font-bold uppercase">
                        المخرجات والتسليمات الهندسية:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                        {service.deliverables.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="bg-paper-100/60 border-t border-paper-200">
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      كود مصري ECP
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-brick-700 transition-colors font-display"
                    >
                      <span>تفاصيل ومراحل العمل</span>
                      <ArrowUpLeft className="w-4 h-4 text-brick-600" />
                    </Link>
                  </CardFooter>
                </Card>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
