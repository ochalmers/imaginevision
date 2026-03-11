# Page Spec: /developers/sdk

## Page Objective
Make the JavaScript/TypeScript SDK the clear fastest path to building on Imagine. Show developers exactly what the SDK does, how to install it, and what the key methods look like — so they can get from `npm install` to a working integration in minutes.

## Audience
- Frontend and full-stack engineers implementing Imagine in a JavaScript or TypeScript project
- React and Vue developers looking for framework-native abstractions
- Technical leads assessing SDK ergonomics and TypeScript coverage

## Key Message
The Imagine SDK is the fastest way to build on the platform. It wraps the REST API in an ergonomic, fully-typed interface, handles authentication state, and ships framework adapters so your team writes less boilerplate and more product.

---

## Section Flow

### 1. Hero

**Heading:** The fastest way to build on Imagine.

**Subheading:** A fully-typed JavaScript and TypeScript SDK with first-class React and Vue support. Install in 30 seconds. Ship in an afternoon.

**Install snippet (prominent, copyable):**
```bash
npm install @imagine/sdk
# or
yarn add @imagine/sdk
# or
pnpm add @imagine/sdk
```

**Initialization snippet:**
```typescript
import { Imagine } from '@imagine/sdk';

const imagine = new Imagine({
  apiKey: process.env.IMAGINE_API_KEY, // server-side
  // or
  token: clientToken,                  // browser-safe short-lived token
});
```

**CTAs:**
- Primary: View SDK Reference
- Secondary: See Examples

---

### 2. SDK vs. Raw API

**Heading:** Why use the SDK?

**Body:** You can build on Imagine using the REST API directly. The SDK exists for one reason: to reduce the code you have to write and maintain. It handles authentication, request retries, response typing, and render polling — so you don't have to.

**Comparison table:**

| Task                              | Raw API           | SDK                          |
|-----------------------------------|-------------------|------------------------------|
| Authentication                    | Manual header     | Handled at init              |
| Render polling (async completion) | Build it yourself | `imagine.render()` awaits it |
| TypeScript types                  | Write your own    | Included                     |
| React state management            | Build it yourself | `useImagineRender()` hook    |
| Error handling                    | Parse manually    | Typed error classes          |
| Retry on transient failures       | Build it yourself | Automatic with backoff       |

---

### 3. Core Methods

**Heading:** The full SDK surface.

**`imagine.render()`**
Trigger a render and await the result. The SDK polls for completion and resolves with the final image URL. No webhook setup required for synchronous use.

```typescript
const result = await imagine.render({
  productId: 'sofa-alto-xl',
  configuration: {
    fabric: 'boucle-ivory',
    legs: 'walnut',
  },
  scene: 'living-room-natural-light',
});

// result.imageUrl — signed CDN URL
// result.id       — render ID for reference
// result.duration — render time in ms
```

**`imagine.configure()`**
Validate a configuration object against a product's option rules. Returns the validated configuration and a list of any constraint violations.

```typescript
const { valid, violations, configuration } = await imagine.configure({
  productId: 'sofa-alto-xl',
  configuration: {
    fabric: 'velvet-midnight', // hypothetically unavailable
    legs: 'walnut',
  },
});

if (!valid) {
  console.log(violations);
  // [{ field: 'fabric', issue: 'option_unavailable', allowedValues: [...] }]
}
```

**`imagine.products.get()`**
Retrieve a product with its full option tree, scenes, and pricing modifiers.

```typescript
const product = await imagine.products.get('sofa-alto-xl');

// product.id
// product.name
// product.options       — array of option groups with values
// product.scenes        — available scene presets
// product.defaultConfig — a valid starting configuration
```

**`imagine.experiences.create()`**
Create a shareable experience — a persistent URL representing a saved product configuration.

```typescript
const experience = await imagine.experiences.create({
  productId: 'sofa-alto-xl',
  configuration: {
    fabric: 'boucle-ivory',
    legs: 'walnut',
  },
});

// experience.url — https://configure.imagine.so/exp/abc123
// experience.id
```

---

### 4. React Integration

**Heading:** React. First-class.

**Body:** The SDK ships a React adapter with hooks for render state, option management, and configuration validation. Built on React 18 with full concurrent mode support.

**`useImagineRender`**
Manages render lifecycle — submits the render, tracks loading state, and updates when the configuration changes.

```jsx
import { useImagineRender } from '@imagine/sdk/react';

function ProductViewer({ productId, configuration }) {
  const { imageUrl, isLoading, error } = useImagineRender(productId, configuration);

  if (isLoading) return <RenderSkeleton />;
  if (error) return <ErrorState message={error.message} />;

  return <img src={imageUrl} alt="Product render" />;
}
```

**`useImagineOptions`**
Manages option selection state, validates combinations in real time, and exposes which options are available, disabled, or selected.

```jsx
import { useImagineOptions } from '@imagine/sdk/react';

function OptionPanel({ productId }) {
  const { optionGroups, setOption, configuration, isValid } = useImagineOptions(productId);

  return optionGroups.map((group) => (
    <OptionGroup
      key={group.id}
      group={group}
      onChange={(value) => setOption(group.id, value)}
    />
  ));
}
```

**`ImagineProvider`**
Wrap your application to share an SDK instance and client token across all hooks.

```jsx
import { ImagineProvider } from '@imagine/sdk/react';

export default function App({ clientToken }) {
  return (
    <ImagineProvider token={clientToken}>
      <ProductPage />
    </ImagineProvider>
  );
}
```

---

### 5. Vue Integration

**Heading:** Vue. Composables that feel native.

The SDK's Vue adapter exports composables that follow Vue 3 conventions — reactive refs, computed properties, and lifecycle-aware cleanup.

```javascript
import { useImagineRender, useImagineOptions } from '@imagine/sdk/vue';

export default {
  setup() {
    const { optionGroups, setOption, configuration } = useImagineOptions('sofa-alto-xl');
    const { imageUrl, isLoading } = useImagineRender('sofa-alto-xl', configuration);

    return { optionGroups, setOption, imageUrl, isLoading };
  },
};
```

---

### 6. Changelog

**Heading:** SDK release history.

Recent versions (inline list):

- **v2.4.0** (March 2026) — `useImagineRender` hook rewritten with improved TypeScript inference. Added `ImagineProvider` for React.
- **v2.3.0** (February 2026) — Vue 3 composables added. `imagine.experiences` API added.
- **v2.2.0** (January 2026) — `imagine.configure()` now returns `violations` array. Retry logic added for transient API errors.
- **v2.1.0** (December 2025) — TypeScript strict mode compatibility. `imagine.renders.createBatch()` added.

**Link:** View full changelog → /product-updates

---

### 7. Footer CTA

**Heading:** Install the SDK and start building.

```bash
npm install @imagine/sdk
```

**CTAs:**
- Primary: View SDK Reference
- Secondary: See Examples

---

## Copy Notes
- The SDK vs. Raw API table is a high-value section — it gives developers permission to use the SDK without feeling like they are giving up control.
- All hook examples should be self-contained and realistic.
- Framework adapter sections should feel native to each framework's conventions — hooks for React, composables for Vue.

## Design Notes
- Install snippet should be the most visually prominent element in the hero
- Package manager tabs (npm / yarn / pnpm) for the install command
- Core methods section uses a tabbed or accordion layout for scannability
- Framework sections clearly delineated with framework logo/label
