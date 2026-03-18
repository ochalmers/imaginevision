import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Careers — Imagine',
  description: 'Build the platform that changes how brands sell configurable products.',
}

export default function CareersPage() {
  const roles = [
    { title: 'Senior Backend Engineer — API Platform', team: 'Engineering', location: 'Remote (EU / US)' },
    { title: 'Rendering Engineer', team: 'Engineering', location: 'Remote' },
    { title: 'Frontend Engineer — SDK and Components', team: 'Engineering', location: 'Remote' },
    { title: 'Product Manager — Developer Platform', team: 'Product', location: 'Remote' },
    { title: 'Solutions Engineer', team: 'Commercial', location: 'Remote (EU / US)' },
    { title: 'Product Designer — Configuration and Commerce UI', team: 'Design', location: 'Remote' },
  ]

  return (
    <>
      <PageHero
        tag="Careers"
        title="Work on something worth building."
        subtitle="Imagine is building the infrastructure for configurable commerce. We are early, intentional, and hiring."
        primaryCta={{ href: '#roles', label: 'See open roles' }}
      >
        <p className="mt-6 text-sm text-text-placeholder">Fully remote · EU/US timezone friendly</p>
      </PageHero>

      <Section
        tag="Why Imagine"
        title="Three reasons people join us."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { title: 'A real infrastructure problem', desc: 'Most software builds better versions of existing things. Imagine builds infrastructure that does not exist at the level the problem deserves.' },
            { title: 'A platform you can be proud of', desc: 'The API is designed with care. Clean endpoints, predictable errors, first-class TypeScript. API quality matters here.' },
            { title: 'A team that works well and ships', desc: 'Small enough that every person\'s judgment shapes the product. Async by default, communicate in writing, high standard without high stress.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Open Roles"
        title="Open roles."
        subtitle="We hire for a small number of roles at a time and take each one seriously."
      >
        <div id="roles" className="mt-12 space-y-4">
          {roles.map((role) => (
            <Link
              key={role.title}
              href="#"
              className="block rounded-lg border border-border-secondary bg-surface p-6 transition-colors hover:border-border-primary-subtle"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-text-heading">{role.title}</h3>
                  <p className="mt-1 text-sm text-text-body">{role.team} · {role.location}</p>
                </div>
                <span className="text-sm text-text-primary">View role →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 card">
          <h3 className="font-semibold text-text-heading">Open Application</h3>
          <p className="mt-2 text-sm text-text-body">Not listed above but think you belong here?</p>
          <Link href="/contact" className="mt-4 inline-block text-text-primary hover:underline">Send an open application →</Link>
        </div>
      </Section>

      <Section
        tag="How we work"
        title="How we work."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            'Remote and async by default — write things down, meetings for decisions and connection',
            'Small team, large scope — everyone owns something real',
            'Direct feedback, no politics — honest feedback expected',
            'Time to think — protect time for deep work',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-border-secondary bg-surface px-4 py-3">
              <p className="text-sm text-text-body">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
