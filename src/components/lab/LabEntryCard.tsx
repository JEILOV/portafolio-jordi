// src/components/lab/LabEntryCard.tsx
import type { LabEntry } from "@/types";
import { LAB_KIND_LABELS } from "@/lib/lab";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-PE", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

/**
 * Componente puramente presentacional. No decide a dónde navega:
 * quien lo usa (Home, /lab) lo envuelve en el Link que corresponda.
 * Esto evita anidar <a> dentro de <a> cuando la entrada además
 * tiene un `link` externo.
 */
export default function LabEntryCard({ entry }: { entry: LabEntry }) {
  return (
    <article className="chamfer group h-full border border-hairline bg-panel px-5 py-5 transition-colors hover:border-phosphor-cool/60">
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">
          {LAB_KIND_LABELS[entry.kind]}
        </span>
        <span className="font-display text-[11px] uppercase tracking-widest text-ink-muted/60">
          {formatDate(entry.date)}
        </span>
      </div>
      <h3 className="mt-3 font-display text-base text-ink md:text-lg">{entry.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{entry.summary}</p>
      {entry.tags && entry.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <li
              key={tag}
              className="border border-hairline px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}