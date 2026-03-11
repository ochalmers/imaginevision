import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Product Systems — Imagine Platform',
  description: 'Model your products as structured, programmable data. Single source of truth for every attribute, variant, and rule.',
}

export default function PlatformProductSystemsPage() {
  return (
    <>
      <PageHero
        tag="Platform — Product Systems"
        title="Products as structured, programmable systems."
        subtitle="Imagine's product systems layer gives every configurable product a precise, structured representation — accessible via API and designed as the single source of truth."
        primaryCta={{ href: '/developers/api', label: 'Explore the data model' }}
        secondaryCta={{ href: '/developers', label: 'Get API access' }}
      />

      <Section
        title="A configurable product is more than a SKU."
      >
        <div className="mx-auto mt-12 max-w-prose space-y-4 text-ash">
          <p>
            A configurable physical product is an interconnected system of options, materials, constraints, and valid states. Imagine models it that way: Product, Attributes, Variants, Materials, Rules, Components.
          </p>
        </div>
      </Section>

      <Section
        tag="Schema"
        title="A schema built for configurable commerce."
      >
        <div className="mt-12">
          <CodeBlock
            code={`{
  "id": "sofa-arc-01",
  "name": "Arc Sofa",
  "attributes": [
    { "key": "fabric_group", "type": "material", "label": "Fabric" },
    { "key": "frame_size", "type": "option", "label": "Size" },
    { "key": "leg_finish", "type": "material", "label": "Leg Finish" }
  ],
  "ruleset_id": "rs_arc_v3"
}`}
            language="JSON"
          />
        </div>
      </Section>

      <CTASection
        title="Your product catalog, modeled correctly."
        subtitle="Talk to the team about migrating your product data, or start with the API docs."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/developers/api', label: 'Read the product systems API docs' }}
      />
    </>
  )
}
