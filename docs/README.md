# Imagine — Website Documentation

This is the master documentation repository for the Imagine website rebuild. It defines the strategy, architecture, content, design system, and implementation plan for the full site.

## What This Is

Imagine is repositioning around a new category: **configurable commerce**. This documentation set provides everything required to build the website that defines, owns, and scales that category — from homepage narrative through developer documentation to design tokens.

These documents are the source of truth. When building pages, generating copy, designing components, or briefing team members, reference this structure first.

---

## File Tree

```
docs/
├── README.md                          ← This file
├── SUMMARY.md                         ← Executive overview
│
├── strategy/
│   └── website-strategy.md            ← Full strategic foundation
│
├── sitemap/
│   └── full-sitemap.md                ← Complete sitemap with URLs, purpose, audience, CTA
│
├── pages/
│   ├── homepage.md                    ← Detailed homepage spec
│   │
│   ├── platform.md                    ← /platform hub
│   ├── platform-rendering.md          ← /platform/rendering
│   ├── platform-configuration.md      ← /platform/configuration
│   ├── platform-product-systems.md    ← /platform/product-systems
│   ├── platform-experiences.md        ← /platform/experiences
│   ├── platform-apis.md               ← /platform/apis
│   │
│   ├── solutions.md                   ← /solutions hub
│   ├── solutions-product-configurators.md
│   ├── solutions-visual-product-pages.md
│   ├── solutions-marketing-visualisation.md
│   ├── solutions-product-design.md
│   │
│   ├── industries.md                  ← /industries hub
│   ├── industries-furniture.md
│   ├── industries-mattresses.md
│   ├── industries-appliances.md
│   ├── industries-lighting.md
│   │
│   ├── developers.md                  ← /developers hub
│   ├── developers-api.md
│   ├── developers-docs.md
│   ├── developers-examples.md
│   ├── developers-sdk.md
│   │
│   ├── resources.md
│   ├── blog.md
│   ├── guides.md
│   ├── case-studies.md
│   ├── product-updates.md
│   │
│   ├── about.md
│   ├── careers.md
│   └── contact.md
│
├── design-system/
│   └── design-system-strategy.md     ← Tokens, components, patterns, principles
│
└── implementation/
    ├── claude-build-plan.md           ← How to build this with Claude Code / Cursor
    └── team-alignment-summary.md     ← Internal summary for team alignment
```

---

## How to Use These Documents

### For Designers
Start with `design-system/design-system-strategy.md` for visual direction, tokens, and component patterns. Then reference individual page specs in `pages/` for layout structure and section hierarchy.

### For Developers
Start with `implementation/claude-build-plan.md` for folder structure and build order. Reference `design-system/design-system-strategy.md` for token naming conventions and component API patterns.

### For Strategists and Copywriters
Start with `strategy/website-strategy.md` for positioning, messaging, and audience framing. Then work through individual page specs in `pages/` — each page defines objective, key messages, and CTA strategy.

### For Product and Leadership
Read `SUMMARY.md` for the executive overview, then review `sitemap/full-sitemap.md` for the full structure.

### For AI-Assisted Build (Claude / Cursor)
Reference `implementation/claude-build-plan.md`. When generating pages, always provide the relevant page spec from `pages/` alongside the design system strategy.

---

## Core Positioning

> **Imagine powers configurable commerce.**

Imagine is not a rendering tool, a CGI replacement, or an image generation platform. Those are capabilities. The category is configurable commerce — the infrastructure, platform, and tooling that enables brands to visualise, configure, and sell products that can be personalised.

---

## Document Status

All documents in this repository represent the **v1 strategic foundation**. They are intended to be living documents — updated as the product evolves, positioning is refined, and new pages are scoped.

| Document | Status |
|---|---|
| Website Strategy | Complete |
| Full Sitemap | Complete |
| Homepage Spec | Complete |
| Platform Pages | Complete |
| Solutions Pages | Complete |
| Industries Pages | Complete |
| Developers Pages | Complete |
| Resources + Company Pages | Complete |
| Design System Strategy | Complete |
| Claude Build Plan | Complete |
| Team Alignment Summary | Complete |
