// src/components/sections/Projects.tsx
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="bg-bg-base px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold text-text-primary">
          Proyectos<span className="text-accent-primary">.</span>
        </h2>
        <p className="mt-2 max-w-lg text-text-secondary">
          Soluciones funcionales y seguras, resolviendo problemas reales de rendimiento.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}