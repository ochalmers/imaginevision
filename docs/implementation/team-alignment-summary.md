# Team Alignment Summary
## Imagine Website Rebuild — Internal Briefing

**Prepared for:** Full team
**Date:** March 2026
**Status:** Foundation complete — ready for design and build

---

## Where We Are Now

We have completed the full strategic and architectural foundation for the Imagine website rebuild. This is not a brief or a mood board — it is a complete documentation system that defines every page, every message, and every component the website needs.

What exists now:
- A clear category claim: **Imagine powers configurable commerce**
- A full website strategy document (positioning, audiences, content, conversion)
- A complete sitemap (35+ pages with URLs, purpose, audience, CTAs)
- Page specs for every page on the site
- A design system strategy (tokens, components, patterns)
- A build plan for the engineering team

Everything is in `/docs` in this repository.

---

## What Has Been Defined

### The Category
We are not a rendering tool. We are not a CGI replacement. We are not an image generation platform.

**Imagine powers configurable commerce.**

This is the category we are creating and owning. It's the infrastructure layer for brands that sell products with options. The website is the primary vehicle for defining this category in the market.

### The Audiences
We serve two distinct audiences:

**Companies** — brands selling configurable physical products (furniture, mattresses, appliances, lighting). They need commercial outcomes: lower asset costs, higher conversion, faster time to market.

**People** — developers, designers, and product teams building configurable experiences. They need technical credibility: good API design, documentation, SDK, examples.

The website serves both. The navigation, language, and CTAs are structured to separate them clearly.

### The Site Structure
```
Platform → Solutions → Industries → Developers → Resources → Company
```

Six top-level sections. 35+ pages. Clear URL structure. Every page has a defined purpose, audience, and CTA.

### The Design System
Built on PP Neue Montreal. Dark-first. Papaya orange (#EC4E0B) as the single brand accent. 8px spacing grid. Full token set defined. Components specified: buttons, cards, code blocks, navigation, stats, feature grids.

References: Stripe (conversion architecture), Vercel (developer-first aesthetic), Linear (minimal confidence), Apple (product storytelling).

---

## What Is Being Worked On

Nothing is actively in build yet. The foundation is defined. The next step is for design and engineering to begin execution.

Design starts with: homepage, /platform hub, /developers hub.
Engineering starts with: `styles/tokens.css`, base styles, navigation, footer — then homepage.

---

## Immediate Priorities (Next 2–4 Weeks)

### This Week

**Leadership**
- [ ] Review `docs/strategy/website-strategy.md` — align on positioning and category claim
- [ ] Review `docs/sitemap/full-sitemap.md` — confirm structure is complete
- [ ] Sign off on homepage messaging options in `docs/pages/homepage.md`

**Design**
- [ ] Set up Figma file using design system strategy
- [ ] Begin homepage design (use `docs/pages/homepage.md` as the spec)
- [ ] Design navigation component

**Engineering**
- [ ] Set up project folder structure per `docs/implementation/claude-build-plan.md`
- [ ] Create `CLAUDE.md` at project root
- [ ] Build `styles/tokens.css` from design system strategy

### Week 2

**Design**
- [ ] Homepage design — first review
- [ ] Begin /platform hub design
- [ ] Begin /developers hub design

**Engineering**
- [ ] Complete base CSS (tokens, base, components, layout)
- [ ] Build navigation and footer
- [ ] Begin homepage HTML/CSS build

### Week 3

**Design**
- [ ] Homepage approved and handed to engineering
- [ ] /platform and /developers designs in review
- [ ] Begin solutions section designs

**Engineering**
- [ ] Homepage live on staging
- [ ] /platform hub built
- [ ] /developers hub built

### Week 4

**Design + Engineering**
- [ ] Solutions section: designed and built
- [ ] Two industry pages built
- [ ] Internal content review across all pages
- [ ] Staging deployment — full review session

---

## Key Decisions Still Needed

The following decisions should be made before or during Week 1:

| Decision | Who owns it | Deadline |
|---|---|---|
| Final homepage headline (3 options in spec) | Marketing + Leadership | Week 1 |
| Hero visual treatment (configurator demo vs. render grid vs. split-screen) | Design + Product | Week 1 |
| Real customer logos and proof stats | Marketing + Sales | Week 2 |
| Developer API pricing / access model | Product | Week 2 |
| Initial case study subjects | Sales + Marketing | Week 2 |
| Navigation link labels — final review | Marketing | Week 1 |

---

## What Happens After Staging

1. Content review — all copy refined against brand voice
2. Real customer logos and stats added
3. Case studies written and added
4. Developer documentation populated (real API reference)
5. SEO review — meta titles, descriptions, heading structure
6. Performance review — Core Web Vitals, image optimisation
7. Accessibility audit
8. Launch

---

## How to Use the Documentation

Every team member should know where to find answers:

| Question | Where to look |
|---|---|
| What is our positioning? | `docs/strategy/website-strategy.md` |
| What pages does the site have? | `docs/sitemap/full-sitemap.md` |
| What should this page say? | `docs/pages/[pagename].md` |
| What does this component look like? | `docs/design-system/design-system-strategy.md` |
| What do I build first? | `docs/implementation/claude-build-plan.md` |
| What's the plan for the next 4 weeks? | This document |

---

## The One Thing

If there is one thing to take away from this foundation:

> The website must make "configurable commerce" feel like a real, important, inevitable category — and Imagine as the company that owns it.

Every headline, every design decision, every CTA is in service of that goal.

---

## Questions

Direct all questions about:
- **Strategy and positioning** → [Marketing/Strategy lead]
- **Page content and copy** → [Marketing/Content lead]
- **Design decisions** → [Design lead]
- **Build and implementation** → [Engineering lead]
- **Documentation updates** → Update the relevant file in `/docs` and flag in team channel
