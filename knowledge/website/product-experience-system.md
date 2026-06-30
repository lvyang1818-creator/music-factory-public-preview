# Product Experience System

## Purpose

This document defines the unified product experience layer for Music Factory after Milestone 15.6.

It connects UI, interaction, navigation entry logic, and visual language so the project can move from system architecture into a living product experience.

## Product Experience Definition

Music Factory is a living product experience for A Civilization of Voices.

The experience is not a landing page, platform interface, dashboard, product listing, or player-only system.

The experience is a cultural journey across:

- Homepage.
- Artists Universe.
- Sound Civilization Map.
- Archive.
- Albums.
- Works.

## Unified UI Experience System

All website pages must share one product experience language.

### Typography Scale

Use the existing Design Tokens:

- Display type for civilization-level identity.
- Quote type for worldview, poetic statements, and cultural positioning.
- Body type for readable narrative.
- Caption type for navigation, labels, route markers, and metadata.

Typography must feel editorial and museum-grade.

It must not become dashboard-dense, SaaS-card rhythm, or generic product marketing typography.

### Spacing System

Use the 8pt rhythm already defined in Design Tokens.

Required behavior:

- Large whitespace around primary narrative moments.
- Human-scale reading width.
- Section rhythm based on cultural pacing, not conversion pacing.
- Mobile stacking that preserves silence and hierarchy.

Forbidden behavior:

- Cramped card grids.
- Product listing density.
- Dashboard panel spacing.
- Feature block compression.

### Layout System

All pages must use editorial composition.

Required layout qualities:

- Asymmetry when meaningful.
- Large visual pauses.
- Museum wall rhythm.
- Human-scale content blocks.
- Archive and work layouts that feel curated, not listed.

Forbidden layout qualities:

- SaaS dashboard UI.
- Generic card grid system.
- Product listing layout.
- Data visualization UI.
- App cockpit structure.

### Interaction System

All pages must share one calm interaction vocabulary:

- Fade Reveal.
- Mask Transition.
- Slow Motion.
- Soft Zoom.
- Scroll Narrative.

Interactions must support reading and journey.

They must not compete with the content.

### Motion System

Use the existing Motion System:

- `motion.fast` only for small hover and focus changes.
- `motion.base` for standard interface transitions.
- `motion.slow` for editorial reveal.
- `motion.breath` for ambient atmosphere when meaningful.

Forbidden:

- Fast animation.
- Game-like interaction.
- Strong particle effects.
- Aggressive parallax.
- Glow-based feedback.
- Bounce.

## Three Entry Experiences

### Entry 1 - Homepage

Positioning: Portal to Civilization.

Homepage is not a landing page.

Homepage introduces Music Factory as a cultural civilization system, then routes the visitor toward world entry, map exploration, and archive memory.

Required homepage routes:

- Explore Map.
- Enter World.
- View Archive.

### Entry 2 - Artists Universe

Positioning: Enter Personality Worlds.

Artists Universe is where a visitor enters a specific voice, personality, worldview, and realm.

It is not a performer profile or artist listing.

Required artist routes:

- Back to Civilization.
- Explore Map.
- View Archive.

### Entry 3 - Sound Civilization Map

Positioning: Explore Civilization Connections.

Sound Civilization Map is where visitors understand relationships between voice worlds.

It is not a relationship graph or data visualization.

Required map routes:

- Enter World.
- View Archive.
- Back to Civilization.

## Unified Navigation UI

Navigation must use consistent route language across pages.

Required labels:

- Back to Civilization.
- Enter World.
- Explore Map.
- View Archive.

These labels may appear as navigation links, text CTAs, or contextual route markers, but they must preserve the same meaning across all pages.

Forbidden:

- Different labels for the same route on different pages.
- Utility labels that reduce the system to software, such as Manage, View Details, Open Data, Filter, or Player.
- Page-specific navigation logic that cannot connect to the world system.

## Visual Language Unity

Artists, Map, and Archive must feel like different layers of one civilization system.

They are not three visual products.

Required continuity:

- Shared typography tokens.
- Shared spacing rhythm.
- Shared editorial layout principles.
- Shared quiet luxury color restraint.
- Shared slow reveal and scroll narrative.
- Shared archive/memory language.

Allowed variation:

- Realm color accents.
- Artist portrait direction.
- Archive density when context requires precision.
- Map atlas composition.

Variation must never break the overall civilization system.

## Agent Rule

Before changing any UI, interaction, navigation, layout, or visual language, check:

1. Does this page use the shared typography scale?
2. Does it preserve the spacing system?
3. Does it use editorial layout rather than card-grid/product layout?
4. Does it use the unified interaction system?
5. Does it use one of the required navigation labels?
6. Does it connect Homepage, Artists Universe, Sound Map, and Archive as one product experience?

If the answer is no, update the system document or revise the implementation before shipping.
