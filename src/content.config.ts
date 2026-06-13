import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '**/index*.md',
    base: './src/content',
  }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      slug: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      cover: image().optional(),
      description: z.string().optional(),
      lang: z.enum(['en', 'pt']).default('en'),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
