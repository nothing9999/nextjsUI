'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface PaginationProps {
   currentPage: number
   totalPages: number
   onPageChange: (page: number) => void
   showFirstLast?: boolean
   maxVisible?: number
}

export function Pagination({
   currentPage,
   totalPages,
   onPageChange,
   showFirstLast = true,
   maxVisible = 5
}: PaginationProps) {
   const getPageNumbers = () => {
      const pages: (number | string)[] = []
      const halfVisible = Math.floor(maxVisible / 2)

      let startPage = Math.max(1, currentPage - halfVisible)
      let endPage = Math.min(totalPages, currentPage + halfVisible)

      if (currentPage <= halfVisible) {
         endPage = Math.min(maxVisible, totalPages)
      }

      if (currentPage > totalPages - halfVisible) {
         startPage = Math.max(1, totalPages - maxVisible + 1)
      }

      if (startPage > 1) {
         pages.push(1)
         if (startPage > 2) pages.push('...')
      }

      for (let i = startPage; i <= endPage; i++) {
         pages.push(i)
      }

      if (endPage < totalPages) {
         if (endPage < totalPages - 1) pages.push('...')
         pages.push(totalPages)
      }

      return pages
   }

   return (
      <nav className="flex items-center gap-1">
         {/* Previous */}
         <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
         >
            <ChevronLeftIcon className="w-4 h-4" />
         </button>

         {/* Page numbers */}
         {getPageNumbers().map((page, index) => {
            if (page === '...') {
               return (
                  <span
                     key={`ellipsis-${index}`}
                     className="px-3 py-2 text-[var(--color-text-dim)]"
                  >
                     ...
                  </span>
               )
            }

            return (
               <button
                  key={page}
                  onClick={() => onPageChange(page as number)}
                  className={`
              min-w-[2.5rem] px-3 py-2 rounded-lg
              font-medium text-sm
              border transition-colors
              ${
                 currentPage === page
                    ? 'bg-[var(--color-neon-primary)] border-[var(--color-neon-primary)] text-white'
                    : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30'
              }
            `}
               >
                  {page}
               </button>
            )
         })}

         {/* Next */}
         <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-neon-primary)] hover:border-[var(--color-neon-primary)]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
         >
            <ChevronRightIcon className="w-4 h-4" />
         </button>
      </nav>
   )
}
