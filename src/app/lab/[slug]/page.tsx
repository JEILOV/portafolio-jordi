// src/app/lab/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getAllLabEntryIds, getLabEntryById, LAB_KIND_LABELS } from "@/lib/lab";
import { urlForImage } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const ids = await getAllLabEntryIds();
  return ids.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getLabEntryById(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} — jordi.dev`,
    description: entry.summary,
  };
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlForImage(value.asset).url()}
        alt={value.alt || ""}
        className="chamfer my-8 w-full border border-hairline object-cover"
        loading="lazy"
      />
    ),
    code: ({ value }) => (
      <div className="chamfer my-6 overflow-x-auto border border-hairline bg-panel">
        {value.filename && (
          <p className="border-b border-hairline px-4 py-2 font-display text-[11px] uppercase tracking-widest text-ink-muted">
            {value.filename}
          </p>
        )}
        <pre className="px-4 py-4 text-sm leading-relaxed text-ink">
          <code>{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-ink-muted">{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-10 mb-3 font-display text-xl text-ink md:text-2xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-2 font-display text-lg text-ink">{children}</h3>
    ),
  },
};

export default async function LabEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getLabEntryById(slug);
  if (!entry) notFound();

  return (
    <main className="min-h-screen pb-32">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-6 md:px-14">
        <Link
          href="/lab"
          className="font-display text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-phosphor"
        >
          ← toda la bitácora
        </Link>
      </div>

      <article className="px-6 py-14 md:px-14">
        <p className="font-display text-[11px] uppercase tracking-widest text-phosphor-cool">
          {LAB_KIND_LABELS[entry.kind]}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-2xl text-ink md:text-4xl">{entry.title}</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
          {entry.summary}
        </p>

        {entry.body && entry.body.length > 0 && (
          <div className="mt-10 max-w-2xl text-sm md:text-base">
            <PortableText value={entry.body} components={portableTextComponents} />
          </div>
        )}

      {entry.link && (
  <a
    href={entry.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-block font-display text-xs uppercase tracking-widest text-ink transition-colors hover:text-primary" 
  >
    ver más →
  </a>
)}
      </article>
    </main>
  );
}