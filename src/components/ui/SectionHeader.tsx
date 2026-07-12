// src/components/ui/SectionHeader.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
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

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  video?: {
    webmSrc: string;
    mp4Src: string;
    poster: string;
    alt: string;
    objectPosition?: string; // ej. "object-[42%_32%] md:object-[68%_center]"
  };
}

export default function SectionHeader({ eyebrow, title, video }: SectionHeaderProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.35, once: true });

  if (!video) {
    return (
      <div
        ref={ref}
        className="flex flex-col justify-center gap-3 border-b border-hairline px-6 py-16 md:px-14 md:py-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="font-display text-4xl text-ink md:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative h-[70vh] w-full overflow-hidden border-b border-hairline md:h-[80vh]">
      <LazyVideo
        webmSrc={video.webmSrc}
        mp4Src={video.mp4Src}
        poster={video.poster}
        alt={video.alt}
        className="absolute inset-0 h-full w-full"
        videoClassName={`object-cover video-graded ${video.objectPosition ?? "object-center"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/40 to-bg-base/10" />
      <CornerMarks />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 md:px-14 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="font-display text-4xl text-ink md:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}