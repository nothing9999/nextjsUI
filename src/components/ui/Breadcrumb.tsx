'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
   label: string
   href?: string
}

interface BreadcrumbProps {
   items: BreadcrumbItem[]
   separator?: ReactNode
   showHome?: boolean
}

export function Breadcrumb({
   items,
   separator = <ChevronRightIcon className="w-4 h-4" />,
   showHome = true
}: BreadcrumbProps) {
   return (
      <nav className="flex items-center gap-2 text-sm">
         {showHome && (
            <>
               <Link
                  href="/"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-neon-primary)] transition-colors"
               >
                  <HomeIcon className="w-4 h-4" />
               </Link>
               <span className="text-[var(--color-text-dim)]">{separator}</span>
            </>
         )}

         {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
               <div key={index} className="flex items-center gap-2">
                  {item.href && !isLast ? (
                     <Link
                        href={item.href}
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-neon-primary)] transition-colors"
                     >
                        {item.label}
                     </Link>
                  ) : (
                     <span
                        className={
                           isLast
                              ? 'text-[var(--color-text-primary)] font-medium'
                              : 'text-[var(--color-text-muted)]'
                        }
                     >
                        {item.label}
                     </span>
                  )}
                  {!isLast && <span className="text-[var(--color-text-dim)]">{separator}</span>}
               </div>
            )
         })}
      </nav>
   )
}
