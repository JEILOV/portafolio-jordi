// src/components/sections/About.tsx
import LazyVideo from "@/components/ui/LazyVideo";

export default function About() {
  return (
    <section id="sobre-mi" className="relative min-h-screen w-full overflow-hidden">
     <LazyVideo
  webmSrc="/videos/cookie-chill.webm"
  mp4Src="/videos/cookie-chill.mp4"
  poster="/images/gato-noche.png"
  alt="Cookie relajado en un puff"
  className="absolute inset-0 h-full w-full"
  videoClassName="object-cover object-[center_20%] md:object-center"
/>

      <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/10 to-bg-base/30" />

      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 py-24 md:px-16">
        <div className="max-w-xl rounded-3xl border border-white/15 bg-white/[0.04] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-md md:p-10">
          <h2 className="font-display text-4xl font-bold text-text-primary">
            Sobre mí<span className="text-accent-primary">.</span>
          </h2>

          <p className="mt-6 leading-relaxed text-text-secondary">
            Soy Jordan (Jordi), estudiante de 7mo ciclo de Ingeniería Informática
            y desarrollador Full Stack / Frontend. Mi enfoque se basa en crear
            soluciones funcionales y seguras, aplicando pensamiento lógico para
            resolver problemas reales de rendimiento.
          </p>

          <p className="mt-4 leading-relaxed text-text-secondary">
            Priorizo arquitecturas limpias y directas, evitando sobrecomplicar
            proyectos simples con estructuras de escalabilidad innecesarias —
            la solución correcta es la que resuelve el problema real, no la
            más impresionante en papel.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Optimización de consultas", "Firebase", "CMS propios", "Testing automatizado"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-text-primary backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}