// src/components/ui/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.01 3.29 9.26 7.86 10.76.57.1.78-.25.78-.55v-2.07c-3.2.7-3.88-1.42-3.88-1.42-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.52C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-shadow duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-accent-primary/20"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-text-primary">{project.title}</h3>
        <p className="mt-1 text-sm text-accent-primary">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent-primary">
              <GithubIcon /> Código
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent-primary">
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}