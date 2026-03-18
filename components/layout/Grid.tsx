import { cn } from '@/lib/utils'

interface GridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 2 | 4 | 6
  className?: string
}

const colsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}

const gapMap = {
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
}

export function Grid({ children, cols = 1, gap = 4, className }: GridProps) {
  return (
    <div className={cn('grid', colsMap[cols], gapMap[gap], className)}>
      {children}
    </div>
  )
}
