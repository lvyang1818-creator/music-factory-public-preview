# Bug Fix Report

## Milestone

Milestone 17 - Final Stabilization.

## Scope

Only stabilization fixes were allowed:

- Fix errors.
- Fix broken links.
- Fix layout displacement.

No new feature, page, system, redesign, or structural refactor was added.

## Fix 1 - Sound Map Node Works Route

Issue:

`catalog.soundMapNodes` inherited `../works/...` from artist-level href data.

Risk:

If Sound Map consumed `soundMapNodes` directly from the root page, the route could resolve incorrectly.

Fix:

Normalize `soundMapNodes.worksHref` by removing the leading `../`.

File:

- `src/content/music-catalog.js`

Status:

Fixed.

## Fix 2 - Artists Universe Return Routes

Issue:

Artist pages were accessible but lacked the unified stabilization routes:

- Back to Civilization.
- Explore Map.
- View Archive.
- Discover Works.

Risk:

Artists Universe could behave like an isolated page instead of participating in the world route.

Fix:

Added the unified route links to the existing artist topbar without changing the page body, visual system, or layout structure.

Files:

- `artists/guanwujie.html`
- `artists/shiliyin.html`
- `artists/mengmeng.html`

Status:

Fixed.

## Regression Check

After fixes:

- Inline scripts passed.
- Route checker passed.
- Desktop browser validation passed.
- Mobile browser validation passed.
- No horizontal overflow was detected.

## Final Result

All discovered stabilization bugs are fixed.
