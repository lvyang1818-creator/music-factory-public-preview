# Performance Optimization

Phase 5 - Performance Optimization.

## Purpose

Music Factory must be production-ready without losing its cinematic, editorial, and museum-grade identity.

Performance optimization must preserve:

- Civilization entrance feeling.
- Quiet luxury visual system.
- Slow motion only when it supports narrative.
- Artist and work traceability.

## First Screen Rule

Homepage first screen must prioritize:

- Critical HTML and CSS.
- One optimized WebP hero image.
- No audio preload.
- No catalog script unless the page needs it.
- Minimal pointer interaction on mobile.

## Resource Rule

Preferred asset order:

1. WebP.
2. Optimized JPG.
3. Original PNG or JPG only when no optimized asset exists.

Large audio files must not load before user intent. Audio elements should use metadata preload only.

## Rendering Rule

Allowed:

- Inline critical CSS for the current static preview.
- End-of-body scripts for page enhancement.
- IntersectionObserver for below-fold reveal.
- Reduced motion and lighter mobile animation.

Avoid:

- Blocking scripts in the head.
- Heavy inline data on first screen.
- Loading all artist lyrics before user intent.
- Large original images when optimized WebP exists.

## Phase 5 Scope

This optimization pass focuses on:

- Homepage V3.
- Artists Universe.
- Sound Civilization Map V2.
- Albums and Works.
- Archive Cinematic System.

Known larger future work:

- Split Artists Universe heavy work/lyrics data into per-artist JSON modules.
- Load lyrics and modal detail payload only when a work is opened.
