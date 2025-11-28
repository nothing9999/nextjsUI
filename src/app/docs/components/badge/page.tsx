'use client';

import { Badge } from '@/components/ui/Badge';
import { PropsTable } from '@/components/docs/PropsTable';
import { CodeBlock } from '@/components/docs/CodeBlock';
import Link from 'next/link';
import { CheckIcon, XMarkIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function BadgeDocs() {
  return (
    <div className="animate-fade-in-up space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
            Badge
          </h1>
          <Badge variant="primary">v1.0.0</Badge>
        </div>
        <p className="text-[var(--color-text-muted)] text-lg">
          Small status indicators for highlighting important information, counts, or labels.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4">
        <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">Usage</a>
        <a href="#variants" className="text-[var(--color-neon-primary)] hover:underline">Variants</a>
        <a href="#sizes" className="text-[var(--color-neon-primary)] hover:underline">Sizes</a>
        <a href="#dot" className="text-[var(--color-neon-primary)] hover:underline">With Dot</a>
        <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">API Reference</a>
      </div>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
        <CodeBlock 
          code={`import { Badge } from '@/components/ui/Badge';`}
          language="typescript"
        />
      </section>

      {/* Basic Usage */}
      <section id="usage" className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <Badge>Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
        </div>
        <CodeBlock 
          code={`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>`}
          language="tsx"
        />
      </section>

      {/* Variants */}
      <section id="variants" className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>
        <p className="text-[var(--color-text-secondary)]">
          Six semantic color variants for different use cases.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <CodeBlock 
          code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
          language="tsx"
        />
      </section>

      {/* Sizes */}
      <section id="sizes" className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Sizes</h2>
        <p className="text-[var(--color-text-secondary)]">
          Three size variants: small, medium (default), and large.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <Badge size="sm" variant="primary">Small</Badge>
          <Badge size="md" variant="primary">Medium</Badge>
          <Badge size="lg" variant="primary">Large</Badge>
        </div>
        <CodeBlock 
          code={`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
          language="tsx"
        />
      </section>

      {/* With Dot */}
      <section id="dot" className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Dot Indicator</h2>
        <p className="text-[var(--color-text-secondary)]">
          Add a <code className="text-[var(--color-neon-primary)]">dot</code> prop for status indicators.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge dot variant="primary">Online</Badge>
          <Badge dot variant="success">Active</Badge>
          <Badge dot variant="warning">Away</Badge>
          <Badge dot variant="error">Offline</Badge>
          <Badge dot variant="info">Idle</Badge>
        </div>
        <CodeBlock 
          code={`<Badge dot variant="success">Active</Badge>
<Badge dot variant="warning">Away</Badge>
<Badge dot variant="error">Offline</Badge>`}
          language="tsx"
        />
      </section>

      {/* With Icons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">With Icons</h2>
        <p className="text-[var(--color-text-secondary)]">
          Combine badges with icons for enhanced visual communication.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="success">
            <CheckIcon className="w-3 h-3" />
            <span>Verified</span>
          </Badge>
          <Badge variant="error">
            <XMarkIcon className="w-3 h-3" />
            <span>Failed</span>
          </Badge>
          <Badge variant="warning">
            <ClockIcon className="w-3 h-3" />
            <span>Pending</span>
          </Badge>
        </div>
        <CodeBlock 
          code={`import { CheckIcon, XMarkIcon, ClockIcon } from '@heroicons/react/24/outline';

<Badge variant="success">
  <CheckIcon className="w-3 h-3" />
  <span>Verified</span>
</Badge>

<Badge variant="error">
  <XMarkIcon className="w-3 h-3" />
  <span>Failed</span>
</Badge>

<Badge variant="warning">
  <ClockIcon className="w-3 h-3" />
  <span>Pending</span>
</Badge>`}
          language="tsx"
        />
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Common Use Cases</h2>
        <div className="space-y-8">
          {/* Status Indicators */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Status Indicators</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge dot variant="success">Deployed</Badge>
              <Badge dot variant="warning">Building</Badge>
              <Badge dot variant="error">Failed</Badge>
              <Badge dot variant="info">Queued</Badge>
            </div>
          </div>

          {/* Counts */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Counts & Numbers</h3>
            <div className="flex items-center gap-4">
              <span className="text-[var(--color-text-secondary)]">Notifications <Badge variant="error" size="sm">5</Badge></span>
              <span className="text-[var(--color-text-secondary)]">Messages <Badge variant="primary" size="sm">12</Badge></span>
              <span className="text-[var(--color-text-secondary)]">Updates <Badge variant="info" size="sm">3</Badge></span>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Categories & Tags</h3>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind</Badge>
            </div>
          </div>

          {/* Versions */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Version Labels</h3>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="primary">v2.0.0</Badge>
              <Badge variant="success">Stable</Badge>
              <Badge variant="warning">Beta</Badge>
              <Badge variant="info">New</Badge>
            </div>
          </div>
        </div>
        <CodeBlock 
          code={`// Status with dot
<Badge dot variant="success">Deployed</Badge>

// Count indicator
<span>Notifications <Badge variant="error" size="sm">5</Badge></span>

// Category tags
<Badge variant="secondary">TypeScript</Badge>
<Badge variant="secondary">React</Badge>

// Version labels
<Badge variant="primary">v2.0.0</Badge>
<Badge variant="success">Stable</Badge>`}
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
              description: 'Content of the badge (text, icons, or any React elements)',
              required: true,
            },
            {
              name: 'variant',
              type: "'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
              default: "'primary'",
              description: 'Color variant for semantic meaning',
              required: false,
            },
            {
              name: 'size',
              type: "'sm' | 'md' | 'lg'",
              default: "'md'",
              description: 'Size of the badge',
              required: false,
            },
            {
              name: 'dot',
              type: 'boolean',
              default: 'false',
              description: 'Display a colored dot indicator before content',
              required: false,
            },
          ]}
        />
      </section>

      {/* TypeScript */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
        <CodeBlock 
          code={`interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}`}
          language="typescript"
        />
      </section>

      {/* Styling */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Styling Details</h2>
        <div className="space-y-3 text-[var(--color-text-secondary)]">
          <p>
            <strong className="text-[var(--color-text-primary)]">Font:</strong> Monospace (JetBrains Mono) for code-like appearance
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">Border:</strong> Subtle border matching variant color
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">Background:</strong> Semi-transparent color (10% opacity)
          </p>
          <p>
            <strong className="text-[var(--color-text-primary)]">Shape:</strong> Fully rounded corners (rounded-full)
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Best Practices</h2>
        <div className="bg-[var(--color-surface)]/50 border border-[var(--color-border)] rounded-lg p-6 space-y-3">
          <div className="flex gap-3">
            <span className="text-[var(--color-neon-success)] font-bold">✓</span>
            <span className="text-[var(--color-text-secondary)]">Keep badge text short (1-3 words max)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--color-neon-success)] font-bold">✓</span>
            <span className="text-[var(--color-text-secondary)]">Use semantic variants consistently across your app</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--color-neon-success)] font-bold">✓</span>
            <span className="text-[var(--color-text-secondary)]">Use small size for inline badges within text</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--color-neon-success)] font-bold">✓</span>
            <span className="text-[var(--color-text-secondary)]">Combine with dot indicator for status badges</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--color-neon-error)] font-bold">✗</span>
            <span className="text-[var(--color-text-secondary)]">Don't use too many badges at once - they lose impact</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[var(--color-neon-error)] font-bold">✗</span>
            <span className="text-[var(--color-text-secondary)]">Avoid mixing dots and icons in the same badge</span>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Related Components</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs/components/alert">
            <Badge variant="secondary">Alert</Badge>
          </Link>
          <Link href="/docs/components/button">
            <Badge variant="secondary">Button</Badge>
          </Link>
          <Link href="/docs/components/card">
            <Badge variant="secondary">Card</Badge>
          </Link>
        </div>
      </section>
    </div>
  );
}
