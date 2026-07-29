# Kannada localisation

**Date:** 2026-07-29
**Branch:** `feature/kannada-i18n`
**Scope:** site-wide

## Why

MDPVA's membership is Kannada-first in daily life, but the site is English-only.
A Kannada visitor currently has no way in.

English stays the default. Kannada is offered, never forced — no redirect based
on browser language or location, since most of the audience reads both and
being switched automatically is worse than choosing.

## Decisions taken

| Question | Decision |
| --- | --- |
| How much is translated | Shell + the four main pages |
| Who writes the Kannada | Claude drafts, native speaker reviews before launch |
| Untranslated pages | Mirrored — Kannada shell, English body |
| Switcher placement | Header (primary) and footer (backup) |
| Heading face | Anek Kannada |
| Body face | Noto Sans Kannada |
| Handwriting face | Hubballi |
| Default language | English, unprefixed at the site root |

### What "shell + four main pages" means

**Fully Kannada:** all navigation, buttons, section headings, labels, footer,
form labels, and the complete page copy for `/`, `/about`, `/membership`, and
`/contact`.

**Kannada shell, English body:** `/blog`, `/events`, `/press`, `/board`,
`/board/archive`, `/gallery`, `/sponsors`, `/founders`, and blog detail pages.
Nav, footer, and buttons are Kannada; article and listing content is English.

This was chosen over per-entry optional translation because nothing then rots.
There is no half-translated state to leak into a page — a page is either fully
translated or transparently English inside a Kannada frame. Adding per-entry
Kannada content later remains possible but is explicitly out of scope.

The 182 board entries are not translated. That number is the main reason full
bilingual content was rejected.

## Routing

All 16 pages move from `src/pages/*.astro` into `src/pages/[...locale]/*.astro`.
Each exports:

```js
export function getStaticPaths() {
  return [{ params: { locale: undefined } }, { params: { locale: "kn" } }];
}
```

`locale: undefined` emits the unprefixed English route; `locale: "kn"` emits the
Kannada one. **Verified working on this Astro version** — a probe page produced
both `/ping/index.html` and `/kn/ping/index.html` from a single file.

One file per page serving both locales, rather than a duplicated `kn/` folder.
A layout change is then one edit, not two, and the two languages cannot drift
structurally apart.

Existing English URLs are unchanged, so nothing needs redirecting.

`astro.config.mjs` gains:

```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'kn'],
  routing: { prefixDefaultLocale: false },
}
```

## Copy storage

`src/i18n/ui.ts` holds a flat key → `{ en, kn }` map, with a
`useTranslations(locale)` helper returning `t(key)`. Components and pages call
`t("nav.about")` rather than embedding literals.

Long-form prose for the four translated pages lives in the same dictionary.
Keeping it there rather than in the markup means a reviewer can read every
Kannada string in one file without navigating 29 `.astro` files.

Estimated ~250 strings; the exact count firms up during implementation.

Missing-key behaviour: fall back to the English string and warn at build time.
A missing key must never render a raw key name or an empty element.

## Typography

Three faces, self-hosted via Fontsource, all open-licensed:

| Role | Face | Kannada subset (`wght`) |
| --- | --- | --- |
| Headings | Anek Kannada | 111 KB |
| Body | Noto Sans Kannada | 89 KB |
| President's note | Hubballi | 38 KB |

**Total 238 KB, loaded only on `/kn/` routes.** Use the `wght` builds, not
`standard` — Anek's `standard` bundles an unused width axis at 303 KB versus
111 KB.

Delivered by a `KannadaFonts.astro` component rendered only when
`locale === "kn"`. Astro scopes that component's CSS to the pages that include
it, so English pages download no Kannada fonts at all.

The component also carries the token override:

```css
html[lang="kn"] {
  --font-sans: "Noto Sans Kannada Variable", "Archivo", "Tunga", sans-serif;
  --font-serif: "Anek Kannada Variable", "Newsreader", serif;
  --font-handwriting: "Hubballi", "Caveat", cursive;
}
```

The Latin faces stay **second** in each stack on purpose. Font fallback is
per-glyph, not per-element, so Latin characters inside Kannada strings —
"MDPVA", phone numbers, `office@mdpva.in` — keep rendering in Archivo and
Newsreader with no extra markup. `Tunga` sits last as a free fallback for
Windows machines if a webfont request fails; it is named only, never
redistributed, as it is Microsoft's and carries no web licence.

Hubballi is Regular-only and is a light display face rather than true
handwriting — Kannada has no Caveat equivalent. Accepted deliberately after
side-by-side review; it applies to exactly one element,
`PresidentsNote.astro:46`.

## Language switcher

A `LanguageSwitcher.astro` component derives its target by swapping the locale
segment of `Astro.url.pathname`: `/kn/membership` ↔ `/membership`.

**It must preserve the current page.** Sending the user to the homepage on
switch is the most common failure in bilingual sites and is treated here as a
defect, not a simplification.

Placement:
- `Header.astro` — desktop bar and mobile menu
- `Footer.astro` — alongside the copyright line

Rendered as `EN | ಕನ್ನಡ`, with the inactive language as the link. The active
language carries `aria-current="true"`; each link carries `hreflang` and a
`lang` attribute so screen readers switch pronunciation.

No cookie, no localStorage, no auto-detection. The URL is the only state.

## SEO

- `hreflang` alternates in `Layout.astro` for both locales plus `x-default`
  pointing at English
- Canonical URLs locale-correct (`/kn/about` canonicalises to itself)
- `<html lang>` set per locale
- `@astrojs/sitemap` configured with its `i18n` option so both locales and
  their relationships are declared
- Page `title` and `description` translated for the four translated pages;
  mirrored pages keep English metadata, since their content is English

## Unchanged

All 9 content collections, their schemas, every markdown file, and the Sveltia
CMS config at `public/admin/config.yml`. No CMS restructuring — editors see
exactly what they see today. Collection content renders identically in both
locales.

### What this means for editors

Nothing changes. An editor opens Sveltia, writes an event or blog post in
English, publishes. One language, one write, no second pane, no pasting Kannada
anywhere. A Kannada visitor at `/kn/events` sees Kannada navigation, buttons,
and footer around English event content.

### CMS i18n — considered, deferred

Sveltia supports per-collection translation natively: an `i18n` block declaring
`structure`, `locales`, and `default_locale`, then `i18n: true` per collection
and per field, with `i18n: duplicate` for fields that should not be translated
(image, date, registration URL). Editors then get side-by-side EN | ಕನ್ನಡ panes.

Deferred deliberately. The setup is cheap; the recurring cost is not — every
future post becomes two writes, permanently, and a single missed Kannada pane
produces a visibly patchy bilingual listing that then needs fallback logic.
Blog is the worst case (long-form, frequent); events would be the best
candidate if this is ever revisited (short, few fields, and the content a
Kannada-speaking member most needs to read).

Adding it later is **purely additive** — new config plus new optional fields,
with no rework of anything this spec builds. Revisit once there is evidence of
actual Kannada traffic.

## Translation quality

The Kannada is drafted by Claude and **must** be reviewed by a native speaker
before launch. This is a release gate, not a nicety.

The draft is least reliable on formal associational register and photography
trade terms — "second-shooter calls", "photo walk", "district salon",
"executive committee", "dispute support with venues". Some have an established
Kannada rendering the local community actually uses and some do not, and the
draft cannot reliably tell which.

Implementation must therefore mark uncertain strings for the reviewer rather
than presenting all strings as equally confident. Proper nouns are
transliterated, not translated.

## Verification

- `npm run build` passes; **32 pages** built (16 × 2)
- Every page reachable in both locales; switcher round-trips on each without
  changing page
- No Kannada font requested on any English route (network panel)
- Mixed strings render correctly — Latin in Archivo, Kannada in Noto Sans,
  within one line
- `hreflang` present and reciprocal on every page; sitemap contains both locales
- Reviewed at ~390px and ~1440px per the standing requirement, including the
  mobile menu switcher
- Kannada text renders without tofu on a machine with no Kannada system font
- Native-speaker review signed off

## Phasing

Two PRs, not one. The first is a large mechanical change and the second is a
large editorial one; reviewing them together would mean neither gets read
properly.

**Phase 1 — infrastructure.** Routing move, `astro.config` i18n, the dictionary
scaffold with nav/buttons/footer strings only, fonts, switcher, hreflang. Ends
with a working bilingual site whose Kannada side has a translated shell and
English page bodies throughout. Independently shippable and useful.

**Phase 2 — page copy.** Full Kannada for `/`, `/about`, `/membership`,
`/contact`. Almost entirely additions to `src/i18n/ui.ts`, so the reviewer reads
one file. This is the PR the native-speaker review gates.

## Out of scope

- Per-entry Kannada content for blog, events, press, or any collection
- Translating the 182 board entries
- Translating the Sveltia CMS admin interface
- Transliteration input (e.g. `namaskara` → ನಮಸ್ಕಾರ) anywhere on the site
- A third language

## Cleanup before merge

- `src/pages/font-test.astro` — throwaway comparison page
- `src/pages/[...locale]/ping.astro` — routing probe
- Move `@fontsource-variable/anek-kannada`, `@fontsource-variable/noto-sans-kannada`,
  and `@fontsource/hubballi` from `devDependencies` to `dependencies`, matching
  the three existing font packages

## Open item (carried over, unrelated)

The IconScout licence on `palace-skyline.svg` is still unconfirmed for
client-site use.
