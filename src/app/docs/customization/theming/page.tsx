'use client'

import React, { useState } from 'react'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { Button } from '@/components/ui/Button'

export default function ThemingPage() {
   const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'spacing'>('colors')

   const colorCategories = [
      {
         name: 'Core Colors',
         colors: [
            { name: '--color-void', value: '#030712', description: 'Pure black background' },
            { name: '--color-abyss', value: '#0a0f1a', description: 'Surface backgrounds' },
            { name: '--color-deep', value: '#111827', description: 'Borders and dividers' },
            { name: '--color-surface', value: '#1a2332', description: 'Elevated surfaces' }
         ]
      },
      {
         name: 'Text Colors',
         colors: [
            { name: '--color-text-primary', value: '#f1f5f9', description: 'Primary text' },
            { name: '--color-text-secondary', value: '#94a3b8', description: 'Secondary text' },
            { name: '--color-text-muted', value: '#64748b', description: 'Muted text' },
            { name: '--color-text-dim', value: '#475569', description: 'Dimmed text' }
         ]
      },
      {
         name: 'Neon Accents',
         colors: [
            {
               name: '--color-neon-primary',
               value: '#06b6d4',
               description: 'Primary accent (Cyan)'
            },
            { name: '--color-neon-secondary', value: '#22d3ee', description: 'Secondary accent' },
            { name: '--color-neon-tertiary', value: '#67e8f9', description: 'Tertiary accent' }
         ]
      },
      {
         name: 'Semantic Colors',
         colors: [
            { name: '--color-success', value: '#10b981', description: 'Success states' },
            { name: '--color-warning', value: '#f59e0b', description: 'Warning states' },
            { name: '--color-error', value: '#ef4444', description: 'Error states' },
            { name: '--color-info', value: '#3b82f6', description: 'Info states' }
         ]
      }
   ]

   return (
      <div className="animate-fade-in-up">
         <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Theming</h1>
         <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Customize the look and feel of your application with CSS variables. Change colors,
            typography, spacing, and more.
         </p>

         {/* Tabs */}
         <div className="flex gap-2 mb-8 border-b border-[var(--color-border)]">
            <button
               onClick={() => setActiveTab('colors')}
               className={`px-4 py-2 font-medium transition-all ${
                  activeTab === 'colors'
                     ? 'text-[var(--color-neon-primary)] border-b-2 border-[var(--color-neon-primary)]'
                     : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
               }`}
            >
               Colors
            </button>
            <button
               onClick={() => setActiveTab('typography')}
               className={`px-4 py-2 font-medium transition-all ${
                  activeTab === 'typography'
                     ? 'text-[var(--color-neon-primary)] border-b-2 border-[var(--color-neon-primary)]'
                     : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
               }`}
            >
               Typography
            </button>
            <button
               onClick={() => setActiveTab('spacing')}
               className={`px-4 py-2 font-medium transition-all ${
                  activeTab === 'spacing'
                     ? 'text-[var(--color-neon-primary)] border-b-2 border-[var(--color-neon-primary)]'
                     : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
               }`}
            >
               Spacing & Layout
            </button>
         </div>

         {/* Colors Tab */}
         {activeTab === 'colors' && (
            <div className="space-y-12">
               <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                     Color System
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                     All colors are defined as CSS variables in{' '}
                     <code className="text-[var(--color-neon-primary)]">src/app/globals.css</code>.
                     You can customize them to match your brand.
                  </p>

                  {colorCategories.map((category) => (
                     <div key={category.name} className="mb-8">
                        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                           {category.name}
                        </h3>
                        <div className="grid gap-4">
                           {category.colors.map((color) => (
                              <div
                                 key={color.name}
                                 className="flex items-center gap-4 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-abyss)] hover:border-[var(--color-neon-primary)] transition-colors"
                              >
                                 <div
                                    className="w-16 h-16 rounded-lg border-2 border-[var(--color-border)] flex-shrink-0"
                                    style={{ backgroundColor: color.value }}
                                 />
                                 <div className="flex-1">
                                    <code className="text-sm font-mono text-[var(--color-neon-primary)]">
                                       {color.name}
                                    </code>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                       {color.description}
                                    </p>
                                 </div>
                                 <code className="text-sm font-mono text-[var(--color-text-muted)]">
                                    {color.value}
                                 </code>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>

               <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                     Customizing Colors
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                     Edit the CSS variables in{' '}
                     <code className="text-[var(--color-neon-primary)]">src/app/globals.css</code>:
                  </p>
                  <CodeBlock
                     code={`:root {
  /* Change primary accent color */
  --color-neon-primary: #10b981; /* Green */
  
  /* Change background colors */
  --color-void: #000000;
  --color-abyss: #0a0a0a;
  
  /* Change text colors */
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
}`}
                     language="css"
                  />
               </div>

               <div className="p-6 rounded-xl bg-[var(--color-info)]/10 border border-[var(--color-info)]/30">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                     💡 Pro Tip
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Use CSS variables in your custom components to maintain consistency:
                     <code className="text-[var(--color-neon-primary)] ml-2">
                        color: var(--color-neon-primary)
                     </code>
                  </p>
               </div>
            </div>
         )}

         {/* Typography Tab */}
         {activeTab === 'typography' && (
            <div className="space-y-8">
               <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                     Typography System
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                     The framework uses two Google Fonts: <strong>Outfit</strong> for UI text and{' '}
                     <strong>JetBrains Mono</strong> for code.
                  </p>
               </div>

               <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                     Font Families
                  </h3>
                  <div className="space-y-4">
                     <div className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-abyss)]">
                        <code className="text-sm text-[var(--color-neon-primary)]">
                           font-sans (Outfit)
                        </code>
                        <p className="text-2xl mt-3" style={{ fontFamily: 'var(--font-outfit)' }}>
                           The quick brown fox jumps over the lazy dog
                        </p>
                        <p className="text-sm text-[var(--color-text-muted)] mt-2">
                           Used for: UI text, headings, body copy
                        </p>
                     </div>

                     <div className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-abyss)]">
                        <code className="text-sm text-[var(--color-neon-primary)]">
                           font-mono (JetBrains Mono)
                        </code>
                        <p className="text-lg mt-3 font-mono">const hello = "world";</p>
                        <p className="text-sm text-[var(--color-text-muted)] mt-2">
                           Used for: Code blocks, technical content
                        </p>
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                     Changing Fonts
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                     Update fonts in{' '}
                     <code className="text-[var(--color-neon-primary)]">src/app/layout.tsx</code>:
                  </p>
                  <CodeBlock
                     code={`import { Inter, Roboto_Mono } from 'next/font/google';

const sans = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const mono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${sans.variable} \${mono.variable}\`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}`}
                     language="tsx"
                  />
               </div>

               <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                     Type Scale
                  </h3>
                  <div className="space-y-4">
                     {[
                        { size: 'text-5xl', label: '5xl - 3rem', example: 'Hero Heading' },
                        { size: 'text-4xl', label: '4xl - 2.25rem', example: 'Page Title' },
                        { size: 'text-3xl', label: '3xl - 1.875rem', example: 'Section Heading' },
                        { size: 'text-2xl', label: '2xl - 1.5rem', example: 'Card Title' },
                        { size: 'text-xl', label: 'xl - 1.25rem', example: 'Large Text' },
                        { size: 'text-lg', label: 'lg - 1.125rem', example: 'Body Large' },
                        { size: 'text-base', label: 'base - 1rem', example: 'Body Text' },
                        { size: 'text-sm', label: 'sm - 0.875rem', example: 'Small Text' },
                        { size: 'text-xs', label: 'xs - 0.75rem', example: 'Caption' }
                     ].map((item) => (
                        <div
                           key={item.size}
                           className="flex items-center justify-between p-4 rounded-lg bg-[var(--color-surface)]"
                        >
                           <code className="text-sm text-[var(--color-text-muted)]">
                              {item.label}
                           </code>
                           <p className={item.size}>{item.example}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         )}

         {/* Spacing Tab */}
         {activeTab === 'spacing' && (
            <div className="space-y-8">
               <div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                     Spacing Scale
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                     Consistent spacing creates visual hierarchy and improves readability.
                  </p>
               </div>

               <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                     Spacing Variables
                  </h3>
                  <div className="space-y-3">
                     {[
                        { name: '--space-xs', value: '0.25rem', pixels: '4px' },
                        { name: '--space-sm', value: '0.5rem', pixels: '8px' },
                        { name: '--space-md', value: '1rem', pixels: '16px' },
                        { name: '--space-lg', value: '1.5rem', pixels: '24px' },
                        { name: '--space-xl', value: '2rem', pixels: '32px' },
                        { name: '--space-2xl', value: '3rem', pixels: '48px' }
                     ].map((space) => (
                        <div
                           key={space.name}
                           className="flex items-center gap-4 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-abyss)]"
                        >
                           <div
                              className="bg-[var(--color-neon-primary)] rounded"
                              style={{ width: space.value, height: space.value }}
                           />
                           <code className="text-sm font-mono text-[var(--color-neon-primary)] flex-1">
                              {space.name}
                           </code>
                           <span className="text-sm text-[var(--color-text-muted)]">
                              {space.value} ({space.pixels})
                           </span>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                     Border Radius
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     {[
                        { name: '--radius-sm', value: '0.375rem', label: 'Small' },
                        { name: '--radius-md', value: '0.5rem', label: 'Medium' },
                        { name: '--radius-lg', value: '0.75rem', label: 'Large' },
                        { name: '--radius-xl', value: '1rem', label: 'Extra Large' }
                     ].map((radius) => (
                        <div
                           key={radius.name}
                           className="p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-abyss)]"
                        >
                           <div
                              className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 mb-3"
                              style={{ borderRadius: radius.value }}
                           />
                           <code className="text-sm text-[var(--color-neon-primary)]">
                              {radius.name}
                           </code>
                           <p className="text-sm text-[var(--color-text-muted)] mt-1">
                              {radius.label} - {radius.value}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                     Usage Example
                  </h3>
                  <CodeBlock
                     code={`.my-component {
  /* Using spacing variables */
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  gap: var(--space-sm);
  
  /* Using border radius */
  border-radius: var(--radius-lg);
}`}
                     language="css"
                  />
               </div>
            </div>
         )}

         {/* Live Preview */}
         <div className="mt-12 p-8 rounded-xl border-2 border-[var(--color-neon-primary)]/30 bg-gradient-to-br from-[var(--color-neon-primary)]/5 to-transparent">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               Live Preview
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               See how components look with the current theme:
            </p>
            <div className="flex flex-wrap gap-4">
               <Button variant="primary">Primary</Button>
               <Button variant="secondary">Secondary</Button>
               <Button variant="outline">Outline</Button>
               <Button variant="ghost">Ghost</Button>
            </div>
         </div>
      </div>
   )
}
