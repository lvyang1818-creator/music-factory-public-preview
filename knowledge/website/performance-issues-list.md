# Performance Issues List

Phase 5 - Performance Optimization.

## P1 - Artists Universe Inline Payload

Status: Open.

Artist pages include large inline works, lyrics, and version data.

Impact:

- Larger HTML download.
- Slower parse time.
- More JavaScript memory before user intent.

Recommended fix:

- Move each artist work catalogue into external JSON.
- Render summary cards from small metadata.
- Load lyrics, version details, and audio links only when opening a work.

## P2 - Original Cover Images Still Exist

Status: Managed.

Many original JPG and PNG assets remain in `assets/`.

Impact:

- Risk of future pages accidentally using unoptimized originals.

Recommended fix:

- Continue using `assets/optimized/` and `assets/generated/*.webp`.
- Add review checks for new image references.

## P3 - Static Preview Has No Build Minification

Status: Accepted for current static preview.

CSS and JS are inline in HTML pages.

Impact:

- No automatic minification or shared bundle caching.

Recommended fix:

- Keep inline critical CSS now.
- Introduce a build step only when the project moves beyond public preview.
