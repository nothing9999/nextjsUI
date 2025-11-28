'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@/components/ui/Radio'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function RadioDocs() {
   const [selected, setSelected] = useState('react')
   const [plan, setPlan] = useState('pro')

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Radio
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Radio button component for single selection within a group of options.
            </p>
         </div>

         {/* Quick Links */}
         <div className="flex flex-wrap gap-4">
            <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">
               Usage
            </a>
            <a href="#group" className="text-[var(--color-neon-primary)] hover:underline">
               Radio Group
            </a>
            <a href="#description" className="text-[var(--color-neon-primary)] hover:underline">
               With Description
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API Reference
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Radio, RadioGroup } from '@/components/ui/Radio';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-3">
                  <Radio label="Option 1" name="basic" value="1" />
                  <Radio label="Option 2" name="basic" value="2" defaultChecked />
                  <Radio label="Option 3" name="basic" value="3" />
               </div>
               <CodeBlock
                  code={`<Radio label="Option 1" name="basic" value="1" />
<Radio label="Option 2" name="basic" value="2" defaultChecked />
<Radio label="Option 3" name="basic" value="3" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Radio Group */}
         <section id="group" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Radio Group</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <RadioGroup label="Select your framework">
                  <Radio
                     label="React"
                     name="framework"
                     value="react"
                     checked={selected === 'react'}
                     onChange={(e) => setSelected(e.target.value)}
                  />
                  <Radio
                     label="Vue"
                     name="framework"
                     value="vue"
                     checked={selected === 'vue'}
                     onChange={(e) => setSelected(e.target.value)}
                  />
                  <Radio
                     label="Svelte"
                     name="framework"
                     value="svelte"
                     checked={selected === 'svelte'}
                     onChange={(e) => setSelected(e.target.value)}
                  />
               </RadioGroup>
               <CodeBlock
                  code={`const [selected, setSelected] = useState('react');

<RadioGroup label="Select your framework">
  <Radio 
    label="React" 
    value="react"
    checked={selected === 'react'}
    onChange={(e) => setSelected(e.target.value)}
  />
  <Radio label="Vue" value="vue" ... />
  <Radio label="Svelte" value="svelte" ... />
</RadioGroup>`}
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
               <RadioGroup label="Choose your plan">
                  <Radio
                     label="Free"
                     description="Basic features for personal use"
                     name="plan"
                     value="free"
                     checked={plan === 'free'}
                     onChange={(e) => setPlan(e.target.value)}
                  />
                  <Radio
                     label="Pro"
                     description="Advanced features for professionals"
                     name="plan"
                     value="pro"
                     checked={plan === 'pro'}
                     onChange={(e) => setPlan(e.target.value)}
                  />
                  <Radio
                     label="Enterprise"
                     description="Custom solutions for large teams"
                     name="plan"
                     value="enterprise"
                     checked={plan === 'enterprise'}
                     onChange={(e) => setPlan(e.target.value)}
                  />
               </RadioGroup>
               <CodeBlock
                  code={`<RadioGroup label="Choose your plan">
  <Radio 
    label="Free" 
    description="Basic features for personal use"
    value="free"
    checked={plan === 'free'}
    onChange={(e) => setPlan(e.target.value)}
  />
  <Radio 
    label="Pro" 
    description="Advanced features"
    value="pro"
    checked={plan === 'pro'}
    onChange={(e) => setPlan(e.target.value)}
  />
</RadioGroup>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* States */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">States</h2>

            {/* Error State */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Error State
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <RadioGroup label="Select an option" error="This field is required">
                     <Radio label="Option 1" name="error" value="1" />
                     <Radio label="Option 2" name="error" value="2" />
                  </RadioGroup>
                  <CodeBlock
                     code={`<RadioGroup 
  label="Select an option" 
  error="This field is required"
>
  <Radio label="Option 1" value="1" />
  <Radio label="Option 2" value="2" />
</RadioGroup>`}
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
                  <div className="space-y-3">
                     <Radio label="Disabled unchecked" name="disabled" disabled />
                     <Radio label="Disabled checked" name="disabled2" disabled defaultChecked />
                  </div>
                  <CodeBlock
                     code={`<Radio label="Disabled" disabled />

<Radio label="Disabled checked" disabled defaultChecked />`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* API Reference - Radio */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Radio</h3>
               <PropsTable
                  data={[
                     {
                        name: 'label',
                        type: 'string',
                        default: 'undefined',
                        description: 'Label text displayed next to the radio button',
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
                        name: 'name',
                        type: 'string',
                        default: 'undefined',
                        description: 'Group name for radio buttons (required for grouping)',
                        required: false
                     },
                     {
                        name: 'value',
                        type: 'string',
                        default: 'undefined',
                        description: 'Value of the radio button',
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
                        description: 'Whether the radio button is disabled',
                        required: false
                     }
                  ]}
               />
               <p className="text-sm text-[var(--color-text-muted)]">
                  Extends all standard HTML radio input attributes (onChange, onFocus, onBlur, etc.)
               </p>
            </div>

            {/* RadioGroup API */}
            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  RadioGroup
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'children',
                        type: 'React.ReactNode',
                        default: '-',
                        description: 'Radio components to be rendered inside the group',
                        required: true
                     },
                     {
                        name: 'label',
                        type: 'string',
                        default: 'undefined',
                        description: 'Label displayed above the radio group',
                        required: false
                     },
                     {
                        name: 'error',
                        type: 'string',
                        default: 'undefined',
                        description: 'Error message shown below the radio group',
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
               code={`interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

interface RadioGroupProps {
  children: React.ReactNode;
  label?: string;
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
                     Labels properly associated with radio buttons
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Keyboard accessible (Tab to navigate, Arrow keys to select)
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
               <Link href="/docs/components/checkbox">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Checkbox
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
