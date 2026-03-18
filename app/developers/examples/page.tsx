import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import CodeBlock from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Examples — Imagine',
  description: 'Working code examples across every major use case.',
}

export default function DevelopersExamplesPage() {
  return (
    <>
      <PageHero
        tag="Examples"
        title="See it working. Use it immediately."
        subtitle="Working code examples across every major use case. Each one is forkable, sandbox-ready, and built on real Imagine API calls."
        primaryCta={{ href: 'https://github.com', label: 'Open GitHub Repo' }}
      >
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-text-body">
          <span>8 working examples</span>
          <span>React, Next.js, Node.js</span>
          <span>Fork and deploy in under 5 minutes</span>
        </div>
      </PageHero>

      <Section
        title="Example projects."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Interactive Product Configurator', stack: 'React, @imagine/sdk, Vite', desc: 'Full configuration UI with live renders and option constraint logic.' },
            { title: 'Visual PDP with SSR', stack: 'Next.js 14, TypeScript', desc: 'Product detail page with server-rendered default and client-side config.' },
            { title: 'Batch Render Pipeline', stack: 'Node.js, csv-parse', desc: 'Render an entire catalog programmatically from CSV.' },
            { title: 'Webhook Handler', stack: 'Express, @imagine/sdk', desc: 'Receive, verify, and process render completion events.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <div className="flex flex-wrap gap-2">
                {item.stack.split(', ').map((s) => (
                  <span key={s} className="rounded border border-border-secondary px-2 py-0.5 text-xs text-text-body">{s}</span>
                ))}
              </div>
              <h3 className="mt-3 font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
              <div className="mt-4 flex gap-2">
                <Link href="#" className="btn btn-sm btn-secondary">Open in Sandbox</Link>
                <Link href="#" className="btn btn-sm btn-ghost">View on GitHub</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Code highlight"
        title="Configurator with React hooks."
      >
        <div className="mt-12">
          <CodeBlock
            code={`import { useImagineRender, useImagineOptions } from '@imagine/sdk/react';

function Configurator({ productId }) {
  const { options, setOption, configuration } = useImagineOptions(productId);
  const { imageUrl, isLoading } = useImagineRender(productId, configuration);

  return (
    <div>
      <RenderViewer src={imageUrl} loading={isLoading} />
      <OptionsPanel options={options} onChange={setOption} />
    </div>
  );
}`}
            language="jsx"
          />
        </div>
      </Section>
    </>
  )
}
