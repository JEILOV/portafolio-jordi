// src/sanity/schemaTypes/objects/evidenceItem.ts
import { defineField, defineType } from "sanity";

export const evidenceItem = defineType({
  name: "evidenceItem",
  title: "Evidencia",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "alt",
      title: "Texto alternativo",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "caption",
      title: "Descripción corta",
      type: "string",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
  },
});