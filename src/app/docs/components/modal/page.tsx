'use client'

import { useState } from 'react'
import { Modal, ModalFooter } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function ModalDocs() {
   const [showBasic, setShowBasic] = useState(false)
   const [showSizes, setShowSizes] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null)
   const [showFooter, setShowFooter] = useState(false)

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Modal
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Dialog overlays for displaying content above the page with backdrop and animations.
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
            <a href="#footer" className="text-[var(--color-neon-primary)] hover:underline">
               With Footer
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API Reference
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Modal, ModalFooter } from '@/components/ui/Modal';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="space-y-4">
               <Button onClick={() => setShowBasic(true)}>Open Modal</Button>
               <Modal
                  isOpen={showBasic}
                  onClose={() => setShowBasic(false)}
                  title="Modal Title"
                  description="This is a description of the modal content"
               >
                  <p className="text-[var(--color-text-secondary)]">
                     This is the modal content. It can contain any React components.
                  </p>
               </Modal>
               <CodeBlock
                  code={`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  description="This is a description"
>
  <p>Modal content goes here</p>
</Modal>`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Sizes */}
         <section id="sizes" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Sizes</h2>
            <p className="text-[var(--color-text-secondary)]">
               Five size variants: sm, md (default), lg, xl, and full.
            </p>
            <div className="flex flex-wrap gap-3">
               <Button size="sm" onClick={() => setShowSizes('sm')}>
                  Small
               </Button>
               <Button size="sm" onClick={() => setShowSizes('md')}>
                  Medium
               </Button>
               <Button size="sm" onClick={() => setShowSizes('lg')}>
                  Large
               </Button>
               <Button size="sm" onClick={() => setShowSizes('xl')}>
                  Extra Large
               </Button>
               <Button size="sm" onClick={() => setShowSizes('full')}>
                  Full Width
               </Button>
            </div>

            {showSizes && (
               <Modal
                  isOpen={true}
                  onClose={() => setShowSizes(null)}
                  title={`${showSizes.toUpperCase()} Modal`}
                  size={showSizes === 'full' ? 'full' : showSizes}
               >
                  <p className="text-[var(--color-text-secondary)]">
                     This is a {showSizes} sized modal. The content area adjusts based on the size
                     prop.
                  </p>
               </Modal>
            )}

            <CodeBlock
               code={`<Modal size="sm">Small modal</Modal>
<Modal size="md">Medium modal (default)</Modal>
<Modal size="lg">Large modal</Modal>
<Modal size="xl">Extra large modal</Modal>
<Modal size="full">Full width modal</Modal>`}
               language="tsx"
            />
         </section>

         {/* With Footer */}
         <section id="footer" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Footer</h2>
            <p className="text-[var(--color-text-secondary)]">
               Use <code className="text-[var(--color-neon-primary)]">ModalFooter</code> component
               for action buttons.
            </p>
            <Button onClick={() => setShowFooter(true)}>Open Modal with Footer</Button>

            <Modal
               isOpen={showFooter}
               onClose={() => setShowFooter(false)}
               title="Confirm Action"
               description="Are you sure you want to proceed?"
            >
               <p className="text-[var(--color-text-secondary)] mb-4">
                  This action cannot be undone. Please confirm your decision.
               </p>
               <ModalFooter>
                  <Button variant="outline" onClick={() => setShowFooter(false)}>
                     Cancel
                  </Button>
                  <Button onClick={() => setShowFooter(false)}>Confirm</Button>
               </ModalFooter>
            </Modal>

            <CodeBlock
               code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>This action cannot be undone.</p>
  <ModalFooter>
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button onClick={handleConfirm}>
      Confirm
    </Button>
  </ModalFooter>
</Modal>`}
               language="tsx"
            />
         </section>

         {/* Features */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     Portal Rendering
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Renders outside DOM hierarchy using React portals
                  </p>
               </div>
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     Keyboard Support
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Press Escape to close modal
                  </p>
               </div>
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     Body Scroll Lock
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Prevents body scrolling when modal is open
                  </p>
               </div>
               <div className="p-4 bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                     Backdrop Click
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Click outside modal to close
                  </p>
               </div>
            </div>
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-8">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  Modal Props
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'isOpen',
                        type: 'boolean',
                        default: '-',
                        description: 'Controls modal visibility',
                        required: true
                     },
                     {
                        name: 'onClose',
                        type: '() => void',
                        default: '-',
                        description: 'Callback fired when modal should close',
                        required: true
                     },
                     {
                        name: 'title',
                        type: 'string',
                        default: 'undefined',
                        description: 'Title displayed in modal header',
                        required: false
                     },
                     {
                        name: 'description',
                        type: 'string',
                        default: 'undefined',
                        description: 'Description text below title',
                        required: false
                     },
                     {
                        name: 'size',
                        type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
                        default: "'md'",
                        description: 'Maximum width of the modal',
                        required: false
                     },
                     {
                        name: 'showCloseButton',
                        type: 'boolean',
                        default: 'true',
                        description: 'Show X close button in header',
                        required: false
                     },
                     {
                        name: 'children',
                        type: 'ReactNode',
                        default: '-',
                        description: 'Modal content',
                        required: true
                     }
                  ]}
               />
            </div>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  ModalFooter Props
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'children',
                        type: 'ReactNode',
                        default: '-',
                        description: 'Footer content (typically buttons)',
                        required: true
                     }
                  ]}
               />
            </div>
         </section>

         {/* TypeScript */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
            <CodeBlock
               code={`interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
}

interface ModalFooterProps {
  children: ReactNode;
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
                     Escape key closes modal
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Click outside (backdrop) closes modal
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Body scroll is locked when modal is open
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Portal rendering prevents z-index issues
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
               <Link href="/docs/components/alert">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Alert
                  </Badge>
               </Link>
               <Link href="/docs/components/button">
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Button
                  </Badge>
               </Link>
            </div>
         </section>
      </div>
   )
}
