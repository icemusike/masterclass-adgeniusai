# AdGenius AI Course Platform - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Logo Images** (Required)
   - Place your 3 logo images in `public/images/`:
     - `logo-full.png` - Full logo with text
     - `logo-icon.png` - Icon only (for favicon)
     - `logo-circle.png` - Circle variant
   - See `LOGO_SETUP.md` for detailed instructions

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage/Dashboard
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── module/[id]/       # Individual module pages
│   ├── lesson/[id]/       # Individual lesson pages
│   ├── bonus/[id]/        # Bonus module pages
│   ├── modules/           # All modules listing
│   ├── resources/         # Resources & downloads
│   ├── community/         # Community page
│   └── support/           # Support & FAQ
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── ProgressTracker.tsx
│   ├── QuickStartCard.tsx
│   └── VideoPlayer.tsx
├── data/                  # Course data
│   └── courseData.ts     # All course content structure
└── public/               # Static assets
```

## Customization

### Adding Video URLs

Edit `data/courseData.ts` and add `videoUrl` to lesson objects:

```typescript
{
  id: '1-1',
  title: 'Platform Walkthrough',
  duration: '15 min',
  description: 'Dashboard navigation and understanding AI models',
  videoUrl: 'https://your-video-host.com/video-id', // Add here
}
```

### Adding Resources

Add resource URLs to lessons in `data/courseData.ts`:

```typescript
{
  id: '1-1',
  // ... other fields
  resources: [
    '/downloads/template-1.pdf',
    '/downloads/template-2.docx',
  ],
}
```

### Styling

- Main styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Color scheme: Primary blue (#0ea5e9) - customize in `tailwind.config.js`

### Adding Authentication

To add user authentication:

1. Install NextAuth.js:
   ```bash
   npm install next-auth
   ```

2. Create `app/api/auth/[...nextauth]/route.ts`

3. Add authentication checks to protected routes

### Adding Progress Tracking

To implement real progress tracking:

1. Set up a database (PostgreSQL, MongoDB, etc.)
2. Create API routes in `app/api/progress/`
3. Update `ProgressTracker` component to fetch real data
4. Add progress updates when lessons are completed

### Deploying

**Vercel (Recommended):**
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

**Other Platforms:**
```bash
npm run build
npm start
```

## Features Implemented

✅ Complete course structure (8 modules + 3 bonus)
✅ Progress tracking UI
✅ Video player component
✅ Module and lesson pages
✅ Resources/downloads section
✅ Community and support pages
✅ Responsive design
✅ Navigation and footer
✅ Quick-start 7-day path

## Next Steps

1. **Add Real Video URLs**: Replace placeholder video URLs with actual hosted videos
2. **Add Authentication**: Implement user login/signup
3. **Add Database**: Set up database for progress tracking
4. **Add Payment**: Integrate payment processing if needed
5. **Add Email**: Set up email service for notifications
6. **Add Analytics**: Track user engagement

## Support

For questions or issues:
- Email: support@adgenius.ai
- Check `/support` page in the app
- Review FAQ section

