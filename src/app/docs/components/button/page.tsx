'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { ComponentDemo } from '@/components/docs/ComponentDemo'
import { PropsTable, type PropDefinition } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const buttonProps: PropDefinition[] = [
   {
      name: 'variant',
      type: "'primary' | 'secondary' | 'outline' | 'ghost'",
      default: "'primary'",
      description: 'The visual style variant of the button'
   },
   {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: 'The size of the button'
   },
   {
      name: 'isLoading',
      type: 'boolean',
      default: 'false',
      description: 'Shows a loading spinner and disables the button'
   },
   {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the button'
   },
   {
      name: 'children',
      type: 'React.ReactNode',
      required: true,
      description: 'The content of the button'
   },
   {
      name: 'onClick',
      type: '() => void',
      description: 'Callback fired when the button is clicked'
   },
   {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes to apply'
   }
]

export default function ButtonDocsPage() {
   return (
      <div className="animate-fade-in-up">
         {/* Header */}
         <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
               <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">Button</h1>
               <span className="px-2 py-1 text-xs font-mono bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)] rounded border border-[var(--color-neon-primary)]/30">
                  v1.0.0
               </span>
            </div>
            <p className="text-lg text-[var(--color-text-secondary)]">
               Buttons allow users to take actions and make choices with a single click.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex gap-4 mb-8 pb-8 border-b border-[var(--color-border)]">
            <a
               href="#variants"
               className="text-sm text-[var(--color-neon-primary)] hover:underline"
            >
               Variants
            </a>
            <a href="#sizes" className="text-sm text-[var(--color-neon-primary)] hover:underline">
               Sizes
            </a>
            <a href="#states" className="text-sm text-[var(--color-neon-primary)] hover:underline">
               States
            </a>
            <a href="#api" className="text-sm text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Import</h2>
            <CodeBlock code={`import { Button } from '@/components/ui/Button';`} language="tsx" />
         </div>

         {/* Basic Usage */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               Basic Usage
            </h2>
            <ComponentDemo
               title="Default Button"
               description="The basic button with default props"
               preview={<Button onClick={() => alert('Clicked!')}>Click me</Button>}
               code={`<Button onClick={() => alert('Clicked!')}>
  Click me
</Button>`}
            />
         </div>

         {/* Variants */}
         <div id="variants" className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Variants</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               The Button component comes with 4 variants:{' '}
               <code className="text-[var(--color-neon-primary)]">primary</code>,{' '}
               <code className="text-[var(--color-neon-primary)]">secondary</code>,{' '}
               <code className="text-[var(--color-neon-primary)]">outline</code>, and{' '}
               <code className="text-[var(--color-neon-primary)]">ghost</code>.
            </p>
            <ComponentDemo
               preview={
                  <div className="flex flex-wrap gap-4">
                     <Button variant="primary">Primary</Button>
                     <Button variant="secondary">Secondary</Button>
                     <Button variant="outline">Outline</Button>
                     <Button variant="ghost">Ghost</Button>
                  </div>
               }
               code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
            />
         </div>

         {/* Sizes */}
         <div id="sizes" className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Sizes</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Three sizes are available: small, medium (default), and large.
            </p>
            <ComponentDemo
               preview={
                  <div className="flex items-end flex-wrap gap-4">
                     <Button size="sm">Small</Button>
                     <Button size="md">Medium</Button>
                     <Button size="lg">Large</Button>
                  </div>
               }
               code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
            />
         </div>

         {/* With Icons */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">With Icons</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               You can add icons to buttons to enhance their meaning.
            </p>
            <ComponentDemo
               preview={
                  <div className="flex flex-wrap gap-4">
                     <Button variant="primary">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Add Item
                     </Button>
                     <Button variant="outline">
                        <TrashIcon className="w-4 h-4 mr-2" />
                        Delete
                     </Button>
                  </div>
               }
               code={`import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

<Button variant="primary">
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>

<Button variant="outline">
  <TrashIcon className="w-4 h-4 mr-2" />
  Delete
</Button>`}
            />
         </div>

         {/* States */}
         <div id="states" className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">States</h2>

            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 mt-8">
               Loading
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Show a loading state with the{' '}
               <code className="text-[var(--color-neon-primary)]">isLoading</code> prop.
            </p>
            <ComponentDemo
               preview={
                  <div className="flex flex-wrap gap-4">
                     <Button isLoading>Loading...</Button>
                     <Button variant="secondary" isLoading>
                        Processing
                     </Button>
                  </div>
               }
               code={`<Button isLoading>Loading...</Button>
<Button variant="secondary" isLoading>Processing</Button>`}
            />

            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4 mt-8">
               Disabled
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Disable interaction with the{' '}
               <code className="text-[var(--color-neon-primary)]">disabled</code> prop.
            </p>
            <ComponentDemo
               preview={
                  <div className="flex flex-wrap gap-4">
                     <Button disabled>Disabled</Button>
                     <Button variant="secondary" disabled>
                        Disabled
                     </Button>
                     <Button variant="outline" disabled>
                        Disabled
                     </Button>
                  </div>
               }
               code={`<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled</Button>`}
            />
         </div>

         {/* API Reference */}
         <div id="api" className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               API Reference
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Complete reference of all available props for the Button component.
            </p>
            <PropsTable data={buttonProps} />
         </div>

         {/* TypeScript */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">TypeScript</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               The Button component is fully typed with TypeScript.
            </p>
            <CodeBlock
               code={`interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}`}
               language="typescript"
            />
         </div>

         {/* Accessibility */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               Accessibility
            </h2>
            <div className="space-y-4">
               <div className="p-4 rounded-lg bg-[var(--color-surface)] border-l-4 border-[var(--color-info)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     ✓ Keyboard Navigation
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Buttons can be focused and activated using the keyboard (Tab, Enter, Space).
                  </p>
               </div>
               <div className="p-4 rounded-lg bg-[var(--color-surface)] border-l-4 border-[var(--color-info)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     ✓ ARIA Attributes
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     The disabled state is communicated to screen readers via the{' '}
                     <code>disabled</code> attribute.
                  </p>
               </div>
               <div className="p-4 rounded-lg bg-[var(--color-surface)] border-l-4 border-[var(--color-info)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     ✓ Loading State
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     When loading, the button is automatically disabled to prevent duplicate
                     submissions.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
