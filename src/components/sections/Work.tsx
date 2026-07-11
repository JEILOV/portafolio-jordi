// src/components/sections/Work.tsx
import Link from "next/link";
import { getHomeCaseStudies, getHomeFeatured } from "@/lib/constants";
import ProductChapter from "@/components/work/ProductChapter";
import FeaturedCard from "@/components/work/FeaturedCard";

export default function Work() {
  const caseStudies = getHomeCaseStudies();
  const featured = getHomeFeatured();

  return (
    <section id="work" className="relative">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-6 md:px-14">
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">n.º 01 / work</p>
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">selected work</p>
      </div>

      {caseStudies.map((product, i) => (
        <ProductChapter key={product.id} product={product} index={i + 1} />
      ))}

      {featured.length > 0 && (
        <div className="border-t border-hairline px-6 py-14 md:px-14 md:py-20">
          <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">featured</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featured.map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-hairline px-6 py-8 md:px-14">
        <Link
          href="/work"
          className="font-display text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-phosphor"
        >
          ver todo el trabajo →
        </Link>
      </div>
    </section>
  );
}