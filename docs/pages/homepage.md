# Homepage Spec — /

**Page objective:** Define the configurable commerce category. Convert both companies (demo request) and developers (API access). Establish Imagine as the platform owner of this category.
**Primary audience:** Both (companies and developers)
**Primary CTA (companies):** Request a demo
**Primary CTA (developers):** Get API access

---

## Narrative Flow

The homepage tells a single story in five movements:

1. **Statement** — The category. What Imagine is. (Hero)
2. **Problem** — Why the old way is broken. (Challenge section)
3. **Platform** — What Imagine is, exactly. (Platform overview)
4. **Proof** — That it works. (Social proof + outcomes)
5. **Paths** — Two clear ways in. (Audience split CTA section)

Each section must earn the right to the next. The hero earns curiosity. The challenge earns recognition. The platform earns credibility. The proof earns trust. The paths earn the click.

---

## Section 1: Hero

### Purpose
Establish the category. Make the reader feel the weight of what "configurable commerce" means before explaining it. Create immediate differentiation from every other visualisation or rendering vendor.

### Headline Options

**Option A (Category-first)**
> Imagine powers configurable commerce.

**Option B (Problem-first)**
> Products with options deserve a platform built for them.

**Option C (Infrastructure frame)**
> The infrastructure layer for brands that configure.

**Option D (Declarative)**
> Configure anything. Sell everything.

**Recommended:** Option A — clean, confident, category-owning. "Configurable commerce" does the work. "Powers" signals infrastructure, not UI.

### Sub-headline Options

**Option A**
> The platform for brands that sell products with options. Visualise, configure, and launch any product experience — without the cost and fragility of doing it yourself.

**Option B**
> From a single product model, generate every configuration. Power interactive commerce. Build on a programmable API.

**Option C**
> One platform for every layer of configurable product experience. Built for brands. Designed for developers.

**Recommended:** Option A (company buyers), with Option B as a toggle or alternate view for developer audience.

### CTA Treatment

Two CTAs in the hero — side by side, clearly differentiated by audience:

- `Request a demo` — filled, brand orange (#EC4E0B)
- `Get API access` — outlined / ghost

Below CTAs: A single trust signal line
> Trusted by leading furniture, appliance, and consumer brands

### Visual Treatment

The hero visual is the most important design decision on the page. Options:

**Option A: Product configurator in motion**
An interactive or animated product configurator — a piece of furniture or appliance cycling through configurations. The product changes, the image updates. Demonstrates the core value proposition without a single word.

**Option B: Grid of configurations**
A grid of the same product object rendered across 12–16 different configurations. Shows scale. Shows quality. Communicates the "any configuration" message visually.

**Option C: Split-screen**
Left side: complex product configuration matrix (developer/data view). Right side: beautiful rendered output. Bridges both audiences visually.

**Recommended:** Option A for emotional impact. Option B as fallback for static environments (email, OG image).

---

## Section 2: The Challenge (Why This Exists)

### Purpose
Name the problem that configurable commerce solves. Make buyers recognise their own situation. This is the "you've been doing this the hard way" section.

### Heading Options

> This is how most brands handle configurable products.

> The old approach doesn't scale.

> Sound familiar?

### Content Structure

Three pain points, side by side. Short. Specific. Recognisable.

**Pain Point 1: Asset Production**
> Thousands of pre-rendered images. Weeks to produce. Months to keep current. Every new variant means a new photoshoot.

**Pain Point 2: Configuration Logic**
> Rules in spreadsheets. Options managed manually. Invalid configurations caught at order time, not at browse time.

**Pain Point 3: Fragmented Tooling**
> A visualisation tool here. A configurator there. A commerce platform that doesn't talk to either. Four integrations held together with custom code.

### Transition

After the three pain points, a pivot sentence:

> There is a better model.

or

> Configurable products need a platform built for them.

---

## Section 3: The Platform

### Purpose
Introduce the Imagine platform. Show its layers without overwhelming. The goal is "I understand what this is and why it's different" — not "I understand every feature."

### Heading

> One platform. Every layer.

or

> The complete platform for configurable commerce.

### Structure

A tabbed or scrollable section showing four platform layers. Each has a headline, two-line description, and a visual or code example.

**Tab 1: Rendering**
Headline: Every configuration. Photorealistic. Instantly.
Description: Generate photorealistic product visuals for any valid configuration — without a photoshoot, without a 3D studio, without waiting.
Visual: Side-by-side product in 4–6 configuration variants

**Tab 2: Configuration**
Headline: Define product logic once. Apply it everywhere.
Description: Model your product rules, valid states, and option dependencies. The configuration engine enforces them across every surface.
Visual: Configuration logic diagram or UI with rules + output

**Tab 3: Experiences**
Headline: Commerce experiences that actually convert.
Description: Embed interactive configurators into any storefront. Build visual product pages. Power guided selling flows. All from the same platform.
Visual: Configurator UI embedded in a product page layout

**Tab 4: API**
Headline: Build anything on the Imagine API.
Description: Every platform capability, available programmatically. RESTful API. JavaScript SDK. Webhooks. Designed for developers.
Visual: Code block showing a clean API call + response

### CTA Below Platform Section

- Companies: `See platform in action →`
- Developers: `Read the API docs →`

---

## Section 4: Proof

### Purpose
Demonstrate that Imagine works at scale with real brands. This section earns trust before the conversion ask.

### Structure

**Sub-section A: Logos**
A clean logo row of brand names (furniture, appliance, etc.)
> Trusted by brands that configure

**Sub-section B: Outcome Stats**
Three numbers with attribution.

Examples:
> **40%** reduction in asset production cost — [Brand name]
> **2.8×** increase in configurator conversion rate — [Brand name]
> **6 weeks** from contract to live — [Brand name]

These numbers need real data. Use placeholders until available but design the layout to accommodate them prominently.

**Sub-section C: Case Study Pull Quote**
One featured case study — a sentence or two from a customer, with their name, title, and brand logo.

> "Imagine replaced a five-person asset production workflow. We now launch new variants in hours."
> — [Name], Head of Digital, [Brand]

With a link: `Read the case study →`

---

## Section 5: Two Paths

### Purpose
Separate the two audiences cleanly before the footer. Acknowledge both directly and give each a clear, specific next step.

### Structure

Two cards, side by side, clearly differentiated.

**Card 1: For Brands**
Label: For companies
Heading: Sell your configurable products better.
Sub: Whether you're selling furniture, appliances, or anything that comes in options — Imagine powers the product experience from configuration to checkout.
CTA: `Request a demo`
Secondary: `Explore solutions →`

**Card 2: For Builders**
Label: For developers
Heading: Build on the configurable commerce platform.
Sub: A programmable API, JavaScript SDK, and full documentation set. Build product configurators, visual product pages, and custom experiences.
CTA: `Get API access`
Secondary: `View the docs →`

---

## Section 6: Footer CTA Banner (Optional)

A full-width banner above the footer with a single message and single CTA.

**For homepage:** Address the company buyer (already shown dev path above)

> Ready to see what configurable commerce looks like for your products?
> `Request a demo`

---

## Additional Homepage Design Notes

### Navigation
- Logo left
- Nav links centre: Platform | Solutions | Industries | Developers | Resources | Company
- CTA right: `Request a demo` (orange, filled) — always visible

### Sticky header
The header should become sticky on scroll, with a slightly reduced height and added background opacity (dark, subtle blur). The CTA button stays.

### Scroll indicators
Below the hero, a subtle scroll prompt (either an animated arrow or "scroll to explore" text) to signal there is more below the fold.

### Animation principles
- No gratuitous animation — everything should have a purpose
- Configuration transitions: smooth morph between product states
- Section reveals: simple fade-up, staggered by element
- Code blocks: typewriter/syntax highlight on scroll-into-view (for the API section)
- Performance: no animation on mobile unless hardware-accelerated only

### Mobile treatment
- Hero: single column, visual below text
- Platform tabs: converted to vertical accordion
- Two-paths section: stacked cards, full width
- Stats: 2-column grid

### SEO and meta
- Title: `Imagine — The Configurable Commerce Platform`
- Description: `Imagine powers configurable commerce. The platform infrastructure for brands that sell products with options — visualise, configure, and build product experiences at scale.`
- OG Image: Product grid / hero visual at 1200×630
