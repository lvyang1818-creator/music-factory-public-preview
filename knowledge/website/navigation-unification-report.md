# Navigation Unification Report

## Milestone

Milestone 15.6 - Product Experience Layer Unification.

## Purpose

This report defines the unified navigation UI language for Music Factory.

The goal is to make Homepage, Artists Universe, Sound Civilization Map, Archive, Albums, and Works use one navigation logic.

## Required Navigation Labels

The product experience must use four primary labels:

| Label | Meaning | Primary Use |
| --- | --- | --- |
| Back to Civilization | Return from a local page to the larger civilization system. | Artist, Work, Album, Archive. |
| Enter World | Move into an artist or realm universe. | Homepage, Sound Map, Archive. |
| Explore Map | Move into Sound Civilization Map. | Homepage, Artists Universe, Archive. |
| View Archive | Move into preserved memory. | Homepage, Artists Universe, Sound Map, Works, Albums. |

## Entry Navigation Rules

### Homepage

Positioning: Portal to Civilization.

Required routes:

- Explore Map.
- Enter World.
- View Archive.

Homepage must not use landing-page conversion logic.

### Artists Universe

Positioning: Enter Personality Worlds.

Required routes:

- Back to Civilization.
- Explore Map.
- View Archive.

Artists Universe must not behave like an isolated profile.

### Sound Civilization Map

Positioning: Explore Civilization Connections.

Required routes:

- Enter World.
- View Archive.
- Back to Civilization.

Sound Map must not behave like a decorative visualization.

### Archive

Positioning: Preserve Civilization Memory.

Required routes:

- Back to Civilization.
- Explore Map.
- Enter World.

Archive must not become a terminal page.

## Current Audit Notes

Existing labels are directionally aligned but not fully unified.

Current examples:

- Homepage uses `Explore`, `Sound Map`, and `Archive`.
- Sound Map uses `Enter the Map` and `Enter Artist Universe`.
- Previous navigation model uses `Enter Artist Universe`, `Return to Sound Map`, and `Enter Archive`.

Milestone 15.6 standardizes these into:

- Explore Map.
- Enter World.
- View Archive.
- Back to Civilization.

## Label Mapping

| Existing Language | Unified Language |
| --- | --- |
| Explore | Explore Map when it routes to the map; otherwise choose a clearer route label. |
| Sound Map | Explore Map. |
| Archive | View Archive. |
| Enter the Map | Explore Map. |
| Enter Artist Universe | Enter World. |
| Return to Sound Map | Explore Map. |
| Enter Archive | View Archive. |

## Forbidden Navigation Language

Do not use:

- View Details.
- Manage.
- Open Data.
- Filter.
- Dashboard.
- Player only.
- Product Page.
- Learn More when the route has a specific world-system meaning.

## Navigation Acceptance Checklist

- Does every page expose at least one route back into the civilization system?
- Does every local object route to either Map, World, or Archive?
- Are the same route meanings named consistently across pages?
- Does the navigation feel like cultural movement instead of software utility?

## Review Status

Status: Navigation language unified at system level.

Implementation note: Future UI passes should rename visible route labels to the four-label system when changing page UI.
