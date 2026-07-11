// src/sanity/lib/image.ts
import createImageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImageObject } from "sanity";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Disponible para transformaciones de imagen del lado del cliente
 * (srcset responsivo, recortes puntuales, etc.). Las consultas GROQ en
 * queries.ts ya resuelven la URL base directamente vía `asset->url`,
 * así que la mayoría de los componentes no necesitan importar esto.
 */
export function urlFor(source: SanityImageObject) {
  return builder.image(source);
}