import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: ['./components/**/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './content/**/*.{md,js,ts}', './nuxt.config.{js,ts}', './app.vue', './app.config.ts'],
  theme: {
    extend: {
      colors: {
        myCustomColor: {
          50: '#fbf8fc',
          100: '#f4eff8',
          200: '#ece2f2',
          300: '#ddcbe7',
          400: '#cdb4db',
          500: '#af88c4',
          600: '#996db0',
          700: '#835898',
          800: '#6e4c7d',
          900: '#5a3e65',
          950: '#3d2447',
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
        'pos-200': '200% 200%',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '2000px',
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      keyFrames: {
        moveUp: {
          '0%': { opacity: 1, transform: 'translateX(0px) translateY(0px) scale(1)' },
          '25%': {
            opacity: 0,
            transform: 'translateX(10px) translateY(-10px) scale(0.9)',
          },
          '26%': {
            opacity: 0,
            transform: 'translateX(-10px) translateY(10px) scale(0.9)',
          },
          '55%': {
            opacity: 1,
            transform: 'translateX(0px) translateY(0px) scale(1)',
          },
        },
      },
      animation: {
        banana: 'moveUp 0.8s linear',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: 'class',
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
