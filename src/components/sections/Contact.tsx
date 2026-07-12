// src/components/sections/Contact.tsx
import LazyVideo from "@/components/ui/LazyVideo";

const CHANNELS = [
  { label: "email", value: "tu-correo@ejemplo.com", href: "mailto:tu-correo@ejemplo.com" },
  { label: "github", value: "github.com/tu-usuario", href: "https://github.com/tu-usuario" },
  { label: "linkedin", value: "linkedin.com/in/tu-usuario", href: "https://linkedin.com/in/tu-usuario" },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative min-h-screen w-full overflow-hidden">
      <LazyVideo webmSrc="/videos/cookie-contact.webm" mp4Src="/videos/cookie-contact.mp4" poster="/images/gato-noche.png" alt="Cookie durmiéndose después de codear" className="absolute inset-0 h-full w-full" videoClassName="object-cover object-[50%_28%] md:object-center video-graded md:scale-110" />

      <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/40 to-bg-base/10" />

      <div className="pointer-events-none absolute inset-6 md:inset-10" aria-hidden="true">
        <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-chassis" />
        <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-chassis" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-chassis" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-chassis" />
      </div>

      <div className="relative z-10 flex items-center justify-between px-8 py-8 md:px-14 md:py-10">
        <p className="font-display text-xs uppercase tracking-widest text-ink-muted">n.º 03 / contacto</p>
        <p className="font-display text-[11px] uppercase tracking-widest text-ink-muted">
          cookie.os — suspendido<span className="cursor-blink text-phosphor-cool">_</span>
        </p>
      </div>

      <div className="relative z-10 flex min-h-[75vh] flex-col justify-end px-8 pb-16 md:px-14 md:pb-24">
        <h2 className="max-w-lg font-display text-3xl leading-[1.25] text-ink md:text-5xl">
          Cookie ya se durmió.<br />
          <span className="text-phosphor">El sistema sigue activo.</span>
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {CHANNELS.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="group flex w-fit items-baseline gap-4 font-display text-sm text-ink-muted transition-colors hover:text-phosphor">
              <span className="text-[11px] uppercase tracking-widest text-phosphor-cool">{c.label}</span>
              <span className="text-base md:text-lg">{c.value}</span>
              <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
