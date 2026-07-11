// src/lib/constants.ts
import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "tucampus",
    displayMode: "case-study",
    name: "TuCampus",
    tagline: "Marketplace para la comunidad de la UNP",
    problem:
      "Los estudiantes compraban y vendían entre ellos por grupos de WhatsApp dispersos, sin forma de verificar quién estaba al otro lado ni de encontrar publicaciones antiguas.",
    decision:
      "Con cientos de publicaciones activas, cargar todo de una vez iba a matar el rendimiento en celulares de gama baja — la mayoría de los usuarios reales. Diseñé paginación por cursor sobre Firestore en vez de offset, y blindé cada transacción con autenticación estricta. Cobertura de pruebas automatizadas con Vitest para que un cambio no rompiera el flujo de compra sin que nadie lo notara.",
    evidence: [
      { src: "/images/gato-monster.png", alt: "Vista del listado con paginación", caption: "feed — paginación por cursor" },
      { src: "/images/gato-dia.png", alt: "Flujo de autenticación", caption: "auth — verificación estricta" },
    ],
    result:
      "Una base de código que un tercero podría auditar con confianza — no solo funciona, se puede confiar en que sigue funcionando.",
    image: "/images/gato-monster.png",
    stack: ["React", "Firebase", "Firestore", "Vitest"],
    year: 2026,
    githubUrl: "https://github.com/tu-usuario/tucampus",
  },
  {
    id: "munay-peru",
    displayMode: "case-study",
    name: "Munay Perú",
    tagline: "Plataforma institucional y CMS propio",
    problem:
      "El equipo de la ONG dependía de mí para cualquier cambio de contenido — un texto, una imagen, un evento nuevo — porque no existía forma de administrarlo sin tocar código.",
    decision:
      "Construí un CMS administrativo desde cero en vez de adoptar uno de terceros, con control de roles granular para que cada persona del equipo edite solo lo que le corresponde. Reglas de seguridad en Firestore auditadas línea por línea, y trabajo de SEO técnico para que el sitio institucional se indexe correctamente.",
    evidence: [
      { src: "/images/gato-dia.png", alt: "Panel de administración", caption: "cms — control de roles" },
    ],
    result:
      "El equipo publica sin depender de un desarrollador. Eso es lo que separa una web de un producto real.",
    image: "/images/gato-dia.png",
    stack: ["React", "Firebase", "Firestore"],
    year: 2026,
    demoUrl: "https://munayperu.com",
  },
];

/**
 * Curaduría explícita del Home. El Home nunca "lista", elige.
 * Agregar un proyecto a PRODUCTS no lo pone en el Home:
 * subirlo aquí es una decisión aparte, siempre manual.
 */
export const HOME_CASE_STUDY_IDS: string[] = ["tucampus", "munay-peru"];
export const HOME_FEATURED_LIMIT = 4;

export function getHomeCaseStudies(): Product[] {
  return HOME_CASE_STUDY_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
    (p): p is Product => Boolean(p)
  );
}

export function getHomeFeatured(): Product[] {
  return PRODUCTS.filter((p) => p.displayMode === "featured").slice(0, HOME_FEATURED_LIMIT);
}

/** Para /work: el índice completo, sin límites. */
export function getAllCaseStudies(): Product[] {
  return PRODUCTS.filter((p) => p.displayMode === "case-study");
}

export function getAllFeatured(): Product[] {
  return PRODUCTS.filter((p) => p.displayMode === "featured");
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}