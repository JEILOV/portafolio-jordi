// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}