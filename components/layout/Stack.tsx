import { cn } from '@/lib/utils'

type StackSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

const spacingMap: Record<StackSpacing, string> = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-8',
  8: 'gap-12',
}

interface StackProps {
  children: React.ReactNode
  gap?: StackSpacing
  className?: string
}

export function Stack({ children, gap = 4, className }: StackProps) {
  return (
    <div className={cn('flex flex-col', spacingMap[gap], className)}>
      {children}
    </div>
  )
}
