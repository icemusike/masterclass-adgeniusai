# Vercel Deployment Guide

## ✅ Code Pushed to GitHub

Repository: https://github.com/icemusike/masterclass-adgeniusai

## Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New Project"**
4. **Import** `icemusike/masterclass-adgeniusai`
5. **Configure Environment Variables** (IMPORTANT):
   
   Add these environment variables in Vercel:
   ```
   DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19tR25uS3hzOTRVbWJWbGlrSDVtSE8iLCJhcGlfa2V5IjoiMDFLOU44VkMxNVpNNFhONlBQMllOQUFSWkIiLCJ0ZW5hbnRfaWQiOiJiZDVlMDM0ZTY4Mjk5Mjg1Yjg1MDkzNmE4ODUzNmFhMDJiODZlZWRjNjQwMGJiNmI5YWQxNzkxYWFjMzQ5ZGJiIiwiaW50ZXJuYWxfc2VjcmV0IjoiNGZmYjI4ZTEtNTRhZC00NDIzLTk2OTMtODA0YmU4YWFjN2M2In0.mMSDGsnVZWLLZ18u2p-iMro72uMrRaq5tY6sSbLDnbg
   
   NEXTAUTH_URL=https://your-domain.vercel.app
   
   NEXTAUTH_SECRET=your-generated-secret-key
   ```

6. **Generate NEXTAUTH_SECRET**:
   - Run: `openssl rand -base64 32`
   - Or use: https://generate-secret.vercel.app/32
   - Copy the generated secret

7. **Click "Deploy"**

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and set environment variables when asked
```

## Important Notes

### Environment Variables
⚠️ **Critical**: You MUST set these environment variables in Vercel:

1. `DATABASE_URL` - Your Prisma Accelerate connection string (already in code as fallback)
2. `NEXTAUTH_URL` - Your Vercel deployment URL (e.g., https://masterclass-adgeniusai.vercel.app)
3. `NEXTAUTH_SECRET` - Generate a secure random string

### After First Deployment

1. **Copy your Vercel URL** (e.g., `https://masterclass-adgeniusai.vercel.app`)
2. **Update NEXTAUTH_URL** in Vercel environment variables to match
3. **Redeploy** if needed (Settings → Environment Variables → Edit → Save → Redeploy)

### Database Connection

The app uses Prisma Accelerate, which works great with Vercel:
- ✅ No connection pooling issues
- ✅ Works in serverless environment
- ✅ Fast global performance

The connection string is hardcoded in `lib/prisma.ts`, so it will work even if environment variables aren't set (though it's recommended to set them properly).

## Testing After Deployment

1. Visit your Vercel URL
2. Test login: `https://your-domain.vercel.app/login`
3. Test with user: `isfanbogdan@gmail.com`
4. Check deployment logs in Vercel dashboard for any errors

## Build Configuration

The app uses:
- **Framework**: Next.js 14
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

Vercel automatically detects these settings for Next.js projects.

## Troubleshooting

### If authentication doesn't work after deployment:
1. Check `NEXTAUTH_URL` matches your actual Vercel URL
2. Verify `NEXTAUTH_SECRET` is set
3. Check deployment logs for errors
4. Verify `DATABASE_URL` is accessible from Vercel

### If database connection fails:
1. Prisma Accelerate should work globally
2. Check deployment logs for connection errors
3. The fallback connection string in code should work regardless

## Custom Domain (Optional)

After deployment:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update `NEXTAUTH_URL` to use your custom domain
4. DNS propagation takes 24-48 hours

## Production Checklist

- [x] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Environment variables set
- [ ] NEXTAUTH_URL updated to production URL
- [ ] Test login functionality
- [ ] Test all pages load correctly
- [ ] Check console for any errors

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Test locally first to ensure everything works

