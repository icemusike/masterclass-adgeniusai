# Authentication Setup Guide

This guide explains how to set up authentication for the AdGenius AI Masterclass platform.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgres://bd5e034e68299285b850936a88536aa02b86eedc6400bb6b9ad1791aac349dbb:sk_AxgNz_E2wm3DlkwxSEvgg@db.prisma.io:5432/postgres?sslmode=require"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-generate-a-random-string"
```

**Important:** The code now has a fallback connection string, so even if `DATABASE_URL` is not set in `.env`, it will still connect to the database. However, it's recommended to set it in `.env` for proper configuration.

### Generating NEXTAUTH_SECRET

You can generate a secure secret key using:

```bash
openssl rand -base64 32
```

Or use an online generator. Make sure to keep this secret secure and never commit it to version control.

## Features Implemented

✅ User Registration Page (`/register`)
- Full name, email, and password fields
- Password confirmation
- Validation and error handling
- Connects to existing Prisma database

✅ User Login Page (`/login`)
- Email and password authentication
- Success message after registration
- Error handling for invalid credentials
- Connects to existing Prisma database

✅ NextAuth.js Integration
- JWT-based session management
- Secure password hashing with bcryptjs
- Session persistence across page reloads

✅ Navigation Updates
- Shows "Sign in" button when not authenticated
- Shows user name and "Sign out" button when authenticated
- Responsive design

## Database Schema

The authentication uses the existing `User` model from your Prisma database:

- `id`: Unique identifier
- `email`: Unique email address
- `name`: User's full name
- `password`: Hashed password (bcrypt)
- `createdAt`: Account creation timestamp
- `updatedAt`: Last update timestamp

## Usage

1. **Registration**: Users can create new accounts at `/register`
2. **Login**: Existing users can sign in at `/login`
3. **Session**: Once logged in, users remain authenticated across page reloads
4. **Logout**: Users can sign out using the button in the navigation

## API Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoint
- `GET /api/auth/session` - Get current session (handled by NextAuth)

## Security Features

- Passwords are hashed using bcryptjs (10 rounds)
- Passwords must be at least 6 characters
- Email validation
- Session tokens are stored securely in HTTP-only cookies
- CSRF protection via NextAuth.js

## Testing

To test the authentication:

1. Start the development server: `npm run dev`
2. Navigate to `/register` to create a new account
3. Navigate to `/login` to sign in with existing credentials
4. Check the navigation bar to see authentication status

## Notes

- The database connection uses the provided Prisma connection string
- All existing users in the database can log in with their credentials
- New registrations are added to the existing User table
- Console logs are included for debugging (as per user preference)

