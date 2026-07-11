// src/components/sections/Lab.tsx
import LazyVideo from "@/components/ui/LazyVideo";

const MOMENTS = [
  {
    webmSrc: "/videos/cookie-multi-pc.webm",
    mp4Src: "/videos/cookie-multi-pc.mp4",
    poster: "/images/gato-dia.png",
    alt: "Cookie explorando entre varias pantallas",
    label: "explorar",
    note: "Antes de escribir código, pruebo el problema desde varios ángulos — casi nunca la primera solución es la correcta.",
  },
  {
    webmSrc: "/videos/cookie-chill.webm",
    mp4Src: "/videos/cookie-chill.mp4",
    poster: "/images/gato-noche.png",
    alt: "Cookie en pausa, pensando",
    label: "pausar",
    note: "La arquitectura correcta casi siempre aparece lejos del teclado, no forzándola frente a la pantalla.",
  },
];

export default function Lab() {
  return (
    <section id="lab" className="relative border-b border-hairline">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-6 md:px-14">
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">n.º 02 / lab</p>
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">proceso</p>
      </div>

      <div className="px-6 py-14 md:px-14 md:py-20">
        <p className="max-w-lg font-display text-2xl leading-relaxed text-ink md:text-3xl">
          No vendo un stack. Vendo un método.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {MOMENTS.map((m) => (
            <div key={m.label} className="relative">
              <div className="chamfer relative aspect-[4/3] w-full overflow-hidden border border-hairline bg-panel">
                <LazyVideo
                  webmSrc={m.webmSrc}
                  mp4Src={m.mp4Src}
                  poster={m.poster}
                  alt={m.alt}
                  className="h-full w-full"
                  videoClassName="object-cover video-graded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/5 to-transparent" />
                <p className="absolute bottom-4 left-5 font-display text-[11px] uppercase tracking-widest text-phosphor-cool">
                  cookie.os — {m.label}<span className="cursor-blink">_</span>
                </p>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}