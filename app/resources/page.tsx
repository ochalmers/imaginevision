import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        tag="Resources"
        title="Everything you need to understand configurable commerce."
        subtitle="Guides, case studies, product updates, and editorial thinking on the future of physical product commerce."
      />

      <Section
        tag="Featured"
        title="Start here."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { type: 'Guide', title: 'The Configurability Spectrum: Option Architecture for Physical Products', desc: 'A framework for structuring product options, rules, and constraints. Essential reading before you build.', time: '18 min' },
            { type: 'Case Study', title: 'How a Furniture Brand Reduced Returns by 40%', desc: 'Migrated from static photography to real-time rendering. Fewer returns, higher conversion.', time: '8 min' },
            { type: 'Blog', title: 'Why "Add to Cart" Is Not the End of the Configuration Problem', desc: 'The hard problems sit underneath the UI. An argument for configuration as infrastructure.', time: '6 min' },
          ].map((item) => (
            <Link key={item.title} href="#" className="card block">
              <span className="section-tag">{item.type}</span>
              <h3 className="mt-2 text-lg font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
              <p className="mt-4 text-xs text-text-placeholder">{item.time} read</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Browse by type."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="card">
            <h3 className="font-semibold text-text-heading">Blog</h3>
            <p className="mt-2 text-sm text-text-body">Strategy, product thinking, and category analysis.</p>
            <Link href="/blog" className="mt-4 inline-block text-sm text-text-primary">View all posts →</Link>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Guides</h3>
            <p className="mt-2 text-sm text-text-body">Long-form educational content for brands and developers.</p>
            <Link href="/guides" className="mt-4 inline-block text-sm text-text-primary">View all guides →</Link>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Case Studies</h3>
            <p className="mt-2 text-sm text-text-body">Commercial outcomes from brands that have built on Imagine.</p>
            <Link href="/case-studies" className="mt-4 inline-block text-sm text-text-primary">View all case studies →</Link>
          </div>
          <div className="card">
            <h3 className="font-semibold text-text-heading">Product Updates</h3>
            <p className="mt-2 text-sm text-text-body">What the Imagine team has shipped — API, rendering, SDK.</p>
            <Link href="/product-updates" className="mt-4 inline-block text-sm text-text-primary">View all updates →</Link>
          </div>
        </div>
      </Section>

      <Section
        tag="Newsletter"
        title="Stay current on configurable commerce."
        subtitle="New guides, case studies, and product updates — delivered monthly. No noise."
      >
        <form className="mx-auto mt-8 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="form-input"
          />
          <button type="submit" className="btn btn-primary mt-3 w-full">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-text-placeholder">Joined by 3,400+ ecommerce and engineering professionals.</p>
      </Section>
    </>
  )
}
