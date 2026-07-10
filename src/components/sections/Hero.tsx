// src/components/sections/Hero.tsx
"use client";

import { useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative h-[130vh]">
      <section className="sticky top-0 h-screen w-full overflow-hidden">
        <video
  ref={videoRef}
  className="absolute inset-0 h-full w-full object-cover object-[center_15%] md:object-center"
  src="/videos/cookie-hero.mp4"
  poster="/images/gato-dia.png"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/30 via-transparent to-bg-base/70" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 text-center px-4">
          <div className="absolute bottom-0 left-1/2 h-72 w-full max-w-3xl -translate-x-1/2 bg-gradient-to-t from-bg-base via-bg-base/70 to-transparent" />
          <div className="relative">
            <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
              CREATIVE DEV
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Bridging Pixel Dreams and Modern Code
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}