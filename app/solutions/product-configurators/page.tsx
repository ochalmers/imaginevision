import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import PlaceholderBlock from '@/components/ui/PlaceholderBlock'

export const metadata = {
  title: 'Product Configurators — Imagine',
  description: 'Interactive product configurators that render every valid configuration in real time and connect to checkout.',
}

export default function ProductConfiguratorsPage() {
  return (
    <>
      <PageHero
        tag="Solutions"
        title="Let buyers configure. Watch conversion rise."
        subtitle="Imagine powers buyer-facing product configurators that render every option in real time, enforce configuration logic, and connect directly to your cart."
        primaryCta={{ href: '/contact', label: 'See a demo' }}
        secondaryCta={{ href: '/developers/docs', label: 'Read the docs' }}
      >
        <div className="mt-12">
          <PlaceholderBlock label="Configurator demo — furniture or appliance" />
        </div>
      </PageHero>

      <Section
        title="Everything your buyers need to decide with confidence."
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            'Real-time 3D rendering — every configuration renders instantly',
            'Valid state enforcement — impossible combinations prevented',
            'Multi-angle views — orbit, zoom, examine from every angle',
            'Material and finish accuracy — photorealistic fidelity',
            'Contextual placement — room scenes update with configuration',
            'Checkout integration — exact configuration to cart and OMS',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-border-secondary bg-surface px-4 py-3">
              <p className="text-sm text-text-body">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Proof"
        title="The numbers behind better configuration."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="stat-value">+34%</p>
            <p className="stat-label">Average conversion lift vs. static PDPs</p>
          </div>
          <div className="text-center">
            <p className="stat-value">−28%</p>
            <p className="stat-label">Reduction in return rates</p>
          </div>
          <div className="text-center">
            <p className="stat-value">4 weeks</p>
            <p className="stat-label">Median time from contract to live</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Your configurator could be live in four weeks."
        subtitle="Tell us about your product catalogue and we'll show you the buyer experience."
        primaryCta={{ href: '/contact', label: 'Book a demo' }}
        secondaryCta={{ href: '/developers/docs', label: 'Explore the docs' }}
      />
    </>
  )
}
