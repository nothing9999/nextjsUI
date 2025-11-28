'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ModalProps {
   isOpen: boolean
   onClose: () => void
   title?: string
   description?: string
   children: ReactNode
   size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
   showCloseButton?: boolean
}

export function Modal({
   isOpen,
   onClose,
   title,
   description,
   children,
   size = 'md',
   showCloseButton = true
}: ModalProps) {
   useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
         if (e.key === 'Escape') onClose()
      }

      if (isOpen) {
         document.addEventListener('keydown', handleEscape)
         document.body.style.overflow = 'hidden'
      }

      return () => {
         document.removeEventListener('keydown', handleEscape)
         document.body.style.overflow = 'unset'
      }
   }, [isOpen, onClose])

   if (!isOpen) return null

   const sizes = {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
      full: 'max-w-full mx-4'
   }

   const modalContent = (
      <div
         className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
         onClick={onClose}
      >
         {/* Backdrop */}
         <div className="absolute inset-0 bg-[var(--color-void)]/80 backdrop-blur-sm" />

         {/* Modal */}
         <div
            className={`
          relative w-full ${sizes[size]}
          bg-[var(--color-surface)] border border-[var(--color-border)]
          rounded-xl shadow-2xl
          animate-slide-up
        `}
            onClick={(e) => e.stopPropagation()}
         >
            {/* Header */}
            {(title || showCloseButton) && (
               <div className="flex items-start justify-between p-4 sm:p-6 border-b border-[var(--color-border)]">
                  <div className="flex-1">
                     {title && (
                        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-text-primary)]">
                           {title}
                        </h2>
                     )}
                     {description && (
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">{description}</p>
                     )}
                  </div>
                  {showCloseButton && (
                     <button
                        onClick={onClose}
                        className="ml-4 p-1 rounded-lg text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-deep)] transition-colors"
                     >
                        <XMarkIcon className="w-5 h-5" />
                     </button>
                  )}
               </div>
            )}

            {/* Content */}
            <div className="p-4 sm:p-6">{children}</div>
         </div>
      </div>
   )

   return createPortal(modalContent, document.body)
}

// ModalFooter component for consistency
interface ModalFooterProps {
   children: ReactNode
}

export function ModalFooter({ children }: ModalFooterProps) {
   return (
      <div className="flex items-center justify-end gap-3 pt-4 mt-4 border-t border-[var(--color-border)]">
         {children}
      </div>
   )
}
