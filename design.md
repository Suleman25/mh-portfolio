# Design System — Moiez Hayee Portfolio

Warm-editorial portfolio for **Moiez Hayee — Architectural Drafting &
Visualization**. Single source of truth for the visual language.

- **Tokens** live in [`app/globals.css`](app/globals.css) (`@theme`).
- **Identity / about copy** lives in [`lib/site.ts`](lib/site.ts) (verbatim from the PDF).
- **Projects** live in [`lib/projects.ts`](lib/projects.ts); their images +
  captions in the auto-generated [`lib/project-images.ts`](lib/project-images.ts).

> Direction: a quiet, Swiss-influenced editorial system on a warm bone canvas,
> heavy tight display type, real project imagery in contained frames. **No
> gradients, no glow, no synthetic textures** — contrast comes from scale,
> weight, and whitespace.

---

## Color

| Token         | Value                   | Role                                   |
| ------------- | ----------------------- | -------------------------------------- |
| `bone`        | `#EDEBE4`               | Primary page background                |
| `sand`        | `#E3DFD4`               | Alternate section background (About, Services) |
| `ink`         | `#1B1815`               | Primary text; dark footer + portrait panel |
| `ink-soft`    | `#4A453E`               | Secondary text / body copy             |
| `stone`       | `#79736A`               | Muted captions, eyebrow labels         |
| `clay`        | `#B05E3A`               | Terracotta accent                      |
| `clay-deep`   | `#934B2D`               | Accent hover                           |
| `line`        | `rgba(27,24,21,0.14)`   | Hairline dividers / card borders       |
| `line-light`  | `rgba(237,235,228,0.2)` | Hairlines on dark (footer)             |

Accent budget: terracotta only on the headline/footer period accent, the
availability dot, hover states, stat figures, and the email CTA. Everything
else is ink-on-bone.

---

## Typography

**Mona Sans** (variable, `wdth` + `wght`), fallbacks Helvetica Neue / Arial.
`.display` (weight 800, `line-height 0.92`, `tracking -0.03em`) and `.eyebrow`
(uppercase, 0.22em tracking) are defined once in `globals.css` and reused.

| Role            | Treatment                                |
| --------------- | ---------------------------------------- |
| Hero headline   | `.display` · `clamp(2.75rem, 10vw, 9.5rem)` |
| Section heading | `.display` · `clamp(2.25rem, 5vw, 4.5rem)`  |
| Project title   | `.display` · `clamp(2.5rem, 7vw, 6rem)` (detail page) |
| Statement       | `text-2xl → 3xl`, weight 500, tight      |
| Body            | `text-base → lg`, `ink-soft`             |
| Eyebrow / label | `.eyebrow`                               |

---

## Architecture

Landing page + a static detail page per project.

- **`app/page.tsx`** — `SiteNav · Hero · WorkGrid · About · Services · SiteFooter`.
- **`app/work/[slug]/page.tsx`** — dynamic, `generateStaticParams()` over all 14
  slugs, `generateMetadata()` per project.

```
HERO        full-viewport thesis: name + "Architectural Drafting &
            Visualization." (clay period), verbatim tagline, 5+/80+/100% stats,
            availability dot.
WORKGRID    bento grid of 14 project cards → /work/[slug]
ABOUT       portrait on ink panel + verbatim bio + Software / Project-Type chips
SERVICES    6 services as hairline rows + "How I work" chips
FOOTER      dark ink finale: email / phone / LinkedIn (verbatim)
```

### Bento grid (signature)

12→2/4-col CSS grid, `auto-rows-[200/230px]`, `grid-flow-dense`. Each project
carries a `span`: `sm | wide | tall | lg` ([`work-grid.tsx`](components/work-grid.tsx)).
The render-rich projects anchor with bigger cells (03 = `lg` 2×2; 01, 07 = `wide`;
05, 08 = `tall`); drawing-only projects sit `sm` 1×1. Numbered `01–14` (a real
ordered set). Cards: contained cover, meta footer (number · category · title),
hover = image scale + `ArrowCircle` + clay title.

### Project detail page

Back link · number + category + title · contained cover (`max-h-78vh`,
`object-contain`) · two-column overview (left meta: Role / Deliverables /
Materials / Scope / Location; right: verbatim description + highlights/process) ·
masonry **Project Assets** gallery · prev/next nav.

---

## Imagery

**Real project images extracted from the PDF** (PyMuPDF), served locally from
`public/projects/<slug>/` and `public/identity/` via `next/image`. 134 curated
images across 14 projects; each carries its verbatim PDF panel caption + native
dimensions (in `project-images.ts`).

Hard constraint: source images are modest resolution (≤ ~800px). So **no
full-bleed photo backgrounds** — all imagery sits in **contained frames**:
renders `object-cover` on `sand`; technical drawings (`coverFit: "contain"`)
`object-contain` on `white` with a hairline border, so line drawings read as
deliberate documents. Galleries use CSS-columns masonry with intrinsic sizing.

To re-extract/re-curate: edit `scratchpad/place.py` (xref→slug mapping) and
re-run — it rewrites `lib/project-images.ts`.

---

## Motion

`motion` (Framer Motion), restrained, `prefers-reduced-motion` respected.

- **Hero**: staggered load-in (`staggerChildren 0.08`, lift 26px); availability
  dot `animate-ping`.
- **Sections / cards**: `Reveal` ([`reveal.tsx`](components/reveal.tsx)) — fade +
  lift on first scroll-in (`once`), `ease [0.22,1,0.36,1]`.
- **Cards**: cover scale + `ArrowCircle` reveal on hover.

Reusable: [`reveal.tsx`](components/reveal.tsx), [`arrow-circle.tsx`](components/arrow-circle.tsx).

---

## Quality floor

Responsive to mobile (bento reflows to 2-col, nav collapses), visible focus,
reduced-motion respected, semantic landmarks, alt text + verbatim captions on
all imagery. All content transcribed verbatim from the source PDF.
