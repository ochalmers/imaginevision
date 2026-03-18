'use client'

import * as React from 'react'
import { Upload } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileUploadProps {
  accept?: string
  multiple?: boolean
  onFileSelect?: (files: FileList | null) => void
  className?: string
  disabled?: boolean
}

export function FileUpload({
  accept,
  multiple,
  onFileSelect,
  className,
  disabled,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          inputRef.current?.click()
        }
      }}
      className={cn(
        'flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-neutral-200 bg-neutral-50/50 px-6 py-8 text-center transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
        onChange={(e) => onFileSelect?.(e.target.files)}
      />
      <Upload className="h-8 w-8 text-neutral-400" />
      <span className="text-sm font-medium text-neutral-600">Click to upload</span>
      <span className="text-xs text-neutral-400">or drag and drop</span>
    </div>
  )
}
