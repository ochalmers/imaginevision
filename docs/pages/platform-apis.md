# Page Spec: /platform/apis

## Meta
- **URL:** /platform/apis
- **Title:** APIs — Imagine Platform
- **Description:** A complete REST API for configurable commerce. Render, configure, and manage product systems programmatically. Built for developers who build production systems.

---

## Objective
Convert developers from evaluation to integration. Give them enough to understand the API's shape, quality, and design philosophy — and a clear path to a real API key and working code. This page is not the full API reference; it is the front door. It should feel like Stripe's API docs page: clean, confident, code-first.

## Audience
- **Primary:** Developers — backend, frontend, and full-stack — evaluating or building on Imagine's API
- **Secondary:** Technical architects assessing API design, stability, and integration complexity

## Key Message
Imagine's API is designed for production use from day one — predictable resource shapes, clear versioning, consistent authentication, and complete coverage of the platform's capabilities. If you can build on Stripe, you can build on Imagine.

---

## Section Flow

### 1. Hero

**Headline options:**
- "Build anything on the Imagine API."
- "The full platform. API-first."
- "Every capability. Programmable."

**Subheadline:**
A complete REST API covering rendering, configuration, and product systems — with clear versioning, predictable responses, and SDKs for the frameworks you already use.

**Code block (hero):**
```bash
curl https://api.imaginecommerce.com/v1/render \
  -H "Authorization: Bearer sk_live_..." \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": "sofa-arc-01",
    "configuration": {
      "fabric": "slate-linen",
      "frame_size": "3-seat",
      "leg_finish": "brushed-brass"
    },
    "output": {
      "format": "webp",
      "resolution": "2400x2400",
      "environment": "studio-light"
    }
  }'
```

**CTAs:**
- Primary: "Get your API key"
- Secondary: "Read the full API reference"

**Design note:** Dark, full-width hero. Large headline, constrained width. Code block on the right half (desktop split) or below (mobile). Syntax highlighting — clean, not overdesigned. The code should be real and runnable.

---

### 2. API Design Philosophy

**Heading:** "An API designed for production, not prototypes."

**Principles:**

- **REST with predictable resource shapes** — Every endpoint follows a consistent pattern. Resources are nouns. Actions are HTTP verbs. Responses include a standard envelope with `data`, `error`, and `meta` fields.

- **Explicit versioning** — The API is versioned at the URL level (`/v1/`). Breaking changes ship in a new version. Old versions are supported with a published deprecation timeline — never silently broken.

- **Structured errors** — Errors return a machine-readable `error.code`, a human-readable `error.message`, and where relevant, a `error.details` array that maps to specific request fields. You always know what went wrong and why.

- **Idempotent writes** — Create and update operations support idempotency keys. Safe to retry on network failure without duplicate side effects.

- **Synchronous and async paths** — Fast operations (configuration validation, product data retrieval) return synchronously. Heavier operations (rendering) can be requested synchronously (for low-latency use cases) or asynchronously with webhook delivery.

---

### 3. Core Endpoints Overview

**Heading:** "What you can do with the API."

**Endpoint groups:**

**Rendering**
Generate photorealistic images for any valid product configuration.

| Endpoint | Description |
|---|---|
| `POST /v1/render` | Submit a configuration and receive a rendered image (sync or async) |
| `GET /v1/renders/:id` | Retrieve the status and output of an async render job |
| `GET /v1/renders/:id/image` | Download the rendered image file directly |

**Configuration**
Validate configuration states and resolve valid option sets in real time.

| Endpoint | Description |
|---|---|
| `POST /v1/configure/validate` | Validate a full or partial configuration against product rules |
| `POST /v1/configure/resolve` | Given partial selections, return the set of valid next options |
| `GET /v1/configure/products/:id/states` | Enumerate all valid configuration states for a product |

**Product Systems**
Read and manage product definitions, attributes, materials, and rulesets.

| Endpoint | Description |
|---|---|
| `GET /v1/products` | List all products in your catalog |
| `GET /v1/products/:id` | Retrieve a full product definition |
| `GET /v1/products/:id/attributes` | List configurable attributes and valid values |
| `GET /v1/products/:id/variants` | Enumerate valid resolved variants |
| `GET /v1/materials/:id` | Retrieve material asset metadata |
| `POST /v1/products` | Create or update a product definition |

**Design note:** Tables should be clean and scannable. Group by domain clearly. Link each endpoint to the full API reference entry.

---

### 4. Authentication

**Heading:** "Simple, secure authentication."

**Content:**
Imagine uses bearer token authentication. API keys are scoped to an environment (`live` or `test`) and can be scoped to specific capabilities (render-only, read-only, full access).

```http
Authorization: Bearer sk_live_abc123...
```

**Key types:**

- `sk_live_...` — Live environment. Billed usage. Production integrations.
- `sk_test_...` — Test environment. No billing. Safe for development and staging.
- `pk_...` — Public key. Safe to expose client-side. Scoped to read-only, non-sensitive operations (e.g., retrieving product definitions for a configurator).

**Security notes:**
- Keys are generated and rotated in the Imagine dashboard
- Webhook signatures use HMAC-SHA256 — verify payloads before processing
- IP allowlisting available on enterprise plans

---

### 5. Rate Limits and Reliability

**Heading:** "Production-grade reliability."

**Content:**

- **Rate limits:** Default limits are 1,000 requests/minute for standard endpoints and 60 render requests/minute. Limits are returned in response headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`). Enterprise plans support higher limits.
- **Webhooks:** Async render results, catalog update events, and configuration changes are delivered via webhook. Retried up to 5 times with exponential backoff on delivery failure.
- **SLA:** 99.9% uptime on core API endpoints. Render pipeline SLA documented separately per tier.
- **Status page:** Real-time API status and incident history at status.imaginecommerce.com.

---

### 6. SDKs and Tooling

**Heading:** "Get to production faster."

**SDKs and tooling available:**

- **JavaScript / TypeScript** — Full API client with TypeScript types. Works in Node.js and browser environments. Includes React hooks for configuration state management.
- **React component library** — Pre-built configurator, viewer, and product page components. Built on top of the JS SDK.
- **Webhook helpers** — Signature verification utilities for Node.js, Python, and Ruby.
- **OpenAPI spec** — Full OpenAPI 3.1 spec available for generating clients in any language or importing into Postman/Insomnia.

```bash
npm install @imagine/sdk
```

```ts
import { ImagineClient } from '@imagine/sdk';

const client = new ImagineClient({ apiKey: process.env.IMAGINE_API_KEY });

const render = await client.renders.create({
  productId: 'sofa-arc-01',
  configuration: { fabric: 'slate-linen', frame_size: '3-seat' },
  output: { format: 'webp', resolution: '2400x2400' }
});
```

---

### 7. Closing CTA

**Heading:** "Start building."

**Subheadline:** Get an API key and be making real requests in minutes.

**CTAs:**
- Primary: "Get your API key"
- Secondary: "Read the full API reference"
- Tertiary (text link): "Talk to the team about enterprise access"

---

## Design & Interaction Notes
- This page is developer-native. The code blocks are the content. Prioritize readability of code over decorative design.
- Syntax highlighting: consistent, minimal color palette. Not rainbow — professional.
- Endpoint tables: clean borders, monospace for endpoint paths, plain language for descriptions.
- Hero code block should be copyable with one click. Show language label (bash, json, ts).
- Authentication section: show key format clearly. Developers will look for this first.
- Mobile: code blocks scroll horizontally. Tables scroll horizontally. Layout is single-column throughout.
- Do not bury the "Get your API key" CTA — surface it in the hero and again at the close.
