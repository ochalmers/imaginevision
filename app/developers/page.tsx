import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        tag="Developers"
        title="Build configurable commerce. On a platform designed for developers."
        subtitle="REST API, JavaScript SDK, React components, and webhooks — everything you need to add real-time product configuration and photorealistic rendering to any storefront."
        primaryCta={{ href: '/contact', label: 'Get API Key' }}
        secondaryCta={{ href: '/developers/docs', label: 'Read the Docs' }}
        align="left"
      >
        <div className="mt-12">
          <CodeBlock
            code={`import { Imagine } from '@imagine/sdk';

const imagine = new Imagine({ apiKey: process.env.IMAGINE_API_KEY });

const result = await imagine.render({
  productId: 'sofa-alto-xl',
  configuration: {
    fabric: 'boucle-ivory',
    legs: 'walnut',
    dimensions: 'W240 D95 H78',
  },
  scene: 'living-room-natural-light',
});

console.log(result.imageUrl);`}
          />
        </div>
      </PageHero>

      <Section
        title="The tools you need."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="REST API"
            description="Clean, versioned API with predictable endpoints and full OpenAPI documentation."
            href="/developers/api"
          />
          <Card
            title="JavaScript SDK"
            description="npm-installable SDK with TypeScript support. First-class methods for rendering and configuration."
            href="/developers/sdk"
          />
          <Card
            title="React Components"
            description="Drop-in UI primitives — configurator panels, swatch selectors, render viewers."
            href="/developers/sdk"
          />
          <Card
            title="Webhooks"
            description="Real-time events for render completion, configuration changes. Signed payloads, retry logic."
            href="/developers/docs"
          />
        </div>
      </Section>

      <Section
        tag="Quickstart"
        title="From zero to rendered in under 10 minutes."
      >
        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          <div>
            <h3 className="font-semibold text-text-heading">1. Get your API key</h3>
            <p className="mt-1 text-sm text-text-body">Sign up and generate a key. No credit card required.</p>
          </div>
          <div>
            <h3 className="font-semibold text-text-heading">2. Install the SDK</h3>
            <CodeBlock code="npm install @imagine/sdk" language="bash" />
          </div>
          <div>
            <h3 className="font-semibold text-text-heading">3. Embed the configurator</h3>
            <p className="mt-1 text-sm text-text-body">Drop the React component into your product page. Point it at a product ID.</p>
          </div>
        </div>
        <p className="mt-8 text-center">
          <Link href="/developers/docs" className="text-text-primary hover:underline">Start the quickstart guide →</Link>
        </p>
      </Section>

      <Section
        tag="Use cases"
        title="Built for every commerce context."
      >
        <p className="mx-auto max-w-prose text-center text-text-body">
          Product configurator · Visual PDP · Batch render pipeline · Specification tool · Showroom kiosk · B2B quoting UI
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['Product configurator', 'Visual PDP', 'Batch render', 'Spec tool', 'Showroom kiosk', 'B2B quoting'].map((tag) => (
            <span key={tag} className="rounded-full border border-border-secondary px-3 py-1 text-xs text-text-body">{tag}</span>
          ))}
        </div>
      </Section>

      <Section
        tag="Community"
        title="Built in the open. Supported in public."
      >
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-text-body">
          <a href="https://github.com" className="hover:text-text-heading">GitHub</a>
          <a href="#" className="hover:text-text-heading">Discord</a>
          <Link href="/product-updates" className="hover:text-text-heading">Changelog</Link>
          <a href="#" className="hover:text-text-heading">Status</a>
        </div>
      </Section>

      <CTASection
        title="Ready to build?"
        subtitle="Get your API key and make your first render call in minutes."
        primaryCta={{ href: '/contact', label: 'Get API Key' }}
        secondaryCta={{ href: '/developers/api', label: 'View API Reference' }}
      />
    </>
  )
}
