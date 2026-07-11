// src/app/lab/page.tsx
import Link from "next/link";
import { getAllLabEntries } from "@/lib/lab";
import LabIndexClient from "@/components/lab/LabIndexClient";
import LazyVideo from "@/components/ui/LazyVideo";

export default async function LabIndexPage() {
  const entries = await getAllLabEntries();

  return (
    <main className="min-h-screen pb-32">
      <div className="px-6 pt-6 md:px-14 md:pt-10">
        <div className="chamfer relative aspect-[21/9] w-full overflow-hidden border border-hairline bg-panel md:aspect-[3/1]">
          <LazyVideo
            webmSrc="/videos/cookie-multi-pc.webm"
            mp4Src="/videos/cookie-multi-pc-original.mp4"
            poster="/images/gato-monster.png"
            alt="Cookie rodeado de pantallas de arquitectura, IA y visualización de datos"
            className="absolute inset-0 h-full w-full"
            videoClassName="object-cover object-[center_30%] video-graded"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/30 to-bg-base/10" />

          <div className="pointer-events-none absolute inset-4 md:inset-6" aria-hidden="true">
            <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-chassis" />
            <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-chassis" />
            <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-chassis" />
            <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-chassis" />
          </div>

          <div className="relative z-10 flex items-start justify-between px-6 py-6 md:px-10 md:py-8">
            <p className="font-display text-[11px] uppercase tracking-widest text-phosphor">
              lab — bitácora
            </p>
            <Link
              href="/"
              className="font-display text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-phosphor"
            >
              ← inicio
            </Link>
          </div>

          <div className="relative z-10 flex h-[calc(100%-4.5rem)] flex-col justify-end px-6 pb-6 md:px-10 md:pb-8">
            <h1 className="font-display text-2xl text-ink md:text-4xl">Cómo pienso</h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
              Arquitectura, notas técnicas, IA y benchmarks — lo que hago cuando no estoy construyendo
              un producto para un usuario.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <LabIndexClient entries={entries} />
      </div>
    </main>
  );
}