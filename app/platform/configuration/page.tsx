import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Configuration Engine — Imagine Platform',
  description: 'Define your product logic once. Imagine enforces valid configurations everywhere.',
}

export default function PlatformConfigurationPage() {
  return (
    <>
      <PageHero
        tag="Platform — Configuration"
        title="Define once. Configure anything."
        subtitle="Imagine's configuration engine turns your product rules into a structured, programmable system — and enforces valid states across every channel, every time."
        primaryCta={{ href: '/contact', label: 'See a demo' }}
        secondaryCta={{ href: '/developers/api', label: 'Explore the configuration API' }}
      />

      <Section
        tag="The Problem"
        title="Configurable products are harder than they look."
      >
        <div className="mx-auto mt-12 max-w-prose">
          <p className="text-text-body">
            Most brands manage configuration logic in spreadsheets, hard-coded front-end rules, or customer service handling edge cases. Invalid configurations reach checkout. Rules live in too many places. Adding an option breaks everything.
          </p>
        </div>
      </Section>

      <Section
        title="A configuration engine built for physical products."
      >
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            'Rule definition — option dependencies, material compatibility, dimensional constraints',
            'Valid state resolution — returns valid remaining options in real time',
            'Conflict detection — incompatible selections surfaced before cart',
            'Multi-channel enforcement — same rules everywhere',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-border-secondary bg-surface px-4 py-3">
              <p className="text-sm text-text-body">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Developer Integration"
        title="API-first. Works with any stack."
      >
        <div className="mt-12">
          <CodeBlock
            code={`POST /v1/configure/validate
{
  "product_id": "sofa-arc-01",
  "selections": {
    "fabric": "slate-linen",
    "frame_size": "3-seat",
    "leg_finish": "brushed-brass"
  }
}`}
            language="HTTP"
          />
        </div>
      </Section>

      <CTASection
        title="One rule set. Every channel. Zero conflicts."
        subtitle="See how the configuration engine works with your product catalog."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/developers', label: 'Get API access' }}
      />
    </>
  )
}
