// src/app/lab/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LAB_ENTRIES, LAB_KIND_LABELS, getLabEntryById } from "@/lib/lab";

export function generateStaticParams() {
  return LAB_ENTRIES.map((entry) => ({ slug: entry.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getLabEntryById(slug);
  if (!entry) return {};
  return {
    title: `${entry.title} — jordi.dev`,
    description: entry.summary,
  };
}

export default async function LabEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getLabEntryById(slug);
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

        {entry.body && (
          <div className="mt-10 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-ink-muted md:text-base">
            {entry.body}
          </div>
        )}

        {entry.link && (
          <a
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-display text-xs uppercase tracking-widest text-ink transition-colors hover:text-phosphor"
          >
            ver más →
          </a>
        )}
      </article>
    </main>
  );
}