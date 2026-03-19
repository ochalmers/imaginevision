# Prism Design System — Lovable Build Prompt

Build a documentation page for the Prism Design System team setup guide for imagine.io. Match this exact layout and aesthetic:

## LAYOUT
- Fixed left sidebar, 260px wide, full height
- Main content area takes the rest, scrollable independently
- Warm off-white background #f8f5f0 for everything — sidebar and main content same color
- No visible sidebar border — just the layout separation
- Main content max-width 740px, centered in its area, padding 64px 80px

## SIDEBAR
- Top: small orange circle logo mark + bold text "Prism Design System" at 14px
- Below logo: grouped nav sections with uppercase bold labels at 11px, letter-spacing 1.5px, color #888, margin-bottom 8px
- Nav items: plain text links, 14px, color #333, padding 7px 12px, border-radius 6px, no underline, no bullets
- Active and hover state: background #1a1a1a, color white, border-radius 6px, full sidebar padding width
- Sections and nav items:

  GETTING STARTED
    Overview

  SETUP
    1. Download
    2. Machine Setup
    3. New Project

  KEEPING IN SYNC
    Sync with Figma

  REFERENCE
    What's Included

- Sidebar nav: clicking any item smooth-scrolls to that section and updates active state
- As user scrolls main content, the active nav item updates to match current section

## TYPOGRAPHY
- All text: Inter or system sans-serif
- Hero heading: 40px, font-weight 800, color #1a1a1a, line-height 1.15
- Section headings: 24px, font-weight 700, color #1a1a1a, margin-top 64px, margin-bottom 4px
- Body text: 15px, color #444, line-height 1.75
- Bold inline labels ("Note:", "Pro tip:"): font-weight 700, color #1a1a1a
- Code blocks: font-family monospace, font-size 13px, line-height 1.7, background #ede9e3, border 1px solid #ddd8ce, border-radius 8px, padding 20px 24px, color #1a1a1a, white-space pre-wrap
- Copy button on code blocks: position absolute top-right 12px, 28x28px, background transparent, border 1px solid #ccc, border-radius 4px, icon-only, on click shows checkmark for 2 seconds

## BUTTONS
- Primary: background #1a1a1a, color white, border-radius 8px, padding 11px 22px, font-size 14px, font-weight 600
- Secondary: background transparent, border 1px solid #ccc, color #1a1a1a, same padding and radius

---

## CONTENT

### Overview
Hero heading: "Prism Design System"
Sub-heading: "Team Setup Guide"
Body: "This guide gets you set up to use the Prism Design System in every imagine.io project you build with Claude Code. Download the starter kit, run the setup once, and every new project is ready to go."

Two buttons:
- Primary: "Download prism-setup.zip" — download link (placeholder href="#")
- Secondary: "View in Figma" — href https://www.figma.com/design/kiwttYrNajH3hQwrtGtrle/Prism-Design-System?node-id=1-3 opens in new tab

Note box below buttons (background #ede9e3, border-radius 8px, padding 16px 20px, font-size 14px):
"This system is scoped to imagine.io projects only. Claude applies Prism tokens, fonts, and logos only when a project's CLAUDE.md identifies it as an imagine.io project."

---

### 1. Download
Heading: "1. Download the Files"
Body: "The zip contains everything needed — config files, fonts, and logos. Download and unzip it. This folder is your starting point."

What's included list (monospace inline code for filenames):
- CLAUDE.md — activates the design system for the project
- prism-design-system.md — full token reference (colors, typography, spacing)
- fonts/ — PP Neue Montreal, 6 weights (.otf)
- logos/ — imagine.io SVG logos, 5 variants
- README.md — reference guide

Primary button: "Download prism-setup.zip" (placeholder href="#")

---

### 2. Machine Setup
Heading: "2. Machine Setup"
Body: "Do this once per machine. Open the unzipped folder in Claude Code and run this prompt. Claude will install the fonts, copy the config files to the right places, and confirm everything is ready."

Code block with copy button:
```
I've unzipped the Prism Design System starter kit. Please set up my machine:

1. Copy prism-design-system.md from this folder to ~/.claude/prism-design-system.md
2. Check if ~/.claude/CLAUDE.md exists:
   - If it does NOT exist: create it with this exact content:
     @~/.claude/prism-design-system.md

     # Scope
     The Prism Design System is exclusively for imagine.io projects.
     Only apply it when the project's CLAUDE.md identifies it as an imagine.io project.
     For all other projects, ignore all Prism rules entirely.
   - If it already exists: add @~/.claude/prism-design-system.md as the first line
     (only if not already there), then add the Scope section below it
3. Copy all .otf files from the fonts/ folder to ~/Library/Fonts/
4. Create ~/.claude/logos/ and copy all files from the logos/ folder there
5. Confirm everything is set up correctly
```

Pro tip: "You only need to do this once. After this, your machine is fully configured and every imagine.io project you open will have access to the full design system."

---

### 3. New Project
Heading: "3. Starting a New Project"
Body: "Every new imagine.io project starts as a copy of the starter kit."

Numbered steps:
1. Duplicate the unzipped prism-setup folder
2. Rename it to your project name
3. Open it in Claude Code
4. Start building — the design system is already active

Body: "The CLAUDE.md in the folder tells Claude this is an imagine.io project. All Prism tokens, PP Neue Montreal font, and logos are automatically applied from that point on."

Note box (same style as overview note box):
"Never remove or rename CLAUDE.md from the project root. Without it, Claude will not apply any Prism rules — this is intentional to prevent the design system from being used on non-imagine.io projects."

---

### Sync with Figma
Heading: "Syncing with Figma"
Body: "When the design system is updated in Figma — new tokens, colors, or type changes — run this prompt from any project in Claude Code. Claude updates your local file automatically."

Code block with copy button:
```
Re-sync ~/.claude/prism-design-system.md with the latest Prism Design System from this Figma file: https://www.figma.com/design/kiwttYrNajH3hQwrtGtrle/Prism-Design-System?node-id=1-3
```

Body: "After syncing, share the updated prism-design-system.md with the team so everyone stays in sync."

---

### What's Included
Heading: "What's Included"

Sub-heading: "Fonts — PP Neue Montreal"
Body: "6 weights installed to ~/Library/Fonts/. Claude generates @font-face blocks automatically for every HTML project."

Table:
| File | Weight |
|------|--------|
| PPNeueMontreal-Light.otf | 300 |
| PPNeueMontreal-Regular.otf | 400 |
| PPNeueMontreal-Book.otf | 450 |
| PPNeueMontreal-Medium.otf | 500 |
| PPNeueMontreal-SemiBold.otf | 600 |
| PPNeueMontreal-Bold.otf | 700 |

Sub-heading: "Logos"
Body: "5 SVG variants stored at ~/.claude/logos/. Claude copies the needed variant into each project automatically."

List:
- Horizontal.svg — horizontal lockup, dark
- Horizontal Light.svg — horizontal lockup, light
- Vertical.svg — vertical lockup, dark
- Vertical Light.svg — vertical lockup, light
- Mark.svg — logo mark only

Sub-heading: "Design Tokens"
Body: "All tokens are in prism-design-system.md. Two-tier system — always use semantic aliases in UI code, never hardcode hex values."

- Tier 1 — Brand primitives: --papaya-500, --green-500, --red-500, --blue-500, --grey-900
- Tier 2 — Semantic aliases: --surface-primary-default, --text-default-heading, --border-default-secondary

---

## FOOTER
Centered, color #999, font-size 13px, padding 40px:
"Prism Design System v1.0 — imagine.io · Internal use only"
