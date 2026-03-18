import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Blog — Imagine',
  description: 'Thinking on configurable commerce.',
}

export default function BlogPage() {
  const posts = [
    { category: 'Strategy', title: 'Why "Add to Cart" Is Not the End of the Configuration Problem', excerpt: 'The hard problems sit underneath the UI layer.', time: '6 min', date: 'March 2026' },
    { category: 'Product', title: 'How We Built the Render Engine: Speed, Fidelity, and Tradeoffs', excerpt: 'Engineering decisions behind our render pipeline.', time: '8 min', date: 'Feb 2026' },
    { category: 'Industry', title: 'Configurable Commerce Is a Supply Chain Problem', excerpt: 'Most configurators fail because they start with the UI instead of the catalog.', time: '7 min', date: 'Feb 2026' },
    { category: 'Strategy', title: 'The Option Architecture Problem: Why Most Configurators Have Too Many Choices', excerpt: 'A framework for progressive disclosure in configurable product design.', time: '5 min', date: 'Jan 2026' },
    { category: 'Company', title: 'Why We Started with the API, Not the Interface', excerpt: 'Imagine\'s founding decision to build infrastructure rather than an application.', time: '4 min', date: 'Jan 2026' },
  ]

  return (
    <>
      <PageHero
        tag="Blog"
        title="Thinking on configurable commerce."
        subtitle="Strategy, product, and infrastructure thinking from the team building the platform. Published when we have something worth saying."
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <div className="border-b border-border-secondary py-6">
            <span className="section-tag">Featured</span>
            <h2 className="mt-2 text-2xl font-semibold text-text-heading">
              Why "Add to Cart" Is Not the End of the Configuration Problem
            </h2>
            <p className="mt-2 text-text-body">
              Most configurators solve the UI layer. The harder problems — constraint logic, render accuracy, order integrity — sit underneath. An argument for configuration as infrastructure.
            </p>
            <p className="mt-4 text-sm text-text-placeholder">Strategy · 6 min · March 2026</p>
          </div>
          <div className="divide-y divide-wire">
            {posts.slice(1).map((post) => (
              <Link key={post.title} href="#" className="block py-6 hover:opacity-80">
                <span className="section-tag">{post.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-text-heading">{post.title}</h3>
                <p className="mt-1 text-sm text-text-body">{post.excerpt}</p>
                <p className="mt-2 text-xs text-text-placeholder">{post.time} · {post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
