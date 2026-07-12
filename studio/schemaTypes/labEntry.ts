// src/sanity/schemaTypes/labEntry.ts
import { defineArrayMember, defineField, defineType } from "sanity";

export const labEntry = defineType({
  name: "labEntry",
  title: "Entrada de Lab",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Se usa como identificador en la URL: /lab/[slug]",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "kind",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Arquitectura", value: "architecture" },
          { title: "Notas técnicas", value: "notes" },
          { title: "IA", value: "ai" },
          { title: "Benchmarks", value: "benchmark" },
          { title: "Experimentos", value: "experiment" },
          { title: "Aprendizajes", value: "learning" },
          { title: "Artículos", value: "article" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Resumen",
      description: "Se usa en las tarjetas de vista previa (Home y /lab).",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Cuerpo",
      description: "Texto enriquecido: párrafos, imágenes intercaladas y bloques de código.",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
        defineArrayMember({ type: "code", options: { withFilename: true } }),
      ],
    }),
    defineField({
      name: "date",
      title: "Fecha",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "link",
      title: "Link externo",
      description: "Opcional: repo, demo, o artículo original si aplica.",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "kind" },
  },
});