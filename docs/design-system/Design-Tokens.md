# Design Tokens

## Purpose

Design Tokens provide the shared language for Music Factory's visual system. Tokens describe color, typography, size, spacing, radius, shadow, and animation.

## Color Tokens

```css
:root {
  --color-warm-white: #f7f3ea;
  --color-paper: #fffdf8;
  --color-charcoal: #14120f;
  --color-warm-gray: #766f63;
  --color-soft-gray: #ddd5c7;
  --color-dark-gold: #a58a56;
  --color-archive-ink: #24201a;
  --color-museum-sand: #e8dfd0;
  --color-human-clay: #b79a7c;
  --color-record-black: #090807;
}
```

## Font Tokens

```css
:root {
  --font-display: "Didot", "Bodoni 72", "Songti SC", "STSong", Georgia, serif;
  --font-body: "Inter", "SF Pro Text", "Helvetica Neue", "Microsoft YaHei", system-ui, sans-serif;
  --font-caption: "SF Pro Text", "Helvetica Neue", "Microsoft YaHei", system-ui, sans-serif;
  --font-quote: "Times New Roman", "Songti SC", Georgia, serif;
}
```

## Font Size Tokens

```css
:root {
  --type-display-xl: clamp(72px, 8.8vw, 132px);
  --type-display-lg: clamp(52px, 8vw, 118px);
  --type-display-md: clamp(34px, 5.4vw, 84px);
  --type-title-lg: 32px;
  --type-title-md: 24px;
  --type-body-lg: 19px;
  --type-body-md: 16px;
  --type-caption: 11px;
}
```

## Spacing Tokens

```css
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;
}
```

## Radius Tokens

```css
:root {
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;
}
```

## Shadow Tokens

```css
:root {
  --shadow-none: none;
  --shadow-object: 0 18px 60px rgba(20, 18, 15, .08);
  --shadow-editorial: 0 32px 110px rgba(20, 18, 15, .10);
  --shadow-archive: 0 24px 80px rgba(20, 18, 15, .14);
}
```

## Motion Tokens

```css
:root {
  --motion-fast: 260ms cubic-bezier(.2, .8, .2, 1);
  --motion-base: 560ms cubic-bezier(.2, .8, .2, 1);
  --motion-slow: 1100ms cubic-bezier(.19, 1, .22, 1);
  --motion-breath: 20000ms ease-in-out;
}
```

## Token Rules

- Tokens define the shared system; individual pages should not invent random values casually.
- Tokens may evolve only when the design system is updated.
- Tokens must preserve Editorial, Museum, Luxury, Archive, Music Civilization, Humanity, Quiet, and Contemporary values.
- Tokens must never drift toward SaaS, Startup, Dashboard, or tech-blue glow aesthetics.
