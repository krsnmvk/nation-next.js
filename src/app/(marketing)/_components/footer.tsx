import { Button } from '@/components/ui/button';
import Logo from './logo';

export default function Footer() {
  return (
    <div className="w-full flex items-center p-6 z-10 bg-background dark:bg-[#1f1f1f]">
      <Logo />
      <div className="w-full md:mx-auto flex items-center md:justify-end gap-x-2 justify-between text-muted-foreground">
        <Button type="button" variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button type="button" variant="ghost" size="sm">
          Term & Conditions
        </Button>
      </div>
    </div>
  );
}
