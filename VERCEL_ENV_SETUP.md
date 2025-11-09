# Vercel Environment Variables Setup - CRITICAL

## ⚠️ Server Error Fix

If you're getting a server error on login, it's because **NEXTAUTH_SECRET** is not properly set in Vercel.

## Required Environment Variables

Go to your Vercel dashboard:
1. Project → Settings → Environment Variables

Add these 3 variables:

### 1. DATABASE_URL
```
prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19tR25uS3hzOTRVbWJWbGlrSDVtSE8iLCJhcGlfa2V5IjoiMDFLOU44VkMxNVpNNFhONlBQMllOQUFSWkIiLCJ0ZW5hbnRfaWQiOiJiZDVlMDM0ZTY4Mjk5Mjg1Yjg1MDkzNmE4ODUzNmFhMDJiODZlZWRjNjQwMGJiNmI5YWQxNzkxYWFjMzQ5ZGJiIiwiaW50ZXJuYWxfc2VjcmV0IjoiNGZmYjI4ZTEtNTRhZC00NDIzLTk2OTMtODA0YmU4YWFjN2M2In0.mMSDGsnVZWLLZ18u2p-iMro72uMrRaq5tY6sSbLDnbg
```

### 2. NEXTAUTH_URL (CRITICAL)
```
https://masterclass.adgeniusai.io
```
⚠️ **Must be your exact Vercel URL** (without trailing slash)

### 3. NEXTAUTH_SECRET (CRITICAL)
Generate a secure secret:

**Option A - Using OpenSSL:**
```bash
openssl rand -base64 32
```

**Option B - Using Node:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Option C - Online Generator:**
https://generate-secret.vercel.app/32

Copy the generated value and paste it in Vercel.

Example result: `Xj5k8mN9pQ2wR7sT1vU3xY4zA6bC8dE0fG2hI4jK6lM=`

## How to Add in Vercel

1. Go to: https://vercel.com/your-username/masterclass-adgeniusai/settings/environment-variables
2. Click "Add New"
3. For each variable:
   - Name: `DATABASE_URL` / `NEXTAUTH_URL` / `NEXTAUTH_SECRET`
   - Value: (paste the value)
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"

## After Adding Variables

1. Go to: Deployments tab
2. Find the latest deployment
3. Click the ⋯ menu
4. Click "Redeploy"
5. Wait for deployment to complete

## Verify It's Working

After redeployment:
1. Visit: https://masterclass.adgeniusai.io/login
2. Try logging in with: `isfanbogdan@gmail.com`
3. Should redirect to dashboard successfully
4. Check Vercel logs (Runtime Logs) for any errors

## Common Issues

### "Server error" on login
- ❌ `NEXTAUTH_SECRET` not set → Set it in Vercel
- ❌ `NEXTAUTH_URL` incorrect → Must match your domain exactly
- ❌ Secret too short → Must be at least 32 characters

### Database connection fails
- ❌ `DATABASE_URL` not set → Already has fallback in code, but set it anyway
- ✅ Prisma Accelerate should work globally

## Quick Fix Checklist

- [ ] Generate `NEXTAUTH_SECRET` using openssl
- [ ] Add `NEXTAUTH_SECRET` to Vercel (all environments)
- [ ] Set `NEXTAUTH_URL` to `https://masterclass.adgeniusai.io`
- [ ] Add `DATABASE_URL` (optional, has fallback)
- [ ] Redeploy from Vercel dashboard
- [ ] Test login again

## Debug Logs

The app now has enhanced logging. Check Vercel Runtime Logs for:
- Authentication attempts
- Database connection status
- Error details

Go to: Deployments → Latest → Runtime Logs

