# MDPVA Site — Phase 2 Design

Date: 2026-07-21 · Branch: `feature/phase2-sections` · Test locally before push.

## Goal

Add the remaining site sections (blog, press, testimonials, membership plans,
board hierarchy, about/legacy), flesh out events and gallery pages, remove the
member directory, apply global branding/SEO fixes, and add rich animations.

## CMS collections (config.yml + src/content.config.ts)

All image fields are `z.string()` pointing at `/uploads/` (Sveltia writes URL
strings; noop image service). Seed realistic placeholders; user corrects in CMS.

- **blog** — title, date, coverImage, author, excerpt, body (markdown). Seed 3.
- **press** — title, publication, date, thumbnail, url (external link). Seed 3–4.
  No detail pages; cards open publisher URL in new tab.
- **testimonials** — memberName, role, quote, photo (optional), order. Seed 5–6.
- **membershipPlans** — name, price (INR), period, features (string list),
  highlighted (bool), order. Seed placeholders: Annual Member ₹1,000/yr,
  Life Member ₹10,000 one-time (user corrects).
- **board** — name, designation, tier (1–4 int), order, photo, note (optional).
  Seed the real 2025–27 committee (names confirmed by user):
  - T1: Sri M. K. Somashekar — Honorary President (note: Former MLA, K.R. Constituency)
  - T2: Sri Vijay G. — President
  - T3: Sri Rajagopal H. (Vice President), Sri Dhananjaya A. (Secretary),
    Sri K. N. Umashankar (Joint Secretary), Sri Umesh K. (Treasurer),
    Sri Siddalinga Prasad K. G. (Public Relations Officer)
  - T4 Directors: Sri Mahesh, Sri A. Mohan, Sri M. Lokesh, Sri M. N. Manjunath,
    Sri Narayanaswamy M., Sri Manjunatha, Sri K. U. Varghese
  Placeholder portraits until real photos uploaded via CMS.

## Pages

- **/events** — upcoming (date >= today) + past grid from events collection.
- **/gallery** — full grid, client-side category filter chips, photographer credits.
- **/blog**, **/blog/[slug]** — card index newest-first; detail: cover, author,
  date, prose body.
- **/press** — "In the Media" external-link cards (publication badge, date,
  target=_blank rel=noopener).
- **/membership** — CMS plan cards + benefits + coverage + testimonials marquee
  + join CTA.
- **/board** — pyramid hierarchy: 4 tiers, gold-ring circular portraits (echoes
  the association's print invitation identity), subtle gold connector lines,
  tier-by-tier scroll reveal.
- **/about** — hardcoded legacy page (NOT CMS; one-time content): hero,
  "Since 2000" story (placeholder copy), registered identity + address
  (#224, Narayana Shastri Road, next to Mahalakshmi Temple, K.R. Mohalla,
  Mysuru – 570024), milestone timeline (incl. World Photography Day — 186th in
  2025), board teaser linking /board.
- **Removed:** /directory page + DirectoryTeaser homepage section (replaced by
  testimonials marquee on homepage). Nav + footer: add About, Board, Blog,
  Press; drop Directory.

## Animations

Reduced-motion + no-JS safe (existing `html.js` + prefers-reduced-motion pattern).

- Testimonials: infinite auto-drift marquee — duplicated track, CSS translateX
  keyframe loop, pause on hover, NO pagination/arrows. Homepage + membership.
- Board: staggered tier reveal; connector lines draw in (scaleY).
- About: timeline items alternate slide-in; count-up counters (e.g. "25+ years").
- Gallery: fade/scale re-flow on filter switch.
- Scroll-reveal (IntersectionObserver) extended to all new sections.

## Global fixes

- Full name everywhere: **Mysuru District Photographers and Videographers
  Association ®** ("ers" suffixes + registered mark) — site-wide sweep.
- Footer: Facebook + Instagram SVG icons only (dummy https://facebook.com/mdpva,
  https://instagram.com/mdpva); remove other socials/labels; remove
  "All photographs © their respective member photographers"; add
  "Developed by Mindsfire Private Limited" → https://www.mindsfire.com.
- Tab title: home = "MDPVA"; inner pages = "<Page> · MDPVA".
- Homepage established year → 2000.

## SEO

- Layout accepts `title` + `description`; renders title, meta description,
  canonical (from `site`), Open Graph + Twitter tags.
- Unique hand-written description per page; clean slugs.
- @astrojs/sitemap + robots.txt.

## Testing

`npm run build` must pass; verify locally with dev server at mobile (~390px)
and desktop (~1440px) widths (per standing rule) before any push. Push only to
the feature branch; MR to main after user tests.
