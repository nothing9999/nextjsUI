'use client'

import { Divider } from '@/components/ui/Divider'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function DividerDocs() {
   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Divider
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Divider component for visually separating content with horizontal or vertical lines.
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
            <a href="#vertical" className="text-[var(--color-neon-primary)] hover:underline">
               Vertical
            </a>
            <a href="#text" className="text-[var(--color-neon-primary)] hover:underline">
               With Text
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Divider } from '@/components/ui/Divider';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <p className="text-[var(--color-text-secondary)]">Content above</p>
                  <Divider />
                  <p className="text-[var(--color-text-secondary)]">Content below</p>
               </div>
               <CodeBlock
                  code={`<p>Content above</p>
<Divider />
<p>Content below</p>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Variants */}
         <section id="variants" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Solid</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Divider variant="solid" />
                  <CodeBlock code={`<Divider variant="solid" /> // default`} language="tsx" />
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Dashed</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Divider variant="dashed" />
                  <CodeBlock code={`<Divider variant="dashed" />`} language="tsx" />
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Gradient</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Divider variant="gradient" />
                  <CodeBlock code={`<Divider variant="gradient" />`} language="tsx" />
               </div>
            </div>
         </section>

         {/* Vertical */}
         <section id="vertical" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Vertical Orientation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-center gap-4 h-24">
                  <span className="text-[var(--color-text-secondary)]">Left</span>
                  <Divider orientation="vertical" />
                  <span className="text-[var(--color-text-secondary)]">Center</span>
                  <Divider orientation="vertical" variant="gradient" />
                  <span className="text-[var(--color-text-secondary)]">Right</span>
               </div>
               <CodeBlock
                  code={`<div className="flex items-center gap-4 h-24">
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Center</span>
  <Divider 
    orientation="vertical" 
    variant="gradient" 
  />
  <span>Right</span>
</div>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Text */}
         <section id="text" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Text</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <Divider>OR</Divider>
                  <Divider variant="dashed">Continue</Divider>
                  <Divider variant="gradient">Section Break</Divider>
               </div>
               <CodeBlock
                  code={`<Divider>OR</Divider>

<Divider variant="dashed">
  Continue
</Divider>

<Divider variant="gradient">
  Section Break
</Divider>`}
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
                     name: 'orientation',
                     type: "'horizontal' | 'vertical'",
                     default: "'horizontal'",
                     description: 'Orientation of the divider',
                     required: false
                  },
                  {
                     name: 'variant',
                     type: "'solid' | 'dashed' | 'gradient'",
                     default: "'solid'",
                     description: 'Visual style of the divider',
                     required: false
                  },
                  {
                     name: 'children',
                     type: 'ReactNode',
                     default: 'undefined',
                     description: 'Text content to display in the center of horizontal divider',
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
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'gradient';
  children?: ReactNode;
  className?: string;
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
                     Purely decorative, no accessibility concerns
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Semantic HTML with proper border styling
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Text content properly centered and readable
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
