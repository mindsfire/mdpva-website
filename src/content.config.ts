import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sponsors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image(),
      tier: z.enum(['platinum', 'gold', 'silver']),
      url: z.string().url(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date(),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      location: z.string(),
      description: z.string(),
      image: image(),
      registrationUrl: z.string().url().optional(),
      isFeatured: z.boolean().default(false),
    }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      photographer: z.string(),
      category: z.enum(['wedding', 'wildlife', 'portrait', 'event', 'cinematic']),
      image: image(),
      year: z.coerce.number().int(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
  }),
});

const heroSlides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hero-slides' }),
  schema: ({ image }) =>
    z.object({
      eyebrow: z.string(),
      headline: z.string(),
      description: z.string(),
      image: image(),
      order: z.number().int(),
    }),
});

export const collections = { sponsors, events, gallery, pages, heroSlides };
