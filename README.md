# Next.js UI Template

> **Modern Next.js starter template** with cyber terminal design system

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## What is This?

A clean, production-ready Next.js template with a modern cyber terminal design system. Built for developers who want to start projects quickly with a polished UI foundation.

**No bloat. Just beautiful, reusable components.**

## Features

| Feature | Description |
|---------|-------------|
| **UI Components** | Button, Card, Input, Textarea, Tabs with variants |
| **Design System** | Consistent colors, typography, and animations |
| **TypeScript** | Fully typed for better DX and maintainability |
| **Responsive** | Mobile-first design with Tailwind CSS |
| **Dark Theme** | Cyber terminal aesthetic with neon accents |
| **Toast Notifications** | Built-in with react-hot-toast |

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── components/page.tsx   # Component showcase
│   ├── demo/page.tsx         # Interactive demo
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Design system + styles
└── components/
    ├── layout/
    │   └── Header.tsx        # Navigation header
    └── ui/                   # Reusable UI components
        ├── Button.tsx
        ├── Card.tsx
        ├── Input.tsx
        ├── Tabs.tsx
        └── Textarea.tsx
```

## UI Components

### Button
4 variants (`primary`, `secondary`, `outline`, `ghost`), 3 sizes, loading states

### Card
3 variants (`default`, `neon`, with custom styling), fully composable

### Input & Textarea
Labels, error states, helper text, required field indicators

### Tabs
Animated tabs with icons, badges, and custom content

### Toast Notifications
Pre-styled with react-hot-toast (success, error, info)

## Design System

### Colors
Defined in `globals.css` as CSS variables:
- `--color-neon-primary`, `--color-neon-secondary`
- `--color-success`, `--color-warning`, `--color-error`
- `--color-surface`, `--color-deep`, `--color-void`

### Typography
- **Sans**: Outfit (Google Fonts)
- **Mono**: JetBrains Mono (Google Fonts)

### Animations
- Fade in, Slide up, Pulse glow
- Staggered animations with utility classes

## Customization

### Change Colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-neon-primary: #06b6d4; /* Change to your brand color */
  --color-success: #10b981;
  /* ... */
}
```

### Add Components
Place new components in `src/components/` and follow existing patterns

### Modify Layout
Edit `src/components/layout/Header.tsx` for navigation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons 2
- **Notifications**: react-hot-toast
- **Headless UI**: @headlessui/react

## Deploy

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Or use Vercel CLI
vercel
```

### Other Platforms
Build static output:
```bash
npm run build
# Deploy the .next folder
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
