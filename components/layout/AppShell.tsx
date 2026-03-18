import { cn } from '@/lib/utils'

interface AppShellProps {
  sidebar: React.ReactNode
  topbar?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function AppShell({ sidebar, topbar, children, className }: AppShellProps) {
  return (
    <div className={cn('flex h-screen flex-col overflow-hidden bg-neutral-50', className)}>
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[240px] shrink-0 border-r border-neutral-200 bg-white md:block">
          {sidebar}
        </aside>
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {topbar && (
            <header className="flex h-14 shrink-0 items-center border-b border-neutral-200 bg-white px-4">
              {topbar}
            </header>
          )}
          <div className="min-h-0 flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
