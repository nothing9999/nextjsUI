'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'glass' | 'neon';
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', hover = false, children, ...props }, ref) => {
    const baseStyles = `
      rounded-xl transition-all duration-200
    `;

    const variants = {
      default: `
        bg-[var(--color-surface)]/80
        border border-[var(--color-border)]
      `,
      bordered: `
        bg-[var(--color-surface)]/60
        border border-[var(--color-border)]
        backdrop-blur-sm
      `,
      glass: `
        glass
        border border-[var(--color-border)]/50
      `,
      neon: `
        bg-[var(--color-surface)]/80
        border border-[var(--color-neon-primary)]/30
        shadow-lg shadow-[var(--color-neon-primary)]/10
      `,
    };

    const hoverStyles = hover ? `
      hover:border-[var(--color-neon-primary)]/50
      hover:shadow-lg hover:shadow-[var(--color-neon-primary)]/10
      hover:-translate-y-0.5
      cursor-pointer
    ` : '';

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export function CardHeader({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 pb-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-lg font-semibold text-[var(--color-text-primary)] tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm text-[var(--color-text-muted)] mt-1.5 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-6 pt-0 flex items-center gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
