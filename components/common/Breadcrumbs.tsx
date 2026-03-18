import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1 text-sm', className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  isLast ? 'font-medium text-neutral-900' : 'text-neutral-500'
                )}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
