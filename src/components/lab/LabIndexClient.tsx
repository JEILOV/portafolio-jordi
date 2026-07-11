// src/components/lab/LabIndexClient.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LAB_KIND_LABELS } from "@/lib/lab";
import LabEntryCard from "@/components/lab/LabEntryCard";
import type { LabEntry, LabEntryKind } from "@/types";

const ALL = "all" as const;
type FilterValue = LabEntryKind | typeof ALL;

export default function LabIndexClient({ entries }: { entries: LabEntry[] }) {
  const [filter, setFilter] = useState<FilterValue>(ALL);

  const kinds = useMemo(() => {
    const present = new Set(entries.map((e) => e.kind));
    return (Object.keys(LAB_KIND_LABELS) as LabEntryKind[]).filter((k) => present.has(k));
  }, [entries]);

  const filtered = filter === ALL ? entries : entries.filter((e) => e.kind === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 border-b border-hairline px-6 py-6 md:px-14">
        <button
          onClick={() => setFilter(ALL)}
          className={`border border-hairline px-3 py-1.5 font-display text-[11px] uppercase tracking-widest transition-colors ${
            filter === ALL ? "border-phosphor-cool text-phosphor-cool" : "text-ink-muted hover:text-phosphor"
          }`}
        >
          todo
        </button>
        {kinds.map((kind) => (
          <button
            key={kind}
            onClick={() => setFilter(kind)}
            className={`border border-hairline px-3 py-1.5 font-display text-[11px] uppercase tracking-widest transition-colors ${
              filter === kind ? "border-phosphor-cool text-phosphor-cool" : "text-ink-muted hover:text-phosphor"
            }`}
          >
            {LAB_KIND_LABELS[kind]}
          </button>
        ))}
      </div>

      <section className="px-6 py-14 md:px-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <Link key={entry.id} href={`/lab/${entry.id}`} className="block">
              <LabEntryCard entry={entry} />
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-sm text-ink-muted">Todavía no hay entradas en esta categoría.</p>
        )}
      </section>
    </>
  );
}