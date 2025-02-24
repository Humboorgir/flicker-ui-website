// Credits: https://animata.design/docs/progress/spinner

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  outerSize?: string;
  childSize?: string;
}
export default function LoadingSpinner({ className, outerSize, childSize }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "m-2 h-7 w-7 animate-spin items-center justify-center rounded-full bg-gradient-to-bl from-background to-blue-500/70 p-0.5",
        className,
        outerSize
      )}>
      <div className={cn("h-4 w-4 rounded-full bg-white", childSize)} />
    </div>
  );
}
