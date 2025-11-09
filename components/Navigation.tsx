'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { BookOpen, Home, Award, Users, HelpCircle, LogIn, LogOut, User, Star, MessageCircle } from 'lucide-react'
import Logo from './Logo'

export default function Navigation() {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  const navItems = [
    { href: '/', label: 'Dashboard', icon: Home },
    { href: '/modules', label: 'All Modules', icon: BookOpen },
    { href: '/community', label: 'Community', icon: Users },
    { href: '/support', label: 'Support', icon: HelpCircle },
  ]

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
    console.log('User signed out')
  }

  return (
    <nav className="bg-white shadow-md border-b border-primary-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo variant="full" size="md" showText={false} />

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium shadow-sm'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            {status === 'authenticated' ? (
              <>
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{session.user?.name || session.user?.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden md:inline">Sign out</span>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden md:inline">Sign in</span>
              </Link>
            )}
            <button className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

