/**
 * Design system — Typography scale
 * Strong hierarchy. Use Tailwind classes that map to these tokens.
 */

export const typography = {
  pageTitle: {
    fontSize: '2rem',      // 32px
    lineHeight: '2.5rem',  // 40px
    fontWeight: 600,
    letterSpacing: '-0.025em',
  },
  sectionTitle: {
    fontSize: '1.5rem',    // 24px
    lineHeight: '2rem',    // 32px
    fontWeight: 600,
    letterSpacing: '-0.025em',
  },
  subheading: {
    fontSize: '1.125rem',  // 18px
    lineHeight: '1.75rem', // 28px
    fontWeight: 500,
  },
  body: {
    fontSize: '0.875rem',  // 14px
    lineHeight: '1.25rem', // 20px
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.75rem',   // 12px
    lineHeight: '1rem',    // 16px
    fontWeight: 400,
  },
  label: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 500,
  },
} as const

/** Tailwind utility classes for typography */
export const typographyClasses = {
  pageTitle: 'text-2xl font-semibold tracking-tight leading-10',
  sectionTitle: 'text-xl font-semibold tracking-tight leading-8',
  subheading: 'text-lg font-medium leading-7',
  body: 'text-sm leading-5',
  caption: 'text-xs leading-4',
  label: 'text-xs font-medium leading-4',
} as const
