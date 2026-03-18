import { PageHeader } from '@/components/layout/PageHeader'
import { Card, CardContent } from '@/components/common/Card'
import { EmptyState } from '@/components/common/EmptyState'
import { Plug } from 'lucide-react'

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader title="Integrations" description="Connect external tools and services" />
      <div className="mt-6">
        <Card>
          <CardContent className="p-12">
            <EmptyState
              icon={<Plug className="h-6 w-6" />}
              title="No integrations"
              description="Connect your store, PIM, or other tools."
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
