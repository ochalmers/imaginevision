import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'About — Imagine',
  description: 'Building the infrastructure for configurable commerce.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About"
        title="Building the infrastructure for configurable commerce."
        subtitle="Physical products are complex. Options, materials, dimensions, and constraints are not edge cases — they are the product. We are building the platform that lets brands sell that complexity online."
      />

      <Section
        tag="Origin"
        title="Where we started."
      >
        <div className="mx-auto max-w-prose space-y-6 text-ash leading-relaxed">
          <p>
            The founders spent time inside brands selling configurable physical products and kept encountering the same problem. The products were sophisticated. The online experience for configuring and purchasing them was not. Customers were committing to a sofa in a specific fabric based on a photograph that may not have shown the fabric they selected.
          </p>
          <p>
            The tooling was either built for the wrong problem or required enormous custom engineering. The insight: this is an infrastructure problem. Configuration logic, rendering, order payload construction — these are solved problems if you build them once as a platform.
          </p>
          <p>
            Imagine was founded to build that platform. The API came first. The SDK, components, and rendering engine followed — each reducing the distance between a brand's catalog and a customer who can confidently configure and buy.
          </p>
        </div>
      </Section>

      <Section
        title="What Imagine is."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'A rendering engine for physical products', desc: 'Photorealistic, real-time rendering of configurable products in contextual scenes.' },
            { title: 'A configuration engine', desc: 'Rules that govern what configurations are valid — modelled as a proper constraint system.' },
            { title: 'An API and SDK for developers', desc: 'Every capability accessible through a clean REST API and typed JavaScript SDK.' },
            { title: 'Infrastructure for commerce', desc: 'Imagine adds the configurable product layer your platform was never designed to handle.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ash">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Values"
        title="What we believe."
      >
        <div className="mt-12 space-y-8">
          {[
            { title: 'Precision over simplification', desc: 'Physical products are genuinely complex. We model it accurately and give developers the tools to make it legible.' },
            { title: 'Developer trust is earned through quality', desc: 'We compete on execution — API, SDK, documentation, reliability.' },
            { title: 'Honesty about what we are and are not', desc: 'We are infrastructure. Not a storefront, CMS, or design tool. Clear boundaries make us a better partner.' },
            { title: 'Ship with intent', desc: 'We ship when things are ready. Every change is a commitment to customers running integrations on top.' },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-ash">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Build with us."
        subtitle="We are hiring. If that sounds like the right kind of problem, we would like to hear from you."
        primaryCta={{ href: '/careers', label: 'View open roles' }}
        secondaryCta={{ href: '/contact', label: 'Talk to us' }}
      />
    </>
  )
}
