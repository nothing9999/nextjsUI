'use client'

import { ReactNode } from 'react'

interface SkeletonProps {
   variant?: 'text' | 'circular' | 'rectangular'
   width?: string | number
   height?: string | number
   className?: string
}

export function Skeleton({ variant = 'text', width, height, className = '' }: SkeletonProps) {
   const variants = {
      text: 'rounded h-4',
      circular: 'rounded-full',
      rectangular: 'rounded-lg'
   }

   return (
      <div
         className={`
        bg-[var(--color-surface)]/50
        animate-pulse
        ${variants[variant]}
        ${className}
      `}
         style={{
            width: width || (variant === 'circular' ? height : '100%'),
            height: height || (variant === 'text' ? undefined : '100%')
         }}
      />
   )
}

// Skeleton presets for common use cases
export function SkeletonCard() {
   return (
      <div className="p-6 border border-[var(--color-border)] rounded-lg space-y-4">
         <Skeleton variant="rectangular" height="200px" />
         <Skeleton width="60%" />
         <Skeleton width="80%" />
         <Skeleton width="40%" />
      </div>
   )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
   return (
      <div className="space-y-2">
         {Array.from({ length: lines }).map((_, i) => (
            <Skeleton key={i} width={i === lines - 1 ? '60%' : '100%'} />
         ))}
      </div>
   )
}
