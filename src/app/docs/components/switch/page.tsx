'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/Switch'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function SwitchDocs() {
   const [enabled, setEnabled] = useState(false)
   const [notifications, setNotifications] = useState(true)
   const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Switch
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Toggle switch component with smooth animations and multiple sizes.
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
            <a href="#label" className="text-[var(--color-neon-primary)] hover:underline">
               With Label
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API Reference
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Switch } from '@/components/ui/Switch';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Switch checked={enabled} onChange={setEnabled} />
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Status:{' '}
                     <code className="text-[var(--color-neon-primary)]">
                        {enabled ? 'On' : 'Off'}
                     </code>
                  </p>
               </div>
               <CodeBlock
                  code={`const [enabled, setEnabled] = useState(false);

<Switch 
  checked={enabled}
  onChange={setEnabled}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Sizes */}
         <section id="sizes" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Sizes</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <div>
                     <p className="text-sm text-[var(--color-text-secondary)] mb-2">Small</p>
                     <Switch size="sm" checked={true} onChange={() => {}} />
                  </div>
                  <div>
                     <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                        Medium (default)
                     </p>
                     <Switch size="md" checked={true} onChange={() => {}} />
                  </div>
                  <div>
                     <p className="text-sm text-[var(--color-text-secondary)] mb-2">Large</p>
                     <Switch size="lg" checked={true} onChange={() => {}} />
                  </div>
               </div>
               <CodeBlock
                  code={`<Switch size="sm" />

<Switch size="md" /> // default

<Switch size="lg" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Label */}
         <section id="label" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               With Label & Description
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-6">
                  <Switch
                     label="Enable notifications"
                     checked={notifications}
                     onChange={setNotifications}
                  />
                  <Switch
                     label="Marketing emails"
                     description="Receive emails about new features and updates"
                     checked={false}
                     onChange={() => {}}
                  />
               </div>
               <CodeBlock
                  code={`<Switch 
  label="Enable notifications"
  checked={notifications}
  onChange={setNotifications}
/>

<Switch 
  label="Marketing emails"
  description="Receive emails about updates"
  checked={false}
  onChange={() => {}}
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* States */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">States</h2>

            {/* Disabled */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Disabled State
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <Switch label="Disabled off" disabled checked={false} onChange={() => {}} />
                     <Switch label="Disabled on" disabled checked={true} onChange={() => {}} />
                  </div>
                  <CodeBlock
                     code={`<Switch disabled checked={false} />

<Switch disabled checked={true} />`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Size Switcher Example */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Dynamic Size Example
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <div className="flex gap-3">
                     <button
                        onClick={() => setSize('sm')}
                        className={`px-3 py-1 rounded text-sm ${
                           size === 'sm'
                              ? 'bg-[var(--color-neon-primary)] text-white'
                              : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)]'
                        }`}
                     >
                        Small
                     </button>
                     <button
                        onClick={() => setSize('md')}
                        className={`px-3 py-1 rounded text-sm ${
                           size === 'md'
                              ? 'bg-[var(--color-neon-primary)] text-white'
                              : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)]'
                        }`}
                     >
                        Medium
                     </button>
                     <button
                        onClick={() => setSize('lg')}
                        className={`px-3 py-1 rounded text-sm ${
                           size === 'lg'
                              ? 'bg-[var(--color-neon-primary)] text-white'
                              : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)]'
                        }`}
                     >
                        Large
                     </button>
                  </div>
                  <Switch
                     size={size}
                     label={`Switch with ${size} size`}
                     checked={true}
                     onChange={() => {}}
                  />
               </div>
               <CodeBlock
                  code={`const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

<Switch 
  size={size}
  checked={true}
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
                     name: 'checked',
                     type: 'boolean',
                     default: '-',
                     description: 'Whether the switch is checked',
                     required: true
                  },
                  {
                     name: 'onChange',
                     type: '(checked: boolean) => void',
                     default: '-',
                     description: 'Callback fired when the switch state changes',
                     required: true
                  },
                  {
                     name: 'label',
                     type: 'string',
                     default: 'undefined',
                     description: 'Label text displayed next to the switch',
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
                     name: 'size',
                     type: "'sm' | 'md' | 'lg'",
                     default: "'md'",
                     description: 'Size of the switch component',
                     required: false
                  },
                  {
                     name: 'disabled',
                     type: 'boolean',
                     default: 'false',
                     description: 'Whether the switch is disabled',
                     required: false
                  }
               ]}
            />
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
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
                     role="switch" with aria-checked state
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
                     Smooth animation with 200ms transition
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
               <Link href="/docs/components/checkbox">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Checkbox
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
            </div>
         </section>
      </div>
   )
}
