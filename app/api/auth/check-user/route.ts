import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    console.log('=== Checking User in Database ===')
    console.log('Email:', email)
    
    // Test connection
    try {
      await prisma.$connect()
      console.log('✅ Database connected')
    } catch (connError: any) {
      console.error('❌ Connection error:', connError.message)
      return NextResponse.json(
        { error: 'Database connection failed', message: connError.message },
        { status: 500 }
      )
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
        createdAt: true,
      },
    })

    if (!user) {
      console.log('❌ User not found')
      return NextResponse.json({
        found: false,
        message: 'User not found in database',
      })
    }

    console.log('✅ User found:', {
      id: user.id,
      email: user.email,
      name: user.name,
      hasPassword: !!user.password,
      passwordLength: user.password?.length || 0,
      passwordStartsWith: user.password?.substring(0, 10) || 'none',
      isHashed: user.password?.startsWith('$2') || false,
    })

    return NextResponse.json({
      found: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        hasPassword: !!user.password,
        passwordLength: user.password?.length || 0,
        isHashed: user.password?.startsWith('$2') || false,
        createdAt: user.createdAt,
      },
    })
  } catch (error: any) {
    console.error('❌ Error checking user:', error)
    return NextResponse.json(
      {
        error: 'Failed to check user',
        message: error.message,
      },
      { status: 500 }
    )
  }
}

