import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

type ProgressProps = Omit<
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  "value"
> & { min?: number; max?: number; value: number | number[] };

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, min = 0, max = 100, ...props }, ref) => {
  const normalisedValue = Array.isArray(value) ? value : [min, value];
  const [valueA, valueB] = normalisedValue;
  const minval = Math.min(valueA, valueB);
  const maxval = Math.max(valueA, valueB);
  const progressValue = ((maxval - minval) / (max - min)) * 100;
  const progressOffset = (minval - min) / (max - min) * 100;
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full flex-1 rounded-full bg-primary transition-all",
          "mx-auto",
          "w-[50%]"
        )}
        style={{ transform: `translateX(${progressOffset}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
