import { PageHeader } from '@/components/layout/PageHeader'
import { Card, CardContent } from '@/components/common/Card'
import { EmptyState } from '@/components/common/EmptyState'
import { Image } from 'lucide-react'

export default function AssetsPage() {
  return (
    <>
      <PageHeader title="Assets" description="Rendered images and exports" />
      <div className="mt-6">
        <Card>
          <CardContent className="p-12">
            <EmptyState
              icon={<Image className="h-6 w-6" />}
              title="No assets yet"
              description="Generated images and exports will appear here."
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
