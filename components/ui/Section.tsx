interface SectionProps {
  tag?: string
  title?: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
  size?: 'default' | 'sm'
}

export default function Section({
  tag,
  title,
  subtitle,
  children,
  className = '',
  size = 'default',
}: SectionProps) {
  return (
    <section className={`${size === 'sm' ? 'section-sm' : 'section'} ${className}`}>
      <div className="container">
        {(tag || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-prose text-center">
            {tag && <p className="section-tag mb-4">{tag}</p>}
            {title && (
              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-ink md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-ash md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
