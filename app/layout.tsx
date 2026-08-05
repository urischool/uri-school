import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FloatingConsult } from "@/components/FloatingConsult";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} - 학교별 맞춤 내신관리 과외`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(site.url),
  verification: {
    other: {
      "naver-site-verification": "f6ed2e4022b9cd0a483667acf6cdfe4d2b482725"
    }
  }
};


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "우리학교과외",
  alternateName: ["My School Private Lesson", "학교별 내신관리 과외"],
  url: site.url,
  inLanguage: "ko-KR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url.replace(/\/$/, "")}/schools/{search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "우리학교과외",
  url: site.url,
  description: "국제고, 외고, 과학고, 전국단위 자사고 등 학교별 내신 대비와 수행평가 관리를 제공하는 1:1 과외 서비스",
  areaServed: "대한민국",
  knowsAbout: [
    "학교별 내신관리",
    "국제고 내신",
    "외고 내신",
    "과학고 내신",
    "전국단위 자사고 내신",
    "수행평가 관리"
  ]
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <FloatingConsult />
        <Footer />
      </body>
    </html>
  );
}


