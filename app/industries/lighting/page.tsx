import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'
import CTASection from '@/components/ui/CTASection'

export const metadata = {
  title: 'Lighting - Imagine',
  description: 'See every fixture in context. In every finish. Imagine renders lighting in the rooms where buyers make decisions.',
}

export default function LightingPage() {
  return (
    <>
      <PageHero
        tag="Industries / Lighting"
        title="See it in context. In every finish."
        subtitle="Lighting brands sell emotion as much as specification. Imagine gives you the infrastructure to show every fixture in the right room, in every finish, at every scale — without a photoshoot for every combination."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/platform/rendering', label: 'See how it works' }}
      />

      <Section
        tag="Challenges"
        title="The challenges lighting brands know well."
      >
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Context photography is expensive', desc: "A pendant in brass looks different in a kitchen vs dining room, 3m vs 5m ceiling. Traditional photography can't cover every fixture, finish, and room type." },
            { title: 'Finish variants multiply the visual burden', desc: '8 finishes × 3 room contexts = 24 images per fixture. Add cable length and shade options and the matrix explodes.' },
            { title: 'Trade channel needs specification tools', desc: 'Architects specify lighting early. They need a tool to see a fixture in a room, change finish, and generate a spec document.' },
            { title: 'Warmth and colour temperature', desc: '2700K and 4000K are different. Static photography captures one. Buyers make the wrong choice.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Built for the visual complexity of light."
      >
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { title: 'In-room contextual rendering', desc: 'Fixtures placed in photorealistic room contexts. Shadow direction, light cast, ceiling height respond to fixture geometry.' },
            { title: 'Finish variants at scale', desc: 'Define finish library once. Imagine renders every product in every finish. Launch a new finish across your catalog in hours.' },
            { title: 'Colour temperature visualisation', desc: 'Render the light cast, not just the fixture. Toggle 2700K, 3000K, 4000K to show how light transforms a room.' },
            { title: 'Specification sheet generation', desc: 'Generate trade-ready spec documents from any saved configuration — rendered context, dimensions, finish, electrical spec.' },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-semibold text-text-heading">{item.title}</h3>
              <p className="mt-2 text-sm text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tag="Proof"
        title="Trusted by lighting brands."
      >
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="stat-value">34%</p>
            <p className="stat-label">Reduction in returns on configurable lighting products</p>
          </div>
          <div className="text-center">
            <p className="stat-value">8×</p>
            <p className="stat-label">Faster time-to-market for finish variant launches</p>
          </div>
          <div className="text-center">
            <p className="stat-value">40+</p>
            <p className="stat-label">Room contexts available out of the box</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to show your fixtures the way they deserve to be seen?"
        subtitle="Request a demo and see your products in Imagine's rendering engine."
        primaryCta={{ href: '/contact', label: 'Request a demo' }}
        secondaryCta={{ href: '/contact', label: 'Talk to sales' }}
      />
    </>
  )
}
