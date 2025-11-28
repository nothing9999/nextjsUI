'use client'

import { forwardRef, SelectHTMLAttributes } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
   label?: string
   error?: string
   hint?: string
   options: Array<{ value: string; label: string }>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
   ({ className = '', label, error, hint, options, id, ...props }, ref) => {
      const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')

      return (
         <div className="w-full">
            {label && (
               <label
                  htmlFor={selectId}
                  className="block text-xs sm:text-sm font-medium text-[var(--color-text-secondary)] mb-1.5 sm:mb-2"
               >
                  {label}
               </label>
            )}
            <div className="relative">
               <select
                  ref={ref}
                  id={selectId}
                  className={`
              w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 rounded-lg
              appearance-none
              bg-[var(--color-deep)]
              border border-[var(--color-border)]
              text-[var(--color-text-primary)]
              font-mono text-xs sm:text-sm
              transition-all duration-200
              hover:border-[var(--color-border-subtle)]
              focus:outline-none focus:border-[var(--color-neon-primary)]
              focus:ring-2 focus:ring-[var(--color-neon-primary)]/20
              disabled:opacity-50 disabled:cursor-not-allowed
              cursor-pointer
              ${
                 error
                    ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20'
                    : ''
              }
              ${className}
            `}
                  {...props}
               >
                  {options.map((option) => (
                     <option key={option.value} value={option.value}>
                        {option.label}
                     </option>
                  ))}
               </select>
               <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none" />
            </div>
            {hint && !error && (
               <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[var(--color-text-dim)] font-mono">
                  {hint}
               </p>
            )}
            {error && (
               <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[var(--color-error)] flex items-center gap-1">
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                     <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                     />
                  </svg>
                  {error}
               </p>
            )}
         </div>
      )
   }
)

Select.displayName = 'Select'
