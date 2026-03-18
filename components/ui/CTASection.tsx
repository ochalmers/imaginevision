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
    <section className="section border-t border-border-secondary bg-surface-page-secondary">
      <div className="container text-center">
        <h2 className="text-h4 md:text-h3 font-semibold text-text-heading">
          {title}
        </h2>
        {subtitle && <p className="mx-auto mt-s-400 max-w-prose text-text-body">{subtitle}</p>}
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
