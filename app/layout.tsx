import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "慧清能源 | 光伏逆变器与组件供应商",
  description: "慧清能源——专注光伏逆变器与组件的可靠供应商，提供高效、安全、易于运维的光伏产品与解决方案。",
  icons: { icon: "/favicon.ico" },
  keywords: ["光伏", "逆变器", "组件", "太阳能", "分布式光伏", "储能"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
