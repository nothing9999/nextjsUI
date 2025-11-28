'use client'

import { Tabs } from '@/components/ui/Tabs'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { HomeIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function TabsDocs() {
   const basicTabs = [
      {
         label: 'Tab 1',
         content: <div className="p-4 text-[var(--color-text-secondary)]">Content for Tab 1</div>
      },
      {
         label: 'Tab 2',
         content: <div className="p-4 text-[var(--color-text-secondary)]">Content for Tab 2</div>
      },
      {
         label: 'Tab 3',
         content: <div className="p-4 text-[var(--color-text-secondary)]">Content for Tab 3</div>
      }
   ]

   const iconTabs = [
      {
         label: 'Home',
         icon: <HomeIcon className="w-4 h-4" />,
         content: <div className="p-4 text-[var(--color-text-secondary)]">Home content</div>
      },
      {
         label: 'Profile',
         icon: <UserIcon className="w-4 h-4" />,
         content: <div className="p-4 text-[var(--color-text-secondary)]">Profile content</div>
      },
      {
         label: 'Settings',
         icon: <Cog6ToothIcon className="w-4 h-4" />,
         badge: 3,
         content: (
            <div className="p-4 text-[var(--color-text-secondary)]">
               Settings content with 3 notifications
            </div>
         )
      }
   ]

   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Tabs
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Tab component for organizing content into separate views with smooth transitions.
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
            <a href="#icons" className="text-[var(--color-neon-primary)] hover:underline">
               With Icons
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Tabs } from '@/components/ui/Tabs';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <Tabs items={basicTabs} />
            <CodeBlock
               code={`const items = [
  {
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>,
  },
  {
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>,
  },
  {
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>,
  },
];

<Tabs items={items} />`}
               language="tsx"
            />
         </section>

         {/* Variants */}
         <section id="variants" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Default</h3>
               <Tabs items={basicTabs} variant="default" />
               <CodeBlock code={`<Tabs items={items} variant="default" />`} language="tsx" />
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Pills</h3>
               <Tabs items={basicTabs} variant="pills" />
               <CodeBlock code={`<Tabs items={items} variant="pills" />`} language="tsx" />
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Underline</h3>
               <Tabs items={basicTabs} variant="underline" />
               <CodeBlock code={`<Tabs items={items} variant="underline" />`} language="tsx" />
            </div>
         </section>

         {/* With Icons & Badges */}
         <section id="icons" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               With Icons & Badges
            </h2>
            <Tabs items={iconTabs} variant="pills" />
            <CodeBlock
               code={`import { HomeIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const items = [
  {
    label: 'Home',
    icon: <HomeIcon className="w-4 h-4" />,
    content: <div>Home content</div>,
  },
  {
    label: 'Settings',
    icon: <Cog6ToothIcon className="w-4 h-4" />,
    badge: 3,
    content: <div>Settings with notifications</div>,
  },
];

<Tabs items={items} variant="pills" />`}
               language="tsx"
            />
         </section>

         {/* Default Tab */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Default Tab</h2>
            <Tabs items={basicTabs} defaultIndex={1} />
            <CodeBlock
               code={`<Tabs items={items} defaultIndex={1} /> // Tab 2 selected`}
               language="tsx"
            />
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Tabs</h3>
               <PropsTable
                  data={[
                     {
                        name: 'items',
                        type: 'TabItem[]',
                        default: '-',
                        description:
                           'Array of tab items with label, content, optional icon and badge',
                        required: true
                     },
                     {
                        name: 'defaultIndex',
                        type: 'number',
                        default: '0',
                        description: 'Index of the initially selected tab',
                        required: false
                     },
                     {
                        name: 'variant',
                        type: "'default' | 'pills' | 'underline'",
                        default: "'default'",
                        description: 'Visual style of the tabs',
                        required: false
                     }
                  ]}
               />
            </div>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">TabItem</h3>
               <PropsTable
                  data={[
                     {
                        name: 'label',
                        type: 'string',
                        default: '-',
                        description: 'Tab label text',
                        required: true
                     },
                     {
                        name: 'content',
                        type: 'ReactNode',
                        default: '-',
                        description: 'Content to display when tab is active',
                        required: true
                     },
                     {
                        name: 'icon',
                        type: 'ReactNode',
                        default: 'undefined',
                        description: 'Optional icon displayed before label',
                        required: false
                     },
                     {
                        name: 'badge',
                        type: 'string | number',
                        default: 'undefined',
                        description: 'Optional badge displayed after label',
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
               code={`interface TabItem {
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  badge?: string | number;
}

interface TabsProps {
  items: TabItem[];
  defaultIndex?: number;
  variant?: 'default' | 'pills' | 'underline';
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
                     Keyboard navigation (Tab, Arrow keys)
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
                     ARIA attributes for screen readers (uses Headless UI)
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Smooth transitions with fade-in animation
                  </span>
               </div>
            </div>
         </section>
      </div>
   )
}
