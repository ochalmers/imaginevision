'use client'

import { usePathname } from 'next/navigation'
import Nav from './Nav'
import Footer from './Footer'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isConfigurator = pathname?.startsWith('/configurator')
  const isDashboard = pathname?.startsWith('/dashboard')

  if (isConfigurator || isDashboard) {
    return (
      <div className="min-h-screen w-full" style={{ minHeight: '100vh' }}>
        {children}
      </div>
    )
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
