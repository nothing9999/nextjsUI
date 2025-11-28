import React from 'react'
import { DocsSidebar } from '@/components/docs/DocsSidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex min-h-screen">
         <DocsSidebar />
         <main className="flex-1 max-w-5xl mx-auto px-8 py-12">{children}</main>
      </div>
   )
}
