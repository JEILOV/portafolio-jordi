// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const INDEX = [
  { href: "/#inicio", code: "00", label: "inicio" },
  { href: "/work", code: "01", label: "work" },
  { href: "/lab", code: "02", label: "lab" },
  { href: "/#contacto", code: "03", label: "contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 border border-hairline bg-panel/95 px-3 py-2 font-display text-[11px] uppercase tracking-widest text-ink-muted">
      <span className="mr-2 hidden text-phosphor-cool sm:inline">system</span>
      {INDEX.map((item) => {
        const isActive = item.href.startsWith("/#") ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-1.5 transition-colors hover:text-phosphor ${
              isActive ? "text-phosphor" : ""
            }`}
          >
            <span className="text-ink-muted/60">{item.code}</span> {item.label}
          </Link>
        );
      })}
    </nav>
  );
}