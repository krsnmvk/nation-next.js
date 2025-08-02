'use client';

import { useConvexAuth } from 'convex/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Spinner from './spinner';
import { SignInButton } from '@clerk/nextjs';

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium w-full">
        Your Ideas, Document & Plans, Unified. Welcom to{' '}
        <span className="underline font-semibold">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Notion is the connected workspace where <br /> better, faster work
        happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Link
          href="/documents"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <span>Enter Notion</span>
          <ArrowRight className="size-4" />
        </Link>
      )}
      {!isAuthenticated && !isLoading && (
        <Button type="button" variant="default" size="sm" asChild>
          <SignInButton mode="modal">Get Notion Free</SignInButton>
        </Button>
      )}
    </div>
  );
}
