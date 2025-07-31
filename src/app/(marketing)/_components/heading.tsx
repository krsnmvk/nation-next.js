import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Heading() {
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
      <Button type="button" variant="default" size="lg">
        <span>Enter Notion</span>
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
