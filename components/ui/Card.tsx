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
      <h3 className="text-h5 font-semibold text-text-heading">{title}</h3>
      {description && <p className="mt-s-200 text-small leading-relaxed text-text-body">{description}</p>}
      {children}
      {href && (
        <span className="mt-s-400 inline-flex items-center text-small font-medium text-text-primary">
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
      <Link href={href} className="card block transition-all hover:border-border-primary-subtle">
        {content}
      </Link>
    )
  }

  return <div className="card">{content}</div>
}
