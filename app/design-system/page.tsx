import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function DesignSystemPage() {
  return (
    <>
      <PageHero
        tag="ImagineDS"
        title="Imagine Design System"
        subtitle="Prism tokens, typography, logos, and implementation guides."
        primaryCta={{
          href: '/ImagineDS/Design-System-Tokens-Report.html',
          label: 'View tokens report',
        }}
        secondaryCta={{
          href: '/ImagineDS/prism-setup/index.html',
          label: 'Prism setup',
        }}
      />

      <Section title="Resources">
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Design tokens report"
            description="Full specification of colors, typography, spacing, and shadows."
            href="/ImagineDS/Design-System-Tokens-Report.html"
          />
          <Card
            title="Prism setup"
            description="Implementation guide and setup examples."
            href="/ImagineDS/prism-setup/index.html"
          />
          <a
            href="/ImagineDS/Logos/Horizontal%20Light.png"
            target="_blank"
            rel="noopener noreferrer"
            className="card block transition-all hover:border-border-primary-subtle"
          >
            <h3 className="text-h5 font-semibold text-text-heading">Logos</h3>
            <p className="mt-s-200 text-small leading-relaxed text-text-body">
              Horizontal and vertical logo variants (PNG).
            </p>
            <span className="mt-s-400 inline-flex items-center text-small font-medium text-text-primary">
              View sample
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
          <a
            href="https://github.com/ochalmers/imaginevision/tree/main/public/ImagineDS"
            target="_blank"
            rel="noopener noreferrer"
            className="card block transition-all hover:border-border-primary-subtle"
          >
            <h3 className="text-h5 font-semibold text-text-heading">Source on GitHub</h3>
            <p className="mt-s-200 text-small leading-relaxed text-text-body">
              Browse the full ImagineDS folder in the repo.
            </p>
            <span className="mt-s-400 inline-flex items-center text-small font-medium text-text-primary">
              Open repo
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </Section>
    </>
  )
}
