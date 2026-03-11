import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#EC4E0B',
          dark: '#D44509',
          subtle: 'rgba(236, 78, 11, 0.12)',
        },
        canvas: '#0E0E0E',
        raised: '#141414',
        surface: {
          DEFAULT: '#1C1C1C',
          alt: '#242424',
          border: '#2E2E2E',
        },
        ink: '#F2F2F0',
        ash: '#8A8A88',
        smoke: '#5A5A58',
        wire: '#2E2E2E',
        'code-bg': '#181818',
        'code-text': '#D4D4D4',
      },
      fontFamily: {
        sans: ['var(--font-pp)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Cousine', 'Fira Code', 'Cascadia Code', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: '0.6875rem',    // 11px
        sm: '0.8125rem',    // 13px
        base: '0.9375rem',  // 15px
        md: '1.0625rem',    // 17px
        lg: '1.25rem',      // 20px
        xl: '1.5rem',       // 24px
        '2xl': '2rem',      // 32px
        '3xl': '2.75rem',   // 44px
        '4xl': '3.5rem',    // 56px
        '5xl': '4.5rem',    // 72px
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.08em',
        widest: '0.14em',
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.25',
        normal: '1.5',
        relaxed: '1.7',
      },
      maxWidth: {
        content: '1200px',
        prose: '960px',
        narrow: '720px',
        slim: '560px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '96px',
        '9': '128px',
        '10': '192px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.4)',
        md: '0 4px 16px rgba(0,0,0,0.3)',
        lg: '0 8px 32px rgba(0,0,0,0.25)',
        accent: '0 4px 20px rgba(236,78,11,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
