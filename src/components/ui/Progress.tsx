'use client'

interface ProgressProps {
   value: number
   max?: number
   variant?: 'primary' | 'success' | 'warning' | 'error'
   size?: 'sm' | 'md' | 'lg'
   showLabel?: boolean
   label?: string
}

export function Progress({
   value,
   max = 100,
   variant = 'primary',
   size = 'md',
   showLabel = false,
   label
}: ProgressProps) {
   const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

   const variants = {
      primary: 'bg-[var(--color-neon-primary)]',
      success: 'bg-[var(--color-success)]',
      warning: 'bg-[var(--color-warning)]',
      error: 'bg-[var(--color-error)]'
   }

   const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
   }

   return (
      <div className="w-full">
         {(showLabel || label) && (
            <div className="flex items-center justify-between mb-2">
               <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {label || 'Progress'}
               </span>
               {showLabel && (
                  <span className="text-sm font-mono text-[var(--color-text-muted)]">
                     {percentage.toFixed(0)}%
                  </span>
               )}
            </div>
         )}
         <div
            className={`w-full bg-[var(--color-border)] rounded-full overflow-hidden ${sizes[size]}`}
         >
            <div
               className={`${sizes[size]} ${variants[variant]} transition-all duration-300 ease-out rounded-full`}
               style={{ width: `${percentage}%` }}
            />
         </div>
      </div>
   )
}
