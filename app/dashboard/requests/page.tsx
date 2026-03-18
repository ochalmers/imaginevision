'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/layout/PageHeader'
import { Button } from '@/components/common/Button'
import { Card, CardContent } from '@/components/common/Card'
import { TableToolbar } from '@/components/data/TableToolbar'
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableRow,
} from '@/components/data/DataTable'
import { StatusBadge } from '@/components/data/StatusBadge'
import { EmptyState } from '@/components/common/EmptyState'
import { Plus, FileText } from 'lucide-react'

const mockRequests = [
  { id: 'REQ-001', product: 'Modular Sofa', status: 'completed', created: '2 hours ago' },
  { id: 'REQ-002', product: 'Dining Table', status: 'pending', created: '5 hours ago' },
  { id: 'REQ-003', product: 'Desk Lamp', status: 'failed', created: '1 day ago' },
]

export default function RequestsPage() {
  const [search, setSearch] = useState('')

  return (
    <>
      <PageHeader
        title="Requests"
        description="Render and configuration requests"
      >
        <Button>
          <Plus className="h-4 w-4" />
          New request
        </Button>
      </PageHeader>
      <div className="mt-6">
        <Card>
          <CardContent className="p-0">
            <div className="p-4 border-b border-neutral-200">
              <TableToolbar
                searchPlaceholder="Search requests..."
                searchValue={search}
                onSearchChange={setSearch}
                primaryAction={
                  <Button>
                    <Plus className="h-4 w-4" />
                    New request
                  </Button>
                }
              />
            </div>
            {mockRequests.length === 0 ? (
              <div className="p-12">
                <EmptyState
                  icon={<FileText className="h-6 w-6" />}
                  title="No requests yet"
                  description="Create a request to generate assets or validate configurations."
                  action={<Button>New request</Button>}
                />
              </div>
            ) : (
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead>Request ID</DataTableHead>
                    <DataTableHead>Product</DataTableHead>
                    <DataTableHead>Status</DataTableHead>
                    <DataTableHead>Created</DataTableHead>
                    <DataTableHead className="w-[80px]"></DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  {mockRequests.map((row) => (
                    <DataTableRow key={row.id}>
                      <DataTableCell className="font-medium font-mono text-sm">{row.id}</DataTableCell>
                      <DataTableCell>{row.product}</DataTableCell>
                      <DataTableCell>
                        <StatusBadge status={row.status} />
                      </DataTableCell>
                      <DataTableCell className="text-neutral-500">{row.created}</DataTableCell>
                      <DataTableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </DataTableCell>
                    </DataTableRow>
                  ))}
                </DataTableBody>
              </DataTable>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
