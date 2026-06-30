# Optimization Summary

Phase 5 - Performance Optimization.

## Implemented Optimizations

- Added first-screen image preload for Homepage V3.
- Added first-screen image preload for Sound Civilization Map V2.
- Reduced mobile motion cost on Homepage, Sound Map, and Archive.
- Added content visibility containment for below-fold sections where supported.
- Added async image decoding for dynamic album images.
- Preserved metadata-only audio loading on artist pages.
- Documented Artists Universe heavy inline payload as a future split issue.

## Resource Strategy

WebP remains the preferred image format.

Existing optimized assets are reused:

- `assets/generated/music-map-guanwujie.webp`.
- `assets/generated/music-map-shiliyin.webp`.
- `assets/generated/music-map-mengmeng.webp`.
- `assets/optimized/*.webp`.

No audio recompression was performed because audio quality belongs to the works system and current audio elements are not eager-loaded.

## Rendering Strategy

Critical CSS remains inline because this is a static preview without a build pipeline.

Scripts remain at the end of body and avoid blocking first paint.

Mobile animation is reduced to protect first-screen smoothness.
