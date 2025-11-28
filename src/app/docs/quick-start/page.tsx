'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast'

export default function QuickStartPage() {
   const [name, setName] = useState('')
   const [liked, setLiked] = useState(false)

   return (
      <div className="animate-fade-in-up">
         <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Quick Start</h1>
         <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Learn the basics of the UI Framework in 5 minutes. This guide covers the fundamentals
            you need to start building.
         </p>

         {/* 1. Import Components */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               1. Importing Components
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
               All components are located in{' '}
               <code className="text-[var(--color-neon-primary)]">@/components/ui</code>:
            </p>
            <CodeBlock
               code={`import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';`}
               language="tsx"
            />
         </div>

         {/* 2. Using Components */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               2. Using Components
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
               Components are designed to be intuitive and easy to use:
            </p>
            <CodeBlock
               code={`export default function MyPage() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>Hello World</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a card component</p>
        </CardContent>
      </Card>
    </div>
  );
}`}
               language="tsx"
            />
         </div>

         {/* 3. Interactive Example */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               3. Interactive Example
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Try this interactive example that combines multiple components:
            </p>

            <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-abyss)] mb-6">
               <Card>
                  <CardHeader>
                     <div className="flex items-center justify-between">
                        <CardTitle>Quick Start Demo</CardTitle>
                        <Badge variant="success">Interactive</Badge>
                     </div>
                  </CardHeader>
                  <CardContent>
                     <div className="space-y-4">
                        <Input
                           label="Your Name"
                           placeholder="Enter your name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />

                        <div className="flex gap-3">
                           <Button
                              variant="primary"
                              onClick={() => toast.success(`Hello, ${name || 'Friend'}! 👋`)}
                           >
                              Say Hello
                           </Button>

                           <Button variant="outline" onClick={() => setLiked(!liked)}>
                              {liked ? (
                                 <HeartSolidIcon className="w-5 h-5 text-red-500" />
                              ) : (
                                 <HeartIcon className="w-5 h-5" />
                              )}
                           </Button>
                        </div>

                        {liked && (
                           <p className="text-sm text-[var(--color-text-secondary)] animate-fade-in-up">
                              ❤️ Thanks for the love!
                           </p>
                        )}
                     </div>
                  </CardContent>
               </Card>
            </div>

            <details className="group">
               <summary className="cursor-pointer text-[var(--color-neon-primary)] hover:underline mb-4">
                  View source code →
               </summary>
               <CodeBlock
                  code={`'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

export default function Demo() {
  const [name, setName] = useState('');
  const [liked, setLiked] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Quick Start Demo</CardTitle>
          <Badge variant="success">Interactive</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <div className="flex gap-3">
            <Button 
              variant="primary"
              onClick={() => toast.success(\`Hello, \${name || 'Friend'}! 👋\`)}
            >
              Say Hello
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <HeartSolidIcon className="w-5 h-5 text-red-500" />
              ) : (
                <HeartIcon className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          {liked && (
            <p className="text-sm animate-fade-in-up">
              ❤️ Thanks for the love!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}`}
                  language="tsx"
               />
            </details>
         </div>

         {/* 4. Using Hooks */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               4. Using Utility Hooks
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
               The framework includes 5 utility hooks for common patterns:
            </p>
            <CodeBlock
               code={`import { useDebounce } from '@/hooks/useDebounce';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function MyComponent() {
  // Debounce a value
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  
  // Responsive design
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Persist state
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  
  return (
    <div>
      <p>Search: {debouncedSearch}</p>
      <p>Is Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}`}
               language="tsx"
            />
         </div>

         {/* 5. Styling & Customization */}
         <div className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
               5. Styling & Customization
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-4">
               All colors are defined as CSS variables in{' '}
               <code className="text-[var(--color-neon-primary)]">globals.css</code>:
            </p>
            <CodeBlock
               code={`:root {
  /* Core Colors */
  --color-void: #030712;
  --color-abyss: #0a0f1a;
  --color-deep: #111827;
  
  /* Neon Accents */
  --color-neon-primary: #06b6d4;
  --color-neon-secondary: #22d3ee;
  
  /* Semantic Colors */
  --color-success: #10b981;
  --color-error: #ef4444;
}`}
               language="css"
            />
            <p className="text-sm text-[var(--color-text-secondary)] mt-4">
               💡 Learn more in the{' '}
               <a
                  href="/docs/customization/theming"
                  className="text-[var(--color-neon-primary)] hover:underline"
               >
                  Theming Guide
               </a>
            </p>
         </div>

         {/* Next Steps */}
         <div className="p-8 rounded-xl bg-gradient-to-br from-[var(--color-neon-primary)]/10 via-transparent to-[var(--color-neon-secondary)]/10 border border-[var(--color-neon-primary)]/30">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
               What's Next?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
               <a
                  href="/docs/components/button"
                  className="p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">
                     📚 Component API
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Explore detailed component documentation
                  </p>
               </a>
               <a
                  href="/docs/icons"
                  className="p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">🎨 Icons</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Browse 300+ Heroicons
                  </p>
               </a>
               <a
                  href="/docs/hooks/use-debounce"
                  className="p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">🪝 Hooks</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     Learn about utility hooks
                  </p>
               </a>
               <a
                  href="/all-components"
                  className="p-4 rounded-lg bg-[var(--color-surface)] hover:bg-[var(--color-elevated)] transition-colors"
               >
                  <p className="font-semibold text-[var(--color-text-primary)] mb-1">🎯 Examples</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                     See all components in action
                  </p>
               </a>
            </div>
         </div>
      </div>
   )
}
