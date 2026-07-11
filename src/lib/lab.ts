// src/lib/lab.ts
import type { LabEntry } from "@/types";

/**
 * Bitácora de pensamiento, no de proyectos.
 * Un experimento que madura en un producto real se documenta
 * como un Product nuevo en constants.ts — no se "asciende" una
 * entrada de aquí, se escribe un caso de estudio aparte.
 *
 * TODO(jordi): reemplazar estas entradas de ejemplo con contenido real.
 */
export const LAB_ENTRIES: LabEntry[] = [
  {
    id: "paginacion-cursor-vs-offset",
    kind: "architecture",
    title: "Por qué elegí paginación por cursor sobre offset en Firestore",
    summary:
      "Notas técnicas sobre el tradeoff entre offset y cursor pagination en bases de datos documentales, y por qué offset se vuelve costoso a escala en Firestore.",
    date: "2026-05-02",
    tags: ["firestore", "performance"],
  },
  {
    id: "benchmark-firestore-rules",
    kind: "benchmark",
    title: "Midiendo el costo de reglas de seguridad anidadas en Firestore",
    summary:
      "Un experimento midiendo latencia de lectura con distintos niveles de anidamiento en Firestore Security Rules.",
    date: "2026-04-18",
    tags: ["firestore", "seguridad"],
  },
  {
    id: "uml-parqueo-automatizado",
    kind: "notes",
    title: "Modelando un sistema de parqueo automatizado en UML",
    summary:
      "Notas del proceso de diseño de un diagrama de clases y secuencias en Mermaid para un sistema de parqueo, y las decisiones detrás de cada relación.",
    date: "2026-03-10",
    tags: ["uml", "modelado"],
  },
];

export function getLatestLabEntries(n = 3): LabEntry[] {
  return [...LAB_ENTRIES]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, n);
}

export function getAllLabEntries(): LabEntry[] {
  return [...LAB_ENTRIES].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getLabEntryById(id: string): LabEntry | undefined {
  return LAB_ENTRIES.find((e) => e.id === id);
}

export const LAB_KIND_LABELS: Record<LabEntry["kind"], string> = {
  architecture: "arquitectura",
  notes: "notas técnicas",
  ai: "ia",
  benchmark: "benchmarks",
  experiment: "experimentos",
  learning: "aprendizajes",
  article: "artículos",
};