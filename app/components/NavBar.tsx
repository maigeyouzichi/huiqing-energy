"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkClass = (href: string) =>
    `px-4 py-3 rounded-md text-sm font-medium ${
      pathname === href ? "bg-black/[.06]" : "hover:bg-black/[.04]"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2" aria-label="慧清能源">
            <Image src="/logo.svg" alt="慧清能源" width={120} height={32} priority />
          </Link>
        </div>
        <nav className="hidden sm:flex items-center gap-2">
          <Link href="/" className={linkClass("/")}>首页</Link>
        </nav>
        <button
          className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-black/[.05]"
          aria-label="打开菜单"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-[2px] bg-black mb-1"></span>
          <span className="block w-5 h-[2px] bg-black mb-1"></span>
          <span className="block w-5 h-[2px] bg-black"></span>
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-[var(--color-border)] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col">
            <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>首页</Link>
          </div>
        </div>
      )}
    </header>
  );
}


