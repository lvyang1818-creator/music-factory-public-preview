# Frontend Architecture

## Purpose

The frontend is the rendering layer for Music Factory. It should not become the primary storage location for brand truth.

## Architecture Direction

The intended relationship is:

```text
Knowledge / Brand Repository
        ↓
Content Loader
        ↓
Renderer
        ↓
Website UI
```

## Frontend Responsibilities

- Layout.
- Rendering.
- Interaction.
- Responsive behavior.
- Accessibility.
- Motion execution.

## Non-Responsibilities

- Permanent brand truth.
- Official artist data ownership.
- Final album canon.
- Prompt canon.

## Agent Rule

When content changes are requested, update knowledge sources first unless the user explicitly asks for a temporary visual-only placeholder.
