import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between', className)}>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          {title}
        </h1>
        {description && (
          <p className="mt-0.5 text-sm text-neutral-500">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}
