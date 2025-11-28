'use client'

import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/Skeleton'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function SkeletonDocs() {
   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Skeleton
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Skeleton component for displaying placeholder loading states while content loads.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#variants" className="text-[var(--color-neon-primary)] hover:underline">
               Variants
            </a>
            <a href="#presets" className="text-[var(--color-neon-primary)] hover:underline">
               Presets
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/Skeleton';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Skeleton />
                  <Skeleton width="60%" />
                  <Skeleton width="80%" />
               </div>
               <CodeBlock
                  code={`<Skeleton />
<Skeleton width="60%" />
<Skeleton width="80%" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Variants */}
         <section id="variants" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Text (default)
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <Skeleton variant="text" />
                     <Skeleton variant="text" width="80%" />
                     <Skeleton variant="text" width="60%" />
                  </div>
                  <CodeBlock
                     code={`<Skeleton variant="text" />
<Skeleton variant="text" width="80%" />
<Skeleton variant="text" width="60%" />`}
                     language="tsx"
                  />
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Circular</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                     <Skeleton variant="circular" width="40px" height="40px" />
                     <Skeleton variant="circular" width="60px" height="60px" />
                     <Skeleton variant="circular" width="80px" height="80px" />
                  </div>
                  <CodeBlock
                     code={`<Skeleton 
  variant="circular" 
  width="40px" 
  height="40px" 
/>

<Skeleton 
  variant="circular" 
  width="80px" 
  height="80px" 
/>`}
                     language="tsx"
                  />
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Rectangular
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Skeleton variant="rectangular" height="100px" />
                  <CodeBlock
                     code={`<Skeleton 
  variant="rectangular" 
  height="100px" 
/>`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Presets */}
         <section id="presets" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Preset Components
            </h2>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  SkeletonCard
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <SkeletonCard />
                  <CodeBlock code={`<SkeletonCard />`} language="tsx" />
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  SkeletonText
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                     <SkeletonText lines={3} />
                     <SkeletonText lines={5} />
                  </div>
                  <CodeBlock
                     code={`<SkeletonText lines={3} />

<SkeletonText lines={5} />`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Custom Dimensions */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Custom Dimensions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Skeleton width="100%" height="200px" />
                  <Skeleton width="300px" height="40px" />
                  <Skeleton width="50%" height="20px" />
               </div>
               <CodeBlock
                  code={`<Skeleton width="100%" height="200px" />
<Skeleton width="300px" height="40px" />
<Skeleton width="50%" height="20px" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Skeleton</h3>
               <PropsTable
                  data={[
                     {
                        name: 'variant',
                        type: "'text' | 'circular' | 'rectangular'",
                        default: "'text'",
                        description: 'Shape variant of the skeleton',
                        required: false
                     },
                     {
                        name: 'width',
                        type: 'string | number',
                        default: "'100%' for text, height for circular",
                        description: 'Width of the skeleton (supports px, %, rem, etc.)',
                        required: false
                     },
                     {
                        name: 'height',
                        type: 'string | number',
                        default: "'1rem' for text, width for circular",
                        description: 'Height of the skeleton',
                        required: false
                     },
                     {
                        name: 'className',
                        type: 'string',
                        default: '""',
                        description: 'Additional CSS classes',
                        required: false
                     }
                  ]}
               />
            </div>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  SkeletonText
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'lines',
                        type: 'number',
                        default: '3',
                        description: 'Number of text lines to display',
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
               code={`interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

interface SkeletonTextProps {
  lines?: number;
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
                     Pulse animation indicates loading state
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Purely decorative, no interaction required
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Matches layout dimensions to prevent content shift
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
