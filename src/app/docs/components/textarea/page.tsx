'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/Textarea'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function TextareaDocs() {
   const [value, setValue] = useState('')
   const [errorValue, setErrorValue] = useState('')

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Textarea
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Multi-line text input with label, error states, and hints for longer form content.
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
               code={`import { Textarea } from '@/components/ui/Textarea';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <Textarea placeholder="Enter your message..." rows={4} />
               <CodeBlock
                  code={`<Textarea 
  placeholder="Enter your message..."
  rows={4}
/>`}
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
                  <Textarea
                     label="Description"
                     placeholder="Describe your project..."
                     rows={5}
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <Textarea
                     label="Feedback"
                     placeholder="Share your thoughts..."
                     hint="Your feedback helps us improve"
                     rows={4}
                  />
               </div>
               <CodeBlock
                  code={`<Textarea 
  label="Description"
  placeholder="Describe your project..."
  rows={5}
/>

<Textarea 
  label="Feedback"
  placeholder="Share your thoughts..."
  hint="Your feedback helps us improve"
  rows={4}
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
                  <Textarea
                     label="Message"
                     placeholder="Type at least 10 characters..."
                     value={errorValue}
                     onChange={(e) => setErrorValue(e.target.value)}
                     error={
                        errorValue.length > 0 && errorValue.length < 10
                           ? 'Message must be at least 10 characters'
                           : undefined
                     }
                     rows={3}
                  />
                  <CodeBlock
                     code={`<Textarea 
  label="Message"
  placeholder="Type at least 10 characters..."
  error="Message must be at least 10 characters"
  rows={3}
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
                  <Textarea
                     label="Disabled textarea"
                     placeholder="Cannot edit"
                     disabled
                     value="This content is read-only"
                     rows={3}
                  />
                  <CodeBlock
                     code={`<Textarea 
  label="Disabled textarea"
  placeholder="Cannot edit"
  disabled
  rows={3}
/>`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* Rows */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Row Heights</h2>
            <p className="text-[var(--color-text-secondary)]">
               Control height with the{' '}
               <code className="text-[var(--color-neon-primary)]">rows</code> prop.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
               <Textarea rows={2} placeholder="2 rows" />
               <Textarea rows={4} placeholder="4 rows" />
               <Textarea rows={6} placeholder="6 rows" />
            </div>
            <CodeBlock
               code={`<Textarea rows={2} placeholder="2 rows" />
<Textarea rows={4} placeholder="4 rows" />
<Textarea rows={6} placeholder="6 rows" />`}
               language="tsx"
            />
         </section>

         {/* Character Counter Example */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               With Character Counter
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                  <Textarea
                     label="Bio"
                     placeholder="Tell us about yourself..."
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                     hint={`${value.length}/150 characters`}
                     rows={4}
                  />
               </div>
               <CodeBlock
                  code={`const [value, setValue] = useState('');

<Textarea 
  label="Bio"
  placeholder="Tell us about yourself..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  hint={\`\${value.length}/150 characters\`}
  rows={4}
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
                     name: 'label',
                     type: 'string',
                     default: 'undefined',
                     description: 'Label text displayed above the textarea',
                     required: false
                  },
                  {
                     name: 'error',
                     type: 'string',
                     default: 'undefined',
                     description: 'Error message shown below textarea with error styling',
                     required: false
                  },
                  {
                     name: 'hint',
                     type: 'string',
                     default: 'undefined',
                     description:
                        'Helper text displayed below textarea (hidden when error is present)',
                     required: false
                  },
                  {
                     name: 'rows',
                     type: 'number',
                     default: '3',
                     description: 'Number of visible text rows',
                     required: false
                  },
                  {
                     name: 'disabled',
                     type: 'boolean',
                     default: 'false',
                     description: 'Whether the textarea is disabled',
                     required: false
                  },
                  {
                     name: 'placeholder',
                     type: 'string',
                     default: 'undefined',
                     description: 'Placeholder text shown when textarea is empty',
                     required: false
                  }
               ]}
            />
            <p className="text-sm text-[var(--color-text-muted)]">
               Extends all standard HTML textarea attributes (onChange, onFocus, onBlur, value,
               maxLength, etc.)
            </p>
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
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
                     Labels are properly associated with textareas
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
                     Focus visible with 2px ring
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Disabled state has reduced opacity
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
