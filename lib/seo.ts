import { Metadata } from "next";

export const siteConfig = {
  name: "مكتب إنشاء للهندسة | استشارات وتصميم معماري وإنشائي",
  shortName: "مكتب إنشاء للهندسة",
  englishName: "Engineering Establishment Office (IE) - Eng. Emad El-Din Amin",
  url: "https://inshaa-engineering.vercel.app",
  ogImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  description: "مكتب إنشاء للهندسة بإشراف مهندس استشاري / عماد الدين أمين. خبرة رائدة في التصميم المعماري والإنشائي، استخراج تراخيص البناء بمحافظة الفيوم، مدينة 6 أكتوبر، الشيخ زايد، العاصمة الإدارية، والإشراف الهندسي الميداني الدقيق.",
  address: {
    streetAddress: "منطقة المسلة، بالقرب من ديوان عام المحافظة",
    addressLocality: "مدينة الفيوم",
    addressRegion: "الفيوم والجيزة والقاهرة",
    postalCode: "63511",
    addressCountry: "EG",
  },
  geo: {
    latitude: 29.3084,
    longitude: 30.8428,
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
      "مكتب إنشاء للهندسة",
      "مهندس عماد الدين أمين",
      "مكتب استشارات هندسية الفيوم",
      "تصميم معماري وإنشائي الفيوم",
      "تراخيص بناء 6 أكتوبر",
      "تصميم فلل الشيخ زايد",
      "استشاري هندسي العاصمة الإدارية",
      "إشراف هندسي على صب الخرسانة",
      "مقايسات وحساب كميات BOQ",
      "كود البناء المصري ECP",
      "Engineering Establishment Office",
    ],
    authors: [
      {
        name: "م. عماد الدين أمين - مهندس استشاري معتمد",
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
