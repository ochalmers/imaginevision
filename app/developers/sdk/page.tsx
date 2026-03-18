import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'SDK — Imagine',
  description: 'The fastest way to build on Imagine. JavaScript/TypeScript SDK with React and Vue support.',
}

export default function DevelopersSdkPage() {
  return (
    <>
      <PageHero
        tag="SDK"
        title="The fastest way to build on Imagine."
        subtitle="A fully-typed JavaScript and TypeScript SDK with first-class React and Vue support. Install in 30 seconds. Ship in an afternoon."
        primaryCta={{ href: '/developers/docs', label: 'View SDK Reference' }}
        secondaryCta={{ href: '/developers/examples', label: 'See Examples' }}
      >
        <div className="mt-12">
          <CodeBlock
            code={`npm install @imagine/sdk

import { Imagine } from '@imagine/sdk';

const imagine = new Imagine({
  apiKey: process.env.IMAGINE_API_KEY,
  // or token: clientToken for browser
});`}
            language="bash / typescript"
          />
        </div>
      </PageHero>

      <Section
        title="Core methods."
      >
        <div className="mt-12 space-y-8">
          <div>
            <h3 className="font-mono text-text-heading">imagine.render()</h3>
            <p className="mt-2 text-sm text-text-body">Trigger a render and await the result. SDK polls for completion.</p>
            <div className="mt-4">
              <CodeBlock
                code={`const result = await imagine.render({
  productId: 'sofa-alto-xl',
  configuration: { fabric: 'boucle-ivory', legs: 'walnut' },
  scene: 'living-room-natural-light',
});
// result.imageUrl, result.id, result.duration`}
              />
            </div>
          </div>
          <div>
            <h3 className="font-mono text-text-heading">imagine.configure()</h3>
            <p className="mt-2 text-sm text-text-body">Validate configuration against product rules. Returns violations if invalid.</p>
          </div>
          <div>
            <h3 className="font-mono text-text-heading">imagine.products.get()</h3>
            <p className="mt-2 text-sm text-text-body">Retrieve product with full option tree, scenes, pricing modifiers.</p>
          </div>
        </div>
      </Section>

      <Section
        tag="React"
        title="React. First-class."
      >
        <div className="mt-12">
          <CodeBlock
            code={`import { useImagineRender } from '@imagine/sdk/react';

function ProductViewer({ productId, configuration }) {
  const { imageUrl, isLoading, error } = useImagineRender(productId, configuration);

  if (isLoading) return <Skeleton />;
  return <img src={imageUrl} alt="Product" />;
}`}
            language="jsx"
          />
        </div>
      </Section>

      <CTASection
        title="Install the SDK and start building."
        primaryCta={{ href: '/developers/docs', label: 'View SDK Reference' }}
        secondaryCta={{ href: '/developers/examples', label: 'See Examples' }}
      />
    </>
  )
}
