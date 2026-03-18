/**
 * Design system — Spacing scale (8px grid)
 * Use these tokens for padding, margin, gap.
 */

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
  8: 64,
  9: 96,
} as const

export const spacingPx = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '96px',
} as const

/** Tailwind class map for spacing (e.g. p-4, m-2, gap-6) */
export const spacingClasses = {
  p: Object.fromEntries(Object.entries(spacingPx).map(([k, v]) => [k, `p-[${v}]`])),
  px: Object.fromEntries(Object.entries(spacingPx).map(([k, v]) => [k, `px-[${v}]`])),
  py: Object.fromEntries(Object.entries(spacingPx).map(([k, v]) => [k, `py-[${v}]`])),
  gap: Object.fromEntries(Object.entries(spacingPx).map(([k, v]) => [k, `gap-[${v}]`])),
} as const
