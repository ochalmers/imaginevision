'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@/lib/utils'

interface FormFieldContextValue {
  id: string
  error?: string
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

function useFormField() {
  const context = React.useContext(FormFieldContext)
  return context
}

const FormField = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    id?: string
    error?: string
  }
>(({ id: idProp, error, className, children, ...props }, ref) => {
  const id = React.useId()
  const fieldId = idProp ?? id
  return (
    <FormFieldContext.Provider value={{ id: fieldId, error }}>
      <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...props}>
        {children}
      </div>
    </FormFieldContext.Provider>
  )
})
FormField.displayName = 'FormField'

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { id, error } = useFormField() ?? {}
  return (
    <LabelPrimitive.Root
      ref={ref}
      htmlFor={id}
      className={cn(
        'text-xs font-medium leading-4 text-neutral-700',
        error && 'text-red-600',
        className
      )}
      {...props}
    />
  )
})
FormLabel.displayName = 'FormLabel'

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error } = useFormField() ?? {}
  if (!error && !children) return null
  return (
    <p
      ref={ref}
      className={cn('text-xs text-neutral-500', error && 'text-red-600', className)}
      {...props}
    >
      {error ?? children}
    </p>
  )
})
FormMessage.displayName = 'FormMessage'

export { FormField, FormLabel, FormMessage, useFormField }
