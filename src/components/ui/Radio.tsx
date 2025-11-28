'use client'

import { forwardRef, InputHTMLAttributes } from 'react'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
   label?: string
   description?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
   ({ className = '', label, description, id, ...props }, ref) => {
      const radioId = id || label?.toLowerCase().replace(/\s+/g, '-')

      return (
         <div className="flex items-start gap-3">
            <div className="flex items-center h-5">
               <input
                  ref={ref}
                  type="radio"
                  id={radioId}
                  className={`
              w-4 h-4 rounded-full
              border-2 border-[var(--color-border)]
              bg-[var(--color-deep)]
              text-[var(--color-neon-primary)]
              focus:ring-2 focus:ring-[var(--color-neon-primary)]/20
              focus:ring-offset-0
              transition-colors
              cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `}
                  {...props}
               />
            </div>
            {(label || description) && (
               <div className="flex-1">
                  {label && (
                     <label
                        htmlFor={radioId}
                        className="block text-sm font-medium text-[var(--color-text-primary)] cursor-pointer"
                     >
                        {label}
                     </label>
                  )}
                  {description && (
                     <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{description}</p>
                  )}
               </div>
            )}
         </div>
      )
   }
)

Radio.displayName = 'Radio'

// RadioGroup component
interface RadioGroupProps {
   children: React.ReactNode
   label?: string
   error?: string
}

export function RadioGroup({ children, label, error }: RadioGroupProps) {
   return (
      <div className="space-y-3">
         {label && (
            <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
               {label}
            </label>
         )}
         <div className="space-y-2">{children}</div>
         {error && <p className="text-xs text-[var(--color-error)] mt-1">{error}</p>}
      </div>
   )
}
