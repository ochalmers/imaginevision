import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        tag="Solutions"
        title="The right solution for every configurable commerce problem."
        subtitle="Configurable products create friction everywhere they touch your business. Imagine removes that friction — at the product page, in your marketing pipeline, across your design workflow."
        primaryCta={{ href: '/contact', label: 'Talk to us' }}
        secondaryCta={{ href: '/platform', label: 'See the platform' }}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card
            tag="BUYER EXPERIENCE"
            title="Let buyers configure. Watch conversion rise."
            description="Give buyers an interactive, real-time configuration experience. Imagine renders every valid state — instantly — and connects to your checkout."
            href="/solutions/product-configurators"
          />
          <Card
            tag="PRODUCT DETAIL PAGES"
            title="Every variant. Every angle. Every page."
            description="Automatically generate product imagery for every SKU at scale. Replace your manual photography pipeline."
            href="/solutions/visual-product-pages"
          />
          <Card
            tag="CAMPAIGN & CONTENT"
            title="Every campaign. No photoshoot."
            description="Generate campaign imagery, lookbook content, and social assets — across any product configuration — from a single brief."
            href="/solutions/marketing-visualisation"
          />
          <Card
            tag="DESIGN & DEVELOPMENT"
            title="Design, visualise, iterate — without the studio."
            description="Bring new products and finishes to life before physical samples exist. Compress your development timeline."
            href="/solutions/product-design"
          />
        </div>
      </Section>

      <Section
        title="Built for industries that configure."
        subtitle="Imagine is purpose-built for furniture, mattresses, appliances, and lighting. Every solution is designed around the real complexity of your category."
      >
        <p className="mt-6 text-center">
          <Link href="/industries" className="text-text-primary hover:underline">Explore by industry →</Link>
        </p>
      </Section>

      <CTASection
        title="Ready to see Imagine in your stack?"
        subtitle="Most teams are live within four weeks. Let's talk about what that looks like."
        primaryCta={{ href: '/contact', label: 'Talk to us' }}
        secondaryCta={{ href: '/developers/docs', label: 'Read the docs' }}
      />
    </>
  )
}
