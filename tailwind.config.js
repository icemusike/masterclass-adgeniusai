/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Orange Colors
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ea580c', // Main brand orange
          600: '#c2410c', // Brand orange dark
          700: '#9a3412',
          800: '#7c2d12',
          900: '#431407',
        },
        // Brand Dark & Light
        brand: {
          orange: '#EA580C',
          'orange-dark': '#C2410C',
          'orange-light': '#FB923C',
          dark: '#111827',
          light: '#F9FAFB',
          gray: '#6B7280',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #EA580C 0%, #DC2626 100%)',
        'gradient-brand': 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
      },
      boxShadow: {
        'brand-orange': '0 8px 32px rgba(234, 88, 12, 0.25)',
        'brand-orange-lg': '0 16px 48px rgba(234, 88, 12, 0.35)',
      },
    },
  },
  plugins: [],
}

