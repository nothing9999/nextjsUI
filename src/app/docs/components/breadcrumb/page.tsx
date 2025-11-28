'use client'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'

export default function BreadcrumbDocs() {
   const items = [
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptops' }
   ]

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Breadcrumb
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Breadcrumb navigation component for displaying current page location within a
               hierarchy.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#separator" className="text-[var(--color-neon-primary)] hover:underline">
               Custom Separator
            </a>
            <a href="#home" className="text-[var(--color-neon-primary)] hover:underline">
               Without Home
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Breadcrumb } from '@/components/ui/Breadcrumb';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-4 bg-[var(--color-surface)] rounded-lg">
                  <Breadcrumb items={items} />
               </div>
               <CodeBlock
                  code={`const items = [
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops' }, // Current page (no href)
];

<Breadcrumb items={items} />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Custom Separator */}
         <section id="separator" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Custom Separator
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4 p-4 bg-[var(--color-surface)] rounded-lg">
                  <Breadcrumb items={items} separator="/" />
                  <Breadcrumb items={items} separator=">" />
                  <Breadcrumb
                     items={items}
                     separator={<ChevronDoubleRightIcon className="w-4 h-4" />}
                  />
               </div>
               <CodeBlock
                  code={`// Text separator
<Breadcrumb 
  items={items} 
  separator="/"
/>

// Custom icon
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';

<Breadcrumb 
  items={items} 
  separator={<ChevronDoubleRightIcon className="w-4 h-4" />}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Without Home */}
         <section id="home" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Without Home Icon
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-4 bg-[var(--color-surface)] rounded-lg">
                  <Breadcrumb items={items} showHome={false} />
               </div>
               <CodeBlock
                  code={`<Breadcrumb 
  items={items} 
  showHome={false}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Simple Path */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Simple Path</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="p-4 bg-[var(--color-surface)] rounded-lg">
                  <Breadcrumb items={[{ label: 'Docs', href: '/docs' }, { label: 'Components' }]} />
               </div>
               <CodeBlock
                  code={`<Breadcrumb 
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Components' },
  ]}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  Breadcrumb
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'items',
                        type: 'BreadcrumbItem[]',
                        default: '-',
                        description: 'Array of breadcrumb items to display',
                        required: true
                     },
                     {
                        name: 'separator',
                        type: 'ReactNode',
                        default: '<ChevronRightIcon />',
                        description: 'Custom separator between items (text or icon)',
                        required: false
                     },
                     {
                        name: 'showHome',
                        type: 'boolean',
                        default: 'true',
                        description: 'Whether to show home icon at the start',
                        required: false
                     }
                  ]}
               />
            </div>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  BreadcrumbItem
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'label',
                        type: 'string',
                        default: '-',
                        description: 'Text to display for the breadcrumb item',
                        required: true
                     },
                     {
                        name: 'href',
                        type: 'string',
                        default: 'undefined',
                        description: 'URL to navigate to (omit for current page)',
                        required: false
                     }
                  ]}
               />
            </div>
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  showHome?: boolean;
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
                     Semantic nav element with proper structure
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Links styled with hover states for clarity
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Current page shown without link (not clickable)
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Keyboard navigation with Tab and Enter keys
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
