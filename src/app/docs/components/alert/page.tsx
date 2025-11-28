'use client'

import { useState } from 'react'
import { Alert } from '@/components/ui/Alert'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function AlertDocs() {
   const [showDismissible, setShowDismissible] = useState(true)

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Alert
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Display important messages with contextual color coding and optional dismiss
               functionality.
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
            <a href="#titles" className="text-[var(--color-neon-primary)] hover:underline">
               With Titles
            </a>
            <a href="#dismissible" className="text-[var(--color-neon-primary)] hover:underline">
               Dismissible
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API Reference
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Alert } from '@/components/ui/Alert';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="space-y-4">
               <Alert variant="info">This is an informational alert message.</Alert>
               <CodeBlock
                  code={`<Alert variant="info">
  This is an informational alert message.
</Alert>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Variants */}
         <section id="variants" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>
            <p className="text-[var(--color-text-secondary)]">
               Four semantic variants with matching icons and color schemes.
            </p>
            <div className="space-y-4">
               <Alert variant="info">
                  <strong>Info:</strong> This is informational content for the user to be aware of.
               </Alert>

               <Alert variant="success">
                  <strong>Success:</strong> Your action has been completed successfully.
               </Alert>

               <Alert variant="warning">
                  <strong>Warning:</strong> Please review this important information before
                  proceeding.
               </Alert>

               <Alert variant="error">
                  <strong>Error:</strong> An error occurred while processing your request.
               </Alert>
            </div>
            <CodeBlock
               code={`// Info variant (default)
<Alert variant="info">
  <strong>Info:</strong> This is informational content.
</Alert>

// Success variant
<Alert variant="success">
  <strong>Success:</strong> Your action completed successfully.
</Alert>

// Warning variant
<Alert variant="warning">
  <strong>Warning:</strong> Please review before proceeding.
</Alert>

// Error variant
<Alert variant="error">
  <strong>Error:</strong> An error occurred.
</Alert>`}
               language="tsx"
            />
         </section>

         {/* With Titles */}
         <section id="titles" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Titles</h2>
            <p className="text-[var(--color-text-secondary)]">
               Add a <code className="text-[var(--color-neon-primary)]">title</code> prop for
               structured alerts.
            </p>
            <div className="space-y-4">
               <Alert variant="info" title="New Feature Available">
                  We've just released a new feature that you might find useful. Check out the
                  documentation to learn more about how to use it.
               </Alert>

               <Alert variant="success" title="Deployment Successful">
                  Your application has been successfully deployed to production. All systems are
                  operational.
               </Alert>

               <Alert variant="warning" title="Maintenance Scheduled">
                  System maintenance is scheduled for tonight at 2:00 AM UTC. Expected downtime is
                  30 minutes.
               </Alert>

               <Alert variant="error" title="Authentication Failed">
                  Your session has expired. Please log in again to continue using the application.
               </Alert>
            </div>
            <CodeBlock
               code={`<Alert variant="info" title="New Feature Available">
  We've just released a new feature that you might find useful.
  Check out the documentation to learn more.
</Alert>

<Alert variant="warning" title="Maintenance Scheduled">
  System maintenance is scheduled for tonight at 2:00 AM UTC.
</Alert>`}
               language="tsx"
            />
         </section>

         {/* Dismissible */}
         <section id="dismissible" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Dismissible Alerts
            </h2>
            <p className="text-[var(--color-text-secondary)]">
               Pass an <code className="text-[var(--color-neon-primary)]">onClose</code> callback to
               make alerts dismissible.
            </p>
            {showDismissible && (
               <Alert
                  variant="info"
                  title="Dismissible Alert"
                  onClose={() => setShowDismissible(false)}
               >
                  Click the X button to dismiss this alert. The alert will be removed from the DOM.
               </Alert>
            )}
            {!showDismissible && (
               <div className="p-4 border border-dashed border-[var(--color-border)] rounded-lg text-center">
                  <p className="text-[var(--color-text-muted)]">Alert dismissed</p>
                  <button
                     onClick={() => setShowDismissible(true)}
                     className="mt-2 text-sm text-[var(--color-neon-primary)] hover:underline"
                  >
                     Show again
                  </button>
               </div>
            )}
            <CodeBlock
               code={`const [show, setShow] = useState(true);

{show && (
  <Alert 
    variant="info" 
    title="Dismissible Alert"
    onClose={() => setShow(false)}
  >
    Click the X button to dismiss this alert.
  </Alert>
)}`}
               language="tsx"
            />
         </section>

         {/* With Complex Content */}
         <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Complex Content</h2>
            <p className="text-[var(--color-text-secondary)]">
               Alerts can contain any React content, including lists, links, and formatting.
            </p>
            <Alert variant="warning" title="Action Required">
               <div className="space-y-2">
                  <p>Please complete the following steps:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                     <li>Verify your email address</li>
                     <li>Complete your profile information</li>
                     <li>Accept the terms of service</li>
                  </ul>
                  <p className="mt-3">
                     <a
                        href="#"
                        className="text-[var(--color-neon-primary)] hover:underline font-medium"
                     >
                        Go to settings →
                     </a>
                  </p>
               </div>
            </Alert>
            <CodeBlock
               code={`<Alert variant="warning" title="Action Required">
  <div className="space-y-2">
    <p>Please complete the following steps:</p>
    <ul className="list-disc list-inside space-y-1">
      <li>Verify your email address</li>
      <li>Complete your profile</li>
      <li>Accept the terms</li>
    </ul>
    <a href="#" className="text-primary hover:underline">
      Go to settings →
    </a>
  </div>
</Alert>`}
               language="tsx"
            />
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>
            <PropsTable
               data={[
                  {
                     name: 'children',
                     type: 'ReactNode',
                     default: '-',
                     description: 'Content of the alert message',
                     required: true
                  },
                  {
                     name: 'variant',
                     type: "'info' | 'success' | 'warning' | 'error'",
                     default: "'info'",
                     description: 'Semantic variant with matching icon and color scheme',
                     required: false
                  },
                  {
                     name: 'title',
                     type: 'string',
                     default: 'undefined',
                     description: 'Optional title displayed above the message content',
                     required: false
                  },
                  {
                     name: 'onClose',
                     type: '() => void',
                     default: 'undefined',
                     description:
                        'Callback when dismiss button is clicked. Passing this prop makes the alert dismissible.',
                     required: false
                  }
               ]}
            />
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface AlertProps {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  onClose?: () => void;
}`}
               language="typescript"
            />
         </section>

         {/* Icon Mapping */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Icon Mapping</h2>
            <p className="text-[var(--color-text-secondary)]">
               Each variant automatically displays a contextual icon from Heroicons:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <code className="text-[var(--color-neon-primary)]">info</code>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                     InformationCircleIcon
                  </p>
               </div>
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <code className="text-[var(--color-neon-success)]">success</code>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">CheckCircleIcon</p>
               </div>
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <code className="text-[var(--color-neon-warning)]">warning</code>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                     ExclamationTriangleIcon
                  </p>
               </div>
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <code className="text-[var(--color-neon-error)]">error</code>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">XCircleIcon</p>
               </div>
            </div>
         </section>

         {/* Accessibility */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Accessibility</h2>
            <div className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg p-6 space-y-3">
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Icons provide visual context for sighted users
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Color is not the only indicator - icons and text convey meaning
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Dismiss button has hover state for keyboard users
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Sufficient color contrast for text readability
                  </span>
               </div>
            </div>
         </section>

         {/* Best Practices */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Best Practices</h2>
            <div className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg p-6 space-y-3">
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Use <code className="text-[var(--color-neon-primary)]">info</code> for neutral
                     information
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Use <code className="text-[var(--color-neon-success)]">success</code> for
                     confirmations and completed actions
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Use <code className="text-[var(--color-neon-warning)]">warning</code> for
                     non-critical but important notices
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Use <code className="text-[var(--color-neon-error)]">error</code> for critical
                     problems requiring immediate attention
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-error)] font-bold">✗</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Don't use alerts for every piece of information - reserve for important
                     messages
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
               <Link href="/docs/components/badge">
                  <Badge variant="secondary">Badge</Badge>
               </Link>
               <Link href="/docs/components/modal">
                  <Badge variant="secondary">Modal</Badge>
               </Link>
            </div>
         </section>
      </div>
   )
}
