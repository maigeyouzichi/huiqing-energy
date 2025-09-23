"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkClass = (href: string) =>
    `px-4 py-2 rounded-md text-sm font-medium ${pathname === href ? "bg-black/[.06]" : "hover:bg-black/[.04]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-border)]">
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
            className="px-4 py-2 rounded-md text-sm font-medium hover:bg-black/[.04]"
          >
            质保查询
          </a>
        </nav>
        <Image src="/menu.png" className="sm:hidden" alt="菜单" width={30} height={30} priority onClick={() => setOpen((v) => !v)} />
      </div>
      {open && (
        <div className="sm:hidden border-t border-[var(--color-border)] bg-white">
          <div className="max-w-7xl mx-auto px-2 mt-2 flex flex-col">
            <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>首页</Link>
          </div>
          <div className="max-w-7xl mx-auto px-2 mt-2 flex flex-col">
            <Link href="/download" className={linkClass("/download")} onClick={() => setOpen(false)}>资料下载</Link>
          </div>
          <div className="max-w-7xl mx-auto px-2 mt-2 flex flex-col">
            <Link href="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>联系我们</Link>
          </div>
          <div className="max-w-7xl mx-auto px-2 mt-2 flex flex-col">
            <a
              href="https://app.huawei.com/escpportal/pub/wechat.html?Language=CN&appName=escp&buType=2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-black/[.04]"
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


