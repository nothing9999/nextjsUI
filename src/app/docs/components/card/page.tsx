'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PropsTable } from '@/components/docs/PropsTable';
import { CodeBlock } from '@/components/docs/CodeBlock';
import Link from 'next/link';
import { SparklesIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function CardDocs() {
  return (
    <div className="animate-fade-in-up space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-neon-primary)] to-[var(--color-neon-secondary)] bg-clip-text text-transparent">
            Card
          </h1>
          <Badge variant="primary">v1.0.0</Badge>
        </div>
        <p className="text-[var(--color-text-muted)] text-lg">
          Versatile container component with multiple variants and composition pattern for flexible content layouts.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4">
        <a href="#usage" className="text-[var(--color-neon-primary)] hover:underline">Usage</a>
        <a href="#variants" className="text-[var(--color-neon-primary)] hover:underline">Variants</a>
        <a href="#composition" className="text-[var(--color-neon-primary)] hover:underline">Composition</a>
        <a href="#api" className="text-[var(--color-neon-primary)] hover:underline">API Reference</a>
      </div>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Import</h2>
        <CodeBlock 
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/Card';`}
          language="typescript"
        />
      </section>

      {/* Basic Usage */}
      <section id="usage" className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Basic Usage</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>
                A basic card with title and description
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-text-secondary)]">
                Card content goes here. Cards are flexible containers for grouping related content.
              </p>
            </CardContent>
          </Card>
          <CodeBlock 
            code={`<Card>
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
    <CardDescription>
      A basic card with title and description
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Variants */}
      <section id="variants" className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Variants</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard solid background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Default variant with solid background and subtle border.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
                <CardDescription>Enhanced border visibility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Bordered variant with backdrop blur effect.
                </p>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>Glassmorphism effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Glass variant with blur and transparency.
                </p>
              </CardContent>
            </Card>

            <Card variant="neon">
              <CardHeader>
                <CardTitle>Neon Card</CardTitle>
                <CardDescription>Neon glow accent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Neon variant with glowing border effect.
                </p>
              </CardContent>
            </Card>
          </div>

          <CodeBlock 
            code={`// Default variant
<Card variant="default">
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
    <CardDescription>Standard solid background</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Default variant with solid background.</p>
  </CardContent>
</Card>

// Bordered variant
<Card variant="bordered">
  <CardHeader>
    <CardTitle>Bordered Card</CardTitle>
  </CardHeader>
</Card>

// Glass variant
<Card variant="glass">
  <CardHeader>
    <CardTitle>Glass Card</CardTitle>
  </CardHeader>
</Card>

// Neon variant
<Card variant="neon">
  <CardHeader>
    <CardTitle>Neon Card</CardTitle>
  </CardHeader>
</Card>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Composition Pattern */}
      <section id="composition" className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Composition Pattern</h2>
        <p className="text-[var(--color-text-secondary)]">
          Card uses a composition pattern with sub-components for flexible layouts.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card variant="neon" hover>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>With all composition parts</CardDescription>
                </div>
                <SparklesIcon className="w-6 h-6 text-[var(--color-neon-primary)]" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-text-secondary)] mb-4">
                This card demonstrates all composition parts: header, title, description, content, and footer.
              </p>
              <div className="flex gap-2">
                <Badge variant="primary">Feature</Badge>
                <Badge variant="success">New</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="ghost">
                <HeartIcon className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button size="sm" variant="ghost">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </CardFooter>
          </Card>

          <CodeBlock 
            code={`<Card variant="neon" hover>
  <CardHeader>
    <div className="flex items-start justify-between">
      <div>
        <CardTitle>Feature Card</CardTitle>
        <CardDescription>
          With all composition parts
        </CardDescription>
      </div>
      <SparklesIcon className="w-6 h-6" />
    </div>
  </CardHeader>
  <CardContent>
    <p>Card content with badges</p>
    <div className="flex gap-2">
      <Badge variant="primary">Feature</Badge>
      <Badge variant="success">New</Badge>
    </div>
  </CardContent>
  <CardFooter>
    <Button size="sm" variant="ghost">
      <HeartIcon className="w-4 h-4 mr-2" />
      Like
    </Button>
    <Button size="sm" variant="ghost">
      <ShareIcon className="w-4 h-4 mr-2" />
      Share
    </Button>
  </CardFooter>
</Card>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Hover Effect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Interactive Hover</h2>
        <p className="text-[var(--color-text-secondary)]">
          Add <code className="text-[var(--color-neon-primary)]">hover</code> prop for interactive lift effect.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card hover variant="default">
            <CardHeader>
              <CardTitle>Hover Me</CardTitle>
              <CardDescription>Lifts on hover</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Hover over this card to see the lift animation.
              </p>
            </CardContent>
          </Card>

          <Card hover variant="glass">
            <CardHeader>
              <CardTitle>Glass Hover</CardTitle>
              <CardDescription>Interactive glass</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Glass variant with hover.
              </p>
            </CardContent>
          </Card>

          <Card hover variant="neon">
            <CardHeader>
              <CardTitle>Neon Hover</CardTitle>
              <CardDescription>Enhanced glow</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Neon glow intensifies on hover.
              </p>
            </CardContent>
          </Card>
        </div>
        <CodeBlock 
          code={`<Card hover variant="neon">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Hover to see lift effect</p>
  </CardContent>
</Card>`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section id="api" className="space-y-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">API Reference</h2>

        {/* Card Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Card Props</h3>
          <PropsTable
            data={[
              {
                name: 'variant',
                type: "'default' | 'bordered' | 'glass' | 'neon'",
                default: "'default'",
                description: 'Visual style variant of the card',
                required: false,
              },
              {
                name: 'hover',
                type: 'boolean',
                default: 'false',
                description: 'Enable hover lift animation and enhanced border glow',
                required: false,
              },
              {
                name: 'className',
                type: 'string',
                default: "''",
                description: 'Additional CSS classes to apply',
                required: false,
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Content of the card (typically composition components)',
                required: true,
              },
            ]}
          />
        </div>

        {/* CardHeader Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">CardHeader Props</h3>
          <PropsTable
            data={[
              {
                name: 'className',
                type: 'string',
                default: "''",
                description: 'Additional CSS classes (default: p-6 pb-0)',
                required: false,
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Header content (typically CardTitle and CardDescription)',
                required: true,
              },
            ]}
          />
        </div>

        {/* CardTitle Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">CardTitle Props</h3>
          <PropsTable
            data={[
              {
                name: 'className',
                type: 'string',
                default: "''",
                description: 'Additional CSS classes',
                required: false,
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Title text content',
                required: true,
              },
            ]}
          />
        </div>

        {/* CardDescription Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">CardDescription Props</h3>
          <PropsTable
            data={[
              {
                name: 'className',
                type: 'string',
                default: "''",
                description: 'Additional CSS classes',
                required: false,
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Description text content',
                required: true,
              },
            ]}
          />
        </div>

        {/* CardContent Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">CardContent Props</h3>
          <PropsTable
            data={[
              {
                name: 'className',
                type: 'string',
                default: "''",
                description: 'Additional CSS classes (default: p-6)',
                required: false,
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Main content of the card',
                required: true,
              },
            ]}
          />
        </div>

        {/* CardFooter Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">CardFooter Props</h3>
          <PropsTable
            data={[
              {
                name: 'className',
                type: 'string',
                default: "''",
                description: 'Additional CSS classes (default: p-6 pt-0 flex gap-3)',
                required: false,
              },
              {
                name: 'children',
                type: 'ReactNode',
                default: '-',
                description: 'Footer content (typically action buttons)',
                required: true,
              },
            ]}
          />
        </div>
      </section>

      {/* TypeScript */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">TypeScript</h2>
        <CodeBlock 
          code={`interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'glass' | 'neon';
  hover?: boolean;
}

// All composition components extend HTMLAttributes
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}`}
          language="typescript"
        />
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Best Practices</h2>
        <Card variant="bordered">
          <CardContent>
            <ul className="space-y-3 text-[var(--color-text-secondary)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                <span>Use composition components (CardHeader, CardContent, etc.) for consistent spacing and semantics</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                <span>Add <code className="text-[var(--color-neon-primary)]">hover</code> prop for clickable/interactive cards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                <span>Use <code className="text-[var(--color-neon-primary)]">glass</code> variant for overlays and layered interfaces</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-neon-success)] font-bold">✓</span>
                <span>Combine with Badge, Button for rich feature cards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-neon-error)] font-bold">✗</span>
                <span>Avoid nesting cards deeply - use variants for visual hierarchy instead</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Related */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Related Components</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs/components/button">
            <Badge variant="secondary">Button</Badge>
          </Link>
          <Link href="/docs/components/badge">
            <Badge variant="secondary">Badge</Badge>
          </Link>
          <Link href="/docs/components/divider">
            <Badge variant="secondary">Divider</Badge>
          </Link>
        </div>
      </section>
    </div>
  );
}
