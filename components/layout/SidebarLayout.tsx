import { cn } from '@/lib/utils'

interface SidebarLayoutProps {
  sidebar: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function SidebarLayout({ sidebar, children, className }: SidebarLayoutProps) {
  return (
    <div className={cn('flex min-h-0 flex-1', className)}>
      <aside className="hidden w-60 shrink-0 border-r border-neutral-200 bg-white lg:block">
        {sidebar}
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
