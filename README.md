# Next.js UI Framework

> **Complete UI component library** with cyber terminal design system

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## What is This?

A complete, production-ready UI framework built with Next.js 16. Features 18+ carefully crafted components, utility hooks, and a beautiful cyber-terminal design system. Built for developers who need a comprehensive component library without the bloat.

**18+ Components. 5 Hooks. One Design System.**

## Features

| Feature               | Description                                |
| --------------------- | ------------------------------------------ |
| **18+ UI Components** | Complete library from forms to feedback    |
| **5 Utility Hooks**   | Common patterns ready to use               |
| **Design System**     | Consistent colors, typography, animations  |
| **TypeScript**        | Fully typed for better DX                  |
| **Responsive**        | Mobile-first with Tailwind CSS             |
| **Accessible**        | ARIA attributes & keyboard navigation      |
| **Dark Theme**        | Cyber terminal aesthetic with neon accents |
| **Tree-shakeable**    | Import only what you need                  |

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000)

### Explore the Framework

-  **[/all-components](http://localhost:3000/all-components)** - Complete component library showcase
-  **[/components](http://localhost:3000/components)** - Basic examples
-  **[/demo](http://localhost:3000/demo)** - Interactive demo

## Component Library

### 📝 Form Components

-  **Button** - 4 variants, 3 sizes, loading states, icons
-  **Input** - Labels, hints, error states, required indicators
-  **Textarea** - Multi-line text input
-  **Checkbox** - Checkbox with label and description
-  **Radio** - Radio buttons with RadioGroup
-  **Select** - Dropdown select with options
-  **Switch** - Toggle switch (3 sizes)

### 📊 Data Display

-  **Card** - Container with header, title, content (3 variants)
-  **Badge** - Status indicators (6 variants, 3 sizes, optional dot)
-  **Avatar** - Profile images with fallback and status (6 sizes)
-  **AvatarGroup** - Multiple avatars with overlap and max count
-  **Tabs** - Tabbed interface with animated indicator

### 💬 Feedback

-  **Alert** - Notification banners (info, success, warning, error)
-  **Progress** - Progress bars with percentage (4 variants)
-  **Spinner** - Loading spinners (5 sizes, 2 variants)
-  **Skeleton** - Loading placeholders (text, circular, rectangular)
-  **Modal** - Dialog overlays with backdrop (5 sizes)
-  **Toast** - Toast notifications (via react-hot-toast)

### 🧭 Navigation

-  **Breadcrumb** - Navigation breadcrumb trail with home icon
-  **Pagination** - Page navigation with smart ellipsis

### 🎨 Layout

-  **Divider** - Visual separators (solid, dashed, gradient, with text)

## Utility Hooks

```tsx
// Detect clicks outside an element
import { useClickOutside } from '@/hooks/useClickOutside'
const ref = useRef(null)
useClickOutside(ref, () => setIsOpen(false))

// Responsive design helpers
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks/useMediaQuery'
const isMobile = useIsMobile() // < 768px

// Debounce value or callback
import { useDebounce, useDebouncedCallback } from '@/hooks/useDebounce'
const debouncedValue = useDebounce(searchTerm, 500)

// Persist state to localStorage
import { useLocalStorage } from '@/hooks/useLocalStorage'
const [value, setValue] = useLocalStorage('key', defaultValue)

// Detect element visibility
import { useOnScreen } from '@/hooks/useOnScreen'
const isVisible = useOnScreen(ref, { threshold: 0.5 })
```

## Component Examples

### Button

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Primary Action
</Button>

// With loading state
<Button variant="secondary" loading disabled>
  Loading...
</Button>

// With icon
<Button variant="outline">
  <PlusIcon className="w-4 h-4" />
  Add Item
</Button>
```

### Badge

```tsx
import { Badge } from '@/components/ui/Badge'

;<Badge variant="success" size="md" dot>
   Active
</Badge>
```

### Avatar

```tsx
import { Avatar, AvatarGroup } from '@/components/ui/Avatar';

<Avatar
  src="/avatar.jpg"
  alt="User"
  size="lg"
  status="online"
/>

<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" alt="User 1" />
  <Avatar src="/user2.jpg" alt="User 2" />
  <Avatar src="/user3.jpg" alt="User 3" />
</AvatarGroup>
```

### Modal

```tsx
import { Modal, ModalFooter } from '@/components/ui/Modal'

;<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action" size="md">
   <p>Are you sure you want to proceed?</p>

   <ModalFooter>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
         Cancel
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
         Confirm
      </Button>
   </ModalFooter>
</Modal>
```

### Alert

```tsx
import { Alert } from '@/components/ui/Alert'

;<Alert variant="success">Your changes have been saved successfully.</Alert>
```

### Progress

```tsx
import { Progress } from '@/components/ui/Progress'

;<Progress value={75} max={100} variant="primary" showLabel />
```

### Pagination

```tsx
import { Pagination } from '@/components/ui/Pagination'

;<Pagination
   currentPage={currentPage}
   totalPages={10}
   onPageChange={(page) => setCurrentPage(page)}
/>
```

## Design System

### Colors

Defined in `globals.css` as CSS variables:

```css
/* Core Colors */
--color-void: #000000          /* Pure black background */
--color-abyss: #0a0a0a         /* Surface backgrounds */
--color-deep: #1a1a1a          /* Borders and dividers */

/* Text Colors */
--color-text-primary: #ffffff   /* Primary text */
--color-text-secondary: #a0a0a0 /* Secondary text */
--color-text-dim: #666666       /* Dimmed text */

/* Neon Accents */
--color-neon-primary: #00ffff   /* Cyan - primary actions */
--color-neon-secondary: #0099ff /* Blue - secondary actions */

/* Semantic Colors */
--color-success: #00ff88        /* Success states */
--color-warning: #ffaa00        /* Warning states */
--color-error: #ff3366          /* Error states */
--color-info: #00ccff           /* Info states */
```

### Typography

-  **Sans**: Outfit (100-900 weight) - UI text
-  **Mono**: JetBrains Mono (400-700 weight) - Code

### Animations

-  `fadeIn` - Fade in with scale
-  `slideUp` - Slide up with fade
-  `pulse-glow` - Pulsing glow effect
-  `shimmer` - Shimmer loading effect

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── all-components/       # Complete library showcase
│   ├── components/           # Basic examples
│   ├── demo/                 # Interactive demo
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Design system + styles
├── components/
│   ├── layout/
│   │   └── Header.tsx        # Navigation header
│   └── ui/                   # 18+ UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Tabs.tsx
│       ├── Badge.tsx
│       ├── Avatar.tsx
│       ├── Checkbox.tsx
│       ├── Radio.tsx
│       ├── Select.tsx
│       ├── Switch.tsx
│       ├── Modal.tsx
│       ├── Alert.tsx
│       ├── Progress.tsx
│       ├── Spinner.tsx
│       ├── Skeleton.tsx
│       ├── Breadcrumb.tsx
│       ├── Pagination.tsx
│       └── Divider.tsx
└── hooks/                    # Utility hooks
    ├── useClickOutside.ts
    ├── useMediaQuery.ts
    ├── useDebounce.ts
    ├── useLocalStorage.ts
    └── useOnScreen.ts
```

## Use Cases

Perfect for:

-  🚀 SaaS applications
-  📊 Admin dashboards
-  🎮 Gaming platforms
-  💻 Developer tools
-  🔧 Technical products
-  🌐 Web applications
-  📱 Progressive Web Apps
-  🛠️ Internal tools

## Customization

### Change Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
   --color-neon-primary: #your-color;
   --color-success: #your-color;
   /* ... */
}
```

### Change Typography

Modify fonts in `src/app/layout.tsx`:

```tsx
import { Inter, Roboto_Mono } from 'next/font/google'
```

### Add Custom Components

Follow existing patterns in `src/components/ui/`:

```tsx
import React from 'react'

interface YourComponentProps {
   variant?: 'default' | 'custom'
   children: React.ReactNode
}

export const YourComponent: React.FC<YourComponentProps> = ({ variant = 'default', children }) => {
   return <div className={variant === 'default' ? '...' : '...'}>{children}</div>
}
```

## Roadmap

-  [ ] Table component with sorting and filtering
-  [ ] Tooltip component with smart positioning
-  [ ] Code Block with syntax highlighting
-  [ ] Container, Grid, Stack layout components
-  [ ] Dropdown/Menu component
-  [ ] MDX-based documentation
-  [ ] Storybook integration
-  [ ] NPM package distribution

## Tech Stack

-  **Framework**: Next.js 16 (App Router)
-  **UI**: React 19
-  **Language**: TypeScript 5
-  **Styling**: Tailwind CSS 4
-  **Icons**: Heroicons 2
-  **Headless UI**: @headlessui/react 2
-  **Notifications**: react-hot-toast 2

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Build for production     |
| `pnpm start` | Start production server  |
| `pnpm lint`  | Run ESLint               |

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
vercel
```

### Other Platforms

```bash
pnpm build
# Deploy the .next folder
```

## License

MIT License - Free to use for any project

## Credits

Built with:

-  [Next.js](https://nextjs.org/) - React framework
-  [React](https://react.dev/) - UI library
-  [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
-  [TypeScript](https://www.typescriptlang.org/) - Type safety
-  [Headless UI](https://headlessui.com/) - Accessible components
-  [Heroicons](https://heroicons.com/) - Icons
-  [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

---

**Need help?** Check out the [complete showcase](/all-components) to see all 18 components in action!
