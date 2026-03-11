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
      className={`flex aspect-video items-center justify-center rounded-lg border border-wire bg-surface-alt text-smoke ${className}`}
    >
      <span className="text-center text-sm">{label}</span>
    </div>
  )
}
