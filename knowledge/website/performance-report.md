# Performance Report

Phase 5 - Performance Optimization.

## Scope

Checked pages:

- Homepage V3.
- Artists Universe.
- Sound Civilization Map V2.
- Albums and Works.
- Archive Cinematic System.

## Current Resource Findings

### Homepage V3

Homepage uses WebP atlas imagery and no catalog script. This is good for first screen performance.

Optimization target:

- Preload only the first-screen hero WebP.
- Reduce mobile motion cost.
- Keep pointer parallax desktop-only.

### Artists Universe

Artist pages use optimized WebP portraits and posters, and audio uses metadata preload.

Main issue:

- Artist HTML files include large inline Works and lyrics payloads.
- Largest checked files:
  - `artists/shiliyin.html` around 138 KB.
  - `artists/guanwujie.html` around 111 KB.
  - `artists/mengmeng.html` around 72 KB.

Future optimization:

- Split heavy Works data into external per-artist JSON.
- Load lyrics and audio detail only when a visitor opens a work.

### Sound Civilization Map V2

Sound Map uses WebP map images and catalog-derived data.

Optimization target:

- Preload first-screen atlas image.
- Reduce mobile background animation and reveal blur cost.

### Albums and Works

Albums and Works use small catalog-driven pages.

Optimization target:

- Add `decoding="async"` to dynamic images.
- Keep catalog script at the end of body.

### Archive Cinematic System

Archive uses CSS-only atmosphere and catalog-derived records.

Optimization target:

- Use content visibility for below-fold record-heavy sections.
- Reduce mobile animation cost.

## Production Status

The site is close to production-ready for static preview.

Remaining high-impact issue:

- Artists Universe payload should be split before large-scale launch.

## Phase 5 CDP Sampling

Environment:

- Local static `file://` preview.
- Chrome headless.
- Mobile viewport: 390 x 900.

Sampled metrics:

| Page | DOM Nodes | JS Heap Used | Script Time | Layout Time |
| --- | ---: | ---: | ---: | ---: |
| Homepage V3 | 612 | 0.92 MB | 0.6 ms | 2.1 ms |
| Sound Civilization Map V2 | 873 | 1.20 MB | 1.4 ms | 4.2 ms |
| Archive Cinematic System | 2275 | 1.55 MB | 3.4 ms | 12.3 ms |
| Works | 2815 | 1.84 MB | 1.8 ms | 6.2 ms |
| Albums | 2952 | 2.10 MB | 1.1 ms | 3.2 ms |
| Artist Shiliyin | 3505 | 2.35 MB | 0.3 ms | 3.6 ms |

Interpretation:

- Homepage and Sound Map are lightweight enough for the static preview.
- Archive and Works have more DOM because they render catalog-derived records, but runtime cost remains acceptable.
- Artists Universe remains the largest HTML payload risk because data is embedded inline before user intent.
