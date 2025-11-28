'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import toast from 'react-hot-toast';
import { PaperAirplaneIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

export default function DemoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success(`Welcome, ${name}! Check your email at ${email}`);
    setIsLoading(false);
    setName('');
    setEmail('');
  };

  const handleLike = () => {
    setLiked(!liked);
    toast(liked ? 'Removed from favorites' : 'Added to favorites!', {
      icon: liked ? '💔' : '❤️',
    });
  };

  const handleRating = (value: number) => {
    setRating(value);
    toast.success(`Rated ${value} stars!`);
  };

  return (
    <div className="flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3">
            Interactive Demo
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Try out the interactive features and see the components in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Demo */}
          <Card variant="neon" className="animate-slide-up">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 mr-2"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-4 h-4 mr-2" />
                      Submit
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Interactive Actions */}
          <Card className="animate-slide-up stagger-1">
            <CardHeader>
              <CardTitle>Interactive Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Like Button */}
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">
                  Like this template:
                </p>
                <Button
                  onClick={handleLike}
                  variant={liked ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {liked ? (
                    <HeartSolidIcon className="w-5 h-5 mr-2 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 mr-2" />
                  )}
                  {liked ? 'Liked!' : 'Like'}
                </Button>
              </div>

              {/* Star Rating */}
              <div>
                <p className="text-sm text-[var(--color-text-muted)] mb-3">
                  Rate this template:
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRating(value)}
                      className="text-2xl transition-transform hover:scale-110 active:scale-95"
                    >
                      {value <= rating ? (
                        <StarSolidIcon className="w-8 h-8 text-amber-500" />
                      ) : (
                        <StarIcon className="w-8 h-8 text-[var(--color-text-dim)]" />
                      )}
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-xs text-[var(--color-text-muted)] mt-2">
                    You rated this {rating} out of 5 stars
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="animate-slide-up stagger-2">
            <CardHeader>
              <CardTitle>Live Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-[var(--color-surface)]/50 border border-[var(--color-border)]">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {liked ? '1' : '0'}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">Likes</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--color-surface)]/50 border border-[var(--color-border)]">
                  <div className="text-2xl font-bold gradient-text mb-1">{rating}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Rating</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--color-surface)]/50 border border-[var(--color-border)]">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {name.length}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    Characters
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--color-surface)]/50 border border-[var(--color-border)]">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {email.includes('@') ? '✓' : '✗'}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    Valid Email
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card variant="neon" className="animate-slide-up stagger-3">
            <CardHeader>
              <CardTitle>About This Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
                <p>
                  This demo showcases interactive components with real-time state management.
                </p>
                <p>
                  All interactions trigger toast notifications and update the live stats in real-time.
                </p>
                <p className="text-xs text-[var(--color-text-dim)]">
                  Try filling out the form, clicking the like button, or rating with stars!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terminal Output */}
        <Card className="mt-6 animate-slide-up stagger-4">
          <CardContent className="p-4 sm:p-6">
            <div className="rounded-xl bg-[var(--color-deep)] border border-[var(--color-border)] p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[var(--color-text-dim)] mb-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <span className="ml-2">demo-output</span>
              </div>
              <div className="space-y-2">
                <p className="text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-neon-primary)]">$</span> State Updates:
                </p>
                <p className="text-[var(--color-text-muted)] pl-4">
                  <span className="text-[var(--color-success)]">•</span> Name: &quot;{name || 'empty'}&quot;
                </p>
                <p className="text-[var(--color-text-muted)] pl-4">
                  <span className="text-[var(--color-success)]">•</span> Email: &quot;{email || 'empty'}&quot;
                </p>
                <p className="text-[var(--color-text-muted)] pl-4">
                  <span className="text-[var(--color-success)]">•</span> Liked: {liked ? 'true' : 'false'}
                </p>
                <p className="text-[var(--color-text-muted)] pl-4">
                  <span className="text-[var(--color-success)]">•</span> Rating: {rating}/5
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
