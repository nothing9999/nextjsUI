'use client'

import { Spinner } from '@/components/ui/Spinner'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function SpinnerDocs() {
   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Spinner
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Spinner component for displaying loading states with smooth rotation animation.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#sizes" className="text-[var(--color-neon-primary)] hover:underline">
               Sizes
            </a>
            <a href="#variants" className="text-[var(--color-neon-primary)] hover:underline">
               Variants
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Spinner } from '@/components/ui/Spinner';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-center justify-center p-8 bg-[var(--color-surface)] rounded-lg">
                  <Spinner />
               </div>
               <CodeBlock code={`<Spinner />`} language="tsx" />
            </div>
         </section>

         {/* Sizes */}
         <section id="sizes" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Sizes</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-end gap-6 p-8 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-center">
                     <Spinner size="xs" />
                     <p className="text-xs text-[var(--color-text-muted)] mt-2">xs</p>
                  </div>
                  <div className="text-center">
                     <Spinner size="sm" />
                     <p className="text-xs text-[var(--color-text-muted)] mt-2">sm</p>
                  </div>
                  <div className="text-center">
                     <Spinner size="md" />
                     <p className="text-xs text-[var(--color-text-muted)] mt-2">md</p>
                  </div>
                  <div className="text-center">
                     <Spinner size="lg" />
                     <p className="text-xs text-[var(--color-text-muted)] mt-2">lg</p>
                  </div>
                  <div className="text-center">
                     <Spinner size="xl" />
                     <p className="text-xs text-[var(--color-text-muted)] mt-2">xl</p>
                  </div>
               </div>
               <CodeBlock
                  code={`<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" /> // default
<Spinner size="lg" />
<Spinner size="xl" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Variants */}
         <section id="variants" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex gap-8 p-8 bg-[var(--color-surface)] rounded-lg">
                  <div className="text-center">
                     <Spinner variant="primary" size="lg" />
                     <p className="text-sm text-[var(--color-text-muted)] mt-2">Primary</p>
                  </div>
                  <div className="text-center">
                     <Spinner variant="secondary" size="lg" />
                     <p className="text-sm text-[var(--color-text-muted)] mt-2">Secondary</p>
                  </div>
               </div>
               <CodeBlock
                  code={`<Spinner variant="primary" />  // default

<Spinner variant="secondary" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* In Button */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">In Button</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex gap-4">
                  <Button disabled>
                     <Spinner size="sm" />
                     <span>Loading...</span>
                  </Button>
                  <Button variant="secondary" disabled>
                     <Spinner size="sm" variant="secondary" />
                     <span>Saving...</span>
                  </Button>
               </div>
               <CodeBlock
                  code={`<Button disabled>
  <Spinner size="sm" />
  <span>Loading...</span>
</Button>

<Button variant="secondary" disabled>
  <Spinner size="sm" variant="secondary" />
  <span>Saving...</span>
</Button>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Centered */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Centered Loading
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-center justify-center h-40 bg-[var(--color-surface)] rounded-lg">
                  <Spinner size="lg" />
               </div>
               <CodeBlock
                  code={`<div className="flex items-center justify-center h-40">
  <Spinner size="lg" />
</div>`}
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
                     name: 'size',
                     type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
                     default: "'md'",
                     description: 'Size of the spinner',
                     required: false
                  },
                  {
                     name: 'variant',
                     type: "'primary' | 'secondary'",
                     default: "'primary'",
                     description: 'Color variant of the spinner',
                     required: false
                  }
               ]}
            />
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary';
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
                     Smooth CSS animation with animate-spin
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Purely decorative loading indicator
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Pair with descriptive loading text for screen readers
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
