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
import { Pagination } from '@/components/data/Pagination'
import { EmptyState } from '@/components/common/EmptyState'
import { Plus, Package } from 'lucide-react'

const mockProducts = [
  { id: '1', name: 'Modular Sofa', sku: 'SOFA-001', status: 'published', updated: '2 hours ago' },
  { id: '2', name: 'Dining Table', sku: 'TABLE-002', status: 'draft', updated: '1 day ago' },
  { id: '3', name: 'Desk Lamp', sku: 'LAMP-003', status: 'published', updated: '3 days ago' },
]

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const totalPages = 1

  return (
    <>
      <PageHeader
        title="Products"
        description="Manage your product catalog"
      >
        <Button>
          <Plus className="h-4 w-4" />
          Add product
        </Button>
      </PageHeader>
      <div className="mt-6">
        <Card>
          <CardContent className="p-0">
            <div className="p-4 border-b border-neutral-200">
              <TableToolbar
                searchPlaceholder="Search products..."
                searchValue={search}
                onSearchChange={setSearch}
                primaryAction={
                  <Button>
                    <Plus className="h-4 w-4" />
                    Add product
                  </Button>
                }
              />
            </div>
            {mockProducts.length === 0 ? (
              <div className="p-12">
                <EmptyState
                  icon={<Package className="h-6 w-6" />}
                  title="No products yet"
                  description="Add your first product to get started."
                  action={<Button>Add product</Button>}
                />
              </div>
            ) : (
              <>
                <DataTable>
                  <DataTableHeader>
                    <DataTableRow>
                      <DataTableHead>Name</DataTableHead>
                      <DataTableHead>SKU</DataTableHead>
                      <DataTableHead>Status</DataTableHead>
                      <DataTableHead>Updated</DataTableHead>
                      <DataTableHead className="w-[80px]"></DataTableHead>
                    </DataTableRow>
                  </DataTableHeader>
                  <DataTableBody>
                    {mockProducts.map((row) => (
                      <DataTableRow key={row.id}>
                        <DataTableCell className="font-medium">{row.name}</DataTableCell>
                        <DataTableCell className="text-neutral-500">{row.sku}</DataTableCell>
                        <DataTableCell>
                          <StatusBadge status={row.status} />
                        </DataTableCell>
                        <DataTableCell className="text-neutral-500">{row.updated}</DataTableCell>
                        <DataTableCell>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </DataTableCell>
                      </DataTableRow>
                    ))}
                  </DataTableBody>
                </DataTable>
                <div className="flex items-center justify-end border-t border-neutral-200 py-4 pr-4">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
