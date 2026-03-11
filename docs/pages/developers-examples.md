# Page Spec: /developers/examples

## Page Objective
Reduce time-to-working-code to near zero. Give developers real, runnable examples they can fork, remix, and deploy — so they evaluate Imagine by building, not by reading.

## Audience
- Frontend engineers who learn by doing
- Technical leads looking for reference architectures before committing to integration
- Developers who want to prove a concept quickly for an internal demo or pitch

## Key Message
Imagine integrations are not hypothetical. Every example here is working code you can run today — copy it, fork it, or open it in a sandbox and start editing.

---

## Section Flow

### 1. Hero

**Heading:** See it working. Use it immediately.

**Subheading:** Working code examples across every major use case. Each one is forkable, sandbox-ready, and built on real Imagine API calls.

**CTAs:**
- Primary: Browse Examples
- Secondary: Open GitHub Repo

**Stats bar (3 items):**
- 8 working examples
- React, Next.js, Node.js
- Fork and deploy in under 5 minutes

---

### 2. Example Grid

Eight examples, each displayed as a card with: title, description, stack tags, key API surfaces used, and two CTAs (Open in Sandbox, View Source).

---

**Example 1 — Product Configurator (React)**

Title: Interactive Product Configurator

Description: A full product configuration UI built with React. Users select fabric, finish, and dimension options. Each change triggers a live render via the Imagine SDK. Demonstrates option constraint logic — invalid combinations are automatically disabled.

Stack: React 18, @imagine/sdk, Vite

Key API surfaces: `imagine.render()`, `imagine.products.getOptions()`, `imagine.configurations.validate()`

Code highlight:
```jsx
import { useImagineRender, useImagineOptions } from '@imagine/sdk/react';

function Configurator({ productId }) {
  const { options, setOption, configuration } = useImagineOptions(productId);
  const { imageUrl, isLoading } = useImagineRender(productId, configuration);

  return (
    <div className="configurator">
      <RenderViewer src={imageUrl} loading={isLoading} />
      <OptionsPanel options={options} onChange={setOption} />
    </div>
  );
}
```

CTAs: Open in CodeSandbox · View on GitHub

---

**Example 2 — Visual Product Detail Page (Next.js)**

Title: Visual PDP with Server-Side Rendering

Description: A Next.js product detail page that server-renders the default product configuration and switches to client-side rendering for interactive configuration. Demonstrates the hybrid rendering pattern recommended for SEO-sensitive storefronts.

Stack: Next.js 14, @imagine/sdk, TypeScript

Key API surfaces: `imagine.renders.create()` (server-side), `useImagineRender` (client-side), App Router with `generateStaticParams`

Code highlight:
```typescript
// app/products/[id]/page.tsx
export async function generateStaticParams() {
  const products = await imagine.products.list();
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }) {
  const defaultRender = await imagine.renders.create({
    productId: params.id,
    configuration: await imagine.products.getDefaultConfiguration(params.id),
    scene: 'studio-neutral',
  });

  return <ProductDetailClient productId={params.id} initialRender={defaultRender} />;
}
```

CTAs: Open in CodeSandbox · View on GitHub

---

**Example 3 — Batch Render Pipeline (Node.js)**

Title: Batch Render Job for Product Catalog

Description: A Node.js script that reads a product catalog CSV, generates all required configuration combinations, and submits batch render jobs using the Imagine API. Uses webhook delivery to track completion. Demonstrates how to render an entire catalog programmatically — for initial setup or ongoing variant management.

Stack: Node.js 20, @imagine/sdk, csv-parse

Key API surfaces: `imagine.renders.createBatch()`, webhook event handling

Code highlight:
```javascript
import { Imagine } from '@imagine/sdk';
import { parse } from 'csv-parse/sync';

const imagine = new Imagine({ apiKey: process.env.IMAGINE_API_KEY });

async function renderCatalog(csvPath) {
  const products = parse(fs.readFileSync(csvPath), { columns: true });

  const jobs = await imagine.renders.createBatch(
    products.map((row) => ({
      productId: row.product_id,
      configuration: JSON.parse(row.configuration),
      scene: row.scene || 'studio-neutral',
      webhookUrl: process.env.RENDER_WEBHOOK_URL,
    }))
  );

  console.log(`Submitted ${jobs.length} render jobs.`);
}
```

CTAs: View on GitHub · Download Script

---

**Example 4 — Webhook Handler (Express)**

Title: Render Completion Webhook Handler

Description: An Express server that receives, verifies, and processes Imagine webhook events. Demonstrates signature verification, event routing by type, and updating an external database on render completion.

Stack: Node.js, Express, @imagine/sdk/webhooks

Key API surfaces: `Imagine.webhooks.constructEvent()`, `render.completed` event

Code highlight:
```javascript
import express from 'express';
import { Imagine } from '@imagine/sdk';

const app = express();

app.post('/webhooks/imagine', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['imagine-signature'];

  let event;
  try {
    event = Imagine.webhooks.constructEvent(req.body, sig, process.env.IMAGINE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
  }

  if (event.type === 'render.completed') {
    const { id, image_url, product_id } = event.data;
    await db.renders.upsert({ id, imageUrl: image_url, productId: product_id });
  }

  res.json({ received: true });
});
```

CTAs: Open in CodeSandbox · View on GitHub

---

**Example 5 — Custom Configurator UI**

Title: Headless Configurator with Custom UI

Description: A fully custom configurator interface built directly on SDK primitives — no Imagine UI components used. Shows how to drive configuration state, render calls, and option validation using only the SDK's core methods, giving teams full control over the visual design.

Stack: React, @imagine/sdk (core only), Tailwind CSS

Key API surfaces: `imagine.products.getOptions()`, `imagine.configurations.validate()`, `imagine.render()`

CTAs: Open in CodeSandbox · View on GitHub

---

**Example 6 — Shareable Configuration Link**

Title: Shareable Product Configuration

Description: A pattern for generating shareable URLs for a saved product configuration. A user configures a product, clicks "Share", and gets a URL that restores the exact configuration state. Demonstrates the `/v1/experiences` API.

Stack: React, @imagine/sdk

Key API surfaces: `imagine.experiences.create()`, `imagine.experiences.get()`

CTAs: Open in CodeSandbox · View on GitHub

---

**Example 7 — Shopify Storefront Integration**

Title: Imagine + Shopify Storefront API

Description: A headless Shopify storefront product page that replaces static product images with Imagine-powered interactive configuration. Demonstrates connecting Shopify variant selection to Imagine configuration, and adding a configured product to the Shopify cart.

Stack: Next.js, Shopify Storefront API, @imagine/sdk

CTAs: View on GitHub · Read the integration guide

---

**Example 8 — Specification Sheet Generator**

Title: Trade Specification Sheet Generator

Description: A Node.js utility that takes a saved product configuration and generates a PDF specification sheet using the Imagine API's render output and product metadata. Designed for trade and B2B contexts where specification documents are part of the purchase workflow.

Stack: Node.js, @imagine/sdk, puppeteer

Key API surfaces: `imagine.products.get()`, `imagine.renders.create()`, `imagine.configurations.get()`

CTAs: View on GitHub · Download Script

---

### 3. Sandbox CTA

**Heading:** Not sure where to start?

**Body:** Open the interactive sandbox and try the Imagine API without installing anything. Pre-loaded with a sample product, configuration options, and a working render call.

**CTA:** Open the Sandbox →

---

### 4. GitHub CTA

**Heading:** Everything is on GitHub.

**Body:** All examples are maintained in the `imagine-so/examples` repository. Star it, fork it, or open an issue if something isn't working.

**CTA:** View on GitHub →

---

## Copy Notes
- Every example must name the specific SDK methods and API endpoints it uses — this builds credibility.
- Code highlights should be real, not pseudocode.
- Stack tags should use exact package names and versions.

## Design Notes
- Example cards in a 2-column grid on desktop, single column on mobile
- Stack tags displayed as small inline chips
- Each card has a subtle hover state with CTA buttons becoming visible
- Code highlight shown in a collapsed/expandable block to keep cards compact
