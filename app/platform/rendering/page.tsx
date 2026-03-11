import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import PlaceholderBlock from '@/components/ui/PlaceholderBlock'

export const metadata = {
  title: 'Rendering — Imagine Platform',
  description: 'Photorealistic product visuals for every valid configuration, generated instantly. No photoshoot. No manual asset work.',
}

export default function PlatformRenderingPage() {
  return (
    <>
      <PageHero
        tag="Platform — Rendering"
        title="Every configuration. Photorealistic. Instant."
        subtitle="Imagine's rendering engine generates photorealistic product visuals for any valid configuration — automatically, at scale, without a single additional shoot."
        primaryCta={{ href: '/contact', label: 'See it in action' }}
        secondaryCta={{ href: '/developers/docs', label: 'Read the rendering docs' }}
      >
        <div className="mt-12">
          <PlaceholderBlock label="Rendered product — sofa in Slate Linen, Brushed Brass, 3-seat" />
        </div>
      </PageHero>

      <Section
        title="A rendering engine designed for commerce — not studios."
      >
        <div className="mx-auto mt-12 max-w-prose">
          <p className="text-ash leading-relaxed">
            Traditional product photography breaks down the moment you add configurability. A sofa with 12 fabric options, 4 leg finishes, and 3 sizes means 144 SKUs — and tens of thousands of dollars in photography and retouching before you've launched.
          </p>
          <p className="mt-6 text-ash">
            Imagine's rendering engine works from your structured product data and material libraries. Define a configuration state — fabric, finish, dimensions, components — and Imagine returns a production-quality image.
          </p>
        </div>
      </Section>

      <Section
        tag="Pipeline"
        title="From configuration state to finished image."
        subtitle="A four-stage pipeline."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: '1', title: 'Product model ingestion', desc: '3D geometry or CAD translation with accurate dimensions and configurable elements.' },
            { n: '2', title: 'Material library definition', desc: 'Physically accurate material assets — specular, roughness, normal maps.' },
            { n: '3', title: 'Configuration resolution', desc: 'Validate against product rules, assemble model, apply materials.' },
            { n: '4', title: 'Render and delivery', desc: 'Compose scene, render, return JPEG/PNG/WebP via API or webhook.' },
          ].map((step) => (
            <div key={step.n} className="card">
              <span className="section-tag">{step.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ash">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Every output your commerce stack needs."
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {['PDP hero images', 'Transparent PNGs', 'Lifestyle composites', 'Shadow-only renders', 'Thumbnail variants'].map((item) => (
            <div key={item} className="rounded-lg border border-wire bg-surface px-4 py-3">
              <p className="font-medium text-ink">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="See your products rendered."
        subtitle="Talk to the team about onboarding your product catalog and material library."
        primaryCta={{ href: '/contact', label: 'Request a rendering demo' }}
        secondaryCta={{ href: '/developers/api', label: 'Explore the rendering API' }}
      />
    </>
  )
}
