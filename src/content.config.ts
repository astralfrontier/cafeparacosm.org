import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({pattern: ["**/*.(md|mdx)", "!**/_*.(md|mdx)"], base: "./src/blog"}),
  schema: ({image}) => z.object({
    name: z.string(),
    draft: z.boolean().optional(),
    date: z.date()
  })
})

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

const gurpsMashup = defineCollection({
  loader: file("./src/gurps-mashup.yaml"),
  schema: z.object({
    skip: z.boolean().optional(),
    url: z.string().url()
  })
})

export const collections = { blog, games, gurpsMashup };