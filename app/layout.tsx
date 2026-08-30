import type { Metadata, Viewport } from "next";
import { Alexandria, Cairo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { constructMetadata } from "@/lib/seo";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} ${cairo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="author" href="https://inshaa-engineering.vercel.app/about" />
        <meta name="geo.region" content="EG-FYM" />
        <meta name="geo.placename" content="Fayoum, 6th of October, Sheikh Zayed, New Cairo" />
        <meta name="geo.position" content="29.3084;30.8428" />
        <meta name="ICBM" content="29.3084, 30.8428" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-brick-700 selection:text-white">
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
        
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
