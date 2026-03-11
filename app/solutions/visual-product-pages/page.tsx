import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import PlaceholderBlock from '@/components/ui/PlaceholderBlock'

export const metadata = {
  title: 'Visual Product Pages — Imagine',
  description: 'Automatically generate product imagery for every variant at scale.',
}

export default function VisualProductPagesPage() {
  return (
    <>
      <PageHero
        tag="Solutions"
        title="Every variant. Every angle. Every page."
        subtitle="Imagine generates photorealistic product imagery for every SKU in your catalogue — automatically. No photographer, no studio, no delay."
        primaryCta={{ href: '/contact', label: 'See example outputs' }}
        secondaryCta={{ href: '/contact', label: 'Talk to us' }}
      >
        <div className="mt-12">
          <PlaceholderBlock label="Rotating carousel of product variant renders" />
        </div>
      </PageHero>

      <Section
        tag="The Problem"
        title="Photo production doesn't scale with your catalogue."
      >
        <div className="mx-auto mt-12 max-w-prose text-ash">
          <p>Every new colourway needs a photographer, a studio, a sample, a stylist, and weeks of lead time. Meanwhile, buyers see grey placeholders where the navy finish should be.</p>
        </div>
      </Section>

      <Section
        title="Generate once. Every variant, covered."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            'Ingest your product and materials — upload 3D model and materials library',
            'Render at scale — pipeline generates every variant combination automatically',
            'Deliver to your storefront — images via API or direct integration',
          ].map((step) => (
            <div key={step} className="card">
              <p className="text-sm text-ash">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="See your catalogue, fully visualised."
        subtitle="Send us a product and we'll show you what automated variant imagery looks like."
        primaryCta={{ href: '/contact', label: 'Request a sample render' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  )
}
