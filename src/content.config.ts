import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts live in `src/content/blog/*.md`.
 * The file name (without extension) becomes the URL slug.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Set to true to keep a post out of listings and the build. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
