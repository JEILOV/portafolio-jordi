// src/lib/lab.ts
import type { LabEntry, LabEntryKind } from "@/types";
import { client } from "@/sanity/lib/client";
import {
  ALL_LAB_ENTRIES_QUERY,
  LATEST_LAB_ENTRIES_QUERY,
  LAB_ENTRY_BY_SLUG_QUERY,
  ALL_LAB_ENTRY_SLUGS_QUERY,
} from "@/sanity/lib/queries";

export async function getLatestLabEntries(limit = 3): Promise<LabEntry[]> {
  return client.fetch<LabEntry[]>(LATEST_LAB_ENTRIES_QUERY, { limit });
}

export async function getAllLabEntries(): Promise<LabEntry[]> {
  return client.fetch<LabEntry[]>(ALL_LAB_ENTRIES_QUERY);
}

export async function getLabEntryById(id: string): Promise<LabEntry | undefined> {
  const entry = await client.fetch<LabEntry | null>(LAB_ENTRY_BY_SLUG_QUERY, { slug: id });
  return entry ?? undefined;
}

/** Para generateStaticParams en /lab/[slug]. */
export async function getAllLabEntryIds(): Promise<string[]> {
  return client.fetch<string[]>(ALL_LAB_ENTRY_SLUGS_QUERY);
}

export const LAB_KIND_LABELS: Record<LabEntryKind, string> = {
  architecture: "arquitectura",
  notes: "notas técnicas",
  ai: "ia",
  benchmark: "benchmarks",
  experiment: "experimentos",
  learning: "aprendizajes",
  article: "artículos",
};