import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Missing credentials')
          return null
        }

        try {
          console.log('🔍 Attempting to authenticate user:', credentials.email)
          
          // Test database connection first
          try {
            await prisma.$connect()
            console.log('✅ Database connection successful')
          } catch (connError: any) {
            console.error('❌ Database connection failed:', connError.message)
            throw new Error(`Database connection failed: ${connError.message}`)
          }

          console.log('🔍 Searching for user in database...')
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            select: {
              id: true,
              email: true,
              name: true,
              password: true,
            },
          })

          if (!user) {
            console.log('❌ User not found:', credentials.email)
            return null
          }

          console.log('✅ User found:', { 
            id: user.id, 
            email: user.email, 
            name: user.name,
            hasPassword: !!user.password,
            passwordLength: user.password?.length || 0
          })

          if (!user.password) {
            console.log('❌ User has no password set')
            return null
          }

          // Check if password is already hashed (bcrypt hashes start with $2a$, $2b$, or $2y$)
          const isHashed = user.password.startsWith('$2')
          console.log('🔐 Password is hashed:', isHashed)

          let isPasswordValid = false
          
          if (isHashed) {
            // Password is hashed, use bcrypt compare
            isPasswordValid = await bcrypt.compare(
              credentials.password,
              user.password
            )
            console.log('🔐 Bcrypt password comparison result:', isPasswordValid)
          } else {
            // Password might be plain text (for testing or legacy users)
            isPasswordValid = credentials.password === user.password
            console.log('🔐 Plain text password comparison result:', isPasswordValid)
            console.log('⚠️  WARNING: Using plain text password comparison - user should update password')
          }

          if (!isPasswordValid) {
            console.log('❌ Invalid password for user:', credentials.email)
            return null
          }

          console.log('✅ Authentication successful for user:', user.email)
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          }
        } catch (error: any) {
          console.error('❌ Authentication error:', error)
          console.error('Error details:', {
            message: error.message,
            code: error.code,
            name: error.name,
            stack: error.stack?.substring(0, 200)
          })
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

