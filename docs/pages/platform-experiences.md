# Page Spec: /platform/experiences

## Meta
- **URL:** /platform/experiences
- **Title:** Experiences — Imagine Platform
- **Description:** Interactive configurators, embeddable viewers, and guided selling experiences — built on Imagine's platform and designed to convert.

---

## Objective
Show both e-commerce leaders and frontend developers that Imagine's experience layer is production-ready, flexible, and genuinely conversion-optimized — not a demo widget. Make buyers want to deploy it. Make developers want to build with it. Show it working in context.

## Audience
- **Primary:** E-commerce managers, UX leads, and digital product owners evaluating configurable commerce UX
- **Secondary:** Frontend developers building or customizing configurator and commerce experiences on top of Imagine

## Key Message
The gap between "our products are configurable" and "our customers can actually configure them" is an experience problem. Imagine closes that gap with a suite of deployable, customizable, commerce-integrated experience components — built on the same platform as the configuration engine and renderer.

---

## Section Flow

### 1. Hero

**Headline options:**
- "Commerce experiences that convert."
- "The experience layer for configurable commerce."
- "From configuration to cart. Every step, designed."

**Subheadline:**
Interactive configurators, embeddable viewers, visual product pages, and guided selling flows — purpose-built for configurable physical products, deployable in days, customizable to your brand.

**CTAs:**
- Primary: "See a live demo"
- Secondary: "Explore the components"

**Design note:** Hero should feature a live or video-loop demonstration of a configurator in action — a sofa or appliance being configured in real time, with renders updating as selections are made. This is the most visual page in the platform section. Let it breathe.

---

### 2. Types of Experiences

**Heading:** "Every touchpoint in the configurable commerce journey."

**Experience types — presented as cards or a tabbed/scrollable showcase:**

**Interactive Configurator**
The full configuration experience. Customers select options step-by-step, see real-time render updates, and add to cart with full configuration data attached. Validates against the configuration engine in real time — no invalid states reach checkout.
- Swatch selectors, option pickers, dimension inputs
- Live render preview (photorealistic, every state)
- Valid-state UI feedback — grayed-out unavailable options, clear conflict messages
- Cart integration with structured configuration payload

**Embeddable Visual Viewer**
A lightweight, embeddable component that displays a photorealistic render of any configuration state. Drop it into an existing PDP, a CMS page, or a marketing landing page without building a full configurator.
- Pass configuration state via props or URL params
- Supports transparent backgrounds, lifestyle environments, or custom scenes
- No configurator UI — just the render output, in context

**Visual Product Page**
A full product detail page template with configuration and rendering built in. Replaces a static PDP with a dynamic, render-driven experience — drop-in for Shopify, custom storefronts, or headless builds.
- Pre-built layout with render hero, option selectors, pricing, and cart
- Customizable via design tokens and slot-based overrides
- Optimized for Core Web Vitals — render requests are queued and cached intelligently

**Guided Selling Flow**
A structured, question-based flow that leads customers to the right configuration — based on use case, preference, or room context. Converts configuration complexity into a simple decision path.
- Step-based question flow with conditional logic
- Maps customer answers to valid configurations
- Connects to the full configurator for final refinement before cart

---

### 3. Embed Options

**Heading:** "Deploy where your customers already are."

**Content:**
Imagine's experience components are built to go where you need them — not to replace your existing stack.

**Deployment options:**

- **React components** — First-class React/TypeScript components. Props-driven configuration, design token theming, slot-based customization.
- **Web component / custom element** — Framework-agnostic embed. Drop into any CMS, Shopify Liquid template, or static site with a single script tag.
- **iFrame embed** — Hosted by Imagine. Zero front-end dependency. Ideal for quick deploys or third-party embedding (showrooms, B2B portals, sales tools).
- **Headless API** — Use Imagine's rendering and configuration API to build entirely custom experiences. The components are optional — the infrastructure is always available.

**Design note:** A clean four-column feature grid or icon list. Concise. Developers should immediately see their preferred integration path.

---

### 4. Commerce Platform Integrations

**Heading:** "Works with the commerce stack you already run."

**Integrations:**

- **Shopify / Shopify Plus** — Native integration via Imagine's Shopify app. Configuration and renders sync to product metafields. Cart integration passes structured configuration data to line item properties.
- **Salesforce Commerce Cloud** — Cartridge-based integration. Product systems sync. Configurator embed supported on PDP and category pages.
- **Custom / Headless** — Full API access. Bring your own storefront — Remix, Next.js, Nuxt, or static. Imagine handles configuration, rendering, and product data. You own the layout and checkout.
- **B2B / Sales tools** — Embed experiences in sales portals, quoting tools, or showroom kiosks. Configuration state exports as structured JSON for downstream order systems.

---

### 5. Developer Controls

**Heading:** "Customizable down to the component level."

**Content:**
Imagine's experience components are designed to be themeable and extensible — not locked down.

**Developer capabilities:**

- **Design tokens** — Override colors, typography, spacing, border radius, and component sizing via a token system. Match your brand system without forking the component.
- **Slot-based composition** — Insert custom content into defined slots (header, footer, below-swatch, next-to-render) without modifying component internals.
- **Event API** — Listen to configuration events (`selection.changed`, `render.ready`, `cart.add`) and drive custom UI, analytics, or third-party integrations.
- **State management hooks** — Access raw configuration state via React hooks for building custom UI alongside the core components.
- **Custom render environments** — Override the default render environment (studio, lifestyle, custom scene) per product or per page.

**Code example:**
```tsx
<ImagineConfigurator
  productId="sofa-arc-01"
  onSelectionChange={(state) => analytics.track('config_step', state)}
  onAddToCart={(config) => shopify.addToCart(config)}
  theme={{ accent: '#1A1A1A', fontFamily: 'PP Neue Montreal' }}
/>
```

---

### 6. Closing CTA

**Heading:** "Your configurable products deserve a configurable experience."

**Subheadline:** See how Imagine's experience layer performs on products like yours.

**CTAs:**
- Primary: "Request a live demo"
- Secondary: "Explore the component docs"

---

## Design & Interaction Notes
- This is the most visual page in the platform section. Use real experience screenshots or video loops — not mockups.
- The configurator demo in the hero should be interactive if technically feasible on the marketing site.
- Experience type cards: each should have a clear visual (screenshot or abstract illustration) alongside the copy. Not pure text.
- The developer controls section transitions the tone from buyer-facing to dev-facing — let that transition feel intentional, not jarring.
- Mobile: embed option grid collapses to 2 columns. Code block scrolls horizontally. Video/demo hero adapts to portrait-oriented product view.
