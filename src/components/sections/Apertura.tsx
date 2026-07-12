// src/components/sections/Apertura.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LazyVideo from "@/components/ui/LazyVideo";

function CornerMarks() {
  return (
    <div className="pointer-events-none absolute inset-6 md:inset-10" aria-hidden="true">
      <span className="absolute top-0 left-0 h-6 w-6 border-t border-l border-chassis" />
      <span className="absolute top-0 right-0 h-6 w-6 border-t border-r border-chassis" />
      <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-chassis" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-chassis" />
    </div>
  );
}

export default function Apertura() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Escena 1 (hero, activo) domina la primera mitad del scroll y se retira en la segunda.
  const sceneOneOpacity = useTransform(scrollYProgress, [0, 0.45, 0.65], [1, 1, 0]);
  // Escena 2 (chill, flow) entra donde termina la primera — el relevo, no la superposición.
  const sceneTwoOpacity = useTransform(scrollYProgress, [0.45, 0.65, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} id="inicio" className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden border-b border-hairline">
        {/* Escena 1 — Cookie trabajando (activo) */}
        <motion.div className="absolute inset-0" style={{ opacity: sceneOneOpacity }}>
          <LazyVideo
            webmSrc="/videos/cookie-hero.webm"
            mp4Src="/videos/cookie-hero.mp4"
            poster="/images/gato-dia.png"
            alt="Cookie trabajando en su escritorio, el lugar donde nacen los productos"
            className="absolute inset-0 h-full w-full"
            videoClassName="object-cover object-[42%_32%] md:object-[68%_center] video-graded"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base/85 via-bg-base/35 to-bg-base/5" />
          <CornerMarks />

          <div className="relative z-10 flex items-start justify-between px-8 py-8 md:px-14 md:py-10">
            <div>
              <p className="font-display text-lg tracking-tight text-ink md:text-xl">jordi.dev</p>
              <p className="font-display text-[10px] uppercase tracking-widest text-ink-muted">sist. 01 — activo</p>
            </div>
            <span className="flex items-center gap-2 font-display text-xs uppercase tracking-widest text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              rec · live
            </span>
          </div>

          <div className="relative z-10 flex min-h-[68vh] flex-col justify-end px-8 pb-16 md:px-14 md:pb-20">
            <p className="font-display text-xs uppercase tracking-widest text-phosphor">n.º 00 / inicio</p>
            <h1 className="mt-5 max-w-lg font-display text-3xl text-ink md:text-5xl">
              <span className="block leading-[1.25]">Construyo software</span>
              <span className="mt-1 block leading-[1.25]">como quien diseña hardware:</span>
              <span className="mt-1 block leading-[1.25] text-phosphor">con precisión, sin adornos.</span>
            </h1>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-ink-muted md:text-base">
              Jordan (Jordi) — este sitio documenta cómo pienso productos, no una lista de tecnologías.
            </p>
            <p className="mt-8 font-display text-[11px] uppercase tracking-widest text-ink-muted">
              cookie.os — activo<span className="cursor-blink text-phosphor-cool">_</span>
            </p>
          </div>
        </motion.div>

        {/* Escena 2 — Cookie en flow (chill) — el relevo del mismo sistema, no un tema distinto */}
        <motion.div className="absolute inset-0" style={{ opacity: sceneTwoOpacity }}>
          <LazyVideo
            webmSrc="/videos/cookie-chill.webm"
            mp4Src="/videos/cookie-chill.mp4"
            poster="/images/gato-noche.png"
            alt="Cookie en su rincón de trabajo, en calma, con la sesión de código todavía activa"
            className="absolute inset-0 h-full w-full"
            videoClassName="object-cover object-[38%_42%] md:object-center video-graded"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base/85 via-bg-base/35 to-bg-base/5" />
          <CornerMarks />

          <div className="relative z-10 flex items-start justify-between px-8 py-8 md:px-14 md:py-10">
            <p className="font-display text-[10px] uppercase tracking-widest text-ink-muted">sist. 01 — flow</p>
            <span className="flex items-center gap-2 font-display text-xs uppercase tracking-widest text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-phosphor-cool" />
              idle · escuchando
            </span>
          </div>

          <div className="relative z-10 flex min-h-[68vh] flex-col justify-end px-8 pb-16 md:px-14 md:pb-20">
            <p className="font-display text-xs uppercase tracking-widest text-phosphor-cool">n.º 00 / proceso</p>
            <h2 className="mt-5 max-w-lg font-display text-2xl text-ink md:text-4xl">
              La arquitectura correcta casi nunca aparece a la primera.
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-ink-muted md:text-base">
              Este es el otro modo del mismo sistema: donde pienso antes de escribir, no donde escribo
              sin pensar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}