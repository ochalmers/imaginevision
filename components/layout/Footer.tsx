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
    <footer className="border-t border-border-secondary bg-surface-page-secondary">
      <div className="container section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-s-400 text-caption font-semibold tracking-widest uppercase text-text-body">
                {group}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-small text-text-body hover:text-text-heading transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-s-1200 flex flex-col gap-s-400 border-t border-border-secondary pt-s-800 md:flex-row md:items-center md:justify-between">
          <p className="text-small text-text-placeholder">
            Imagine powers configurable commerce.
          </p>
          <div className="flex gap-s-600 text-small text-text-body">
            <a href="https://github.com" className="hover:text-text-heading transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-text-heading transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
