# Imagine Design System Strategy

**Version:** 1.0
**Scope:** Marketing site and developer documentation
**Audience:** Designers, engineers, and AI build tools (Claude / Cursor)

---

## 1. Design Principles

These principles govern every design decision — from token naming to component API to page layout.

### 1.1 Product-first
Every design decision exists to serve the product narrative. Decoration without purpose is noise. Typography, spacing, and colour are tools for communication, not expression.

### 1.2 Dual-audience coherent
The same design system powers company-facing marketing pages and developer-facing documentation. Components must work in both contexts without modification — only content changes.

### 1.3 Technically credible
Developer pages must feel like they were designed by people who write code. Code blocks are first-class UI elements. Monospace type is treated with as much care as display type. The system should make developers trust the product before they read the documentation.

### 1.4 Minimal and confident
The system uses restraint as a design tool. Whitespace is intentional. Elements are included because they earn their place. The visual language should feel opinionated — like Linear or Vercel — not like a starter kit.

### 1.5 Scalable without degrading
As new pages, sections, and capabilities are added, the system should handle them without requiring custom solutions. Every new page should feel like it belongs to the same product.

---

## 2. Visual Direction

### 2.1 Aesthetic

The Imagine website uses a **dark foundation** with selective use of light surfaces for contrast and hierarchy. This communicates:
- Technical depth (dark = developer trust)
- Premium quality (dark + high contrast = brand confidence)
- Platform credibility (feels like infrastructure, not brochure)

Light mode is available but secondary. The default experience is dark.

### 2.2 References

| Reference | What to borrow |
|---|---|
| **Stripe** | Clean sections, code blocks, conversion architecture, CTA placement |
| **Vercel** | Dark aesthetic, developer-first language, performance feel |
| **Linear** | Minimal components, confident spacing, opinionated defaults |
| **Apple** | Product imagery treatment, headline confidence, motion restraint |

### 2.3 What to Avoid

- Gradients used decoratively without meaning
- Glassmorphism or over-layered effects
- Stock photography of people using laptops
- Icon sets that look generic or clipart-adjacent
- Animations that serve visual flair rather than communication

---

## 3. Design Tokens

Tokens are the atomic layer of the system. All components and layouts reference tokens. No raw hex values in component code.

### 3.1 Colour Tokens

#### Brand
```css
--color-accent:        #EC4E0B;   /* Papaya — primary CTA, highlights, focus */
--color-accent-hover:  #D44509;   /* Papaya dark — hover states */
--color-accent-subtle: rgba(236, 78, 11, 0.12);  /* Accent backgrounds, tags */
```

#### Background
```css
--color-bg:            #0E0E0E;   /* Primary page background */
--color-bg-raised:     #141414;   /* Slightly elevated surface */
--color-surface:       #1C1C1C;   /* Card, panel, sidebar surface */
--color-surface-alt:   #242424;   /* Elevated card, hover state */
--color-surface-border:#2E2E2E;   /* Border on surfaces */
```

#### Text
```css
--color-text:          #F2F2F0;   /* Primary body text */
--color-text-muted:    #8A8A88;   /* Secondary text, captions, metadata */
--color-text-subtle:   #5A5A58;   /* Tertiary text, disabled states */
--color-text-inverse:  #141414;   /* Text on light backgrounds */
```

#### Semantic
```css
--color-border:        #2E2E2E;   /* Default border */
--color-border-subtle: #242424;   /* Subtle divider */
--color-border-focus:  #EC4E0B;   /* Focus ring */
--color-link:          #EC4E0B;   /* Inline link colour */
--color-code-bg:       #181818;   /* Code block background */
--color-code-text:     #D4D4D4;   /* Code block text */
```

#### Light mode overrides (via [data-theme="light"])
```css
--color-bg:            #FAFAF8;
--color-bg-raised:     #F4F4F2;
--color-surface:       #EEEEEC;
--color-surface-alt:   #E6E6E4;
--color-surface-border:#DADADD;
--color-text:          #141414;
--color-text-muted:    #5A5A5A;
--color-text-subtle:   #909090;
--color-border:        #D4D4D2;
--color-border-subtle: #E0E0DE;
--color-code-bg:       #F0F0EE;
--color-code-text:     #2E2E2E;
```

### 3.2 Typography Tokens

#### Font families
```css
--font-sans:  'PP Neue Montreal', system-ui, -apple-system, sans-serif;
--font-mono:  'Cousine', 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
```

#### Type scale
```css
--text-xs:    0.6875rem;   /* 11px — labels, tags, metadata */
--text-sm:    0.8125rem;   /* 13px — captions, small body */
--text-base:  0.9375rem;   /* 15px — default body */
--text-md:    1.0625rem;   /* 17px — emphasis body */
--text-lg:    1.25rem;     /* 20px — section sub-headings */
--text-xl:    1.5rem;      /* 24px — card headings */
--text-2xl:   2rem;        /* 32px — section headings */
--text-3xl:   2.75rem;     /* 44px — page headings */
--text-4xl:   3.5rem;      /* 56px — hero headings */
--text-5xl:   4.5rem;      /* 72px — display headings */
```

#### Font weights
```css
--weight-regular: 400;
--weight-medium:  500;
--weight-semibold: 600;
```

#### Line heights
```css
--leading-tight:  1.1;   /* Display headings */
--leading-snug:   1.25;  /* Section headings */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.7;  /* Long-form content */
```

#### Letter spacing
```css
--tracking-tight:  -0.02em;   /* Large display text */
--tracking-normal:  0;         /* Body text */
--tracking-wide:    0.08em;    /* Uppercase labels */
--tracking-widest:  0.14em;    /* Section tags */
```

### 3.3 Spacing Tokens

8px base unit. All layout, padding, and gap values are multiples.

```css
--space-1:  4px;    /* Sub-element micro spacing */
--space-2:  8px;    /* Tight component spacing */
--space-3:  16px;   /* Default component spacing */
--space-4:  24px;   /* Component to component */
--space-5:  32px;   /* Section element spacing */
--space-6:  48px;   /* Section padding */
--space-7:  64px;   /* Large section gap */
--space-8:  96px;   /* Section to section */
--space-9:  128px;  /* Hero padding */
--space-10: 192px;  /* Extra large section separation */
```

### 3.4 Border Radius Tokens

```css
--radius-sm:   4px;    /* Tags, badges, small elements */
--radius-md:   8px;    /* Cards, inputs, buttons */
--radius-lg:   12px;   /* Large cards, panels */
--radius-xl:   16px;   /* Feature sections, large containers */
--radius-full: 9999px; /* Pills, fully rounded elements */
```

### 3.5 Shadow Tokens

```css
--shadow-sm:  0 1px 3px rgba(0,0,0,0.4);
--shadow-md:  0 4px 16px rgba(0,0,0,0.3);
--shadow-lg:  0 8px 32px rgba(0,0,0,0.25);
--shadow-accent: 0 4px 20px rgba(236,78,11,0.25);
```

---

## 4. Layout Primitives

### 4.1 Grid System

The layout uses a 12-column grid with:
- Max content width: `1200px`
- Outer padding: `32px` (desktop), `20px` (tablet), `16px` (mobile)
- Column gap: `24px`

```css
--grid-cols: 12;
--grid-gap:  24px;
--content-max: 1200px;
--content-pad: clamp(16px, 4vw, 32px);
```

### 4.2 Content Width Classes

```css
.w-full   { max-width: 100%; }
.w-wide   { max-width: 1200px; }
.w-content{ max-width: 960px; }
.w-prose  { max-width: 720px; }
.w-narrow { max-width: 560px; }
```

### 4.3 Section Spacing

All page sections use consistent vertical spacing:
```css
.section { padding: var(--space-9) 0; }
.section + .section { padding-top: 0; }
.section-sm { padding: var(--space-7) 0; }
```

---

## 5. Core Components

### 5.1 Buttons

Three variants: primary, secondary, ghost.

```css
/* Primary */
.btn-primary {
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-md);
  font-weight: var(--weight-semibold);
  padding: 10px 20px;
}

/* Secondary */
.btn-secondary {
  background: var(--color-surface-alt);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}
```

Sizes: `sm` (32px height), `md` (40px, default), `lg` (48px)

### 5.2 Cards

Two types: feature card (marketing) and data card (technical).

**Feature card:**
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Border radius: `--radius-lg`
- Padding: `var(--space-5)`
- Hover: `border-color: --color-surface-alt`, subtle lift shadow

**Code card (developer):**
- Background: `--color-code-bg`
- Border: `1px solid --color-border`
- Monospace font
- Syntax highlighting tokens

### 5.3 Code Blocks

Code blocks are first-class design elements.

```css
.code-block {
  background: var(--color-code-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-code-text);
  overflow-x: auto;
}
```

Optional: language label tab, copy-to-clipboard button (top right), line numbers.

### 5.4 Navigation

**Top navigation:**
- Logo left
- Nav links centre (Platform, Solutions, Industries, Developers, Resources, Company)
- CTA button right (`Request a demo` — accent filled)
- Background: transparent until scroll, then `var(--color-bg)` + subtle border
- Height: 64px

**Mobile navigation:**
- Hamburger icon right
- Full-screen overlay with stacked links
- CTA button at bottom

### 5.5 Section Tags / Labels

Uppercase overline labels above section headings.

```css
.section-tag {
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent);
}
```

### 5.6 Stat Display

Large numeric callouts for proof sections.

```css
.stat-value { font-size: var(--text-4xl); font-weight: var(--weight-semibold); }
.stat-label { font-size: var(--text-sm); color: var(--color-text-muted); }
```

### 5.7 Feature Grid

A 2, 3, or 4-column grid of feature tiles. Each tile: icon (optional), heading, body text.

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-4);
}
```

### 5.8 Audience Split

Two-column CTA card used on homepage and relevant landing pages.

```css
.audience-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}
```

---

## 6. Reusable Page Patterns

### 6.1 Hero Pattern (Marketing)

```
[Section tag]
[H1 — large display heading]
[Sub-headline — 2 lines max]
[CTA group — primary + secondary]
[Hero visual — product / code / abstract]
```

### 6.2 Feature Section Pattern

```
[Section tag]
[H2]
[Optional intro paragraph]
[Feature grid or tabbed feature]
[CTA — text link or button]
```

### 6.3 Proof Section Pattern

```
[Logo row]
[Stat grid — 3 or 4 metrics]
[Featured quote — blockquote with attribution]
[Case study link]
```

### 6.4 Developer Section Pattern

```
[Section tag — "For developers"]
[H2]
[Code block — prominent, real example]
[Feature list — 4 bullet points]
[CTA — "Get API key" or "Read the docs"]
```

### 6.5 Audience Split Pattern

```
[H2 — "Built for companies and developers"]
[Two-column card grid — one per audience]
[Each card: label, heading, sub, primary CTA]
```

### 6.6 Page Header (Docs/Resources)

```
[Breadcrumb]
[H1]
[Lead paragraph]
[Tag list — audience, topic]
[Optional: time to read, last updated]
```

---

## 7. Design System and Marketing vs Developer Pages

### Marketing Pages (/, /platform, /solutions, /industries)
- Large display type (--text-4xl to --text-5xl for heroes)
- Visual-forward: product imagery, renders, configurator demos
- Section spacing: generous (--space-9 to --space-10)
- CTA buttons: prominent, accent colour
- Code blocks: occasional, for credibility, not primary content

### Developer Pages (/developers, /developers/*)
- Smaller display type (--text-3xl for page titles)
- Content-forward: code blocks, parameter tables, response examples
- Section spacing: tighter (--space-6 to --space-8)
- Navigation: persistent sidebar for docs hierarchy
- Code blocks: primary content, multiple per page
- Monospace type: hero-level prominence

### Shared Elements
- Navigation (identical across all pages)
- Footer
- Colour tokens and font tokens
- Button components
- Card components (different content, same container)

---

## 8. How Claude / AI Should Use This System

When generating new pages or components with Claude or Cursor, always:

1. **Reference token names** — never use raw hex values or pixel values in generated code. Use `var(--color-accent)`, `var(--space-5)`, etc.

2. **Use defined component classes** — reference `.btn-primary`, `.feature-grid`, `.section-tag`, `.code-block` rather than writing custom inline styles.

3. **Follow page pattern templates** — use the patterns in Section 6 as the structural starting point for any new page. Don't invent new patterns; extend existing ones.

4. **Maintain audience clarity** — when generating copy, always know which audience is being addressed. Use the language split defined in the website strategy document.

5. **Code blocks on developer pages** — any developer-facing page should include at least one code block showing a real API call or SDK usage. Code should look like it was written by a good engineer.

6. **Check the sitemap first** — before generating a new page, verify its URL, purpose, and audience in `docs/sitemap/full-sitemap.md`.

7. **Prompt structure for page generation:**
```
Page: [page name]
Spec: [reference to docs/pages/[page].md]
Design system: [reference to docs/design-system/design-system-strategy.md]
Task: Build the HTML/CSS for this page using the design system tokens and component patterns.
```
