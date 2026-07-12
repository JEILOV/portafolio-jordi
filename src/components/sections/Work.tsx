// src/components/sections/Work.tsx
import Link from "next/link";
import { getHomeCaseStudies, getHomeFeatured } from "@/lib/constants";
import ProductChapter from "@/components/work/ProductChapter";
import FeaturedCard from "@/components/work/FeaturedCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function Work() {
  const caseStudies = await getHomeCaseStudies();
  const featured = await getHomeFeatured();

  return (
    <section id="work" className="relative">
      <SectionHeader eyebrow="n.º 01 / work" title="Selected Work" />

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