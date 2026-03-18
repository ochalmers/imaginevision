import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Guides — Imagine',
  description: 'The definitive guides to configurable commerce.',
}

export default function GuidesPage() {
  const guides = [
    { title: 'The Configurability Spectrum: Option Architecture for Physical Products', desc: 'Framework for structuring options, rules, and constraints.', time: '18 min' },
    { title: "A Developer's Guide to Real-Time Product Rendering", desc: 'Technical deep-dive on the render pipeline.', time: '14 min' },
    { title: 'Building a Trade Specification Tool with the Imagine API', desc: 'B2B and trade use case implementation.', time: '22 min' },
  ]

  return (
    <>
      <PageHero
        tag="Guides"
        title="The definitive guides to configurable commerce."
        subtitle="Long-form educational content for brands and developers building in this space."
      />

      <Section>
        <div className="mt-12 space-y-8">
          {guides.map((guide) => (
            <Link key={guide.title} href="#" className="card block">
              <h3 className="text-lg font-semibold text-text-heading">{guide.title}</h3>
              <p className="mt-2 text-sm text-text-body">{guide.desc}</p>
              <p className="mt-4 text-xs text-text-placeholder">{guide.time} read</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
