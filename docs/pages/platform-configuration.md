# Page Spec: /platform/configuration

## Meta
- **URL:** /platform/configuration
- **Title:** Configuration Engine — Imagine Platform
- **Description:** Define your product logic once. Imagine enforces valid configurations everywhere — across every channel, every integration, every customer interaction.

---

## Objective
Explain to both technical and non-technical audiences why configurable product logic is genuinely hard, and why a purpose-built configuration engine is the right solution. Translate the technical value (rules engine, dependency resolution, valid state management) into business language (fewer errors, faster launches, consistent customer experience). Make developers confident this is an API-first system they can build on.

## Audience
- **Primary:** E-commerce and product leaders responsible for managing complex product catalogs
- **Secondary:** Developers building or integrating configuration logic into commerce systems

## Key Message
Configuration logic doesn't belong in spreadsheets, in front-end code, or in human judgment calls. It belongs in a system designed for it — one that enforces valid states everywhere, handles dependencies automatically, and gives every channel a single source of truth.

---

## Section Flow

### 1. Hero

**Headline options:**
- "Define once. Configure anything."
- "Your product logic, enforced everywhere."
- "Configuration without chaos."

**Subheadline:**
Imagine's configuration engine turns your product rules into a structured, programmable system — and enforces valid states across every channel, every time.

**CTAs:**
- Primary: "See a demo"
- Secondary: "Explore the configuration API"

**Design note:** Clean, dark hero. Consider a subtle animated diagram showing invalid states being caught and resolved — or a simplified rule tree visualization. No product photography here — this is a logic and systems page.

---

### 2. The Problem

**Heading:** "Configurable products are harder than they look."

**Content:**
Most brands manage configuration logic in one of three ways: a spreadsheet someone owns, hard-coded front-end rules, or customer service handling the edge cases. None of these scale.

**The specific failure modes:**
- **Invalid configurations reach checkout** — A customer selects a fabric that isn't available in their chosen frame size. The order is placed. Fulfillment fails.
- **Rules live in too many places** — Your website, your B2B ordering tool, your sales rep's spreadsheet, and your ERP all have slightly different versions of the truth.
- **Adding an option breaks everything** — A new material launches. Someone has to manually update rules in every system that touches product configuration.
- **No visibility into what's valid** — Marketing can't answer "which configurations are available?" without calling someone in operations.

---

### 3. The Solution

**Heading:** "A configuration engine built for physical products."

**Content:**
The Imagine configuration engine is a single, structured system for defining and enforcing what combinations of a product are possible. It reads your product definitions from Imagine's Product Systems layer and exposes a real-time validation API that any channel can query.

**Core capabilities:**

- **Rule definition** — Express option dependencies, material compatibility, dimensional constraints, and availability rules in a structured format — not code.
- **Valid state resolution** — Given a partial configuration (e.g., frame size selected, fabric not yet chosen), the engine returns the set of valid remaining options in real time.
- **Conflict detection** — Incompatible selections are surfaced immediately — before they reach cart, before they reach fulfillment.
- **Multi-channel enforcement** — The same rules govern your website configurator, your B2B portal, your sales team's quoting tool, and your internal order management system.
- **Version control** — Configuration rule sets are versioned. Launch a new season's constraints without disrupting live orders.

---

### 4. How It Works

**Heading:** "From product rules to real-time validation."

**Steps:**

1. **Model your product** — Define your product's configurable dimensions in Imagine's Product Systems layer: options, attributes, material groups, and structural components.

2. **Define your rules** — Express constraints using Imagine's rule schema: "Option A is only valid when Option B is selected." "Material group X is incompatible with frame size S." Rules are declarative — not imperative code.

3. **Publish your configuration** — Rules are validated, versioned, and published to Imagine's configuration API. Changes are reviewed before going live.

4. **Query in real time** — Any channel sends a configuration state to the API and receives a valid-state response: which options are available, which are excluded, which require additional input.

5. **Enforce at every step** — Pre-cart validation, checkout confirmation, and order submission all run through the same engine. One rule set, everywhere.

**Design note:** Numbered vertical flow. Clean step labels. Consider a minimal code/schema fragment showing what a rule definition looks like — even non-technical audiences benefit from seeing the concreteness.

---

### 5. Developer Integration

**Heading:** "API-first. Works with any stack."

**Content:**
The configuration engine is fully accessible via REST API. Developers can query valid states, validate a complete configuration before submission, or subscribe to rule updates via webhooks.

**Code example:**
```http
POST /v1/configure/validate
{
  "product_id": "sofa-arc-01",
  "selections": {
    "fabric": "slate-linen",
    "frame_size": "3-seat",
    "leg_finish": "brushed-brass"
  }
}
```

**Response includes:**
- `valid: true / false`
- `conflicts`: array of conflicting selection pairs with human-readable reason
- `available_options`: next valid selection set for incomplete configurations

**Additional developer surfaces:**
- Webhook events: `configuration.rule_updated`, `configuration.version_published`
- SDK helpers for React (pre-built configurator state management)
- Full schema documentation with edge case handling

**CTA:** "Read the configuration API docs →"

---

### 6. Closing CTA

**Heading:** "One rule set. Every channel. Zero conflicts."

**Subheadline:** See how the configuration engine works with your product catalog.

**CTAs:**
- Primary: "Request a demo"
- Secondary: "Get API access"

---

## Design & Interaction Notes
- The problem section should feel resonant — specific, not generic. Use concrete product language (fabric, frame size, finish) rather than abstract "option A / option B."
- Rule definition example: show a real-looking schema snippet. Monospace, dark code block, clean syntax highlighting.
- The architecture should be clear that this is a server-side validation system — not a front-end rules engine baked into a widget.
- Mobile: step flow collapses to vertical. Code blocks scroll horizontally.
- Tone: confident and precise. This page is for people who have felt this pain directly.
