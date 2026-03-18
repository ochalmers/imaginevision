import { cn } from '@/lib/utils'

interface SectionProps {
  title?: string
  subcopy?: string
  children: React.ReactNode
  className?: string
  actions?: React.ReactNode
}

export function Section({ title, subcopy, children, className, actions }: SectionProps) {
  return (
    <section className={cn('flex flex-col gap-6', className)}>
      {(title || subcopy || actions) && (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {title && (
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900">
                {title}
              </h2>
            )}
            {subcopy && (
              <p className="mt-0.5 text-sm text-neutral-500">{subcopy}</p>
            )}
          </div>
          {actions}
        </div>
      )}
      {children}
    </section>
  )
}
