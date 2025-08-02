'use client';

import { useConvexAuth } from 'convex/react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Logo from './logo';
import { ModeToggle } from './mode-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { SignInButton, UserButton } from '@clerk/nextjs';
import Spinner from './spinner';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const threshold = 10;

  function handleScroll() {
    if (window.scrollY > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        'z-10 bg-background dark:bg-[#1f1f1f] w-full fixed p-6 flex items-center top-0',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end flex items-center justify-between w-full gap-x-2">
        {isLoading && <Spinner size="default" />}
        {!isAuthenticated && !isLoading && (
          <>
            <Button type="button" variant="ghost" size="sm" asChild>
              <SignInButton mode="modal" />
            </Button>
            <Button type="button" variant="default" size="sm" asChild>
              <SignInButton mode="modal">Get Notion Free</SignInButton>
            </Button>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Link
              href="/documents"
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              Enter Notion
            </Link>
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
