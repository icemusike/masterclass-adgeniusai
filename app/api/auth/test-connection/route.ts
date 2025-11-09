import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    console.log('=== Test Connection Debug ===')
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL)
    console.log('DATABASE_URL starts with:', process.env.DATABASE_URL?.substring(0, 20) || 'NOT SET')
    
    // Test database connection
    console.log('Attempting to connect to database...')
    const userCount = await prisma.user.count()
    
    console.log('Database connection successful!')
    console.log('Total users in database:', userCount)
    
    // Try to fetch a sample user (first user)
    const sampleUser = await prisma.user.findFirst({
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      userCount,
      sampleUser: sampleUser || null,
      databaseUrl: process.env.DATABASE_URL ? 'Set (hidden)' : 'Not set',
      databaseHost: process.env.DATABASE_URL?.includes('db.prisma.io') ? 'db.prisma.io' : 'unknown',
    })
  } catch (error: any) {
    console.error('=== Database Connection Error ===')
    console.error('Error message:', error.message)
    console.error('Error code:', error.code)
    console.error('DATABASE_URL exists:', !!process.env.DATABASE_URL)
    console.error('DATABASE_URL value:', process.env.DATABASE_URL?.substring(0, 30) + '...' || 'NOT SET')
    console.error('================================')
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to connect to database',
        message: error.message,
        errorCode: error.code,
        databaseUrl: process.env.DATABASE_URL ? 'Set (hidden)' : 'Not set',
        databaseHost: process.env.DATABASE_URL?.includes('db.prisma.io') ? 'db.prisma.io' : process.env.DATABASE_URL?.split('@')[1]?.split(':')[0] || 'unknown',
      },
      { status: 500 }
    )
  }
}

