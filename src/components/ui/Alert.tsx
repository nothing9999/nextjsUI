'use client'

import { ReactNode } from 'react'
import {
   CheckCircleIcon,
   ExclamationTriangleIcon,
   InformationCircleIcon,
   XCircleIcon,
   XMarkIcon
} from '@heroicons/react/24/outline'

interface AlertProps {
   children: ReactNode
   variant?: 'info' | 'success' | 'warning' | 'error'
   title?: string
   onClose?: () => void
}

export function Alert({ children, variant = 'info', title, onClose }: AlertProps) {
   const variants = {
      info: {
         bg: 'bg-[var(--color-info)]/10',
         border: 'border-[var(--color-info)]/30',
         text: 'text-[var(--color-info)]',
         icon: InformationCircleIcon
      },
      success: {
         bg: 'bg-[var(--color-success)]/10',
         border: 'border-[var(--color-success)]/30',
         text: 'text-[var(--color-success)]',
         icon: CheckCircleIcon
      },
      warning: {
         bg: 'bg-[var(--color-warning)]/10',
         border: 'border-[var(--color-warning)]/30',
         text: 'text-[var(--color-warning)]',
         icon: ExclamationTriangleIcon
      },
      error: {
         bg: 'bg-[var(--color-error)]/10',
         border: 'border-[var(--color-error)]/30',
         text: 'text-[var(--color-error)]',
         icon: XCircleIcon
      }
   }

   const { bg, border, text, icon: Icon } = variants[variant]

   return (
      <div
         className={`
        relative rounded-lg p-4 border
        ${bg} ${border}
      `}
      >
         <div className="flex items-start gap-3">
            <Icon className={`w-5 h-5 flex-shrink-0 ${text}`} />
            <div className="flex-1 min-w-0">
               {title && <h3 className={`text-sm font-semibold ${text} mb-1`}>{title}</h3>}
               <div className="text-sm text-[var(--color-text-secondary)]">{children}</div>
            </div>
            {onClose && (
               <button
                  onClick={onClose}
                  className="flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
               >
                  <XMarkIcon className="w-4 h-4 text-[var(--color-text-muted)]" />
               </button>
            )}
         </div>
      </div>
   )
}
