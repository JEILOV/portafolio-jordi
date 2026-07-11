/**
 * src/app/studio/[[...tool]]/page.tsx
 *
 * Ruta catch-all que monta Sanity Studio dentro de la propia app de Next.js.
 * Editas contenido en tu-dominio.com/studio, sin hosting aparte.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}