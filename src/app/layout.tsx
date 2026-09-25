import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { cafeData } from "@/data/cafe";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(cafeData.seo.siteUrl),
  title: {
    default: cafeData.seo.title,
    template: `%s | ${cafeData.name}`,
  },
  description: cafeData.seo.description,
  keywords: cafeData.seo.keywords,
  authors: [{ name: cafeData.name }],
  creator: cafeData.name,
  publisher: cafeData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: cafeData.seo.title,
    description: cafeData.seo.description,
    url: cafeData.seo.siteUrl,
    siteName: cafeData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: cafeData.story.images[0].url,
        width: 1200,
        height: 630,
        alt: `${cafeData.name} Surabaya`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cafeData.seo.title,
    description: cafeData.seo.description,
    images: [cafeData.story.images[0].url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1917] antialiased selection:bg-[#845D3E] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#1C1917] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-2 focus:outline-[#845D3E] text-sm font-medium"
        >
          Lewati ke konten utama
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
