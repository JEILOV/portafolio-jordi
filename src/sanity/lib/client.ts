// src/sanity/lib/client.ts
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * useCdn: true — leemos del CDN de Sanity (rápido, cacheado, gratis en el
 * plan Free). El contenido de un portafolio personal no cambia segundo a
 * segundo; no necesitamos bypassear el CDN salvo en el propio Studio.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});