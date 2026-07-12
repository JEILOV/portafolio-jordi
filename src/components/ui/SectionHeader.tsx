// src/components/ui/SectionHeader.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SectionHeaderProps {
  eyebrow: string; // ej. "n.º 01 / work"
  title: string;   // ej. "Selected Work"
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.4, once: true });

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