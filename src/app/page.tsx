'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import {
  CubeTransparentIcon,
  CommandLineIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const features = [
    {
      icon: CubeTransparentIcon,
      title: 'UI Components',
      description: 'Pre-built, customizable components with consistent design',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: CommandLineIcon,
      title: 'TypeScript',
      description: 'Fully typed with TypeScript for better developer experience',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: SparklesIcon,
      title: 'Design System',
      description: 'Cyber terminal theme with CSS variables and animations',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Next.js 16',
      description: 'Built on latest Next.js with App Router and React 19',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  const stats = [
    { label: 'Components', value: '5+' },
    { label: 'TypeScript', value: '100%' },
    { label: 'Bundle Size', value: '~150KB' },
  ];

  return (
    <div className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24 animate-fade-in">
          {/* Decorative element */}
          <div className="relative inline-flex items-center justify-center mb-6 sm:mb-8">
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-[var(--color-border)]">
              <CommandLineIcon className="w-12 h-12 sm:w-16 sm:h-16 text-[var(--color-neon-primary)]" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6 tracking-tight">
            Next<span className="gradient-text">UI</span> Template
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            A modern Next.js starter template with cyber terminal design system.
            <br className="hidden sm:block" />
            <span className="text-[var(--color-text-muted)]">
              Built with TypeScript, Tailwind CSS, and reusable UI components.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/components">
              <Button size="lg" className="w-full sm:w-auto">
                View Components
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Try Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20 animate-slide-up stagger-2">
          {features.map((feature, index) => (
            <Card key={index} className="group">
              <CardContent className="p-6 sm:p-8">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Card */}
        <Card variant="neon" className="animate-slide-up stagger-3">
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>Get started in seconds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Terminal-style code block */}
              <div className="rounded-xl bg-[var(--color-deep)] border border-[var(--color-border)] p-4 sm:p-6 font-mono text-sm overflow-x-auto">
                <div className="flex items-center gap-2 text-[var(--color-text-dim)] mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="ml-2">terminal</span>
                </div>
                <div className="space-y-2">
                  <p className="text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-neon-primary)]">$</span> npm install
                  </p>
                  <p className="text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-neon-primary)]">$</span> npm run dev
                  </p>
                  <p className="text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-success)]">✓</span> Ready on{' '}
                    <span className="text-[var(--color-neon-secondary)]">http://localhost:3000</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-[var(--color-text-muted)]">
                Then start building with the pre-made components or customize the design system to match your brand.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in">
          <p className="text-sm text-[var(--color-text-dim)]">
            Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4
          </p>
        </div>
      </div>
    </div>
  );
}
