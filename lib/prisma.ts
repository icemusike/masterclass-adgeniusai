import { PrismaClient } from './prisma/client'

// IMPORTANT: Using Prisma Accelerate connection string
// This provides connection pooling and caching for better performance
const accelerateUrl = 'prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19tR25uS3hzOTRVbWJWbGlrSDVtSE8iLCJhcGlfa2V5IjoiMDFLOU44VkMxNVpNNFhONlBQMllOQUFSWkIiLCJ0ZW5hbnRfaWQiOiJiZDVlMDM0ZTY4Mjk5Mjg1Yjg1MDkzNmE4ODUzNmFhMDJiODZlZWRjNjQwMGJiNmI5YWQxNzkxYWFjMzQ5ZGJiIiwiaW50ZXJuYWxfc2VjcmV0IjoiNGZmYjI4ZTEtNTRhZC00NDIzLTk2OTMtODA0YmU4YWFjN2M2In0.mMSDGsnVZWLLZ18u2p-iMro72uMrRaq5tY6sSbLDnbg'

// Force set the environment variable to use Accelerate
process.env.DATABASE_URL = accelerateUrl

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Use the Accelerate connection string
const databaseUrl = accelerateUrl

// Log connection info (without sensitive data)
console.log('=== Prisma Connection Debug ===')
console.log('DATABASE_URL is set to:', process.env.DATABASE_URL ? 'YES' : 'NO')
console.log('Using Prisma Accelerate:', databaseUrl.includes('accelerate.prisma-data.net'))
console.log('Connection type:', databaseUrl.startsWith('prisma+postgres') ? 'Prisma Accelerate' : 'Direct')
console.log('Connection string starts with:', databaseUrl.substring(0, 50))
console.log('===============================')

// Create Prisma Client with explicit connection string
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
  log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

