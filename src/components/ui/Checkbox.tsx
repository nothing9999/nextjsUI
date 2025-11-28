'use client'

import { forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
   label?: string
   description?: string
   error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
   ({ className = '', label, description, error, id, ...props }, ref) => {
      const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-')

      return (
         <div className="flex items-start gap-3">
            <div className="flex items-center h-5">
               <input
                  ref={ref}
                  type="checkbox"
                  id={checkboxId}
                  className={`
              w-4 h-4 rounded
              border-2 border-[var(--color-border)]
              bg-[var(--color-deep)]
              text-[var(--color-neon-primary)]
              focus:ring-2 focus:ring-[var(--color-neon-primary)]/20
              focus:ring-offset-0
              transition-colors
              cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
              ${error ? 'border-[var(--color-error)]' : ''}
              ${className}
            `}
                  {...props}
               />
            </div>
            {(label || description) && (
               <div className="flex-1">
                  {label && (
                     <label
                        htmlFor={checkboxId}
                        className="block text-sm font-medium text-[var(--color-text-primary)] cursor-pointer"
                     >
                        {label}
                     </label>
                  )}
                  {description && (
                     <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{description}</p>
                  )}
                  {error && <p className="text-xs text-[var(--color-error)] mt-1">{error}</p>}
               </div>
            )}
         </div>
      )
   }
)

Checkbox.displayName = 'Checkbox'
