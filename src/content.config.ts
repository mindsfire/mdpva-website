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

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    coverImage: z.string(),
    author: z.string(),
    excerpt: z.string(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string(),
    url: z.string().url(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    memberName: z.string(),
    role: z.string(),
    quote: z.string(),
    photo: z.string().optional(),
    order: z.number().int(),
  }),
});

const membershipPlans = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/membership-plans' }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    period: z.string(),
    features: z.array(z.string()),
    highlighted: z.boolean().default(false),
    order: z.number().int(),
  }),
});

const board = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/board' }),
  schema: z.object({
    name: z.string(),
    designation: z.string(),
    tier: z.number().int().min(1).max(4),
    order: z.number().int(),
    photo: z.string(),
    note: z.string().optional(),
  }),
});

export const collections = {
  sponsors,
  events,
  gallery,
  pages,
  heroSlides,
  blog,
  press,
  testimonials,
  membershipPlans,
  board,
};
