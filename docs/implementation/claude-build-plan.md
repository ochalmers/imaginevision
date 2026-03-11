# Claude Build Plan — Imagine Website

**Version:** 1.0
**Purpose:** Practical implementation guide for building the Imagine website using Claude Code / Cursor
**Audience:** Engineers, designers, and AI build tools

---

## 1. Project Folder Structure

```
imagine-website/
│
├── docs/                          ← Strategy + spec documents (this repo)
│
├── src/
│   ├── index.html                 ← Homepage
│   ├── platform/
│   │   ├── index.html             ← /platform hub
│   │   ├── rendering.html
│   │   ├── configuration.html
│   │   ├── product-systems.html
│   │   ├── experiences.html
│   │   └── apis.html
│   ├── solutions/
│   │   ├── index.html
│   │   ├── product-configurators.html
│   │   ├── visual-product-pages.html
│   │   ├── marketing-visualisation.html
│   │   └── product-design.html
│   ├── industries/
│   │   ├── index.html
│   │   ├── furniture.html
│   │   ├── mattresses.html
│   │   ├── appliances.html
│   │   └── lighting.html
│   ├── developers/
│   │   ├── index.html
│   │   ├── api.html
│   │   ├── docs.html
│   │   ├── examples.html
│   │   └── sdk.html
│   ├── resources/
│   │   ├── index.html
│   │   └── [blog|guides|case-studies|product-updates]/
│   │       └── index.html
│   └── company/
│       ├── about.html
│       ├── careers.html
│       └── contact.html
│
├── styles/
│   ├── tokens.css                 ← All design tokens (single source of truth)
│   ├── base.css                   ← Reset, body, typography base
│   ├── components.css             ← Buttons, cards, code blocks, nav, etc.
│   ├── layout.css                 ← Grid, containers, section spacing
│   ├── patterns.css               ← Reusable page patterns (hero, feature-grid, etc.)
│   ├── marketing.css              ← Marketing page-specific styles
│   └── developers.css             ← Developer page-specific styles
│
├── scripts/
│   ├── theme.js                   ← Dark/light mode toggle
│   ├── nav.js                     ← Mobile navigation
│   └── [feature-specific].js
│
├── assets/
│   ├── fonts/                     ← PP Neue Montreal woff2 files
│   ├── images/                    ← Product renders, OG images
│   ├── icons/                     ← SVG icon set
│   └── logos/                     ← Customer logos, partner logos
│
└── CLAUDE.md                      ← Instructions for Claude when working in this repo
```

---

## 2. CLAUDE.md — Root Instructions File

Create a `CLAUDE.md` file at the root of the project. This file is automatically read by Claude Code at the start of every session. It should contain:

```markdown
# Imagine Website — Claude Instructions

## Project
This is the Imagine website. Imagine powers configurable commerce.

## Documentation
All strategy, specs, and design system docs are in /docs.
Always reference the relevant page spec in /docs/pages/ before building a page.
Always reference /docs/design-system/design-system-strategy.md for tokens and components.

## Design System
- Use CSS variables from styles/tokens.css — never raw values
- Use component classes from styles/components.css — never rewrite components
- Follow page patterns in styles/patterns.css

## Audiences
- Companies: use commercial language, demo CTAs
- Developers: use technical language, API key / docs CTAs
- Never mix audience CTAs on the same page

## CSS Class Conventions
- BEM-like: .component, .component__element, .component--modifier
- Page-specific classes: .pg-[pagename]-[element]
- Section tags use .section-tag class
- Follow existing class names in components.css before inventing new ones

## When Building a Page
1. Read docs/pages/[pagename].md for the spec
2. Read docs/design-system/design-system-strategy.md for component guidance
3. Reference an existing page for structural patterns
4. Use tokens.css variables throughout
5. Test at 375px (mobile), 768px (tablet), 1200px (desktop)

## Do Not
- Invent new CSS tokens — use or extend existing ones
- Use inline styles except for dynamic values (e.g., --pct: 30%)
- Use external CDN fonts — all fonts are local in /assets/fonts/
- Add JavaScript unless it solves a real UX problem
- Use libraries unless agreed — vanilla CSS/JS first
```

---

## 3. CSS Architecture

### tokens.css
The single source of truth for all design values. Nothing else should define raw colours, spacing, or type values.

Structure:
```css
:root {
  /* Colour — brand */
  /* Colour — background */
  /* Colour — text */
  /* Colour — semantic */
  /* Typography — families */
  /* Typography — scale */
  /* Typography — weight */
  /* Typography — leading */
  /* Typography — tracking */
  /* Spacing */
  /* Border radius */
  /* Shadows */
  /* Layout */
}
[data-theme="light"] { /* all light-mode overrides */ }
```

### base.css
- CSS reset (box-sizing, margin/padding zero)
- Body defaults (font-family, background, color, line-height)
- `html { scroll-behavior: smooth; }`
- Heading defaults (no margin, inherit font-family)
- Link defaults

### components.css
One section per component. Each component uses only token variables.
```
/* ─── Buttons ───── */
/* ─── Cards ─────── */
/* ─── Code blocks ── */
/* ─── Navigation ─── */
/* ─── Tags/badges ── */
/* ─── Stats ─────── */
/* ─── Forms ─────── */
/* ─── Footer ─────── */
```

### layout.css
- `.container` — max-width wrapper
- `.section` — vertical section spacing
- `.grid-2`, `.grid-3`, `.grid-4` — responsive column grids
- `.split-2` — 50/50 two-column layout
- `.split-content` — text + visual split (60/40)

### patterns.css
Composed patterns that use layout + component classes.
- `.hero` — full page hero pattern
- `.feature-section` — section tag + heading + grid
- `.proof-section` — logos + stats + quote
- `.developer-callout` — dark code-forward section
- `.audience-split` — two-column audience cards
- `.page-header` — docs/resource page header

---

## 4. Page Build Prompts

### Standard prompt structure for page generation:

```
Build the HTML page for [page name].

Spec: Read docs/pages/[spec-file].md
Design system: Read docs/design-system/design-system-strategy.md
Reference: Look at src/index.html for navigation and footer patterns

Requirements:
- Use CSS variables from styles/tokens.css only
- Use component classes from styles/components.css
- Follow the section structure in the page spec
- Include all CTAs defined in the spec
- Mobile-responsive (375px minimum)
- Include the standard navigation and footer
- Add the Figma capture script if this is a design capture page
```

### Homepage prompt:
```
Build src/index.html.
Spec: docs/pages/homepage.md
Follow the 5-section narrative flow: Hero → Challenge → Platform → Proof → Paths
Hero: dual CTA (Request a demo / Get API access)
Hero visual: product configuration grid (use placeholder renders or CSS-based demo)
Platform section: 4 tabbed capabilities
Proof: logo row + 3 stats + pull quote
Paths: audience split card (companies / developers)
```

### Developer page prompt:
```
Build src/developers/index.html.
Spec: docs/pages/developers.md
This is a developer-first page. Include a prominent code block in the hero section.
Use developer language throughout. Primary CTA: Get API access.
Use the developer.css styles for code blocks and technical elements.
```

### Industry page prompt:
```
Build src/industries/[vertical].html.
Spec: docs/pages/industries-[vertical].md
This page speaks exclusively to [vertical] brand buyers. Use vertical-specific language.
Include the industry-specific challenges, solution mapping, and proof section.
Primary CTA: Request a demo.
```

---

## 5. Build Order (Phased)

### Phase 1 — Foundation (Week 1–2)

**Build first:**
1. `styles/tokens.css` — complete token set
2. `styles/base.css` — reset and defaults
3. `styles/components.css` — all core components
4. `styles/layout.css` — grid and containers
5. Navigation component (shared across all pages)
6. Footer component (shared across all pages)

**Why:** Every page depends on these. Build once, reference everywhere. Getting tokens right at the start prevents expensive refactoring.

**Then build:**
7. `src/index.html` — homepage
8. `src/developers/index.html` — developer hub

**Why:** These are the two highest-traffic, highest-conversion pages. They also exercise the full design system — marketing patterns (homepage) and technical patterns (developers).

### Phase 2 — Platform + Solutions (Week 2–3)

9. `src/platform/index.html`
10. `src/platform/rendering.html`
11. `src/platform/apis.html`
12. `src/solutions/index.html`
13. `src/solutions/product-configurators.html`

**Why:** Platform is the primary credibility section for both audiences. Solutions drives demo conversion.

### Phase 3 — Industries + Developers Depth (Week 3–4)

14. `src/industries/index.html`
15. `src/industries/furniture.html`
16. `src/industries/appliances.html`
17. `src/developers/api.html`
18. `src/developers/docs.html`
19. `src/developers/sdk.html`

**Why:** Industries pages support campaign targeting and SEO. Developer depth (API, docs, SDK) is required for developer conversion.

### Phase 4 — Content + Company (Week 4+)

20. Remaining platform sub-pages
21. Remaining solutions sub-pages
22. Remaining industry sub-pages
23. Resources hub
24. About, careers, contact

---

## 6. Maintaining Consistency Across Pages

### Token enforcement
All CSS is written against token variables. Running a search for raw hex values (`#`) in `src/` CSS files should return zero results (except inside `assets/`).

### Navigation and footer
Navigation and footer are defined once as HTML partials (or copied consistently). Never modify navigation structure in individual page files — update the shared template.

### Heading hierarchy
Every page follows: H1 (page title, one per page) → H2 (sections) → H3 (sub-sections). No skipping levels.

### CTA consistency
Check the sitemap (`docs/sitemap/full-sitemap.md`) for the defined primary and secondary CTAs for each page. Never invent new CTAs — use defined patterns.

### Section tag style
Every section that uses a tag label uses the `.section-tag` class. The text should be: `[Category] — [Specificity]` e.g., `Platform — Rendering` or `02 — Audience`.

### Code blocks
Any page in the `/developers/` section must include at least one code block with a real (or realistic-looking) API call or SDK usage example.

---

## 7. What Files Claude Should Reference

For every build task, Claude should have access to:

| Task | Files to reference |
|---|---|
| Any new page | `docs/pages/[pagename].md` + `docs/design-system/design-system-strategy.md` |
| Token updates | `docs/design-system/design-system-strategy.md` → Section 3 |
| New component | `docs/design-system/design-system-strategy.md` → Section 5 |
| Copy/messaging | `docs/strategy/website-strategy.md` → Sections 2, 3, 7 |
| CTA decisions | `docs/sitemap/full-sitemap.md` |
| Audience alignment | `docs/strategy/website-strategy.md` → Section 3 |
| Build order questions | This document → Section 5 |

---

## 8. Testing Checklist (Per Page)

Before considering a page complete:

- [ ] Displays correctly at 375px, 768px, 1440px
- [ ] All CTAs present and match the spec / sitemap
- [ ] No raw colour or spacing values (only token variables)
- [ ] Code blocks (if developer page) are syntactically valid and realistic
- [ ] Dark mode correct
- [ ] Light mode correct (if toggle implemented)
- [ ] Navigation links work
- [ ] Page title and meta description set
- [ ] Section headings follow correct H1→H2→H3 hierarchy
- [ ] Images have alt text
- [ ] Accessible: tab order logical, focus states visible
