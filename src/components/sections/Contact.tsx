// src/components/sections/Contact.tsx
import LazyVideo from "@/components/ui/LazyVideo";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/tu-usuario" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tu-usuario" },
  { label: "Email", href: "mailto:tu-correo@ejemplo.com" },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative min-h-screen w-full overflow-hidden">
      <LazyVideo webmSrc="/videos/cookie-contact.webm" mp4Src="/videos/cookie-contact.mp4" poster="/images/gato-noche.png" alt="Cookie durmiéndose después de codear" className="absolute inset-0 h-full w-full" videoClassName="object-cover object-[center_25%] md:object-center scale-125 md:scale-110" />

      <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-bg-base/30 to-bg-base/10" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-start px-6 pt-24 text-center md:pt-32">
        <div className="max-w-lg rounded-3xl border border-white/15 bg-white/[0.04] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-md md:p-10">
          <h2 className="font-display text-4xl font-bold text-text-primary">
            Contacto<span className="text-accent-primary">.</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Cookie ya se durmió, pero el formulario sigue despierto. Escríbeme y hablemos de tu próximo proyecto.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SOCIALS.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent-primary px-6 py-2.5 text-sm font-medium text-accent-primary transition-all hover:bg-accent-primary hover:text-bg-base">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}