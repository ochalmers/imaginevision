import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        tag="Industries"
        title="Built for the industries that configure."
        subtitle="Imagine is purpose-built for the specific complexity of furniture, mattresses, appliances, and lighting — with workflows and integrations designed around your category's real problems."
        primaryCta={{ href: '/industries/furniture', label: 'Explore your industry' }}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card
            tag="FURNITURE"
            title="Every finish. Every fabric. Every frame."
            description="Furniture brands face more configuration combinations than any other category. Imagine handles your variant explosion — configurators for DTC, automated imagery for every finish, catalogue automation for wholesale."
            href="/industries/furniture"
          />
          <Card
            tag="MATTRESSES"
            title="Complex product. Simple experience."
            description="Mattress products are technically complex but must feel simple to buy. Imagine powers guided selling that reduces mismatch returns and visualises what buyers can't otherwise see."
            href="/industries/mattresses"
          />
          <Card
            tag="APPLIANCES"
            title="Thousands of configurations. One platform."
            description="Colour ranges, connectivity options, finish variants — appliance catalogues are wide and expensive to photograph. Imagine generates colour variant imagery instantly."
            href="/industries/appliances"
          />
          <Card
            tag="LIGHTING"
            title="See it in context. In every finish."
            description="Lighting products live and die on how they look in context. Imagine renders every configuration — finish, shade, bulb type — in the settings where buyers make decisions."
            href="/industries/lighting"
          />
        </div>
      </Section>

      <Section
        title="One platform. Every configurable category."
        subtitle="The same infrastructure powers a furniture configurator and appliance colour variants. Imagine is a platform — not a collection of category-specific point tools."
      />

      <CTASection
        title="Not sure where to start?"
        subtitle="Tell us about your product catalogue and your most pressing challenge."
        primaryCta={{ href: '/contact', label: 'Talk to us' }}
        secondaryCta={{ href: '/solutions', label: 'Explore solutions' }}
      />
    </>
  )
}
