'use client'

import { ReactNode } from 'react'

interface AvatarProps {
   src?: string
   alt?: string
   fallback?: string
   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
   status?: 'online' | 'offline' | 'busy' | 'away'
}

export function Avatar({ src, alt = '', fallback, size = 'md', status }: AvatarProps) {
   const sizes = {
      xs: 'w-6 h-6 text-[10px]',
      sm: 'w-8 h-8 text-xs',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-16 h-16 text-lg',
      '2xl': 'w-20 h-20 text-xl'
   }

   const statusColors = {
      online: 'bg-[var(--color-success)]',
      offline: 'bg-[var(--color-text-dim)]',
      busy: 'bg-[var(--color-error)]',
      away: 'bg-[var(--color-warning)]'
   }

   const statusSizes = {
      xs: 'w-1.5 h-1.5 border',
      sm: 'w-2 h-2 border',
      md: 'w-2.5 h-2.5 border-2',
      lg: 'w-3 h-3 border-2',
      xl: 'w-3.5 h-3.5 border-2',
      '2xl': 'w-4 h-4 border-2'
   }

   return (
      <div className="relative inline-block">
         <div
            className={`
          ${sizes[size]}
          rounded-full overflow-hidden
          bg-gradient-to-br from-cyan-500 to-blue-500
          border-2 border-[var(--color-border)]
          flex items-center justify-center
          font-semibold text-white
        `}
         >
            {src ? (
               <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
               <span>{fallback || alt.charAt(0).toUpperCase()}</span>
            )}
         </div>
         {status && (
            <span
               className={`
            absolute bottom-0 right-0 rounded-full
            border-[var(--color-surface)]
            ${statusColors[status]}
            ${statusSizes[size]}
          `}
            />
         )}
      </div>
   )
}

// AvatarGroup component
interface AvatarGroupProps {
   children: ReactNode
   max?: number
   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export function AvatarGroup({ children, max = 3, size = 'md' }: AvatarGroupProps) {
   const childrenArray = Array.isArray(children) ? children : [children]
   const displayedChildren = childrenArray.slice(0, max)
   const remaining = childrenArray.length - max

   return (
      <div className="flex -space-x-2">
         {displayedChildren}
         {remaining > 0 && <Avatar fallback={`+${remaining}`} size={size} />}
      </div>
   )
}
