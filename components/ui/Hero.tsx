import Link from 'next/link'

interface HeroProps {
  tag?: string
  title: string
  subtitle?: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  children?: React.ReactNode
  size?: 'default' | 'compact'
}

export default function Hero({
  tag,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  size = 'default',
}: HeroProps) {
  return (
    <section className={`relative ${size === 'compact' ? 'py-9 pt-28' : 'py-10 pt-32'} md:py-12 md:pt-40`}>
      <div className="container">
        <div className="mx-auto max-w-prose text-center">
          {tag && <p className="section-tag mb-4">{tag}</p>}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-ash md:text-xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn-ghost">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
