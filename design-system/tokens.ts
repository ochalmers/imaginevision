/**
 * Design system — Central token export
 * Single source of truth for the UI system.
 */

export { colors } from './colors'
export { spacing, spacingPx, spacingClasses } from './spacing'
export { typography, typographyClasses } from './typography'
export { radius, radiusClasses } from './radius'
export { shadows } from './shadows'

// Re-export for convenience
export const tokens = {
  containerMaxWidth: '1200px',
  sidebarWidth: '240px',
  topbarHeight: '56px',
} as const
