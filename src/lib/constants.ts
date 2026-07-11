// src/lib/constants.ts
import type { Product } from "@/types";
import { client } from "@/sanity/lib/client";
import {
  ALL_CASE_STUDIES_QUERY,
  ALL_FEATURED_QUERY,
  PRODUCTS_BY_SLUGS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  ALL_PRODUCT_SLUGS_QUERY,
} from "@/sanity/lib/queries";

/**
 * Curaduría explícita del Home. El Home nunca "lista", elige.
 * Publicar un proyecto nuevo en Sanity no lo pone en el Home:
 * subirlo aquí es una decisión aparte, siempre manual.
 *
 * Nota de diseño: esta lista vive en código (no en Sanity) a propósito.
 * Es una decisión editorial de una sola persona, versionada en git junto
 * con el resto del sitio. Si en el futuro otra persona necesitara curar
 * el Home sin pasar por un deploy, este es el primer candidato a moverse
 * a un documento singleton de Sanity (p. ej. "siteSettings").
 */
export const HOME_CASE_STUDY_IDS: string[] = ["tucampus", "munay-peru"];
export const HOME_FEATURED_LIMIT = 4;

export async function getHomeCaseStudies(): Promise<Product[]> {
  const products = await client.fetch<Product[]>(PRODUCTS_BY_SLUGS_QUERY, {
    slugs: HOME_CASE_STUDY_IDS,
  });
  // Preserva el orden de curaduría (Sanity no garantiza el orden de `in`).
  return HOME_CASE_STUDY_IDS.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is Product => Boolean(p)
  );
}

export async function getHomeFeatured(): Promise<Product[]> {
  const featured = await client.fetch<Product[]>(ALL_FEATURED_QUERY);
  return featured.slice(0, HOME_FEATURED_LIMIT);
}

/** Para /work: el índice completo, sin límites. */
export async function getAllCaseStudies(): Promise<Product[]> {
  return client.fetch<Product[]>(ALL_CASE_STUDIES_QUERY);
}

export async function getAllFeatured(): Promise<Product[]> {
  return client.fetch<Product[]>(ALL_FEATURED_QUERY);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const product = await client.fetch<Product | null>(PRODUCT_BY_SLUG_QUERY, { slug: id });
  return product ?? undefined;
}

/** Para generateStaticParams en /work/[slug]. */
export async function getAllProductIds(): Promise<string[]> {
  return client.fetch<string[]>(ALL_PRODUCT_SLUGS_QUERY);
}