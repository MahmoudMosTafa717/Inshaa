import React from "react";
import { siteConfig } from "@/lib/seo";

interface JsonLdProps {
  type?: "Organization" | "LocalBusiness" | "WebSite" | "FAQPage" | "Service" | "Project";
  data?: Record<string, any>;
}

export function JsonLd({ type = "Organization", data }: JsonLdProps) {
  let schemaData: Record<string, any> = {};

  if (type === "Organization" || type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": ["EngineeringService", "ProfessionalService", "LocalBusiness"],
      name: siteConfig.name,
      alternateName: siteConfig.englishName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo.png`,
      image: siteConfig.ogImage,
      description: siteConfig.description,
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "EGP, USD",
      paymentAccepted: "Bank Transfer, Cash",
      areaServed: [
        "New Cairo",
        "Sheikh Zayed",
        "New Administrative Capital",
        "6th of October",
        "North Coast",
        "Cairo",
        "Giza",
        "Egypt",
      ],
      knowsAbout: [
        "Architectural Design",
        "Structural Engineering",
        "Egyptian Building Code (ECP)",
        "Building Permits & Licenses",
        "BIM Modeling",
        "Site Supervision",
        "Quantity Surveying & BOQ",
      ],
      ...data,
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "ar-EG",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/projects?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      ...data,
    };
  } else if (type === "FAQPage") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data?.faqs?.map((faq: { question: string; answer: string }) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })) || [],
    };
  } else if (type === "Service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      provider: {
        "@type": "EngineeringService",
        name: siteConfig.name,
      },
      ...data,
    };
  } else if (type === "Project") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      creator: {
        "@type": "EngineeringService",
        name: siteConfig.name,
      },
      ...data,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
