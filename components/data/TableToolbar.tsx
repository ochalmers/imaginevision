import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/common/Button'
import { Search } from 'lucide-react'

interface TableToolbarProps {
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  filters?: React.ReactNode
  primaryAction?: React.ReactNode
  className?: string
}

export function TableToolbar({
  searchPlaceholder = 'Search...',
  searchValue = '',
  onSearchChange,
  filters,
  primaryAction,
  className,
}: TableToolbarProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <Input
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="pl-9"
          />
        </div>
        {filters}
      </div>
      {primaryAction && <div className="shrink-0">{primaryAction}</div>}
    </div>
  )
}
