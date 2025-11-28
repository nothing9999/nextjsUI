'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
   HomeIcon,
   CubeIcon,
   SwatchIcon,
   SparklesIcon,
   BookOpenIcon,
   ChevronDownIcon,
   ChevronRightIcon
} from '@heroicons/react/24/outline'

interface DocSection {
   title: string
   icon: React.ComponentType<{ className?: string }>
   items: {
      title: string
      href: string
      badge?: string
   }[]
}

const docsSections: DocSection[] = [
   {
      title: 'Getting Started',
      icon: HomeIcon,
      items: [
         { title: 'Introduction', href: '/docs' },
         { title: 'Installation', href: '/docs/installation' },
         { title: 'Quick Start', href: '/docs/quick-start' }
      ]
   },
   {
      title: 'Components',
      icon: CubeIcon,
      items: [
         { title: 'Alert', href: '/docs/components/alert' },
         { title: 'Avatar', href: '/docs/components/avatar' },
         { title: 'Badge', href: '/docs/components/badge' },
         { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
         { title: 'Button', href: '/docs/components/button' },
         { title: 'Card', href: '/docs/components/card' },
         { title: 'Checkbox', href: '/docs/components/checkbox' },
         { title: 'Divider', href: '/docs/components/divider' },
         { title: 'Input', href: '/docs/components/input' },
         { title: 'Modal', href: '/docs/components/modal' },
         { title: 'Pagination', href: '/docs/components/pagination' },
         { title: 'Progress', href: '/docs/components/progress' },
         { title: 'Radio', href: '/docs/components/radio' },
         { title: 'Select', href: '/docs/components/select' },
         { title: 'Skeleton', href: '/docs/components/skeleton' },
         { title: 'Spinner', href: '/docs/components/spinner' },
         { title: 'Switch', href: '/docs/components/switch' },
         { title: 'Tabs', href: '/docs/components/tabs' },
         { title: 'Textarea', href: '/docs/components/textarea' }
      ]
   },
   {
      title: 'Customization',
      icon: SwatchIcon,
      items: [{ title: 'Theming', href: '/docs/customization/theming' }]
   },
   {
      title: 'Icons',
      icon: BookOpenIcon,
      items: [{ title: 'Icon Guide', href: '/docs/icons' }]
   }
]

export const DocsSidebar: React.FC = () => {
   const pathname = usePathname()
   const [expandedSections, setExpandedSections] = useState<Set<string>>(
      new Set(docsSections.map((s) => s.title))
   )

   const toggleSection = (title: string) => {
      const newExpanded = new Set(expandedSections)
      if (newExpanded.has(title)) {
         newExpanded.delete(title)
      } else {
         newExpanded.add(title)
      }
      setExpandedSections(newExpanded)
   }

   return (
      <aside className="w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto custom-scrollbar border-r border-[var(--color-border)]">
         <nav className="p-4 space-y-1">
            {docsSections.map((section) => {
               const isExpanded = expandedSections.has(section.title)
               const Icon = section.icon

               return (
                  <div key={section.title} className="mb-4">
                     <button
                        onClick={() => toggleSection(section.title)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] rounded-lg transition-all duration-200"
                     >
                        <div className="flex items-center gap-2">
                           <Icon className="w-4 h-4" />
                           <span>{section.title}</span>
                        </div>
                        {isExpanded ? (
                           <ChevronDownIcon className="w-4 h-4 transition-transform" />
                        ) : (
                           <ChevronRightIcon className="w-4 h-4 transition-transform" />
                        )}
                     </button>

                     {isExpanded && (
                        <div className="mt-1 ml-2 space-y-0.5 animate-fade-in-down">
                           {section.items.map((item) => {
                              const isActive = pathname === item.href

                              return (
                                 <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                          block px-3 py-2 text-sm rounded-lg transition-all duration-200
                          ${
                             isActive
                                ? 'text-[var(--color-neon-primary)] bg-[var(--color-neon-primary)]/10 border-l-2 border-[var(--color-neon-primary)] font-medium'
                                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] border-l-2 border-transparent'
                          }
                        `}
                                 >
                                    <div className="flex items-center justify-between">
                                       <span>{item.title}</span>
                                       {item.badge && (
                                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-neon-primary)]/20 text-[var(--color-neon-primary)]">
                                             {item.badge}
                                          </span>
                                       )}
                                    </div>
                                 </Link>
                              )
                           })}
                        </div>
                     )}
                  </div>
               )
            })}
         </nav>
      </aside>
   )
}
