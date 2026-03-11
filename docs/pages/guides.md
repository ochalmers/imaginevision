# Page Spec: /guides

## Page Objective
Provide substantive, long-form educational content that builds genuine expertise in configurable commerce — for both commercial and technical audiences. Guides are Imagine's highest-value educational asset: they build trust, drive organic discovery, and give buyers the frameworks to make better decisions (and to choose Imagine with confidence).

## Audience
- Technical leads and developers building configurable product experiences
- Ecommerce and digital product leads at furniture, mattress, appliance, and lighting brands
- Solution architects designing the commerce stack for a brand in a configurable category
- Strategy and product teams evaluating whether and how to build configurability into their digital commerce

## Key Message
The configurable commerce space is underdocumented. Imagine publishes the frameworks, technical walkthroughs, and practical guidance that brands and their developers need — regardless of whether they are yet a customer.

---

## Section Flow

### 1. Hero

**Heading:** Build it right. Build it once.

**Subheading:** Long-form guides on configurable commerce — from option architecture to rendering infrastructure, trade tooling, and integration patterns. Written for the people doing the work.

**Filter tabs:** All · Technical · Strategy · Industry

**Search:** Search guides…

---

### 2. Featured Guide

**Display:** Large card with title, description, audience tag, read time, key topics list, and CTA.

**Featured guide:**

Title: The Configurability Spectrum: How to Think About Option Architecture for Physical Products

Description: Most configuration implementations fail not because of poor engineering, but because the option structure was never properly designed. This guide introduces the Configurability Spectrum framework — a way of thinking about option depth, constraint logic, and default states for physical products. Covers simple swatch selection all the way to fully parametric configuration with pricing modifiers and rule trees.

Audience: Technical leads, solution architects, ecommerce product leads
Read time: 18 min
Key topics: Option architecture, constraint rules, default configuration design, pricing modifiers, order payload design

**CTA:** Read the guide →

---

### 3. Guide Index

**Heading:** All guides.

Each guide displayed as a card: title, description (2 sentences), audience tag, category tag, read time, and link.

---

**Guide 1**
Category: Technical
Title: The Configurability Spectrum: Option Architecture for Physical Products
Description: A framework for structuring product options, rules, and pricing logic — from a two-option swatch selector to a fully parametric configurable product. Essential reading before designing any configurable product experience.
Audience: Technical leads, solution architects
Read time: 18 min

---

**Guide 2**
Category: Technical
Title: A Developer's Guide to Real-Time Product Rendering
Description: How Imagine's render pipeline works under the hood — job submission, async completion, webhook delivery, and CDN hosting. Includes patterns for synchronous rendering in the browser and asynchronous batch rendering for catalog work.
Audience: Frontend engineers, backend engineers
Read time: 14 min

Key sections:
- The render request lifecycle
- Synchronous vs. asynchronous rendering
- Using webhooks for render completion events
- Optimising render call frequency in a configurator UI
- CDN delivery and image caching

---

**Guide 3**
Category: Technical
Title: Building a Trade Specification Tool with the Imagine API
Description: A detailed walkthrough of building a trade-facing specification and quoting tool — from product configuration UI through specification document generation and B2B order submission. Aimed at brands with an architect or interior design customer base.
Audience: Full-stack engineers, solution architects
Read time: 22 min

Key sections:
- What trade specification tools need to do that ecommerce PDPs don't
- Designing the configuration interface for a professional audience
- Using `/v1/experiences` to generate shareable configuration links
- Generating specification PDFs from configuration state and render output
- B2B order payload design

---

**Guide 4**
Category: Strategy
Title: The Returns Problem in Configurable Commerce: Root Causes and Solutions
Description: Returns in furniture, lighting, and appliances are predominantly driven by visual expectation mismatch — customers who received exactly what they ordered, but not what they imagined. This guide examines the root causes and the commercial case for visual accuracy in product configuration.
Audience: Ecommerce leads, digital directors, commercial strategy
Read time: 12 min

Key sections:
- Why configurable products have higher return rates
- The expectation gap: configuration accuracy vs. visual accuracy
- How contextual rendering changes the return dynamic
- Measuring the ROI of visual configuration investment

---

**Guide 5**
Category: Industry
Title: Selling Furniture Online: A Commerce Infrastructure Guide for Configurable Categories
Description: Furniture is the hardest configurable category to sell online — complex options, high ASPs, long purchase cycles, and customers who cannot easily return what they get wrong. This guide covers the infrastructure requirements for furniture ecommerce done right: configuration logic, rendering, delivery estimation, and post-purchase experience.
Audience: Ecommerce leads, technical leads, founders
Read time: 20 min

Key sections:
- Why furniture configuration is different from other categories
- Option architecture for upholstered furniture, case goods, and modular systems
- The render quality bar for high-ASP purchases
- Delivery window integration and order configuration accuracy
- Post-purchase: configuration confirmation and delivery tracking

---

### 4. Download CTA

**Heading:** Prefer to read offline?

**Body:** All Imagine guides are available as PDF downloads. Get the full guide library as a single download, or download individual guides below each title.

**CTA:** Download the Guide Library (PDF, 85 pages) →

**Secondary note:** Updated quarterly. Last updated: March 2026.

---

## Copy Notes
- Guide titles should be specific, useful, and direct. Avoid vague titles like "A Guide to Commerce."
- The audience tag on each guide is important — it signals to readers whether this is for them.
- Key sections (where listed) help readers decide whether to invest the read time.
- Guides should feel like something you would share with a colleague, not content produced to fill a page.

## Design Notes
- Featured guide as a prominent editorial card at the top, visually distinct from the index
- Guide index in a single-column list on desktop for density and scannability
- Filter tabs (All / Technical / Strategy / Industry) sticky on scroll
- Read time and audience tag displayed as small inline metadata on each card
- Download CTA at the bottom, not the top — readers who get there have demonstrated intent
