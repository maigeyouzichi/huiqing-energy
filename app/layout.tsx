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
  description: "慧清能源——华为逆变器金牌 + 三钻伙伴。专注光伏逆变器与组件，提供高效、安全、易运维的产品与解决方案。",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  keywords: ["光伏", "逆变器", "组件", "太阳能", "分布式光伏", "储能"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
