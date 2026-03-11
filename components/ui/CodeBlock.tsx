interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <div className="code-block overflow-x-auto">
      {language && (
        <span className="mb-2 block text-xs text-smoke">{language}</span>
      )}
      <pre className="m-0 text-sm">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}
