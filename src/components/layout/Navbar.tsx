// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#proyectos", label: "Portfolio" },
  { href: "#sobre-mi", label: "About Me" },
  { href: "#stack", label: "Tech Stack" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${scrolled ? "bg-bg-base/80 backdrop-blur-md border-b border-border-subtle py-4" : "bg-transparent"}`}>
      <a href="#" className="font-display text-lg font-bold tracking-tight text-text-primary">
        Jordi<span className="text-accent-primary">.</span>
      </a>

      <div className="hidden gap-8 text-sm text-text-secondary md:flex">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-text-primary transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <a href="#contacto" className="hidden rounded-full border border-accent-primary px-5 py-2 text-sm font-medium text-accent-primary transition-all hover:bg-accent-primary hover:text-bg-base animate-glow-pulse md:block">
        Contact
      </a>

      <button onClick={() => setMobileOpen(true)} className="text-text-primary md:hidden" aria-label="Abrir menú">
        <Menu size={24} />
      </button>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-bg-base md:hidden">
          <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-8 text-text-primary" aria-label="Cerrar menú">
            <X size={28} />
          </button>

          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="font-display text-3xl font-bold text-text-primary">
              {link.label}
            </a>
          ))}

          <a href="#contacto" onClick={() => setMobileOpen(false)} className="mt-4 rounded-full border border-accent-primary px-6 py-3 text-base font-medium text-accent-primary">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}