'use client'

interface SpinnerProps {
   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   variant?: 'primary' | 'secondary'
}

export function Spinner({ size = 'md', variant = 'primary' }: SpinnerProps) {
   const sizes = {
      xs: 'w-3 h-3 border',
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-2',
      xl: 'w-12 h-12 border-[3px]'
   }

   const variants = {
      primary: 'border-[var(--color-neon-primary)] border-t-transparent',
      secondary: 'border-[var(--color-text-muted)] border-t-transparent'
   }

   return (
      <div
         className={`
        ${sizes[size]}
        ${variants[variant]}
        rounded-full
        animate-spin
      `}
      />
   )
}
