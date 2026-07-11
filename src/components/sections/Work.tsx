// src/components/sections/Work.tsx
import { PRODUCTS } from "@/lib/constants";
import ProductChapter from "@/components/work/ProductChapter";

export default function Work() {
  return (
    <section id="work" className="relative">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-6 md:px-14">
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">n.º 01 / work</p>
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">selected work</p>
      </div>
      {PRODUCTS.map((product) => (
        <ProductChapter key={product.id} product={product} />
      ))}
    </section>
  );
}