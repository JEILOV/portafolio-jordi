// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "jordi.dev — Studio",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    // visionTool: consola de GROQ dentro del Studio, útil para probar queries
    // sin salir del navegador. Usa el mismo apiVersion que el cliente de la app.
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
});