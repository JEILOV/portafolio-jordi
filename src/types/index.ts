// src/types/index.ts

export interface Evidence {
  src: string;
  alt: string;
  caption: string;
}

/**
 * DisplayMode describe cómo se cuenta la historia de un proyecto,
 * no cuánto vale el proyecto en sí. Un proyecto puede cambiar de modo
 * (por ejemplo, de "featured" a "case-study") sin que el proyecto
 * cambie: cambia la decisión editorial sobre cómo mostrarlo.
 */
export type DisplayMode = "case-study" | "featured";

export interface Product {
  id: string;
  displayMode: DisplayMode;
  name: string;
  tagline: string;
  problem: string;
  decision: string;
  result: string;
  evidence?: Evidence[];
  image: string;
  stack?: string[];
  year?: number;
  demoUrl?: string;
  githubUrl?: string;
}

/**
 * LabEntry vive en un dominio distinto al de Product.
 * Work responde "qué construí". Lab responde "cómo pienso
 * cuando no estoy construyendo un producto". Un experimento
 * que madura en un proyecto real no cambia de "nivel": se
 * convierte en una entrada nueva y separada en Product.
 */
export type LabEntryKind =
  | "architecture"
  | "notes"
  | "ai"
  | "benchmark"
  | "experiment"
  | "learning"
  | "article";

export interface LabEntry {
  id: string;
  kind: LabEntryKind;
  title: string;
  summary: string;
  body?: string;
  date: string; // ISO 8601, e.g. "2026-06-14"
  tags?: string[];
  link?: string;
}