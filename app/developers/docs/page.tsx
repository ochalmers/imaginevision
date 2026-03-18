import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Documentation — Imagine',
  description: 'Everything you need to build on Imagine.',
}

export default function DevelopersDocsPage() {
  return (
    <>
      <PageHero
        tag="Documentation"
        title="Everything you need to build."
        subtitle="Quickstart guides, technical references, integration walkthroughs, and API documentation."
        primaryCta={{ href: '/contact', label: 'Get API Key' }}
      />

      <Section
        tag="Quickstart"
        title="New here? Start in three steps."
      >
        <div className="mt-12 space-y-8">
          <div>
            <h3 className="font-semibold text-text-heading">Step 1 — Install the SDK</h3>
            <div className="mt-2">
              <CodeBlock code="npm install @imagine/sdk" language="bash" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-text-heading">Step 2 — Initialize and authenticate</h3>
            <div className="mt-2">
              <CodeBlock
                code={`import { Imagine } from '@imagine/sdk';

const imagine = new Imagine({
  apiKey: process.env.IMAGINE_API_KEY,
});`}
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-text-heading">Step 3 — Make your first render call</h3>
            <div className="mt-2">
              <CodeBlock
                code={`const render = await imagine.render({
  productId: 'your-product-id',
  configuration: { finish: 'matte-white', material: 'oak' },
  scene: 'studio-neutral',
});

console.log(render.imageUrl);`}
              />
            </div>
          </div>
        </div>
        <p className="mt-8">
          <Link href="#" className="text-text-primary hover:underline">Read the full quickstart guide →</Link>
        </p>
      </Section>

      <Section
        title="Guides by category."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Authentication', desc: 'API keys, client tokens, scoped access.' },
            { title: 'Rendering', desc: 'Render pipeline, scene presets, batch rendering.' },
            { title: 'Configuration', desc: 'Validation, option rules, constraint logic.' },
            { title: 'Webhooks', desc: 'Setup, payload structure, signature verification.' },
            { title: 'Integrations', desc: 'Shopify, Contentful, custom headless.' },
            { title: 'SDKs and Components', desc: 'React configurator, Vue composable.' },
          ].map((item) => (
            <Card key={item.title} title={item.title} description={item.desc} />
          ))}
        </div>
      </Section>

      <Section
        tag="Changelog"
        title="What's changed."
      >
        <div className="mt-12 space-y-2 text-sm text-text-body">
          <p>• March 2026 — SDK v2.4.0: useImagineRender hook, improved TypeScript inference</p>
          <p>• February 2026 — API v1: /v1/experiences endpoint in general availability</p>
          <p>• January 2026 — Render engine: average time under 3.5 seconds</p>
        </div>
        <p className="mt-6">
          <Link href="/product-updates" className="text-text-primary hover:underline">View changelog →</Link>
        </p>
      </Section>
    </>
  )
}
