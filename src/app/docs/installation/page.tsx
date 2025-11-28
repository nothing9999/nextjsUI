'use client'

import React from 'react'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { CheckCircleIcon, CommandLineIcon, CubeIcon } from '@heroicons/react/24/outline'

export default function InstallationPage() {
   return (
      <div className="animate-fade-in-up">
         <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Installation</h1>
         <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Get started with the UI Framework in minutes. Follow these steps to install and set up
            your project.
         </p>

         {/* Prerequisites */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               Prerequisites
            </h2>
            <div className="space-y-3">
               <div className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-surface)]">
                  <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                  <div>
                     <p className="text-[var(--color-text-primary)] font-medium">Node.js 18+</p>
                     <p className="text-sm text-[var(--color-text-secondary)]">
                        Download from{' '}
                        <a
                           href="https://nodejs.org"
                           target="_blank"
                           rel="noopener"
                           className="text-[var(--color-neon-primary)] hover:underline"
                        >
                           nodejs.org
                        </a>
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-3 p-4 rounded-lg bg-[var(--color-surface)]">
                  <CheckCircleIcon className="w-5 h-5 text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                  <div>
                     <p className="text-[var(--color-text-primary)] font-medium">pnpm 8+</p>
                     <p className="text-sm text-[var(--color-text-secondary)]">
                        Fast, disk space efficient package manager
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Step 1: Clone */}
         <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-neon-primary)] text-white font-bold">
                  1
               </div>
               <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  Clone the Repository
               </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
               Clone the framework to your local machine:
            </p>
            <CodeBlock
               code={`git clone https://github.com/nothing9999/nextjsUI.git my-project
cd my-project`}
               language="bash"
            />
         </div>

         {/* Step 2: Install Dependencies */}
         <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-neon-primary)] text-white font-bold">
                  2
               </div>
               <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  Install Dependencies
               </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
               Install all required packages using pnpm:
            </p>
            <CodeBlock code={`pnpm install`} language="bash" />
            <div className="mt-4 p-4 rounded-lg bg-[var(--color-info)]/10 border border-[var(--color-info)]/30">
               <p className="text-sm text-[var(--color-text-secondary)]">
                  💡 <strong>Tip:</strong> If you don't have pnpm installed, run:{' '}
                  <code className="text-[var(--color-neon-primary)]">npm install -g pnpm</code>
               </p>
            </div>
         </div>

         {/* Step 3: Run Dev Server */}
         <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
               <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-neon-primary)] text-white font-bold">
                  3
               </div>
               <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                  Start Development Server
               </h2>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
               Run the development server with hot reload:
            </p>
            <CodeBlock code={`pnpm dev`} language="bash" />
            <p className="text-sm text-[var(--color-text-secondary)] mt-4">
               Open{' '}
               <a
                  href="http://localhost:3000"
                  className="text-[var(--color-neon-primary)] hover:underline"
               >
                  http://localhost:3000
               </a>{' '}
               in your browser.
            </p>
         </div>

         {/* Included Dependencies */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-abyss)]">
                  <CubeIcon className="w-8 h-8 text-[var(--color-neon-primary)] mb-3" />
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                     18+ Components
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Production-ready UI components with TypeScript support
                  </p>
               </div>
               <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-abyss)]">
                  <CommandLineIcon className="w-8 h-8 text-[var(--color-neon-primary)] mb-3" />
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                     5 Utility Hooks
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Common React patterns ready to use
                  </p>
               </div>
            </div>
         </div>

         {/* Package.json Dependencies */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               Core Dependencies
            </h2>
            <CodeBlock
               code={`{
  "dependencies": {
    "next": "16.0.5",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "tailwindcss": "^4.0.0",
    "@heroicons/react": "^2.2.0",
    "@headlessui/react": "^2.2.9",
    "react-hot-toast": "^2.6.0"
  }
}`}
               language="json"
            />
         </div>

         {/* Build for Production */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               Build for Production
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
               Create an optimized production build:
            </p>
            <CodeBlock
               code={`pnpm build
pnpm start`}
               language="bash"
            />
         </div>

         {/* Next Steps */}
         <div className="p-8 rounded-xl bg-gradient-to-br from-[var(--color-neon-primary)]/10 via-transparent to-[var(--color-neon-secondary)]/10 border border-[var(--color-neon-primary)]/30">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">Next Steps</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Now that you have the framework installed, here's what to do next:
            </p>
            <div className="space-y-3">
               <a
                  href="/docs/quick-start"
                  className="flex items-center gap-3 p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <span className="text-2xl">📖</span>
                  <div>
                     <p className="font-semibold text-[var(--color-text-primary)]">
                        Read the Quick Start Guide
                     </p>
                     <p className="text-sm text-[var(--color-text-secondary)]">
                        Learn the basics in 5 minutes
                     </p>
                  </div>
               </a>
               <a
                  href="/docs/components/button"
                  className="flex items-center gap-3 p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <span className="text-2xl">🧩</span>
                  <div>
                     <p className="font-semibold text-[var(--color-text-primary)]">
                        Explore Components
                     </p>
                     <p className="text-sm text-[var(--color-text-secondary)]">
                        Browse the component library
                     </p>
                  </div>
               </a>
               <a
                  href="/docs/customization/theming"
                  className="flex items-center gap-3 p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <span className="text-2xl">🎨</span>
                  <div>
                     <p className="font-semibold text-[var(--color-text-primary)]">
                        Customize Your Theme
                     </p>
                     <p className="text-sm text-[var(--color-text-secondary)]">Make it your own</p>
                  </div>
               </a>
            </div>
         </div>
      </div>
   )
}
