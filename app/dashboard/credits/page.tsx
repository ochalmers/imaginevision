import { PageHeader } from '@/components/layout/PageHeader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'

export default function CreditsPage() {
  return (
    <>
      <PageHeader title="Credits" description="Usage and billing" />
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Current usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-500">Credit balance and usage history will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
