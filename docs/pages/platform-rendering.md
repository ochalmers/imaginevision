# Page Spec: /platform/rendering

## Meta
- **URL:** /platform/rendering
- **Title:** Rendering — Imagine Platform
- **Description:** Photorealistic product visuals for every valid configuration, generated instantly. No photoshoot. No manual asset work. Rendering infrastructure built for configurable commerce.

---

## Objective
Convince e-commerce and marketing leaders that Imagine's rendering engine eliminates the #1 bottleneck in launching and scaling configurable products online: the impossibility of photographing every valid combination. Show how it works technically without losing the business audience. Make the output feel undeniably real.

## Audience
- **Primary:** E-commerce managers, merchandising leaders, creative directors, and digital product owners at brands selling configurable physical goods
- **Secondary:** Developers evaluating the rendering API

## Key Message
Every valid configuration of your product deserves a photorealistic visual — and you shouldn't need a photoshoot to get one. Imagine renders any configuration, on demand, at production quality.

---

## Section Flow

### 1. Hero

**Headline options:**
- "Every configuration. Photorealistic. Instant."
- "Your entire product catalog. Rendered."
- "No photoshoot required. Every configuration, production-ready."

**Subheadline:**
Imagine's rendering engine generates photorealistic product visuals for any valid configuration — automatically, at scale, without a single additional shoot.

**CTAs:**
- Primary: "See it in action"
- Secondary: "Read the rendering docs"

**Design note:** Hero should feature a striking rendered product visual — a piece of configurable furniture or a lighting fixture — with a subtle overlay showing configuration state (e.g., fabric: Slate Linen, finish: Brushed Brass, size: 3-seat). Demonstrate the output before saying a word about the engine. Dark background, full-bleed.

---

### 2. What It Is

**Heading:** "A rendering engine designed for commerce — not studios."

**Content:**
Traditional product photography breaks down the moment you add configurability. A sofa with 12 fabric options, 4 leg finishes, and 3 sizes means 144 SKUs — and tens of thousands of dollars in photography and retouching before you've launched.

Imagine's rendering engine works from your structured product data and material libraries. Define a configuration state — fabric, finish, dimensions, components — and Imagine returns a production-quality image: consistent lighting, correct scale, accurate material representation.

**Key distinctions:**
- Generated from 3D product models and physically accurate material assets — not composited photography
- Every render matches real-world lighting, shadow, and material behavior
- Output is consistent across every configuration — same camera angle, same environment, same quality bar
- Delivered through API — integrates directly into your PDP, configurator, or catalog tooling

---

### 3. How It Works

**Heading:** "From configuration state to finished image."

**Subheading:** A four-stage pipeline.

**Pipeline stages:**

1. **Product model ingestion**
   Your product is modeled in 3D geometry — or translated from existing CAD or design files. The model captures accurate dimensions, component structure, and geometry for every configurable element.

2. **Material library definition**
   Each material option (fabric, finish, color, texture) is built as a physically accurate material asset — specular, roughness, normal maps calibrated to real-world behavior.

3. **Configuration resolution**
   A configuration state is submitted (via API or configurator UI). The engine validates it against your product rules, assembles the correct model, and applies the correct materials.

4. **Render and delivery**
   The composed scene is rendered against a defined environment (studio, lifestyle, transparent, shadow-only). Output is returned as high-resolution image files — JPEG, PNG, or WebP — via API response or webhook.

**Design note:** Numbered horizontal pipeline or vertical step list. Minimal illustration per step — icon or abstract visual. No excessive decoration. The technical clarity is the design.

---

### 4. What You Get

**Heading:** "Every output your commerce stack needs."

**Output types:**
- **PDP hero images** — Full-resolution, studio-quality product shots for every configuration state
- **Transparent PNGs** — Clean cutouts for use on any background, in ads, or in print
- **Lifestyle composites** — Product placed into room environments or scenes
- **Shadow-only renders** — For layering onto custom backgrounds
- **Thumbnail variants** — Optimized for swatch selectors, cart previews, and thumbnails
- **Video-ready frame sequences** — For animated configuration transitions *(roadmap)*

---

### 5. Use Cases

**Heading:** "Where rendering changes the business."

**Use cases:**

- **Product detail pages:** Show every valid configuration without a photoshoot. Customers see exactly what they're ordering — in the finish, fabric, and size they've chosen.
- **Configuration UX:** Update the hero image in real time as a customer makes selections. Rendering as a conversion tool, not just an asset pipeline.
- **Catalog launches:** Introduce new materials or options by adding assets to the library — not scheduling a shoot. Time-to-market measured in days, not months.
- **Marketing and ads:** Generate images for any configuration combination for campaigns — segment by color, style, or audience without reshooting.
- **B2B quoting and sales:** Sales teams generate accurate, client-ready visuals on the fly during a sales conversation.

---

### 6. Proof

**Heading:** "What production-quality looks like."

**Content:**
A visual gallery or before/after section showing:
- Side-by-side: traditional photo vs. Imagine render (matched environment, indistinguishable at a glance)
- Multi-configuration grid: same product, six configurations, six renders — all consistent
- Close-up material detail: fabric texture, wood grain, metal finish

**Design note:** This section is the proof of concept. It must be beautiful and load fast. Use real render outputs. No illustrations or mockups in this section — only actual engine output.

---

### 7. CTA

**Heading:** "See your products rendered."

**Subheadline:** Talk to the team about onboarding your product catalog and material library.

**CTAs:**
- Primary: "Request a rendering demo"
- Secondary: "Explore the rendering API"

---

## Design & Interaction Notes
- This page should feel like a premium visual tool — let the renders do the selling.
- Configuration state overlay on hero image should use a clean, monospaced or sans-serif label style — not a UI mockup.
- Pipeline diagram: horizontal flow with clean connectors. Numbers, not bullets.
- Gallery section: grid layout, cursor-driven or scroll-triggered reveal. No autoplay.
- Mobile: hero image remains full-bleed. Pipeline collapses to vertical. Gallery shows 2 columns.
