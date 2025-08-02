import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader } from 'lucide-react';

const spinnerVariants = cva('text-muted-foreground animate-spin', {
  variants: {
    size: {
      default: 'size-4',
      sm: 'size-2',
      lg: 'size-6',
      icon: 'size-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type Props = VariantProps<typeof spinnerVariants>;

export default function Spinner({ size }: Props) {
  return <Loader className={cn(spinnerVariants({ size }))} />;
}
