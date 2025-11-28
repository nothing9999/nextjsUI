'use client';

import { Tab } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface TabItem {
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  badge?: string | number;
}

interface TabsProps {
  items: TabItem[];
  defaultIndex?: number;
  variant?: 'default' | 'pills' | 'underline';
}

export function Tabs({ items, defaultIndex = 0, variant = 'default' }: TabsProps) {
  const getTabListStyles = () => {
    switch (variant) {
      case 'pills':
        return 'flex gap-1.5 sm:gap-2 p-1 overflow-x-auto';
      case 'underline':
        return 'flex gap-4 sm:gap-6 border-b border-[var(--color-border)] overflow-x-auto';
      default:
        return 'flex p-1 gap-1 rounded-xl bg-[var(--color-deep)] border border-[var(--color-border)] overflow-x-auto';
    }
  };

  const getTabStyles = (selected: boolean) => {
    const base = `
      relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5
      text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-neon-primary)]
    `;

    switch (variant) {
      case 'pills':
        return `${base} rounded-lg ${
          selected
            ? 'bg-[var(--color-neon-primary)] text-white shadow-lg shadow-[var(--color-neon-primary)]/25'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
        }`;
      case 'underline':
        return `${base} pb-3 border-b-2 -mb-px ${
          selected
            ? 'border-[var(--color-neon-primary)] text-[var(--color-neon-primary)]'
            : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-subtle)]'
        }`;
      default:
        return `${base} rounded-lg ${
          selected
            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-[var(--color-neon-primary)] shadow-sm border border-[var(--color-neon-primary)]/30'
            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)]'
        }`;
    }
  };

  return (
    <Tab.Group defaultIndex={defaultIndex}>
      <Tab.List className={getTabListStyles()}>
        {items.map((item, index) => (
          <Tab key={index} as={Fragment}>
            {({ selected }) => (
              <button className={getTabStyles(selected)}>
                {item.icon && (
                  <span className={selected ? 'text-[var(--color-neon-primary)]' : ''}>
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={`
                      ml-1 px-1.5 py-0.5 rounded-full text-xs font-mono
                      ${selected
                        ? 'bg-[var(--color-neon-primary)]/20 text-[var(--color-neon-primary)]'
                        : 'bg-[var(--color-surface)] text-[var(--color-text-muted)]'
                      }
                    `}
                  >
                    {item.badge}
                  </span>
                )}
                {selected && variant === 'default' && (
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
                )}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-4 sm:mt-6">
        {items.map((item, index) => (
          <Tab.Panel
            key={index}
            className="focus:outline-none animate-fade-in"
          >
            {item.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
