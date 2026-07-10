// src/lib/constants.ts
import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "tucampus",
    title: "TuCampus",
    subtitle: "UNP Market — Marketplace Universitario",
    description:
      "Plataforma de compraventa para la comunidad UNP. Resolví cuellos de botella de rendimiento con paginación optimizada en las consultas de Firestore, e implementé autenticación estricta para proteger transacciones entre usuarios. Cobertura de testing automatizado con Vitest para garantizar estabilidad en cada release.",
    stack: ["React", "Firebase", "Vitest"],
    image: "/images/gato-monster.png",
    githubUrl: "https://github.com/tu-usuario/tucampus",
    featured: true,
  },
  {
    id: "munay-peru",
    title: "Munay Perú",
    subtitle: "Sitio Institucional + CMS Propio",
    description:
      "Diseñé y construí un CMS administrativo desde cero, sin depender de soluciones de terceros, con control de roles granular. Apliqué reglas de seguridad estables en Firestore y trabajé SEO técnico para mejorar la indexación institucional.",
    stack: ["React", "Vite", "Zustand", "Firebase"],
    image: "/images/gato-dia.png",
    demoUrl: "https://munayperu.com",
    featured: true,
  },
  {
    id: "pizza-republic",
    title: "Pizza Republic",
    subtitle: "Rediseño de Identidad Visual",
    description:
      "Dirección de arte y rediseño completo de la identidad de marca, adoptando una estética Premium Dark que eleva la percepción del producto sin sacrificar cercanía con el cliente.",
    stack: ["React", "Tailwind CSS"],
    image: "/images/gato-noche.png",
    featured: false,
  },
  {
    id: "rimasun",
    title: "Rimasun",
    subtitle: "Plataforma Educativa — Lenguas Originarias",
    description:
      "Proyecto educativo enfocado en la preservación de lenguas originarias del Perú. Diseño de identidad visual y experiencia de usuario pensada para accesibilidad y aprendizaje progresivo.",
    stack: ["React", "Tailwind CSS"],
    image: "/images/gato-dia.png",
    featured: false,
  },
];

export const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Tailwind CSS", category: "Estilos" },
  { name: "Firebase", category: "Backend" },
  { name: "Vitest", category: "Testing" },
  { name: "Zustand", category: "Estado" },
] as const;