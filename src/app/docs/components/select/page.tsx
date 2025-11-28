'use client'

import { useState } from 'react'
import { Select } from '@/components/ui/Select'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function SelectDocs() {
   const [value, setValue] = useState('')
   const countries = [
      { value: '', label: 'Select a country' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' }
   ]

   const frameworks = [
      { value: 'next', label: 'Next.js' },
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'svelte', label: 'Svelte' }
   ]

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Select
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Dropdown select component with label, error states, and custom styling.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#label" className="text-[var(--color-neon-primary)] hover:underline">
               With Label
            </a>
            <a href="#states" className="text-[var(--color-neon-primary)] hover:underline">
               States
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API Reference
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Select } from '@/components/ui/Select';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <Select options={frameworks} defaultValue="next" />
               <CodeBlock
                  code={`const options = [
  { value: 'next', label: 'Next.js' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
];

<Select options={options} />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Label */}
         <section id="label" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               With Label & Hint
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Select
                     label="Country"
                     options={countries}
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <Select
                     label="Framework"
                     options={frameworks}
                     hint="Choose your preferred framework"
                     defaultValue="next"
                  />
               </div>
               <CodeBlock
                  code={`<Select 
  label="Country"
  options={countries}
/>

<Select 
  label="Framework"
  options={frameworks}
  hint="Choose your preferred framework"
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* States */}
         <section id="states" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">States</h2>

            {/* Error State */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Error State
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Select label="Country" options={countries} error="Please select a country" />
                  <CodeBlock
                     code={`<Select 
  label="Country"
  options={countries}
  error="Please select a country"
/>`}
                     language="tsx"
                  />
               </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Disabled State
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Select label="Framework" options={frameworks} disabled defaultValue="next" />
                  <CodeBlock
                     code={`<Select 
  label="Framework"
  options={frameworks}
  disabled
/>`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Controlled Example */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Controlled Component
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <Select
                     label="Framework"
                     options={frameworks}
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  {value && (
                     <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                        Selected: <code className="text-[var(--color-neon-primary)]">{value}</code>
                     </p>
                  )}
               </div>
               <CodeBlock
                  code={`const [value, setValue] = useState('');

<Select 
  label="Framework"
  options={frameworks}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
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
                     name: 'options',
                     type: 'Array<{ value: string; label: string }>',
                     default: '-',
                     description: 'Array of options with value and label',
                     required: true
                  },
                  {
                     name: 'label',
                     type: 'string',
                     default: 'undefined',
                     description: 'Label text displayed above the select',
                     required: false
                  },
                  {
                     name: 'error',
                     type: 'string',
                     default: 'undefined',
                     description: 'Error message shown below select with error styling',
                     required: false
                  },
                  {
                     name: 'hint',
                     type: 'string',
                     default: 'undefined',
                     description:
                        'Helper text displayed below select (hidden when error is present)',
                     required: false
                  },
                  {
                     name: 'disabled',
                     type: 'boolean',
                     default: 'false',
                     description: 'Whether the select is disabled',
                     required: false
                  },
                  {
                     name: 'value',
                     type: 'string',
                     default: 'undefined',
                     description: 'Controlled value of the select',
                     required: false
                  },
                  {
                     name: 'defaultValue',
                     type: 'string',
                     default: 'undefined',
                     description: 'Default selected value (uncontrolled)',
                     required: false
                  }
               ]}
            />
            <p className="text-sm text-[var(--color-text-muted)]">
               Extends all standard HTML select attributes (onChange, onFocus, onBlur, etc.)
            </p>
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: Array<{ value: string; label: string }>;
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
                     Labels properly associated with selects
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Keyboard navigation (arrow keys, Enter, Space)
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Focus visible with 2px ring
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Error messages announced to screen readers
                  </span>
               </div>
            </div>
         </section>

         {/* Related */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Related Components
            </h2>
            <div className="flex flex-wrap gap-3">
               <Link href="/docs/components/input">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Input
                  </Badge>
               </Link>
               <Link href="/docs/components/radio">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Radio
                  </Badge>
               </Link>
               <Link href="/docs/components/checkbox">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Checkbox
                  </Badge>
               </Link>
            </div>
         </section>
      </div>
   )
}
