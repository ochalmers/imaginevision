import Link from 'next/link'

const footerLinks = {
  Platform: [
    { href: '/platform', label: 'Overview' },
    { href: '/platform/rendering', label: 'Rendering' },
    { href: '/platform/configuration', label: 'Configuration' },
    { href: '/platform/product-systems', label: 'Product Systems' },
    { href: '/platform/experiences', label: 'Experiences' },
    { href: '/platform/apis', label: 'APIs' },
  ],
  Solutions: [
    { href: '/solutions', label: 'Overview' },
    { href: '/solutions/product-configurators', label: 'Product Configurators' },
    { href: '/solutions/visual-product-pages', label: 'Visual Product Pages' },
    { href: '/solutions/marketing-visualisation', label: 'Marketing Visualisation' },
    { href: '/solutions/product-design', label: 'Product Design' },
  ],
  Industries: [
    { href: '/industries', label: 'Overview' },
    { href: '/industries/furniture', label: 'Furniture' },
    { href: '/industries/mattresses', label: 'Mattresses' },
    { href: '/industries/appliances', label: 'Appliances' },
    { href: '/industries/lighting', label: 'Lighting' },
  ],
  Developers: [
    { href: '/developers', label: 'Overview' },
    { href: '/developers/api', label: 'API' },
    { href: '/developers/docs', label: 'Docs' },
    { href: '/developers/examples', label: 'Examples' },
    { href: '/developers/sdk', label: 'SDK' },
  ],
  Resources: [
    { href: '/resources', label: 'Resources' },
    { href: '/blog', label: 'Blog' },
    { href: '/guides', label: 'Guides' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/product-updates', label: 'Product Updates' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-wire bg-raised">
      <div className="container section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-ash">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ash hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-wire pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-smoke">
            Imagine powers configurable commerce.
          </p>
          <div className="flex gap-6 text-sm text-ash">
            <a href="https://github.com" className="hover:text-ink transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-ink transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
