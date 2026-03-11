import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export default function PlatformPage() {
  return (
    <>
      <PageHero
        tag="Platform"
        title="One platform. Every layer of configurable commerce."
        subtitle="Rendering, configuration logic, product data systems, commerce experiences, and a full API — designed to work together out of the box, or integrate into what you already have."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/developers/docs', label: 'Read the docs' }}
      />

      <Section
        title="Five layers. One coherent system."
        subtitle="Each capability works independently — and compounds when combined."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Rendering"
            description="Photorealistic visuals for every valid configuration. No photoshoot required."
            href="/platform/rendering"
          />
          <Card
            title="Configuration"
            description="Define product rules once. Enforce valid states everywhere — across every channel."
            href="/platform/configuration"
          />
          <Card
            title="Product Systems"
            description="Model products as programmable data — attributes, variants, materials, and logic."
            href="/platform/product-systems"
          />
          <Card
            title="Experiences"
            description="Interactive configurators, embeddable viewers, and guided selling — ready to deploy."
            href="/platform/experiences"
          />
          <Card
            title="APIs"
            description="A complete REST API. Build any workflow, integration, or product on top of Imagine."
            href="/platform/apis"
          />
        </div>
      </Section>

      <Section
        tag="How It Fits Together"
        title="A platform built as a system."
      >
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-ash leading-relaxed">
            A brand's product catalog lives in <strong className="text-ink">Product Systems</strong> — structured, programmable, versioned. 
            The <strong className="text-ink">Configuration Engine</strong> reads those product definitions to validate what's possible in real time. 
            The <strong className="text-ink">Rendering Engine</strong> takes any valid configuration state and returns a photorealistic image. 
            <strong className="text-ink"> Experiences</strong> expose configuration and rendering through UI components — embeddable, brandable, conversion-optimized. 
            The <strong className="text-ink">API</strong> surfaces all of this programmatically.
          </p>
          <p className="mt-6 text-ash">
            Most platforms solve one layer. Imagine is designed for the full stack of configurable commerce.
          </p>
        </div>
      </Section>

      <Section
        tag="For developers"
        title="Built for developers who build commerce."
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <ul className="space-y-3 text-ash">
              <li>• RESTful API with predictable resource shapes and clear versioning</li>
              <li>• SDKs for JavaScript/TypeScript (React components, server-side rendering)</li>
              <li>• Webhooks for configuration events, render completions, catalog updates</li>
              <li>• Full documentation with live code examples</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/platform/apis" className="btn btn-primary">Explore the API</Link>
              <Link href="/developers/docs" className="btn btn-ghost">Read the docs</Link>
            </div>
          </div>
          <CodeBlock
            code={`const result = await imagine.render({
  productId: 'sofa-arc-01',
  configuration: { fabric: 'boucle-ivory' },
  scene: 'living-room-natural-light',
});`}
          />
        </div>
      </Section>

      <CTASection
        title="Ready to see it in production?"
        subtitle="Talk to the team or start building today."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/developers', label: 'Get API access' }}
      />
    </>
  )
}
