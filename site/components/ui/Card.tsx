import Link from 'next/link'

interface CardProps {
  tag?: string
  title: string
  description?: string
  href?: string
  children?: React.ReactNode
}

export default function Card({ tag, title, description, href, children }: CardProps) {
  const content = (
    <>
      {tag && <p className="section-tag mb-2">{tag}</p>}
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-ash">{description}</p>}
      {children}
      {href && (
        <span className="mt-4 inline-flex items-center text-sm font-medium text-accent">
          Learn more
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className="card block transition-all hover:border-surface-alt">
        {content}
      </Link>
    )
  }

  return <div className="card">{content}</div>
}
