'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      glow = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      relative inline-flex items-center justify-center font-medium
      rounded-lg transition-all duration-200 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-void)]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
      active:scale-[0.98]
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-cyan-500 to-blue-500
        text-white font-semibold
        hover:from-cyan-400 hover:to-blue-400
        focus-visible:ring-cyan-500
        shadow-lg shadow-cyan-500/25
        hover:shadow-cyan-500/40
      `,
      secondary: `
        bg-[var(--color-surface)] text-[var(--color-text-primary)]
        border border-[var(--color-border)]
        hover:bg-[var(--color-elevated)] hover:border-[var(--color-border-subtle)]
        focus-visible:ring-[var(--color-neon-primary)]
      `,
      outline: `
        bg-transparent text-[var(--color-neon-primary)]
        border border-[var(--color-neon-primary)]/50
        hover:bg-[var(--color-neon-primary)]/10 hover:border-[var(--color-neon-primary)]
        focus-visible:ring-[var(--color-neon-primary)]
      `,
      ghost: `
        bg-transparent text-[var(--color-text-secondary)]
        hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]
        focus-visible:ring-[var(--color-neon-primary)]
      `,
      danger: `
        bg-gradient-to-r from-red-600 to-rose-600
        text-white font-semibold
        hover:from-red-500 hover:to-rose-500
        focus-visible:ring-red-500
        shadow-lg shadow-red-500/25
      `,
      success: `
        bg-gradient-to-r from-emerald-600 to-green-600
        text-white font-semibold
        hover:from-emerald-500 hover:to-green-500
        focus-visible:ring-emerald-500
        shadow-lg shadow-emerald-500/25
      `,
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2',
    };

    const glowStyles = glow ? 'animate-pulse-glow' : '';

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glowStyles} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
