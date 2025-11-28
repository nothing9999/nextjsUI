'use client'

import React, { useState, useMemo } from 'react'
import * as OutlineIcons from '@heroicons/react/24/outline'
import * as SolidIcons from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { Input } from '@/components/ui/Input'

type IconType = 'outline' | 'solid'

interface IconCategory {
   name: string
   icons: string[]
}

const categories: IconCategory[] = [
   {
      name: 'Actions',
      icons: [
         'ArrowDownIcon',
         'ArrowUpIcon',
         'ArrowLeftIcon',
         'ArrowRightIcon',
         'ChevronDownIcon',
         'ChevronUpIcon',
         'ChevronLeftIcon',
         'ChevronRightIcon',
         'PlusIcon',
         'MinusIcon',
         'XMarkIcon',
         'CheckIcon',
         'PencilIcon',
         'TrashIcon',
         'EyeIcon',
         'EyeSlashIcon'
      ]
   },
   {
      name: 'Communication',
      icons: [
         'ChatBubbleLeftIcon',
         'EnvelopeIcon',
         'PhoneIcon',
         'BellIcon',
         'PaperAirplaneIcon',
         'InboxIcon',
         'MegaphoneIcon'
      ]
   },
   {
      name: 'Media',
      icons: [
         'PhotoIcon',
         'VideoCameraIcon',
         'MusicalNoteIcon',
         'MicrophoneIcon',
         'PlayIcon',
         'PauseIcon',
         'StopIcon',
         'SpeakerWaveIcon'
      ]
   },
   {
      name: 'Files',
      icons: [
         'DocumentIcon',
         'FolderIcon',
         'ArchiveBoxIcon',
         'ClipboardDocumentIcon',
         'CloudArrowUpIcon',
         'CloudArrowDownIcon',
         'ArrowDownTrayIcon',
         'ArrowUpTrayIcon'
      ]
   },
   {
      name: 'Interface',
      icons: [
         'HomeIcon',
         'Cog6ToothIcon',
         'UserIcon',
         'UsersIcon',
         'HeartIcon',
         'StarIcon',
         'BookmarkIcon',
         'MagnifyingGlassIcon',
         'LockClosedIcon',
         'ShieldCheckIcon',
         'ExclamationTriangleIcon'
      ]
   },
   {
      name: 'Commerce',
      icons: [
         'ShoppingCartIcon',
         'CreditCardIcon',
         'CurrencyDollarIcon',
         'GiftIcon',
         'ReceiptPercentIcon',
         'BuildingStorefrontIcon'
      ]
   }
]

export default function IconsPage() {
   const [search, setSearch] = useState('')
   const [selectedCategory, setSelectedCategory] = useState<string>('all')
   const [iconType, setIconType] = useState<IconType>('outline')
   const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

   const iconSet = iconType === 'outline' ? OutlineIcons : SolidIcons

   const allIcons = useMemo(() => {
      return Object.keys(iconSet).filter((name) => name.endsWith('Icon'))
   }, [iconSet])

   const filteredIcons = useMemo(() => {
      let icons = allIcons

      // Filter by category
      if (selectedCategory !== 'all') {
         const category = categories.find((c) => c.name === selectedCategory)
         if (category) {
            icons = icons.filter((icon) => category.icons.includes(icon))
         }
      }

      // Filter by search
      if (search) {
         icons = icons.filter((icon) => icon.toLowerCase().includes(search.toLowerCase()))
      }

      return icons
   }, [allIcons, selectedCategory, search])

   const copyIconCode = async (iconName: string) => {
      const code = `import { ${iconName} } from '@heroicons/react/24/${iconType}';\n\n<${iconName} className="w-6 h-6" />`
      await navigator.clipboard.writeText(code)
      setCopiedIcon(iconName)
      setTimeout(() => setCopiedIcon(null), 2000)
   }

   return (
      <div className="animate-fade-in-up">
         {/* Header */}
         <div className="mb-8">
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3">Icon Guide</h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
               Browse and search through{' '}
               <span className="text-[var(--color-neon-primary)] font-semibold">
                  {allIcons.length}+ Heroicons
               </span>
               . Click any icon to copy the import code.
            </p>
         </div>

         {/* Installation */}
         <div className="mb-8 p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
               📦 Installation
            </h2>
            <div className="bg-[var(--color-abyss)] p-4 rounded-lg font-mono text-sm">
               <code className="text-[var(--color-neon-primary)]">pnpm add @heroicons/react</code>
            </div>
         </div>

         {/* Controls */}
         <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
               <Input
                  type="text"
                  placeholder="Search icons... (e.g., 'heart', 'user', 'arrow')"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
               />
               <MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Type Selector */}
            <div className="flex gap-2">
               <button
                  onClick={() => setIconType('outline')}
                  className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${
                 iconType === 'outline'
                    ? 'bg-[var(--color-neon-primary)] text-white'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }
            `}
               >
                  Outline
               </button>
               <button
                  onClick={() => setIconType('solid')}
                  className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${
                 iconType === 'solid'
                    ? 'bg-[var(--color-neon-primary)] text-white'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }
            `}
               >
                  Solid
               </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
               <button
                  onClick={() => setSelectedCategory('all')}
                  className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${
                 selectedCategory === 'all'
                    ? 'bg-[var(--color-neon-primary)]/20 text-[var(--color-neon-primary)] border border-[var(--color-neon-primary)]'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]'
              }
            `}
               >
                  All ({allIcons.length})
               </button>
               {categories.map((category) => (
                  <button
                     key={category.name}
                     onClick={() => setSelectedCategory(category.name)}
                     className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                   selectedCategory === category.name
                      ? 'bg-[var(--color-neon-primary)]/20 text-[var(--color-neon-primary)] border border-[var(--color-neon-primary)]'
                      : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]'
                }
              `}
                  >
                     {category.name}
                  </button>
               ))}
            </div>
         </div>

         {/* Results Count */}
         <div className="mb-4 text-sm text-[var(--color-text-muted)]">
            Showing {filteredIcons.length} icons
         </div>

         {/* Icons Grid */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filteredIcons.map((iconName) => {
               const Icon = iconSet[iconName as keyof typeof iconSet] as React.ComponentType<{
                  className?: string
               }>
               const isCopied = copiedIcon === iconName

               return (
                  <button
                     key={iconName}
                     onClick={() => copyIconCode(iconName)}
                     className="group relative p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-abyss)] hover:border-[var(--color-neon-primary)] hover:bg-[var(--color-surface)] transition-all duration-200 hover-lift"
                     title={`Click to copy ${iconName}`}
                  >
                     <div className="flex flex-col items-center gap-3">
                        <Icon className="w-8 h-8 text-[var(--color-text-secondary)] group-hover:text-[var(--color-neon-primary)] transition-colors" />
                        <span className="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] font-mono text-center break-all transition-colors">
                           {iconName.replace('Icon', '')}
                        </span>
                     </div>

                     {/* Copy Indicator */}
                     {isCopied && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-neon-primary)]/90 rounded-xl animate-scale-in">
                           <div className="flex flex-col items-center gap-2 text-white">
                              <CheckIcon className="w-8 h-8" />
                              <span className="text-xs font-semibold">Copied!</span>
                           </div>
                        </div>
                     )}
                  </button>
               )
            })}
         </div>

         {/* No Results */}
         {filteredIcons.length === 0 && (
            <div className="text-center py-16">
               <p className="text-[var(--color-text-muted)] text-lg">
                  No icons found matching "{search}"
               </p>
            </div>
         )}

         {/* Usage Example */}
         <div className="mt-12 p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
               💡 Usage Example
            </h2>
            <div className="space-y-4">
               <div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-2">Import an icon:</p>
                  <div className="bg-[var(--color-abyss)] p-4 rounded-lg font-mono text-sm">
                     <code className="text-[var(--color-text-primary)]">
                        <span className="text-[var(--color-neon-secondary)]">import</span> {'{ '}
                        <span className="text-[var(--color-neon-primary)]">HeartIcon</span>
                        {' }'} <span className="text-[var(--color-neon-secondary)]">from</span>{' '}
                        <span className="text-[var(--color-warning)]">
                           '@heroicons/react/24/outline'
                        </span>
                        ;
                     </code>
                  </div>
               </div>
               <div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                     Use in your component:
                  </p>
                  <div className="bg-[var(--color-abyss)] p-4 rounded-lg font-mono text-sm">
                     <code className="text-[var(--color-text-primary)]">
                        {'<'}
                        <span className="text-[var(--color-neon-primary)]">HeartIcon</span>{' '}
                        <span className="text-[var(--color-info)]">className</span>=
                        <span className="text-[var(--color-warning)]">"w-6 h-6 text-red-500"</span>
                        {' />'}
                     </code>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
