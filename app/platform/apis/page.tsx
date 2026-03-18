import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'APIs — Imagine Platform',
  description: 'A complete REST API for configurable commerce. Render, configure, and manage product systems programmatically.',
}

export default function PlatformApisPage() {
  return (
    <>
      <PageHero
        tag="Platform — APIs"
        title="Build anything on the Imagine API."
        subtitle="A complete REST API covering rendering, configuration, and product systems — with clear versioning, predictable responses, and SDKs."
        primaryCta={{ href: '/developers', label: 'Get your API key' }}
        secondaryCta={{ href: '/developers/api', label: 'Read the full API reference' }}
      >
        <div className="mt-12 text-left">
          <CodeBlock
            code={`curl https://api.imaginecommerce.com/v1/render \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "product_id": "sofa-arc-01",
    "configuration": {
      "fabric": "slate-linen",
      "frame_size": "3-seat"
    }
  }'`}
            language="bash"
          />
        </div>
      </PageHero>

      <Section
        tag="Design"
        title="An API designed for production, not prototypes."
      >
        <div className="mt-12 space-y-4 text-text-body">
          <p>• REST with predictable resource shapes — consistent patterns across endpoints</p>
          <p>• Explicit versioning at URL level — /v1/ with published deprecation</p>
          <p>• Structured errors — machine-readable code, message, and details</p>
          <p>• Idempotent writes — safe retries with idempotency keys</p>
        </div>
      </Section>

      <Section
        title="Core endpoint groups."
      >
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-secondary">
                <th className="py-3 text-left font-medium text-text-heading">Endpoint</th>
                <th className="py-3 text-left font-medium text-text-heading">Description</th>
              </tr>
            </thead>
            <tbody className="text-text-body">
              <tr className="border-b border-border-secondary/50"><td className="py-2 font-mono">POST /v1/render</td><td>Submit configuration, receive rendered image</td></tr>
              <tr className="border-b border-border-secondary/50"><td className="py-2 font-mono">POST /v1/configure/validate</td><td>Validate configuration against product rules</td></tr>
              <tr className="border-b border-border-secondary/50"><td className="py-2 font-mono">GET /v1/products/:id</td><td>Retrieve full product definition</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection
        title="Start building."
        subtitle="Get an API key and be making real requests in minutes."
        primaryCta={{ href: '/developers', label: 'Get your API key' }}
        secondaryCta={{ href: '/developers/api', label: 'Read the full API reference' }}
      />
    </>
  )
}
