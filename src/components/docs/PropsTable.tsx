import React from 'react'

export interface PropDefinition {
   name: string
   type: string
   default?: string
   required?: boolean
   description: string
}

interface PropsTableProps {
   data: PropDefinition[]
}

export const PropsTable: React.FC<PropsTableProps> = ({ data }) => {
   return (
      <div className="overflow-x-auto border border-[var(--color-border)] rounded-lg">
         <table className="w-full">
            <thead className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
               <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                     Prop
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                     Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                     Default
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                     Description
                  </th>
               </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
               {data.map((prop) => (
                  <tr key={prop.name} className="hover:bg-[var(--color-surface)] transition-colors">
                     <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                           <code className="text-sm font-mono text-[var(--color-neon-primary)]">
                              {prop.name}
                           </code>
                           {prop.required && (
                              <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--color-error)]/20 text-[var(--color-error)] font-medium">
                                 Required
                              </span>
                           )}
                        </div>
                     </td>
                     <td className="px-4 py-3">
                        <code className="text-sm font-mono text-[var(--color-text-secondary)] bg-[var(--color-surface)] px-2 py-1 rounded">
                           {prop.type}
                        </code>
                     </td>
                     <td className="px-4 py-3">
                        {prop.default ? (
                           <code className="text-sm font-mono text-[var(--color-text-muted)]">
                              {prop.default}
                           </code>
                        ) : (
                           <span className="text-sm text-[var(--color-text-dim)]">-</span>
                        )}
                     </td>
                     <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                        {prop.description}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}
