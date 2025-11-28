'use client'

import { useState } from 'react'

interface SwitchProps {
   checked?: boolean
   onChange?: (checked: boolean) => void
   label?: string
   description?: string
   disabled?: boolean
   size?: 'sm' | 'md' | 'lg'
}

export function Switch({
   checked = false,
   onChange,
   label,
   description,
   disabled = false,
   size = 'md'
}: SwitchProps) {
   const [isChecked, setIsChecked] = useState(checked)

   const handleToggle = () => {
      if (disabled) return
      const newValue = !isChecked
      setIsChecked(newValue)
      onChange?.(newValue)
   }

   const sizes = {
      sm: { switch: 'w-9 h-5', toggle: 'w-4 h-4', translate: 'translate-x-4' },
      md: { switch: 'w-11 h-6', toggle: 'w-5 h-5', translate: 'translate-x-5' },
      lg: { switch: 'w-14 h-7', toggle: 'w-6 h-6', translate: 'translate-x-7' }
   }

   return (
      <div className="flex items-start gap-3">
         <button
            type="button"
            role="switch"
            aria-checked={isChecked}
            onClick={handleToggle}
            disabled={disabled}
            className={`
          relative inline-flex items-center rounded-full
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-[var(--color-neon-primary)]/20 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${sizes[size].switch}
          ${isChecked ? 'bg-[var(--color-neon-primary)]' : 'bg-[var(--color-border-subtle)]'}
        `}
         >
            <span
               className={`
            inline-block rounded-full bg-white shadow-lg
            transform transition-transform duration-200 ease-in-out
            ${sizes[size].toggle}
            ${isChecked ? sizes[size].translate : 'translate-x-1'}
          `}
            />
         </button>
         {(label || description) && (
            <div className="flex-1">
               {label && (
                  <label className="block text-sm font-medium text-[var(--color-text-primary)] cursor-pointer">
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
