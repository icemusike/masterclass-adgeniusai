import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'icon' | 'circle' | 'light'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({ 
  variant = 'full', 
  size = 'md',
  showText = true,
  className = ''
}: LogoProps) {
  const sizeMap = {
    sm: { width: 120, height: 32 },
    md: { width: 180, height: 48 },
    lg: { width: 240, height: 64 }
  }

  const iconSizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 }
  }

  const logoMap = {
    full: '/images/adsgenius_logo_dark.png',
    light: '/images/adsgenius_logo_light.png',
    icon: '/images/icon.png',
    circle: '/images/icon.png' // Using icon for circle variant
  }

  const dimensions = variant === 'full' || variant === 'light'
    ? sizeMap[size] 
    : iconSizeMap[size]

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src={logoMap[variant]}
        alt="AdsGenius AI Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-auto object-contain"
        style={{ 
          height: variant === 'full' || variant === 'light'
            ? `${size === 'sm' ? '32px' : size === 'md' ? '48px' : '64px'}` 
            : `${size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px'}`,
          width: 'auto'
        }}
        priority
      />
      {showText && variant === 'full' && (
        <span className="sr-only">AdsGenius AI</span>
      )}
    </Link>
  )
}

