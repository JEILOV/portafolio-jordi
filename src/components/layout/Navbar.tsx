// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const INDEX = [
  { href: "/#inicio", id: "inicio", code: "00", label: "inicio" },
  { href: "/work", id: "work", code: "01", label: "work" },
  { href: "/lab", id: "lab", code: "02", label: "lab" },
  { href: "/#contacto", id: "contacto", code: "03", label: "contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = INDEX
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 border border-hairline bg-panel/95 px-3 py-2 font-display text-[11px] uppercase tracking-widest text-ink-muted">
      <span className="mr-2 hidden text-phosphor-cool sm:inline">system</span>
      {INDEX.map((item) => {
        const isActive =
          pathname === "/" ? activeSection === item.id : pathname.startsWith(item.href);
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