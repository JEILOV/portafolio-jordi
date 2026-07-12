// src/components/ui/LazyVideo.tsx
"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface LazyVideoProps {
  webmSrc: string;
  mp4Src: string;
  poster: string;
  className?: string;
  videoClassName?: string;
  alt: string;
}

export default function LazyVideo({
  webmSrc,
  mp4Src,
  poster,
  className,
  videoClassName = "object-cover object-center",
  alt,
}: LazyVideoProps) {
  const { ref: containerRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.25,
    rootMargin: "200px",
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        className={`h-full w-full ${videoClassName}`}
        poster={poster}
        muted
        loop
        playsInline
        preload={isInView ? "auto" : "metadata"}
        aria-label={alt}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>
    </div>
  );
}