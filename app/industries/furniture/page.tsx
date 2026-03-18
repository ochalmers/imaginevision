import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Furniture — Imagine',
  description: 'Imagine helps furniture brands manage variant complexity at scale — configurators, automated imagery, catalogue automation.',
}

export default function FurniturePage() {
  return (
    <>
      <PageHero
        tag="Industries — Furniture"
        title="Every finish. Every fabric. Every frame."
        subtitle="Furniture brands carry more SKU complexity than any other configurable category. Imagine handles it — automated imagery for every fabric and finish, interactive configurators for DTC, catalogue automation for wholesale."
        primaryCta={{ href: '/contact', label: 'See a furniture demo' }}
        secondaryCta={{ href: '/contact', label: 'Talk to us' }}
      />

      <Section
        tag="Challenges"
        title="The complexity your category actually has."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Variant explosion', desc: '80 fabrics, 6 leg finishes, 4 configurations = 1,900+ SKU combinations. Photographing 10% requires a standing studio.' },
            { title: 'Lifestyle photography cost', desc: 'A full lifestyle shoot costs £8,000–£25,000. Running that for every new season and colourway is not sustainable.' },
            { title: 'B2B catalogue management', desc: 'Wholesale buyers need accurate imagery for quotes and presentations. PDF catalogues are out of date before printed.' },
            { title: 'COM and bespoke configuration', desc: 'Higher-end brands offer COM. Visualising custom configurations before production requires samples or guesswork.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="One platform, three problems solved."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card">
            <h3 className="font-semibold text-text-heading">Automated variant imagery</h3>
            <p className="mt-2 text-sm text-text-body">Upload 3D models and materials. Imagine generates product imagery for every combination. When you add a fabric, imagery generates automatically.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">DTC configurator</h3>
            <p className="mt-2 text-sm text-text-body">Buyers configure frame, fabric, leg finish, dimensions — and see it rendered in real time. Valid state logic prevents impossible combinations.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Wholesale catalogue automation</h3>
            <p className="mt-2 text-sm text-text-body">Live digital catalogue for wholesale partners — always current, always accurate. Partners access imagery and configure products.</p>
          </div>
        </div>
      </Section>

      <Section
        tag="Proof"
        title="What production looks like."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="stat-value">1,900+</p>
            <p className="stat-label">SKU combinations handled for a single product line</p>
          </div>
          <div className="text-center">
            <p className="stat-value">£0</p>
            <p className="stat-label">Additional photography cost for new colourway launches</p>
          </div>
          <div className="text-center">
            <p className="stat-value">6 weeks → 48h</p>
            <p className="stat-label">Time to publish imagery for new fabric range</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="See your furniture catalogue on Imagine."
        subtitle="Share a product and materials library — we'll show you automated imagery and a live configurator."
        primaryCta={{ href: '/contact', label: 'Book a furniture demo' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  )
}
