// src/sanity/lib/queries.ts
import { defineQuery } from "next-sanity";

/**
 * Proyección compartida para Product. Nota clave: resolvemos las imágenes
 * a URL plana (`image.asset->url`) directamente en GROQ. Eso significa que
 * `Product.image` sigue siendo `string`, tal como era con los datos
 * estáticos — ProductChapter, FeaturedCard, etc. no cambian ni una línea.
 * El "id" de la app sigue siendo el slug, no el _id interno de Sanity.
 */
const PRODUCT_PROJECTION = /* groq */ `{
  "id": slug.current,
  displayMode,
  name,
  tagline,
  problem,
  decision,
  result,
  "image": image.asset->url,
  "evidence": evidence[]{
    "src": image.asset->url,
    alt,
    caption
  },
  stack,
  year,
  demoUrl,
  githubUrl
}`;

export const ALL_CASE_STUDIES_QUERY = defineQuery(
  `*[_type == "product" && displayMode == "case-study"] | order(year desc) ${PRODUCT_PROJECTION}`
);

export const ALL_FEATURED_QUERY = defineQuery(
  `*[_type == "product" && displayMode == "featured"] | order(year desc) ${PRODUCT_PROJECTION}`
);

export const PRODUCTS_BY_SLUGS_QUERY = defineQuery(
  `*[_type == "product" && slug.current in $slugs] ${PRODUCT_PROJECTION}`
);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0] ${PRODUCT_PROJECTION}`
);

export const ALL_PRODUCT_SLUGS_QUERY = defineQuery(
  `*[_type == "product" && defined(slug.current)].slug.current`
);

const LAB_ENTRY_PROJECTION = /* groq */ `{
  "id": slug.current,
  kind,
  title,
  summary,
  date,
  tags,
  link
}`;

export const ALL_LAB_ENTRIES_QUERY = defineQuery(
  `*[_type == "labEntry"] | order(date desc) ${LAB_ENTRY_PROJECTION}`
);

export const LATEST_LAB_ENTRIES_QUERY = defineQuery(
  `*[_type == "labEntry"] | order(date desc) [0...$limit] ${LAB_ENTRY_PROJECTION}`
);

// La entrada individual sí necesita el body completo (Portable Text), así
// que tiene su propia proyección en vez de reutilizar LAB_ENTRY_PROJECTION.
export const LAB_ENTRY_BY_SLUG_QUERY = defineQuery(
  `*[_type == "labEntry" && slug.current == $slug][0]{
    "id": slug.current,
    kind,
    title,
    summary,
    body,
    date,
    tags,
    link
  }`
);

export const ALL_LAB_ENTRY_SLUGS_QUERY = defineQuery(
  `*[_type == "labEntry" && defined(slug.current)].slug.current`
);