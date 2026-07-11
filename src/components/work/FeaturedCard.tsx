// src/components/work/FeaturedCard.tsx
import type { Product } from "@/types";

export default function FeaturedCard({ product }: { product: Product }) {
  return (
    <article className="chamfer group relative flex flex-col overflow-hidden border border-hairline bg-panel">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover video-graded transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-bg-base/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <div>
          <h3 className="font-display text-lg text-ink">{product.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{product.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-ink-muted">{product.result}</p>

        {product.stack && product.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {product.stack.map((tech) => (
              <li
                key={tech}
                className="border border-hairline px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex gap-4 pt-2">
          {product.demoUrl && (
            <a
              href={product.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs uppercase tracking-widest text-ink transition-colors hover:text-phosphor"
            >
              ver demo →
            </a>
          )}
          {product.githubUrl && (
            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs uppercase tracking-widest text-ink transition-colors hover:text-phosphor"
            >
              código →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}