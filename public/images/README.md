# Logo Images

This directory contains the AdsGenius AI logo files. Please replace the placeholder files with your actual logo images.

## Required Logo Files

### 1. `logo-full.png`
**Full Logo** - Use for navigation bar and main branding
- Icon on left (dark grey background with orange/yellow gradient brain/circuit design)
- "AdsGenius AI" text on right
- "AdsGenius" in dark grey, "AI" in orange/yellow gradient
- Recommended size: 200x60px (or proportional)
- Format: PNG with transparent background

### 2. `logo-icon.png`
**Icon Only** - Use for favicon, app icons, and small spaces
- Orange/yellow gradient brain/circuit symbol
- Dark charcoal/black rounded square background
- Long shadow effect
- Recommended sizes:
  - 32x32px (favicon)
  - 180x180px (Apple touch icon)
  - 512x512px (app icon)
- Format: PNG with transparent or solid background

### 3. `logo-circle.png`
**Circle Variant** - Use for social media, profile images, and circular contexts
- Orange gradient circle background
- White brain/circuit symbol inside
- "AI" text in orange gradient (optional, can be icon-only)
- Recommended size: 512x512px (square)
- Format: PNG with transparent background

## Usage in Components

The logos are used in:
- **Navigation** (`components/Navigation.tsx`) - Full logo
- **Footer** (`components/Footer.tsx`) - Full logo (inverted for dark background)
- **Homepage** (`app/page.tsx`) - Full logo in hero section
- **Favicon** (`app/layout.tsx`) - Icon logo
- **Logo Component** (`components/Logo.tsx`) - Reusable component for all variants

## How to Add Your Images

1. Replace the placeholder files in this directory with your actual logo images
2. Ensure filenames match exactly: `logo-full.png`, `logo-icon.png`, `logo-circle.png`
3. Optimize images for web (use tools like TinyPNG or ImageOptim)
4. Test that logos display correctly in all locations

## Logo Component Usage

```tsx
import Logo from '@/components/Logo'

// Full logo (default)
<Logo variant="full" size="md" />

// Icon only
<Logo variant="icon" size="sm" />

// Circle variant
<Logo variant="circle" size="lg" />

// Sizes: 'sm' | 'md' | 'lg'
// Variants: 'full' | 'icon' | 'circle'
```

