import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const games = defineCollection({
  loader: glob({pattern: ["**/*.(md|mdx)", "!**/_*.(md|mdx)"], base: "./src/games"}),
  schema: ({ image }) => z.object({
    name: z.string(),
    image: image(),
    files: z.array(z.object({
      name: z.string(),
      path: z.string()
    }))
  })
})

export const collections = { games };