'use client'

import { ReactNode } from 'react'

interface BadgeProps {
   children: ReactNode
   variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
   size?: 'sm' | 'md' | 'lg'
   dot?: boolean
   className?: string
}

export function Badge({
   children,
   variant = 'primary',
   size = 'md',
   dot = false,
   className = ''
}: BadgeProps) {
   const variants = {
      primary:
         'bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)] border-[var(--color-neon-primary)]/30',
      secondary:
         'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)]',
      success:
         'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/30',
      warning:
         'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/30',
      error: 'bg-[var(--color-error)]/10 text-[var(--color-error)] border-[var(--color-error)]/30',
      info: 'bg-[var(--color-info)]/10 text-[var(--color-info)] border-[var(--color-info)]/30'
   }

   const sizes = {
      sm: 'text-[10px] px-1.5 py-0.5',
      md: 'text-xs px-2 py-1',
      lg: 'text-sm px-2.5 py-1'
   }

   const dotColors = {
      primary: 'bg-[var(--color-neon-primary)]',
      secondary: 'bg-[var(--color-text-secondary)]',
      success: 'bg-[var(--color-success)]',
      warning: 'bg-[var(--color-warning)]',
      error: 'bg-[var(--color-error)]',
      info: 'bg-[var(--color-info)]'
   }

   return (
      <span
         className={`
        inline-flex items-center gap-1.5 rounded-full
        border font-medium font-mono
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      >
         {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
         {children}
      </span>
   )
}
