import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'API Reference — Imagine',
  description: 'A well-designed API for every layer of the Imagine platform.',
}

export default function DevelopersApiPage() {
  return (
    <>
      <PageHero
        tag="Developers — API"
        title="A well-designed API for every layer of the platform."
        subtitle="RESTful, versioned, documented with full OpenAPI specs. Build against the render engine, configuration engine, product catalog, and experience layer."
        primaryCta={{ href: '/developers/docs', label: 'View Full API Reference' }}
        secondaryCta={{ href: '/contact', label: 'Get API Key' }}
      >
        <div className="mt-12">
          <CodeBlock
            code={`Base URL:  https://api.imagine.so/v1
Auth:      Bearer token (API key or JWT)
Format:    JSON
Versioning: URL path — /v1/`}
            language=""
          />
        </div>
      </PageHero>

      <Section
        title="Designed to be obvious."
      >
        <div className="mt-12 space-y-4 text-ash">
          <p><strong className="text-ink">Predictable resource naming</strong> — Every endpoint follows noun-first pattern. /v1/products, /v1/renders, /v1/configurations.</p>
          <p><strong className="text-ink">Consistent error shapes</strong> — Same JSON structure with code, message, and details array. Your error handling works everywhere.</p>
          <p><strong className="text-ink">Idempotent writes</strong> — Optional idempotency_key on POST. Submit twice, get same response. No duplicates.</p>
          <p><strong className="text-ink">Pagination that works</strong> — Cursor-based. Pass after and limit. Response includes next_cursor and has_more.</p>
        </div>
      </Section>

      <Section
        title="Core endpoint groups."
      >
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-wire">
                <th className="py-3 text-left font-medium text-ink">Group</th>
                <th className="py-3 text-left font-medium text-ink">Endpoints</th>
              </tr>
            </thead>
            <tbody className="text-ash">
              <tr className="border-b border-wire/50">
                <td className="py-3 font-mono">/v1/renders</td>
                <td>POST create, GET status, GET image</td>
              </tr>
              <tr className="border-b border-wire/50">
                <td className="py-3 font-mono">/v1/configurations</td>
                <td>POST validate, POST save, GET retrieve</td>
              </tr>
              <tr className="border-b border-wire/50">
                <td className="py-3 font-mono">/v1/products</td>
                <td>GET list, GET :id, GET :id/options</td>
              </tr>
              <tr className="border-b border-wire/50">
                <td className="py-3 font-mono">/v1/experiences</td>
                <td>POST create, GET :id, PATCH :id</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Example: Create a render."
      >
        <div className="mt-12 space-y-6">
          <CodeBlock
            code={`POST /v1/renders
{
  "product_id": "sofa-alto-xl",
  "configuration": {
    "fabric": "boucle-ivory",
    "legs": "walnut",
    "dimensions": "W240 D95 H78"
  },
  "scene": "living-room-natural-light",
  "output": { "format": "jpg", "width": 2400, "height": 1600 }
}`}
            language="HTTP"
          />
          <CodeBlock
            code={`{
  "id": "ren_8x2kqp4m",
  "status": "complete",
  "image_url": "https://cdn.imagine.so/renders/ren_8x2kqp4m.jpg",
  "completed_at": "2026-03-11T09:14:25Z",
  "duration_ms": 3141
}`}
            language="Response"
          />
        </div>
      </Section>

      <Section
        title="Rate limits."
      >
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-wire">
                <th className="py-3 text-left font-medium text-ink">Plan</th>
                <th className="py-3 text-left font-medium text-ink">Requests/min</th>
                <th className="py-3 text-left font-medium text-ink">Renders/hour</th>
              </tr>
            </thead>
            <tbody className="text-ash">
              <tr className="border-b border-wire/50"><td className="py-2">Starter</td><td>60</td><td>200</td></tr>
              <tr className="border-b border-wire/50"><td className="py-2">Growth</td><td>300</td><td>2,000</td></tr>
              <tr className="border-b border-wire/50"><td className="py-2">Scale</td><td>1,000</td><td>Unlimited</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <CTASection
        title="Start building against the API."
        primaryCta={{ href: '/developers/docs', label: 'View Full API Reference' }}
        secondaryCta={{ href: '/developers/sdk', label: 'Install the SDK' }}
      />
    </>
  )
}
