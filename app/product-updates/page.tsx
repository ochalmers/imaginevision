import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Product Updates — Imagine',
  description: "What's new in the Imagine platform.",
}

export default function ProductUpdatesPage() {
  const updates = [
    { title: 'SDK v2.4.0: React hooks rewrite, improved TypeScript inference', date: 'March 2026' },
    { title: '/v1/experiences now in general availability', date: 'February 2026' },
    { title: 'Render engine: average completion time under 3.5 seconds', date: 'January 2026' },
  ]

  return (
    <>
      <PageHero
        tag="Product Updates"
        title="What's new in the Imagine platform."
        subtitle="New API endpoints, rendering improvements, and SDK releases."
        primaryCta={{ href: '/developers', label: 'Get API access' }}
      />

      <Section>
        <div className="mt-12 space-y-8">
          {updates.map((update) => (
            <div key={update.title} className="border-b border-border-secondary pb-8 last:border-0">
              <h3 className="text-lg font-semibold text-text-heading">{update.title}</h3>
              <p className="mt-2 text-sm text-text-placeholder">{update.date}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
