import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'
import PlaceholderBlock from '@/components/ui/PlaceholderBlock'

export const metadata = {
  title: 'Experiences — Imagine Platform',
  description: 'Interactive configurators, embeddable viewers, and guided selling — built for configurable commerce.',
}

export default function PlatformExperiencesPage() {
  return (
    <>
      <PageHero
        tag="Platform — Experiences"
        title="Commerce experiences that convert."
        subtitle="Interactive configurators, embeddable viewers, visual product pages, and guided selling flows — purpose-built for configurable physical products."
        primaryCta={{ href: '/contact', label: 'See a live demo' }}
        secondaryCta={{ href: '/developers/sdk', label: 'Explore the components' }}
      >
        <div className="mt-12">
          <PlaceholderBlock label="Configurator in action — product updating as options change" />
        </div>
      </PageHero>

      <Section
        title="Every touchpoint in the configurable commerce journey."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Interactive Configurator', desc: 'Full configuration experience with real-time renders and cart integration.' },
            { title: 'Embeddable Visual Viewer', desc: 'Lightweight component for any PDP or marketing page.' },
            { title: 'Visual Product Page', desc: 'Full PDP template with configuration and rendering built in.' },
            { title: 'Guided Selling Flow', desc: 'Question-based flow that maps to the right configuration.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ash">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Developer Controls"
        title="Customizable down to the component level."
      >
        <div className="mt-12">
          <CodeBlock
            code={`<ImagineConfigurator
  productId="sofa-arc-01"
  onSelectionChange={(state) => analytics.track('config_step', state)}
  onAddToCart={(config) => shopify.addToCart(config)}
  theme={{ accent: '#1A1A1A', fontFamily: 'PP Neue Montreal' }}
/>`}
            language="tsx"
          />
        </div>
      </Section>

      <CTASection
        title="Your configurable products deserve a configurable experience."
        subtitle="See how Imagine's experience layer performs on products like yours."
        primaryCta={{ href: '/contact', label: 'Request a live demo' }}
        secondaryCta={{ href: '/developers/sdk', label: 'Explore the component docs' }}
      />
    </>
  )
}
