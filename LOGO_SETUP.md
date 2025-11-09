# Logo Setup Instructions

## Adding Your Logo Images

I've set up the project to use your AdsGenius AI logos. You need to add the actual image files to complete the setup.

### Step 1: Add Logo Files

Place your 3 logo images in the `public/images/` directory:

1. **`logo-full.png`** - Full logo with icon + "AdsGenius AI" text
   - Use for: Navigation bar, homepage hero, footer
   - Recommended: 200x60px or larger (maintain aspect ratio)

2. **`logo-icon.png`** - Icon only (brain/circuit symbol on dark background)
   - Use for: Favicon, app icons, small spaces
   - Recommended: 512x512px (square)

3. **`logo-circle.png`** - Circle variant (orange circle with white brain symbol)
   - Use for: Social media, profile images, circular contexts
   - Recommended: 512x512px (square)

### Step 2: Verify File Names

Make sure your files are named exactly:
- `public/images/logo-full.png`
- `public/images/logo-icon.png`
- `public/images/logo-circle.png`

### Step 3: Test the Logos

After adding the images, the logos will automatically appear in:

✅ **Navigation Bar** - Full logo (top left)
✅ **Homepage** - Full logo in hero section
✅ **Footer** - Full logo (inverted for dark background)
✅ **Browser Tab** - Icon logo as favicon
✅ **Mobile/App Icons** - Icon logo for Apple touch icon

## Logo Usage in Code

The logos are implemented using a reusable `Logo` component:

```tsx
import Logo from '@/components/Logo'

// Full logo (default)
<Logo variant="full" size="md" />

// Icon only
<Logo variant="icon" size="sm" />

// Circle variant  
<Logo variant="circle" size="lg" />
```

**Sizes:** `sm` | `md` | `lg`
**Variants:** `full` | `icon` | `circle`

## Current Logo Locations

- **Navigation** (`components/Navigation.tsx`) - Full logo, medium size
- **Footer** (`components/Footer.tsx`) - Full logo, small size, inverted
- **Homepage** (`app/page.tsx`) - Full logo, large size
- **Favicon** (`app/layout.tsx`) - Icon logo
- **Metadata** (`app/layout.tsx`) - Full logo for Open Graph

## Troubleshooting

If logos don't appear:

1. ✅ Check file names match exactly
2. ✅ Verify files are in `public/images/` directory
3. ✅ Ensure images are PNG format
4. ✅ Check browser console for 404 errors
5. ✅ Clear browser cache and reload

## Image Optimization

For best performance, optimize your images:

- Use PNG format with transparency where needed
- Compress images (TinyPNG, ImageOptim, or similar)
- Keep file sizes under 100KB when possible
- Use appropriate dimensions (don't use 2000px images for 200px displays)

The Next.js Image component will automatically optimize images, but starting with optimized files is always better.

