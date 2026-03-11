# Page Spec: /developers/docs

## Page Objective
Serve as the structured entry point to all technical documentation. Help developers find what they need quickly — whether they are starting from zero or looking for a specific reference. Navigation clarity is the primary UX goal of this page.

## Audience
- First-time integrators looking for a quickstart path
- Active developers looking for specific guides (webhooks, authentication, rendering)
- Technical leads reviewing platform documentation completeness before committing

## Key Message
Everything you need to build on Imagine is here, organised by task. Start with the quickstart. Go deeper with guides. Reference the API when you need precision.

---

## Section Flow

### 1. Hero

**Heading:** Everything you need to build.

**Subheading:** Quickstart guides, technical references, integration walkthroughs, and API documentation — structured so you can find what you need and move fast.

**Search bar:** (prominent) Search documentation…

**Quick links (horizontal chips below search):**
- Quickstart
- Authentication
- Rendering
- Configuration
- Webhooks
- API Reference
- SDK Reference

---

### 2. Quickstart Guide

**Heading:** New here? Start in three steps.

**Step 1 — Install the SDK**
```bash
npm install @imagine/sdk
# or
yarn add @imagine/sdk
```
Time: 1 minute. Prerequisites: Node.js 18+.

**Step 2 — Initialize and authenticate**
```javascript
import { Imagine } from '@imagine/sdk';

const imagine = new Imagine({
  apiKey: process.env.IMAGINE_API_KEY,
});
```
Your API key is available in the Imagine dashboard under Settings > API Keys. Never commit keys to source control — use environment variables.

**Step 3 — Make your first render call**
```javascript
const render = await imagine.render({
  productId: 'your-product-id',
  configuration: {
    finish: 'matte-white',
    material: 'oak',
  },
  scene: 'studio-neutral',
});

console.log(render.imageUrl);
```
A completed render returns a signed CDN URL. The average render time is under 4 seconds.

**CTA:** Read the full quickstart guide →

---

### 3. Guides by Category

**Heading:** Go deeper. Pick a topic.

Six guide categories, each shown as a card with title, description, and 2–3 linked guide titles.

**Authentication**
Set up API keys, generate client tokens, and manage scoped access for frontend integrations.
- API Key setup and rotation
- Generating short-lived client tokens
- Role-based access and scopes

**Rendering**
Understand the render pipeline — from configuration object to CDN-hosted image.
- How the render pipeline works
- Scene presets and custom scenes
- Batch rendering at scale
- Render webhooks and async delivery

**Configuration**
Build valid product configurations and understand constraint logic.
- Configuration objects and validation
- Option rules and compatibility constraints
- Saving and retrieving configurations

**Webhooks**
Receive real-time events from Imagine — render completion, configuration saves, order events.
- Webhook setup and endpoint registration
- Payload structure and event types
- Signature verification
- Retry logic and failure handling

**Integrations**
Connect Imagine to your existing commerce and CMS stack.
- Shopify integration guide
- Contentful integration
- Custom headless architecture patterns
- Server-side rendering with Next.js

**SDKs and Components**
Go beyond the raw API with the JavaScript SDK and React component library.
- SDK initialisation and configuration
- React configurator component
- Vue composable
- Custom UI with SDK primitives

---

### 4. API Reference Callout

**Heading:** Need the exact spec?

**Body:** The full API reference documents every endpoint, parameter, response shape, and error code. Searchable, versioned, and generated directly from the OpenAPI spec.

**CTA:** Open API Reference →

**Secondary note:** API version: v1 · OpenAPI spec available for download

---

### 5. SDK Reference Callout

**Heading:** Building with the SDK?

**Body:** The SDK reference documents every method, type, and hook. Includes TypeScript definitions and framework-specific usage for React and Vue.

**CTA:** Open SDK Reference →

---

### 6. Changelog

**Heading:** What's changed.

**Body:** New endpoints, breaking changes, deprecations, and SDK releases — all tracked in the changelog. Subscribe to get updates by email.

**Link:** View changelog → /product-updates

**Recent entries (inline, 2–3 lines each):**
- March 2026 — SDK v2.4.0: `useImagineRender` hook, improved TypeScript inference
- February 2026 — API v1: `/v1/experiences` endpoint group now in general availability
- January 2026 — Render engine: average render time reduced to under 3.5 seconds

---

### 7. Support CTA

**Heading:** Stuck? We're here.

**Options:**
- Discord community — ask the community and the Imagine team (link)
- GitHub Issues — report bugs or request features in the SDK (link)
- Email support — support@imagine.so for account and billing questions

**CTA:** Join the Discord →

---

## Copy Notes
- This is primarily a navigation page — clarity and scannability matter more than prose.
- Every guide category should link to at least 2 real guide titles to feel substantive.
- The quickstart must be opinionated — tell developers exactly what to do, not what their options are.

## Design Notes
- Persistent left sidebar navigation with expandable guide categories
- Quickstart section can collapse once user has visited it (using localStorage)
- Guide category cards in a 2 or 3-column grid on desktop
- Search is the primary interaction — make it prominent and functional
- Dark/light mode support
