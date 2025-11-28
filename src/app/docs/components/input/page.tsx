'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'
import { EnvelopeIcon, LockClosedIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function InputDocs() {
   const [emailValue, setEmailValue] = useState('')
   const [errorExample, setErrorExample] = useState('')

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Input
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Text input fields with label, error states, icons, and hints for form data
               collection.
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
            <a href="#icons" className="text-[var(--color-neon-primary)] hover:underline">
               With Icons
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
               code={`import { Input } from '@/components/ui/Input';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <Input placeholder="Enter text..." />
               <CodeBlock code={`<Input placeholder="Enter text..." />`} language="tsx" />
            </div>
         </section>

         {/* With Label */}
         <section id="label" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Label</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Input
                     label="Email address"
                     type="email"
                     placeholder="you@example.com"
                     value={emailValue}
                     onChange={(e) => setEmailValue(e.target.value)}
                  />
                  <Input
                     label="Password"
                     type="password"
                     placeholder="Enter your password"
                     hint="Must be at least 8 characters"
                  />
               </div>
               <CodeBlock
                  code={`<Input 
  label="Email address"
  type="email"
  placeholder="you@example.com"
/>

<Input 
  label="Password"
  type="password"
  placeholder="Enter your password"
  hint="Must be at least 8 characters"
/>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* With Icons */}
         <section id="icons" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Icons</h2>
            <p className="text-[var(--color-text-secondary)]">
               Add icons to enhance visual clarity and user experience.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-4">
                  <Input
                     label="Email"
                     type="email"
                     placeholder="Enter email"
                     icon={<EnvelopeIcon className="w-4 h-4" />}
                  />
                  <Input
                     label="Password"
                     type="password"
                     placeholder="Enter password"
                     icon={<LockClosedIcon className="w-4 h-4" />}
                  />
                  <Input
                     placeholder="Search..."
                     icon={<MagnifyingGlassIcon className="w-5 h-5" />}
                  />
               </div>
               <CodeBlock
                  code={`import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

<Input 
  label="Email"
  type="email"
  placeholder="Enter email"
  icon={<EnvelopeIcon className="w-4 h-4" />}
/>

<Input 
  label="Password"
  type="password"
  placeholder="Enter password"
  icon={<LockClosedIcon className="w-4 h-4" />}
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
                  <Input
                     label="Username"
                     placeholder="Enter username"
                     value={errorExample}
                     onChange={(e) => setErrorExample(e.target.value)}
                     error={
                        errorExample.length < 3 && errorExample.length > 0
                           ? 'Username must be at least 3 characters'
                           : undefined
                     }
                  />
                  <CodeBlock
                     code={`<Input 
  label="Username"
  placeholder="Enter username"
  error="Username must be at least 3 characters"
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
                  <Input
                     label="Disabled input"
                     placeholder="Cannot edit"
                     disabled
                     value="Read-only value"
                  />
                  <CodeBlock
                     code={`<Input 
  label="Disabled input"
  placeholder="Cannot edit"
  disabled
/>`}
                     language="tsx"
                  />
               </div>
            </div>

            {/* With Hint */}
            <div className="space-y-3">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  With Hint Text
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <Input
                     label="API Key"
                     placeholder="sk-..."
                     hint="Keep this secret and never commit to git"
                  />
                  <CodeBlock
                     code={`<Input 
  label="API Key"
  placeholder="sk-..."
  hint="Keep this secret and never commit to git"
/>`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Input Types */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Input Types</h2>
            <p className="text-[var(--color-text-secondary)]">Supports all HTML input types.</p>
            <div className="grid md:grid-cols-2 gap-4">
               <Input type="text" placeholder="text" />
               <Input type="email" placeholder="email@example.com" />
               <Input type="password" placeholder="password" />
               <Input type="number" placeholder="123" />
               <Input type="url" placeholder="https://example.com" />
               <Input type="tel" placeholder="+1 (555) 000-0000" />
               <Input type="date" />
               <Input type="time" />
            </div>
            <CodeBlock
               code={`<Input type="text" placeholder="text" />
<Input type="email" placeholder="email" />
<Input type="password" placeholder="password" />
<Input type="number" placeholder="number" />
<Input type="url" placeholder="url" />
<Input type="tel" placeholder="phone" />
<Input type="date" />
<Input type="time" />`}
               language="tsx"
            />
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
                     description: 'Label text displayed above the input',
                     required: false
                  },
                  {
                     name: 'error',
                     type: 'string',
                     default: 'undefined',
                     description: 'Error message shown below input with error styling',
                     required: false
                  },
                  {
                     name: 'hint',
                     type: 'string',
                     default: 'undefined',
                     description:
                        'Helper text displayed below input (hidden when error is present)',
                     required: false
                  },
                  {
                     name: 'icon',
                     type: 'ReactNode',
                     default: 'undefined',
                     description: 'Icon displayed on the left side of the input',
                     required: false
                  },
                  {
                     name: 'type',
                     type: 'string',
                     default: "'text'",
                     description: 'HTML input type (text, email, password, number, etc.)',
                     required: false
                  },
                  {
                     name: 'disabled',
                     type: 'boolean',
                     default: 'false',
                     description: 'Whether the input is disabled',
                     required: false
                  },
                  {
                     name: 'placeholder',
                     type: 'string',
                     default: 'undefined',
                     description: 'Placeholder text shown when input is empty',
                     required: false
                  }
               ]}
            />
            <p className="text-sm text-[var(--color-text-muted)]">
               Extends all standard HTML input attributes (onChange, onFocus, onBlur, value, etc.)
            </p>
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
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
                     Labels are properly associated with inputs using htmlFor/id
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Error messages announced to screen readers
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Focus visible with 2px ring in primary color
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Disabled state has reduced opacity and disabled cursor
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
               <Link href="/docs/components/textarea">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Textarea
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
