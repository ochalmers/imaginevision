'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/developers', label: 'Developers' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'Company' },
]

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-wire/50 bg-canvas/90 backdrop-blur-md">
      <nav className="container flex h-full items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight text-ink">
          Imagine
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-sm ${
                  (link.href === '/about'
                    ? ['/about', '/careers', '/contact'].includes(pathname || '')
                    : pathname?.startsWith(link.href))
                    ? 'text-ink'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-primary hidden md:inline-flex"
          >
            Request a demo
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-ink transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-ink transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-ink transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-wire bg-canvas p-6 md:hidden">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-lg text-ink hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary inline-flex"
              >
                Request a demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
