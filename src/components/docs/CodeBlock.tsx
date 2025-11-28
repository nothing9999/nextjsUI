'use client'

import React, { useState } from 'react'
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'

interface CodeBlockProps {
   code: string
   language?: string
   showLineNumbers?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
   code,
   language = 'tsx',
   showLineNumbers = false
}) => {
   const [copied, setCopied] = useState(false)

   const copyToClipboard = async () => {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
   }

   const lines = code.split('\n')

   return (
      <div className="relative group">
         <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] border-b-0 rounded-t-lg">
            <span className="text-xs font-mono text-[var(--color-text-muted)] uppercase">
               {language}
            </span>
            <button
               onClick={copyToClipboard}
               className="flex items-center gap-1.5 px-2 py-1 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-neon-primary)] transition-colors rounded"
               aria-label="Copy code"
            >
               {copied ? (
                  <>
                     <CheckIcon className="w-4 h-4" />
                     Copied!
                  </>
               ) : (
                  <>
                     <ClipboardDocumentIcon className="w-4 h-4" />
                     Copy
                  </>
               )}
            </button>
         </div>
         <div className="relative overflow-x-auto border border-[var(--color-border)] rounded-b-lg">
            <pre className="p-4 bg-[var(--color-abyss)] text-sm font-mono leading-relaxed">
               {showLineNumbers ? (
                  <div className="flex">
                     <div className="select-none pr-4 text-[var(--color-text-dim)] text-right border-r border-[var(--color-border)] mr-4">
                        {lines.map((_, i) => (
                           <div key={i}>{i + 1}</div>
                        ))}
                     </div>
                     <code className="text-[var(--color-text-primary)]">{code}</code>
                  </div>
               ) : (
                  <code className="text-[var(--color-text-primary)]">{code}</code>
               )}
            </pre>
         </div>
      </div>
   )
}
