'use client'

import { useState } from 'react'
import { Pagination } from '@/components/ui/Pagination'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function PaginationDocs() {
   const [currentPage, setCurrentPage] = useState(1)

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Pagination
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Pagination component for navigating through pages of content with ellipsis support.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#controlled" className="text-[var(--color-neon-primary)] hover:underline">
               Controlled
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Pagination } from '@/components/ui/Pagination';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex flex-col gap-4">
                  <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
                  <p className="text-sm text-[var(--color-text-muted)]">
                     10 total pages with Previous/Next buttons
                  </p>
               </div>
               <CodeBlock
                  code={`<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Controlled Example */}
         <section id="controlled" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Controlled Example
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Pagination
                     currentPage={currentPage}
                     totalPages={20}
                     onPageChange={setCurrentPage}
                  />
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Current page:{' '}
                     <code className="text-[var(--color-neon-primary)]">{currentPage}</code> / 20
                  </p>
               </div>
               <CodeBlock
                  code={`const [currentPage, setCurrentPage] = useState(1);

<Pagination 
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Ellipsis */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Ellipsis</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Pagination
                     currentPage={5}
                     totalPages={50}
                     onPageChange={() => {}}
                     maxVisible={5}
                  />
                  <p className="text-sm text-[var(--color-text-muted)]">
                     Shows ellipsis (...) when there are many pages
                  </p>
               </div>
               <CodeBlock
                  code={`<Pagination 
  currentPage={5}
  totalPages={50}
  onPageChange={handlePageChange}
  maxVisible={5} // Show max 5 page numbers
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Custom Max Visible */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Custom Max Visible
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <div>
                     <p className="text-sm text-[var(--color-text-muted)] mb-2">maxVisible={3}</p>
                     <Pagination
                        currentPage={10}
                        totalPages={30}
                        onPageChange={() => {}}
                        maxVisible={3}
                     />
                  </div>
                  <div>
                     <p className="text-sm text-[var(--color-text-muted)] mb-2">maxVisible={7}</p>
                     <Pagination
                        currentPage={10}
                        totalPages={30}
                        onPageChange={() => {}}
                        maxVisible={7}
                     />
                  </div>
               </div>
               <CodeBlock
                  code={`<Pagination maxVisible={3} ... />

<Pagination maxVisible={7} ... />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>
            <PropsTable
               data={[
                  {
                     name: 'currentPage',
                     type: 'number',
                     default: '-',
                     description: 'Currently active page number (1-indexed)',
                     required: true
                  },
                  {
                     name: 'totalPages',
                     type: 'number',
                     default: '-',
                     description: 'Total number of pages',
                     required: true
                  },
                  {
                     name: 'onPageChange',
                     type: '(page: number) => void',
                     default: '-',
                     description: 'Callback when page changes',
                     required: true
                  },
                  {
                     name: 'maxVisible',
                     type: 'number',
                     default: '5',
                     description: 'Maximum number of page buttons to show (excluding first/last)',
                     required: false
                  },
                  {
                     name: 'showFirstLast',
                     type: 'boolean',
                     default: 'true',
                     description: 'Whether to always show first and last page buttons',
                     required: false
                  }
               ]}
            />
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisible?: number;
}`}
               language="typescript"
            />
         </section>

         {/* Accessibility */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Accessibility</h2>
            <div className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg p-6 space-y-3">
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Keyboard navigation (Tab to focus, Enter/Space to activate)
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Disabled state for prev/next at boundaries
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Active page clearly highlighted
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Semantic nav element with button controls
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
