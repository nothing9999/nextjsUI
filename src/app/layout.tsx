import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/layout/Header'
import './globals.css'

const firaCode = Fira_Code({
   variable: '--font-fira-code',
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700'],
   display: 'swap'
})

export const metadata: Metadata = {
   title: 'Next.js UI Template | Modern Cyber Design',
   description:
      'A modern Next.js UI template with cyber terminal design system, reusable components, and TypeScript'
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className="dark">
         <body className={`${firaCode.variable} antialiased min-h-screen`}>
            <div className="flex flex-col min-h-screen">
               <Header />
               <main className="flex-1">{children}</main>
            </div>
            <Toaster
               position="bottom-right"
               toastOptions={{
                  duration: 4000,
                  style: {
                     background: 'var(--color-surface)',
                     color: 'var(--color-text-primary)',
                     border: '1px solid var(--color-border)',
                     borderRadius: 'var(--radius-lg)',
                     fontFamily: 'var(--font-fira-code), monospace',
                     fontSize: '14px'
                  },
                  success: {
                     iconTheme: {
                        primary: 'var(--color-success)',
                        secondary: 'var(--color-surface)'
                     }
                  },
                  error: {
                     iconTheme: {
                        primary: 'var(--color-error)',
                        secondary: 'var(--color-surface)'
                     }
                  }
               }}
            />
         </body>
      </html>
   )
}
