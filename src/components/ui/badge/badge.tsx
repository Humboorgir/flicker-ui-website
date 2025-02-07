import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  `inline-flex items-center rounded-full border px-2.5 py-1 text-xs
   font-semibold transition-colors focus:outline-none focus:ring-2 
   focus:ring-ring focus:ring-offset-2 text-background`,
  {
    variants: {
      /**
       * The Badge style of your choice.
       */
      variant: {
        primary: "bg-primary",
        secondary: "bg-secondary text-foreground",
        success: "bg-green-600 dark:bg-green-400",
        danger: "bg-red-600 dark:bg-red-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type BadgeProps = React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div className={cn(badgeVariants({ variant, className }))} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { badgeVariants };
export default Badge;
