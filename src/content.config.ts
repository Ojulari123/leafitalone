import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    photo: z.string(), // photo id from src/data/photos.ts
    service: z.string().optional(), // related service slug
    readMinutes: z.number(),
  }),
});

export const collections = { blog };
