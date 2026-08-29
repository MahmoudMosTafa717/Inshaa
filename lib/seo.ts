import { Metadata } from "next";

export const siteConfig = {
  name: "مكتب إنشاء للاستشارات الهندسية والتصميم المعماري",
  shortName: "إنشاء للاستشارات الهندسية",
  englishName: "Inshaa Engineering Consultancy & Architectural Studio",
  url: "https://inshaa-engineering.vercel.app",
  ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  description: "مكتب استشارات هندسية معتمد من نقابة المهندسين المصرية. متخصصون في التصميم المعماري والإنشائي، استخراج تراخيص البناء بالتجمع الخامس والشيخ زايد والعاصمة الإدارية، والإشراف الهندسي الميداني الدقيق على التنفيذ.",
  address: {
    streetAddress: "شارع التسعين الشمالي، التجمع الخامس",
    addressLocality: "القاهرة الجديدة",
    addressRegion: "القاهرة",
    postalCode: "11835",
    addressCountry: "EG",
  },
  geo: {
    latitude: 30.0279,
    longitude: 31.4913,
  },
  telephone: "+20 100 123 4567",
  email: "info@inshaa-engineering.com",
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = canonicalUrl ? `${siteConfig.url}${canonicalUrl}` : siteConfig.url;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description,
    keywords: [
      "مكتب استشارات هندسية",
      "مكتب هندسي التجمع الخامس",
      "تصميم معماري فلل مصر",
      "استخراج تراخيص بناء الشيخ زايد",
      "تصميم إنشائي معتمد",
      "مهندس استشاري نقابة المهندسين المصرية",
      "إشراف هندسي على التنفيذ",
      "مقايسات وحساب كميات BOQ",
      "كود البناء المصري",
      "تصميم كهروميكانيكي MEP",
      "Inshaa Engineering Consultancy",
    ],
    authors: [
      {
        name: "د.م. طارق عبد الرحمن - مهندس استشاري",
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "ar_EG",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@inshaa_eng",
    },
    metadataBase: new URL(siteConfig.url),
  };
}
