'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
   const pathname = usePathname()

   const navLinks = [
      { href: '/', label: 'Home' },
      { href: '/docs', label: 'Docs' },
      { href: '/docs/icons', label: 'Icons' }
   ]

   return (
      <header className="sticky top-0 z-40 w-full">
         {/* Gradient line at top */}
         <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-neon-primary)]/50 to-transparent" />

         <div className="glass-strong border-b border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-14 sm:h-16">
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                     {/* Animated Logo Icon */}
                     <div className="relative">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
                           {/* Terminal bracket icon */}
                           <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                           </svg>
                        </div>
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </div>

                     {/* Brand text */}
                     <div className="flex flex-col">
                        <span className="font-semibold text-[var(--color-text-primary)] tracking-tight text-base sm:text-lg leading-none">
                           Cyber<span className="gradient-text">UI</span>
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-[var(--color-text-dim)] font-mono tracking-wider mt-0.5 hidden sm:block">
                           UI FRAMEWORK
                        </span>
                     </div>
                  </Link>

                  {/* Navigation */}
                  <nav className="flex items-center gap-1 sm:gap-2">
                     {navLinks.map((link) => (
                        <Link
                           key={link.href}
                           href={link.href}
                           className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                              pathname === link.href
                                 ? 'text-[var(--color-neon-primary)] bg-[var(--color-neon-primary)]/10 border border-[var(--color-neon-primary)]/30'
                                 : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]/50'
                           }`}
                        >
                           {link.label}
                        </Link>
                     ))}
                  </nav>
               </div>
            </div>
         </div>
      </header>
   )
}
