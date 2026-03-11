# Page Spec: /platform

## Meta
- **URL:** /platform
- **Title:** Platform — Imagine
- **Description:** One platform. Every layer of configurable commerce — rendering, configuration, product systems, experiences, and APIs built for the brands and developers who build it.

---

## Objective
Position Imagine as a complete, coherent infrastructure platform — not a collection of tools. This hub page orients both buyers and developers, giving each a clear entry point into the sub-systems that matter to them. It should feel like the product page of a company that has thought deeply about the problem space.

## Audience
- **Primary:** E-commerce and product leaders at brands selling configurable physical goods (furniture, mattresses, appliances, lighting)
- **Secondary:** Developers evaluating or building on Imagine's infrastructure

## Key Message
Configurable commerce requires five interconnected layers. Imagine is the only platform that provides all of them — purpose-built, API-first, and production-ready.

---

## Section Flow

### 1. Hero

**Headline options:**
- "One platform. Every layer of configurable commerce."
- "The infrastructure layer for configurable commerce."
- "Everything configurable commerce requires. In one platform."

**Subheadline:**
Rendering, configuration logic, product data systems, commerce experiences, and a full API — designed to work together out of the box, or integrate into what you already have.

**CTAs:**
- Primary: "Request a demo"
- Secondary: "Read the docs"

**Design note:** Full-width, dark background. Headline is large and tight — single-column, centered. No decorative imagery at this level. Let the platform grid below do the visual work.

---

### 2. Platform Capability Grid

**Intro copy:**
Five layers. One coherent system. Each capability works independently — and compounds when combined.

**Six tiles (2x3 or 3x2 grid):**

1. **Rendering**
   Icon: aperture or camera abstraction
   "Photorealistic visuals for every valid configuration. No photoshoot required."
   Link: /platform/rendering

2. **Configuration**
   Icon: logic/branch
   "Define product rules once. Enforce valid states everywhere — across every channel."
   Link: /platform/configuration

3. **Product Systems**
   Icon: structured data/layers
   "Model products as programmable data — attributes, variants, materials, and logic."
   Link: /platform/product-systems

4. **Experiences**
   Icon: interface/interact
   "Interactive configurators, embeddable viewers, and guided selling — ready to deploy."
   Link: /platform/experiences

5. **APIs**
   Icon: terminal/brackets
   "A complete REST API. Build any workflow, integration, or product on top of Imagine."
   Link: /platform/apis

6. **Integrations** *(optional sixth tile or presented separately)*
   Icon: plug/connect
   "Works with Shopify, Salesforce Commerce, custom stacks. First-class connectors."
   Link: /integrations

**Design note:** Each tile is a clean card — heading, one-line descriptor, subtle arrow or link affordance. Hover state should surface the link. Dark tiles on slightly lighter dark background — use depth through tone, not shadows.

---

### 3. How It Fits Together

**Heading:** "A platform built as a system."

**Content:**
A brief architectural diagram description (rendered in-page as an interactive or static graphic):

- A brand's product catalog lives in **Product Systems** — structured, programmable, versioned.
- The **Configuration Engine** reads those product definitions to validate what's possible in real time.
- The **Rendering Engine** takes any valid configuration state and returns a photorealistic image.
- **Experiences** expose configuration and rendering through UI components — embeddable, brandable, conversion-optimized.
- The **API** surfaces all of this programmatically — so teams can build any workflow on top.

**Copy:**
Most platforms solve one layer. Imagine is designed for the full stack of configurable commerce — because the real problem isn't rendering in isolation, or configuration in isolation. It's orchestrating them together without building the infrastructure yourself.

**Design note:** A horizontal flow diagram or layered architecture illustration. Clean linework. Labels match the five platform pages. Should be legible at a glance — this is a clarity diagram, not a marketing diagram.

---

### 4. Developer Callout

**Heading:** "Built for developers who build commerce."

**Content:**
- RESTful API with predictable resource shapes and clear versioning
- SDKs for JavaScript/TypeScript (React components, server-side rendering)
- Webhooks for configuration events, render completions, catalog updates
- Full documentation with live code examples

**CTA:**
- "Explore the API →" (links to /platform/apis)
- "Read the docs →" (links to docs.imaginecommerce.com)

**Design note:** Monospace code fragment or minimal terminal block as supporting visual. Dark, tight, code-native aesthetic.

---

### 5. Closing CTA

**Heading:** "Ready to see it in production?"

**Subheadline:** Talk to the team or start building today.

**CTAs:**
- Primary: "Request a demo"
- Secondary: "Get API access"

---

## Design & Interaction Notes
- Page should feel like a product overview, not a marketing brochure. Every section earns its place.
- Typography: large, tight, geometric sans-serif for headings. Body copy at comfortable reading size — never dense paragraphs.
- Color: predominantly dark with intentional use of accent (render output preview, interactive hover states).
- The platform grid is the most important visual element — it should load fast and feel premium.
- Mobile: grid collapses to single column. Architecture diagram becomes a vertical stack.
