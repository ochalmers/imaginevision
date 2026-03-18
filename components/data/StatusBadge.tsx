import { Badge } from '@/components/common/Badge'
import { cn } from '@/lib/utils'

type StatusVariant = 'default' | 'success' | 'warning' | 'error' | 'outline'

const statusMap: Record<string, StatusVariant> = {
  active: 'success',
  completed: 'success',
  pending: 'warning',
  failed: 'error',
  draft: 'default',
  published: 'success',
  archived: 'outline',
}

interface StatusBadgeProps {
  status: string
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variant = statusMap[status.toLowerCase()] ?? 'default'
  const label = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
  return <Badge variant={variant} className={cn(className)}>{label}</Badge>
}
