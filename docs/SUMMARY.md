# Imagine Website Rebuild — Executive Summary

**Version:** 1.0
**Prepared for:** Internal team alignment
**Scope:** Full website strategy, architecture, and build foundation

---

## The Situation

Imagine has strong technical capabilities but a positioning problem. The current website describes *what Imagine does* — visualise products, render configurables — rather than *what category Imagine owns*.

Buyers don't hire Imagine for rendering. They hire Imagine because they sell configurable products and need the infrastructure to handle them commercially. The website needs to reflect that.

---

## The Repositioning

**Before:** Imagine is a product visualisation and rendering platform.
**After:** Imagine powers configurable commerce.

This is not a messaging change. It is a category change.

Configurable commerce is the emerging commercial infrastructure layer for brands that sell products with options, variants, and personalisation. It sits at the intersection of product experience, commerce technology, and visual infrastructure.

Imagine is building the platform that owns this category.

---

## The Website's Job

The website serves four functions simultaneously:

1. **Category definition** — establish configurable commerce as a real, meaningful category and position Imagine as its author
2. **Product demonstration** — show the platform working, not just describe it
3. **Audience conversion** — convert both company buyers (enterprise sales) and developer builders (product-led growth)
4. **Credibility infrastructure** — developer docs, case studies, and technical depth that earns trust before a conversation happens

---

## The Two Audiences

**Companies** — brands that sell configurable physical products (furniture, mattresses, appliances, lighting, kitchens). They need to visualise, configure, and sell more effectively. The website speaks to commercial outcomes: conversion rate, cost per asset, time to market.

**People** — developers, designers, product managers, and agencies building product experiences. They need confidence that the platform is technically sound and designed for their workflow. The website speaks to developer experience, API quality, and integration capability.

These audiences need separate but connected journeys on the site. The navigation architecture and page structure reflect this split.

---

## Top-Level Navigation

```
Platform   Solutions   Industries   Developers   Resources   Company
```

- **Platform** — explains the technology layer: rendering, configuration, product systems, experiences, APIs
- **Solutions** — maps capabilities to use cases: configurators, visual product pages, marketing visualisation, product design
- **Industries** — vertical-specific pages for furniture, mattresses, appliances, lighting
- **Developers** — technical hub: API reference, docs, SDK, examples
- **Resources** — blog, guides, case studies, product updates
- **Company** — about, careers, contact

---

## What Has Been Defined

This documentation set contains:

- **Website strategy** — full positioning, audience strategy, content strategy, conversion model
- **Complete sitemap** — 35+ pages with URL structure, purpose, audience, and CTA for each
- **Homepage spec** — full narrative flow, headline options, section-by-section breakdown
- **Platform section specs** — 6 pages (/platform through /platform/apis)
- **Solutions section specs** — 5 pages
- **Industries section specs** — 5 pages
- **Developers section specs** — 5 pages
- **Resources + Company specs** — 8 pages
- **Design system strategy** — principles, tokens, components, patterns
- **Claude build plan** — folder structure, build order, prompt strategy, phased plan
- **Team alignment summary** — this document

---

## Visual and Design Direction

The website should feel like a product company that takes design seriously — not a startup that outsourced its homepage. Reference points:

- **Stripe** — clear technical narrative, developer trust, conversion architecture
- **Vercel** — speed-first positioning, developer-centric language, dark theme technical aesthetic
- **Linear** — opinionated product design, confidence in minimal interfaces
- **Apple** — product storytelling, visual quality, confident silence

The design system uses a dark foundation (matching the existing design tokens) with a single brand accent (Papaya orange, #EC4E0B), PP Neue Montreal as the typeface, and an 8px spacing grid.

---

## Immediate Priorities (Next 2–4 Weeks)

**Week 1**
- [ ] Review and align on website strategy document (leadership sign-off)
- [ ] Review sitemap — confirm all top-level sections and key subpages
- [ ] Begin homepage design using the homepage spec
- [ ] Set up design system in Figma using the design system strategy document

**Week 2**
- [ ] Homepage design review and iteration
- [ ] Begin /platform section designs
- [ ] Begin /developers hub design
- [ ] Set up codebase structure per claude-build-plan.md

**Week 3**
- [ ] Homepage build (HTML/CSS/JS with design system)
- [ ] Platform hub and first two subpages built
- [ ] Developers hub built
- [ ] Design system tokens exported and coded

**Week 4**
- [ ] Solutions section designed and built
- [ ] Industries hub and two vertical pages built
- [ ] Internal review and copy refinement across all built pages
- [ ] First staging deployment

---

## What Happens Next

After this foundation is reviewed and aligned on:

1. Design moves from specs to Figma using the design system
2. Engineering begins implementing the codebase structure
3. Content/copy is refined per page specs
4. Claude-assisted page generation begins using the build plan
5. The first five pages go live (homepage, /platform, /solutions, /developers, /company)

---

## One Thing to Remember

Every page, every headline, every component decision should answer one question:

> Does this make "configurable commerce" feel like a real, important, inevitable category — and Imagine as the company that owns it?

If yes, ship it. If not, revise it.
