// src/components/work/ProductChapter.tsx
import type { Product } from "@/types";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.01 3.29 9.26 7.86 10.76.57.1.78-.25.78-.55v-2.07c-3.2.7-3.88-1.42-3.88-1.42-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.52C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function ProductChapter({
  product,
  index,
}: {
  product: Product;
  /** Posición dentro de la lista de casos de estudio, calculada por quien renderiza — nunca un campo guardado en el dato. */
  index?: number;
}) {
  return (
    <article className="relative border-b border-hairline last:border-b-0">
      <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover video-graded" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/10 to-transparent" />
        <div className="pointer-events-none absolute inset-4 md:inset-8" aria-hidden="true">
          <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-chassis" />
          <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-chassis" />
          <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-chassis" />
          <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-chassis" />
        </div>
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <p className="font-display text-xs uppercase tracking-widest text-phosphor">
            {index !== undefined ? `n.º ${String(index).padStart(2, "0")} / work` : "work"}
          </p>
          <h3 className="mt-2 font-display text-3xl text-ink md:text-5xl">{product.name}</h3>
          <p className="mt-1 text-sm text-ink-muted md:text-base">{product.tagline}</p>
        </div>
      </div>

      <div className="grid gap-8 px-6 pt-12 md:grid-cols-3 md:gap-12 md:px-14 md:pt-16">
        <div>
          <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">problema</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{product.problem}</p>
        </div>
        <div>
          <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">decisión</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{product.decision}</p>
        </div>
        <div>
          <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">resultado</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{product.result}</p>
          <div className="mt-5 flex gap-4">
            {product.demoUrl && (
              <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="font-display text-xs uppercase tracking-widest text-ink transition-colors hover:text-phosphor">
                ver demo →
              </a>
            )}
            {product.githubUrl && (
              <a href={product.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-display text-xs uppercase tracking-widest text-ink transition-colors hover:text-phosphor">
                <GithubIcon /> código
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Evidencia: la parte que faltaba — el producto real, no solo la ambientación */}
      {product.evidence && product.evidence.length > 0 && (
        <div className="grid gap-4 px-6 py-12 md:grid-cols-2 md:gap-6 md:px-14 md:py-16">
          {product.evidence.map((e) => (
            <div key={e.src} className="chamfer border border-hairline bg-panel">
              <img src={e.src} alt={e.alt} className="aspect-video w-full object-cover video-graded" />
              <p className="px-4 py-3 font-display text-[11px] uppercase tracking-widest text-ink-muted">{e.caption}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}