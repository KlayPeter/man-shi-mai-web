import type { Metadata } from "next";
import "./globals.css";
import { SEO } from "@/constants/seo";
import AuthPromptModal from "@/components/AuthPromptModal";

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: '%s | 面试汪',
  },
  description: SEO.defaultDescription,
  keywords: SEO.defaultKeywords,
  authors: [{ name: SEO.author }],
  openGraph: {
    type: 'website',
    locale: SEO.locale,
    url: SEO.siteUrl,
    siteName: SEO.siteName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [
      {
        url: SEO.ogImage,
        width: SEO.ogImageWidth,
        height: SEO.ogImageHeight,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SEO.twitterSite,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <AuthPromptModal />
      </body>
    </html>
  );
}
