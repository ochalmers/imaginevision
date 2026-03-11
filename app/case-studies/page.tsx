import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Case Studies — Imagine',
  description: 'How brands use Imagine to transform configurable commerce.',
}

export default function CaseStudiesPage() {
  const studies = [
    { title: 'Furniture Brand: 40% Reduction in Returns, 3× Faster Variant Launch', industry: 'Furniture' },
    { title: 'Lighting Brand: Full Finish Coverage Across 200 SKUs in One Week', industry: 'Lighting' },
    { title: 'Mattress Brand: Configurable Product Page Lifts Conversion by 27%', industry: 'Mattresses' },
  ]

  return (
    <>
      <PageHero
        tag="Case Studies"
        title="How brands use Imagine to transform configurable commerce."
        subtitle="Commercial outcomes from brands that have built on our platform."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
      />

      <Section>
        <div className="mt-12 space-y-8">
          {studies.map((study) => (
            <div key={study.title} className="card">
              <span className="section-tag">{study.industry}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{study.title}</h3>
              <p className="mt-4">
                <Link href="#" className="text-accent hover:underline">Read the case study →</Link>
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ready to see outcomes like these?"
        subtitle="Tell us about your product catalogue and challenges."
      >
        <div className="mt-8 text-center">
          <Link href="/contact" className="btn btn-primary">Request a demo</Link>
        </div>
      </Section>
    </>
  )
}
