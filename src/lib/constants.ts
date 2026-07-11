// src/lib/constants.ts
import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "tucampus",
    index: "01",
    name: "TuCampus",
    tagline: "Marketplace para la comunidad de la UNP",
    problem:
      "Los estudiantes compraban y vendían entre ellos por grupos de WhatsApp dispersos, sin forma de verificar quién estaba al otro lado ni de encontrar publicaciones antiguas.",
    decision:
      "Con cientos de publicaciones activas, cargar todo de una vez iba a matar el rendimiento en celulares de gama baja — la mayoría de los usuarios reales. Diseñé paginación por cursor sobre Firestore en vez de offset, y blindé cada transacción con autenticación estricta. Cobertura de pruebas automatizadas con Vitest para que un cambio no rompiera el flujo de compra sin que nadie lo notara.",
    result:
      "Una base de código que un tercero podría auditar con confianza — no solo funciona, se puede confiar en que sigue funcionando.",
    image: "/images/gato-monster.png",
    githubUrl: "https://github.com/tu-usuario/tucampus",
  },
  {
    id: "munay-peru",
    index: "02",
    name: "Munay Perú",
    tagline: "Plataforma institucional y CMS propio",
    problem:
      "El equipo de la ONG dependía de mí para cualquier cambio de contenido — un texto, una imagen, un evento nuevo — porque no existía forma de administrarlo sin tocar código.",
    decision:
      "Construí un CMS administrativo desde cero en vez de adoptar uno de terceros, con control de roles granular para que cada persona del equipo edite solo lo que le corresponde. Reglas de seguridad en Firestore auditadas línea por línea, y trabajo de SEO técnico para que el sitio institucional se indexe correctamente.",
    result:
      "El equipo publica sin depender de un desarrollador. Eso es lo que separa una web de un producto real.",
    image: "/images/gato-dia.png",
    demoUrl: "https://munayperu.com",
  },
];