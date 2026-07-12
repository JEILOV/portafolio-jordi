// src/components/sections/Lab.tsx
import Link from "next/link";
import { getLatestLabEntries } from "@/lib/lab";
import LabEntryCard from "@/components/lab/LabEntryCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function Lab() {
  const entries = await getLatestLabEntries(3);

  return (
    <section id="lab" className="relative border-b border-hairline">
       <SectionHeader
         eyebrow="n.º 02 / lab"
         title="Proceso"
         video={{
           webmSrc: "/videos/cookie-multi-pc.webm",
           mp4Src: "/videos/cookie-multi-pc-original.mp4",
           poster: "/images/gato-monster.png",
           alt: "Cookie rodeado de pantallas de arquitectura, IA y visualización de datos",
           objectPosition: "object-[center_30%]",
         }}
       />

      <div className="px-6 py-14 md:px-14 md:py-20">
        <p className="max-w-lg font-display text-2xl leading-relaxed text-ink md:text-3xl">
          No vendo un stack. Vendo un método.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
          Aquí no hay productos, hay pensamiento: arquitectura, notas técnicas, benchmarks y
          experimentos — lo que hago cuando no estoy construyendo algo para un usuario.
        </p>

        {entries.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {entries.map((entry) => (
              <Link key={entry.id} href={`/lab/${entry.id}`} className="block">
                <LabEntryCard entry={entry} />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/lab"
            className="font-display text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-phosphor"
          >
            ver toda la bitácora →
          </Link>
        </div>
      </div>
    </section>
  );
}