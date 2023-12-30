import * as React from "react";
import Link from "next/link";

import Ripple from "./ripple";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-base
  whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none 
   disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden`,
  {
    variants: {
      variant: {
        default: "bg-primary text-neutral-100 hover:bg-primary/80",
        secondary: "bg-secondary text-foreground hover:bg-secondary/80",
        outline: "border border-ring text-foreground bg-background hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 rounded-md px-2",
        lg: "h-11 rounded-md px-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    rippleColor?: string;
    href?: string;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, rippleColor, href, ...props }, ref) => {
    // use secondary itself as the rippleColor if variant == secondary and rippleColor
    // isn't specified
    if (variant == "secondary" && !rippleColor) rippleColor = "#7C72FF";

    const Component = href ? Link : "button";
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        {...(href ? { href } : {})}
        // @ts-ignore
        ref={ref}
        {...props}>
        <Ripple rippleColor={rippleColor} />
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
export default Button;
