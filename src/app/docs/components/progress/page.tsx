'use client'

import { useState } from 'react'
import { Progress } from '@/components/ui/Progress'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'

export default function ProgressDocs() {
   const [value, setValue] = useState(45)

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Progress
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Progress bar component for displaying task completion or loading states.
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
            <a href="#sizes" className="text-[var(--color-neon-primary)] hover:underline">
               Sizes
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Progress } from '@/components/ui/Progress';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Progress value={60} />
                  <Progress value={30} showLabel />
               </div>
               <CodeBlock
                  code={`<Progress value={60} />

<Progress value={30} showLabel />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Label */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Label</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Progress value={75} label="Uploading file" showLabel />
                  <Progress value={40} label="Processing data" />
               </div>
               <CodeBlock
                  code={`<Progress 
  value={75} 
  label="Uploading file" 
  showLabel 
/>

<Progress 
  value={40} 
  label="Processing data" 
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Variants */}
         <section id="variants" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <Progress value={60} variant="primary" label="Primary" />
                  <Progress value={80} variant="success" label="Success" />
                  <Progress value={45} variant="warning" label="Warning" />
                  <Progress value={25} variant="error" label="Error" />
               </div>
               <CodeBlock
                  code={`<Progress value={60} variant="primary" />
<Progress value={80} variant="success" />
<Progress value={45} variant="warning" />
<Progress value={25} variant="error" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Sizes */}
         <section id="sizes" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Sizes</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <Progress value={70} size="sm" label="Small" />
                  <Progress value={70} size="md" label="Medium (default)" />
                  <Progress value={70} size="lg" label="Large" />
               </div>
               <CodeBlock
                  code={`<Progress value={70} size="sm" />
<Progress value={70} size="md" /> // default
<Progress value={70} size="lg" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Interactive Example */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Interactive Example
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Progress value={value} label="Download progress" showLabel variant="primary" />
                  <div className="flex gap-2">
                     <Button
                        size="sm"
                        onClick={() => setValue(Math.max(0, value - 10))}
                        disabled={value === 0}
                     >
                        -10%
                     </Button>
                     <Button
                        size="sm"
                        onClick={() => setValue(Math.min(100, value + 10))}
                        disabled={value === 100}
                     >
                        +10%
                     </Button>
                     <Button size="sm" variant="secondary" onClick={() => setValue(0)}>
                        Reset
                     </Button>
                  </div>
               </div>
               <CodeBlock
                  code={`const [value, setValue] = useState(45);

<Progress 
  value={value} 
  label="Download progress" 
  showLabel
/>

<Button onClick={() => setValue(value + 10)}>
  +10%
</Button>`}
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
                     name: 'value',
                     type: 'number',
                     default: '-',
                     description: 'Current progress value',
                     required: true
                  },
                  {
                     name: 'max',
                     type: 'number',
                     default: '100',
                     description: 'Maximum value for progress calculation',
                     required: false
                  },
                  {
                     name: 'variant',
                     type: "'primary' | 'success' | 'warning' | 'error'",
                     default: "'primary'",
                     description: 'Color variant of the progress bar',
                     required: false
                  },
                  {
                     name: 'size',
                     type: "'sm' | 'md' | 'lg'",
                     default: "'md'",
                     description: 'Height of the progress bar',
                     required: false
                  },
                  {
                     name: 'showLabel',
                     type: 'boolean',
                     default: 'false',
                     description: 'Whether to show percentage label',
                     required: false
                  },
                  {
                     name: 'label',
                     type: 'string',
                     default: 'undefined',
                     description: 'Custom label text shown above progress bar',
                     required: false
                  }
               ]}
            />
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
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
                     Semantic progress visualization with smooth transitions
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Percentage labels for screen readers when enabled
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Color variants follow semantic meaning (success=green, error=red)
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
