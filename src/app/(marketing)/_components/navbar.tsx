'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Logo from './logo';
import { ModeToggle } from './mode-toggle';

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

  return (
    <div
      className={cn(
        'z-10 bg-background dark:bg-[#1f1f1f] w-full fixed p-6 flex items-center top-0',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end flex items-center justify-between w-full gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
}
