'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/common/Tabs'
import { Badge } from '@/components/common/Badge'
import { Section } from '@/components/layout/Section'
import { Grid } from '@/components/layout/Grid'

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string

  const breadcrumbs = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Products', href: '/dashboard/products' },
    { label: `Product ${id}` },
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbs} className="mb-4" />
      <PageHeader
        title={`Product ${id}`}
        description="Modular Sofa — 3 variants"
      >
        <Button variant="secondary">Edit product</Button>
      </PageHeader>
      <div className="mt-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6">
            <Section title="Details">
              <Grid cols={2} gap={4} className="max-w-4xl">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Basic info</CardTitle>
                    <CardDescription>Name, SKU, and status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-neutral-500">Name</p>
                      <p className="text-neutral-900">Modular Sofa</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500">SKU</p>
                      <p className="font-mono text-neutral-900">SOFA-001</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-500">Status</p>
                      <Badge variant="success">Published</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Configuration</CardTitle>
                    <CardDescription>Options and variants</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-500">
                    3 options, 12 variants. Edit in Settings.
                  </CardContent>
                </Card>
              </Grid>
            </Section>
          </TabsContent>
          <TabsContent value="activity" className="space-y-6">
            <Section title="Activity" subcopy="Recent changes and events">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-neutral-500">No recent activity.</p>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>
          <TabsContent value="assets" className="space-y-6">
            <Section title="Assets" subcopy="Rendered images and exports">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-neutral-500">No assets generated yet.</p>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>
          <TabsContent value="settings" className="space-y-6">
            <Section title="Settings" subcopy="Product configuration and options">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-neutral-500">Product settings will appear here.</p>
                </CardContent>
              </Card>
            </Section>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
