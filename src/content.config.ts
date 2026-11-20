import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const figure = z.object({
      image: image(),
      alt: z.string(),
      caption: z.string(),
    });

    return z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number().int(),
      context: z.string(),
      cover: figure,
      gallery: z.array(figure).default([]),
    });
  },
});

export const collections = { projects };
