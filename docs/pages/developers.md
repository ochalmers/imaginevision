# Page Spec: /developers

## Page Objective
Serve as the primary entry point for all technical builders evaluating or working with Imagine. Convert curious developers into active integrators by communicating the breadth, quality, and developer-first design of the platform.

## Audience
- Frontend engineers evaluating the SDK and component library
- Technical leads assessing platform fit before recommending to procurement
- Solution architects mapping Imagine's capabilities to a larger commerce stack

## Key Message
Imagine is infrastructure built for developers first. The API is well-designed, the SDK is ergonomic, and the primitives are flexible enough to build anything from a simple product configurator to a full headless commerce experience.

---

## Section Flow

### 1. Hero

**Heading:** Build configurable commerce. On a platform designed for developers.

**Subheading:** REST API, JavaScript SDK, React components, and webhooks — everything you need to add real-time product configuration and photorealistic rendering to any storefront.

**Code snippet (inline, syntax-highlighted):**
```javascript
import { Imagine } from '@imagine/sdk';

const imagine = new Imagine({ apiKey: process.env.IMAGINE_API_KEY });

const result = await imagine.render({
  productId: 'sofa-alto-xl',
  configuration: {
    fabric: 'boucle-ivory',
    legs: 'walnut',
    dimensions: 'W240 D95 H78',
  },
  scene: 'living-room-natural-light',
});

console.log(result.imageUrl); // https://cdn.imagine.so/renders/abc123.jpg
```

**CTAs:**
- Primary: Get API Key
- Secondary: Read the Docs

---

### 2. Capability Tiles (4-up grid)

Each tile: icon, title, one-sentence description, link.

**Tile 1 — REST API**
Title: REST API
Description: A clean, versioned API with predictable endpoints, consistent error shapes, and full OpenAPI documentation.
Link: /developers/api

**Tile 2 — JavaScript SDK**
Title: JavaScript SDK
Description: npm-installable SDK with TypeScript support. First-class methods for rendering, configuration, and experience management.
Link: /developers/sdk

**Tile 3 — React Components**
Title: React Components
Description: Drop-in UI primitives — configurator panels, swatch selectors, render viewers — built on top of the SDK.
Link: /developers/sdk#react

**Tile 4 — Webhooks**
Title: Webhooks
Description: Real-time event delivery for render completion, configuration changes, and order events. Signed payloads, retry logic included.
Link: /developers/docs#webhooks

---

### 3. Quickstart Path

**Heading:** From zero to rendered in under 10 minutes.

**Steps (numbered, horizontal on desktop):**

1. **Get your API key** — Sign up and generate a key from the dashboard. No credit card required to start.
2. **Install the SDK** — `npm install @imagine/sdk`. Initialize with your key and make your first render call.
3. **Embed the configurator** — Drop the React configurator component into your product page. Point it at a product ID.

**CTA:** Start the quickstart guide →

---

### 4. What You Can Build

**Heading:** Built by developers. For every commerce context.

**Short prose (2–3 sentences):** Imagine's API and SDK are intentionally low-level enough to compose into any architecture — headless Shopify storefronts, custom Next.js builds, B2B specification tools, or embedded configurators inside native apps. The rendering engine handles the visual complexity. You handle the product experience.

**Use case tags (inline chips):** Product configurator · Visual PDP · Batch render pipeline · Specification tool · Showroom kiosk · B2B quoting UI

---

### 5. Community and Ecosystem

**Heading:** Built in the open. Supported in public.

**Links:**
- GitHub: github.com/imagine-so — SDK, component library, example repos
- Discord: Community server for builders (link)
- Changelog: /product-updates — what shipped this month
- Status: status.imagine.so — real-time API health

---

### 6. Footer CTA

**Heading:** Ready to build?

**Subheading:** Get your API key and make your first render call in minutes.

**CTAs:**
- Primary: Get API Key
- Secondary: View API Reference

---

## Copy Notes
- Avoid marketing language in this section. Developers trust specificity over adjectives.
- Code examples should be real, runnable snippets — not pseudocode.
- Tone: Stripe's developer docs. Direct, precise, no filler.

## Design Notes
- Dark background hero with syntax-highlighted code block prominent above the fold
- Capability tiles use monospace labels for technical terms
- Quickstart steps displayed as a connected progress indicator
- No hero imagery — code is the visual
