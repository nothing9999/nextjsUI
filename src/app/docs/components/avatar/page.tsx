'use client'

import { Avatar, AvatarGroup } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { PropsTable } from '@/components/docs/PropsTable'
import { CodeBlock } from '@/components/docs/CodeBlock'
import Link from 'next/link'

export default function AvatarDocs() {
   return (
      <div className="animate-fade-in-up space-y-12">
         {/* Header */}
         <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
                  Avatar
               </h1>
               <Badge variant="primary">v1.0.0</Badge>
            </div>
            <p className="text-[var(--color-text-muted)] text-lg">
               Avatar component for displaying user profile pictures, initials, and status
               indicators.
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
            <a href="#status" className="text-[var(--color-neon-primary)] hover:underline">
               Status
            </a>
            <a href="#group" className="text-[var(--color-neon-primary)] hover:underline">
               Avatar Group
            </a>
            <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">
               API
            </a>
         </div>

         {/* Import */}
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
            <CodeBlock
               code={`import { Avatar, AvatarGroup } from '@/components/ui/Avatar';`}
               language="typescript"
            />
         </section>

         {/* Basic Usage */}
         <section id="usage" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex gap-4">
                  <Avatar src="https://i.pravatar.cc/150?img=1" alt="John Doe" />
                  <Avatar fallback="JD" />
                  <Avatar alt="Alice" />
               </div>
               <CodeBlock
                  code={`// With image
<Avatar 
  src="https://i.pravatar.cc/150?img=1"
  alt="John Doe"
/>

// With fallback text
<Avatar fallback="JD" />

// Auto-generated from alt
<Avatar alt="Alice" /> // Shows "A"`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Sizes */}
         <section id="sizes" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Sizes</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-end gap-4">
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2">xs</p>
                     <Avatar size="xs" fallback="XS" />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2">sm</p>
                     <Avatar size="sm" fallback="SM" />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2">md</p>
                     <Avatar size="md" fallback="MD" />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2">lg</p>
                     <Avatar size="lg" fallback="LG" />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2">xl</p>
                     <Avatar size="xl" fallback="XL" />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2">2xl</p>
                     <Avatar size="2xl" fallback="2X" />
                  </div>
               </div>
               <CodeBlock
                  code={`<Avatar size="xs" fallback="XS" />
<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" /> // default
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />
<Avatar size="2xl" fallback="2X" />`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Status Indicators */}
         <section id="status" className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
               Status Indicators
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="flex gap-6">
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2 text-center">
                        Online
                     </p>
                     <Avatar
                        src="https://i.pravatar.cc/150?img=2"
                        alt="User"
                        status="online"
                        size="lg"
                     />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2 text-center">Busy</p>
                     <Avatar
                        src="https://i.pravatar.cc/150?img=3"
                        alt="User"
                        status="busy"
                        size="lg"
                     />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2 text-center">Away</p>
                     <Avatar
                        src="https://i.pravatar.cc/150?img=4"
                        alt="User"
                        status="away"
                        size="lg"
                     />
                  </div>
                  <div>
                     <p className="text-xs text-[var(--color-text-muted)] mb-2 text-center">
                        Offline
                     </p>
                     <Avatar
                        src="https://i.pravatar.cc/150?img=5"
                        alt="User"
                        status="offline"
                        size="lg"
                     />
                  </div>
               </div>
               <CodeBlock
                  code={`<Avatar status="online" />  // Green dot
<Avatar status="busy" />    // Red dot
<Avatar status="away" />    // Yellow dot
<Avatar status="offline" /> // Gray dot`}
                  language="tsx"
               />
            </div>
         </section>

         {/* Avatar Group */}
         <section id="group" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Avatar Group</h2>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Default</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <AvatarGroup max={3}>
                     <Avatar src="https://i.pravatar.cc/150?img=10" alt="User 1" />
                     <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 2" />
                     <Avatar src="https://i.pravatar.cc/150?img=12" alt="User 3" />
                     <Avatar src="https://i.pravatar.cc/150?img=13" alt="User 4" />
                     <Avatar src="https://i.pravatar.cc/150?img=14" alt="User 5" />
                  </AvatarGroup>
                  <CodeBlock
                     code={`<AvatarGroup max={3}>
  <Avatar src="..." alt="User 1" />
  <Avatar src="..." alt="User 2" />
  <Avatar src="..." alt="User 3" />
  <Avatar src="..." alt="User 4" />
  <Avatar src="..." alt="User 5" />
</AvatarGroup>
// Shows 3 avatars + "+2"`}
                     language="tsx"
                  />
               </div>
            </div>

            <div className="space-y-4">
               <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Different Sizes
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <AvatarGroup size="sm" max={4}>
                        <Avatar fallback="A" />
                        <Avatar fallback="B" />
                        <Avatar fallback="C" />
                        <Avatar fallback="D" />
                        <Avatar fallback="E" />
                     </AvatarGroup>
                     <AvatarGroup size="lg" max={4}>
                        <Avatar fallback="A" />
                        <Avatar fallback="B" />
                        <Avatar fallback="C" />
                        <Avatar fallback="D" />
                        <Avatar fallback="E" />
                     </AvatarGroup>
                  </div>
                  <CodeBlock
                     code={`<AvatarGroup size="sm" max={4}>
  {/* avatars */}
</AvatarGroup>

<AvatarGroup size="lg" max={4}>
  {/* avatars */}
</AvatarGroup>`}
                     language="tsx"
                  />
               </div>
            </div>
         </section>

         {/* API Reference */}
         <section id="api" className="space-y-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Avatar</h3>
               <PropsTable
                  data={[
                     {
                        name: 'src',
                        type: 'string',
                        default: 'undefined',
                        description: 'Image source URL',
                        required: false
                     },
                     {
                        name: 'alt',
                        type: 'string',
                        default: '""',
                        description: 'Image alt text (also used to generate fallback initial)',
                        required: false
                     },
                     {
                        name: 'fallback',
                        type: 'string',
                        default: 'undefined',
                        description: 'Text to display when no image is provided',
                        required: false
                     },
                     {
                        name: 'size',
                        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
                        default: "'md'",
                        description: 'Size of the avatar',
                        required: false
                     },
                     {
                        name: 'status',
                        type: "'online' | 'offline' | 'busy' | 'away'",
                        default: 'undefined',
                        description: 'Status indicator shown on bottom-right corner',
                        required: false
                     }
                  ]}
               />
            </div>

            <div className="space-y-4">
               <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  AvatarGroup
               </h3>
               <PropsTable
                  data={[
                     {
                        name: 'children',
                        type: 'ReactNode',
                        default: '-',
                        description: 'Avatar components to display in the group',
                        required: true
                     },
                     {
                        name: 'max',
                        type: 'number',
                        default: '3',
                        description: 'Maximum number of avatars to show before truncating',
                        required: false
                     },
                     {
                        name: 'size',
                        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
                        default: "'md'",
                        description: 'Size of all avatars in the group',
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
               code={`interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
}

interface AvatarGroupProps {
  children: ReactNode;
  max?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
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
                     Images include alt text for screen readers
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Fallback initials when images fail to load
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Status indicators use semantic colors
                  </span>
               </div>
               <div className="flex gap-3">
                  <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                  <span className="text-[var(--color-text-secondary)]">
                     Avatar groups show remaining count with +N indicator
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
                  <Badge
                     variant="secondary"
                     className="hover:bg-[var(--color-neon-primary)]/10 cursor-pointer"
                  >
                     Badge
                  </Badge>
               </Link>
            </div>
         </section>
      </div>
   )
}
