# System-wide Layout Fix

## Milestone

Milestone 15.6 - Product Experience Layer Unification.

## Purpose

This document defines the system-wide layout fix required to make Homepage, Artists Universe, Sound Civilization Map, Archive, Albums, and Works feel like one living product experience.

This is a layout system fix, not a new UI implementation.

## Problem

Music Factory now has a strong world system, but future pages could drift into separate visual products if layout rules are not unified.

The risk is that:

- Homepage becomes a landing page.
- Artists Universe becomes a profile page.
- Sound Map becomes a graph page.
- Archive becomes a dashboard or list.
- Albums and Works become product cards.

## Fixed Layout Model

Every page must follow the same experience spine:

1. Entry statement.
2. World or memory context.
3. Primary civilization route.
4. Secondary archive route.
5. Return route.

## Entry Layout Rules

### Homepage

Role: Portal to Civilization.

Layout rule:

- Hero introduces the civilization.
- Follow-up sections create routes into worlds, map, and archive.
- It must never become a sales landing page.

### Artists Universe

Role: Enter Personality Worlds.

Layout rule:

- Hero introduces the personality world.
- Sections move from identity to worldview to works to archive.
- It must never become an artist profile card page.

### Sound Civilization Map

Role: Explore Civilization Connections.

Layout rule:

- Hero introduces the atlas.
- Civilization sections reveal artist worlds.
- Connections read as cultural passages.
- Archive routes close the loop.
- It must never become a graph or technical diagram.

### Archive

Role: Preserve Civilization Memory.

Layout rule:

- Archive must show memory, ownership, version, and context.
- It may use more precision, but not dashboard density.
- It must always return to Sound Map and Artist.

### Albums / Works

Role: Civilization Chapters.

Layout rule:

- Albums group chapters by concept and ownership.
- Works connect sound, image, lyric, version, artist, and archive.
- They must not become product listings or streaming widgets.

## Shared Layout Requirements

All pages must use:

- Editorial Layout.
- Museum Grade Design.
- Quiet Luxury Aesthetic.
- Large Whitespace.
- Human-scale Composition.

All pages must avoid:

- SaaS dashboard UI.
- Card grid system as default structure.
- Product listing layout.
- Data visualization UI.
- Dense interface panels.

## Component-Level Fix

### Hero

Hero must establish world meaning, not marketing conversion.

Required:

- Large display type.
- One clear positioning statement.
- One primary route.
- Calm background or meaningful image.

### Section

Sections must behave like museum rooms or editorial chapters.

Required:

- Strong hierarchy.
- Generous spacing.
- Clear narrative progression.
- No feature-list rhythm.

### Object Presentation

Artists, works, albums, and archive entries are cultural objects.

Required:

- Show ownership.
- Show context.
- Show memory.
- Show route.

Forbidden:

- Generic card grid.
- Product catalogue.
- Filter-first layout.
- Dashboard tile.

## Layout Acceptance Checklist

- Does the page begin with civilization meaning?
- Does the page preserve human-scale reading?
- Does the page use large whitespace?
- Does the page avoid product listing rhythm?
- Does the page provide a route into the world system?
- Does the page provide a route back to civilization?

## Fix Status

Status: System rule established.

Implementation status: Future UI changes must follow this layout fix before shipping.
