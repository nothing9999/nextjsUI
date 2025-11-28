'use client';

import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-[var(--color-text-secondary)]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-3 py-2.5 rounded-lg
            bg-[var(--color-deep)]
            border transition-all duration-200
            text-[var(--color-text-primary)]
            placeholder-[var(--color-text-dim)]
            font-mono text-sm
            resize-none
            focus:outline-none focus:ring-2 focus:ring-[var(--color-neon-primary)]/20 focus:border-[var(--color-neon-primary)]
            ${error
              ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]/20'
              : 'border-[var(--color-border)]'
            }
            ${className}
          `}
          {...props}
        />
        {hint && !error && (
          <p className="text-xs text-[var(--color-text-dim)]">{hint}</p>
        )}
        {error && (
          <p className="text-xs text-[var(--color-error)] flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
