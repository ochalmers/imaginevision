import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Mattresses - Imagine',
  description: 'Imagine helps mattress brands turn product complexity into buyer confidence — guided selling, variant imagery, reduced returns.',
}

export default function MattressesPage() {
  return (
    <>
      <PageHero
        tag="Industries / Mattresses"
        title="Complex product. Simple experience."
        subtitle="Firmness, height, comfort layers, cover materials, size variants — mattress products carry real complexity. Imagine gives brands the tools to visualise every dimension, guide buyers to the right configuration, and reduce returns."
        primaryCta={{ href: '/contact', label: 'See the guided selling experience' }}
        secondaryCta={{ href: '/contact', label: 'Talk to us' }}
      />

      <Section
        tag="Challenges"
        title="Why mattresses are hard to sell online."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Product explanation complexity', desc: 'Three firmness options, four comfort layers, five cover options — difficult to explain in copy. Buyers need to see the product.' },
            { title: 'Returns from expectation mismatch', desc: 'Online mattress return rates run 10–20%. The primary driver is buyer expectation mismatch — not product defect.' },
            { title: 'Variant imagery gaps', desc: 'Four sizes, three cover options = twelve visual states. Most brands photograph one and leave the rest to imagination.' },
            { title: 'Guided selling gap', desc: "Mattress buying requires guidance. Brands that provide it convert higher. Most don't, because building it has required significant engineering." },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Visualise the product. Guide the buyer. Reduce returns."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold text-text-heading">Visual product explanation</h3>
            <p className="mt-2 text-sm text-text-body">Rendered cross-sections with layer-by-layer accuracy. Buyers see what they're buying.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Real-time variant configuration</h3>
            <p className="mt-2 text-sm text-text-body">Size, height, firmness, cover — every combination rendered and delivered to PDP automatically.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Guided selling experience</h3>
            <p className="mt-2 text-sm text-text-body">Question flow that adapts to sleeping position, firmness preference, partner considerations — surfaces the right configuration.</p>
          </div>
        </div>
      </Section>

      <Section
        tag="Proof"
        title="The numbers."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="stat-value">−18%</p>
            <p className="stat-label">Average reduction in return rates with guided selling</p>
          </div>
          <div className="text-center">
            <p className="stat-value">+27%</p>
            <p className="stat-label">Conversion lift with full variant imagery</p>
          </div>
          <div className="text-center">
            <p className="stat-value">12</p>
            <p className="stat-label">Variant visual states from one product setup</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Show your buyers exactly what they're buying."
        primaryCta={{ href: '/contact', label: 'Book a mattress demo' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  )
}
