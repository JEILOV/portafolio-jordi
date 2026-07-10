// src/components/sections/TechStack.tsx
import LazyVideo from "@/components/ui/LazyVideo";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  const categories = Array.from(new Set(TECH_STACK.map((t) => t.category)));

  return (
    <section id="stack" className="relative overflow-hidden py-24">
      <LazyVideo webmSrc="/videos/cookie-multi-pc-original.webm" mp4Src="/videos/cookie-multi-pc-original.mp4" poster="/images/gato-dia.png" alt="Cookie trabajando con múltiples computadoras" className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 bg-bg-base/67" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <h2 className="font-display text-4xl font-bold text-text-primary">
          Tech stack<span className="text-accent-primary">.</span>
        </h2>
        <p className="mt-2 max-w-lg text-text-secondary">
          Las herramientas que uso para construir soluciones funcionales, seguras y sin sobre-ingeniería.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.filter((t) => t.category === category).map((tech) => (
                  <span key={tech.name} className="rounded-full border border-border-subtle bg-bg-card px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}