import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Product Design — Imagine',
  description: 'Visualise new products, test finishes and materials, and validate designs before physical samples exist.',
}

export default function ProductDesignPage() {
  return (
    <>
      <PageHero
        tag="Solutions"
        title="Design, visualise, iterate — without the studio."
        subtitle="Imagine gives product design teams a visualisation layer that works at the speed of design. See new products in photorealistic detail before committing to physical development."
        primaryCta={{ href: '/contact', label: 'See a product visualised' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />

      <Section
        title="From design file to photorealistic render — in the same week."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Design — work in your existing tools; Imagine accepts standard 3D formats',
            'Visualise — photorealistic renders with accurate material fidelity',
            'Iterate — change finish, swap material; renders update without new sample',
            'Launch — same assets become PDP, marketing, and sales materials',
          ].map((step) => (
            <div key={step} className="card">
              <p className="text-sm text-ash">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="See your next product — before the sample arrives."
        subtitle="Share a 3D file or brief and we'll show you what Imagine produces."
        primaryCta={{ href: '/contact', label: 'See a demo' }}
        secondaryCta={{ href: '/contact', label: 'Talk to the team' }}
      />
    </>
  )
}
