/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './content/**/*.{md,js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 1.5s linear infinite',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      screens: {
        '3xl': '2000px',
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      colors: {
        primary: {
          50: '#f5f0ff',
          100: '#ede4ff',
          200: '#dccdff',
          300: '#c4a5ff',
          400: '#aa72ff',
          500: '#933aff',
          600: '#8b12ff',
          700: '#7f01ff',
          800: '#6b00d7',
          900: '#47028d',
        },
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
