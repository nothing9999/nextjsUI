import React from 'react'
import Link from 'next/link'
import {
   RocketLaunchIcon,
   CommandLineIcon,
   CubeIcon,
   SparklesIcon,
   ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function DocsPage() {
   const quickLinks = [
      {
         icon: RocketLaunchIcon,
         title: 'Installation',
         description: 'Get started by installing the UI Framework',
         href: '/docs/installation'
      },
      {
         icon: CommandLineIcon,
         title: 'Quick Start',
         description: 'Learn the basics in 5 minutes',
         href: '/docs/quick-start'
      },
      {
         icon: CubeIcon,
         title: 'Components',
         description: 'Browse all 19 UI components',
         href: '/docs/components/button'
      },
      {
         icon: SparklesIcon,
         title: 'Customization',
         description: 'Theming and styling guide',
         href: '/docs/customization/theming'
      }
   ]

   return (
      <div className="animate-fade-in-up">
         {/* Hero Section */}
         <div className="mb-12">
            <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-4 bg-gradient-to-r from-[var(--color-neon-primary)] via-[var(--color-neon-secondary)] to-[var(--color-neon-primary)] bg-clip-text text-transparent">
               Documentation
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
               A complete guide to building modern web applications with our UI Framework. 19
               production-ready components with full TypeScript support and accessibility features.
            </p>
         </div>

         {/* Quick Links Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {quickLinks.map((link, index) => {
               const Icon = link.icon
               return (
                  <Link
                     key={link.href}
                     href={link.href}
                     className={`group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-abyss)] hover:border-[var(--color-neon-primary)] transition-all duration-300 hover-lift animate-fade-in-up stagger-${
                        index + 1
                     }`}
                  >
                     <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[var(--color-neon-primary)]/10 text-[var(--color-neon-primary)] group-hover:bg-[var(--color-neon-primary)] group-hover:text-white transition-all duration-300">
                           <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                           <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-neon-primary)] transition-colors">
                              {link.title}
                           </h3>
                           <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                              {link.description}
                           </p>
                           <div className="flex items-center text-sm text-[var(--color-neon-primary)] font-medium">
                              <span>Learn more</span>
                              <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                           </div>
                        </div>
                     </div>
                  </Link>
               )
            })}
         </div>

         {/* Features Overview */}
         <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
               What you'll learn
            </h2>
            <div className="space-y-4">
               <div className="p-6 rounded-lg bg-[var(--color-surface)] border-l-4 border-[var(--color-success)]">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                     🎨 Design System
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                     Master our cyber-terminal design system with custom colors, typography,
                     animations, and spacing scales.
                  </p>
               </div>
               <div className="p-6 rounded-lg bg-[var(--color-surface)] border-l-4 border-[var(--color-info)]">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                     🧩 Component Library
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                     Explore 19 production-ready components with full TypeScript support,
                     accessibility features, and extensive customization options.
                  </p>
               </div>

               <div className="p-6 rounded-lg bg-[var(--color-surface)] border-l-4 border-[var(--color-neon-primary)]">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                     ⚡ Best Practices
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                     Discover performance optimization techniques, accessibility guidelines, and
                     code organization patterns.
                  </p>
               </div>
            </div>
         </div>

         {/* Getting Started Section */}
         <div className="p-8 rounded-xl bg-gradient-to-br from-[var(--color-neon-primary)]/10 via-transparent to-[var(--color-neon-secondary)]/10 border border-[var(--color-neon-primary)]/30">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
               Ready to get started?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
               Install the framework and start building beautiful interfaces in minutes.
            </p>
            <div className="flex gap-4">
               <Link
                  href="/docs/installation"
                  className="inline-flex items-center px-6 py-3 bg-[var(--color-neon-primary)] hover:bg-[var(--color-neon-secondary)] text-white font-medium rounded-lg transition-all duration-200 hover-lift"
               >
                  Get Started
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
               </Link>
               <Link
                  href="/docs/components/button"
                  className="inline-flex items-center px-6 py-3 border border-[var(--color-neon-primary)] text-[var(--color-neon-primary)] hover:bg-[var(--color-neon-primary)]/10 font-medium rounded-lg transition-all duration-200"
               >
                  View Components
               </Link>
            </div>
         </div>
      </div>
   )
}
