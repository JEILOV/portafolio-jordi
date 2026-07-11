// src/types/index.ts
export interface Evidence {
  src: string;
  alt: string;
  caption: string;
}

export interface Product {
  id: string;
  index: string;
  name: string;
  tagline: string;
  featured: boolean;
  problem: string;
  decision: string;
  evidence?: Evidence[];
  result: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}