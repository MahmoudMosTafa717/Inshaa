import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsTicker } from "@/components/home/StatsTicker";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { InteractiveBimViewer } from "@/components/home/InteractiveBimViewer";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { CostEstimatorWidget } from "@/components/home/CostEstimatorWidget";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "مكتب إنشاء للاستشارات الهندسية والتصميم المعماري | التجمع الخامس والشيخ زايد",
  description: "مكتب استشارات هندسية معتمد في مصر. تصميم معماري وإنشائي للفيلات والمشروعات التجارية، استخراج تراخيص البناء، إشراف هندسي ميداني، ومقايسات كميات دقيقة.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <div className="flex flex-col min-h-screen">
        {/* 1. Hero Section with Interactive Blueprint Grid */}
        <HeroSection />

        {/* 2. Key Trust Stats & Metrics */}
        <StatsTicker />

        {/* 3. Core 6-Pillar Services Grid */}
        <ServicesGrid />

        {/* 4. Interactive BIM/CAD Layer Switcher (21st.dev style) */}
        <InteractiveBimViewer />

        {/* 5. Filterable Projects & Case Studies */}
        <PortfolioSection />

        {/* 6. Real-Time Construction Cost Estimator Widget */}
        <CostEstimatorWidget />

        {/* 7. Consulting Engineering Team & Syndicate Registration */}
        <TeamSection />

        {/* 8. Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 9. Final High-Impact Consultation Booking CTA */}
        <ConsultationCta />
      </div>
    </>
  );
}
