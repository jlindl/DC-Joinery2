# Claude Code Build Brief — DC Joinery and Interiors

> **Read this in full before writing any code.** This document is the source of truth for design intent, content, and technical execution. The codebase is pre-scaffolded (Next.js App Router assumed). Your job is to *build*, not to *re-architect*.
>
> Companion context: `dc-joinery-and-interiors-analysis.md`. Read it for business positioning before starting.

---

## 0. Operating principles

1. **Cinematic is a discipline, not a vibe.** Every section earns its scroll. If a block doesn't change the viewer's emotional or informational state, delete it.
2. **The work is the hero.** This is a joiner who makes beautiful objects with their hands. Photography of the craft outranks copy, icons, illustrations, and decoration. Build the site *around* the imagery, not the other way around.
3. **Restraint over flourish.** A still hero with one slow zoom beats five animated cards. Animation budget is finite — spend it on transitions between sections, not on entrance jitter for every element.
4. **Type does the talking.** Display serif for headlines (Editorial New, Fraunces, or PP Editorial-style alternative), neutral grotesk for body. No more than two families. No more than four weights total across the whole site.
5. **Performance is part of the aesthetic.** A site that flashes white, jumps layout, or stutters is not cinematic. LCP under 2.0s on a fast 4G throttle is the bar.
6. **Mobile is not "the small version."** Mobile gets its own choreography. Hero crop, type scale, and section pacing are designed for portrait, not shrunk from desktop.

If you are about to add a third typeface, a fourth animation library, a colour outside the palette, or a glassmorphism panel — stop. Re-read principle 1.

---

## 1. Brand brief (one paragraph)

DC Joinery and Interiors is a Newcastle upon Tyne bespoke joiner. Workshop-made, on-site assembled. Premium clients: affluent homeowners in Jesmond, Gosforth, Tynemouth, and design studios who want a feature piece nobody else has. The owner-operator is hands-on. Work is characterised by clean joinery lines, considered timber selection, and finish quality that holds up next to a designer's painted finish. The site must read as **quietly confident**, not loud. Think *Toast*, *The Conran Shop*, *Plain English Cupboards*, *Devol Kitchens*, *Studio MacLean* — not Checkatrade, not "we're cheap and cheerful."

**Tone of voice:**
- Direct, understated, present-tense.
- "Made in our Newcastle workshop. Fitted in your home." not "We pride ourselves on delivering excellence in bespoke craftsmanship to discerning clientele."
- Never use the word "passionate." Never use "solutions." Never use "bespoke" more than three times across the whole site.

---

## 2. Visual system

### Palette

Use CSS custom properties on `:root` in `globals.css`. No hex inline anywhere else.

```css
--ink: #1A1814;          /* near-black warm — body text, headlines */
--bone: #F4EFE6;         /* warm off-white — primary background */
--linen: #E8E0D2;        /* secondary background, alternating sections */
--oak: #8A6A3B;          /* accent — used sparingly, for hover and one CTA */
--shadow: rgba(26, 24, 20, 0.08);
--shadow-deep: rgba(26, 24, 20, 0.18);
```

No pure black. No pure white. No blue. No grey-blue. No system blue links.

### Type

```
Display: "Fraunces", serif (variable, optical sizing on)
  — used at 600 weight, optical-sizing: auto, slight tracking tightening at large sizes
Body: "Inter", sans-serif (or system fallback)
  — used at 400 and 500
```

Load via `next/font/google` with `display: "swap"` and `subsets: ["latin"]`. Expose as CSS variables.

**Type scale (desktop):**
- Hero display: `clamp(3.5rem, 8vw, 7rem)`, line-height 0.95, tracking -0.02em
- Section heading: `clamp(2.25rem, 4vw, 3.5rem)`, line-height 1.05, tracking -0.015em
- Body: `1.0625rem`, line-height 1.6
- Eyebrow / label: `0.75rem`, uppercase, tracking 0.18em, weight 500

### Spacing and layout

- 12-column grid, 1440px max content width, 96px outer gutter on desktop, 24px on mobile.
- Vertical rhythm in multiples of 8px. Section vertical padding: `clamp(96px, 12vw, 192px)`.
- Generous whitespace. If a section feels cramped, the answer is more padding, not smaller type.

### Motion

- **Easing:** custom cubic-bezier `cubic-bezier(0.22, 1, 0.36, 1)` for most reveals (smooth, slightly assertive). Use `cubic-bezier(0.65, 0, 0.35, 1)` for image transitions.
- **Durations:** 600–900ms for entrance reveals, 300–400ms for hover states, 1200ms+ for hero ken-burns.
- **Reduce motion:** every animation must respect `prefers-reduced-motion: reduce` and degrade to a static state, not a faster animation.

Use Framer Motion (already common in Next projects) for orchestration. Use `motion.div` with `whileInView` and `viewport={{ once: true, margin: "-15%" }}` so reveals fire just before the section centres.

---

## 3. Image strategy (this is critical — read twice)

The site lives or dies on imagery. Until real client photography is delivered, use **placeholder images from `/public/images/placeholders/`** with descriptive filenames. The site owner will swap these for real shots later.

### Rules for `next/image`

1. **Always use `next/image`.** Never `<img>`. Never CSS `background-image` for any photographic content (gradient overlays only).
2. **Hero image:** `priority`, `fetchPriority="high"`, `sizes="100vw"`, no lazy loading.
3. **Above-the-fold images:** `priority`. Everything else lazy by default.
4. **`sizes` attribute is mandatory** on every `<Image>` and must reflect actual rendered width across breakpoints. Example for a half-width gallery image:
   ```tsx
   sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
   ```
5. **Quality:** `quality={85}` default, `quality={90}` for hero only. Never higher.
6. **Aspect ratios are part of the design.** Use `aspect-ratio` CSS or fixed `width`/`height` on `<Image>` with `style={{width: '100%', height: 'auto'}}` to prevent layout shift. Stick to: `4/5` (portrait, primary), `3/2` (landscape, secondary), `1/1` (square, detail shots), `16/9` (hero only on desktop).
7. **Placeholder:** `placeholder="blur"` with a `blurDataURL`. For local placeholder assets, generate via a script (see §8) or use a tiny base64 stub. Never render a hard image pop-in — the blur-up *is* part of the cinematic feel.
8. **Object positioning:** when cropping, use `object-position` deliberately. Feature units and tables look best with the top third visible; portrait shots of a finished room want the lower-mid focal point.

### Where images go (the brief)

| Section | Image treatment | Notes |
|---|---|---|
| Hero | Full-bleed, 100vh on desktop, 90svh on mobile. Slow ken-burns: 1.0 → 1.06 scale over 12s, ease-out. Black-to-transparent gradient overlay 0–40% for headline legibility. | One hero image. Not a slider. Sliders are the enemy of cinematic. |
| Manifesto / intro | No image. Pure type, generous whitespace. The pause is the point. | The eye needs to rest after the hero. |
| Featured project | Large 4/5 portrait left, single line of copy right, vertically centred. Image fills 60% column width. | One project, not a grid. |
| Process | 3 stills, staggered vertically with offset (not a flat row). Each captioned with a small italic label. | Reveal one at a time on scroll, 150ms stagger. |
| Gallery | Editorial mosaic: two columns desktop, one column mobile. Vary aspect ratios deliberately — don't grid them uniformly. | 6–9 images. Lightbox optional but only if it doesn't compromise performance. |
| Workshop / about | Side-by-side: portrait of a hand at work + paragraph of copy. Image is 5/7 portrait. | The single most important "trust" moment on the site. |
| Footer / contact | Wide 3/2 landscape (workshop interior at golden hour, ideally) behind a dark gradient with the contact details overlaid. | This is the closing shot of the film. |

Every image must have a **meaningful `alt`**. "Bespoke oak shelving fitted into an alcove in a Jesmond townhouse" is correct. "Image" is not.

---

## 4. Page architecture (single landing page)

Build as **one long landing page** at `app/page.tsx`. Component each section. Sections in order:

```
1. <SiteHeader />              — fixed, transparent over hero, solid on scroll past 80px
2. <Hero />                    — full-bleed image, single H1, no buttons in viewport
3. <Manifesto />               — short statement, no image
4. <FeaturedProject />         — one project, image + minimal copy
5. <Services />                — three service categories, type-led, no icons
6. <Process />                 — 3-step, staggered images
7. <Gallery />                 — editorial mosaic
8. <Workshop />                — about-the-maker section
9. <Testimonial />             — single pull-quote, oversized, on bone background
10. <Contact />                — closing image + phone, email, Instagram link
11. <SiteFooter />             — minimal: name, location, year, IG icon
```

No navigation menu in the traditional sense. Header has logo (left) and a single "Get in touch" link (right) that smooth-scrolls to `#contact`. That's it. Don't add a hamburger. Don't add a "Services" dropdown. Restraint.

### Section-by-section content

#### 2. Hero

```
H1: Joinery, made by hand.
     Fitted with care.
Sub: Newcastle upon Tyne. By commission.
```

Position copy bottom-left, 96px from edge desktop, 24px mobile. No CTA button in hero. The scroll itself is the call to action.

#### 3. Manifesto

```
Eyebrow: A note from the workshop

Body (one paragraph, max 60 words):
We make pieces that belong to the rooms they're in. A table sized to the
window it sits beneath. Cabinetry built for the alcove, not the catalogue.
Drawn, drawn-out, machined, sanded, and finished in a workshop in Newcastle.
Then carried in and made to fit, by the same hands that made it.
```

#### 4. Featured project

```
Eyebrow: Recent work
Title: A design studio in Jesmond
Body (max 40 words): An oversized table and a wall of feature units, made to
the studio's brief. Workshop-built, site-assembled. The painting was theirs.
The joinery was ours.
```

#### 5. Services

Three plain-text columns, no icons, no cards, no boxes:

```
Fitted furniture        Bespoke tables          Interior joinery
Wardrobes, alcove       Dining, console,        Panelling, shelving,
units, dressers,        boardroom. Solid        media walls, window
media walls.            timber and veneer.      seats, bookcases.
```

Each header in display serif. Each body in body sans. No "Learn more" links.

#### 6. Process

Three steps, each with an image and a short caption:

```
01 — Drawn         (image: pencil sketch on workshop paper)
We start with measurements taken on site and a conversation about how the
piece will be used.

02 — Made          (image: hand at a tablesaw, shavings, focus on detail)
Built in our Newcastle workshop, dry-fitted, finished, photographed.

03 — Fitted        (image: installed piece in finished room)
Installed in your home or studio. The same hands, start to finish.
```

#### 7. Gallery

6–9 images. Vary aspect ratios. Captions overlaid bottom-left on hover only (desktop) or always-visible (mobile, small italic below the image).

#### 8. Workshop

Two columns. Left: portrait image (5/7). Right: copy.

```
Eyebrow: The workshop

Headline: One pair of hands. One workshop. Every piece.

Body (max 70 words):
DC Joinery is run by [Operator name — placeholder] from a workshop in
Newcastle upon Tyne. Drawings, machining, finishing and fitting all happen
under one roof, and one signature. Most work comes by referral, from
clients who have seen a piece in someone else's home and asked who made it.
```

> **Note to Claude Code:** the operator's first name is not publicly confirmed. Use `[Operator name]` as a literal string in the copy and add a `// TODO: confirm operator name` comment at the JSX site. Do not invent a first name.

#### 9. Testimonial

One quote, oversized display serif, no attribution box, just italic name underneath. If no real quote is available, use:

```
"It fits like it was always meant to be there."
— Client, Jesmond
```

Mark this with a `// TODO: replace with verified client quote` comment.

#### 10. Contact

Closing image (workshop interior or detail shot), dark gradient overlay, copy overlaid:

```
Eyebrow: Start a commission

Headline: Tell us what you're thinking.

Phone: 07595 024878
Email: cdean_weston@me.com
Instagram: @dcjoineryandinteriors
Newcastle upon Tyne
```

Phone is `tel:`. Email is `mailto:`. Instagram is the full Instagram URL. No contact form in v1. A form is friction; this client books work by phone and DM.

#### 11. Footer

```
DC Joinery and Interiors · Newcastle upon Tyne · © [current year]
```

Right-aligned: small Instagram icon link.

---

## 5. Animation choreography (specific, do not freelance)

### Hero

- On mount: image renders blurred, sharpens over 600ms.
- Headline: words animate in with 80ms stagger, y-offset 24px → 0, opacity 0 → 1, 800ms each, ease `(0.22, 1, 0.36, 1)`.
- Image scale: 1.0 → 1.06 over 12s, ease-out, infinite alternate. (Subtle. Not a zoom.)
- On scroll past 100px: header background fades in from transparent to `--bone` with `backdrop-filter: blur(12px)`.

### Section reveals

Default pattern for every section after the hero:
- Container: opacity 0 → 1, y 32 → 0, 700ms.
- Heading: same, but 100ms delayed.
- Image: opacity 0 → 1, scale 1.02 → 1.0, 900ms, eased.
- Trigger: `viewport={{ once: true, margin: "-12%" }}`.

### Gallery items

Stagger: 80ms between siblings. Same opacity + y pattern.

### Hover states

- Images in gallery: scale 1.0 → 1.03 over 600ms, plus `filter: brightness(0.96)` overlay caption.
- Links: underline draws left → right, 300ms.

### Reduce motion

If `prefers-reduced-motion: reduce`:
- Disable ken-burns.
- Replace y-offset reveals with simple opacity 0 → 1 over 300ms.
- Disable hover scale.

---

## 6. Technical execution

### Stack assumptions

- Next.js 14+ App Router.
- TypeScript.
- Tailwind CSS (configure `tailwind.config.ts` with the palette and font CSS variables).
- Framer Motion for orchestration.
- `next/font/google` for Fraunces and Inter.
- `next/image` for all imagery.

If any of these are absent from the pre-scaffold, install them before writing components.

### File structure

```
app/
  layout.tsx              — fonts, metadata, body classes
  page.tsx                — composes all sections
  globals.css             — CSS variables, base resets, motion-reduce rules
components/
  site/
    SiteHeader.tsx
    SiteFooter.tsx
  sections/
    Hero.tsx
    Manifesto.tsx
    FeaturedProject.tsx
    Services.tsx
    Process.tsx
    Gallery.tsx
    Workshop.tsx
    Testimonial.tsx
    Contact.tsx
  primitives/
    Reveal.tsx            — wrapper for the standard section reveal
    Eyebrow.tsx
    DisplayHeading.tsx
public/
  images/
    placeholders/
      hero.jpg
      jesmond-table.jpg
      process-01.jpg
      process-02.jpg
      process-03.jpg
      gallery-01.jpg ... gallery-09.jpg
      workshop-portrait.jpg
      contact-bg.jpg
```

### `Reveal` primitive

A single wrapper to standardise the reveal so we don't repeat Framer config in every section:

```tsx
// components/primitives/Reveal.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

### SEO and metadata

In `app/layout.tsx`:

```ts
export const metadata = {
  title: "DC Joinery and Interiors — Bespoke joinery, Newcastle upon Tyne",
  description:
    "Workshop-made fitted furniture, bespoke tables and interior joinery for homes and studios in Newcastle and the North East. By commission.",
  openGraph: {
    title: "DC Joinery and Interiors",
    description: "Bespoke joinery, made by hand in Newcastle upon Tyne.",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
};
```

Add structured data (`LocalBusiness` schema) as a JSON-LD `<script>` in the layout. Include phone, address (city only — no street), opening hours unknown so omit, sameAs Instagram and Facebook URLs.

### Performance budget

- LCP: under 2.0s on simulated fast 4G.
- CLS: under 0.05.
- Hero image: served at 1920w max for desktop, 828w for mobile. Use `next/image` `sizes` to drive this.
- No client-side JS for sections that don't need it. Only Framer-using components are `"use client"`. The page shell stays server-rendered.

### Accessibility

- Single `<h1>` (in Hero). Subsequent sections use `<h2>`.
- Colour contrast: ink on bone is fine; check oak on bone passes 4.5:1 for body, 3:1 for large.
- All interactive elements keyboard-reachable, visible focus ring (don't remove the outline; restyle it: `outline: 2px solid var(--oak); outline-offset: 4px`).
- Skip-to-content link, visually hidden until focused.
- Instagram icon link has `aria-label="DC Joinery on Instagram"`.

---

## 7. Copy guardrails

Things to **never** put on this site:

- "Welcome to our website."
- "We are passionate about..."
- Generic stock-photo carpenter cliches (a smiling man with crossed arms in a high-vis vest).
- Star ratings, badges, "as seen on" logos unless real.
- A live chat widget.
- Cookie banner overdesign — use a minimal one if needed for analytics, not a full takeover.
- Lorem ipsum in production. Use the copy in this brief verbatim, or mark with `// TODO`.

---

## 8. Placeholder images

Until real photography is provided:

1. Source CC0 / open-licence imagery from Unsplash matching this brief: warm-toned workshop interiors, hands working timber, finished oak/walnut furniture in lived-in interiors, joinery detail shots. Avoid: stark white modern lofts, blue-toned tech-bro workspaces, smiling-team stock.
2. Save into `/public/images/placeholders/` with the filenames listed in §6.
3. Generate `blurDataURL` strings using `plaiceholder` (`npm i plaiceholder sharp`). Add a one-off Node script `scripts/gen-blur.ts` that reads each placeholder, outputs a `placeholders.json` mapping filename → base64 blur, then commit that JSON. Sections import from it.

> If you cannot fetch external images during the build, leave the `<Image src>` paths in place and add a top-level `// TODO: drop placeholder JPGs into /public/images/placeholders/` comment in `page.tsx` so the human can add them.

---

## 9. Definition of done

The site is finished when:

1. All 11 sections build, render, and pass through a full mobile and desktop scroll without layout shift, animation jank, or console errors.
2. Lighthouse (mobile, simulated fast 4G): Performance ≥ 92, Accessibility ≥ 100, Best Practices = 100, SEO = 100.
3. The hero LCP image is `priority`, served at appropriate `sizes`, and has a working blur-up.
4. `prefers-reduced-motion: reduce` produces a calm, still version of the site with all reveals static and no ken-burns.
5. Every `<Image>` has explicit `width`/`height` or `fill` with a sized parent, plus `sizes` and meaningful `alt`.
6. Every `// TODO` is grep-able and listed in the PR description.
7. The site can be screenshotted at the top of any section and look like a single frame from a documentary about a craftsperson — not a tradesperson directory listing.

---

## 10. What success looks like

Imagine the site owner — a working joiner — opening this on his phone for the first time, scrolling slowly, and saying nothing for ten seconds. Then sending the link to the design studio in Jesmond. That's the bar.

Now build it.