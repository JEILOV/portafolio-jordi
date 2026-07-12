// src/sanity/schemaTypes/product.ts
import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Proyecto (Work)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Se usa como identificador en la URL: /work/[slug]",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "displayMode",
      title: "Modo de presentación",
      description:
        "Cómo se cuenta la historia de este proyecto — no cuánto vale el proyecto en sí. Puede cambiar sin que el proyecto cambie.",
      type: "string",
      options: {
        list: [
          { title: "Case study (capítulo completo)", value: "case-study" },
          { title: "Featured (tarjeta compacta)", value: "featured" },
        ],
        layout: "radio",
      },
      initialValue: "featured",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "problem",
      title: "Problema",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "decision",
      title: "Decisión",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "result",
      title: "Resultado",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "evidence",
      title: "Evidencia",
      type: "array",
      of: [{ type: "evidenceItem" }],
    }),
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "year",
      title: "Año",
      type: "number",
    }),
    defineField({
      name: "demoUrl",
      title: "URL demo",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "URL GitHub",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "displayMode", media: "image" },
  },
});