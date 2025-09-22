"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  const linkClass = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === href ? "bg-black/[.06]" : "hover:bg-black/[.04]"
    }`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-black/[.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-base sm:text-lg font-semibold tracking-tight">
          慧清能源
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/" className={linkClass("/")}>首页</Link>
          <Link href="/products" className={linkClass("/products")}>产品</Link>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium bg-foreground text-background hover:opacity-90">联系我们</a>
        </nav>
      </div>
    </header>
  );
}


