import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Image fields below are plain URL strings (e.g. "/uploads/photo.jpg"), not
// Astro's `image()` helper. The CMS (Sveltia) writes uploads to public/uploads
// as URL strings, which `image()` cannot resolve (it only accepts paths
// relative to the content file, imported through Vite). Plain strings also
// mean no code change is needed if media storage later moves to Cloudflare R2
// or another remote host — the field just becomes a different absolute URL.
const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sponsors' }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    tier: z.enum(['platinum', 'gold', 'silver']),
    url: z.string().url(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string(),
    image: z.string(),
    registrationUrl: z.string().url().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    photographer: z.string(),
    category: z.enum(['wedding', 'wildlife', 'portrait', 'event', 'cinematic']),
    image: z.string(),
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
  schema: z.object({
    eyebrow: z.string(),
    headline: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number().int(),
  }),
});

export const collections = { sponsors, events, gallery, pages, heroSlides };
