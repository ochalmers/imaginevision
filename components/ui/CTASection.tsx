import Link from 'next/link'

interface CTASectionProps {
  title: string
  subtitle?: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
}

export default function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="section border-t border-wire bg-raised">
      <div className="container text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-4 max-w-prose text-ash">{subtitle}</p>}
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
      </div>
    </section>
  )
}
