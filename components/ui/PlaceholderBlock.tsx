interface PlaceholderBlockProps {
  label?: string
  className?: string
}

export default function PlaceholderBlock({
  label = 'Product visual / demo placeholder',
  className = '',
}: PlaceholderBlockProps) {
  return (
    <div
      className={`flex aspect-video items-center justify-center rounded-prism-200 border border-border-secondary bg-surface-default-secondary text-text-placeholder ${className}`}
    >
      <span className="text-center text-small">{label}</span>
    </div>
  )
}
