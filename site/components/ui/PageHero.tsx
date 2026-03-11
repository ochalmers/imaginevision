import Link from 'next/link'

interface PageHeroProps {
  tag?: string
  title: string
  subtitle?: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  children?: React.ReactNode
  align?: 'center' | 'left'
}

export default function PageHero({
  tag,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  align = 'center',
}: PageHeroProps) {
  const alignClass = align === 'left' ? 'text-left max-w-prose' : 'text-center mx-auto max-w-prose'

  return (
    <section className="py-9 pt-28 md:py-12 md:pt-40">
      <div className="container">
        <div className={alignClass}>
          {tag && <p className="section-tag mb-4">{tag}</p>}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-ash">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={`mt-8 flex flex-wrap gap-3 ${align === 'left' ? '' : 'justify-center'}`}>
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
