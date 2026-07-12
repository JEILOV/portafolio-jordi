import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

if (!projectId) {
  throw new Error("Falta NEXT_PUBLIC_SANITY_PROJECT_ID en tu .env.local");
}

export const client = createClient({
  projectId,
  dataset: dataset || "production",
  apiVersion: apiVersion || "2024-01-01",
  useCdn: true,
});