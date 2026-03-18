import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Grid } from '@/components/layout/Grid'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { PageHeader } from '@/components/layout/PageHeader'
import { BarChart3, Package, FileText, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of your account and activity"
      />
      <div className="mt-8 space-y-8">
        <Section title="Overview" subcopy="Key metrics this month">
          <Grid cols={4} gap={4}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-500">
                  Total products
                </CardTitle>
                <Package className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-neutral-900">124</p>
                <p className="text-xs text-neutral-500">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-500">
                  Pending requests
                </CardTitle>
                <FileText className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-neutral-900">8</p>
                <p className="text-xs text-neutral-500">3 require action</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-500">
                  Renders this month
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-neutral-900">2,847</p>
                <p className="text-xs text-neutral-500">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-neutral-500">
                  Conversion rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-neutral-400" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-neutral-900">3.2%</p>
                <p className="text-xs text-neutral-500">+0.4% from last month</p>
              </CardContent>
            </Card>
          </Grid>
        </Section>
        <Section title="Recent activity" subcopy="Latest requests and updates">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-neutral-500">
                No recent activity. Requests and asset generation will appear here.
              </p>
            </CardContent>
          </Card>
        </Section>
      </div>
    </>
  )
}
