import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://njretail-homepage.vercel.app"),
  title: {
    default: "엔제이리테일 | 무인매장 창업 컨설팅",
    template: "%s | 엔제이리테일",
  },
  description: "무인매장 창업, 인테리어, 상품구성, 운영시스템, 판매운영까지 한 번에 지원하는 엔제이리테일 공식 홈페이지입니다.",
  openGraph: {
    title: "엔제이리테일 | 무인매장 창업 컨설팅",
    description: "무인매장 창업, 운영, 시스템 구축을 한 번에 설계하는 전문 컨설팅 기업입니다.",
    type: "website",
    images: [
      {
        url: "/store-dashboard.png",
        width: 1536,
        height: 1024,
        alt: "엔제이리테일 매장 운영 대시보드",
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#FAFAFA] text-slate-700">{children}</body>
    </html>
  );
}
