'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, hint, icon, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs sm:text-sm font-medium text-[var(--color-text-secondary)] mb-1.5 sm:mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg
              bg-[var(--color-deep)]
              border border-[var(--color-border)]
              text-[var(--color-text-primary)]
              placeholder-[var(--color-text-dim)]
              font-mono text-xs sm:text-sm
              transition-all duration-200
              hover:border-[var(--color-border-subtle)]
              focus:outline-none focus:border-[var(--color-neon-primary)]
              focus:ring-2 focus:ring-[var(--color-neon-primary)]/20
              disabled:opacity-50 disabled:cursor-not-allowed
              ${icon ? 'pl-8 sm:pl-10' : ''}
              ${error ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {hint && !error && (
          <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[var(--color-text-dim)] font-mono">{hint}</p>
        )}
        {error && (
          <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[var(--color-error)] flex items-center gap-1">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Textarea variant
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs sm:text-sm font-medium text-[var(--color-text-secondary)] mb-1.5 sm:mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={`
            w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg
            bg-[var(--color-deep)]
            border border-[var(--color-border)]
            text-[var(--color-text-primary)]
            placeholder-[var(--color-text-dim)]
            font-mono text-xs sm:text-sm
            transition-all duration-200
            hover:border-[var(--color-border-subtle)]
            focus:outline-none focus:border-[var(--color-neon-primary)]
            focus:ring-2 focus:ring-[var(--color-neon-primary)]/20
            disabled:opacity-50 disabled:cursor-not-allowed
            resize-none
            ${error ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20' : ''}
            ${className}
          `}
          {...props}
        />
        {hint && !error && (
          <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[var(--color-text-dim)]">{hint}</p>
        )}
        {error && (
          <p className="mt-1 sm:mt-1.5 text-[10px] sm:text-xs text-[var(--color-error)] flex items-center gap-1">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
