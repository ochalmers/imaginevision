import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Marketing Visualisation — Imagine',
  description: 'Generate campaign imagery, lookbooks, and social content across every configuration — without a photoshoot.',
}

export default function MarketingVisualisationPage() {
  return (
    <>
      <PageHero
        tag="Solutions"
        title="Every campaign. No photoshoot."
        subtitle="Imagine generates campaign imagery, lookbook spreads, social content, and seasonal creative across your product range — without samples, studios, or scheduling."
        primaryCta={{ href: '/contact', label: 'See example assets' }}
        secondaryCta={{ href: '/contact', label: 'Talk to us' }}
      />

      <Section
        title="One pipeline. Every type of creative."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Campaign Imagery', desc: 'Launch new colour ranges without waiting for samples. Hero assets across every colourway.' },
            { title: 'Lookbooks', desc: 'Full lookbook from a brief — not a photoshoot. Print-ready, exportable.' },
            { title: 'Social Content', desc: 'Platform-ready assets for any product configuration. Add a finish, assets generate with it.' },
            { title: 'Seasonal & Promotional', desc: 'Holiday campaigns, sale banners — styled imagery on demand.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ash">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="See what your next campaign looks like — before you brief a photographer."
        subtitle="Share a product and brief direction. We'll generate sample assets."
        primaryCta={{ href: '/contact', label: 'Request sample assets' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  )
}
