# Page Spec: /product-updates

## Page Objective
Communicate what the Imagine team ships, clearly and consistently. Build trust with technical and commercial audiences by demonstrating active, high-quality product development. Serve as the authoritative record of platform changes for customers managing integrations.

## Audience
- Existing customers monitoring for API changes, deprecations, and new capabilities
- Developers tracking SDK releases and updating their integrations
- Technical leads evaluating platform momentum before committing to Imagine
- Investors and analysts building a picture of development velocity

## Key Message
Imagine ships continuously. Every update here is a real change to the platform — new capabilities, render engine improvements, SDK releases, and API additions. The changelog is honest about what changed and why it matters.

---

## Section Flow

### 1. Hero

**Heading:** What we've shipped.

**Subheading:** A running record of every meaningful change to the Imagine platform — new API endpoints, render engine improvements, SDK releases, and configuration engine updates. Updated as we ship.

**Subscribe CTA (inline, compact):**
"Get updates by email" + email input + Subscribe

**RSS link:** RSS feed available → (link)

---

### 2. Latest Update Highlight

**Display:** Large card for the most recent significant release. Includes: date, version/tag, title, description (3–5 sentences), what changed (bulleted list), and relevant links (docs, API reference, migration guide if applicable).

**Latest update (example):**

Date: March 11, 2026
Tag: SDK
Version: @imagine/sdk v2.4.0

Title: SDK v2.4.0 — React hooks rewrite and TypeScript improvements

Description: This release rewrites the `useImagineRender` and `useImagineOptions` React hooks from the ground up. The new implementation reduces unnecessary re-renders, improves TypeScript inference for configuration objects, and adds first-class support for React 18 concurrent features. The public API is unchanged — this is a drop-in upgrade.

What changed:
- `useImagineRender`: no longer triggers re-render when unrelated component state changes
- `useImagineOptions`: `optionGroups` type is now fully inferred from the product schema
- Added `ImagineProvider` component for shared SDK instance across a component tree
- `useImagineRender` now accepts an `enabled` flag to defer rendering until ready
- Fixed: configuration debounce was not correctly applied in StrictMode

Upgrade note: No breaking changes. Upgrade by running `npm install @imagine/sdk@2.4.0`.

Links: Release notes · Migration guide (not required for this version) · NPM

---

### 3. Update List

**Heading:** All updates.

Chronological list, newest first. Each entry: date, tag (Rendering / API / Configuration / Experience / SDK / Infrastructure), title, short description (1–3 sentences), and optional link to full entry.

Filter by tag: All · Rendering · API · Configuration · Experience · SDK · Infrastructure

---

**March 2026**

2026-03-11 — `SDK`
@imagine/sdk v2.4.0 released. React hooks rewritten for performance and TypeScript accuracy. `ImagineProvider` component added. No breaking changes.
→ Full release notes

2026-03-04 — `Rendering`
Render engine update: average render completion time reduced to 3.1 seconds (down from 3.8 seconds in February). Improvement driven by GPU scheduling optimisation in the pipeline.

2026-03-01 — `API`
`/v1/renders` now accepts `priority` field (`standard` | `high`). High-priority renders are queued ahead of standard renders. Available on Growth and Scale plans.

---

**February 2026**

2026-02-19 — `API`
`/v1/experiences` endpoint group promoted from beta to general availability. Shareable configuration links, experience state retrieval, and configuration update are all stable and covered by the API stability guarantee.
→ API reference

2026-02-12 — `Configuration`
Configuration validation now returns a `suggestions` array alongside `violations`. If a configuration is invalid, the API now suggests the nearest valid alternative. Opt-in via `include_suggestions: true` on `/v1/configurations/validate`.

2026-02-05 — `SDK`
@imagine/sdk v2.3.0 released. Vue 3 composables (`useImagineRender`, `useImagineOptions`) added. `imagine.experiences` SDK methods added.
→ Full release notes

---

**January 2026**

2026-01-28 — `Rendering`
New scene preset: `outdoor-terrace`. Available for lighting and furniture products. Part of the extended outdoor context library.

2026-01-21 — `API`
`/v1/renders/createBatch` endpoint added. Submit up to 100 render jobs in a single API call. Responses include individual job IDs. Available on all plans.
→ API reference

2026-01-14 — `Infrastructure`
CDN delivery now served via regional edge nodes in EU (Frankfurt) and APAC (Singapore), in addition to existing US (N. Virginia) node. Median image delivery time for EU customers reduced by 62%.

2026-01-07 — `Configuration`
Option rule engine updated to support `if/then/else` constraint expressions. Previously, constraints were defined as simple exclusion rules. The new format supports conditional logic: if `material` is `glass`, then `finish` options are limited to `clear` and `frosted`.
→ Configuration rules documentation

---

**December 2025**

2025-12-18 — `SDK`
@imagine/sdk v2.2.0 released. `imagine.configure()` now returns `violations` array with field-level detail. Automatic retry with exponential backoff added for transient API errors (5xx).

2025-12-10 — `API`
Idempotency key support added to `POST /v1/renders`. Submit the same render request twice with the same `idempotency_key` and receive the same response without triggering a duplicate render.

2025-12-03 — `Rendering`
20 new room context presets added: hotel lobby, restaurant, retail floor, home office, and master bedroom variants. Total scene preset library now at 62 presets.

---

### 4. Subscribe to Updates

**Heading:** Get updates when we ship.

**Body:** New releases, API additions, and render engine updates delivered to your inbox. One email per significant update. No marketing.

**Form:** Email address + Subscribe button

**Alternative:** Follow the RSS feed or watch the GitHub repo for SDK releases.

---

### 5. Footer CTA

**Heading:** Questions about a specific update?

**Body:** If an update affects your integration and you need help, contact our developer support team or ask in the Discord community.

**CTAs:**
- Developer support: support@imagine.so
- Discord community: (link)
- API status: status.imagine.so

---

## Copy Notes
- Every update entry should state what changed, not just what is new. "Rate limit increased" is better than "Rate limit improvement."
- Upgrade notes must be honest about breaking changes. Never downplay a breaking change.
- Tag taxonomy should be stable and used consistently: Rendering, API, Configuration, Experience, SDK, Infrastructure.
- The changelog is a trust document. Accurate, complete, and timely is more important than polished.

## Design Notes
- Filter by tag should be sticky on scroll — developers come here looking for API changes specifically
- Latest update highlight uses a larger card format to signal recency and importance
- Date display format: full date (2026-03-11), not relative time ("3 days ago") — changelogs are historical records
- Tag chips colour-coded consistently: Rendering (blue), API (green), SDK (purple), Configuration (orange), Infrastructure (grey), Experience (teal)
- Mobile: full-width single column, tags as horizontal scroll
