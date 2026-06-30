# Typography System

## Purpose

Typography is the main carrier of Music Factory's editorial identity. It must feel like a contemporary museum publication: calm, intelligent, human, musical, and precise.

## Font Roles

| Role | Purpose | Recommended Direction |
| --- | --- | --- |
| Display Font | Brand titles, hero titles, section statements | Elegant serif or high-culture editorial display. |
| Body Font | Reading, descriptions, content blocks | Neutral humanist sans or system sans. |
| Caption Font | Metadata, labels, navigation, archive details | Clear sans with strong spacing control. |
| Quote Font | World quotes, philosophical lines | Serif or literary font with controlled rhythm. |

## Current Font Stack Guidance

```css
--font-display: "Didot", "Bodoni 72", "Songti SC", "STSong", Georgia, serif;
--font-body: "Inter", "SF Pro Text", "Helvetica Neue", "Microsoft YaHei", system-ui, sans-serif;
--font-caption: "SF Pro Text", "Helvetica Neue", "Microsoft YaHei", system-ui, sans-serif;
--font-quote: "Times New Roman", "Songti SC", Georgia, serif;
```

## Type Scale

| Token | Size | Use |
| --- | --- | --- |
| `type.display.xl` | `clamp(72px, 8.8vw, 132px)` | Homepage and realm hero titles. |
| `type.display.lg` | `clamp(52px, 8vw, 118px)` | Major section statements. |
| `type.display.md` | `clamp(34px, 5.4vw, 84px)` | Editorial lead copy. |
| `type.title.lg` | `32px` | Component group titles. |
| `type.title.md` | `24px` | Card and content titles. |
| `type.body.lg` | `19px` | Lead paragraphs. |
| `type.body.md` | `16px` | Standard body copy. |
| `type.caption` | `11px` | Labels and metadata. |

## Line Height Rules

- Display type may use tight line height when the words are large and short.
- Body copy must breathe and remain readable.
- Captions should use compact line height but enough spacing to avoid clutter.
- Quotes may use slightly more literary rhythm.

## Letter Spacing Rules

- Avoid negative letter spacing except controlled display typography.
- Caption labels may use positive tracking.
- Body copy should usually keep normal letter spacing.
- Do not use excessive tracking to imitate luxury.

## Editorial Rules

- Hero text must be short and memorable.
- Section titles should feel like magazine headlines.
- Body text should be concise, not explanatory documentation inside the page.
- Metadata should support hierarchy, not become the interface's visual noise.

## Forbidden

- Dashboard typography density.
- SaaS feature-card typography rhythm.
- Overly rounded startup fonts as the dominant brand voice.
- Oversized type inside compact controls.
- Tiny unreadable luxury captions.

## Review Checklist

- Does the type hierarchy create a cultural first impression?
- Does the typography feel human and editorial?
- Is the body copy readable on all breakpoints?
- Does any type style look like SaaS, startup, or dashboard UI?
