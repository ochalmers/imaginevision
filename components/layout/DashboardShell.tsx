'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  FileText,
  Image,
  Plug,
  Coins,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { AppShell } from './AppShell'
import { PageHeader } from './PageHeader'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/requests', label: 'Requests', icon: FileText },
  { href: '/dashboard/assets', label: 'Assets', icon: Image },
  { href: '/dashboard/integrations', label: 'Integrations', icon: Plug },
  { href: '/dashboard/credits', label: 'Credits', icon: Coins },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

interface DashboardShellProps {
  title?: string
  description?: string
  actions?: React.ReactNode
  children: React.ReactNode
}

export function DashboardShell({
  title,
  description,
  actions,
  children,
}: DashboardShellProps) {
  const pathname = usePathname()

  const sidebar = (
    <div className="flex h-full flex-col gap-1 p-4">
      <Link
        href="/dashboard"
        className="mb-4 px-2 text-lg font-semibold tracking-tight text-neutral-900"
      >
        App
      </Link>
      <nav className="flex flex-1 flex-col gap-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href))
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )

  const topbar =
    title != null ? (
      <div className="flex w-full items-center justify-between gap-4">
        <PageHeader title={title} description={description}>
          {actions}
        </PageHeader>
      </div>
    ) : null

  return (
    <AppShell sidebar={sidebar} topbar={topbar}>
      <div className="p-6">{children}</div>
    </AppShell>
  )
}
