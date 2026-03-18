import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Appliances - Imagine',
  description: 'Imagine helps appliance brands generate colour variant imagery instantly and distribute assets to every retail partner.',
}

export default function AppliancesPage() {
  return (
    <>
      <PageHero
        tag="Industries / Appliances"
        title="Thousands of configurations. One platform."
        subtitle="Appliance brands carry broad colour ranges across wide product lines — and sell through dozens of retail partners who each need accurate assets. Imagine generates colour variant imagery instantly and distributes automatically."
        primaryCta={{ href: '/contact', label: 'See colour variant rendering' }}
        secondaryCta={{ href: '/contact', label: 'Talk to us' }}
      />

      <Section
        tag="Challenges"
        title="The problems specific to your category."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Colour variant photography cost', desc: "12 new colourways across 8 products = 96 hero images. At £300–£600 each, that's £30,000+ before lifestyle shots and retailer crops." },
            { title: 'Colourway launch complexity', desc: 'Getting a new colour from approval to live on retail sites takes 6–10 weeks. The trend window often passes.' },
            { title: 'Retail partner asset management', desc: 'Each partner has different requirements. Managing 20–50 partners for a full colour range is an operational burden.' },
            { title: 'Consistency across channels', desc: 'Imagery from multiple shoots degrades consistency. Imagine renders from the same source every time.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Render once. Distribute everywhere."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold text-text-heading">Instant colour variant rendering</h3>
            <p className="mt-2 text-sm text-text-body">Upload 3D models. Define colour library. Generate every colourway without a photoshoot. Time to live: 48–72 hours.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">New colourway launch pipeline</h3>
            <p className="mt-2 text-sm text-text-body">Approved colourway → full asset set generated → DTC, retail feeds, trade catalogue updated simultaneously.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Automated retail partner distribution</h3>
            <p className="mt-2 text-sm text-text-body">Format, name, and deliver assets to each partner according to their requirements. Automatically.</p>
          </div>
        </div>
      </Section>

      <Section
        tag="Proof"
        title="Speed to market."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="stat-value">48 hours</p>
            <p className="stat-label">Colour approval to full asset set across 10-product range</p>
          </div>
          <div className="text-center">
            <p className="stat-value">30+</p>
            <p className="stat-label">Retail partner channels served from single render run</p>
          </div>
          <div className="text-center">
            <p className="stat-value">−74%</p>
            <p className="stat-label">Cost reduction vs. photography for colourway launch</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Launch your next colourway in 48 hours."
        primaryCta={{ href: '/contact', label: 'Book an appliances demo' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  )
}
