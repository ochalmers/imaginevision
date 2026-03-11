# Page Spec: /platform/product-systems

## Meta
- **URL:** /platform/product-systems
- **Title:** Product Systems — Imagine Platform
- **Description:** Model your products as structured, programmable data. Imagine's product systems layer gives developers and brands a single source of truth for every attribute, variant, material, and rule.

---

## Objective
Communicate that Imagine's product systems layer is not a PIM or a CMS — it is a purpose-built data model for configurable physical products, designed to be queried, versioned, and extended programmatically. Help technical buyers understand why this matters architecturally. Help developers understand exactly what they're working with.

## Audience
- **Primary:** Developers and technical architects evaluating Imagine's data model and API
- **Secondary:** Technical buyers (VP of E-commerce, Director of Digital) who want to understand how product data is managed and owned

## Key Message
A configurable product is a system, not a record. Imagine models it that way — as structured, versioned, programmable data that your entire commerce stack can build on.

---

## Section Flow

### 1. Hero

**Headline options:**
- "Products as structured, programmable systems."
- "Your product catalog. Modeled as data."
- "Define your products once. Build everything on top."

**Subheadline:**
Imagine's product systems layer gives every configurable product a precise, structured representation — attributes, variants, materials, component relationships, and rules — accessible via API and designed to be the single source of truth for your commerce stack.

**CTAs:**
- Primary: "Explore the data model"
- Secondary: "Get API access"

**Design note:** Hero can feature a clean, abstract visualization of a product data graph or schema — structured nodes showing a product, its attributes, material groups, and rules. Monospace labels. Dark background. Technical in the best sense.

---

### 2. What Is a Product System

**Heading:** "A configurable product is more than a SKU."

**Content:**
A standard product record holds a name, a price, and a list of variants. A configurable physical product — a sofa in 40 fabrics, 6 frame sizes, and 4 leg finishes — is an interconnected system of options, materials, constraints, and valid states. Treating it like a flat record creates the spreadsheets, the edge cases, and the order errors that follow.

Imagine's product systems layer models a configurable product the way it actually behaves:

- A **product** is a structured entity with a defined set of configurable dimensions
- **Attributes** define what can be configured — size, material group, component, finish
- **Variants** are specific, valid combinations of attribute values — explicitly defined or rule-derived
- **Materials** are assets tied to attribute values — geometry, texture maps, physical properties
- **Rules** define which combinations are valid, which are exclusive, and which are dependent
- **Components** are sub-units of a product that can be configured independently (e.g., a sectional's individual pieces)

---

### 3. Data Model Overview

**Heading:** "A schema built for configurable commerce."

**Subheading:** Core resource types.

**Resource table or structured list:**

| Resource | Description |
|---|---|
| `Product` | Top-level entity. Contains metadata, configurable dimensions, and references to rules. |
| `Attribute` | A configurable dimension of a product (e.g., `fabric_group`, `frame_size`, `leg_finish`). Typed, labeled, and ordered. |
| `AttributeValue` | A specific valid value for an attribute (e.g., `slate-linen`, `3-seat`, `brushed-brass`). |
| `MaterialAsset` | A 3D/physically-accurate material asset linked to an AttributeValue. Used by the rendering engine. |
| `RuleSet` | A versioned collection of configuration rules governing a product. References attributes and values. |
| `Component` | A sub-product or structural element that can be configured independently within a parent product. |
| `Variant` | A resolved, valid configuration of a product — either explicitly enumerated or derived from rules. |

**Code example — product structure fragment:**
```json
{
  "id": "sofa-arc-01",
  "name": "Arc Sofa",
  "attributes": [
    { "key": "fabric_group", "type": "material", "label": "Fabric" },
    { "key": "frame_size", "type": "option", "label": "Size" },
    { "key": "leg_finish", "type": "material", "label": "Leg Finish" }
  ],
  "ruleset_id": "rs_arc_v3",
  "component_ids": ["arm-left", "arm-right", "chaise"]
}
```

**Design note:** Table and code fragment side by side on wider viewports. Dark code block with clean syntax highlighting. The schema should feel well-considered — not overwhelming.

---

### 4. API Integration

**Heading:** "Every product resource is queryable via API."

**Content:**
Product systems data is fully accessible through Imagine's REST API. Fetch product definitions, enumerate valid attribute values, resolve variants, and retrieve material asset references — all programmatically.

**Core endpoints:**

- `GET /v1/products/:id` — Retrieve a full product definition with attributes and ruleset reference
- `GET /v1/products/:id/attributes` — List all configurable attributes and their valid values
- `GET /v1/products/:id/variants` — Enumerate resolved valid variants (full or filtered)
- `GET /v1/materials/:id` — Retrieve material asset metadata and links
- `POST /v1/products` — Create or update product definitions (catalog management)

**Versioning and change management:**
- Every product definition is versioned. Breaking changes (adding a new required attribute, deprecating a value) publish as a new version — existing integrations continue to work.
- Webhook events notify downstream systems when product definitions are updated: `product.published`, `product.attribute_added`, `ruleset.updated`.

**Design note:** Endpoint list in a clean, monospaced or code-adjacent style. Not a full API reference — just enough to convey the shape of the API. Link prominently to full docs.

---

### 5. Use Cases

**Heading:** "What you can build on top of product systems."

**Use cases:**

- **Commerce platform sync** — Push structured product data to Shopify, Salesforce Commerce Cloud, or a custom storefront. Your Imagine product system becomes the source of truth; downstream systems receive structured updates.
- **Configurator rendering** — The rendering engine reads material asset references from product systems to generate photorealistic images for any configuration state.
- **Configuration validation** — The configuration engine reads attribute definitions and rulesets from product systems to resolve valid states in real time.
- **Internal catalog tooling** — Build internal tools for merchandising teams that surface structured product data — valid combinations, material availability, pricing rules — without duplicating logic.
- **Sales and quoting tools** — Populate B2B quoting interfaces with accurate product options, pulling live from the product system API rather than from a static spreadsheet.

---

### 6. CTA

**Heading:** "Your product catalog, modeled correctly."

**Subheadline:** Talk to the team about migrating your product data into Imagine's product systems layer, or start with the API documentation.

**CTAs:**
- Primary: "Request a demo"
- Secondary: "Read the product systems API docs"

---

## Design & Interaction Notes
- This page is technical. Lean into that — the code examples and schema fragments are features, not distractions.
- The resource table should be clean and readable at a glance. Not a data dump.
- Avoid the word "PIM." This is not a PIM. The framing is always "product system" — a programmable entity, not a content store.
- Tone: authoritative and specific. Use actual product nouns (sofa, fabric, leg finish) to make abstract schema concepts tangible.
- Mobile: table scrolls horizontally. Code blocks scroll horizontally. Layout collapses cleanly.
