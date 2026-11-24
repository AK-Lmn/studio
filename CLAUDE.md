# AKL Studio (`studio.aklmn.me`) — Project Specification & Agent Guide

> **Context**: Exported from Antigravity conversation `[Idea Dump & Senior SDD/TDD Planner]` (ID: `bbe86672-a636-43b7-bfc8-cb837418772e`).

## 1. Project Overview & Identity
- **Name**: AKL Studio
- **Domain**: `studio.aklmn.me` (subdomain of Kim's personal site `aklmn.me`)
- **Pitch**: High-speed, high-converting digital tools, group-buy storefronts, and full-stack web applications for micro-businesses, community sellers, and creators.
- **Hook**: *"Starts at ₱500 • 24–48h Turnaround • Zero Friction"*
- **Primary Conversion**: WhatsApp Direct Link (pre-filled with custom project estimate)

---

## 2. Tech Stack & Architecture
- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Package Manager**: pnpm

### Visual Design System
- **Theme**: Dark Tech Studio / Crimson Cyberpunk
- **Background**: Deep void blacks (`#0a0a0a`, `#000000`, `zinc-950`)
- **Accent**: Vibrant Crimson Red (`#dc2626`, `#ef4444`, `red-500`) with ambient radial glow
- **Borders**: Subtly glowing glass borders (`border-white/10`, `hover:border-red-500/40`)
- **Aesthetic**: Tech slash (`///`) particles, geometric pill badges, floating mockups, zero generic AI slop

---

## 3. Core Features & Page Structure

### A. Hero Section
- Animated diagonal banner: `STARTS AT ₱500` with ambient red glow.
- Staggered typography reveal:
  - Header: *"Turnkey Web Apps & Storefronts for Fast-Moving Businesses"*
  - Subhead: *"From ₱500 group-buy dashboards to custom full-stack client portals. Delivered in 24–48 hours."*
- Dual CTA:
  - Primary: `[Build Your Quote & Estimate]` (smooth-scrolls to Calculator)
  - Secondary: `[Chat on WhatsApp]`
- 3D perspective floating mockup of a live dashboard (`ALICE GB3 🌸`).

### B. Two-Tier Service Architecture
1. **Tier 1: Turnkey Dashboards & Micro-Tools (₱500 – ₱1,500)**
   - Group-Buy / E-Commerce Ordering Dashboards (Live Google Sheets sync)
   - High-Converting Single-Page Landing Sites
   - GCash / Payment Verification & Vaulting Gates
2. **Tier 2: Custom Full-Stack Systems (₱3,000 – ₱15,000+)**
   - Full Multi-Page Business Platforms
   - Relational Databases & Multi-Tenant Portals
   - Custom Automation & Telegram / WhatsApp Order Bots

### C. Interactive Quote Estimator (Killer Conversion Feature)
An interactive calculator where visitors customize their project in real time:
1. **Base Project (Single select)**:
   - Starter 1-Page Landing (`₱500`)
   - Group-Buy / Storefront Dashboard (`₱1,200`)
   - Full Multi-Page Business Website (`₱3,000`)
   - Custom Web System / Client Portal (`₱5,000`)
2. **Add-On Features (Multi-select)**:
   - Google Sheets Two-Way Sync (`+₱300`)
   - GCash / Maya Receipt Upload & Vaulting (`+₱400`)
   - VIP Phone Whitelist / Passcode Access Gate (`+₱250`)
   - Telegram / WhatsApp Instant Order Alert Bot (`+₱350`)
   - Android App / PWA Installable (`+₱400`)
   - Social Media Poster & Banner Graphics (`+₱300`)
3. **Timeline Speed**:
   - Standard (3–5 Days) (`+₱0`)
   - Rush Delivery (24–48 Hours) (`+₱500`)
4. **Live Total & WhatsApp Deep Link**:
   - Rolling animated price counter.
   - Button: `[Send Quote to Kim via WhatsApp]`
   - Formats a pre-filled WhatsApp message:
     ```text
     Hi Kim! I used the AKL Studio quote calculator:
     • Base: Group-Buy Dashboard (₱1,200)
     • Add-ons: Google Sheets Sync (+₱300), GCash Vaulting (+₱400)
     • Timeline: Rush 24h (+₱500)
     Estimated Total: ~₱2,400
     Can we discuss this project?
     ```

### D. Showcase & Proof Gallery
- Card 1: **Group-Buy Dashboard Engine** (`https://ak-lmn.github.io/dashboard-demo/`)
- Card 2: **PBC Multi-Storefront Order Vault**
- Card 3: **Scientific / Custom Tooling Suites**

### E. Mobile Sticky WhatsApp Bar
- Fixed bottom bar on mobile (`z-50`) with one-tap WhatsApp trigger.

---

## 4. Execution Slices

- **[ ] Slice 1: Design Tokens & Layout Shell**
  - Dark crimson theme, typography, glowing navbar with logo `AKL /// STUDIO`, footer.
- **[ ] Slice 2: Hero Section**
  - Animated diagonal badge, headline, CTA buttons, floating preview frame.
- **[ ] Slice 3: Services Grid**
  - 6 service cards with spotlight hover, magnetic icons, and feature tags.
- **[ ] Slice 4: Interactive Quote Calculator**
  - State management for base tier + add-ons + speed.
  - Animated rolling price ticker.
  - Dynamic WhatsApp URL generator (`wa.me`).
- **[ ] Slice 5: Showcase Gallery**
  - Interactive preview cards with external links and tech badges.
- **[ ] Slice 6: Mobile Sticky Bar & Responsive Verification**
  - Mobile bottom navigation, accessibility contrast checks, clean build.
