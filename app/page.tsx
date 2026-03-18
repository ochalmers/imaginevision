import Link from 'next/link'
import Hero from '@/components/ui/Hero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'
import PlaceholderBlock from '@/components/ui/PlaceholderBlock'

export default function HomePage() {
  return (
    <>
      <Hero
        tag="Configurable Commerce"
        title="Imagine powers configurable commerce."
        subtitle="The platform infrastructure for brands that sell products with options. Visualise, configure, and launch any product experience — without the cost and fragility of doing it yourself."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/developers', label: 'Get API access' }}
      >
        <p className="mt-s-600 text-small text-text-placeholder">
          Trusted by leading furniture, appliance, and consumer brands
        </p>
        <div className="mt-12">
          <PlaceholderBlock label="Product configurator grid — 12–16 configurations" />
        </div>
      </Hero>

      <Section
        tag="The Challenge"
        title="This is how most brands handle configurable products."
      >
        <div className="feature-grid mt-12">
          <div className="card">
            <h3 className="text-h5 font-semibold text-text-heading">Asset Production</h3>
            <p className="mt-s-200 text-small text-text-body">
              Thousands of pre-rendered images. Weeks to produce. Months to keep current. Every new variant means a new photoshoot.
            </p>
          </div>
          <div className="card">
            <h3 className="text-h5 font-semibold text-text-heading">Configuration Logic</h3>
            <p className="mt-s-200 text-small text-text-body">
              Rules in spreadsheets. Options managed manually. Invalid configurations caught at order time, not at browse time.
            </p>
          </div>
          <div className="card">
            <h3 className="text-h5 font-semibold text-text-heading">Fragmented Tooling</h3>
            <p className="mt-s-200 text-small text-text-body">
              A visualisation tool here. A configurator there. A commerce platform that doesn't talk to either. Four integrations held together with custom code.
            </p>
          </div>
        </div>
        <p className="mt-s-1200 text-center text-body-lg font-medium text-text-heading">
          There is a better model.
        </p>
      </Section>

      <Section
        tag="Platform"
        title="One platform. Every layer."
        subtitle="Four capabilities that work together — purpose-built for configurable commerce."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card
            title="Every configuration. Photorealistic. Instantly."
            description="Generate photorealistic product visuals for any valid configuration — without a photoshoot, without a 3D studio."
            href="/platform/rendering"
          />
          <Card
            title="Define product logic once. Apply it everywhere."
            description="Model your product rules, valid states, and option dependencies. The configuration engine enforces them across every surface."
            href="/platform/configuration"
          />
          <Card
            title="Commerce experiences that actually convert."
            description="Embed interactive configurators into any storefront. Build visual product pages. Power guided selling flows."
            href="/platform/experiences"
          />
          <Card
            title="Build anything on the Imagine API."
            description="Every platform capability, available programmatically. RESTful API. JavaScript SDK. Webhooks. Designed for developers."
            href="/platform/apis"
          />
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn btn-secondary">See platform in action</Link>
          <Link href="/developers/docs" className="btn btn-ghost">Read the API docs</Link>
        </div>
      </Section>

      <Section
        tag="Proof"
        title="Trusted by brands that configure."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="stat-value">40%</p>
            <p className="stat-label">Reduction in asset production cost</p>
          </div>
          <div className="text-center">
            <p className="stat-value">2.8×</p>
            <p className="stat-label">Increase in configurator conversion rate</p>
          </div>
          <div className="text-center">
            <p className="stat-value">6 weeks</p>
            <p className="stat-label">From contract to live</p>
          </div>
        </div>
        <blockquote className="mx-auto mt-s-1200 max-w-2xl border-l-2 border-border-primary pl-s-600 text-body-lg italic text-text-body">
          "Imagine replaced a five-person asset production workflow. We now launch new variants in hours."
        </blockquote>
        <p className="mt-s-400 text-center text-small text-text-placeholder">— Head of Digital, Furniture brand</p>
        <p className="mt-s-800 text-center">
          <Link href="/case-studies" className="text-text-primary hover:underline">Read the case study</Link>
        </p>
      </Section>

      <Section
        tag="Two Paths"
        title="Built for companies and developers."
      >
        <div className="audience-split mt-12">
          <div className="card">
            <p className="section-tag mb-2">For companies</p>
            <h3 className="text-h5 font-semibold text-text-heading">Sell your configurable products better.</h3>
            <p className="mt-s-300 text-small text-text-body">
              Whether you're selling furniture, appliances, or anything that comes in options — Imagine powers the product experience from configuration to checkout.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn btn-primary">Request a demo</Link>
              <Link href="/solutions" className="btn btn-ghost">Explore solutions</Link>
            </div>
          </div>
          <div className="card">
            <p className="section-tag mb-2">For developers</p>
            <h3 className="text-h5 font-semibold text-text-heading">Build on the configurable commerce platform.</h3>
            <p className="mt-s-300 text-small text-text-body">
              A programmable API, JavaScript SDK, and full documentation set. Build product configurators, visual product pages, and custom experiences.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/developers" className="btn btn-primary">Get API access</Link>
              <Link href="/developers/docs" className="btn btn-ghost">View the docs</Link>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to see what configurable commerce looks like for your products?"
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
      />
    </>
  )
}
