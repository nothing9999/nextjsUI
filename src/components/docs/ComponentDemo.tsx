'use client'

import React, { useState } from 'react'
import { CodeBlock } from './CodeBlock'

interface ComponentDemoProps {
   title?: string
   description?: string
   preview: React.ReactNode
   code: string
   language?: string
}

export const ComponentDemo: React.FC<ComponentDemoProps> = ({
   title,
   description,
   preview,
   code,
   language = 'tsx'
}) => {
   const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')

   return (
      <div className="my-8 border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-abyss)]">
         {(title || description) && (
            <div className="px-6 py-4 border-b border-[var(--color-border)]">
               {title && (
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                     {title}
                  </h3>
               )}
               {description && (
                  <p className="text-sm text-[var(--color-text-secondary)]">{description}</p>
               )}
            </div>
         )}

         <div className="border-b border-[var(--color-border)]">
            <div className="flex">
               <button
                  onClick={() => setActiveTab('preview')}
                  className={`
              px-4 py-2.5 text-sm font-medium transition-all duration-200
              ${
                 activeTab === 'preview'
                    ? 'text-[var(--color-neon-primary)] border-b-2 border-[var(--color-neon-primary)] bg-[var(--color-neon-primary)]/5'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
              }
            `}
               >
                  Preview
               </button>
               <button
                  onClick={() => setActiveTab('code')}
                  className={`
              px-4 py-2.5 text-sm font-medium transition-all duration-200
              ${
                 activeTab === 'code'
                    ? 'text-[var(--color-neon-primary)] border-b-2 border-[var(--color-neon-primary)] bg-[var(--color-neon-primary)]/5'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
              }
            `}
               >
                  Code
               </button>
            </div>
         </div>

         <div className="p-6">
            {activeTab === 'preview' ? (
               <div className="flex items-center justify-center min-h-[200px]">{preview}</div>
            ) : (
               <CodeBlock code={code} language={language} />
            )}
         </div>
      </div>
   )
}
