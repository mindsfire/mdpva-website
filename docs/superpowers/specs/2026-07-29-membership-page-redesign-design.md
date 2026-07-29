# Membership page redesign — remove plans, single apply CTA

**Date:** 2026-07-29
**Branch:** `feature/membership-no-plans`
**Page:** `/membership`

## Why

MDPVA does not want membership plans or fees published on the website. The
page currently leads with a three-card pricing grid (Annual ₹1,000, Life
₹10,000, Associate ₹500) driven by the `membershipPlans` content collection.
All of it comes out.

The risk in a pure deletion is that removing pricing also removes every
concrete reason to join — the `features` arrays on those plan cards were the
only place the site said what a member actually receives. So the plans are
deleted but their substance is salvaged into a single tier-neutral list.

## What changes

`/membership` goes from six sections to a page whose primary section is a
two-column apply block: what membership includes on the left, one CTA card on
the right pointing at `/contact`.

### Page structure (after)

| Section | Background | Change |
| --- | --- | --- |
| `Header` | — | anchor updated |
| `PageHero` | ink (dark) | copy reworded off "pick the plan" |
| `#apply` | paper (light) | **new** — replaces `#plans` |
| `coverage` | white | 3 columns → 2 (third moves into the CTA card) |
| `MembershipBenefits` | ink (dark) | kept; CTA label + anchor updated |
| `TestimonialsMarquee` | ink | unchanged |
| `Footer` | ink | unchanged |

### The `#apply` section

Two columns on a `bg-mdpva-paper` background. Left column ~1.4fr, right ~1fr.
Stacks on mobile with the benefits list first, CTA card second.

**Left — what membership includes.** Six rows, each a check icon plus a line.
Copy is deduped from the three deleted plan `features` arrays, plus dispute
support lifted from the existing `coverage` text:

1. MDPVA professional ID and certification
2. All workshops, photo walks, and the district salon
3. Members-only job board and second-shooter calls
4. Priority for official coverage pools (Dasara & district events)
5. Dispute support with venues and authorities
6. Voting rights at the AGM

The list is tier-neutral by design — no wording that implies some members get
more than others, since tiers are no longer disclosed.

**Right — the CTA card.** Dark (`bg-mdpva-ink`), containing:

- Heading: "Become a member"
- Line: "Applications are verified by the executive committee."
- Primary button "Apply now" → `/contact`
- Secondary: "or write to office@mdpva.in" (`mailto:`)
- Divider, then the fee line: "Membership fees are confirmed by the
  association office."

The card is dark rather than light because it is the page's primary action and
must win against a six-item list beside it. It works as a small dark block
surrounded by light in a way a full-width dark band under the already-dark
`PageHero` would not.

The fee line stays deliberately. Removing every mention of cost would read as
evasive; this states that fees exist and where to get them, without numbers.

**Known tension, accepted:** `MembershipBenefits` lower on the page also lists
benefits. The left column here is concrete deliverables (an ID card, job board
access, a vote); the dark band is the pitch (Certification, Recognition,
Network). Different register, and they sit roughly two scrolls apart. If it
reads repetitive once live, the fix is trimming the left list to four items.

## Animation

Two ambient loops, both continuous while the page is open. Both live in
`src/styles/global.css` alongside the existing motion vocabulary
(`data-reveal`, `.mdpva-connector`, `marqueeDrift`, `dotFill`).

### A — gold trace around the CTA card

A thin gold segment travels the card's perimeter, one lap per 10s.

```
svg > rect  pathLength="100"  stroke-dasharray="18 82"
animation: traceLoop 10s linear infinite   /* stroke-dashoffset 0 → -100 */
```

`pathLength="100"` normalises the perimeter to 100 units regardless of the
card's rendered size, so the dash values hold at every breakpoint with no
hard-coded lengths. Stroke uses a gradient so the segment has a fading tail
rather than two hard ends.

The SVG has no `viewBox` and is sized `width="100%" height="100%"`, so user
units equal CSS pixels and the stroke does not distort with the card's aspect
ratio.

### B — aperture rotating behind the card

A six-blade camera aperture, inline SVG, absolutely positioned behind the CTA
card, ~420px, `opacity: 0.05`, one revolution per 60s.

```
animation: apertureSpin 60s linear infinite   /* rotate(0) → rotate(360deg) */
```

Chosen because it is thematic — an association of image-makers with a shutter
turning behind the join pitch — rather than generic decoration.

**The containing element must be `overflow-hidden`.** Without it the aperture
extends the page width and produces horizontal scroll on mobile.

### Constraints on both

- Wrapped in `@media (prefers-reduced-motion: no-preference)`, matching every
  other animation in `global.css`. Infinite motion is the category that
  actually triggers vestibular symptoms, so this is not optional.
- Under `prefers-reduced-motion: reduce`: the trace renders as a static gold
  border (`stroke-dasharray: none`), the aperture renders static but visible.
  Neither element disappears — they hold still.
- Neither loop sits behind body text. Both are confined to the CTA card and its
  margins, never behind the six benefit lines.

**Cost note:** the aperture is `transform`-only and GPU-composited, effectively
free. The trace animates `stroke-dashoffset`, which repaints each frame rather
than compositing. Acceptable on one small element, but it is the one to drop
first if low-end devices struggle.

### Not doing

- No tick-draw stagger on the six check marks. They use the existing plain
  `data-reveal`. Two infinite loops plus six sequenced draws is too busy on
  first view.
- No pulsing or shimmering "Apply now" button. It reads as advertising, never
  stops, and cheapens the tone for a professional association. Existing hover
  state is sufficient.

## Deletions

The `membershipPlans` collection becomes unused and is removed entirely. Git
history keeps it recoverable if the decision reverses.

- `src/content/membership-plans/annual-member.md`
- `src/content/membership-plans/life-member.md`
- `src/content/membership-plans/associate-member.md`
- `src/content.config.ts` — the `membershipPlans` collection definition and its
  entry in the `collections` export
- `public/admin/config.yml` — the membership plans block (~line 147), so no CMS
  editor is left editing prices that render nowhere

## Anchor rename

`#plans` → `#apply`, with label changes where the label names plans:

| File | Occurrences | Change |
| --- | --- | --- |
| `src/components/Header.astro` | 3 (lines 33, 43, 100) | anchor only |
| `src/components/Hero.astro` | 1 (line 61) | anchor only |
| `src/components/MembershipBenefits.astro` | 1 (line 51) | anchor + label "View membership plans" → "How to join" |

`MembershipBenefits` is also rendered on the homepage, so its label change is
site-wide and intentional.

## Copy changes

- `PageHero` description — currently ends "pick the plan that fits where you
  are in your career". Rewritten without plan language.
- Page `<Layout description>` meta — currently "plans, prices, benefits, and
  how to apply … Annual, Life, and Associate memberships". Must be rewritten,
  otherwise search results keep advertising the tiers and prices the
  association asked to withhold.

## Verification

- `npm run build` passes (repo has no lint script; build is the gate).
- No remaining reference to `#plans`, `membershipPlans`, or any ₹ figure:
  `grep -rn "#plans\|membershipPlans\|₹" src/ public/admin/`
- Reviewed at ~390px and ~1440px, per the standing requirement that changes
  work on both. Specifically at 390px: no horizontal scroll (the aperture
  overflow risk), and the two columns stack in the right order.
- `prefers-reduced-motion: reduce` checked — both loops hold still, neither
  element vanishes.

## Open item (carried over, unrelated to this change)

The IconScout licence on `palace-skyline.svg` — merged to `main` with PR #11 —
is still unconfirmed for client-site use.
