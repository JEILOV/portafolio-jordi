// src/app/work/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/lib/constants";
import ProductChapter from "@/components/work/ProductChapter";

export async function generateStaticParams() {
  const ids = await getAllProductIds();
  return ids.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductById(slug);
  if (!product) return {};
  return {
    title: `${product.name} — jordi.dev`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductById(slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen pb-32">
      <div className="flex items-center justify-between border-b border-hairline px-6 py-6 md:px-14">
        <Link
          href="/work"
          className="font-display text-xs uppercase tracking-widest text-ink-muted transition-colors hover:text-phosphor"
        >
          ← todo el trabajo
        </Link>
      </div>
      <ProductChapter product={product} />
    </main>
  );
}