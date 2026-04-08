# Anepictale Labs Website — Design Spec

## Overview

A single-page static website for **Anepictale Labs Private Limited** — a technology company with two products: Goodbite (food scoring) and Living (AI home pages). The site serves dual purpose: establish company credibility (investors, partners, hiring) and funnel visitors to the two products.

## Tech Stack

- **Framework:** Next.js with static export (`output: 'export'`)
- **Styling:** Tailwind CSS
- **Fonts:** JetBrains Mono (headings, mono elements) + Inter (body text) via Google Fonts
- **Animations:** Pure CSS only — no JS animation libraries
- **No other external dependencies**

## Visual Identity

- **Aesthetic:** Dark monochrome with accent pops — technical, sharp, builder's portfolio feel
- **Background:** #0a0a0a (near-black)
- **Card background:** #111111
- **Text primary:** #ffffff
- **Text secondary:** #888888
- **Goodbite accent:** #22c55e (green)
- **Living accent:** #3b82f6 (blue)
- **Headings:** JetBrains Mono, uppercase, wide letter-spacing
- **Body:** Inter, regular weight
- **Edges:** Sharp — no border-radius on cards
- **No shadows** — contrast between surface colors does the work

## Page Structure

### Section 1: Hero

- Full-viewport height, dark background (#0a0a0a)
- Subtle animated dot grid or fine grid pattern at low opacity in background (CSS only)
- "Anepictale Labs" in large JetBrains Mono, white
- Tagline below in Inter: "Building products that make everyday life smarter."
- Thin horizontal rule (`#222`) separating hero from next section

### Section 2: Products

- Section heading: "Products" — monospaced, uppercase, wide letter-spacing
- Two product cards side by side (stacked on mobile)
- Cards: #111111 background, sharp edges (no border-radius), generous padding
- Left border in respective accent color

**Goodbite card:**
- Small green dot before name
- Name: "Goodbite" in JetBrains Mono
- Description: "A food scoring platform for Indian packaged food products."
- Link: "Visit goodbite.in →" in #22c55e

**Living card:**
- Small blue dot before name
- Name: "Living" in JetBrains Mono
- Description: "AI-powered personal home page builder for creators."
- Link: "Visit living.so →" in #3b82f6

### Section 3: About

- Section heading: "About" — same monospaced treatment
- Brief paragraph with a subtle left border (white/gray):
  > "Anepictale Labs is a technology company building products at the intersection of data, AI, and everyday life. Based in Gurgaon, India."
- Two lines max. Body in Inter.

### Section 4: Footer

- Separated from content by thin horizontal rule (`#222`)
- All text in JetBrains Mono at smaller size, #888 color
- Content (left-aligned, compact):
  - Contact: hello@anepictale.com
  - CIN: U62099HR2024PTC120917
  - Address: WeWork Two Horizon Center, Golf Course Road, DLF-5, Gurugram — 122002, Haryana
  - Copyright: © {dynamic year} Anepictale Labs Private Limited
- Year is rendered client-side via JavaScript (no hardcoded year)

## Responsive Behavior

- **Desktop (>=768px):** Product cards side by side in a two-column grid
- **Mobile (<768px):** Product cards stack vertically
- Hero text scales down appropriately
- Footer content remains single-column at all sizes

## Animation

- Subtle fade-in on scroll for sections using CSS `@keyframes` triggered by `IntersectionObserver` (a small client component)
- Background grid has a very slow, subtle pulse or static pattern — nothing distracting

## File Structure

```
anepictale/
  src/
    app/
      layout.tsx        # Root layout — fonts, metadata, body styling
      page.tsx          # Single page with all four sections
      globals.css       # Tailwind directives, custom CSS animations, grid pattern
  public/
    favicon.ico         # Simple favicon (can be placeholder initially)
  next.config.ts        # Static export config
  tailwind.config.ts    # Custom colors, fonts
  package.json
  tsconfig.json
```

## Metadata

- Title: "Anepictale Labs — Building products that make everyday life smarter"
- Description: "Anepictale Labs is a technology company building Goodbite and Living — products at the intersection of data, AI, and everyday life."
- Open Graph tags with same title/description

## Out of Scope

- No additional pages (About, Contact, etc.)
- No blog
- No CMS
- No analytics (can be added later)
- No logo design (text-only wordmark for now)
- No dark/light mode toggle (dark only)
