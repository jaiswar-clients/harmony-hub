# PeopleX Design System Documentation

## Overview

**Design Philosophy**: Bauhaus + Blue Harmony

This design system combines the geometric purity and hard edges of **Bauhaus design** with the **Blue Harmony OKLCH color palette**. The result is a neo-brutalist aesthetic that's bold, memorable, and highly accessible.

### Core Principles

1. **Geometric Purity** - Only circles, squares, and triangles
2. **Hard Shadows** - Solid offset shadows, no blur
3. **Bold Typography** - Outfit font with weight 900 headlines
4. **Thick Borders** - 2px mobile, 4px desktop
5. **Binary Radius** - Only `rounded-none` OR `rounded-full`
6. **Color Blocking** - Intentional use of existing palette
7. **Mechanical Motion** - Snappy, tactile animations

---

## 1. Typography

### Font Family: **Outfit**

```typescript
// app/layout.tsx
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
})
```

### Typography Scale

| Usage | Class | Weight | Size |
|-------|-------|--------|------|
| Hero Headlines | `text-5xl md:text-6xl lg:text-7xl font-black` | 900 | 48px/60px/72px |
| Section Titles | `text-4xl md:text-5xl font-black` | 900 | 36px/48px |
| Card Titles | `text-xl font-black uppercase` | 900 | 20px |
| Body Text | `font-bold` | 700 | 16px |
| Captions | `text-sm font-bold` | 700 | 14px |

### Tracking & Leading

```tsx
// Headlines - tight tracking
tracking-tight

// Emphasized elements
uppercase tracking-wider  // badges, buttons
uppercase tracking-widest // small badges

// Body text
leading-relaxed  // improved readability
leading-[0.85]   // dramatic headlines
```

---

## 2. Color Palette

**Color Space**: OKLCH (perceptually uniform)

### Light Mode Colors

```css
/* Blue Harmony Palette */
--background: oklch(0.98 0.005 250);      /* Blue-tinted off-white */
--foreground: oklch(0.25 0.02 250);      /* Dark blue-gray */
--primary: oklch(0.52 0.14 250);         /* Smart blue */
--secondary: oklch(0.38 0.16 255);       /* French blue */
--accent: oklch(0.78 0.12 70);           /* Sandy clay */
--muted: oklch(0.92 0.02 250);           /* Desaturated blue-gray */
```

### Dark Mode Colors

```css
.dark {
  --background: oklch(0.18 0.02 250);    /* Deep blue-gray */
  --foreground: oklch(0.92 0.005 250);   /* Warm-tinted light */
  --primary: oklch(0.68 0.16 250);       /* Brighter smart blue */
  --secondary: oklch(0.52 0.18 255);     /* Brighter french blue */
  --accent: oklch(0.82 0.14 70);         /* Brighter sandy clay */
}
```

### Semantic Usage

| Token | Usage | Example |
|-------|-------|---------|
| `bg-primary` | Primary CTAs, main sections | Hero background |
| `bg-secondary` | Secondary actions, variety | Service cards |
| `bg-accent` | Special highlights, CTAs | Pricing featured |
| `bg-muted` | Neutral backgrounds | FAQ section |
| `bg-background` | Default page background | Content sections |

---

## 3. Shadows

**Bauhaus Hard Offset Shadows** - No blur, pure geometry

### Shadow Scale

```css
/* Light Mode - Black shadows */
--shadow-bauhaus-sm:  2px 2px 0px 0px oklch(0.25 0.02 250 / 1);
--shadow-bauhaus-md:  4px 4px 0px 0px oklch(0.25 0.02 250 / 1);
--shadow-bauhaus-lg:  6px 6px 0px 0px oklch(0.25 0.02 250 / 1);
--shadow-bauhaus-xl:  8px 8px 0px 0px oklch(0.25 0.02 250 / 1);
--shadow-bauhaus-2xl: 12px 12px 0px 0px oklch(0.25 0.02 250 / 1);

/* Dark Mode - White shadows */
.dark {
  --shadow-bauhaus-sm:  2px 2px 0px 0px oklch(0.92 0.005 250 / 1);
  --shadow-bauhaus-md:  4px 4px 0px 0px oklch(0.92 0.005 250 / 1);
  --shadow-bauhaus-lg:  6px 6px 0px 0px oklch(0.92 0.005 250 / 1);
  --shadow-bauhaus-xl:  8px 8px 0px 0px oklch(0.92 0.005 250 / 1);
  --shadow-bauhaus-2xl: 12px 12px 0px 0px oklch(0.92 0.005 250 / 1);
}
```

### Usage

| Utility | Shadow Size | Use Case |
|---------|-------------|----------|
| `shadow-brutal-sm` | 2px | Small badges, form inputs |
| `shadow-brutal` | 4px | Default cards, buttons |
| `shadow-brutal-lg` | 6px | Hover states, important cards |
| `shadow-brutal-xl` | 8px | Large CTAs, featured items |
| `shadow-brutal-2xl` | 12px | Hero elements, major emphasis |

---

## 4. Border Radius

**Binary System** - Only sharp OR fully rounded

```css
/* Bauhaus Philosophy */
--radius-none: 0;        /* Sharp corners - DEFAULT */
--radius-full: 9999px;   /* Fully rounded */
```

### Usage Pattern

```tsx
// Default - sharp corners
<div className="rounded-none border-4 border-black" />

// Fully rounded - circles
<div className="rounded-full border-4 border-black" />

// Alternate pattern for visual interest
className={index % 2 === 0 ? 'rounded-none' : 'rounded-full'}
```

---

## 5. Borders

**Thick, bold borders** for neo-brutalist aesthetic

### Border Scale

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile (default) | 2px | Small elements, badges |
| Desktop (sm:) | 4px | Cards, buttons, sections |

### Implementation

```tsx
// Responsive borders
className="border-2 border-black sm:border-4"

// Section dividers
<section className="border-t-4 border-b-4 border-black">

// Card borders
<Card className="border-4 border-black" />
```

---

## 6. Bauhaus Patterns

### Geometric Decorations

```css
/* Dot Grid Pattern */
.bauhaus-dot-grid {
  background-image: radial-gradient(circle, currentColor 1.5px, transparent 1.5px);
  background-size: 20px 20px;
}

/* Grid Lines Pattern */
.bauhaus-grid-lines {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 32px 32px;
}

/* Diagonal Stripes */
.bauhaus-diagonal-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    currentColor,
    currentColor 1px,
    transparent 1px,
    transparent 8px
  );
}
```

### Geometric Shapes

```tsx
// Rotated Square (Diamond)
<div className="bauhaus-rotated-45" />  {/* 45deg rotation */}
<div className="bauhaus-rotated-neg-45" />  {/* -45deg rotation */}

// Circle
<div className="rounded-full" />

// Triangle (using clip-path)
<div className="bauhaus-triangle" />
```

### Decoration Pattern

**Every section gets 3-4 geometric decorations:**

```tsx
<section className="relative overflow-hidden">
  {/* Large rotated circle */}
  <div className="absolute top-20 left-10 w-32 h-32 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />

  {/* Solid square */}
  <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-15 pointer-events-none" />

  {/* Small rotated square */}
  <div className="absolute top-1/3 right-1/4 w-16 h-16 border-4 border-white opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

  {/* Pattern overlay */}
  <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-dot-grid text-white" />
</section>
```

---

## 7. Components

### Button

**File**: `components/ui/button.tsx`

```tsx
import { Button } from "@/components/ui/button"

// Variants
<Button variant="default">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="bauhaus">Bauhaus Style (rounded)</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

**Button States:**

| State | Transform | Shadow |
|-------|-----------|--------|
| Default | - | `shadow-brutal` (4px) |
| Hover | `translate(-0.5px, -0.5px)` | `shadow-brutal-lg` (6px) |
| Active | `translate(4px, 4px)` | `none` |

### Card

**File**: `components/ui/card.tsx`

```tsx
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title Here</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Card Features:**
- `border-4 border-black` - thick borders
- `shadow-brutal` - 4px hard shadow
- `hover:-translate-y-1` - lifts on hover
- `bauhaus-press-effect` - tactile press

### Badge

**File**: `components/ui/badge.tsx`

```tsx
import { Badge } from "@/components/ui/badge"

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="pill">Pill (rounded)</Badge>
<Badge variant="stamp">Stamp (animated)</Badge>
<Badge variant="bauhaus">Bauhaus (rotated 45deg)</Badge>
<Badge variant="rotated">Rotated (-12deg)</Badge>
```

### Form Components

**Input** (`components/ui/input.tsx`):
```tsx
<Input placeholder="Enter text..." className="border-2 border-black shadow-brutal-sm" />
```

**Textarea** (`components/ui/textarea.tsx`):
```tsx
<Textarea placeholder="Message..." className="border-2 border-black shadow-brutal-sm" />
```

**Select** (`components/ui/select.tsx`):
```tsx
<Select>
  <SelectTrigger className="border-2 border-black shadow-brutal-sm">
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  {/* ... */}
</Select>
```

---

## 8. Animations

### Mechanical Animations

```css
/* Quick snap-in */
@keyframes snap-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Aggressive bounce */
@keyframes bounce-hard {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-8px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-4px); }
}

/* Wiggle/rotate */
@keyframes wiggle {
  0%, 100% { transform: rotate(-12deg); }
  50% { transform: rotate(-8deg); }
}

/* Fast shake */
@keyframes shake-hard {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

/* Slow spin */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### Usage

```tsx
// Snap-in entry
<div className="animate-snap-in" />

// Bouncing CTA
<Button className="animate-bounce-hard">Call to Action</Button>

// Wiggle badge
<Badge className="animate-wiggle">New</Badge>

// Slow spinning decoration
<div className="animate-spin-slow" />

// Stagger delays
<div className="animate-snap-in delay-100" />
<div className="animate-snap-in delay-200" />
<div className="animate-snap-in delay-300" />
```

### Press Effect

```css
.bauhaus-press-effect:active {
  transform: translateX(2px) translateY(2px);
  box-shadow: none !important;
}
```

---

## 9. Section Patterns

### Standard Section Structure

```tsx
<section className="bg-background py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
  {/* Bauhaus geometric decorations (3-4 per section) */}
  <div className="absolute top-20 right-10 w-40 h-40 border-8 border-primary opacity-20 rounded-full bauhaus-rotated-45 pointer-events-none" />
  <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary opacity-15 pointer-events-none" />
  <div className="absolute top-1/2 left-10 w-24 h-24 border-4 border-black opacity-10 bauhaus-rotated-neg-45 pointer-events-none" />

  {/* Pattern overlay (ONE per section) */}
  <div className="absolute inset-0 opacity-5 pointer-events-none bauhaus-grid-lines text-black" />

  <div className="mx-auto max-w-7xl px-6 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <Badge variant="stamp" className="bg-primary text-primary-foreground border-4 border-black">
        Section Label
      </Badge>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tight text-black mt-8">
        SECTION
        <br />
        <span className="bg-primary text-primary-foreground px-4 py-2 -ml-2 inline-block border-4 border-black">HEADLINE</span>
      </h2>
    </div>

    {/* Section Content */}
    {/* ... */}
  </div>
</section>
```

### Every 3rd Element Pattern

```tsx
{items.map((item, index) => (
  <Card key={index} className={(index + 1) % 3 === 0 ? 'relative' : ''}>
    {/* Geometric accent on every 3rd card */}
    {(index + 1) % 3 === 0 && (
      <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45" />
    )}

    <CardContent>
      {/* Alternate shapes */}
      <div className={index % 2 === 0 ? 'rounded-none' : 'rounded-full'}>
        {/* Icon */}
      </div>
    </CardContent>
  </Card>
))}
```

### Color Blocking Pattern

Alternate section backgrounds:

```tsx
// Section 1: bg-primary
// Section 2: bg-background
// Section 3: bg-secondary
// Section 4: bg-muted
// Section 5: bg-accent
// Repeat...
```

---

## 10. Accessibility

### Contrast Ratios

All color combinations meet **WCAG AA** (4.5:1) or **WCAG AAA** (7:1):

| Foreground | Background | Ratio | Grade |
|------------|------------|-------|-------|
| Primary FG | Primary BG | 8.5:1 | AAA |
| Accent FG | Accent BG | 5.2:1 | AA |
| Foreground | Background | 7.8:1 | AAA |
| Foreground | Muted | 6.1:1 | AA |

### Focus States

```tsx
// All interactive elements have focus states
<Button className="outline-none focus:ring-4 focus:ring-black/20" />
<Input className="focus:ring-4 focus:ring-black/20" />
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Alt text on all images
- Proper button/link semantics

---

## 11. Responsive Design

### Border Scaling

```tsx
// Mobile: 2px borders
// Desktop: 4px borders
className="border-2 sm:border-4"
```

### Typography Scaling

```tsx
// Mobile → Tablet → Desktop
text-5xl md:text-6xl lg:text-7xl
```

### Spacing Scale

```tsx
// Section padding
py-24 lg:py-32

// Container padding
px-6

// Grid gaps
gap-6 lg:gap-8
```

---

## 12. File Structure

```
PeopleX/
├── app/
│   ├── layout.tsx           # Font configuration
│   ├── globals.css          # Design tokens & utilities
│   └── page.tsx             # Main page composition
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   └── accordion.tsx
│   ├── header.tsx           # Navigation
│   ├── footer.tsx           # Site footer
│   └── *-section.tsx        # Page sections (17 files)
└── lib/
    └── utils.ts             # cn() utility
```

---

## 13. Design Tokens Reference

### Color Tokens

```css
/* Semantic Colors */
--color-background
--color-foreground
--color-primary
--color-primary-foreground
--color-secondary
--color-secondary-foreground
--color-accent
--color-accent-foreground
--color-muted
--color-muted-foreground
--color-border
--color-ring
```

### Shadow Tokens

```css
--shadow-brutal-sm      /* 2px */
--shadow-brutal         /* 4px */
--shadow-brutal-lg      /* 6px */
--shadow-brutal-xl      /* 8px */
--shadow-brutal-2xl     /* 12px */
```

### Radius Tokens

```css
--radius-none    /* 0px */
--radius-full    /* 9999px */
```

---

## 14. Common Patterns

### Hero Section

```tsx
<section className="relative min-h-screen overflow-hidden pt-20 bg-primary border-b-4 border-black">
  {/* 6+ geometric decorations */}
  {/* Dot grid pattern */}
  {/* Large headline with color blocking */}
  {/* Stat cards with alternate shapes */}
</section>
```

### Grid of Cards

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {items.map((item, index) => (
    <Card key={index} className="border-4 border-black shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg">
      {/* Every 3rd gets geometric accent */}
      {(index + 1) % 3 === 0 && <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent border-2 border-black bauhaus-rotated-45" />}
      {/* Alternate icon shapes */}
      <div className={index % 2 === 0 ? 'rounded-none' : 'rounded-full'} />
    </Card>
  ))}
</div>
```

### CTA Section

```tsx
<section className="bg-accent py-24 lg:py-32 border-t-4 border-b-4 border-black relative overflow-hidden">
  {/* 2-3 geometric decorations */}
  {/* Diagonal stripe pattern */}
  <div className="text-center">
    <Button variant="bauhaus" size="xl">
      Call to Action
    </Button>
  </div>
</section>
```

---

## 15. Best Practices

### DO

- Use `font-black` for headlines and emphasis
- Apply `border-4 border-black` to cards and buttons
- Use hard shadows (`shadow-brutal` variants)
- Add 3-4 geometric decorations per section
- Use color blocking with existing palette
- Alternate shapes with `(index + 1) % 3 === 0`
- Make elements tactile with hover/press states

### DON'T

- Use intermediate border radius values
- Use soft/blur shadows
- Add gradients to solid colors
- Over-decorate (max 4 decorations per section)
- Mix color schemes (stick to Blue Harmony palette)
- Use thin borders (< 2px)
- Forget reduced motion support

---

## 16. Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (including OKLCH)
- **Mobile**: Full responsive support

**OKLCH Support**: All modern browsers (Chrome 111+, Safari 15.4+, Firefox 113+)

---

## 17. Changelog

### Version 1.0 (Bauhaus Integration)

**Added:**
- Outfit font (weights 300-900)
- Bauhaus hard shadow system
- Geometric pattern utilities
- Bauhaus button/card/badge variants
- Mechanical animations
- Every 3rd element pattern
- Binary radius system
- Thick border system (2px/4px)

**Changed:**
- All sections to Bauhaus aesthetic
- Color blocking implementation
- Typography to font-black headlines
- Hover effects to mechanical motion

**Preserved:**
- Blue Harmony OKLCH color palette
- All semantic color tokens
- Accessibility standards
- Responsive breakpoints

---

## 18. Resources

### Internal Files

- `app/globals.css` - Design tokens and utilities
- `app/layout.tsx` - Font configuration
- `components/ui/` - Component implementations
- `components/*-section.tsx` - Section examples

### External References

- [Bauhaus Design Principles](https://www.bauhaus-dessau.de/)
- [OKLCH Color Picker](https://oklch.com/)
- [Outfit Font](https://fonts.google.com/specimen/Outfit)
- [Neo-Brutalism Design](https://brutalweb.design/)

---

*Design System v1.0 | Bauhaus + Blue Harmony | Last Updated: 2025*
