'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/Checkbox'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function CheckboxDocs() {
   const [checked, setChecked] = useState(false)
   const [items, setItems] = useState({
      react: true,
      vue: false,
      svelte: false
   })

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Checkbox
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Checkbox input with label, description, and error states for form selections.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#description" className="text-[var(--color-neon-primary)] hover:underline">
               With Description
            </a>
            <a href="#group" className="text-[var(--color-neon-primary)] hover:underline">
               Checkbox Group
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API Reference
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Checkbox } from '@/components/ui/Checkbox';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Checkbox label="Accept terms and conditions" />
                  <Checkbox label="Subscribe to newsletter" defaultChecked />
               </div>
               <CodeBlock
                  code={`<Checkbox label="Accept terms" />

<Checkbox 
  label="Subscribe" 
  defaultChecked 
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Description */}
         <section id="description" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               With Description
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <Checkbox
                  label="Enable notifications"
                  description="Get notified when someone comments on your post"
               />
               <CodeBlock
                  code={`<Checkbox 
  label="Enable notifications"
  description="Get notified when someone comments"
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* States */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">States</h2>

            {/* Controlled */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Controlled
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                     <Checkbox
                        label="I agree to the terms"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                     />
                     <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                        Checked:{' '}
                        <code className="text-[var(--color-neon-primary)]">
                           {checked ? 'true' : 'false'}
                        </code>
                     </p>
                  </div>
                  <CodeBlock
                     code={`const [checked, setChecked] = useState(false);

<Checkbox 
  label="I agree to the terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`}
                     language="tsx"
                  />
               </div>
            </div>

            {/* Error State */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Error State
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Checkbox
                     label="Accept terms and conditions"
                     error="You must accept the terms to continue"
                  />
                  <CodeBlock
                     code={`<Checkbox 
  label="Accept terms"
  error="You must accept the terms"
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
                  <div className="space-y-4">
                     <Checkbox label="Disabled unchecked" disabled />
                     <Checkbox label="Disabled checked" disabled defaultChecked />
                  </div>
                  <CodeBlock
                     code={`<Checkbox label="Disabled" disabled />

<Checkbox 
  label="Disabled checked" 
  disabled 
  defaultChecked 
/>`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Checkbox Group */}
         <section id="group" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Checkbox Group</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <div className="space-y-4">
                     <h3 className="text-sm font-medium text-[var(--color-text-primary)]">
                        Select frameworks:
                     </h3>
                     <Checkbox
                        label="React"
                        description="A JavaScript library for building user interfaces"
                        checked={items.react}
                        onChange={(e) => setItems({ ...items, react: e.target.checked })}
                     />
                     <Checkbox
                        label="Vue"
                        description="The progressive JavaScript framework"
                        checked={items.vue}
                        onChange={(e) => setItems({ ...items, vue: e.target.checked })}
                     />
                     <Checkbox
                        label="Svelte"
                        description="Cybernetically enhanced web apps"
                        checked={items.svelte}
                        onChange={(e) => setItems({ ...items, svelte: e.target.checked })}
                     />
                  </div>
                  <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                     Selected:{' '}
                     {Object.entries(items)
                        .filter(([, v]) => v)
                        .map(([k]) => k)
                        .join(', ') || 'none'}
                  </p>
               </div>
               <CodeBlock
                  code={`const [items, setItems] = useState({
  react: true,
  vue: false,
  svelte: false,
});

<Checkbox 
  label="React"
  description="A JavaScript library"
  checked={items.react}
  onChange={(e) => setItems({
    ...items, 
    react: e.target.checked 
  })}
/>
// ... more checkboxes`}
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
                     name: 'label',
                     type: 'string',
                     default: 'undefined',
                     description: 'Label text displayed next to the checkbox',
                     required: false
                  },
                  {
                     name: 'description',
                     type: 'string',
                     default: 'undefined',
                     description: 'Additional descriptive text shown below the label',
                     required: false
                  },
                  {
                     name: 'error',
                     type: 'string',
                     default: 'undefined',
                     description: 'Error message shown below the checkbox',
                     required: false
                  },
                  {
                     name: 'checked',
                     type: 'boolean',
                     default: 'undefined',
                     description: 'Controlled checked state',
                     required: false
                  },
                  {
                     name: 'defaultChecked',
                     type: 'boolean',
                     default: 'false',
                     description: 'Default checked state (uncontrolled)',
                     required: false
                  },
                  {
                     name: 'disabled',
                     type: 'boolean',
                     default: 'false',
                     description: 'Whether the checkbox is disabled',
                     required: false
                  }
               ]}
            />
            <p className="text-sm text-[var(--color-text-muted)]">
               Extends all standard HTML checkbox input attributes (onChange, onFocus, onBlur, etc.)
            </p>
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
  error?: string;
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
                     Labels properly associated with checkboxes
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Keyboard accessible (Space to toggle)
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
               <Link href="/docs/components/radio">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Radio
                  </Badge>
               </Link>
               <Link href="/docs/components/switch">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Switch
                  </Badge>
               </Link>
               <Link href="/docs/components/select">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Select
                  </Badge>
               </Link>
            </div>
         </section>
      </div>
   )
}
