import PageHero from '@/components/ui/PageHero'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Contact — Imagine',
  description: "Let's talk.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Let's talk."
        subtitle="Whether you're exploring configurable commerce for your brand, building on the platform, or looking to partner — we want to hear from you."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="card">
              <p className="section-tag">For companies</p>
              <h3 className="mt-2 font-semibold text-text-heading">Sales enquiry</h3>
              <p className="mt-2 text-sm text-text-body">
                Interested in Imagine for your products? Talk to our team about what configurable commerce looks like for your brand.
              </p>
              <a href="/contact" className="btn btn-primary mt-4 inline-flex">Request a demo</a>
            </div>
            <div className="card">
              <p className="section-tag">For developers</p>
              <h3 className="mt-2 font-semibold text-text-heading">Developer support</h3>
              <p className="mt-2 text-sm text-text-body">
                Technical questions about the API, SDK, or platform? Reach our developer support team.
              </p>
              <a href="mailto:developer-support@imagine.com" className="mt-4 block text-text-primary hover:underline">developer-support@imagine.com</a>
            </div>
            <div className="card">
              <p className="section-tag">Other</p>
              <h3 className="mt-2 font-semibold text-text-heading">Press, partnerships, other</h3>
              <p className="mt-2 text-sm text-text-body">
                For media enquiries, partnership discussions, or anything else.
              </p>
              <a href="mailto:hello@imagine.com" className="mt-4 block text-text-primary hover:underline">hello@imagine.com</a>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold text-text-heading">Send a message</h2>
            <form className="mt-6 max-w-xl space-y-4">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" type="text" className="form-input" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="company" className="form-label">Company</label>
                <input id="company" type="text" className="form-input" placeholder="Company name" />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" type="email" className="form-input" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="type" className="form-label">Enquiry type</label>
                <select id="type" className="form-input">
                  <option>Sales</option>
                  <option>Developer</option>
                  <option>Partnership</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows={4} className="form-input" placeholder="Tell us what you're looking for..." />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
