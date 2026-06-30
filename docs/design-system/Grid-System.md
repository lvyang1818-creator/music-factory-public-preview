# Grid System

## Purpose

The Music Factory grid system supports editorial layouts, museum pacing, archive clarity, and contemporary asymmetry.

## Grid Principles

- Grid is a compositional tool, not a dashboard skeleton.
- Asymmetry is preferred when it improves hierarchy.
- Repetition is acceptable when content is archival.
- The grid must preserve reading order and cultural atmosphere.

## Global Container

| Token | Value | Use |
| --- | --- | --- |
| `container.page` | `min(1320px, calc(100% - 32px))` | Standard page width. |
| `container.narrow` | `min(860px, calc(100% - 32px))` | Longform reading. |
| `container.wide` | `min(1480px, calc(100% - 32px))` | Immersive editorial spreads. |

## Layout Patterns

### Editorial Split

- Left content, right whitespace or visual object.
- Use for hero, philosophy, realm introductions, and feature sections.

### Museum Navigation

- Large typographic entrances.
- Sparse metadata.
- Calm hover behavior.

### Archive Grid

- Supports repeated works, albums, years, and types.
- Must feel curated rather than tabular unless the task is explicitly data-heavy.

### Offset Composition

- Allows staggered images and text blocks.
- Must not damage responsive behavior.

## Breakpoint Guidance

| Breakpoint | Layout |
| --- | --- |
| Desktop | Asymmetric multi-column. |
| Tablet | Reduced two-column or stacked editorial flow. |
| Mobile | Single-column with preserved hierarchy. |

## Forbidden

- Dashboard columns.
- Generic 3-card SaaS layouts as default.
- Equal-height card walls without editorial purpose.
- Grid lines used as visible decoration.

## Review Checklist

- Does the grid feel like a publication or museum?
- Does the layout guide the eye naturally?
- Does the grid preserve brand atmosphere?
- Does the grid avoid SaaS product rhythm?
