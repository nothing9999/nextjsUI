'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Tabs } from '@/components/ui/Tabs';
import {
  CubeIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleToast = (type: 'success' | 'error' | 'info') => {
    switch (type) {
      case 'success':
        toast.success('Success! Operation completed.');
        break;
      case 'error':
        toast.error('Error! Something went wrong.');
        break;
      case 'info':
        toast('Info: This is an information message.');
        break;
    }
  };

  const buttonTab = {
    label: 'Buttons',
    content: (
      <div className="space-y-6">
        {/* Variants */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">With Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Button>
              <RocketLaunchIcon className="w-4 h-4 mr-2" />
              Launch
            </Button>
            <Button variant="outline">
              Save
              <CheckCircleIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* States */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">States</h3>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button>
              <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading
            </Button>
          </div>
        </div>
      </div>
    ),
  };

  const cardTab = {
    label: 'Cards',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Default Card */}
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>This is a default card variant</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-text-muted)]">
                Card content goes here. Perfect for displaying information in a structured way.
              </p>
            </CardContent>
          </Card>

          {/* Neon Card */}
          <Card variant="neon">
            <CardHeader>
              <CardTitle>Neon Card</CardTitle>
              <CardDescription>Card with neon glow effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-text-muted)]">
                This card has a neon border effect for emphasis on important content.
              </p>
            </CardContent>
          </Card>

          {/* Card with Icon */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                  <CubeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    Card with Icon
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Combine cards with icons for better visual hierarchy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Card */}
          <Card className="hover:border-[var(--color-neon-primary)]/50 transition-colors cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    Interactive Card
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Hover over this card to see the effect.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  };

  const inputTab = {
    label: 'Inputs',
    content: (
      <div className="space-y-6 max-w-2xl">
        {/* Basic Input */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Text Input</h3>
          <Input
            label="Username"
            placeholder="Enter your username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            hint="Choose a unique username"
          />
        </div>

        {/* Input with Error */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">With Error</h3>
          <Input
            label="Email"
            placeholder="Enter your email"
            error="Invalid email address"
          />
        </div>

        {/* Required Input */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Required Field</h3>
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        {/* Textarea */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">Textarea</h3>
          <Textarea
            label="Description"
            placeholder="Enter a description..."
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            rows={4}
          />
        </div>
      </div>
    ),
  };

  const toastTab = {
    label: 'Toasts',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
            Toast Notifications
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Click the buttons below to see toast notifications in action.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => handleToast('success')} variant="outline">
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              Success Toast
            </Button>
            <Button onClick={() => handleToast('error')} variant="outline">
              <ExclamationCircleIcon className="w-4 h-4 mr-2" />
              Error Toast
            </Button>
            <Button onClick={() => handleToast('info')} variant="outline">
              Info Toast
            </Button>
          </div>
        </div>
      </div>
    ),
  };

  const tabs = [buttonTab, cardTab, inputTab, toastTab];

  return (
    <div className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3">
            UI Components
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Explore all available components with examples and variations.
          </p>
        </div>

        {/* Tabs */}
        <div className="animate-slide-up">
          <Tabs items={tabs} />
        </div>

        {/* Color Palette */}
        <div className="mt-16 animate-slide-up stagger-2">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Neon Primary', var: '--color-neon-primary' },
              { name: 'Neon Secondary', var: '--color-neon-secondary' },
              { name: 'Success', var: '--color-success' },
              { name: 'Warning', var: '--color-warning' },
              { name: 'Error', var: '--color-error' },
              { name: 'Info', var: '--color-info' },
              { name: 'Surface', var: '--color-surface' },
              { name: 'Deep', var: '--color-deep' },
            ].map((color) => (
              <div key={color.var} className="group">
                <div
                  className="h-24 rounded-xl border border-[var(--color-border)] mb-2 transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `var(${color.var})` }}
                />
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {color.name}
                </p>
                <p className="text-xs text-[var(--color-text-dim)] font-mono">
                  {color.var}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
