'use client'

import { ReactNode } from 'react'

interface DividerProps {
   orientation?: 'horizontal' | 'vertical'
   variant?: 'solid' | 'dashed' | 'gradient'
   children?: ReactNode
   className?: string
}

export function Divider({
   orientation = 'horizontal',
   variant = 'solid',
   children,
   className = ''
}: DividerProps) {
   const variants = {
      solid: 'border-[var(--color-border)]',
      dashed: 'border-[var(--color-border)] border-dashed',
      gradient:
         'border-0 h-px bg-gradient-to-r from-transparent via-[var(--color-neon-primary)] to-transparent'
   }

   if (orientation === 'vertical') {
      return (
         <div
            className={`
          w-px h-full
          ${
             variant === 'gradient'
                ? 'bg-gradient-to-b from-transparent via-[var(--color-neon-primary)] to-transparent'
                : `border-l ${variants[variant]}`
          }
          ${className}
        `}
         />
      )
   }

   if (children) {
      return (
         <div className={`flex items-center gap-4 my-4 ${className}`}>
            <div
               className={`flex-1 h-px ${
                  variant === 'gradient' ? variants[variant] : `border-t ${variants[variant]}`
               }`}
            />
            <span className="text-sm text-[var(--color-text-muted)]">{children}</span>
            <div
               className={`flex-1 h-px ${
                  variant === 'gradient' ? variants[variant] : `border-t ${variants[variant]}`
               }`}
            />
         </div>
      )
   }

   return (
      <div
         className={`
        w-full
        ${variant === 'gradient' ? variants[variant] : `border-t ${variants[variant]}`}
        ${className}
      `}
      />
   )
}
