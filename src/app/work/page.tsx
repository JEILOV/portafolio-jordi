// src/app/work/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { getAllCaseStudies, getAllFeatured } from "@/lib/constants";
import FeaturedCard from "@/components/work/FeaturedCard";

export const metadata: Metadata = {
  title: "Work — jordi.dev",
  description: "Todo el trabajo: casos de estudio y proyectos destacados.",
};

export default function WorkIndexPage() {
  const caseStudies = getAllCaseStudies();
  const featured = getAllFeatured();

  return (
    <main className="min-h-screen pb-32">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-8 md:px-14">
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-phosphor">work — índice</p>
          <h1 className="mt-2 font-display text-2xl text-ink md:text-3xl">Todo el trabajo</h1>
        </div>
        <Link
          href="/"
          className="font-display text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-phosphor"
        >
          ← inicio
        </Link>
      </div>

      <section className="px-6 py-14 md:px-14">
        <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">
          casos de estudio
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {caseStudies.map((product) => (
            <Link
              key={product.id}
              href={`/work/${product.id}`}
              className="chamfer group block overflow-hidden border border-hairline bg-panel transition-colors hover:border-phosphor-cool/60"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover video-graded transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/85 via-bg-base/10 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h2 className="font-display text-xl text-ink md:text-2xl">{product.name}</h2>
                  <p className="mt-1 text-sm text-ink-muted">{product.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="border-t border-hairline px-6 py-14 md:px-14">
          <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">
            destacados
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {featured.map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}