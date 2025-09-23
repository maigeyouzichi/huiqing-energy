"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkClass = (href: string) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === href ? "bg-emerald-100 text-emerald-800" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" aria-label="慧清能源">
            <Image src="/logo.png" alt="慧清能源" width={120} height={40} priority />
          </Link>
        </div>
        <nav className="hidden sm:flex items-center gap-2">
          <Link href="/" className={linkClass("/")}>首页</Link>
          <Link href="/download" className={linkClass("/download")}>资料下载</Link>
          <Link href="/contact" className={linkClass("/contact")}>联系我们</Link>
          <a
            href="https://app.huawei.com/escpportal/pub/wechat.html?Language=CN&appName=escp&buType=2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300"
          >
            质保查询
          </a>
        </nav>
        <Image src="/menu.png" className="sm:hidden" alt="菜单" width={30} height={30} priority onClick={() => setOpen((v) => !v)} />
      </div>
      {open && (
        <div className="sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>首页</Link>
            <Link href="/download" className={linkClass("/download")} onClick={() => setOpen(false)}>资料下载</Link>
            <Link href="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>联系我们</Link>
            <a
              href="https://app.huawei.com/escpportal/pub/wechat.html?Language=CN&appName=escp&buType=2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 block"
              onClick={() => setOpen(false)}
            >
              质保查询
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


