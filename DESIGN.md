---
name: AKL Studio
description: High-performance web development and creative systems studio
colors:
  racing-red: "#e10600"
  racing-red-strong: "#b80500"
  racing-red-soft: "rgba(225, 6, 0, 0.13)"
  racing-red-glow: "rgba(225, 6, 0, 0.27)"
  background: "#070709"
  surface: "#111114"
  surface-2: "#1a1a1f"
  border: "#2a2a30"
  foreground: "#f4f4f5"
  ink-2: "#c4c4cc"
  ink-3: "#9e9ea8"
  white: "#ffffff"
typography:
  display:
    fontFamily: "var(--font-barlow), sans-serif"
    fontWeight: 900
    fontStyle: "italic"
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "var(--font-geist-mono), monospace"
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.racing-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
    typography: "{typography.display}"
  button-primary-hover:
    backgroundColor: "{colors.racing-red-strong}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  card-sector:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "24px"
---

# Design System: AKL Studio

## Overview
AKL Studio uses a bold, high-contrast, technical racing-inspired aesthetic (F1 / telemetry / endurance paddock) adapted for modern web development, small business digital operations, and bespoke client systems. The system balances aggressive graphic pacing (italic condensed typography, checkered accents, speed streaks, starting grid lights) with strict ergonomic restraint (minimum 44px touch targets, AA/AAA contrast ratios, keyboard navigation).

## Colors
- **Racing Red (`#e10600`)**: Core primary accent. Signifies high speed, action triggers, selected state halos, and primary interactive CTAs.
- **Racing Red Strong (`#b80500`)**: Deepened interactive hover state for high contrast and visual feedback.
- **Background (`#070709`)**: Deep asphalt/carbon base tone providing infinite depth without the eye strain of pure `#000000`.
- **Surface (`#111114`) & Surface-2 (`#1a1a1f`)**: Tonally layered chassis panels for cards, modals, and telemetry containers.
- **Border (`#2a2a30`)**: Muted structural dividers separating sectors and technical readouts.
- **Foreground (`#f4f4f5`) & Text Inks (`#c4c4cc`, `#9e9ea8`)**: Calibrated light neutrals ensuring WCAG 2.1 AA text legibility against dark backgrounds.

## Typography
- **Display**: `Barlow Condensed` (Black / Italic / Uppercase). Used strictly for impact moments: section banners, hero callouts, ranking numbers (P1, P2, P3), and main buttons.
- **Body & Sans**: `Geist Sans`. Balanced, neutral geometric sans for explanatory copy, subheadlines, and client service descriptions.
- **Telemetry & Mono**: `Geist Mono` (`tabular-nums`). Reserved for sector indicators (`///`), currency calculations (`₱500`), timestamps, and technical tags.

## Layout
- **Container Scale**: Standard max widths `max-w-7xl` (1280px) and `max-w-6xl` (1152px) with fluid padding (`px-4 sm:px-6 lg:px-8`).
- **Telemetry Dividing Lines**: Sector headers incorporate horizontal red-to-transparent hairline speed gradients.
- **Mobile First**: All multi-column sector grids collapse into 1 column on mobile, with touch targets expanding to ≥48px height.

## Elevation & Depth
- **Carbon Weave Texture**: CSS repeating linear gradients simulating lightweight carbon fiber on the primary canvas.
- **Halos & Glows**: Active selection states utilize colored glows (`box-shadow: 0 0 24px -6px rgba(225, 6, 0, 0.5)`) rather than heavy physical drop shadows.
- **Visible Focus**: Global 2px solid `var(--racing-red)` with 3px offset for keyboard accessibility (`:focus-visible`).

## Shapes
- **Corner Radii**: Uniform technical radius of `4px` (`rounded-sm`). Generous rounding is intentionally avoided to preserve precision and crisp engineered lines.
- **Checkered Motif**: 14px black-and-white checkered flag tiles used sparingly as section badges and starter lights.
- **Racing Stripes**: 3px vertical accent bars pinned to card borders.

## Components
- **Starting Grid & Lights**: Hero telemetry badge featuring sequentially glowing red indicator dots.
- **Timing Tower (Price Card)**: Oversized price display anchored with sector notation and tier breakdown.
- **Sector Cards (Build Sheet)**: Interactive selector cards with instant state reaction, custom checkboxes, and tabular price updates.
- **Sticky Pit Wall Bar**: Mobile-only bottom drawer ensuring instant WhatsApp consultation access without obstructing screen flow.

## Do's and Don'ts
- **DO** use tabular numerals (`tabular-nums font-mono`) for all prices and counts to prevent layout jitter.
- **DO** maintain 44px+ minimum touch dimensions on all clickable buttons, cards, and links.
- **DO** respect `prefers-reduced-motion` across Framer Motion animations.
- **DON'T** introduce generic soft pastel gradients or bubbly `rounded-2xl` corners.
- **DON'T** use emoji as icons—always use crisp Lucide SVGs with defined dimensions.
- **DON'T** let contrast dip below 4.5:1 on muted copy against the dark chassis background.
